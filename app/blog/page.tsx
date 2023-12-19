import Link from 'next/link'

import { getSortedPostsData } from '@/lib/posts'

type AllPostsData = {
  date: string
  title: string
  slug: string
}[]

export default function BlogPage() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
    <>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ slug, date, title }) => (
            <li key={slug}>
              <div className='font-medium mb-1 mt-5'>
                <Link href={`/blog/${slug}`}>{title}</Link>
              </div>
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