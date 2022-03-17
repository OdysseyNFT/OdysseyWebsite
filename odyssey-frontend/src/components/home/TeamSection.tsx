import {NextPage} from "next";
import {Grid, Stack, Typography} from "@mui/material";
import Image from 'next/image'
import PIC from '../../../public/pic.png';
import DECO1 from '../../../public/deco1.png';
import {Custom} from "../../styles/Theme";
import WALT from '../../../public/walt.webp';
import CARPE from '../../../public/carpe.webp';
import BAMBINI from '../../../public/bambini.webp';
import SIMON from '../../../public/simon.webp';
import AGONIST from '../../../public/agonist.webp';
import ERIKA from '../../../public/erika.webp';

function TeamSection() {

    return (
        <Stack paddingY={6}
               alignItems="center" id="Team">
            <Typography variant={"h1"} color={Custom.vaderYellow} sx={{textShadow: '3px 3px 3px #26a4fe'}}>
                THE TEAM
            </Typography>
            <Grid container alignItems='center' justifyContent='center' rowSpacing={1} columnSpacing={2} paddingY={6}>
                <Grid item>
                    <Stack direction={"column"} alignItems="center">
                        <Image src={WALT} width={150} height={150}/>
                        <Typography variant={"body1"}>waltcrypto.eth</Typography>
                        <Typography variant={"caption"}>Project manager</Typography>
                    </Stack>
                </Grid>
                <Grid item>
                    <Stack direction={"column"} alignItems="center">
                        <Image src={BAMBINI} width={150} height={150}/>
                        <Typography variant={"body1"}>Bambini7</Typography>
                        <Typography variant={"caption"}>Team Advisor</Typography>
                    </Stack>
                </Grid>
                <Grid item>
                    <Stack direction={"column"} alignItems="center">
                        <Image src={CARPE} width={150} height={150}/>
                        <Typography variant={"body1"}>CarpeDiem</Typography>
                        <Typography variant={"caption"}>Solidity Dev</Typography>
                    </Stack>
                </Grid>
                <Grid item>
                    <Stack direction={"column"} alignItems="center">
                        <Image src={AGONIST} width={150} height={150}/>
                        <Typography variant={"body1"}>Agonist</Typography>
                        <Typography variant={"caption"}>Frontend dev</Typography>
                    </Stack>
                </Grid>
                <Grid item>
                    <Stack direction={"column"} alignItems="center">
                        <Image src={SIMON} width={150} height={150}/>
                        <Typography variant={"body1"}>Simon D</Typography>
                        <Typography variant={"caption"}>Artist</Typography>
                    </Stack>
                </Grid>
                <Grid item>
                    <Stack direction={"column"} alignItems="center">
                        <Image src={ERIKA} width={150} height={150}/>
                        <Typography variant={"body1"}>Erika S</Typography>
                        <Typography variant={"caption"}>Artist</Typography>
                    </Stack>
                </Grid>
            </Grid>

            <Typography>Donations to artists: 0x9e93e28ab2b49cdf2934FD4f5f669543e2500969</Typography>

            <Stack paddingTop={4}>
                <Image src={DECO1}/>
            </Stack>

        </Stack>
    )

}

export default TeamSection
