import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { SITE } from "../config/siteConfig";
import { RESUME_HREF } from "../config/resumeConfig";

const STACK = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Supabase"];

const STATS = [
  { value: "4", label: "teams and communities led" },
  { value: "30-40", label: "people coordinated at once" },
  { value: "8", label: "sites built or in progress" },
];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-20 sm:px-10 lg:px-16">
      <div aria-hidden className="dot-grid absolute inset-0" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <motion.p {...rise(0)} className="font-mono text-sm text-muted">
              <span className="text-accent">~/</span>kochi-kerala
              <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-accent animate-blink" aria-hidden />
            </motion.p>

            <motion.h1
              {...rise(0.1)}
              className="mt-5 font-display text-6xl font-semibold leading-[0.95] tracking-tight text-fg sm:text-7xl lg:text-8xl"
            >
              Joseph
              <br />
              <span className="text-accent">Shibu</span>
            </motion.h1>

            <motion.p {...rise(0.2)} className="mt-6 font-display text-xl text-fg sm:text-2xl">
              {SITE.role}. I build things for the web and keep teams moving.
            </motion.p>

            <motion.p {...rise(0.3)} className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
              B.Tech student at AISAT, class of 2027. I've shipped sites for jewellery, brand and community
              clients, and I've led campus tech communities and event teams along the way.
            </motion.p>

            <motion.div {...rise(0.4)} className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="btn btn-primary">
                See my work
                <ArrowUpRight size={14} />
              </a>
              <a href={RESUME_HREF} download className="btn btn-ghost">
                <Download size={14} />
                Download resume
              </a>
            </motion.div>
          </div>

          {/* Slowly turning badge: a small detail with some personality */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="relative mx-auto flex h-52 w-52 shrink-0 items-center justify-center lg:mx-0 lg:h-64 lg:w-64"
            aria-label="Open for freelance work"
          >
            <svg viewBox="0 0 200 200" className="absolute inset-0 animate-spin-slow text-accent" aria-hidden>
              <defs>
                <path id="circ" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
              </defs>
              <text className="fill-current font-mono" fontSize="11">
                <textPath href="#circ" textLength="496" lengthAdjust="spacing">OPEN FOR FREELANCE WORK • OPEN FOR FREELANCE WORK •</textPath>
              </text>
            </svg>
            <div className="flex h-28 w-28 animate-floaty items-center justify-center rounded-full border border-line bg-surface font-display text-4xl font-semibold text-fg lg:h-32 lg:w-32 lg:text-5xl">
              JS<span className="text-hot">.</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...rise(0.5)}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3"
        >
          {STATS.map((s) => (
            <div key={s.label} className="bg-surface px-6 py-5">
              <p className="font-display text-3xl font-semibold text-fg">{s.value}</p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div {...rise(0.6)} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
          {STACK.map((tech, i) => (
            <span key={tech} className="flex items-center gap-5 font-mono text-xs text-muted">
              {tech}
              {i < STACK.length - 1 && <span className="text-accent">/</span>}
            </span>
          ))}
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-accent sm:flex"
      >
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
