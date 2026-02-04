import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-black/30 backdrop-blur">
      <div className="px-4 sm:px-6 lg:px-12 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="text-sm font-semibold text-white/80">Quick Links</div>
            <div className="mt-4 space-y-3 text-sm text-white/60">
              <a className="block hover:text-white" href="#about">About</a>
              <a className="block hover:text-white" href="#projects">Projects</a>
              <a className="block hover:text-white" href="#stack">Stack</a>
              <a className="block hover:text-white" href="#experience">Experience</a>
              <a className="block hover:text-white" href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white/80">Connect</div>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://github.com/yourname"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/75 transition hover:border-sky-400/30 hover:bg-white/10 hover:text-white"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/yourname"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/75 transition hover:border-sky-400/30 hover:bg-white/10 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:your-email"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/75 transition hover:border-sky-400/30 hover:bg-white/10 hover:text-white"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white/80">Keyboard Shortcuts</div>
            <div className="mt-4 space-y-3 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">G</span>
                <span>Open GitHub</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">P</span>
                <span>Jump to Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">C</span>
                <span>Jump to Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
