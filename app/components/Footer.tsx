import Image from "next/image";
import logo from "@/public/2011VDWZuechterLogo200.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-8">
        <section id="owner-details" className="md:w-1/3 p-4">
          <h2>Inhaber:</h2>
          <p>Uwe Mannel</p>
          <p>Zur Sängerwiese 3</p>
          <p>36419 Bermbach</p>
        </section>
        <section id="contact-details" className="md:w-1/3 p-4">
          <h2>Kontakt</h2>
          <p>E-Mail: <Link href="mailto:u.mannel@gmail.com">u.mannel@gmail.com</Link></p>
          <p>E-Mail: <Link href="mailto:info@huht.wachtelhunde.net">info@huht.wachtelhunde.net</Link></p>
          <p>Tel.: 036967 70031</p>
          <p>Mobil: 0170/4711031</p>
        </section>
        <section className="p-4">
          <Link href="https://www.wachtelhund.de">
            <Image
              src={logo}
              alt="Logo Wachtelhunde Zuechter Verein"
              className="w-auto h-5/6 my-auto"
            />
          </Link>
        </section>
      </div>
      <div className="text-center">
        <h2 className="text-gray-200">
          Copyright &copy; 2023. Alle Rechte vorbehalten.
        </h2>
      </div>
    </footer>
  );
}
