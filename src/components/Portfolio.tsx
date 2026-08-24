import { useState, type MouseEvent } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { PROJECT_URLS } from "../config/projectsConfig";
import ProjectCard from "./ProjectCard";
import ProjectImage from "./ProjectImage";

/**
 * Portfolio — the project index.
 *
 * This component has NO knowledge of individual projects; it purely maps
 * over PROJECT_URLS from the central config and renders one ProjectCard
 * row per URL. Adding a client project to the site is a one-line change
 * in `src/config/projectsConfig.ts` — nothing here ever needs to change.
 *
 * The distinctive bit: on desktop, hovering a row doesn't reveal an image
 * inline (the generic "card grid" pattern) — instead a small preview
 * follows your cursor, the way a handful of award-style portfolios do it.
 * It's implemented with real spring physics, not a canned CSS transition.
 */
export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 280, damping: 28, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 280, damping: 28, mass: 0.4 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }

  const hoveredUrl = hoveredIndex !== null ? PROJECT_URLS[hoveredIndex] : null;

  return (
    <section
      id="work"
      onMouseMove={handleMouseMove}
      className="relative border-t border-ink-line px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-4xl">
        <div className="flex items-end justify-between">
          <h2 className="font-mono text-xs uppercase tracking-widest2 text-acid">
            Selected Work — 2024–2026
          </h2>
          <span className="font-mono text-xs text-paper-dim">
            {String(PROJECT_URLS.length).padStart(2, "0")} projects
          </span>
        </div>

        <p className="mt-6 max-w-xl font-display text-3xl leading-tight text-paper sm:text-4xl">
          Every preview below is pulled live from the deployed site.
        </p>

        <div className="mt-14">
          {PROJECT_URLS.map((url, index) => (
            <ProjectCard
              key={url}
              url={url}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={setHoveredIndex}
            />
          ))}
        </div>
      </div>

      {/* Cursor-following preview — desktop only, hidden on touch/mobile */}
      <AnimatePresence>
        {hoveredUrl && (
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
            style={{ x: springX, y: springY }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.18 }}
              className="ml-8 h-44 w-64 -translate-y-1/2 overflow-hidden border border-ink-line bg-ink-soft shadow-[8px_8px_0_0_rgba(204,255,51,0.15)]"
            >
              <ProjectImage url={hoveredUrl} title="Preview" className="h-full w-full object-cover object-top" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
