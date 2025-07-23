import Image from "next/image";
import Link from "next/link";
const Header = () => {
    return (
        <div className="container">
            <nav className="navbar">
                <div className="navbar__left">
                    <div className="navbar__logo">
                        <Image src="/assets/images/logo.png" width={117} height={24} alt="" />
                    </div>
                    <ul className="navbar__menu">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Explore</li>
                        <li>Donate</li>
                        <li>Live</li>
                        <li>Shop</li>
                        <li>Festival</li>
                        <li>Film Makers</li>
                        <li>Community</li>
                    </ul>
                </div>

                <div className="navbar__right">
                    <Link className="navbar__cta" href={"/creator-sign-up"}>Become a Creator</Link>
                    <Link className="navbar__cta" href={"/login"}>Login</Link>
                    <Image
                        src="/assets/icons/search.svg"
                        alt="Search"
                        width={24}
                        height={24}
                        className="navbar__search-icon"
                    />
                    {/* <Image
                        src="/assets/images/user-avatar.jpg"
                        alt="User"
                        width={32}
                        height={32}
                        className="navbar__avatar"
                    /> */}
                    {/* <Link className="navbar__cta" href={"/login"}>Login</Link> */}
                </div>
            </nav>
        </div>
    )
}

export default Header;