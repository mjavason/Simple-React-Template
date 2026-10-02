import { AppLink } from '../app-link';
import { RoutesConst } from '@/common/constants/routes.constant';
import { capitalizeFirstLetter } from '@/utils/string.util';

export default function DesktopNavbar() {
  return (
    <div className="mt-6 hidden w-full justify-end border border-red-500 px-15 md:flex">
      <div className="flex justify-between gap-8">
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
                <NavLink
                  to={path}
                  text={capitalizeFirstLetter(key.toLowerCase())}
                />
              </AppLink>
            ),
        )}
      </div>
    </div>
  );
}

function NavLink({ to, text }: { to: string; text: string }) {
  return (
    <AppLink to={to}>
      {({ isActive }) => (
        <p
          className={`text-[20px] leading-none font-medium ${
            isActive ? 'text-core-primary' : 'text-core-black'
          }`}
        >
          {text}
        </p>
      )}
    </AppLink>
  );
}
