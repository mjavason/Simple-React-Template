import { motion } from 'framer-motion';

export default function TravelingBorder() {
  return (
    <svg
      viewBox="0 0 320 160"
      className="w-full max-w-sm"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="316"
        height="156"
        rx="16"
        stroke="#404040"
        strokeWidth="2"
      />

      <motion.rect
        x="2"
        y="2"
        width="316"
        height="156"
        rx="16"
        stroke="#818cf8"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray="0.15 0.85"
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: -1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </svg>
  );
}
