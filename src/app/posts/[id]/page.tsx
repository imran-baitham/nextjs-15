import { Post } from "@/types";

async function page({ params }: { params: Promise<{ id: string }> }) {
  // await headers();
  // await cookies();

  const id = (await params).id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post: Post = await response.json();

  console.log(id, "logs params");

  return (
    <div>
      <h1>Dynmic Post</h1>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
}

export default page;
