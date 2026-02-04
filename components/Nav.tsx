"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="mt-4 w-full">
          <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/55 px-4 py-3 backdrop-blur shadow-[0_18px_50px_rgba(0,0,0,0.55)]">
            <a href="#top" className="flex items-center gap-2"></a>

            {/* desktop nav */}
            <nav className="hidden sm:flex items-center gap-1 rounded-2xl bg-white/5 p-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/7 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* mobile */}
            <button
              className="sm:hidden rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* mobile dropdown */}
          {open && (
            <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-black/60 p-2 backdrop-blur shadow-[0_18px_50px_rgba(0,0,0,0.55)] sm:hidden">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
