export const siteName = "DropTraffic";

export const siteDescription =
  "DropTraffic is an informational discovery site focused on dropshipping-related guides and neutral website profiles—reader education and contextual referral visibility without selling traffic or promising rankings.";

/** Default `<title>` and primary Open Graph title for the homepage / root layout. */
export const siteTitleDefault = `${siteName} | Informational traffic and visibility for dropshipping websites`;

/** Next.js metadata title template for interior pages (`Page Title | DropTraffic`). */
export const metadataTitleTemplate = `%s | ${siteName}`;

const fallbackSiteUrl = "https://dropp.example";

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
