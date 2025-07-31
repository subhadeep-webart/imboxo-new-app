"use client"
import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";

const Visionaries = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperContainerRef=useRef(null);
    return (
        <section className="visionaries-section">
            <div className="container">
                <div className="section-content" ref={swiperContainerRef}>
                    <div className="section-header">
                        <h2 className="section-title">
                            <strong>The Visionaries</strong> Behind the Film
                        </h2>
                        <div className="slider-action">
                            <button className="slider-arrow" ref={prevRef}>
                                <Image
                                    src="assets/icons/slider-arrow-left.svg"
                                    alt=""
                                    width={17}
                                    height={15}
                                />
                            </button>
                            <button className="slider-arrow" ref={nextRef}>
                                <Image
                                    src="assets/icons/slider-arrow-right.svg"
                                    alt=""
                                    width={17}
                                    height={15}
                                />
                            </button>
                        </div>
                    </div>
                    <Swiper
                        modules={[Navigation,Mousewheel]}
                        spaceBetween={30}
                        slidesPerView={5}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        loop={true}
                        autoplay={true}
                        mousewheel={true}
                        className="visionaries-wrapper"
                        style={{ paddingTop: "80px !important",height:"410px !important"}}
                    >
                        <SwiperSlide>
                            <div className={`each-visionary visionary-bigger`} >
                                <div className={`visionary-thumb-bigger visionary-thumb`}>
                                    <Image src="/assets/images/visionary-1.png" alt="" fill />
                                </div>
                                <div className="visionary-info">
                                    <h4 className="visionary-name">Jordon Sharma</h4>
                                    <a className="visionary-role">Follow</a>
                                </div>
                                <p className="visionary-description">
                                    Worem ipsum dolor sit amet, consectet adipiscing elit.
                                </p>
                                <div className="visionary-socials">
                                    <a className="social-link">
                                        <Image src="/assets/icons/twitter.svg" alt="" width={20} height={20} />
                                    </a>
                                    <a className="social-link">
                                        <Image src="/assets/icons/facebook.svg" alt="" width={16} height={20} />
                                    </a>
                                    <a className="social-link">
                                        <Image src="/assets/icons/instagram.svg" alt="" width={20} height={20} />
                                    </a>
                                    <div className="rating">
                                        <Image src="/assets/icons/star-full.svg" alt="" width={16} height={16} />
                                        <span>8.8</span>
                                    </div>
                                </div>
                                <h4 className="visionary-name visionary-name-small">Jordon Sharma</h4>
                                <a className="visionary-role visionary-role-small">Follow</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`each-visionary visionary-bigger`} >
                                <div className={`visionary-thumb-bigger visionary-thumb`}>
                                    <Image src="/assets/images/visionary-1.png" alt="" fill />
                                </div>
                                <div className="visionary-info">
                                    <h4 className="visionary-name">Jordon Sharma</h4>
                                    <a className="visionary-role">Follow</a>
                                </div>
                                <p className="visionary-description">
                                    Worem ipsum dolor sit amet, consectet adipiscing elit.
                                </p>
                                <div className="visionary-socials">
                                    <a className="social-link">
                                        <Image src="/assets/icons/twitter.svg" alt="" width={20} height={20} />
                                    </a>
                                    <a className="social-link">
                                        <Image src="/assets/icons/facebook.svg" alt="" width={16} height={20} />
                                    </a>
                                    <a className="social-link">
                                        <Image src="/assets/icons/instagram.svg" alt="" width={20} height={20} />
                                    </a>
                                    <div className="rating">
                                        <Image src="/assets/icons/star-full.svg" alt="" width={16} height={16} />
                                        <span>8.8</span>
                                    </div>
                                </div>
                                {/* indicator */}
                                <h4 className="visionary-name visionary-name-small">Jordon Sharma</h4>
                                <a className="visionary-role visionary-role-small">Follow</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`each-visionary visionary-bigger`} >
                                <div className={`visionary-thumb-bigger visionary-thumb`}>
                                    <Image src="/assets/images/visionary-1.png" alt="" fill />
                                </div>
                                <div className="visionary-info">
                                    <h4 className="visionary-name">Jordon Sharma</h4>
                                    <a className="visionary-role">Follow</a>
                                </div>
                                <p className="visionary-description">
                                    Worem ipsum dolor sit amet, consectet adipiscing elit.
                                </p>
                                <div className="visionary-socials">
                                    <a className="social-link">
                                        <Image src="/assets/icons/twitter.svg" alt="" width={20} height={20} />
                                    </a>
                                    <a className="social-link">
                                        <Image src="/assets/icons/facebook.svg" alt="" width={16} height={20} />
                                    </a>
                                    <a className="social-link">
                                        <Image src="/assets/icons/instagram.svg" alt="" width={20} height={20} />
                                    </a>
                                    <div className="rating">
                                        <Image src="/assets/icons/star-full.svg" alt="" width={16} height={16} />
                                        <span>8.8</span>
                                    </div>
                                </div>
                                <h4 className="visionary-name visionary-name-small">Jordon Sharma</h4>
                                <a className="visionary-role visionary-role-small">Follow</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`each-visionary visionary-bigger`} >
                                <div className={`visionary-thumb-bigger visionary-thumb`}>
                                    <Image src="/assets/images/visionary-1.png" alt="" fill />
                                </div>
                                <div className="visionary-info">
                                    <h4 className="visionary-name">Jordon Sharma</h4>
                                    <a className="visionary-role">Follow</a>
                                </div>
                                <p className="visionary-description">
                                    Worem ipsum dolor sit amet, consectet adipiscing elit.
                                </p>
                                <div className="visionary-socials">
                                    <a className="social-link">
                                        <Image src="/assets/icons/twitter.svg" alt="" width={20} height={20} />
                                    </a>
                                    <a className="social-link">
                                        <Image src="/assets/icons/facebook.svg" alt="" width={16} height={20} />
                                    </a>
                                    <a className="social-link">
                                        <Image src="/assets/icons/instagram.svg" alt="" width={20} height={20} />
                                    </a>
                                    <div className="rating">
                                        <Image src="/assets/icons/star-full.svg" alt="" width={16} height={16} />
                                        <span>8.8</span>
                                    </div>
                                </div>
                                <h4 className="visionary-name visionary-name-small">Jordon Sharma</h4>
                                <a className="visionary-role visionary-role-small">Follow</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`each-visionary visionary-bigger`} >
                                <div className={`visionary-thumb-bigger visionary-thumb`}>
                                    <Image src="/assets/images/visionary-1.png" alt="" fill />
                                </div>
                                <div className="visionary-info">
                                    <h4 className="visionary-name">Jordon Sharma</h4>
                                    <a className="visionary-role">Follow</a>
                                </div>
                                <p className="visionary-description">
                                    Worem ipsum dolor sit amet, consectet adipiscing elit.
                                </p>
                                <div className="visionary-socials">
                                    <a className="social-link">
                                        <Image src="/assets/icons/twitter.svg" alt="" width={20} height={20} />
                                    </a>
                                    <a className="social-link">
                                        <Image src="/assets/icons/facebook.svg" alt="" width={16} height={20} />
                                    </a>
                                    <a className="social-link">
                                        <Image src="/assets/icons/instagram.svg" alt="" width={20} height={20} />
                                    </a>
                                    <div className="rating">
                                        <Image src="/assets/icons/star-full.svg" alt="" width={16} height={16} />
                                        <span>8.8</span>
                                    </div>
                                </div>
                                <h4 className="visionary-name visionary-name-small">Jordon Sharma</h4>
                                <a className="visionary-role visionary-role-small">Follow</a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Visionaries;
