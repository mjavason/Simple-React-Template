import PageContainer from '@/components/PageContainer';
import { WelcomeSteps } from '@/components/tutorial/steps';
import Tutorial from '@/components/tutorial/Tutorial';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/test-tutorial')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageContainer title={'Test Tutorial'}>
      {/* <PositionPicker imageSrc={gHandOnWaist} /> */}
      <Tutorial isOpen={true} steps={WelcomeSteps} />
      <div className="flex flex-row gap-3 items-center justify-center h-screen">
        <div
          id="eco-house-svg"
          className="bg-gray-200 p-4 rounded-lg hover:cursor-pointer"
        >
          Eco House
        </div>
        <div
          id="hq-svg"
          className="bg-gray-200 p-4 rounded-lg hover:cursor-pointer"
        >
          HQ
        </div>
        <div
          id="spotlight-svg"
          className="bg-gray-200 p-4 rounded-lg hover:cursor-pointer"
        >
          Spotlight
        </div>
        <div
          id="hub-tv-svg"
          className="bg-gray-200 p-4 rounded-lg hover:cursor-pointer"
        >
          Hub TV
        </div>
      </div>
    </PageContainer>
  );
}
