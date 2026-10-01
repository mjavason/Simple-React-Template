import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactLenis } from 'lenis/react';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './app.css';
import ErrorBoundary from './components/errorBoundary';
import { router } from './routes/app.router';

const queryClient = new QueryClient();

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ReactLenis root options={{ autoRaf: true }}>
            <div className="min-h-screen max-w-screen overflow-x-hidden">
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
              <RouterProvider router={router} useTransitions />
            </div>
          </ReactLenis>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
