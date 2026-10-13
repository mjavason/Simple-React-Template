import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function LayeredParallax() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  const graphicY = useTransform(scrollYProgress, [0, 1], [-120, 120]);

  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0],
  );

  return (
    <section
      ref={containerRef}
      className="relative h-250 overflow-hidden bg-neutral-950"
    >
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-x-0 -inset-y-10 bg-cover bg-center"
      >
        <img
          src="/images/mountain.jpg"
          alt=""
          className="h-full w-full object-cover opacity-50"
        />
      </motion.div>

      <motion.div
        style={{ y: graphicY }}
        className="absolute top-1/4 right-[10%] text-8xl font-bold text-white/20"
      >
        01
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white"
      >
        <h1 className="text-5xl font-bold md:text-7xl">Beyond boundaries</h1>

        <p className="mt-6 max-w-lg text-lg text-white/80">
          A new perspective on what's possible.
        </p>
      </motion.div>
    </section>
  );
}
