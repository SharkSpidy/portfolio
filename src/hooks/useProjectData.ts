import { useEffect, useRef, useState } from "react";
import type {
  MicrolinkResponse,
  ProjectData,
  UseProjectDataResult,
} from "../types/project";
import { getDisplayDomain } from "../utils/url";

/**
 * Microlink's free tier (no API key required) resolves OG metadata for any
 * public URL server-side, sidestepping client-side CORS. We only use it
 * here for text (title/description) — preview images are handled entirely
 * by <ProjectImage />, which prefers your locally uploaded screenshots.
 * @see https://microlink.io/docs/api/parameters/introduction
 */
const MICROLINK_ENDPOINT = "https://api.microlink.io/";

/** Give up on a slow/rate-limited response rather than spinning forever. */
const REQUEST_TIMEOUT_MS = 8000;

/** Shared across component instances so a URL is never fetched twice. */
const metaCache = new Map<string, ProjectData>();
const inFlight = new Map<string, Promise<ProjectData>>();

function buildFallback(sourceUrl: string): ProjectData {
  const domain = getDisplayDomain(sourceUrl);
  return {
    sourceUrl,
    title: domain,
    description: `A web project deployed at ${domain}.`,
    domain,
    isEnriched: false,
  };
}

async function fetchMeta(sourceUrl: string): Promise<ProjectData> {
  if (metaCache.has(sourceUrl)) return metaCache.get(sourceUrl)!;
  if (inFlight.has(sourceUrl)) return inFlight.get(sourceUrl)!;

  const request = (async () => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const endpoint = `${MICROLINK_ENDPOINT}?url=${encodeURIComponent(
        sourceUrl
      )}&meta=true`;

      const res = await fetch(endpoint, { signal: controller.signal });
      if (!res.ok) throw new Error(`Microlink responded with ${res.status}`);

      const json: MicrolinkResponse = await res.json();
      if (json.status !== "success") throw new Error("Could not resolve metadata");

      const domain = getDisplayDomain(sourceUrl);
      const enriched: ProjectData = {
        sourceUrl,
        title: json.data.title?.trim() || domain,
        description:
          json.data.description?.trim() || `A web project deployed at ${domain}.`,
        domain,
        isEnriched: true,
      };

      metaCache.set(sourceUrl, enriched);
      return enriched;
    } finally {
      clearTimeout(timeout);
    }
  })();

  inFlight.set(sourceUrl, request);
  try {
    return await request;
  } finally {
    inFlight.delete(sourceUrl);
  }
}

/**
 * useProjectData — resolves live title/description text for a project URL.
 *
 * Unlike a typical "fetch-then-render" hook, this NEVER blocks the UI:
 * it returns usable fallback data (derived from the URL itself)
 * synchronously on the first render, then silently upgrades `data` and
 * flips `isEnriched: true` once the real OG metadata arrives. If the
 * fetch fails or times out, the fallback simply stays — the card still
 * works, it just shows the domain instead of a fancy title.
 */
export function useProjectData(url: string): UseProjectDataResult {
  const cached = metaCache.get(url);
  const [data, setData] = useState<ProjectData>(cached ?? buildFallback(url));
  const [status, setStatus] = useState<UseProjectDataResult["status"]>(
    cached ? "success" : "loading"
  );
  const [error, setError] = useState<string | null>(null);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (metaCache.has(url)) {
      setData(metaCache.get(url)!);
      setStatus("success");
      return;
    }

    setData(buildFallback(url));
    setStatus("loading");
    setError(null);

    fetchMeta(url)
      .then((result) => {
        if (!isMounted.current) return;
        setData(result);
        setStatus("success");
      })
      .catch((err: unknown) => {
        if (!isMounted.current) return;
        // Fallback data (already set) remains visible — this is a soft
        // failure, not a broken card.
        setError(err instanceof Error ? err.message : "Failed to enrich project");
        setStatus("error");
      });
  }, [url]);

  return { data, status, error };
}
