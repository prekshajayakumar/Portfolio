"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-16">
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-72 w-[60rem] max-w-[92vw] rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 mx-auto h-72 w-[60rem] max-w-[92vw] rounded-full bg-blue-500/10 blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        {/* big name */}
        <motion.h1
          variants={item}
          className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
            Preksha Jayakumar
          </span>
        </motion.h1>

        {/* role */}
        <motion.h2 variants={item} className="mt-5 text-lg sm:text-xl text-white/80">
          <span className="font-semibold text-white/90">AI Engineer</span>
          <span className="mx-3 text-white/25">•</span>
          <span className="text-white/70">GenAI (RAG + LLMs)</span>
          <span className="mx-3 text-white/25">•</span>
          <span className="text-white/70">Computer Vision</span>
        </motion.h2>

        {/* pitch */}
        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg"
        >
          I build intelligent systems that feel like products — citation-backed RAG assistants,
          real-time vision models, and AI demos that are measurable, deployable, and cleanly
          engineered.
        </motion.p>
      </motion.div>
    </section>
  );
}
