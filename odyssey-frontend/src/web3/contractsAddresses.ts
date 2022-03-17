import {Networks} from "./blockchain";

const LOCALHOST = {
    VADER_NFT: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
    USDV: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    XVADER: "",
    ROYALTIES_WALLET: ""
}

const FANTOM_TESTNET = {
    VADER_NFT: "0x2e9A8a1358D92F1e6a4Ee646032EF55a9f2669F3",
    USDV: "0xB3BAFd904Ecf15Bd5AcD5F6FeDA9430BB11555E9",
    XVADER: "0xB3BAFd904Ecf15Bd5AcD5F6FeDA9430BB11555E9",
    ROYALTIES_WALLET: "0x2e9A8a1358D92F1e6a4Ee646032EF55a9f2669F3"
}

const MAINNET = {
    VADER_NFT: "0x507633A6076DC92B2587acEE01349c21e5F3B985",
    USDV: "0xea3Fb6f331735252E7Bfb0b24b3B761301293DBe",
    XVADER: "0x665ff8fAA06986Bd6f1802fA6C1D2e7d780a7369",
    ROYALTIES_WALLET: ""
}


export const getAddresses = (networkID: number) => {
    if (networkID === Networks.LOCALHOST) return LOCALHOST;
    if (networkID === Networks.MAINNET) return MAINNET;
    if (networkID === Networks.FTM_TESTNET) return FANTOM_TESTNET;

    throw Error("Network don't support");
};