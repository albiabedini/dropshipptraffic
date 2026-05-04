export type WebsiteProfile = {
  name: string;
  slug: string;
  category: string;
  description: string;
  websiteUrl: string;
  featuredText: string;
  relatedGuideSlugs: string[];
  meta: {
    title: string;
    description: string;
  };
};

export const websites: WebsiteProfile[] = [
  {
    name: "Northline Goods",
    slug: "northline-goods",
    category: "Shopping & lifestyle",
    description:
      "Northline Goods focuses on everyday essentials and seasonal staples chosen for durability and clear product storytelling. The shop emphasizes straightforward sizing charts, bundle-friendly shipping, and editorial notes that explain why each collection exists.",
    websiteUrl: "https://northlinegoods.example",
    featuredText:
      "We featured Northline Goods for readers who want fewer-but-better purchases and retailers that explain materials and care instructions upfront.",
    relatedGuideSlugs: [
      "how-to-choose-products-online",
      "useful-websites-worth-checking",
    ],
    meta: {
      title: "Northline Goods",
      description:
        "Profile of Northline Goods: curated essentials, transparent listings, and a thoughtful approach to online shopping.",
    },
  },
  {
    name: "Atlas Reference Library",
    slug: "atlas-reference-library",
    category: "Learning & tools",
    description:
      "Atlas Reference Library collects plain-language explainers, downloadable templates, and topic pathways aimed at independent learners. Content is grouped into tracks so visitors can follow a sequence instead of piecing together random articles.",
    websiteUrl: "https://atlasreference.example",
    featuredText:
      "Atlas earns a spotlight for structuring depth without overwhelm—ideal when you are comparing educational resources or building a personal study stack.",
    relatedGuideSlugs: ["how-to-compare-online-stores"],
    meta: {
      title: "Atlas Reference Library",
      description:
        "Featured profile of Atlas Reference Library: structured learning paths, practical templates, and trustworthy sourcing habits.",
    },
  },
];

export function getWebsiteBySlug(slug: string): WebsiteProfile | undefined {
  return websites.find((w) => w.slug === slug);
}

export function getWebsiteSlugs(): string[] {
  return websites.map((w) => w.slug);
}
