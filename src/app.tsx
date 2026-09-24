import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactLenis } from 'lenis/react';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import './app.css';
import ErrorBoundary from './components/errorBoundary';
import AppRouter from './routes/app.router';

function App() {
  const queryClient = new QueryClient();

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <ReactLenis root options={{ autoRaf: true }}>
              <div className="w-screen overflow-x-hidden min-h-screen p-4">
                <Toaster
                  position="top-right"
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
            </ReactLenis>
          </QueryClientProvider>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
