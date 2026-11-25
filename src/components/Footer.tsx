import type { ReactNode } from "react";
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { SITE } from "../config/siteConfig";
import { RESUME_HREF } from "../config/resumeConfig";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-line px-6 py-24 sm:px-10 lg:px-16">
      <div aria-hidden className="absolute -bottom-40 right-0 h-80 w-[36rem] rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl">
        <Reveal>
          <p className="section-label">04 / Contact</p>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-fg sm:text-6xl">
            Got a project in mind?
            <br />
            <span className="text-accent">Let's build it.</span>
          </h2>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href={`mailto:${SITE.email}`} className="link-underline font-mono text-lg text-fg sm:text-2xl">
              {SITE.email}
            </a>
            <a href={RESUME_HREF} download className="btn btn-primary">
              <Download size={14} />
              Resume (PDF)
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-line pt-10 sm:grid-cols-3">
            <ContactItem icon={<Mail size={16} />} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
            <ContactItem icon={<Phone size={16} />} label="Phone" value={SITE.phone} href={`tel:${SITE.phone.replace(/\s/g, "")}`} />
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[11px] uppercase tracking-widest2 text-muted">Elsewhere</span>
              <a
                href={SITE.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
              >
                <Github size={18} aria-hidden />
                <span className="font-mono text-sm">{SITE.github.handle}</span>
              </a>
              <a
                href={SITE.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
              >
                <Linkedin size={18} aria-hidden />
                <span className="font-mono text-sm">{SITE.linkedin.handle}</span>
              </a>
            </div>
          </div>
        </Reveal>

        <p className="mt-16 font-mono text-[11px] text-muted">
          © {new Date().getFullYear()} {SITE.name}. Built with React, TypeScript and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

function ContactItem({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href: string }) {
  return (
    <a href={href} className="group flex flex-col gap-2">
      <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest2 text-muted">
        {icon}
        {label}
      </span>
      <span className="break-words font-display text-lg text-fg transition-colors group-hover:text-accent">{value}</span>
    </a>
  );
}
