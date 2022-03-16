import {NextPage} from "next";
import {Stack, Typography} from "@mui/material";
import Image from 'next/image'
import {Custom} from "../../styles/Theme";
import twitter from '../../public/twitter-white.png';

function Footer() {

    return (
        <Stack direction="column" justifyContent="center" height="100%"
               alignItems="center" paddingY={3} spacing={3} sx={{backgroundColor: "#000"}}>


            <Typography textAlign={"center"} variant={"h3"} color={"white"}>
                We are nothing without our Community. <br/>
                Join us here:
            </Typography>

            <Stack direction={"row"} alignItems="center" justifyContent="center" spacing={3} paddingY={5}>
                <a href={"https://twitter.com/invaders_army"} target="_blank" rel="noreferrer">
                    <img src="../../public/twitter-white.png" width={72} height={72}/>
                </a>
                <a href={"https://discord.com/invite/vaderprotocol"} target="_blank" rel="noreferrer">
                    <img src="/public/discord-xxl.png" width={72} height={72}/>
                </a>
                <a href={"https://t.me/vaderprotocol"} target="_blank" rel="noreferrer">
                    <img src="/public/telegram-white.png" width={72} height={72}/>
                </a>
            </Stack>


            <Typography textAlign={"center"} variant={"caption"} color={"white"}>
                Copyright 2022 OdysseyNFT<br/>
                All trademark and copyright belong to their respective owners.<br/>
                Project built on Binance Smart Chain
            </Typography>

        </Stack>
    )

}

export default Footer