import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Typography} from "@mui/material";
import {DEFAULD_NETWORK} from "../../web3/blockchain";
import {useWeb3Context} from "../../web3/web3-context";
import {Custom} from "../../styles/Theme";

function ConnectMenu() {
    const {connect, disconnect, connected, web3, providerChainID, checkWrongNetwork} = useWeb3Context();
    const dispatch = useDispatch();
    const [isConnected, setConnected] = useState(connected);

    let buttonText = "Connect Wallet";
    let clickFunc: any = connect;
    let error = false;

    if (isConnected) {
        buttonText = "Disconnect";
        clickFunc = disconnect;
    }

    if (isConnected && providerChainID !== DEFAULD_NETWORK) {
        buttonText = "Wrong network";
        error = true
        clickFunc = () => {
            checkWrongNetwork();
        };
    }

    useEffect(() => {
        setConnected(connected);
    }, [web3, connected]);

    return (
        <Button
            variant="contained"
            color={error ? 'error' : 'primary'}
            sx={{borderRadius: 2, borderColor: 'white', borderWidth: 10, height: 40}}
            onClick={() => clickFunc()}>
            <Typography variant={"button"}>{buttonText}</Typography>
        </Button>
    );
}

export default ConnectMenu;
