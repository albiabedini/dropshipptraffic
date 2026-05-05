export const siteName = "DropShippTraffic";

export const siteDescription =
  "DropShippTraffic helps dropshipping store owners get more referral traffic through store placements, visibility pages, content mentions, and direct links.";

/** Default `<title>` and primary Open Graph title for the homepage / root layout. */
export const siteTitleDefault = `${siteName} | Get More Traffic to Your Dropshipping Store`;

/** Next.js metadata title template for interior pages (`Page Title | DropshippTraffic`). */
export const metadataTitleTemplate = `%s | ${siteName}`;

const fallbackSiteUrl = "https://dropshipptrafic.com";

export function getSiteUrl(): string {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!rawUrl) {
    return fallbackSiteUrl;
  }

  const withProtocol = /^https?:\/\//i.test(rawUrl) ? rawUrl : `https://${rawUrl}`;

  try {
    return new URL(withProtocol).origin;
  } catch {
    return fallbackSiteUrl;
  }
}

export function absoluteUrl(path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath === "/" ? "" : normalizedPath}`;
}
