import { ReactLenis } from 'lenis/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import './app.css';
import ErrorBoundary from './components/errorBoundary';
import AppRouter from './routes/app.router';

const queryClient = new QueryClient();

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <ReactLenis root options={{ autoRaf: true }}>
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
            </ReactLenis>
          </QueryClientProvider>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
