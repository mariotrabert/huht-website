"use client";

import { Flex, Link as StyledLink } from "@radix-ui/themes";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  placedIn: "sidebar" | "navbar";
}
const NavLinks = ({ placedIn }: { placedIn: "sidebar" | "navbar" | "" }) => {
  const currentPath = usePathname();
  const links = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Über uns", href: "/ueber" },
    { label: "Galerie", href: "/fotos" },
    { label: "Zucht", href: "/zucht" },
  ];
  return (
    <Flex
      gap="5"
      direction="row"
      flexGrow="1"
      flexShrink="1"
      flexBasis="auto"
      align="center"
    >
      {links.map((link) => (
        <Link
          key={link.href}
          className={classNames({
            "text-xl nav-link": true,
            "!text-slate-100 !font-bold": link.href === currentPath,
          })}
          href={link.href}
        >
          <StyledLink>{link.label}</StyledLink>
        </Link>
      ))}
    </Flex>
  );
};

export default NavLinks;
