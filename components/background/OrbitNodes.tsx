"use client";

import { motion } from "framer-motion";

export default function OrbitNodes() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
      <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-sky-400/70 shadow-[0_0_18px_rgba(56,189,248,0.5)]" />
        <div className="absolute bottom-10 left-10 h-1.5 w-1.5 rounded-full bg-blue-400/60" />
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: -360 }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute right-16 top-20 h-2 w-2 rounded-full bg-cyan-300/60 shadow-[0_0_22px_rgba(34,211,238,0.35)]" />
        <div className="absolute bottom-14 right-28 h-1.5 w-1.5 rounded-full bg-sky-300/50" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
    </div>
  );
}
