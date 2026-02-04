"use client";

import { motion, type Variants } from "framer-motion";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.06,
    },
  },
};

const child: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(14px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Stagger({ children, className }: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.22 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={child}>
      {children}
    </motion.div>
  );
}
