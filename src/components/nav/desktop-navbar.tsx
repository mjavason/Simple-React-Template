import { RoutesConst } from '@/common/constants/routes.constant';
import { capitalizeFirstLetter } from '@/utils/string.util';
import { AppLink } from '../app-link';

export default function DesktopNavbar() {
  return (
    <div className="mt-6 hidden w-full justify-end px-15 md:flex">
      <div className="flex justify-between gap-8">
        {Object.entries(RoutesConst).map(
          ([key, path]) =>
            typeof path === 'string' && (
              <div
                key={key}
                className="mb-2 flex items-center gap-3 rounded-lg p-3"
              >
                <NavLink
                  to={path}
                  text={capitalizeFirstLetter(key.toLowerCase())}
                />
              </div>
            ),
        )}
      </div>
    </div>
  );
}

function NavLink({ to, text }: { to: string; text: string }) {
  return (
    <AppLink to={to} prefetch="intent">
      {({ isActive }) => (
        <p
          className={`hover:text-core-primary text-[20px] leading-none font-medium ${
            isActive ? 'text-core-primary' : 'text-core-black'
          }`}
        >
          {text}
        </p>
      )}
    </AppLink>
  );
}
