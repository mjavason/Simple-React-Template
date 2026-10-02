import { Menu, X } from 'lucide-react';
import { AppLink } from '../app-link';
import { RoutesConst } from '@/common/constants/routes.constant';
import { useMobileNavStore } from '@/common/stores/nav-store';

export default function MobileNavbar() {
  const isOpen = useMobileNavStore((state) => state.isOpen);
  const open = useMobileNavStore((state) => state.open);
  const close = useMobileNavStore((state) => state.close);

  return (
    <>
      <header className="text-core-black relative z-40 flex items-center p-4 lg:hidden">
        <button
          type="button"
          onClick={open}
          className="rounded-lg p-2 transition hover:translate-0.5"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
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
        className={`bg-core-white text-core-black fixed top-0 left-0 z-50 flex h-dvh w-80 flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="border-core-gray-light flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-bold">Navigation</h2>

          <button
            type="button"
            onClick={close}
            className="rounded-lg p-2 transition hover:translate-0.5"
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
                  className="mb-2 flex items-center gap-3 rounded-lg p-3 transition hover:translate-0.5"
                  prefetch="intent"
                >
                  {({ isActive }) => (
                    <span
                      className={`text-base leading-none font-medium ${
                        isActive ? 'text-core-primary' : 'text-core-black'
                      }`}
                    >
                      {key}
                    </span>
                  )}
                </AppLink>
              ),
          )}
        </nav>
      </aside>
    </>
  );
}
