import PageContainer from '@/components/page-container';

export default function AboutPage() {
  const n = 200;

  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel a vitae officiis ea distinctio aliquid magni eos commodi? Itaque sequi ut, ab totam eum facilis beatae nihil sapiente repudiandae. Architecto!`;

  return (
    <PageContainer>
      <div className="text-center">
        <h1>About Page</h1>

        {Array.from({ length: n }, (_, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </PageContainer>
  );
}
