import React from "react";
import Link from 'next/link';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
}

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

export default async function ListaPosteos() {
  const posts = await getPosts();

  return (
    <div>
      {
        posts.map((post: Post) => (
          <div key={post.id}>
            <h2>Este es el post número {post.id}</h2>
            <p>{post.body}</p>
            <Link href={`/${post.id}`}>
              Ver Post
            </Link>
          </div>
        ))
      }
    </div>
  );
}