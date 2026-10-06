# Personal Portfolio v2

A React portfolio built with Vite. Its source is organized into reusable components in `src/common`, page sections in `src/sections`, and image assets in `src/assets`, following the structure of Personal Portfolio v1.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build, run `npm run build`.

## GitHub projects

The Projects section first requests public GitHub data directly. If that request fails, it falls
back to a server-side function in `netlify/functions/github-projects.js`.

For local development, create a `.env` file in the project root and set `GITHUB_TOKEN` there, then
run `npm run dev` as usual. Vite serves the function fallback locally without the Netlify CLI.

For deployment, set `GITHUB_TOKEN` as an environment variable in your Netlify site settings, then
redeploy. Use a token with read-only access to public repositories. Do not add the token to source
code or a `VITE_*` variable, since browser-exposed variables are included in the client bundle.
