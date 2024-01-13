import { getPageData } from "@/lib/posts";
import ReactMarkdown from "react-markdown";

const PrivacyStatement = async () => {
  const fileMarkdown = await getPageData('/app/datenschutz/datenschutz.md')

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col w-full max-w-xl mx-auto">
        <h1 className="text-4xl font-extrabold pb-5 text-left">Datenschutzerklärung</h1>
        <div className="prose">
          <ReactMarkdown>{fileMarkdown.markdownContent}</ReactMarkdown>
        </div>
          <p>Zuletzt aktualisiert am {fileMarkdown.date}</p>
      </div>
    </main>
  );
};

export default PrivacyStatement;
