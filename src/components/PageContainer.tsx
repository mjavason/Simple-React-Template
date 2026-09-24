import { HeaderTailwindClasses } from '@/common/constants/constants';

function PageContainer({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="w-full">
      <h1 className={`${HeaderTailwindClasses} text-center font-bold`}>
        {title}
      </h1>
      <div className="min-h-[80vh]">{children}</div>
    </div>
  );
}

export default PageContainer;
