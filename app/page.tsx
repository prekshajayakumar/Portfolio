import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import ProjectsRail from "@/components/ProjectsRail";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import { Stagger, StaggerItem } from "@/components/Stagger";

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="px-4 sm:px-6 lg:px-12">
      <p className="text-xs uppercase tracking-[0.28em] text-sky-300/80">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl text-white">
        {title}
      </h2>
    </div>
  );
}

function SectionBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl text-white/75 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <div id="top" />
      <Nav />

      <main className="w-full">
        {/* HERO (centered, statement style) */}
        <div className="w-full">
          <div className="px-4 sm:px-6 lg:px-12">
            <Hero />
          </div>
        </div>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-28 py-16 sm:py-20">
          <Stagger>
            <StaggerItem>
              <SectionHeader eyebrow="About" title="What I build & why" />
            </StaggerItem>

            <StaggerItem>
              <SectionBody>
                <p>
                  I’m focused on AI products — RAG systems, computer vision classifiers, and LLM
                  tooling. I care about building things that are measurable, usable, and demo-ready.
                </p>
                <p className="mt-4">
                  Right now I’m polishing: <span className="text-white/90">EduAssist (RAG)</span>{" "}
                  and <span className="text-white/90">Deepfake Detector</span>. I’ll ship clean
                  repos with clear READMEs and demos.
                </p>
              </SectionBody>
            </StaggerItem>
          </Stagger>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-28 py-16 sm:py-20">
          <Stagger>
            <StaggerItem>
              <ProjectsRail />
            </StaggerItem>
          </Stagger>
        </section>

        {/* STACK */}
        <section id="stack" className="scroll-mt-28 py-16 sm:py-20">
          <Stagger>
            <StaggerItem>
              <SectionHeader eyebrow="Stack" title="Tools I use" />
            </StaggerItem>

            <StaggerItem>
              <div className="mt-10 px-4 sm:px-6 lg:px-12">
                <TechStack />
              </div>
            </StaggerItem>
          </Stagger>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="scroll-mt-28 py-16 sm:py-20">
          <Stagger>
            <StaggerItem>
              <SectionHeader eyebrow="Experience" title="Internship & learning" />
            </StaggerItem>

            <StaggerItem>
              <SectionBody>
                <p>
                  Internship stack: <span className="text-white/90">Angular + TypeScript</span>{" "}
                  frontend and <span className="text-white/90">Java Spring Boot</span> backend.
                </p>
                <p className="mt-4">
                  I’m using that experience to ship AI projects with better structure, testing, and
                  deployment — and improving frontend skills with Next.js so my demos look like real
                  products.
                </p>
              </SectionBody>
            </StaggerItem>
          </Stagger>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-28 py-16 sm:py-20">
          <Stagger>
            <StaggerItem>
              <SectionHeader eyebrow="Contact" title="Let’s talk" />
            </StaggerItem>

            <StaggerItem>
              <SectionBody>
                <p>
                  Email: <span className="text-white/90">your-email@example.com</span>
                </p>
                <p className="mt-2">
                  GitHub: <span className="text-white/90">github.com/yourname</span>
                </p>
                <p className="mt-2">
                  LinkedIn: <span className="text-white/90">linkedin.com/in/yourname</span>
                </p>
              </SectionBody>
            </StaggerItem>
          </Stagger>
        </section>

        <Footer />
      </main>
    </>
  );
}
