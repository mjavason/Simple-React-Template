import { motion, useReducedMotion } from 'motion/react';

interface AnimatedTextProps {
  text: string;
}

export function AnimatedText({ text }: AnimatedTextProps) {
  const shouldReduceMotion = useReducedMotion();

  const characters = Array.from(text);

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : 0.035,
          },
        },
      }}
      className="text-5xl font-bold"
      aria-label={text}
    >
      {characters.map((character, index) => (
        <motion.span
          key={`${character}-${index}`}
          aria-hidden="true"
          variants={{
            hidden: {
              opacity: shouldReduceMotion ? 1 : 0,
              y: shouldReduceMotion ? 0 : 24,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="inline-block"
          style={{
            whiteSpace: character === ' ' ? 'pre' : undefined,
          }}
        >
          {character === ' ' ? '\u00A0' : character}
        </motion.span>
      ))}
    </motion.h1>
  );
}
