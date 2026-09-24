import { ReactNode } from "react";
import { motion } from "framer-motion";

export const SlideOut = ({
  children,
  x,
  delay,
  duration,
}: {
  children: ReactNode;
  className?: string;
  x?: number;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: x ? x : 20 }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{ opacity: 0, x: x ? x : 20 }}
      transition={{
        delay: delay ? delay : 0.25,
        duration: duration ? duration : 0.35,
      }}
    >
      {children}
    </motion.div>
  );
};
