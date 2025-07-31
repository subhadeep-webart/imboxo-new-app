import { useEffect } from "react";

export const usePreventWindowScroll = (ref) => {
    useEffect(() => {
        if (!ref?.current) return;

        const handleWheel = (e) => {
            if (ref.current && ref.current.contains(e.target)) {
                e.preventDefault();
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [ref]);
};
