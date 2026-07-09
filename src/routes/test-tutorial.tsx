import { Routes } from '@/common/constants/constants';
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
        <a href={Routes['TEST TUTORIAL']}>
          <div
            id="eco-house-svg"
            className="bg-gray-200 p-4 rounded-lg hover:cursor-pointer"
          >
            Eco House
          </div>
        </a>
        <a href={Routes['TEST TUTORIAL']}>
          <div
            id="hq-svg"
            className="bg-gray-200 p-4 rounded-lg hover:cursor-pointer"
          >
            HQ
          </div>
        </a>
        <a href={Routes['TEST TUTORIAL']}>
          <div
            id="spotlight-svg"
            className="bg-gray-200 p-4 rounded-lg hover:cursor-pointer"
          >
            Spotlight
          </div>
        </a>
        <a href={Routes['TEST TUTORIAL']}>
          <div
            id="hub-tv-svg"
            className="bg-gray-200 p-4 rounded-lg hover:cursor-pointer"
          >
            Hub TV
          </div>
        </a>
      </div>
    </PageContainer>
  );
}
