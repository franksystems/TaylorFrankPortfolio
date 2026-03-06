# Taylor Frank Portfolio

A deploy-ready Next.js portfolio site for Staff / Senior software engineering roles.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Keep the default framework setting as **Next.js**.
4. Deploy.

## Why the previous build looked broken

The earlier package was missing the Tailwind/PostCSS setup required for utility classes to compile. As a result, only the plain custom CSS loaded and most Tailwind layout classes never applied.

This version includes:
- `tailwind.config.ts`
- `postcss.config.js`
- `autoprefixer`
- corrected global styles

## Content updates

Most text and metrics live in `data/site.ts`.
