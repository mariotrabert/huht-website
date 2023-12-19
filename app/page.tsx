import fs from "fs";
import Hero from "@/components/Hero";
import { getPostDataAsHTML } from "@/lib/posts";
import path from "path";
import ReactMarkdown from "react-markdown";

export default async function Home() {
  const filelocation = path.join(process.cwd(), "/posts/home.md");
  const postMarkdown = fs.readFileSync(filelocation, "utf-8");
  return (
    <>
      <Hero />
      <article className="prose">
        <ReactMarkdown>{postMarkdown}</ReactMarkdown>
      </article>
    </>
  );
}
