import Link from 'next/link'

import { getSortedPostsData } from '@/lib/posts'

type AllPostsData = {
  date: string
  title: string
  slug: string
  description: string
}[]

export default function BlogPage() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
    <>
      <section>
        <h1>Blog</h1>
        <ul>
          {allPostsData.map(({ slug, date, title, description }) => (
            <li key={slug}>
              <div className='font-medium mb-1 mt-5'>
                <Link href={`/blog/${slug}`}>{title}</Link>
              </div>
              <p>{description}</p>
              <small className='text-gray-500 font-medium'>
                <div>{date}</div>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}