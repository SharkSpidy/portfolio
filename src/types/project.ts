/**
 * The raw shape of data returned by the Microlink API's `data` object.
 * We only type the fields we actually consume — Microlink returns much more.
 * @see https://microlink.io/docs/api/parameters/introduction
 */
export interface MicrolinkData {
  title: string | null;
  description: string | null;
  url: string;
}

export interface MicrolinkResponse {
  status: "success" | "error";
  data: MicrolinkData;
}

/**
 * The normalized, UI-ready shape produced by useProjectData.
 * Note: preview images are NOT part of this — they're resolved
 * separately and synchronously by <ProjectImage />, so a slow or
 * rate-limited metadata fetch never blocks the image from showing.
 */
export interface ProjectData {
  /** The original URL from projectsConfig.ts — used as a stable React key */
  sourceUrl: string;
  /** OG title — falls back to the domain name until/unless enriched */
  title: string;
  /** OG description — falls back to a generic sentence until/unless enriched */
  description: string;
  /** The clean, human-readable domain (e.g. "hillsnblues.com") */
  domain: string;
  /** True once real OG metadata has been fetched and applied */
  isEnriched: boolean;
}

export type FetchStatus = "loading" | "success" | "error";

export interface UseProjectDataResult {
  /** Always populated immediately (with fallbacks), never null/blocking */
  data: ProjectData;
  status: FetchStatus;
  error: string | null;
}
