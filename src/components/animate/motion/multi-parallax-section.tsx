import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function MultiParallaxSections() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Move the hero content upward as the next section approaches.
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);

  // Gradually fade the hero content.
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.8, 0.5]);

  return (
    <main>
      {/* Hero section */}
      <section ref={heroRef} className="relative h-[100svh]">
        <div className="sticky top-0 h-[100svh] overflow-hidden bg-neutral-950">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="flex h-full flex-col items-center justify-center text-white"
          >
            <h1 className="text-6xl font-bold">Beyond the ordinary</h1>

            <p className="mt-6 text-lg text-neutral-300">
              A more immersive digital experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Incoming section */}
      <section className="relative z-10 min-h-screen rounded-t-3xl bg-white px-8 py-32 text-neutral-950">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold">Discover what's next</h2>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-neutral-600">
            The next section scrolls into view over the hero, creating a layered
            transition.
          </p>
        </div>
      </section>
    </main>
  );
}
