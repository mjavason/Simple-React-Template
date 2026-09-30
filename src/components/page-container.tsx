import Navbar from './navbar';

function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <Navbar />
      <div className="min-h-[80vh]">{children}</div>
    </div>
  );
}

export default PageContainer;
