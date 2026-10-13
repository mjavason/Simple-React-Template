import { motion } from 'motion/react';

export default function DrawingBorder() {
  return (
    <div className="w-80">
      <svg
        viewBox="0 0 320 160"
        className="w-full"
        fill="none"
        aria-hidden="true"
      >
        <motion.rect
          x="2"
          y="2"
          width="316"
          height="156"
          rx="16"
          stroke="#818cf8"
          strokeWidth="2"
          pathLength={1}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
        />
      </svg>
    </div>
  );
}
