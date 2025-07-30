"use client"
import { useLogoutHandler } from "@/hooks/useLogoutHandler";
import { PROFILE_DROPDOWN_MENU_ITEM } from "@/utils/constant";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem
} from "@heroui/react";

import { Avatar } from "@heroui/react";
import { LogOut } from "lucide-react";
import Link from "next/link";

const ProfileDropdown = ({ profile_img }) => {
    const handleLogout = useLogoutHandler();

    const handleUserLogout = () => {
        console.log("Logout call");
        handleLogout();
    }
    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform object-cover !bg-gray-900"
                    src={profile_img ? profile_img : "https://images.unsplash.com/broken"}
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" className="bg-black !px-4 !py-2 !rounded-lg">
                {
                    PROFILE_DROPDOWN_MENU_ITEM.map((dropdownMenu) => (
                        <Link href={dropdownMenu.link} key={dropdownMenu.key}>
                            <DropdownItem startContent={dropdownMenu.startContent} className="text-white !py-2 !px-2">
                                {dropdownMenu?.label}
                            </DropdownItem>
                        </Link>
                    ))
                }
                <DropdownItem key="logout" color="danger" startContent={<LogOut size={20} />} className="text-white !py-2 !px-2" onClick={handleUserLogout}>
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default ProfileDropdown