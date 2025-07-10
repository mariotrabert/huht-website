import dynamic from "next/dynamic";
// import IssueFormSkeleton from './loading'

const PostForm = dynamic(
  () => import("@/app/components/PostForm"), 
  { 
    ssr: false,
    loading: () => <span className="loading loading-spinner loading-lg"></span>
  }
);

const NewPostPage = () => {
  
  return (
    <PostForm />
  );
};

export default NewPostPage;
// const NewPostPage = () => {
//   return (
//     <>
//       <div className="flex flex-col w-full">
//         <h1>Neuer Beitrag</h1>
//         <div className="divider"></div>
//         <PostForm />
//       </div>
//     </>
//   );
// };

// export default NewPostPage;
