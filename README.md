# The Little Pages

A poetry / blog / vlog site built with [Astro](https://astro.build). Content lives
as plain markdown files, so adding a new poem, post, or video never means touching
any design code.

## Running it locally

You'll need [Node.js](https://nodejs.org) installed (v22+).

```bash
npm install
npm run dev
```

Then open http://localhost:4321 — the site auto-reloads as you edit.

## Adding content

### A new poem
Create a new file in `src/content/poetry/`, e.g. `src/content/poetry/my-new-poem.md`:

```markdown
---
title: "My New Poem"
chapter: "in the feels"
note: "Optional — any notes about the poem, shown under it."
---

Your poem text goes here,
line by line,
just like this.
```

The filename (minus `.md`) becomes the page's URL, e.g. `/poetry/my-new-poem`.

### A new blog post
Create a file in `src/content/blog/`:

```markdown
---
title: "My New Post"
excerpt: "One or two sentences shown on the blog listing page."
date: 2026-09-20
---

Your post body goes here. You can use full markdown — headings, bold, links, etc.
```

### A new vlog entry
Create a file in `src/content/vlog/`:

```markdown
---
title: "My New Video"
description: "What the video is about."
date: 2026-09-20
videoUrl: "https://youtube.com/your-video-link"
---
```

Leave `videoUrl` out if the video isn't up yet — it'll show "coming soon" instead.

### Draft / hide something
Add `draft: true` to any entry's frontmatter to keep it out of the site without
deleting it.

## Deploying it

This is a fully static site — `npm run build` outputs plain HTML/CSS/JS to `dist/`,
which you can host anywhere. The easiest free options:

- **Netlify** — drag the `dist/` folder into netlify.com/drop, or connect this
  folder as a GitHub repo for auto-deploys on every push.
- **Vercel** — `npx vercel` from this folder, or connect via GitHub.
- **Cloudflare Pages** — connect the GitHub repo, build command `npm run build`,
  output directory `dist`.

Once it's live, you can point a custom domain (like thelittlepages.com) at it from
your host's dashboard.

## Handing this off later

Content lives separately from design in `src/content/` as plain markdown — so if
you hire a developer down the line, they can either keep this exact design and
rebuild the backend around it, or pull the markdown content straight into
whatever new site they build. Nothing here is locked into a proprietary platform.
