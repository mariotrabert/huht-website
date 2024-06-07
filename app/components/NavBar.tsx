"use client";

import logo from "@/public/2011VDWZuechterLogo200.png";
import { Box, Flex, Heading, Separator } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import UserDropdown from "./UserDropdown";

const NavBar = () => {
  return (
    <Box>
      <Flex gap="5" mx="5" my="3">
        {/* First column - Logo and heading */}
        <Flex gap="5" align="center">
          <Link href="/">
            <Image src={logo} alt="DW Logo" className="w-auto h-16" />
          </Link>
          <Link href="/">
            <Heading>Von der Huht</Heading>
          </Link>
        </Flex>
        <Separator size="3" orientation="vertical" />

        {/* Middle column - nav links */}
        <Box asChild>
          <NavLinks placedIn="navbar" />
        </Box>

        {/* Right column - login button */}
        <UserDropdown />
      </Flex>
      <Separator size="4" />
    </Box>
  );
};

export default NavBar;
