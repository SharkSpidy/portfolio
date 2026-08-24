import { useMemo, useState } from "react";
import { ImageOff } from "lucide-react";
import { getImageSlug } from "../utils/url";

interface ProjectImageProps {
  url: string;
  title: string;
  className?: string;
}

const LOCAL_EXTENSIONS = ["png", "jpg", "jpeg", "webp"] as const;

/**
 * ProjectImage — resolves the best available preview image for a project.
 *
 * Resolution order:
 *   1. A locally uploaded screenshot at /assets/images/{slug}.{ext}
 *      (tried in order: png, jpg, jpeg, webp) — instant, reliable, no
 *      third-party dependency.
 *   2. A live screenshot from Microlink, as a network fallback.
 *   3. A plain icon placeholder if nothing resolves.
 *
 * This means the grid never breaks just because Microlink is rate-limited
 * or slow to render a screenshot — you always get *something* the moment
 * you drop a matching file in /public/assets/images.
 */
export default function ProjectImage({ url, title, className }: ProjectImageProps) {
  const slug = useMemo(() => getImageSlug(url), [url]);

  const sources = useMemo(() => {
    const local = LOCAL_EXTENSIONS.map((ext) => `/assets/images/${slug}.${ext}`);
    const microlinkFallback = `https://api.microlink.io/?url=${encodeURIComponent(
      url
    )}&screenshot=true&meta=false&embed=screenshot.url`;
    return [...local, microlinkFallback];
  }, [slug, url]);

  const [sourceIndex, setSourceIndex] = useState(0);
  const exhausted = sourceIndex >= sources.length;

  if (exhausted) {
    return (
      <div className={`flex items-center justify-center bg-ink-soft ${className ?? ""}`}>
        <ImageOff size={22} className="text-paper-dim" />
      </div>
    );
  }

  return (
    <img
      src={sources[sourceIndex]}
      alt={`Homepage preview of ${title}`}
      loading="lazy"
      onError={() => setSourceIndex((i) => i + 1)}
      className={className}
    />
  );
}
