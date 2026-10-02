import DesktopNavbar from './desktop-navbar';
import MobileNavbar from './mobile-navbar';

function Navbar() {
  return (
    <header>
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
}

export default Navbar;
