import { motion } from 'framer-motion';

export default function AnimatedBorder() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl p-px">
      <motion.div
        className="absolute -inset-full -z-10"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0deg, #6366f1 90deg, #22d3ee 180deg, transparent 270deg)',
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="relative rounded-2xl bg-white p-8 text-black">
        <h2 className="text-xl font-semibold">Animated Border</h2>
        <p className="mt-2 text-neutral-400">
          The gradient rotates continuously around this card.
        </p>
      </div>
    </div>
  );
}
