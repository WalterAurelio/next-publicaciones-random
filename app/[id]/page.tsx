import React from "react";

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
    <div>
      <h1>Este es el título del post número {post.id}: {post.title}</h1>
      <p><b>Y este su cuerpo:</b> {post.body}</p>
    </div>
  );
}

export default Post;
