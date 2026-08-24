import { ArrowUpRight } from "lucide-react";
import { useProjectData } from "../hooks/useProjectData";
import ProjectImage from "./ProjectImage";

interface ProjectCardProps {
  url: string;
  index: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
}

/**
 * ProjectCard — one row in the project index. Text always renders
 * immediately (useProjectData guarantees non-blocking fallback data),
 * and silently upgrades in place once real OG metadata arrives.
 *
 * On desktop, the preview image is shown by the floating cursor panel in
 * <Portfolio /> — this row stays lean and typographic. On mobile (no
 * hover), a small inline thumbnail is shown instead so the image is
 * still visible.
 */
export default function ProjectCard({ url, index, isHovered, onHover }: ProjectCardProps) {
  const { data } = useProjectData(url);
  const number = String(index + 1).padStart(2, "0");

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="group flex flex-col gap-4 border-b border-ink-line py-6 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-8"
    >
      <div className="flex items-start gap-4 sm:items-center sm:gap-6">
        <span className="font-mono text-xs tabular-nums text-paper-dim">{number}</span>

        {/* Inline thumbnail — mobile only, since there's no hover state to reveal one */}
        <div className="h-16 w-24 shrink-0 overflow-hidden border border-ink-line sm:hidden">
          <ProjectImage url={url} title={data.title} className="h-full w-full object-cover object-top" />
        </div>

        <div className="min-w-0">
          <h3
            className={`truncate font-display text-2xl transition-colors duration-200 sm:text-3xl ${
              isHovered ? "text-acid" : "text-paper"
            }`}
          >
            {data.title}
          </h3>
          <p className="mt-1 line-clamp-1 max-w-md text-sm text-paper-dim sm:line-clamp-1">
            {data.description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 pl-[3.25rem] sm:pl-0">
        <span className="font-mono text-[11px] uppercase tracking-widest2 text-paper-dim">
          {data.domain}
        </span>
        <ArrowUpRight
          size={18}
          className={`shrink-0 transition-all duration-200 ${
            isHovered ? "-translate-y-0.5 translate-x-0.5 text-acid" : "text-paper-dim"
          }`}
        />
      </div>
    </a>
  );
}
