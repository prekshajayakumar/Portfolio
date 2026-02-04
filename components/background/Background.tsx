"use client";

import ParticlesField from "./ParticlesField";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0">
        <ParticlesField />
      </div>

      {/* readability overlay */}
      <div className="absolute inset-0 bg-black/0" />

      {/* subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.10),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.08),transparent_60%)]" />
    </div>
  );
}
