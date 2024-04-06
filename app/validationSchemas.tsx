import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255),
  description: z.string().min(1, "Description is required."),
  content: z.string().min(1, "Post content is required."),
  published: z.boolean({ description: "Needs to be true or false" }),
  date: z.string().datetime(), // 2024-01-01T20:00:00Z (ISO 8601)
  authorId: z.string().min(1, "Author ID is required."),
});
