import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SITE } from "../config/siteConfig";

const STACK = ["React", "TypeScript", "Node.js", "Tailwind CSS", "Next.js", "PostgreSQL"];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-16 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-widest2 text-acid"
            >
              {SITE.role} — Based in Kerala, India
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 font-display text-[13vw] leading-[0.95] text-paper sm:text-7xl lg:text-8xl"
            >
              Joseph
              <br />
              <span className="italic text-paper-dim">Shibu</span>
            </motion.h1>
          </div>

          {/* Rotated "stamp" badge — a deliberately hand-made, non-generic detail */}
          <motion.div
            initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
            animate={{ opacity: 1, rotate: -8, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hairline flex h-28 w-28 shrink-0 -rotate-6 items-center justify-center rounded-full text-center font-mono text-[10px] uppercase leading-tight tracking-widest2 text-acid sm:h-32 sm:w-32"
          >
            Open for
            <br />
            freelance
            <br />
            work
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-paper-dim"
        >
          I design and build full-stack web applications — fast, accessible,
          and built to actually ship. From landing pages to production
          systems, for brands and small businesses that need it done right.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-ink-line py-4"
        >
          {STACK.map((tech, i) => (
            <span key={tech} className="flex items-center gap-6 font-mono text-xs text-paper-dim">
              {tech}
              {i < STACK.length - 1 && <span className="text-acid">/</span>}
            </span>
          ))}
        </motion.div>
      </div>

      <a
        href="#work"
        aria-label="Scroll to work"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-paper-dim transition-colors hover:text-acid"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest2">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
