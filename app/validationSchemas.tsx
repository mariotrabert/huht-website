import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255),
  description: z.string().min(1, "Description is required."),
  content: z.string().min(1, "Post content is required."),
  published: z.boolean({message: "Published must be a boolean"}),
  // date: z.string().datetime({message: "Invalid datetime string. Must be in ISO 8601 format (e.g. 2024-01-01T20:00:00Z)"}),
  // authorId: z.string().min(1, "Author ID is required."),
});
