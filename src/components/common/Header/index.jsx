import { getUserDetailsById } from "@/server/users/getUserDetailsById";
import { COMMON_HEADER_NAV_ITEMS } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import NavbarRight from "./NavbarRight";
import ExploreDropdown from "@/components/ui/ExploreDropdown";
import { getAllGenres } from "@/server/movies/getAllGenres";
const Header = async () => {
    const userDetails = await getUserDetailsById();
    const { profile_img } = userDetails;
    const genreList=await getAllGenres();

    console.log("All Genre List",genreList);
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
                            COMMON_HEADER_NAV_ITEMS.map((navItem, index) =>
                                navItem.label === "Explore" ? (
                                    <li key={`nav-item-${index + 1}`}>
                                        <ExploreDropdown genreLists={genreList}/>
                                    </li>
                                ) : (
                                    <li key={`nav-item-${index + 1}`}>
                                        <Link href={navItem.path}>{navItem.label}</Link>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
                <NavbarRight profile_img={profile_img} />
            </nav>
        </div>
    )
}

export default Header;