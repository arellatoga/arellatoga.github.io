# Arel Latoga — Portfolio

The source for [arellatoga.github.io](https://arellatoga.github.io/), Arel Latoga's personal portfolio.

## Tech stack

- React and TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Vitest and Testing Library

## Local development

Requirements: Node.js 20 or later and [pnpm](https://pnpm.io/).

```sh
git clone https://github.com/arellatoga/arellatoga.github.io.git
cd arellatoga.github.io
pnpm install
pnpm dev
```

The development server will print its local URL when it starts.

## Available commands

```sh
pnpm dev       # Start the development server
pnpm build     # Create a production build in dist/
pnpm preview   # Preview the production build locally
pnpm lint      # Run ESLint
pnpm test      # Run the test suite once
```

## Deployment

GitHub Actions builds and deploys the site to GitHub Pages whenever a commit is pushed to `main`. The workflow can also be run manually from the repository's **Actions** tab.

For the first deployment, open **Settings → Pages** in the GitHub repository and set **Source** to **GitHub Actions**.

## License
