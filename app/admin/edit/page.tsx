import dynamic from "next/dynamic";

const EditorForm = dynamic(
  () => import('../_components/EditorForm'),
  {
    ssr: false,
    loading: () => <div>Loading...</div>
  }
)

const EditPage = ({ slug }: { slug?: string }) => {
  if (!slug) {
    slug = 'Default'
  }
  return (
    <>
      <h1>Seite bearbeiten - {slug}</h1>
      <EditorForm slug={slug}/>
    </>
  );
};

export default EditPage;
