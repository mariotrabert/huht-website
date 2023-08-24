import { getPostData, BlogPostProps } from "@/lib/posts"

export default async function BlogPost({ params }: any) {
    const postData = await getPostData(params.id)
    return (
        <section>
            <title>{postData.title}</title>
            <input id={postData.title} type="checkbox" className="cursor-pointer peer" />
            <label htmlFor={postData.title} className="peer-checked:line-through">{id}</label>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </section>
    )
}