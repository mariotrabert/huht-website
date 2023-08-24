import Link from "next/link";
import Image from "next/image";
import logo from "@/public/2011VDWZuechterLogo200.png";

export function NavBar() {
  return (
    <>
      <nav className="bg-emerald-900 py-4 px-48">
        <div className="container mx-auto grid grid-cols-6">
          <div className=" text-white text-lg font-semibold">
            <Link href="/">
              <Image
                src={logo}
                alt="DW Logo"
                className="w-auto h-4/5 max-h-24"
              ></Image>
            </Link>
          </div>

          <div className="col-start-2 col-end-6 grid grid-rows-2 gap-2 justify-start">
            <div>
              <h1 className="text-white font-semibold">
                Deutscher Wachtelhund-Zwinger von der Huht
              </h1>
            </div>
            {/* <div className="grid grid-flow-col"> */}
            <div className="flex justify-between">
              <Link href="/" className="text-white hover:text-gray-300">
                Home
              </Link>
              <Link href="/blog" className="text-white hover:text-gray-300">
                Aktuelles
              </Link>
              <Link href="/about" className="text-white hover:text-gray-300">
                Über uns
              </Link>
              <Link href="/fotos" className="text-white hover:text-gray-300">
                Galerie
              </Link>
              <Link href="/zucht" className="text-white hover:text-gray-300">
                Zucht
              </Link>
              {/* <div></div> */}
            </div>
          </div>
          <div className="col-span-1 grid grid-rows-2 gap-2">
            <div></div>
            <div className="col-span-1 text-right justify-end">
              <Link href="#" className="text-white hover:text-gray-300">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
