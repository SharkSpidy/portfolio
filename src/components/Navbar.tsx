import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Download } from "lucide-react";
import { RESUME_HREF } from "../config/resumeConfig";
import ThemeToggle from "./ThemeToggle";
import type { Theme } from "../hooks/useTheme";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-bg/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-10 lg:px-16">
        <a href="#" className="font-display text-lg font-semibold tracking-tight text-fg">
          JS<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline font-mono text-xs uppercase tracking-widest2 text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href={RESUME_HREF} download className="btn btn-ghost hidden !py-2.5 sm:inline-flex">
            <Download size={14} />
            Resume
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </nav>
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="h-0.5 origin-left bg-accent"
      />
    </header>
  );
}
