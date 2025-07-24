import { AUTH_SLIDER_1, AUTH_SLIDER_2 } from "./assetImages";

export const BASE_URL = process.env.API_BASE_URL;
export const MEDIA_URL = process.env.NEXT_PUBLIC_MEDIA_URL;

/* AUTH PAGE SLIDER */
export const AUTH_PAGE_SLIDER_IMAGE = [
    {
        key: 1,
        image: AUTH_SLIDER_1
    }, {
        key: 2,
        image: AUTH_SLIDER_2
    }]

/* Common Header */
export const COMMON_HEADER_NAV_ITEMS = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Explore", path: "/movies" },
    { label: "Donate", path: "#" },
    { label: "Live", path: "#" },
    { label: "Shop", path: "#" },
    { label: "Festival", path: "#" },
    { label: "Film Makers", path: "#" },
    { label: "Community", path: "#" },
];
