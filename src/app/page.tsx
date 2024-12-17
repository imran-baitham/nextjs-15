import Form from "next/form";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-dvh w-full">
      <h1 className="font-extrabold text-4xl">Next Js 15</h1>
      <Form action={"/search"} className="flex flex-col gap-3">
        <input
          name="query"
          type="text"
          placeholder="Search for 'te'"
          className="p-2 rounded text-black"
        />
        <button type="submit" className="bg-blue-500 p-2 rounded">
          Search Posts
        </button>
      </Form>
      <Link href={"/posts"} className="font-bold text-blue-400">
        View Posts
      </Link>
    </div>
  );
}
