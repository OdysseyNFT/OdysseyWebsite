import {NextPage} from "next";
import {Grid, Hidden, Stack, Typography} from "@mui/material";
import Image from "next/image";
import vlogo from "../../../public/vader_rounded.png";
import {Box} from "@mui/system";
import {Custom} from "../../styles/Theme";
import MintRoot from "../mint/MintRoot";
import {useWeb3Context} from "../../web3/web3-context";
import ConnectButton from "../header/ConnectButton";
import ReactPlayer from "react-player";

function AboutSection() {
    const {connected} = useWeb3Context();

    return (
        <Stack paddingTop={6}
               alignItems="center" id="Mint" sx={{background: '#000'}}>

            {connected ?
                <Stack paddingBottom={12}>
                    <Typography textAlign={"center"} variant={"h1"}
                                color={Custom.vaderLightBlue} paddingBottom={4}
                                sx={{textShadow: '3px 3px 3px #ff00ba'}}>
                        MINT
                    </Typography>

                    <MintRoot/>
                </Stack>

                :
                <Stack paddingBottom={12} spacing={2}>
                    <Typography textAlign={"center"} variant={"h1"}
                                color={Custom.vaderLightBlue} paddingBottom={2}
                                sx={{textShadow: '3px 3px 3px #ff00ba'}}>
                        MINT
                    </Typography>

                    <Typography variant={"h3"} paddingBottom={2} color={"white"}>Connect wallet to mint</Typography>
                    <ConnectButton/>
                </Stack>
            }


            <Hidden mdDown>
                <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}} maxWidth={800}>




                </Grid>
            </Hidden>

            <Hidden mdUp>
                <Stack paddingX={2} spacing={2} paddingBottom={3}>

                </Stack>


            </Hidden>


        </Stack>
    )

}

export default AboutSection
