/**
 * SkeletonCard — placeholder UI shown while useProjectData is loading.
 * Mirrors ProjectCard's exact dimensions so the grid never jumps/reflows
 * when real content arrives.
 */
export default function SkeletonCard() {
  return (
    <div className="glass-panel rounded-2xl overflow-hidden">
      {/* Image placeholder */}
      <div className="skeleton-shimmer aspect-video w-full" />

      <div className="p-5 space-y-3">
        {/* Title placeholder */}
        <div className="skeleton-shimmer h-5 w-2/3 rounded-md" />
        {/* Description placeholder (two lines) */}
        <div className="space-y-2">
          <div className="skeleton-shimmer h-3.5 w-full rounded-md" />
          <div className="skeleton-shimmer h-3.5 w-4/5 rounded-md" />
        </div>
        {/* Tag/link row placeholder */}
        <div className="flex gap-2 pt-1">
          <div className="skeleton-shimmer h-6 w-20 rounded-full" />
          <div className="skeleton-shimmer h-6 w-6 rounded-full ml-auto" />
        </div>
      </div>
    </div>
  );
}
