import { Post } from "@/types";
import Link from "next/link";

async function page({ params }: { params: Promise<{ id: string }> }) {
  // await headers();
  // await cookies();

  const id = (await params).id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const post: Post = await response.json();

  return (
    <main className="text-center py-32">
      <h1 className="font-extrabold text-4xl">{post.title}</h1>
      <div className="max-w-4xl text-center mx-auto flex flex-col py-10 gap-3">
        <p>{post.title}</p>
        <p>{post.body}</p>
      </div>
      <Link href={"/"} className="font-bold text-blue-400">
        Home
      </Link>
    </main>
  );
}

export default page;
