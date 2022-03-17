import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Web3Params} from "./utils/params";
import {setAll} from "./utils/set-all";
import {getAddresses} from "../web3/contractsAddresses";
import {ethers} from "ethers";
import {default as VaderNFT} from '../abi/VaderNFT.json';
import {default as ERC20} from '../abi/ERC20.json';
import {RootState} from "./store";
import {toast} from "react-toastify";
import {sleep} from "./utils/sleep";
import axios from "axios";

export interface AppSlice {
    loading: boolean,
    currentMinted: number,
    mintAmount: number,
    mintTotalPrice: number,
    mintPrice: number,
    needUSDVApproval: boolean,
    xvaderProjectBalance: string,
    xvderUserShare: string,
    xvaderUsdTotal: string,
    xvaderUSerTotal: string,
    showShare: boolean
}

const initialState: AppSlice = {
    loading: true,
    currentMinted: 0,
    mintAmount: 1,
    mintTotalPrice: 0,
    mintPrice: 0,
    needUSDVApproval: true,
    xvaderProjectBalance: "",
    xvderUserShare: "",
    xvaderUsdTotal: "",
    xvaderUSerTotal: "",
    showShare: false
}

export const loadApp = createAsyncThunk("app/init",
    async (params: Web3Params): Promise<AppSlice> => {

        const contracts = getAddresses(params.networkID);

        let currentMinted = 0
        let needUSDVApproval = true
        let mintPrice = 100
        let usdvAllowance = 0
        let projectBalance = ""
        let userShare = 0
        let xvaderUsdTotal = 0
        let xvaderUserTotal = 0

        try {
            const vaderContract = new ethers.Contract(contracts.VADER_NFT, VaderNFT.abi, params.provider)
            const usdvContract = new ethers.Contract(contracts.USDV, ERC20.abi, params.provider)

            usdvAllowance = await usdvContract.allowance(params.address, vaderContract.address)
            const minted = await vaderContract.totalSupply()
            currentMinted = minted.toNumber()

            // royalties
            const xvaderAddress = contracts.XVADER
            const xvader = new ethers.Contract(xvaderAddress, ERC20.abi, params.provider);
            const pb = await xvader.balanceOf(contracts.ROYALTIES_WALLET)
            projectBalance = parseFloat(ethers.utils.formatEther(pb)).toFixed(2)

            const nftBalance = await vaderContract.balanceOf(params.address)
            userShare = (parseFloat(ethers.utils.formatEther(pb)) / minted) * nftBalance

            axios.get('https://api.coingecko.com/api/v3/simple/price?ids=vader-protocol&vs_currencies=usd').then((resp: any) => {

                let vaderPrice = resp.data['vader-protocol']['usd']
                let xVaderPrice = 1.01541 * vaderPrice
                xvaderUsdTotal = xVaderPrice * parseFloat(ethers.utils.formatEther(pb))
                xvaderUserTotal = xVaderPrice * userShare
            });

        } catch (e) {
            console.log(e)
        }

        return {
            loading: true,
            currentMinted: currentMinted,
            mintAmount: initialState.mintAmount,
            mintTotalPrice: mintPrice,
            mintPrice: mintPrice,
            needUSDVApproval: usdvAllowance <= 0,
            xvaderProjectBalance: projectBalance,
            xvderUserShare: userShare + "",
            xvaderUsdTotal: xvaderUsdTotal + "",
            xvaderUSerTotal: xvaderUserTotal + "",
            showShare: false
        }
    }
)


export const approveTokenForMint = createAsyncThunk("app/approveUSDV",
    async (params: Web3Params, thunkApi) => {
        const contracts = getAddresses(params.networkID)
        const signer = params.provider.getSigner()
        let state = thunkApi.getState() as RootState

        const tokenContract = new ethers.Contract(contracts.USDV, ERC20.abi, signer)

        let tx;

        try {
            toast.loading('Approving USDV')
            tx = await tokenContract.approve(contracts.VADER_NFT, ethers.constants.MaxUint256)
            await tx.wait()
        } catch (e) {
            console.log(e)
            toast.dismiss()
            toast.error('approve failed')
            return
        }
        await sleep(5);
        await thunkApi.dispatch(loadApp({
            address: params.address,
            networkID: params.networkID,
            provider: params.provider
        }))
        toast.dismiss()
        toast.success('USDV approved')
        return;
    })


export const mint = createAsyncThunk("app/mint",
    async (params: Web3Params, thunkApi) => {
        const contracts = getAddresses(params.networkID);
        const state = thunkApi.getState() as RootState

        try {
            toast.loading('Minting InVader')

            const royalKingdomContract = new ethers.Contract(contracts.VADER_NFT, VaderNFT.abi, params.provider.getSigner())
            let price = ethers.utils.parseUnits(state.app.mintTotalPrice.toFixed(2), 'ether');
            let tx;
            tx = await royalKingdomContract.mint(state.app.mintAmount)
            await tx.wait()

        } catch (e) {
            console.log(e)
            toast.dismiss()
            toast.error('Minting Failed')
            return
        }

        await sleep(5);
        await thunkApi.dispatch(loadApp({
            address: params.address,
            networkID: params.networkID,
            provider: params.provider
        }))


        toast.dismiss()
        toast.success('Minting success')
    })


const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        mintAmountPlus: (state) => {
            if (state.mintAmount < 10)
                state.mintAmount += 1

            state.mintTotalPrice = (state.mintAmount * state.mintPrice)
        },
        mintAmountMinus: (state) => {
            if (state.mintAmount > 1)
                state.mintAmount -= 1


            state.mintTotalPrice = (state.mintAmount * state.mintPrice)
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loadApp.pending, state => {
                state.loading = true
            })
            .addCase(loadApp.fulfilled, (state, action) => {
                setAll(state, action.payload)
                state.loading = false
            })
            .addCase(loadApp.rejected, (state, {error}) => {
                state.loading = false
                console.log(error)
            })
            .addCase(mint.fulfilled, state => {
                state.showShare = true
            })
    }
})
export const {mintAmountPlus, mintAmountMinus} = appSlice.actions

export default appSlice.reducer
