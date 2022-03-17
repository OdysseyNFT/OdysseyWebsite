import {Button, CircularProgress, Fab, Stack, Typography} from "@mui/material";
import {useAddress, useWeb3Context} from "../../web3/web3-context";
import {useAppSelector} from "../../hooks/hooks";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useDispatch} from "react-redux";
import {approveTokenForMint, mint, mintAmountMinus, mintAmountPlus} from "../../store/app-slice";
import {Web3Params} from "../../store/utils/params";
import {Custom} from "../../styles/Theme";


function MintRoot() {
    const dispatch = useDispatch();

    const {provider, chainID} = useWeb3Context();
    const address = useAddress();

    const app = useAppSelector((state) => state.app)


    async function mintPlus() {
        await dispatch(mintAmountPlus())
    }

    async function mintMinus() {
        await dispatch(mintAmountMinus())
    }

    async function mintSale() {
        let p: Web3Params = {
            networkID: chainID, provider: provider, address: address
        }
        await dispatch(mint(p))
    }

    async function approve() {
        let p: Web3Params = {
            networkID: chainID, provider: provider, address: address
        }
        await dispatch(approveTokenForMint(p))
    }

    if (app.loading) {
        return (
            <CircularProgress/>
        )
    }

    return (
        <Stack alignItems="center" spacing={3}>
            <Typography variant={"h3"} color={Custom.vaderYellow}
                        sx={{textShadow: '3px 3px 3px #26a4fe'}}>{app.currentMinted} /
                55555 minted</Typography>
            <Stack direction={"row"} spacing={2} alignItems="center">
                <Fab size="small" aria-label="remove" onClick={mintMinus}
                     sx={{backgroundColor: Custom.vaderDarkPink}}>
                    <RemoveIcon htmlColor={Custom.vaderLightBlue}/>
                </Fab>

                <Typography variant={"h3"} color={"white"}>{app.mintAmount}</Typography>

                <Fab size="small" aria-label="add" onClick={mintPlus} sx={{backgroundColor: Custom.vaderDarkPink}}>
                    <AddIcon htmlColor={Custom.vaderLightBlue}/>
                </Fab>
            </Stack>

            <Stack direction={"row"} spacing={2}>

                {app.needUSDVApproval &&
                <Button variant="contained" onClick={approve}
                        sx={{
                            borderRadius: 12,
                            height: 40,
                            background: 'linear-gradient(to right, #26a4fe 40%, #3de7fc 95%)'
                        }}>
                    <Typography color={"white"}>
                        Approve USDV
                    </Typography>
                </Button>
                }
                {!app.needUSDVApproval &&
                <Button variant="contained" onClick={mintSale} hidden={app.needUSDVApproval}
                        sx={{
                            borderRadius: 12,
                            height: 40,
                            background: 'linear-gradient(to right, #26a4fe 40%, #3de7fc 95%)'
                        }}>
                    <Typography color={"white"}>
                        Mint for {app.mintTotalPrice.toFixed(0)} USDV
                    </Typography>
                </Button>
                }

            </Stack>

        </Stack>
    )

}

export default MintRoot
