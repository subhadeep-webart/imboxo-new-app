"use client"
import { EYE_ICON } from "@/utils/icons"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
const TrendingReels = () => {
    return (
        <section className="trending-reels-section">
            <div className="container">
                <div className="section-content">
                    <div className="section-header">
                        <h2 className="section-title">
                            <strong>Trending</strong> Reels
                        </h2>
                        <button className="view-all">View All</button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Swiper modules={[Autoplay]}
                    spaceBetween={30}
                    fadeEffect={{ crossFade: true }}
                    slidesPerView={7}
                    slidesPerGroup={7}
                    loop={true}
                    autoplay={{ delay: 4000, disableOnInteraction: true, pauseOnMouseEnter: true }}
                    className="reels-wrapper">
                    <SwiperSlide className="each-reel">
                        <div className="reel-thumb">
                            <Image src="/assets/images/reel-1.png" alt="" fill />
                            <div className="play-backdrop">
                                <Image
                                    src="/assets/icons/play-in-circle.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="reel-views-indicator"><Image src={EYE_ICON.src} alt="Views" height={16} width={16} className="pe-2" /><span className="text-white text-sm">20k</span></div>
                        </div>
                        <h4 className="reel-title">Best Friend</h4>
                    </SwiperSlide>
                    <SwiperSlide className="each-reel">
                        <div className="reel-thumb">
                            <Image src="/assets/images/reel-2.png" alt="" fill />
                            <div className="play-backdrop">
                                <Image
                                    src="/assets/icons/play-in-circle.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="reel-views-indicator"><Image src={EYE_ICON.src} alt="Views" height={16} width={16} className="pe-2" /><span className="text-white text-sm">20k</span></div>
                        </div>
                        <h4 className="reel-title">The Banker</h4>
                    </SwiperSlide>
                    <SwiperSlide className="each-reel">
                        <div className="reel-thumb">
                            <Image src="/assets/images/reel-3.png" alt="" fill />
                            <div className="play-backdrop">
                                <Image
                                    src="/assets/icons/play-in-circle.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="reel-views-indicator"><Image src={EYE_ICON.src} alt="Views" height={16} width={16} className="pe-2" /><span className="text-white text-sm">20k</span></div>
                        </div>
                        <h4 className="reel-title">Archer</h4>
                    </SwiperSlide>
                    <SwiperSlide className="each-reel">
                        <div className="reel-thumb">
                            <Image src="/assets/images/reel-4.png" alt="" fill />
                            <div className="play-backdrop">
                                <Image
                                    src="/assets/icons/play-in-circle.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="reel-views-indicator"><Image src={EYE_ICON.src} alt="Views" height={16} width={16} className="pe-2" /><span className="text-white text-sm">20k</span></div>
                        </div>
                        <h4 className="reel-title">Joker</h4>
                    </SwiperSlide>
                    <SwiperSlide className="each-reel">
                        <div className="reel-thumb">
                            <Image src="/assets/images/reel-5.png" alt="" fill />
                            <div className="play-backdrop">
                                <Image
                                    src="/assets/icons/play-in-circle.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="reel-views-indicator"><Image src={EYE_ICON.src} alt="Views" height={16} width={16} className="pe-2" /><span className="text-white text-sm">20k</span></div>
                        </div>
                        <h4 className="reel-title">Uncharted</h4>
                    </SwiperSlide>
                    <SwiperSlide className="each-reel">
                        <div className="reel-thumb">
                            <Image src="/assets/images/reel-6.png" alt="" fill />
                            <div className="play-backdrop">
                                <Image
                                    src="/assets/icons/play-in-circle.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="reel-views-indicator"><Image src={EYE_ICON.src} alt="Views" height={16} width={16} className="pe-2" /><span className="text-white text-sm">20k</span></div>
                        </div>
                        <h4 className="reel-title">Strenger Things</h4>
                    </SwiperSlide>
                    <SwiperSlide className="each-reel">
                        <div className="reel-thumb">
                            <Image src="/assets/images/reel-3.png" alt="" fill />
                            <div className="play-backdrop">
                                <Image
                                    src="/assets/icons/play-in-circle.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="reel-views-indicator"><Image src={EYE_ICON.src} alt="Views" height={16} width={16} className="pe-2" /><span className="text-white text-sm">20k</span></div>
                        </div>
                        <h4 className="reel-title">Archer</h4>
                    </SwiperSlide>
                    <SwiperSlide className="each-reel">
                        <div className="reel-thumb">
                            <Image src="/assets/images/reel-3.png" alt="" fill />
                            <div className="play-backdrop">
                                <Image
                                    src="/assets/icons/play-in-circle.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="reel-views-indicator"><Image src={EYE_ICON.src} alt="Views" height={16} width={16} className="pe-2" /><span className="text-white text-sm">20k</span></div>
                        </div>
                        <h4 className="reel-title">Archer</h4>
                    </SwiperSlide>
                    <SwiperSlide className="each-reel">
                        <div className="reel-thumb">
                            <Image src="/assets/images/reel-3.png" alt="" fill />
                            <div className="play-backdrop">
                                <Image
                                    src="/assets/icons/play-in-circle.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="reel-views-indicator"><Image src={EYE_ICON.src} alt="Views" height={16} width={16} className="pe-2" /><span className="text-white text-sm">20k</span></div>
                        </div>
                        <h4 className="reel-title">Archer</h4>
                    </SwiperSlide>
                    <SwiperSlide className="each-reel">
                        <div className="reel-thumb">
                            <Image src="/assets/images/reel-3.png" alt="" fill />
                            <div className="play-backdrop">
                                <Image
                                    src="/assets/icons/play-in-circle.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="reel-views-indicator"><Image src={EYE_ICON.src} alt="Views" height={16} width={16} className="pe-2" /><span className="text-white text-sm">20k</span></div>
                        </div>
                        <h4 className="reel-title">Archer</h4>
                    </SwiperSlide>
                    <SwiperSlide className="each-reel">
                        <div className="reel-thumb">
                            <Image src="/assets/images/reel-3.png" alt="" fill />
                            <div className="play-backdrop">
                                <Image
                                    src="/assets/icons/play-in-circle.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="reel-views-indicator"><Image src={EYE_ICON.src} alt="Views" height={16} width={16} className="pe-2" /><span className="text-white text-sm">20k</span></div>
                        </div>
                        <h4 className="reel-title">Archer</h4>
                    </SwiperSlide>
                    <SwiperSlide className="each-reel">
                        <div className="reel-thumb">
                            <Image src="/assets/images/reel-3.png" alt="" fill />
                            <div className="play-backdrop">
                                <Image
                                    src="/assets/icons/play-in-circle.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="reel-views-indicator"><Image src={EYE_ICON.src} alt="Views" height={16} width={16} className="pe-2" /><span className="text-white text-sm">20k</span></div>
                        </div>
                        <h4 className="reel-title">Archer</h4>
                    </SwiperSlide>
                    <SwiperSlide className="each-reel">
                        <div className="reel-thumb">
                            <Image src="/assets/images/reel-3.png" alt="" fill />
                            <div className="play-backdrop">
                                <Image
                                    src="/assets/icons/play-in-circle.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="reel-views-indicator"><Image src={EYE_ICON.src} alt="Views" height={16} width={16} className="pe-2" /><span className="text-white text-sm">20k</span></div>
                        </div>
                        <h4 className="reel-title">Archer</h4>
                    </SwiperSlide>
                      <SwiperSlide className="each-reel">
                        <div className="reel-thumb">
                            <Image src="/assets/images/reel-3.png" alt="" fill />
                            <div className="play-backdrop">
                                <Image
                                    src="/assets/icons/play-in-circle.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="reel-views-indicator"><Image src={EYE_ICON.src} alt="Views" height={16} width={16} className="pe-2" /><span className="text-white text-sm">20k</span></div>
                        </div>
                        <h4 className="reel-title">Archer</h4>
                    </SwiperSlide>
                </Swiper>
            </div>

        </section>
    )
}

export default TrendingReels