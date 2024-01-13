import Hero from "@/components/Hero";
import { getPageData } from "@/lib/posts";
import ReactMarkdown from "react-markdown";

export default async function Home() {
  const markdownContent = (await getPageData('/app/home.md')).markdownContent
  return (
    <>
      <Hero />
      <main className="prose">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </main>
    </>
  );
}
