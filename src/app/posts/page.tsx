import { Post } from "@/types";
import React from "react";

async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const query = (await searchParams).query;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?title_like=^${query}`,
    {
      // cache: "no-cache", default in nextjs 15
      cache: "force-cache",
      next: {
        revalidate: 600, // after 10 minutes, run fetch call again
      },
    }
  );

  const posts: Post[] = await response.json();

  return (
    <div>
      <div>
        {posts.map((item: Post, index: number) => (
          <div key={index}>{item.title}</div>
        ))}
      </div>
    </div>
  );
}

export default page;
