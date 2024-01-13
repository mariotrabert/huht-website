import path from "path";
import React from "react";
import ReactMarkdown from "react-markdown";
import fs from "fs";

const PrivacyStatement = () => {
  const filelocation = path.join(
    process.cwd(),
    "/app/datenschutz/datenschutz.md"
  );
  const postMarkdown = fs.readFileSync(filelocation, "utf-8");

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col w-full max-w-xl mx-auto">
        <h1 className="text-4xl font-extrabold pb-5 text-left">Datenschutzerklärung</h1>
        <div className="prose">
          <ReactMarkdown>{postMarkdown}</ReactMarkdown>
        </div>
      </div>
    </main>
  );
};

export default PrivacyStatement;
