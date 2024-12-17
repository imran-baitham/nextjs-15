import { Post } from "@/types";
import Link from "next/link";
import React from "react";

// {
//   searchParams,
// }: {
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// }
//   const query = (await searchParams).query;
async function page() {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts`,
    // `https://jsonplaceholder.typicode.com/posts?title_like=^${query}`,
    {
      // cache: "no-cache", default in nextjs 15
      //   cache: "force-cache",
      //   next: {
      //     revalidate: 600, // after 10 minutes, run fetch call again
      //   },
    }
  );

  const posts: Post[] = await response.json();

  return (
    <main className="text-center py-32">
      <h1 className="font-extrabold text-4xl">All Posts</h1>
      <div className="max-w-4xl text-center mx-auto flex flex-col py-10 gap-3">
        {posts.map((item: Post, index: number) => (
          <Link href={`/posts/${item.id}`} key={index}>
            {item.title}
          </Link>
        ))}
      </div>
    </main>
  );
}

export default page;
