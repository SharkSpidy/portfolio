import { motion } from "framer-motion";
import { PROJECT_URLS } from "../config/projectsConfig";
import ProjectCard from "./ProjectCard";

/**
 * Portfolio — the project showcase grid.
 *
 * This component has NO knowledge of individual projects; it purely maps
 * over PROJECT_URLS from the central config and renders a ProjectCard per
 * URL. Adding a client project to the site is a one-line change in
 * `src/config/projectsConfig.ts` — nothing here ever needs to be touched.
 */
export default function Portfolio() {
  return (
    <section id="work" className="relative py-24 px-6 sm:px-10 lg:px-16">
      {/* Section heading */}
      <div className="mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block rounded-full border border-white/10 bg-white/5
                     px-4 py-1 text-xs font-mono uppercase tracking-widest text-accent-cyan"
        >
          Selected Work
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
        >
          Live projects, <span className="text-gradient">built &amp; shipped</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-4 max-w-xl text-zinc-400"
        >
          Every preview below is fetched live from the deployed site — no
          screenshots to maintain, no stale descriptions.
        </motion.p>
      </div>

      {/* Project grid */}
      <div
        className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2
                   lg:grid-cols-3"
      >
        {PROJECT_URLS.map((url, index) => (
          <ProjectCard key={url} url={url} index={index} />
        ))}
      </div>
    </section>
  );
}
