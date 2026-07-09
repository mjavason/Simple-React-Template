function PageContainer({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div>
      <h1 className="text-center text-9xl font-bold">{title}</h1>
      <div className="min-h-[90vh] p-4">{children}</div>;
    </div>
  );
}

export default PageContainer;
