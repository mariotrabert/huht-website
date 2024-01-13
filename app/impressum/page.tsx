import Link from "next/link";
import React from "react";
import path from "path";
import fs from "fs";
import ReactMarkdown from "react-markdown";

const Impressum = () => {
  const filelocation = path.join(process.cwd(), "/app/impressum/impressum.md");
  const postMarkdown = fs.readFileSync(filelocation, "utf-8");

  return (
      <main className="flex justify-center items-center">
        <div className="flex flex-col w-full max-w-xl mx-auto">
          <h1 className="text-4xl font-extrabold pb-5 text-left">Impressum</h1>
          <div className="prose">
            <ReactMarkdown>{postMarkdown}</ReactMarkdown>
          </div>
        </div>
      </main>
  );
};

export default Impressum;
