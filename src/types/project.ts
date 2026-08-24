/**
 * The raw shape of data returned by the Microlink API's `data` object.
 * We only type the fields we actually consume — Microlink returns much more.
 * @see https://microlink.io/docs/api/parameters/introduction
 */
export interface MicrolinkData {
  title: string | null;
  description: string | null;
  screenshot: {
    url: string;
  } | null;
  image: {
    url: string;
  } | null;
  logo: {
    url: string;
  } | null;
  url: string;
}

export interface MicrolinkResponse {
  status: "success" | "error";
  data: MicrolinkData;
}

/**
 * The normalized, UI-ready shape produced by useProjectData.
 * This is what every component consumes — never the raw API shape directly.
 */
export interface ProjectData {
  /** The original URL from projectsConfig.ts — used as a stable React key */
  sourceUrl: string;
  /** OG title, falls back to the hostname if missing */
  title: string;
  /** OG description, falls back to a generic string if missing */
  description: string;
  /** Screenshot (preferred) or OG image URL used as the card preview */
  imageUrl: string | null;
  /** Site favicon/logo, used as a small badge on the card */
  logoUrl: string | null;
  /** The clean, human-readable domain (e.g. "hillsnblues.com") */
  domain: string;
}

export type FetchStatus = "loading" | "success" | "error";

export interface UseProjectDataResult {
  data: ProjectData | null;
  status: FetchStatus;
  /** Human-readable error message, only set when status === "error" */
  error: string | null;
}
