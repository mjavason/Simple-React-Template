import { motion } from 'motion/react';

export function Handwriting() {
  return (
    <svg viewBox="0 0 200 100" fill="none">
      <motion.path
        d="M 20 80 C 30 10, 50 10, 60 80"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
    </svg>
  );
}

export function HandwritingReveal() {
  return (
    <div className="overflow-hidden">
      <motion.p
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={{
          duration: 2.5,
          ease: 'linear',
        }}
        className="font-serif text-5xl whitespace-nowrap italic"
        style={{
          fontFamily: 'cursive',
        }}
      >
        Made with intention
      </motion.p>
    </div>
  );
}
