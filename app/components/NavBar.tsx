"use client";

import logo from "@/public/2011VDWZuechterLogo200.png";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import AuthButton from "./AuthButton";

const NavBar = () => {

  return (
    <nav className="navbar bg-primary text-primary-content z-[50] lg:sticky lg:top-0">
      <div className="flex-none lg:hidden">
        <label htmlFor="sidebar" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="navbar-start">
        
        <Link href="/" className="btn btn-ghost text-xl">
          <Image
            src={logo}
            alt="DW Logo"
            className="w-auto h-4/5 max-h-24 mr-3"
          ></Image>
          Von der Huht
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <NavLinks placed_in="navbar"/>
      </div>

      <div className="navbar-end">
        <div className="max-lg:hidden">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
