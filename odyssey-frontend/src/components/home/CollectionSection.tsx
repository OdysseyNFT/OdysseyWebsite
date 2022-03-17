import {NextPage} from "next";
import {Box, Grid, Stack, Typography} from "@mui/material";
import Image from "next/image";
import V1 from "../../../public/v1.webp";
import V2 from "../../../public/v2.webp";
import V3 from "../../../public/v3.webp";
import V4 from "../../../public/v4.webp";
import V5 from "../../../public/v5.webp";
import V6 from "../../../public/v6.webp";
import {Custom} from "../../styles/Theme";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {FreeMode, Pagination} from "swiper";

function CollectionSection() {

    return (

        <Stack alignItems="center" spacing={3} paddingTop={18} paddingBottom={6} paddingX={2}>
            <Typography variant={"h1"} color={Custom.vaderPink} sx={{textShadow: '3px 3px 3px #26a4fe'}}>
                COLLECTION
            </Typography>

            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    390: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                    1600: {
                        slidesPerView: 6,
                        spaceBetween: 50,
                    },
                }}
                freeMode={true}
                modules={[Pagination, FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide> <Image src={V1} width={250} height={250}/></SwiperSlide>
                <SwiperSlide><Image src={V2} width={250} height={250}/></SwiperSlide>
                <SwiperSlide><Image src={V3} width={250} height={250}/></SwiperSlide>
                <SwiperSlide> <Image src={V4} width={250} height={250}/></SwiperSlide>
                <SwiperSlide> <Image src={V5} width={250} height={250}/></SwiperSlide>
                <SwiperSlide> <Image src={V6} width={250} height={250}/></SwiperSlide>
            </Swiper>

        </Stack>
    )

}

export default CollectionSection
