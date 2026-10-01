import { RoutesConst } from '@/common/constants/routes.constant';
import { capitalizeFirstLetter } from '@/utils/string.util';
import { AppLink } from '../app-link';

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
                <NavLink text={capitalizeFirstLetter(key.toLowerCase())} />
              </AppLink>
            ),
        )}
      </div>
    </div>
  );
}

function NavLink({ text }: { text: string }) {
  return (
    <p className="text-card-foreground text-[20px] leading-none font-medium">
      {text}
    </p>
  );
}
