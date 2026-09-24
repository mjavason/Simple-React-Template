import { RoutesConst } from '@/common/constants/constants';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

export const TopNavbar = ({ title }: { title?: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <header className="w-full border-b-2 border-transparent">
      <div className="gwa-container flex items-center justify-between py-5">
        <div className="flex items-center gap-4">
          <img
            src="/logo_lg.png"
            alt="GWA"
            className="h-auto max-w-22.5 md:max-w-25"
          />

          <Link to={RoutesConst.HOME}>
            <span className="heading-font text-white uppercase">
              {title || 'Home'}
            </span>
          </Link>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Open user menu"
            aria-expanded={menuOpen}
          >
            <img
              src={'/default_pp.png'}
              alt="Profile"
              className="h-10 w-10 rounded-full border-2 border-white object-cover"
            />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-full z-50 mt-3 min-w-37.5 overflow-hidden rounded-md border-2 border-[#f2f2f2] bg-white py-0 shadow-lg">
              <button
                type="button"
                className="block w-full bg-transparent px-4 py-2 text-left font-semibold hover:bg-[#FFE8B6]"
                onClick={() => {
                  setMenuOpen(false);
                  navigate(RoutesConst.HOME);
                }}
              >
                Profile
              </button>

              <button
                type="button"
                className="block w-full bg-transparent px-4 py-2 text-left font-semibold hover:bg-[#FFE8B6]"
                onClick={() => {
                  toast.error('Disabled');
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
