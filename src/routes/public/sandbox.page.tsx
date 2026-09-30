import DesktopNavbar from '@/components/nav/desktop-navbar';
import { SimpleImage, VeryImportantImage } from '@/components/optimized-image';

function SandBoxPage() {
  return (
    <div>
      <DesktopNavbar />
      <VeryImportantImage
        src={'/images/heavy-image.jpg'}
        className="h-screen w-full"
      />
      <SimpleImage
        src={'/images/heavy-image3.jpg'}
        className="h-screen w-full"
      />
    </div>
  );
}

export default SandBoxPage;
