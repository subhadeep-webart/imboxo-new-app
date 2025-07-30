import { Bell, Binoculars, Eye, Settings, UserRound } from "lucide-react";
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

/* CREATOR PROFILE NAVIGATION */
export const CREATOR_PROFILE_NAVIGATION = [
    { label: "Edit Profile", path: "/profile" },
    { label: "Dashboard", path: "/profile/dashboard" },
    { label: "My Movie", path: "/profile/my-movie" },
    { label: "Upload Movie", path: "/profile/upload-movie" },
    { label: "Awards", path: "/profile/awards" }
]
/* USER PROFILE NAVIGATION */
export const USER_PROFILE_NAVIGATION = [
    { label: "Edit Profile", path: "/profile" },
    { label: "My Movie", path: "/profile/my-movie" },
    { label: "My List", path: "/profile/my-list" }
]

/* PROFILE DROPDOWN CONTENT */
export const PROFILE_DROPDOWN_MENU_ITEM = [
    {
        key: "profile",
        label: "Profile",
        startContent: <UserRound size={20}/>,
    },
    {
        key: "settings",
        label: "My Settings",
        startContent: <Settings size={20}/>,
    },
    {
        key: "watchlist",
        label: "Watchlist",
        startContent: <Eye size={20}/>
    },
    {
        key: "viewing_history",
        label: "Viewing History",
        startContent: <Binoculars size={20}/>
    },
    {
        key: "subscription_details",
        label: "Subscription Details",
        startContent: <Bell size={20}/>
    },
];
