import { motion } from 'motion/react';

export default function AnimatedSignature() {
  return (
    <svg
      viewBox="0 0 500 150"
      className="w-full max-w-lg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <motion.path
        d="M 10,100 C 30,20 60,20 80,100"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength={1}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: 'linear',
        }}
      />
    </svg>
  );
}
