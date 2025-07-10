'use client';
import SimpleMDE from "easymde";
import "easymde/dist/easymde.min.css";
import { useMemo, useState } from 'react';
import SimpleMdeReact from "react-simplemde-editor";

// WARNING: Make sure to import this component dynamically
// in other parts of the application and with the ssr flag
// set to false. SimpleMDE needs to run on the client side
// only, but Next.JS uses SSR by default. The 'use client'
// directive in this component only does not work if the
// editor is imported into an SSR component somewhere else.
// See Admin Edit Page for an import example.

const EditorForm = ({ post }: { post?: string }) => {
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  
  const customRendererOptions = useMemo(() => {
    return {
      previewRender() {
        return `<div>Hello from preview renderer</div>`;
      },
    } as SimpleMDE.Options;
  }, []);

  return (
    <>
      <SimpleMdeReact
      value="Click on eye icon to see a custom preview"
      options={customRendererOptions}
      placeholder={post!}/>
      <button className="btn btn-primary">Speichern</button>
    </>
  )
}

export default EditorForm
