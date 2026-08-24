import { useEffect, useRef, useState } from "react";
import type {
  MicrolinkResponse,
  ProjectData,
  UseProjectDataResult,
} from "../types/project";

/**
 * Microlink's free tier (no API key required) — resolves OG metadata + a
 * rendered screenshot for any public URL, sidestepping client-side CORS
 * since Microlink's server does the fetching, not the browser.
 * @see https://microlink.io/docs/api/parameters/introduction
 */
const MICROLINK_ENDPOINT = "https://api.microlink.io/";

/**
 * Module-level cache, shared across every component instance for the
 * lifetime of the page. Prevents duplicate network calls if the same URL
 * is ever rendered twice (e.g. a "featured project" section + the grid),
 * and keeps re-renders/remounts from re-fetching data we already have.
 */
const responseCache = new Map<string, ProjectData>();
const inFlightRequests = new Map<string, Promise<ProjectData>>();

/** Strips protocol/www for a clean display domain, e.g. "hillsnblues.com" */
function getDisplayDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/** Builds the normalized ProjectData shape, applying sensible fallbacks. */
function normalize(sourceUrl: string, res: MicrolinkResponse): ProjectData {
  const domain = getDisplayDomain(sourceUrl);
  const { data } = res;

  return {
    sourceUrl,
    title: data.title?.trim() || domain,
    description:
      data.description?.trim() ||
      `A web project built and deployed at ${domain}.`,
    imageUrl: data.screenshot?.url ?? data.image?.url ?? null,
    logoUrl: data.logo?.url ?? null,
    domain,
  };
}

/** Performs (and caches) the actual Microlink fetch for a single URL. */
async function fetchProjectData(url: string): Promise<ProjectData> {
  if (responseCache.has(url)) {
    return responseCache.get(url)!;
  }

  if (inFlightRequests.has(url)) {
    return inFlightRequests.get(url)!;
  }

  const request = (async () => {
    const endpoint = `${MICROLINK_ENDPOINT}?url=${encodeURIComponent(
      url
    )}&screenshot=true&meta=true&embed=screenshot.url`;

    const res = await fetch(endpoint);

    if (!res.ok) {
      throw new Error(`Microlink responded with ${res.status}`);
    }

    const json: MicrolinkResponse = await res.json();

    if (json.status !== "success") {
      throw new Error("Microlink could not resolve this URL");
    }

    const normalized = normalize(url, json);
    responseCache.set(url, normalized);
    return normalized;
  })();

  inFlightRequests.set(url, request);

  try {
    return await request;
  } finally {
    // Whether it succeeded or failed, this URL is no longer in-flight.
    inFlightRequests.delete(url);
  }
}

/**
 * useProjectData — given a live site URL, resolves its OG title,
 * description, and a homepage screenshot for use in a ProjectCard.
 *
 * Handles loading / success / error states internally so components
 * consuming this hook only need to branch on `status`.
 */
export function useProjectData(url: string): UseProjectDataResult {
  const [status, setStatus] = useState<UseProjectDataResult["status"]>(
    responseCache.has(url) ? "success" : "loading"
  );
  const [data, setData] = useState<ProjectData | null>(
    responseCache.get(url) ?? null
  );
  const [error, setError] = useState<string | null>(null);

  // Guards against setting state after the component has unmounted,
  // e.g. if the user navigates away mid-fetch.
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    // Already resolved via cache on initial render — nothing to do.
    if (responseCache.has(url)) {
      setData(responseCache.get(url)!);
      setStatus("success");
      return;
    }

    setStatus("loading");
    setError(null);

    fetchProjectData(url)
      .then((result) => {
        if (!isMounted.current) return;
        setData(result);
        setStatus("success");
      })
      .catch((err: unknown) => {
        if (!isMounted.current) return;
        setError(err instanceof Error ? err.message : "Failed to load project");
        setStatus("error");
      });
  }, [url]);

  return { data, status, error };
}
