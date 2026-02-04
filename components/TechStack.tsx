"use client";

import {
  Brain,
  Code2,
  Database,
  Cpu,
  Cloud,
  Github,
  AppWindow,
  Terminal,
} from "lucide-react";

const stack = [
  { name: "Python", icon: Terminal },
  { name: "PyTorch", icon: Cpu },
  { name: "RAG / LangChain", icon: Brain },
  { name: "FastAPI", icon: AppWindow },
  { name: "Vector DB", icon: Database },
  { name: "Next.js", icon: Code2 },
  { name: "Cloud / Deploy", icon: Cloud },
  { name: "GitHub", icon: Github },
];

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {stack.map((s) => {
        const Icon = s.icon;
        return (
          <div
            key={s.name}
            className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-sky-400/30 hover:bg-white/7"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-black/25 text-white/80 transition group-hover:text-white">
              <Icon size={18} />
            </div>
            <div className="text-sm font-medium text-white/80">{s.name}</div>
          </div>
        );
      })}
    </div>
  );
}
