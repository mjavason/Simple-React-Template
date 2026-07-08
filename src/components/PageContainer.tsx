function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[90vh] border-8 border-red-500 p-4">{children}</div>
  );
}

export default PageContainer;
