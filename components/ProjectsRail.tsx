"use client";

import { Github, Globe, Play, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "EduAssist",
    subtitle: "RAG Academic Assistant",
    desc: "Academic assistant that answers questions from textbooks and research papers using retrieval-augmented generation.",
    tags: ["Python", "LangChain", "RAG", "LLMs"],
    github: "https://github.com/prekshajayakumar",
  },
  {
    title: "Deepfake Detector",
    subtitle: "Computer Vision Classifier",
    desc: "CNN-based deepfake detection system built to identify manipulated images with clear evaluation metrics.",
    tags: ["Python", "CNN", "CV", "PyTorch"],
    github: "https://github.com/prekshajayakumar",
  },
  {
    title: "Emotion Detection",
    subtitle: "Real-Time CV System",
    desc: "Real-time facial emotion detection pipeline trained from scratch and built for live inference demos.",
    tags: ["Python", "OpenCV", "Deep Learning", "Realtime"],
    github: "https://github.com/prekshajayakumar/Real-time-Emotion-Detection",
  },
  {
    title: "Hackathon Recommender",
    subtitle: "Matching System",
    desc: "Recommendation system that helps participants find suitable hackathon teammates based on skills and interests.",
    tags: ["Python", "ML", "NLP", "Recommender"],
    github: "https://github.com/prekshajayakumar/Hackathon_Teammate_Recommender_System",
  },
  {
    title: "LangChain Chatbot",
    subtitle: "LLM Chat Application",
    desc: "Chatbot built with Python, LangChain, and LLM workflows for intelligent conversational responses.",
    tags: ["LangChain", "LLMs", "Python", "Chatbot"],
    github: "https://github.com/prekshajayakumar/Chatbot-With-Python-LangChain-LLMs",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="group flex min-w-[84vw] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] backdrop-blur transition duration-300 hover:border-sky-400/30 hover:bg-white/[0.065] sm:min-w-[44vw] lg:min-w-[29vw]">
      <div className="relative h-36 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.16),transparent_55%)]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/65" />
        <div className="absolute bottom-4 left-5 right-5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-sky-300/70">
            {project.subtitle}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="min-h-[72px] text-sm leading-relaxed text-white/65">{project.desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-white/65"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-black/25 text-white/70 transition hover:border-sky-400/30 hover:text-white"
            >
              <Github size={17} />
            </a>
            <a
              href="#"
              className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-black/25 text-white/70 transition hover:border-sky-400/30 hover:text-white"
            >
              <Globe size={17} />
            </a>
            <a
              href="#"
              className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-black/25 text-white/70 transition hover:border-sky-400/30 hover:text-white"
            >
              <Play size={17} />
            </a>
          </div>

          <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-white/65 transition hover:text-white">
            Details <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsRail() {
  return (
    <div className="px-6 sm:px-10 lg:px-16">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-sky-300/80">Projects</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Featured AI work
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/55">
          AI, ML, chatbot, computer vision, and product-focused projects.
        </p>
      </div>

      <div className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2">
        {projects.map((project) => (
          <div key={project.title} className="snap-start">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href="https://github.com/prekshajayakumar"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/75 transition hover:border-sky-400/30 hover:bg-white/10 hover:text-white"
        >
          View all GitHub projects <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}