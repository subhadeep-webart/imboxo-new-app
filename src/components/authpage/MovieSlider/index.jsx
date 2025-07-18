"use client"
import { AUTH_PAGE_SLIDER_IMAGE } from "@/utils/constant"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const MovieSlider = () => {
    return (
        <Swiper modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true}}>
            {
                AUTH_PAGE_SLIDER_IMAGE.map((slider_image) => (
                    <SwiperSlide key={slider_image.key}>
                        <Image src={slider_image.image} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default MovieSlider