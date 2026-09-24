import { ReactNode } from "react";
import { motion } from "framer-motion";

export const FadeUp = ({
  children,
  y,
  duration,
  delay,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: y ? y : 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: y ? y : 20 }}
      transition={{
        delay: delay ? delay : 0.25,
        duration: duration ? duration : 0.35,
      }}
    >
      {children}
    </motion.div>
  );
};
