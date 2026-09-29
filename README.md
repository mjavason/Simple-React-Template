# Simple React Template

A lightweight Vite + React + TypeScript starter designed for a small app shell with route protection, TanStack Query, Tailwind styling, and a shared layout/auth pattern.

This project is a good starting point for a SaaS-style frontend, admin shell, or content portal with a public/private split.

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

Start the app:

```bash
yarn dev
```

Then open:

```text
http://localhost:3000
```

## Available scripts

```bash
yarn dev      # start Vite dev server on port 3000
yarn build    # vite build && tsc
yarn start    # preview production build
yarn test     # run Vitest
yarn lint     # eslint --fix && prettier --write .
yarn check    # prettier --write . && eslint --fix
```

## Environment variables

This template expects Vite environment variables for app configuration. Create a `.env` file in the project root with values such as:

```env
VITE_API_BASE_URL=https://api.example.com
```

The app reads these in `src/common/constants/env.constants.ts`.

## Project structure

```text
src/
  app.tsx                     # bootstrap + app-level providers
  main.tsx                    # React mount and production console suppression
  api/                       # API clients and types
  assets/
  common/
    constants/
      env.constants.ts        # Vite env values
      keys.constants.ts       # cookie/session keys
      routes.constant.ts      # route helpers
    types/
    utils/
  components/
    layouts/
    ui/
    errorBoundary.tsx
    notFound.tsx
    loaders.tsx
    Header.tsx
    PageContainer.tsx
  hooks/
    use-api-query.hook.ts
    use-api-mutation.hook.ts
  integrations/
    tanstack-query/
  routes/
    app.router.tsx
    public/
    private/
  utils/
```

## Routing model

The app uses a simple public/private route split:

### Public routes

- `/`
- `/login`
- `/about`
- `/search`

### Private routes

- `/posts`
- `/posts/:uuid`

The route registry is defined in:

- `src/routes/public/public.router.ts`
- `src/routes/private/private.router.ts`
- `src/common/constants/routes.constant.ts`

## Auth behavior

Authentication is cookie-based and handled by route guards:

- `PublicRoute` redirects authenticated users to `/posts` when an auth cookie exists.
- `PrivateRoute` checks the auth cookie and redirects to `/login` if missing.
- The current route is saved in session storage before redirecting, which is useful for post-login return flow.

Relevant files:

- `src/routes/public/public.base.tsx`
- `src/routes/private/private.base.tsx`
- `src/common/constants/keys.constants.ts`

## Layout and app shell

The app wraps the router in a few shared high-level providers:

- `ErrorBoundary`
- `HelmetProvider`
- `BrowserRouter`
- `QueryClientProvider`
- `ReactLenis` smooth scrolling
- `Toaster` for notifications

This is set up in `src/app.tsx`.

## Styling

The project uses Tailwind via Vite and includes a small set of reusable UI components under `src/components/ui` and `src/components`.

The design is intentionally simple and easy to extend for custom product UI.

## API and data layer

The template includes a basic API structure in `src/api`, with typed responses and shared hooks around TanStack Query.

This is a good base for:

- endpoint abstraction
- shared response typing
- auth requests
- cached data fetching

## Testing

Vitest and Testing Library are already installed, and the project includes a working sample page test at `src/routes/public/home.page.test.tsx`.

This is a simple example of testing rendered UI in the app:

```tsx
// @vitest-environment jsdom

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomePage from './home.page';

describe('HomePage', () => {
  it('renders the home page content', () => {
    render(<HomePage />);

    expect(screen.getByText('Hello')).toBeTruthy();
    expect(screen.getByRole('button', { name: /click me/i })).toBeTruthy();
  });
});
```

Run tests with:

```bash
yarn test
```

## Notes and recommendations

This is a template, not a finished product. A few things to decide before using it in a real app:

- Replace the demo pages with your actual product pages
- Connect the API layer to your real backend
- Add persistent auth/session handling if required by your app
- Expand the test suite beyond the sample home-page test as the app grows

## Summary

This project is a strong starting point for a Vite-based React app with:

- route-level auth guards
- shared app providers
- API/data layer structure
- query caching
- Tailwind styling
- responsive app shell

It is especially useful as a frontend foundation for internal tools, product dashboards, or lightweight content apps.
