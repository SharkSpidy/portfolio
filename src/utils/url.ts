/**
 * Given a full URL, returns the clean, human-readable hostname
 * (protocol and "www." stripped), e.g. "https://www.sigmma.co.nz/" -> "sigmma.co.nz"
 */
export function getDisplayDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/**
 * Derives the local image filename slug from a URL by taking the first
 * label of the hostname (after stripping "www."). This matches the
 * naming convention used in /public/assets/images:
 *
 *   https://www.sigmma.co.nz/                       -> "sigmma"
 *   https://www.cleanourkochi.in/                    -> "cleanourkochi"
 *   https://paulscafe.vercel.app/                     -> "paulscafe"
 *   https://luxebyzaruni-sample.vercel.app/            -> "luxebyzaruni-sample"
 */
export function getImageSlug(url: string): string {
  const domain = getDisplayDomain(url);
  return domain.split(".")[0];
}
