import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { postSchema } from "@/app/validationSchemas";
import authOptions from "../auth/authOptions";
import { getServerSession } from "next-auth";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const body = await request.json();
  const validation = postSchema.safeParse(body);
  if (!validation.success) {
    console.log(NextResponse.json(validation.error.format()));
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  
  const newPost = await prisma.post.create({
    data: { title: body.title, description: body.description, content: body.content, date: body.date, authorId: body.authorId },
  });

  return NextResponse.json(newPost, { status: 201 });
}
