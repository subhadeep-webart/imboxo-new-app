"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ProfileDropdown from "@/components/ui/ProfileDropdown";
import Link from "next/link";

const NavbarRight = ({ profile_img }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("isLoggedIn");
        setIsLoggedIn(stored ? JSON.parse(stored) : false);
      } catch (error) {
        console.error("Error reading isLoggedIn from localStorage", error);
        setIsLoggedIn(false);
      }
    }
  }, []);

  return (
    <div className="navbar__right">
      {isLoggedIn ? (
        <ProfileDropdown profile_img={profile_img} />
      ) : (
        <>
          <Link className="navbar__cta" href="/creator-sign-up">
            Become a Creator
          </Link>
          <Link className="navbar__cta" href="/login">
            Login
          </Link>
        </>
      )}
      <Image
        src="/assets/icons/search.svg"
        alt="Search"
        width={24}
        height={24}
        className="navbar__search-icon"
      />
    </div>
  );
};

export default NavbarRight;
