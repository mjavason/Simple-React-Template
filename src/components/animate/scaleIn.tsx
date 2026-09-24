import { ReactNode } from "react";
import { motion } from "framer-motion";

export const ScaleIn = ({
  children,
  scale,
  delay,
  duration,
}: {
  children: ReactNode;
  className?: string;
  scale?: number;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: scale ? scale : 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: scale ? scale : 0.95 }}
      transition={{
        delay: delay ? delay : 0.1,
        duration: duration ? duration : 0.35,
      }}
    >
      {children}
    </motion.div>
  );
};
