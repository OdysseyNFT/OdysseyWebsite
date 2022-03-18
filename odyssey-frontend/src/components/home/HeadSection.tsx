import {NextPage} from "next";
import {Hidden, Stack, Typography} from "@mui/material";
import Image from "next/image";
import {Box} from "@mui/system";
import {useWeb3Context} from "../../web3/web3-context";
import ReactPlayer from "react-player";
import Typist from 'react-typist';
import {Custom} from "../../styles/Theme";

function HeadSection() {
    const {connected} = useWeb3Context();

    return (
        <Stack height={"50vw"} justifyContent={"center"} alignItems={"end"} justifyItems={"end"}>
            <Box sx={{
                position: "absolute",
                width: "100vw",
                overflow: "auto",
                zIndex: -1
            }}
            >
                <video autoPlay loop muted width="100%">
                    <source src="./portal2.mp4" type="video/mp4"/>
                </video>
            </Box>
           

                <Stack  alignItems="center" id="Mint" width={400}
                       marginTop={{md: 10, lg: 20, xl: 40}}
                       paddingY={4} spacing={2}>
                  
                </Stack>

            

        </Stack>
    )

}

export default HeadSection
