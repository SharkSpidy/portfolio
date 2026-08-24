import type { ReactNode } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { SITE } from "../config/siteConfig";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-ink-line px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-widest2 text-acid">Get in touch</p>

        <h2 className="mt-6 font-display text-4xl leading-tight text-paper sm:text-6xl">
          Got a project in mind?
          <br />
          <span className="italic text-paper-dim">Let's build it.</span>
        </h2>

        <a
          href={`mailto:${SITE.email}`}
          className="link-underline mt-10 inline-block font-mono text-lg text-paper sm:text-2xl"
        >
          {SITE.email}
        </a>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-ink-line pt-10 sm:grid-cols-3">
          <ContactItem icon={<Mail size={16} />} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
          <ContactItem icon={<Phone size={16} />} label="Phone" value={SITE.phone} href={`tel:${SITE.phone.replace(/\s/g, "")}`} />
          <div className="flex flex-col gap-4">
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest2 text-paper-dim">
              Elsewhere
            </span>
            <div className="flex items-center gap-5">
              <a
                href={SITE.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 text-paper-dim transition-colors hover:text-acid"
              >
                <Github size={18} />
                <span className="font-mono text-sm">{SITE.github.handle}</span>
              </a>
            </div>
            <div className="flex items-center gap-5">
              <a
                href={SITE.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 text-paper-dim transition-colors hover:text-acid"
              >
                <Linkedin size={18} />
                <span className="font-mono text-sm">{SITE.linkedin.handle}</span>
              </a>
            </div>
          </div>
        </div>

        <p className="mt-16 font-mono text-[11px] text-paper-dim">
          © {new Date().getFullYear()} {SITE.name}. Built with React, TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a href={href} className="group flex flex-col gap-2">
      <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest2 text-paper-dim">
        {icon}
        {label}
      </span>
      <span className="font-display text-lg text-paper transition-colors group-hover:text-acid">
        {value}
      </span>
    </a>
  );
}
