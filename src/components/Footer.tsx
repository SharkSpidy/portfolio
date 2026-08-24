import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/5 px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Got a project in mind?{" "}
          <span className="text-gradient">Let's build it.</span>
        </h2>
        <p className="mt-4 text-zinc-400">
          I'm currently taking on new freelance clients. Reach out and let's
          talk about what you're building.
        </p>

        <a
          href="mailto:you@example.com"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient
                     px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
        >
          <Mail size={16} />
          you@example.com
        </a>

        <div className="mt-10 flex items-center justify-center gap-6 text-zinc-500">
          <a href="#" aria-label="GitHub" className="transition-colors hover:text-white">
            <Github size={20} />
          </a>
          <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-white">
            <Linkedin size={20} />
          </a>
        </div>

        <p className="mt-10 text-xs text-zinc-600">
          © {new Date().getFullYear()} Your Name. Built with React, TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
