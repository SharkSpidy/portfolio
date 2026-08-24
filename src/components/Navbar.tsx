import { useEffect, useState } from "react";
import { SITE } from "../config/siteConfig";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-sm border-b border-ink-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <a href="#" className="font-display text-lg tracking-tight text-paper">
          Joseph Shibu<span className="text-acid">.</span>
        </a>

        <div className="hidden items-center gap-10 sm:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline font-mono text-xs uppercase tracking-widest2 text-paper-dim hover:text-paper transition-colors"
            >
              <span className="mr-1.5 text-acid">0{i + 1}</span>
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${SITE.email}`}
          className="hairline rounded-none px-4 py-2 font-mono text-xs uppercase tracking-widest2 text-paper transition-colors hover:bg-acid hover:text-ink hover:border-acid"
        >
          Say Hello
        </a>
      </nav>
    </header>
  );
}
