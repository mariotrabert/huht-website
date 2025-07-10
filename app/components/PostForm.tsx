"use client";

// import ErrorMessage from "@/app/components/ErrorMessage";
// import Spinner from "@/app/components/Spinner";
import { postSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Post, User } from "@prisma/client";
// import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import prisma from "@/prisma/client";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";
import authOptions from '../api/auth/authOptions'
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query'

type PostFormData = z.infer<typeof postSchema>;

const PostForm = ({ post }: { post?: Post }, { user }: { user?: User}) => {
  const router = useRouter();
  const { status, data: session } = useSession();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const published = watch("published")
  const [tooltipText, setTooltipText] = useState('Nein')

  useEffect(() => {
    setTooltipText(published ? "Ja" : "Nein");
  }, [published]);
  

  // const onSubmit = handleSubmit(async (data) => {
    const onSubmit = handleSubmit(async (data) => {
    console.log("Form data", JSON.stringify(data))
    try {
      setSubmitting(true);
      const currentTime = new Date().toISOString();
      const currentUser = session?.user
      const authorId = await prisma.user.findUnique({
        where: {
          email: currentUser?.email!
        }}     
      )
      console.log(authorId)
      if (post) await axios.patch("/api/posts/" + post.id, data);
      else {
        const updatedData = {
          ...data,
          published: published,
          date: currentTime,
          authorId: authorId
        }
        await axios.post("/api/posts", updatedData);}
      router.push("/blog/");
    } catch (error) {
      console.log(error)
      setSubmitting(false);
      setError("An unexpected error occurred.");
    }
  }
  // , async (data) => {console.log("Error: Form invalid. Data:\n"  + JSON.stringify(data))}
  );

  return (
    <div className="max-w-xl">
      {error && (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
      <form className="space-y-3" onSubmit={onSubmit}>
        <input
          type="text"
          defaultValue={post?.title}
          placeholder="Titel des Beitrags"
          className="input input-bordered input-primary w-full max-w-xs mb-3"
          {...register("title")}
        />
        {errors.title?.message && (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{errors.title?.message}</span>
          </div>
        )}
        <textarea
          placeholder="Beschreibung des Beitrags"
          className="textarea textarea-bordered textarea-md w-full max-w-xs"
          {...register("description")}
          defaultValue={post?.description!}
        ></textarea>
        {errors.description?.message && (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{errors.description?.message}</span>
          </div>
        )}
        <Controller
          name="content"
          control={control}
          defaultValue={post?.content}
          render={({ field }) => (
            <SimpleMDE placeholder="Beitrag verfassen..." {...field} />
          )}
        />
        {errors.content?.message && (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{errors.content?.message}</span>
          </div>
        )}

        <div className="flex flex-col">
          <div className="form-control w-60">
            <label className="cursor-pointer label">
              <span className="label-text">Beitrag veröffentlichen?</span>
              <div className="tooltip tooltip-primary" data-tip={tooltipText}>
                <input {...register("published")}
                  type="checkbox"
                  className="toggle
                  toggle-primary"
                  />
              </div>
            </label>
          </div>        </div>

        {/* <button onClick={() => console.log("Button was clicked")} className="btn btn-primary"> */}
        <button className="btn btn-primary">
          {post ? "Beitrag updaten" : "Neuen Beitrag hochladen"}{" "}
          {isSubmitting && (
            <span className="loading loading-spinner loading-md"></span>
          )}
        </button>
      </form>
    </div>
  );
};

export default PostForm;
