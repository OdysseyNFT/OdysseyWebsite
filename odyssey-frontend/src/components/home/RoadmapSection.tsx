import {NextPage} from "next";
import {Stack, Typography} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import {Custom} from "../../styles/Theme";
import Typist from 'react-typist';

function RoadmapSection() {

    return (
        <Stack paddingTop={6}
               alignItems="center" id="Roadmap" width={"100%"} paddingX={2}>
            <Stack alignItems="center" spacing={6} width={"100%"}>
                <Typography variant={"h1"} color={Custom.vaderLightPink} sx={{textShadow: '3px 3px 3px #26a4fe'}}>
                    ROADMAP
                </Typography>

                {/* Q1 */}
                <Stack width={"100%"} alignItems="center">
                    <Stack maxWidth={800} spacing={1}>
                        <Typography variant={"h4"} color={"white"}>Mission 1 - Q1 2022</Typography>

                        <Stack direction={"row"} alignItems="center" spacing={1}>
                            <CircleIcon htmlColor={Custom.vaderDarkPink}/>
                            <Typography variant={"body1"}>
                                Mission objective is to have fun and pump the price of $VADER by buying the token from
                                the open market, freeze it until the end of the year and then distribute it to the
                                holders of the NFTs.
                                <br/>
                                Receive Incentives from the Vader Protocol Team, including: Reduced USDV minting fees
                                for NFT holders, fees for burning VADER for USDV.
                            </Typography>
                        </Stack>
                        <Stack direction={"row"} alignItems="center" spacing={1}>
                            <CircleIcon htmlColor={Custom.vaderDarkPink}/>
                            <Typography variant={"body1"}>
                                Conception of the inVaders collection together with the Vader Protocol team and
                                community, via Discord.
                            </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={1}>
                            <CircleIcon htmlColor={Custom.vaderDarkPink}/>
                            <Typography paddingTop={0.3} variant={"body1"}>
                                Collection of 55,555 AI generated NFTs, with 271 unique traits.
                            </Typography>
                        </Stack>
                        <Stack direction={"row"} alignItems="center" spacing={1}>
                            <CircleIcon htmlColor={Custom.vaderDarkPink}/>
                            <Typography variant={"body1"}>
                                Smart Contract creation.
                            </Typography>
                        </Stack>
                        <Stack direction={"row"} alignItems="center" spacing={1}>
                            <CircleIcon htmlColor={Custom.vaderDarkPink}/>
                            <Typography variant={"body1"}>
                                UI creation and Smart Contract integration.
                            </Typography>
                        </Stack>
                        <Stack direction={"row"} alignItems="center" spacing={1}>
                            <CircleIcon htmlColor={Custom.vaderDarkPink}/>
                            <Typography variant={"body1"}>
                                Pre-sale launch on 1st March 2022.
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                {/*  Q2  */}
                <Stack width={"100%"} alignItems="center">
                    <Stack marginLeft={{md: 0, lg: 40}} maxWidth={800} spacing={1}>
                        <Typography variant={"h4"} color={"white"}>MISSION 2 Q2-Q3 2022</Typography>

                        <Stack direction={"row"} spacing={1}>
                            <CircleIcon htmlColor={Custom.vaderDarkPink}/>
                            <Typography variant={"body1"} paddingTop={0.3}>
                                The objective of the mission is to give back the value received from the community.
                            </Typography>
                        </Stack>

                        <Stack direction={"row"} spacing={1}>
                            <CircleIcon htmlColor={Custom.vaderDarkPink}/>
                            <Typography variant={"body1"} paddingTop={0.3}>
                                Creation of contexts, lotteries and surprise prizes for minters and owners of NFTs
                                inVaders.
                            </Typography>
                        </Stack>
                        <Stack direction={"row"} alignItems="center" spacing={1}>
                            <CircleIcon htmlColor={Custom.vaderDarkPink}/>
                            <Typography variant={"body1"}>
                                Support to the Vader Protocol team and community with unpublished projects and
                                partnerships with other communities and NFTs collections.
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                {/*  Q3  */}
                <Stack width={"100%"} alignItems="center" spacing={1}>
                    <Stack maxWidth={800} spacing={1}>
                        <Typography variant={"h4"} color={"white"}>MISSION 3 - Q4 2022</Typography>

                        <Stack direction={"row"} spacing={1}>
                            <CircleIcon htmlColor={Custom.vaderDarkPink}/>
                            <Typography variant={"body1"} paddingTop={0.3}>
                                The objective of the mission is distribution of the $VADER in the Community Treasury to
                                the holders of inVaders NFTs, in proportion to the number of NFTs in the wallet, on
                                December 20, 2022.
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>


        </Stack>
    )

}

export default RoadmapSection
