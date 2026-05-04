import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { absoluteUrl } from "@/lib/seo";
import { websites } from "@/lib/websites";

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/guides"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...guides.map((guide) => ({
      url: absoluteUrl(`/guides/${guide.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: absoluteUrl("/websites"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...websites.map((site) => ({
      url: absoluteUrl(`/websites/${site.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: absoluteUrl("/for-businesses"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
