import DesktopNavbar from '@/components/nav/desktop-navbar';
import { SimpleImage } from '@/components/optimized-image';
import PageContainer from '@/components/page-container';

function SandBoxPage() {
  return (
    <PageContainer>
      <DesktopNavbar />
      <SimpleImage src={'./images/heavy-image.jpg'} className="w-full" />
    </PageContainer>
  );
}

export default SandBoxPage;
