"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[82vh] overflow-hidden">
      <div className="mx-auto flex min-h-[82vh] w-full max-w-7xl items-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-5xl"
        >
          <motion.p
            variants={item}
            className="text-xs uppercase tracking-[0.28em] text-sky-300/80 sm:text-sm"
          >
            AI Engineer • Full Stack Developer • Product Builder
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Preksha Jayakumar
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-7 max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            I build AI tools and web products{" "}
            <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              that solve real problems.
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg"
          >
            I turn ideas into working software — from RAG assistants and intelligent chatbots to
            computer vision demos, automation workflows, dashboards, and deployable AI applications.
          </motion.p>

          <motion.div variants={item} className="mt-7 flex flex-wrap gap-3 text-sm text-white/45">
            <span>Bangalore, India</span>
            <span className="self-center h-1 w-1 rounded-full bg-white/25" />
            <span>Freelance AI, web, and automation projects</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}