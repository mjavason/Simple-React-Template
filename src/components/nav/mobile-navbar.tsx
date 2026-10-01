import { Globe, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppLink } from '../app-link';
import { useMobileNavStore } from '@/stores/nav-store';
import { RoutesConst } from '@/common/constants/routes.constant';

export default function MobileNavbar() {
  const isOpen = useMobileNavStore((state) => state.isOpen);
  const open = useMobileNavStore((state) => state.open);
  const close = useMobileNavStore((state) => state.close);

  return (
    <>
      <header className="relative md:hidden z-40 flex items-center bg-gray-800 p-4 text-white shadow-lg">
        <button
          type="button"
          onClick={open}
          className="rounded-lg p-2 transition-colors hover:bg-gray-700"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        <h1 className="ml-4 text-xl font-semibold">
          <Link to={RoutesConst.HOME}>
            <img
              src="/tanstack-word-logo-white.svg"
              alt="TanStack Logo"
              className="h-10"
            />
          </Link>
        </h1>
      </header>

      {isOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={close}
          className="fixed inset-0 z-40 bg-black/50"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 flex h-dvh w-80 flex-col bg-gray-900 text-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-700 p-4">
          <h2 className="text-xl font-bold">Navigation</h2>

          <button
            type="button"
            onClick={close}
            className="rounded-lg p-2 transition-colors hover:bg-gray-800"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          {Object.entries(RoutesConst).map(
            ([key, path]) =>
              typeof path === 'string' && (
                <AppLink
                  key={key}
                  to={path}
                  onClick={close}
                  className="mb-2 flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-800"
                  prefetch="intent"
                >
                  <Globe size={20} />
                  <span className="font-medium">{key}</span>
                </AppLink>
              ),
          )}
        </nav>
      </aside>
    </>
  );
}
