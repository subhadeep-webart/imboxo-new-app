"use client"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
const CapturedSection = () => {
    return (
        <section className="captured-section">
            <div className="container">
                <div className="section-content">
                    <div className="section-header">
                        <h2 className="section-title">
                            <strong>Captured</strong> From Studio
                        </h2>
                        <button className="view-all">View All</button>
                    </div>
                </div>
                <div className="full_screen_caraousel">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={"auto"}
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: true,pauseOnMouseEnter: true }}
                        className="logo-wrapper"
                    >
                        <SwiperSlide className="logo-list">
                            <Image src="/assets/images/logo-1.png" width={128} height={62} alt="Logo 1" />
                        </SwiperSlide>
                        <SwiperSlide className="logo-list">
                            <Image src="/assets/images/logo-2.png" width={128} height={62} alt="Logo 2" />
                        </SwiperSlide>
                        <SwiperSlide className="logo-list">
                            <Image src="/assets/images/logo-3.png" width={128} height={62} alt="Logo 3" />
                        </SwiperSlide>
                        <SwiperSlide className="logo-list">
                            <Image src="/assets/images/logo-2.png" width={128} height={62} alt="Logo 2" />
                        </SwiperSlide>
                        <SwiperSlide className="logo-list">
                            <Image src="/assets/images/logo-2.png" width={128} height={62} alt="Logo 2" />
                        </SwiperSlide>
                        <SwiperSlide className="logo-list">
                            <Image src="/assets/images/logo-1.png" width={128} height={62} alt="Logo 1" />
                        </SwiperSlide>
                        <SwiperSlide className="logo-list">
                            <Image src="/assets/images/logo-1.png" width={128} height={62} alt="Logo 1" />
                        </SwiperSlide>
                        <SwiperSlide className="logo-list">
                            <Image src="/assets/images/logo-1.png" width={128} height={62} alt="Logo 1" />
                        </SwiperSlide>
                        <SwiperSlide className="logo-list">
                            <Image src="/assets/images/logo-1.png" width={128} height={62} alt="Logo 1" />
                        </SwiperSlide>
                        <SwiperSlide className="logo-list">
                            <Image src="/assets/images/logo-1.png" width={128} height={62} alt="Logo 1" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>



            {/* <ul className="logo-wrapper">
                <li>
                    <Image
                        src="/assets/images/logo-1.png"
                        width={128}
                        height={62}
                        alt=""
                    />
                </li>
                <li>
                    <Image
                        src="/assets/images/logo-2.png"
                        width={128}
                        height={62}
                        alt=""
                    />
                </li>
                <li>
                    <Image
                        src="/assets/images/logo-3.png"
                        width={128}
                        height={62}
                        alt=""
                    />
                </li>
                <li>
                    <Image
                        src="/assets/images/logo-2.png"
                        width={128}
                        height={62}
                        alt=""
                    />
                </li>
                <li>
                    <Image
                        src="/assets/images/logo-2.png"
                        width={128}
                        height={62}
                        alt=""
                    />
                </li>
                <li>
                    <Image
                        src="/assets/images/logo-1.png"
                        width={128}
                        height={62}
                        alt=""
                    />
                </li>
            </ul> */}
        </section >
    )
}

export default CapturedSection