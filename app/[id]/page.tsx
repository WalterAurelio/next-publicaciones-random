import React from "react";
import Link from "next/link";

async function getPost(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

interface PageProps {
  params: { id: number },
  searchParams?: { [key: string]: string | string[] | undefined }
}

async function Post({ params }: PageProps) {
  const post: Post = await getPost(params.id)

  return (
    <>
      <div className="flex flex-col items-center w-1/2 mx-auto bg-slate-800 rounded-md">
        <h1 className="text-2xl p-4">Este es el título del post número {post.id}: {post.title}</h1>
        <p className="text-justify text-black bg-white p-4 rounded-b-md"><b>Y este su cuerpo:</b> {post.body}</p>
      </div>
      <Link href='/' className="uppercase rounded-md block w-1/2 mx-auto mt-4 p-2 bg-gray-800 hover:bg-slate-500 text-center">
        Volver
      </Link>
    </>
  );
}

export default Post;
