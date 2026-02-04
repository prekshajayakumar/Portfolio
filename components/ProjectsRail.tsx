"use client";

import { useMemo, useRef } from "react";
import { Github, Globe, Play, ArrowRight } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  github?: string;
  space?: string;
  video?: string;
};

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/25 text-white/75 transition hover:border-sky-400/30 hover:bg-black/35 hover:text-white"
    >
      {children}
    </a>
  );
}

export default function ProjectsRail() {
  const railRef = useRef<HTMLDivElement | null>(null);

  const projects: Project[] = useMemo(
    () => [
      {
        title: "EduAssist (RAG)",
        desc: "PDF upload + citation-backed answers. Retrieval you can trust.",
        tags: ["RAG", "LangChain", "PDF", "Citations"],
        github: "https://github.com/yourname/eduassist",
        space: "https://huggingface.co/spaces/yourname/eduassist",
        video: "https://youtube.com/your-demo",
      },
      {
        title: "Deepfake Detector",
        desc: "Deepfake image classification with metrics + clear limitations.",
        tags: ["Computer Vision", "PyTorch", "Metrics"],
        github: "https://github.com/yourname/deepfake-detector",
        space: "https://huggingface.co/spaces/yourname/deepfake-detector",
      },
      {
        title: "Emotion Detection",
        desc: "Real-time emotion recognition (camera inference + pipeline).",
        tags: ["Realtime", "CV", "Training"],
        github: "https://github.com/yourname/emotion-detection",
        video: "https://youtube.com/your-demo",
      },
    ],
    []
  );

  return (
    <div className="px-4 sm:px-6 lg:px-12">
      <div className="text-center">
        <h3 className="text-3xl font-semibold tracking-tight text-white">Featured Projects</h3>
        <p className="mt-2 text-sm text-white/55">Check out some of my recent work</p>
      </div>

      {/* rail wrapper (no visible scrollbar) */}
      <div className="relative mt-10">
        {/* fade edges like premium UI */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-black/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-black/80 to-transparent" />

        <div
          ref={railRef}
          className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth pb-2"
        >
          {projects.map((p) => (
            <article
              key={p.title}
              className="w-[86%] shrink-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition hover:border-sky-400/25 sm:w-[46%] lg:w-[32%]"
            >
              {/* top preview area */}
              <div className="relative h-52 rounded-t-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.18),transparent_55%)]">
                <div className="absolute inset-0 rounded-t-3xl bg-gradient-to-b from-black/0 via-black/10 to-black/65" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-lg font-semibold text-white/90">{p.title}</div>
                  <div className="mt-1 text-sm text-white/60">{p.desc}</div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {p.github && (
                      <IconLink href={p.github} label="GitHub">
                        <Github size={18} />
                      </IconLink>
                    )}
                    {p.space && (
                      <IconLink href={p.space} label="Hugging Face">
                        <Globe size={18} />
                      </IconLink>
                    )}
                    {p.video && (
                      <IconLink href={p.video} label="Demo Video">
                        <Play size={18} />
                      </IconLink>
                    )}
                  </div>

                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white"
                  >
                    View details <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* hint text for scroll (subtle, no scrollbar) */}
        <p className="mt-3 text-center text-xs text-white/35">
          Tip: use trackpad / Shift+Scroll to browse projects
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/75 backdrop-blur transition hover:border-sky-400/25 hover:bg-white/10 hover:text-white"
        >
          View All Projects <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
