import Navbar from './nav/mobile-navbar';

function PageContainer({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div id="page-container" className={`min-h-full max-w-screen ${className}`}>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}

export default PageContainer;
