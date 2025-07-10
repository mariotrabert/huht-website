import Image from "next/image";
import logo from "@/public/2011VDWZuechterLogo200.png";
import Link from "next/link";
import { Text, Box, Flex, Heading, Section, Grid } from "@radix-ui/themes";

export default function Footer() {
  return (
    <Box px="9">
      <Flex
        gap={{ lg: "9" }}
        justify={{ lg: "center" }}
      >
        <Section id="owner-details" px="5">
          <Heading>Inhaber</Heading>
          <Text as="div">Uwe Mannel</Text>
          <Text as="div">Zur Sängerwiese 3</Text>
          <Text as="div">36419 Bermbach</Text>
        </Section>
        <Section id="contact-details" px="5">
          <Heading>Kontakt</Heading>
          <Text as="div">
            E-Mail:{" "}
            <Link href="mailto:u.mannel@gmail.com">u.mannel@gmail.com</Link>
          </Text>
          <Text as="div">
            E-Mail:{" "}
            <Link href="mailto:info@huht.wachtelhunde.net">
              info@huht.wachtelhunde.net
            </Link>
          </Text>
          <Text as="div">Tel.: 036967 70031</Text>
          <Text as="div">Mobil: 0170/4711031</Text>
        </Section>
        <Section px="5">
          <Link href="https://www.wachtelhund.de">
            <Image
              src={logo}
              alt="Logo Wachtelhunde Zuechter Verein"
              className="w-auto h-4/5"
            />
          </Link>
        </Section>
      </Flex>
      <Heading align="center">&copy; 2024. Alle Rechte vorbehalten.</Heading>
    </Box>
  );
}
