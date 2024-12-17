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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
