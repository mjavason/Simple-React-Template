# Simple React Template

A polished Vite + React + TypeScript starter for building a structured frontend with a public/private route split, TanStack Query data layer, and Tailwind-based UI primitives.

This project is designed to be a reliable foundation for dashboards, content apps, internal tools, or small SaaS-style products that need route-level auth and a clean app shell.

## Features

- React 19 + Vite 7
- TypeScript 5 setup with strict project conventions
- React Router DOM 7 with lazy-loaded routes
- TanStack Query for API caching and data fetching
- Tailwind CSS 4 with reusable UI patterns
- Cookie-based auth guards for public/private routing
- Framer Motion transitions and Lenis smooth scrolling
- Toast notifications and app-level error boundary
- Vitest + Testing Library for UI tests

## Stack

- React 19
- Vite 7
- TypeScript 5
- Tailwind CSS 4
- React Router DOM 7
- TanStack Query 5
- Framer Motion
- React Helmet Async
- React Hot Toast
- Vitest + Testing Library

## Prerequisites

- Node.js 18+
- Yarn or npm

## Getting started

Install dependencies:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Then open the app in the browser:

```text
http://localhost:3000
```

## Available scripts

```bash
yarn dev      # start the Vite dev server on port 3000
yarn build    # build the app with Vite and TypeScript
yarn start    # preview the production build
yarn test     # run Vitest in CI mode
yarn lint     # run ESLint and format files
yarn check    # format with Prettier and run ESLint fixes
```

## Environment variables

This project expects Vite environment values for app configuration. Create a `.env` file in the root of the project and add values like:

```env
VITE_API_BASE_URL=https://api.example.com
```

The app reads environment variables through the shared constants layer in `src/common/constants/env.constants.ts`.

## App structure

```text
src/
  app.tsx                     # root app shell and global providers
  main.tsx                    # application bootstrap
  api/                        # API clients, typed responses, and helpers
  assets/
  common/
    constants/
      env.constants.ts        # app env config
      index.constants.ts      # shared app constants
      keys.constants.ts       # cookie/session keys
      routes.constant.ts      # route registry helpers
    types/
    utils/
  components/
    app-link.tsx
    box.tsx
    brokenPageUI.tsx
    errorBoundary.tsx
    notFound.tsx
    loaders.tsx
    optimized-image.tsx
    page-container.tsx
    animate/
    layouts/
    nav/
    ui/
  context/
    progress-context.tsx
  hooks/
    use-api-mutation.hook.ts
    use-api-query.hook.ts
    use-app-navigate.hook.ts
    use-image-preload.hook.ts
  integrations/
    tanstack-query/
  lib/
    utils.ts
  routes/
    app.router.tsx
    public/
    private/
  utils/
    api.util.ts
    currency.util.ts
    types.ts
```

## Routing model

The app uses a route registry split between public and private areas.

### Public routes

- `/`
- `/login`
- `/about`
- `/search`
- `/sandbox`

### Private routes

- `/posts`
- `/posts/:uuid`

The route definitions live in:

- `src/routes/public/public.router.ts`
- `src/routes/private/private.router.ts`
- `src/common/constants/routes.constant.ts`

The app-level router is assembled in `src/routes/app.router.tsx`.

## Auth flow

Authentication is currently cookie-based and route guards are implemented through the public/private route loaders.

- `publicRouteLoader()` redirects an authenticated user from public pages to `/posts`
- `privateRouteLoader()` redirects unauthenticated users to `/login`
- cookie keys are centralized in `src/common/constants/keys.constants.ts`

Relevant files:

- `src/routes/public/public.base.tsx`
- `src/routes/private/private.base.tsx`
- `src/common/constants/keys.constants.ts`

## Layout and app shell

The application bootstraps global providers in `src/app.tsx`, including:

- `ErrorBoundary`
- `HelmetProvider`
- `QueryClientProvider`
- `ReactLenis` for smooth scrolling
- `Toaster` for app notifications
- `RouterProvider` for route handling

## Styling and UI

The project uses Tailwind for styling and includes a small set of reusable UI and layout components under `src/components`.

Common patterns include:

- shared layout containers
- navigation wrappers
- motion-based page transitions
- reusable button and skeleton primitives

## API and data layer

The base API structure is organized under `src/api`, with typed responses and custom hooks around TanStack Query.

This gives the app a clean place to add:

- typed request/response models
- shared custom hooks
- auth flows and session logic
- cached app queries

## Testing

Vitest and Testing Library are included and configured for component-level tests.

Example test location:

- `src/routes/public/home.page.test.tsx`

Run tests with:

```bash
yarn test
```

## Linting and formatting

The project includes standard formatting and linting commands:

```bash
yarn lint
```

```bash
yarn check
```

These commands are configured to keep the codebase consistent with the project ESLint and Prettier rules.

## Notes

This template is intentionally lightweight and easy to adapt. Some common next steps are:

- replace the demo pages with production pages
- connect the API layer to your real backend
- expand auth behavior for persistent user sessions
- grow the test suite as the app becomes more complex

## Summary

This starter is a practical foundation for building a Vite-powered React application with:

- route protection
- query-driven data access
- reusable UI building blocks
- modern frontend tooling
- a clean public/private app structure

It is especially useful for internal tools, product dashboards, content portals, or small SaaS frontends.
