import { useState } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export function ErrorElement() {
  const error = useRouteError();
  const [copied, setCopied] = useState(false);

  const errorMessage = isRouteErrorResponse(error)
    ? error.statusText || `Request failed with status ${error.status}`
    : error instanceof Error
      ? error.message
      : 'An unexpected error occurred.';

  const stack = error instanceof Error && error.stack ? error.stack : '';

  const errorText = [
    `Error: ${errorMessage}`,
    stack && `\nStack trace:\n${stack}`,
  ]
    .filter(Boolean)
    .join('\n');

  const handleCopy = async () => {
    await navigator.clipboard.writeText(errorText);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16 text-gray-900">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-xl border border-red-200 bg-white shadow-sm">
          <div className="border-b border-red-200 bg-red-50 px-6 py-5">
            <p className="mb-1 text-sm font-medium text-red-600">
              Application Error
            </p>

            <h1 className="text-xl font-semibold">Something went wrong</h1>
          </div>

          <div className="p-6">
            <div className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="mb-2 text-sm font-medium text-gray-500">Error</p>

              <p className="font-mono text-sm text-red-600">{errorMessage}</p>
            </div>

            {stack && (
              <details open className="mb-6">
                <summary className="mb-3 cursor-pointer text-sm font-medium text-gray-700">
                  Stack trace
                </summary>

                <pre className="max-h-96 overflow-auto rounded-lg bg-gray-950 p-4 text-xs leading-5 text-gray-300">
                  <code>{stack}</code>
                </pre>
              </details>
            )}

            <div className="flex items-center justify-end gap-4 border-t border-gray-200 pt-5">
              <button
                type="button"
                onClick={handleCopy}
                className="shrink-0 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                {copied ? 'Copied' : 'Copy error'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
