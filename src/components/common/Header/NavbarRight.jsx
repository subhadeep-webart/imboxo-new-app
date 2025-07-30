"use client"
import Image from "next/image";
import ProfileDropdown from "@/components/ui/ProfileDropdown";
import useLocalStorage from "@/hooks/useLocalStorage";
const NavbarRight = ({profile_img}) => {
    const [isLoggedIn] = useLocalStorage("isLoggedIn", false);
    return (
        <div className="navbar__right">
            {
                isLoggedIn ? (<>
                    {/* <Image
                                src="/assets/images/user-avatar.jpg"
                                alt="User"
                                width={32}
                                height={32}
                                className="navbar__avatar"
                            /> */}
                    <ProfileDropdown profile_img={profile_img}/>
                </>) : (<>
                    <Link className="navbar__cta" href={"/creator-sign-up"}>Become a Creator</Link>
                    <Link className="navbar__cta" href={"/login"}>Login</Link>
                </>)
            }
            <Image
                src="/assets/icons/search.svg"
                alt="Search"
                width={24}
                height={24}
                className="navbar__search-icon"
            />
        </div>
    )
}

export default NavbarRight;