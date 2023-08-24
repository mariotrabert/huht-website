import { getPostData, BlogPostProps } from "@/lib/posts"

export default async function BlogPost({ params }: any) {
    const postData = await getPostData(params.id)
    return (
        <section>
            <title>{postData.title}</title>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </section>
    )
}