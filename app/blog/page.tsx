import Link from "next/link";
import prisma from "@/prisma/client";
import { Button } from "@radix-ui/themes";

const BlogPage = async () => {
  const posts = await prisma.post.findMany();

  return (
    <section>
      <h1>Blog</h1>
      <Link href="/blog/new">
        <Button>Neuer Beitrag</Button>
      </Link>
      <ul>
        {posts.map(({ id, date, title, description }) => (
          <li key={id}>
            <div className="font-medium mb-1 mt-5">
              <Link href={`/blog/${id}`}>{title}</Link>
            </div>
            <p>{description}</p>
            <small className="text-gray-500 font-medium">
              <div>{date.toDateString()}</div>
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogPage;
