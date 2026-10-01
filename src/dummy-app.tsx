import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
  useNavigation,
} from 'react-router-dom';
import TopBarProgress from 'react-topbar-progress-indicator';
import { getCookie } from './helpers/cookie.helper';

// -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------

const AUTH_TOKEN = 'auth_token';
const LOGIN_ROUTE = '/login';

// -----------------------------------------------------------------------------
// Lazy pages
// Replace these imports with your actual pages.
// -----------------------------------------------------------------------------

const Login = lazy(() => import('@/routes/public/auth/login.page'));
const Home = lazy(() => import('@/routes/public/home.page'));
const About = lazy(() => import('@/routes/public/about.page'));

// -----------------------------------------------------------------------------
// Query client
// -----------------------------------------------------------------------------

const queryClient = new QueryClient();

// -----------------------------------------------------------------------------
// Top Loader
// -----------------------------------------------------------------------------

TopBarProgress.config({
  barColors: {
    '1.0': '#00a8cc',
  },
  barThickness: 2,
  shadowBlur: 2,
});

// -----------------------------------------------------------------------------
// Page Loader
// -----------------------------------------------------------------------------

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Loading...
    </div>
  );
}

// -----------------------------------------------------------------------------
// Error Boundary
// -----------------------------------------------------------------------------

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error) {
    console.error('[ErrorBoundary]', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center">
          Something went wrong.
        </div>
      );
    }

    return this.props.children;
  }
}

// -----------------------------------------------------------------------------
// Public Route
// -----------------------------------------------------------------------------

function PublicRoute() {
  return <Outlet />;
}

// -----------------------------------------------------------------------------
// Private Route
// -----------------------------------------------------------------------------

function PrivateRoute() {
  const location = useLocation();
  const authToken = getCookie(AUTH_TOKEN);

  if (!authToken) {
    sessionStorage.setItem('redirect_route', location.pathname);

    return <Navigate to={LOGIN_ROUTE} replace />;
  }

  return <Outlet />;
}

// -----------------------------------------------------------------------------
// Router
// -----------------------------------------------------------------------------

function RouterLayout() {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state !== 'idle' && <TopBarProgress />}

      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <RouterLayout />,
    children: [
      {
        element: <PublicRoute />,
        children: [
          {
            path: '/login',
            element: <Login />,
          },
          {
            path: '/about',
            element: <About />,
          },
        ],
      },

      {
        element: <PrivateRoute />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
        ],
      },

      {
        path: '*',
        element: (
          <div className="flex min-h-screen items-center justify-center">
            404 — Page not found
          </div>
        ),
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

// -----------------------------------------------------------------------------
// App - This file exists mainly for debugging and easier AI communication
// -----------------------------------------------------------------------------

function DummyApp() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className="min-h-screen w-screen overflow-x-hidden">
            <Toaster
              position="top-center"
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 5000,
                },
              }}
            />

            <AppRouter />
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default DummyApp;
