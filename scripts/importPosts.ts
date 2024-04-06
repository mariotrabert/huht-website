const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Sends all markdown files (blog posts) in ./posts
// to create posts endpoint (/api/posts) and stores
// them in database. Make sure to include the necessary
// metadata in the .md files (see prisma schema)
async function importPosts() {
  const postsDirectory = path.join(__dirname, "..", "posts");
  const filenames = fs.readdirSync(postsDirectory);

  for (const filename of filenames) {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    // Your existing logic to insert data
    console.log(`Importing post: ${data.title}`);
    const post = {
      title: data.title,
      date: new Date(data.date), // Ensure the date is in a proper format
      description: data.description,
      content: content,
      authorId: "cltvehafp0000ippbpw5lmibj",
    };

    await prisma.post.create({ data: post });
  }

  console.log("Posts imported successfully");
}

importPosts().catch((e) => {
  console.error(e);
  process.exit(1);
});
