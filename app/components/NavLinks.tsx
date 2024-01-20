'use client'

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  placed_in: "sidebar" | "navbar"
}
const NavLinks = ({ placed_in }: { placed_in: "sidebar" | "navbar" | ""}) => {
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
    <ul className={classNames("menu", {"menu-vertical": placed_in === "sidebar",  "lg:menu-horizontal lg:space-x-6": placed_in === "navbar",})}>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={classNames({
              "text-xl nav-link": true,
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

export default NavLinks;