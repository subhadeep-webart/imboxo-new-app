import { getUserDetailsById } from "@/server/users/getUserDetailsById";
import { COMMON_HEADER_NAV_ITEMS } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import NavbarRight from "./NavbarRight";
const Header = async() => {
    const userDetails=await getUserDetailsById();
    const {profile_img}=userDetails;
    return (
        <div className="container">
            <nav className="navbar">
                <div className="navbar__left">
                    <Link href={"/"}>
                        <div className="navbar__logo">
                            <Image src="/assets/images/logo.png" width={117} height={24} alt="" />
                        </div>
                    </Link>
                    <ul className="navbar__menu">
                        {
                            COMMON_HEADER_NAV_ITEMS.map((navItem, index) => (<Link href={navItem.path} key={`nav-item-${index + 1}`}>
                                <li>{navItem.label}</li>
                            </Link>))
                        }
                    </ul>
                </div>
                <NavbarRight profile_img={profile_img}/>
            </nav>
        </div>
    )
}

export default Header;