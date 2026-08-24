import { motion } from "framer-motion";
import { ArrowUpRight, Globe2, ImageOff } from "lucide-react";
import { useProjectData } from "../hooks/useProjectData";
import SkeletonCard from "./SkeletonCard";

interface ProjectCardProps {
  url: string;
  /** Stagger index, used purely for the entrance animation delay */
  index: number;
}

/**
 * ProjectCard — resolves live OG data for a single URL and renders it as a
 * polished preview card. Falls back to a skeleton while loading, and to a
 * minimal "unreachable" state if Microlink can't resolve the site.
 */
export default function ProjectCard({ url, index }: ProjectCardProps) {
  const { data, status, error } = useProjectData(url);

  if (status === "loading") {
    return <SkeletonCard />;
  }

  if (status === "error" || !data) {
    return <ErrorCard url={url} message={error ?? "Could not load preview"} />;
  }

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
      whileHover={{ y: -6 }}
      className="group glass-panel relative flex flex-col overflow-hidden rounded-2xl
                 transition-shadow duration-300 hover:shadow-glow hover:border-accent-indigo/40"
    >
      {/* Preview image */}
      <div className="relative aspect-video w-full overflow-hidden bg-base-800">
        {data.imageUrl ? (
          <img
            src={data.imageUrl}
            alt={`Screenshot preview of ${data.title}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform
                       duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-zinc-600">
            <ImageOff size={28} />
          </div>
        )}

        {/* Gradient overlay + "visit site" affordance on hover */}
        <div
          className="absolute inset-0 flex items-end justify-end bg-gradient-to-t
                     from-base-950/80 via-transparent to-transparent p-3 opacity-0
                     transition-opacity duration-300 group-hover:opacity-100"
        >
          <span className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5
                            text-xs font-medium text-white backdrop-blur-md">
            Visit site <ArrowUpRight size={14} />
          </span>
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="line-clamp-1 text-lg font-semibold text-white">
          {data.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-zinc-400">
          {data.description}
        </p>

        <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-3">
          <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
            <Globe2 size={13} className="text-accent-cyan" />
            {data.domain}
          </span>
          <ArrowUpRight
            size={16}
            className="text-zinc-500 transition-colors group-hover:text-accent-indigo"
          />
        </div>
      </div>
    </motion.a>
  );
}

/** Minimal fallback card shown when Microlink fails to resolve a URL. */
function ErrorCard({ url, message }: { url: string; message: string }) {
  const domain = (() => {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch {
      return url;
    }
  })();

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-panel flex flex-col items-center justify-center gap-2 rounded-2xl
                 aspect-[4/3] p-6 text-center transition-colors hover:border-accent-indigo/40"
    >
      <ImageOff size={22} className="text-zinc-600" />
      <p className="text-sm font-medium text-zinc-300">{domain}</p>
      <p className="text-xs text-zinc-600">{message} — click to visit anyway</p>
    </a>
  );
}
