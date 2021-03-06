import {NextPage} from "next";
import {Stack, Typography} from "@mui/material";
import Image from 'next/image'
import twitter from '../../../public/twitter.png';
import discord from '../../../public/discord.png';
import telegram from '../../../public/telegram.png';
import odyssey from '../../../public/logo_odyssey.png'
import eth from '../../../public/eth.png';
import {Custom} from "../../styles/Theme";

function Footer() {

    return (
        <Stack direction="column" justifyContent="center" height="100%"
               alignItems="center" paddingY={3} spacing={3} sx={{backgroundColor: "#101647"}}>


            <Typography textAlign={"center"} variant={"h3"} color={"white"}>
                We are nothing without our Community. <br/>
                Join us here:
            </Typography>

            <Stack direction={"row"} alignItems="center" justifyContent="center" spacing={3} paddingY={5}>
                <a href={"https://twitter.com/Odyssey_BSC"} target="_blank" rel="noreferrer">
                    <Image src={twitter} width={72} height={72}/>
                </a>
                <a href={"https://discord.gg/FwVZHbfzxQ"} target="_blank" rel="noreferrer">
                    <Image src={discord} width={72} height={72}/>
                </a>
                <a href={"https://t.me/odysseybsc"} target="_blank" rel="noreferrer">
                    <Image src={telegram} width={72} height={72}/>
                </a><a href={"https://mintcentral.odysseynft.io/index.html"} target="_blank" rel="noreferrer">
                    <Image src={odyssey} width={72} height={72}/>
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
