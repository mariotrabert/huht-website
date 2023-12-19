'use client'

import Image from "next/image";
import logo from "@/public/2011VDWZuechterLogo200.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const NavBar = () => {
  return (
    
      <nav className="navbar bg-primary text-primary-content lg:sticky lg:top-0">
        <div className="navbar-start">
          {/* TODO change to drawer */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
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
          <NavLinks />
        </div>

        <div className="navbar-end">
          <button className="btn">
            <Link href="/login">Login</Link>
          </button>
        </div>
      </nav>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Über uns", href: "/ueber" },
    { label: "Galerie", href: "/fotos" },
    { label: "Zucht", href: "/zucht" },
  ];
  return (
    // menu menu-horizontal px-1
    <ul className="menu menu-horizontal space-x-6">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={classnames({
              "nav-link": true,
              "!text-slate-100 !font-bold": link.href === currentPath,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
