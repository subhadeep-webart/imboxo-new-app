"use client"
import { AUTH_PAGE_SLIDER_IMAGE } from "@/utils/constant"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import Styles from "@/app/(main)/(auth)/auth.module.scss"
import 'swiper/css/effect-fade';

const MovieSlider = () => {
    return (
        <Swiper modules={[Pagination, Autoplay, EffectFade]}
            slidesPerView={1}
            loop={true}
            speed={2000}
            effect="fade"
            autoplay={{
                delay: 3000, disableOnInteraction: true,
                pauseOnMouseEnter: true
            }}
            pagination={{ clickable: true }}
            className="movie_slider_swipper"
        >
            {
                AUTH_PAGE_SLIDER_IMAGE.map((slider_image) => (
                    <SwiperSlide key={slider_image.key}>
                        <img src={slider_image.image.src} className={Styles.auth_slider_image} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default MovieSlider