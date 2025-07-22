"use client"
import { useRef,useEffect } from "react";
import videojs from "video.js";
const MovieBanner = ({ streamingUrl }) => {
    const videoRef = useRef(null);
    const player = useRef(null);

    useEffect(() => {
        if (videoRef.current && !player.current) {
            player.current = videojs(videoRef.current, {
                autoplay: true,
                muted: true,
                controls: false,
                loop: true,
                responsive: true,
                fluid: true,
                preload: "auto",
                sources: [
                    {
                        src: streamingUrl,
                        type: "application/x-mpegURL",
                    },
                ],
            });
        }

        return () => {
            if (player.current) {
                player.current.dispose();
                player.current = null;
            }
        };
    }, []);
    return (
        <section className="banner-section">
            <div data-vjs-player className="absolute top-0 left-0 w-full h-full">
                <video
                    ref={videoRef}
                    className="video-js vjs-default-skin w-full h-full object-cover"
                    playsInline
                />
            </div>
        </section>
    )
}

export default MovieBanner;