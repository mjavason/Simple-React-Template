import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactLenis } from 'lenis/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
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
              <AppRouter />
            </ReactLenis>
          </QueryClientProvider>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
