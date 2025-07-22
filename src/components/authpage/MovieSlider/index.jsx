"use client"
import { AUTH_PAGE_SLIDER_IMAGE } from "@/utils/constant"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Styles from "@/app/(auth)/auth.module.scss";

const MovieSlider = () => {
    return (
        <Swiper modules={[Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true}}
            style={{padding:"0px 0px !important"}}
            className="movie_slider_swipper"
            >
            {
                AUTH_PAGE_SLIDER_IMAGE.map((slider_image) => (
                    <SwiperSlide key={slider_image.key}>
                        <img src={slider_image.image.src} className={Styles.auth_slider_image}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default MovieSlider