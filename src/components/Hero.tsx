import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 sm:px-10 lg:px-16">
      {/* Background grid + glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid" />
      <div className="pointer-events-none absolute inset-0 bg-glow-gradient" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2
                      rounded-full bg-accent-indigo/20 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border
                     border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300"
        >
          <Sparkles size={14} className="text-accent-cyan" />
          Available for freelance projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl"
        >
          I build fast, modern
          <br />
          <span className="text-gradient">websites that convert.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400"
        >
          Full-stack developer specializing in React, TypeScript, and
          production-grade web apps — for brands, startups, and small
          businesses that need to ship fast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="group flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3
                       text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
          >
            View my work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold
                       text-white transition-colors hover:bg-white/5"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
