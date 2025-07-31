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
    { label: "About Us", path: "#" },
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
    { label: "Dashboard", path: "#" },
    { label: "My Movie", path: "#" },
    { label: "Upload Movie", path: "#" },
    { label: "Awards", path: "#" }
]
/* USER PROFILE NAVIGATION */
export const USER_PROFILE_NAVIGATION = [
    { label: "Edit Profile", path: "/profile" },
    { label: "My Movies", path: "/profile/my-movies" },
    { label: "My List", path: "/profile/my-list" }
]

/* PROFILE DROPDOWN CONTENT */
export const PROFILE_DROPDOWN_MENU_ITEM = [
    {
        key: "profile",
        label: "Profile",
        startContent: <UserRound size={20}/>,
        link:"/profile"
    },
    {
        key: "settings",
        label: "My Settings",
        startContent: <Settings size={20}/>,
        link:"#"
    },
    {
        key: "watchlist",
        label: "Watchlist",
        startContent: <Eye size={20}/>,
        link:"#"
    },
    {
        key: "viewing_history",
        label: "Viewing History",
        startContent: <Binoculars size={20}/>,
        link:"#"
    },
    {
        key: "subscription_details",
        label: "Subscription Details",
        startContent: <Bell size={20}/>,
        link:"#"
    },
];

/* AWARDS TABLE HEADER */
const AWARD_TABLE_HEADER=[

]