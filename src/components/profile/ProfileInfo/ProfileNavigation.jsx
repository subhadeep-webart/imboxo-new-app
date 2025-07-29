"use client"
import Link from "next/link"
import styles from "../profile.module.scss"
import { usePathname } from "next/navigation"

const ProfileNavigation = ({ profileNav }) => {
    const pathname = usePathname();

    return (
        <Link
            className={`${styles.profile_nav_menu} ${pathname === profileNav.path ? styles.profile_nav_active : ""}`}
            href={profileNav.path}
        >
            {profileNav?.label}
        </Link>
    )
}

export default ProfileNavigation;
