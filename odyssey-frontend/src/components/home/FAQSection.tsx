import {NextPage} from "next";
import {Accordion, AccordionDetails, AccordionSummary, Stack, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Custom} from "../../styles/Theme";
import Image from "next/image";
import DECO1 from "../../../public/deco1.png";

function FAQSection() {

    return (
        <Stack paddingY={6}
               alignItems="center" id="FAQ">
            <Stack maxWidth={700} alignItems="center" spacing={3} paddingX={2}>
                <Stack>
                    <Image src={DECO1}/>
                </Stack>

                <Typography paddingTop={6} variant={"h1"} color={Custom.vaderLightBlue}
                            sx={{textShadow: '3px 3px 3px #ff00ba'}}>
                    FAQ
                </Typography>

                <div>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography color={Custom.vaderOtherPink}>What are the Benefits of inVaders NFTs?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Ownership of a beautiful work of art, the purpose of which is to create awareness of Vader Protocol products within DeFi. NFTs are designed to give back the value received by the community over time. Here are some advantages:
                                <br/><br/>
                                1) Reduced USDV minting fees for NFT hodlers, fees for burning VADER for USDV!
                                <br/>
                                2) Claim the $VADER in the Community Treasury on December 20, 2022, in proportion to the number of NFTs in your wallet.
                                <br/>
                                3) Lotteries and surprise prizes throughout the year.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography color={Custom.vaderOtherPink}>
                                How much does the mint of the inVaders NFTs cost?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Presale: 100 USDV from 1 March 2022.<br/>
                                Public sale: 155 USDV from 5 March 2022.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography color={Custom.vaderOtherPink}>
                                Will the collection be listed on the Marketplace?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yup!<br/>
                                The inVaders Army collection will be listed on OpenSea and major marketplaces.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography color={Custom.vaderOtherPink}>Do you have a Rarity system?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Indeed we have a system of rarity for each attribute of the inVaders Warriors. 14 strokes and 271 variations make the collection a joy for close-knit collectors.
                                <br />
                                It will be possible to know the Rank and the rarity of the Traits through Bot within the Official Discord.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Stack>


        </Stack>
    )

}

export default FAQSection
