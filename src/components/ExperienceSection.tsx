import { motion } from "framer-motion";
import { EXPERIENCE } from "../config/resumeConfig";
import Reveal from "./Reveal";

export default function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-line px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="section-label">02 / Experience</h2>
          <p className="mt-6 max-w-2xl font-display text-3xl leading-tight text-fg sm:text-4xl">
            Internships, a startup, and two campus communities.
          </p>
        </Reveal>

        <ol className="relative mt-14 ml-3 sm:ml-0">
          {/* The timeline rule draws itself down as the section enters view */}
          <motion.span
            aria-hidden
            className="absolute left-0 top-2 bottom-2 w-px origin-top bg-line sm:left-[12rem]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />

          {EXPERIENCE.map((job, i) => (
            <li key={job.org + job.start} className="relative pb-12 pl-8 last:pb-0 sm:grid sm:grid-cols-[12rem_1fr] sm:pl-0">
              <Reveal delay={0.05} className="sm:pr-10 sm:text-right">
                <p className="font-mono text-xs text-muted">
                  {job.start} to {job.end}
                </p>
                <p className="mt-1 font-mono text-xs text-muted/80">{job.place}</p>
              </Reveal>

              <span
                aria-hidden
                className={`absolute -left-[5px] top-1.5 h-[11px] w-[11px] rounded-full border-2 border-bg sm:left-[calc(12rem-5px)] ${
                  job.current ? "bg-hot" : "bg-accent"
                }`}
              />

              <Reveal delay={0.1} className="mt-2 sm:mt-0 sm:pl-10">
                <div className="group rounded-lg border border-transparent p-0 transition-colors sm:-m-4 sm:p-4 sm:hover:border-line sm:hover:bg-surface">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="font-display text-xl font-semibold text-fg sm:text-2xl">{job.role}</h3>
                    {job.current && (
                      <span className="rounded-full border border-hot/50 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-widest2 text-hot">
                        Now
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-accent">{job.org}</p>
                  <ul className="mt-4 space-y-2.5 text-muted">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3 leading-relaxed">
                        <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <span className="sr-only">Entry {i + 1} of {EXPERIENCE.length}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
