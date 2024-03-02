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

  function bodyPost(body: string): string {
    let cuerpo: string = body;
    if (cuerpo.length > 160) {
      cuerpo = `${cuerpo.slice(0, 160)}...`;
    }
    return cuerpo;
  }

  return (
    <div className="grid grid-cols-auto gap-8 p-4">
      {
        posts.map((post: Post) => (
          <div key={post.id} className="flex flex-col h-[17.5rem] bg-slate-500 rounded-md">
            <h2 className="mb-2 text-xl text-center p-2">Este es el post número {post.id}</h2>
            <div className="p-2 overflow-hidden h-full bg-white">
              <p className="text-black line-clamp-7">{post.body}</p>
            </div>
            <Link href={`/${post.id}`} className="uppercase text-center mt-auto p-2 bg-gray-800 hover:bg-slate-500 rounded-b-md" >
              Ver Post
            </Link>
          </div>
        ))
      }
    </div>
  );
}