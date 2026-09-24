# Simple React Template

A lightweight Vite + React + TypeScript starter for a small app shell using React Router, TanStack Query, Tailwind CSS, and shared layout/auth patterns.

## Tech stack

- React 19
- Vite 7
- TypeScript
- Tailwind CSS 4
- React Router DOM 7
- TanStack Query 5
- Framer Motion
- React Helmet Async
- Vitest + Testing Library

## Getting started

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
yarn dev
```

The app runs on:

```text
http://localhost:3000
```

## Available scripts

```bash
yarn dev
yarn build
yarn preview
yarn test
yarn lint
yarn format
yarn check
```

## Project structure

```text
src/
  app.tsx                  # App bootstrap and providers
  main.tsx                 # Root render entry
  routes/
    app.router.tsx         # Main route composition
    public/                # Guest/public pages
    private/               # Authenticated pages
  common/constants/
    constants.ts           # Route constants and shared config
  components/
    layouts/
    loaders.tsx
    errorBoundary.tsx
    notFound.tsx
  styles.css               # Tailwind/base styling
```

## Routing

The app is configured with React Router DOM and a simple public/private split.

### Public routes

- `/` - Home
- `/login` - Login
- `/about` - About
- `/posts/search/search` - Search demo page

### Private routes

- `/posts`
- `/posts/:uuid`

Route definitions live in:

- `src/routes/public/public.router.ts`
- `src/routes/private/private.router.ts`
- `src/common/constants/constants.ts`

### Auth behavior

- `PublicRoute` redirects authenticated users to `/posts` when an `auth_token` cookie exists.
- `PrivateRoute` checks the token and redirects users to `/login` if missing.
- The redirect target is saved in `sessionStorage` before navigating away.

## Layout behavior

The private area wraps content in the base layout from `src/components/layouts/base.tsx`.

The app also enables `ReactLenis` and wraps the app in an `ErrorBoundary` and `HelmetProvider` in `src/app.tsx`.

## Styling

This project uses Tailwind CSS via Vite. Shared utility class constants are defined in `src/common/constants/constants.ts`.

## Testing

Tests are run with Vitest and Testing Library:

```bash
yarn test
```

## Formatting and linting

This project uses Prettier and ESLint:

```bash
yarn lint
yarn format
yarn check
```

## Notes

- Production mode in `src/main.tsx` suppresses console output.
- The project includes a small app shell and demo pages for home, login, about, and posts, rather than a full backend-backed product.
- `RoutesConst.POST_CONTENT()` is a dynamic route helper used for post detail URLs.
