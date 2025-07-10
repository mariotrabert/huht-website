import React from 'react'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
// import IssueFormSkeleton from './loading'

const PostForm = dynamic(
  () => import('../../../components/PostForm'),
  {
    ssr: false, 
    // loading: () => <IssueFormSkeleton />
  }
)
interface Props {
  params: { slug: string }
}
const EditPostPage = async ({ params }: Props) => {
  const post = await prisma.post.findUnique({
    where: { id: parseInt(params.slug)}
  });

  if (!post) notFound();

  return (
    <PostForm post={post} />
  )
}

export default EditPostPage