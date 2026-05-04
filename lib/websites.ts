import { siteName } from "./seo";

export type WebsiteProfileSection = {
  heading: string;
  body: string;
};

export type WebsiteProfile = {
  name: string;
  slug: string;
  category: string;
  description: string;
  websiteUrl: string;
  featuredText: string;
  sections: WebsiteProfileSection[];
  verificationQuestions: string[];
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
    category: "Product research",
    description:
      "A product information site for everyday essentials and seasonal staples. Expect straightforward detail, sizing guidance, policy notes, and brief explanations of what each collection is for and how to care for items.",
    websiteUrl: "https://northlinegoods.example",
    featuredText:
      `We included Northline Goods as a readable example of a website that foregrounds specs, sizing, and policies. Use it as a sample destination when applying product research habits from ${siteName} guides.`,
    sections: [
      {
        heading: "What this profile summarizes",
        body: `This ${siteName} profile summarizes Northline Goods as a product information destination rather than as a recommendation. The profile focuses on the kinds of details a reader can inspect: collection descriptions, sizing guidance, care notes, policy visibility, and the way product pages explain what an item is for. That makes it a useful example for readers learning how to evaluate product information pages without relying only on design polish or short promotional claims.`,
      },
      {
        heading: "What readers can check",
        body: "Readers can use this profile as a prompt for practical checks. Look for specific measurements, plain material descriptions, support paths, policy pages, and consistency between page sections. If a product page explains care, fit, limits, and what is included, it is easier to evaluate. If important details are missing or hard to find, note the gap before trusting the page. The point is not to treat a profile as proof; it is to practice a repeatable research method.",
      },
      {
        heading: "How to use this profile with related guides",
        body: `The related ${siteName} guides give the method behind the profile. A guide about choosing products online explains what to check first. A guide about browsing mistakes explains common ways readers skip context. A guide about comparing websites explains how policy clarity and accountability affect trust. Read the guide first if you want the framework, then use this profile as a concrete page to inspect with that framework in mind.`,
      },
      {
        heading: "What to verify on the official website",
        body: `Before relying on any details, verify them on the official website. Check current policy wording, contact paths, page dates if visible, product descriptions, care information, and any account-specific information that ${siteName} does not host. External websites can change, so this profile should be treated as a summary layer. The official site remains the place for current source material, while ${siteName} provides context for how to evaluate what you find.`,
      },
    ],
    verificationQuestions: [
      "Are product details specific enough to compare without guessing?",
      "Can readers find policies, support paths, and care information quickly?",
      "Do page descriptions explain limits, materials, or fit clearly?",
      "What details should be checked again on the official website?",
      "Which related guide helps evaluate the page most directly?",
    ],
    relatedGuideSlugs: [
      "how-to-choose-products-online",
      "online-shopping-mistakes-to-avoid",
      "how-to-compare-online-stores",
      "useful-websites-worth-checking",
    ],
    meta: {
      title: `Northline Goods | ${siteName} Website Profile`,
      description:
        `Northline Goods is summarized on ${siteName} as a product information example with clear listings, policy notes, and related discovery guides.`,
    },
  },
  {
    name: "Atlas Reference Library",
    slug: "atlas-reference-library",
    category: "Learning & tools",
    description:
      "A library-style site with plain-language explainers, downloadable templates, and topic pathways for independent learners. Content is grouped into tracks so you can follow a sequence rather than piecing together unrelated posts.",
    websiteUrl: "https://atlasreference.example",
    featuredText:
      `Atlas appears here as an example of structured reference material. It is helpful when you are comparing learning resources or building a focused reading stack alongside ${siteName} discovery guides.`,
    sections: [
      {
        heading: "What this profile summarizes",
        body: "This profile summarizes Atlas Reference Library as a structured learning and reference destination. The focus is on how the site organizes explainers, templates, and topic pathways for people doing independent research. A profile like this helps readers understand what a site appears to contain before they spend time exploring it. It does not replace source checks, but it can make the first pass through an unfamiliar resource more organized.",
      },
      {
        heading: "What readers can check",
        body: "When evaluating a reference library, look for clear categories, update notes, definitions, links between related topics, and explanations that show how a conclusion was reached. Templates should explain who they are for and what needs adapting. A strong learning resource makes it easy to move from a simple explanation to more detailed material without losing the thread. If a page only lists claims or files without context, it may be harder to reuse later.",
      },
      {
        heading: "How to use this profile with related guides",
        body: `The related ${siteName} guide on finding useful websites pairs naturally with this profile because it explains how to search by task, evaluate structure, and organize bookmarks. Atlas can be used as a sample reference destination while applying those habits. Readers can ask whether the site has clear pathways, whether pages are easy to revisit, and whether the material supports a real research task rather than creating another pile of saved links.`,
      },
      {
        heading: "What to verify on the official website",
        body: `Before relying on Atlas for a project or learning plan, verify the current pages on the official website. Check whether templates are current, whether topic pathways still work, whether source links are active, and whether any important guidance points to primary material. ${siteName} keeps this profile at the summary level. The official website is where readers should confirm current details and decide whether the resource fits their own research needs.`,
      },
    ],
    verificationQuestions: [
      "Does the site explain topics in a clear sequence?",
      "Are templates and examples supported with enough context?",
      "Can readers find update notes or source links when accuracy matters?",
      "Would this resource be easy to revisit from a bookmark?",
      "Which guide helps turn the profile into a research checklist?",
    ],
    relatedGuideSlugs: ["beginner-guide-finding-useful-websites"],
    meta: {
      title: `Atlas Reference Library | ${siteName} Website Profile`,
      description:
        `Atlas Reference Library is summarized on ${siteName} for discovery, with structured learning paths, templates, and related beginner research context.`,
    },
  },
];

export function getWebsiteBySlug(slug: string): WebsiteProfile | undefined {
  return websites.find((w) => w.slug === slug);
}

export function getWebsiteSlugs(): string[] {
  return websites.map((w) => w.slug);
}
