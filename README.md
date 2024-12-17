# Next Js 15 - short doc

### Turbopack Dev

stable and ready to speed up your local development

When we visit a page, only that specific page is compiled, not the entire application or other pages.

```bash
next dev --turbo
```

### Hydration error improvements

- Earlier, when a hydration error occurred in Next.js, it was hard to identify where the error was happening because the code source was not shown. Now, improvements have been made to display the exact source of the error.

Hydration errors now display the source code of the error with suggestions on how to address the issue.

### Static Route Indicator

Next.js now displays a Static Route Indicator during development to help you identify which routes are static or dynamic.

```jsx
 /blog - static
 /blog/[slug] - dynamic
```

### Async Request APIs (Breaking Change)

This is a breaking change and affects the following APIs:

- cookies
- headers
- draftMode
- params in layout.js, page.js, route.js, default.js, generateMetadata, and generateViewport
- searchParams in page.js

```tsx
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
```

```tsx
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
```

### Client Router Cache no longer caches Page components by default

```jsx
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    staleTimes: {
      dynamic: 30, // 30 seconds - Cache
      static: 180, // 30 minutes - Cache
    },
  },
};

export default nextConfig;
```

### <Form> Component

```tsx
import Form from "next/form";

export default function Page() {
  return (
    <Form action="/search">
      <input name="query" />
      <button type="submit">Submit</button>
    </Form>
  );
}
```

### If you found the app's code and documentation helpful, please give the repo a like. This encourages us to bring more updates like this in the future.
