import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="relative h-250 overflow-hidden">
      <motion.img
        src="/images/heavy-image.jpg"
        alt="Landscape"
        style={{ y }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 flex h-full items-center justify-center">
        <h2 className="text-5xl font-bold text-white">
          Explore the extraordinary
        </h2>
      </div>
    </section>
  );
}
