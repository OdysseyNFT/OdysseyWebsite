
import type {NextPage} from 'next'
import {Button, Dialog, DialogContent, Stack, Typography} from "@mui/material";
import HeadSection from "../components/home/HeadSection";
import AboutSection from "../components/home/AboutSection";
import CollectionSection from "../components/home/CollectionSection";
import RoadmapSection from "../components/home/RoadmapSection";
import TeamSection from "../components/home/TeamSection";
import FAQSection from "../components/home/FAQSection";
import {useAppSelector} from "../hooks/hooks";
import {TwitterIcon, TwitterShareButton} from "react-share"
import {useEffect, useState} from "react";


const Home: NextPage = () => {

    const share = useAppSelector((state) => state.app.showShare)
    const [open, setOpen] = useState(false);


    useEffect(() => {
        setOpen(share)
    }, [share])


    // @ts-ignore
    return (
        <Stack marginTop={{lg: -20, xs: -10}}>
            <HeadSection/>
            <AboutSection/>

            <Stack sx={{
                background: 'radial-gradient(ellipse at center left, #ff9ddb 10%, #3de7fc 70%)'
            }}>
                <RoadmapSection/>
                <CollectionSection/>
                <FAQSection/>
                <TeamSection/>
            </Stack>


            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{
                    sx: {
                        bgcolor: "white",
                        backdropFilter: "blur(10px)",
                    },
                }}
            >
                <DialogContent sx={{background: 'linear-gradient(12deg, #26a4fe 20%, #ff9ddb 70%)'}}>
                    <Stack justifyContent="center" spacing={2} alignItems="center" width={300}>
                        <Typography color={"white"} variant={"h3"}>Thank you for minting</Typography>
                        <Typography color={"white"} variant={"body1"} textAlign={"center"}>
                            Help us to recruit more InVaders by sharing on twitter
                        </Typography>


                        <TwitterShareButton title="I just minted NFT from the inVADERs Collection /▼皿▼\
                                                100% of the funds raised will be used to purchase $VADER token and distribute it back to NFT holders on December 20, 2022.
                                                Basically free mints for the community! @invaders_army
                                                Mint yours at invaders.army"

                                            url="https://www.invaders.army/">
                            <TwitterIcon size={64} round={true}/>

                        </TwitterShareButton>

                        <Button onClick={() => setOpen(false)}>No Thanks</Button>

                    </Stack>
                </DialogContent>
            </Dialog>

        </Stack>


    )
}

export default Home
