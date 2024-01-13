import { getPageData } from "@/lib/posts";
import ReactMarkdown from "react-markdown";

const Impressum = async () => {
  const fileMarkdown = await getPageData('/app/impressum/impressum.md')

  return (
      <main className="flex justify-center items-center">
        <div className="flex flex-col w-full max-w-xl mx-auto">
          <h1 className="text-4xl font-extrabold pb-5 text-left">Impressum</h1>
          <div className="prose">
            <ReactMarkdown>{fileMarkdown.markdownContent}</ReactMarkdown>
            Zuletzt aktualisiert am: {fileMarkdown.date}
          </div>
        </div>
      </main>
  );
};

export default Impressum;
