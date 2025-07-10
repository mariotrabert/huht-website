import { getPostDataAsHTML } from '@/lib/posts'
import Link from 'next/link'

type Props = {
  params: { slug: string }
}

type PostData = {
  title: string
  date: string
  contentHtml: string
}

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostDataAsHTML(params.slug)
  console.log(params.slug)
  return {
    title: postData.title,
  }
}

// -< Post >-
export default async function Post({ params }: Props) {
  const postData: PostData = await getPostDataAsHTML(params.slug)

  return (
    <>
      {/* Post Title */}
      <h1 className='font-extrabold text-3xl mb-1'>{postData.title}</h1>

      <div className='text-gray-500 font-medium mb-5'>
        <div>{postData.date}</div>
      </div>

      {/* Post Content */}
      <div
        className='text-gray-600'
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
      {/* TODO make button only visible when authenticated */}
      <Link href={"/blog/edit/"+postData.title}><button className='btn btn-primary mt-5'>Seite bearbeiten</button></Link>
    </>
  )
}

/* TIP: dangerouslySetInnerHTML is a React feature that allows you to render HTML that comes from an external source as if it were regular JSX. It replaces innerHTML used by Javascript.
Here we are rendering the HTML that comes from the markdown file thanks to remark (remark converted the markdown into HTML)
*/