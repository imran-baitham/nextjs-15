import Link from "next/link";
import { Post } from "@/types";

async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const query = (await searchParams).query;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?title_like=^${query}`
  );

  const posts: Post[] = await response.json();

  return (
    <main className="text-center py-32">
      <h1 className="font-extrabold text-4xl">
        {query ? `Search Results for "${query}"` : "Search Results Page"}
      </h1>
      <div className="max-w-4xl text-center mx-auto flex flex-col py-10 gap-3">
        {posts.map((item: Post, index: number) => (
          <Link href={`/posts/${item.id}`} key={index}>
            {item.title}
          </Link>
        ))}
      </div>
      <Link href={"/"} className="font-bold text-blue-400">
        Home
      </Link>
    </main>
  );
}

export default page;
