import { GraduationCap } from "lucide-react";
import { EDUCATION, SKILLS, SUMMARY } from "../config/resumeConfig";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-line px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="section-label">01 / About</h2>
          <p className="mt-6 max-w-3xl font-display text-3xl leading-tight text-fg sm:text-4xl">{SUMMARY}</p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <h3 className="font-mono text-xs uppercase tracking-widest2 text-muted">Skills</h3>
            </Reveal>
            <div className="mt-6 space-y-7">
              {SKILLS.map((g, i) => (
                <Reveal key={g.group} delay={i * 0.06}>
                  <p className="font-display text-lg text-fg">{g.group}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <h3 className="font-mono text-xs uppercase tracking-widest2 text-muted">Education</h3>
            </Reveal>
            <div className="mt-6 space-y-5">
              {EDUCATION.map((e, i) => (
                <Reveal key={e.school} delay={i * 0.08}>
                  <div className="rounded-lg border border-line bg-surface p-5 transition-colors hover:border-accent/60">
                    <GraduationCap size={18} className="text-accent" aria-hidden />
                    <p className="mt-3 font-display text-lg leading-snug text-fg">{e.school}</p>
                    <p className="mt-1 text-sm text-muted">{e.degree}</p>
                    <p className="mt-3 font-mono text-xs text-muted">{e.years}</p>
                    <p className="mt-2 text-sm text-muted">{e.activities}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
