import { AnimatePresence } from 'framer-motion';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ScaleIn } from '../animate/scaleIn';
import Box from '../box';
import { Loader } from '../loaders';

const BaseLayout = () => {
  return (
    <>
      <AnimatePresence mode="wait">
        <ScaleIn key="layoutready" scale={1}>
          <Box>
            <AnimatePresence>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </AnimatePresence>
          </Box>
        </ScaleIn>
      </AnimatePresence>
    </>
  );
};

export default BaseLayout;
