import {NextPage} from "next";
import {Box, Grid, Stack, Typography} from "@mui/material";
import Image from "next/image";
import V1 from "../../../public/air-monster.png";
import V2 from "../../../public/divine-monster.png";
import V3 from "../../../public/ghost-monster.png";
import V4 from "../../../public/water-monster.png";
import V5 from "../../../public/grass-monster.png";
import V6 from "../../../public/v6.webp";
import {Custom} from "../../styles/Theme";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {FreeMode, Pagination} from "swiper";

function CollectionSection() {

    return (

        <Stack alignItems="center" spacing={3} paddingTop={10} paddingBottom={6} paddingX={2} sx={{background: '#000'}}>
            <Typography variant={"h1"} color={Custom.vaderLightBlue} sx={{textShadow: '3px 3px 3px #26a4fe'}}>
                TYPES
            </Typography>

            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    390: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1600: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                }}
                freeMode={true}
                modules={[Pagination, FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Stack alignItems="center" spacing={3} paddingTop={6} paddingBottom={6} paddingX={2}>
                        <Image src={V1} width={350} height={350}/>
                        <Typography variant={"h3"} paddingBottom={0} color={"lightcyan"}>AANG</Typography>
                        <Typography variant={"h4"} paddingBottom={2} color={"white"}>A monster that lives in mountainous area, it resembles with the Tengu.</Typography>
                        <Typography variant={"h3"} paddingBottom={0} color={"lightcyan"}>ELEMENT :</Typography>
                        <Typography variant={"h4"} paddingBottom={2} color={"white"}>Wind / 風</Typography>
                    </Stack>
                </SwiperSlide>
                <SwiperSlide>
                <Stack alignItems="center" spacing={3} paddingTop={6} paddingBottom={6} paddingX={2}>
                    <Image src={V2} width={350} height={350}/>
                    <Typography variant={"h3"} paddingBottom={0} color={"lightcyan"}>KAMI</Typography>
                    <Typography variant={"h4"} paddingBottom={2} color={"white"}>No one knows where this monster from, yet it is kind to all manner of creatures.</Typography>
                    <Typography variant={"h3"} paddingBottom={0} color={"lightcyan"}>ELEMENT :</Typography>
                    <Typography variant={"h4"} paddingBottom={2} color={"white"}>Divine / 精神</Typography>
                </Stack>
                </SwiperSlide>
                <SwiperSlide>
                <Stack alignItems="center" spacing={3} paddingTop={6} paddingBottom={6} paddingX={2}>
                    <Image src={V3} width={350} height={350}/>
                    <Typography variant={"h3"} paddingBottom={0} color={"lightcyan"}>GEIST</Typography>
                    <Typography variant={"h4"} paddingBottom={2} color={"white"}>A ghost suited in knight armor, and powered with eternal flames.</Typography>
                    <Typography variant={"h3"} paddingBottom={0} color={"lightcyan"}>ELEMENT :</Typography>
                    <Typography variant={"h4"} paddingBottom={2} color={"white"}>Spirit / 精神</Typography>
                </Stack>
                </SwiperSlide>
                <SwiperSlide>
                <Stack alignItems="center" spacing={3} paddingTop={6} paddingBottom={6} paddingX={2}>
                    <Image src={V4} width={350} height={350}/>
                    <Typography variant={"h3"} paddingBottom={0} color={"lightcyan"}>MIZU</Typography>
                    <Typography variant={"h4"} paddingBottom={2} color={"white"}>A creature resembles with seal, be wary of its cute face.</Typography>
                    <Typography variant={"h3"} paddingBottom={0} color={"lightcyan"}>ELEMENT :</Typography>
                    <Typography variant={"h4"} paddingBottom={2} color={"white"}>Water / 水</Typography>
                </Stack>
                </SwiperSlide>
                <SwiperSlide>
                <Stack alignItems="center" spacing={3} paddingTop={6} paddingBottom={6} paddingX={2}>
                    <Image src={V5} width={350} height={350}/>
                    <Typography variant={"h3"} paddingBottom={0} color={"lightcyan"}>KUSA</Typography>
                    <Typography variant={"h4"} paddingBottom={2} color={"white"}>Creature that was born from grass, representing of life and freedom.</Typography>
                    <Typography variant={"h3"} paddingBottom={0} color={"lightcyan"}>ELEMENT :</Typography>
                    <Typography variant={"h4"} paddingBottom={2} color={"white"}>Grass / 草</Typography>
                </Stack>
                </SwiperSlide>
            </Swiper>

        </Stack>
    )

}

export default CollectionSection
