import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="">Herzlich willkommen!</h1>
      </header>
      <main>
        <Link href="/about" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Über uns</Link>
      </main>
    </>
  )
}
