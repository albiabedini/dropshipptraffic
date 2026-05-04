export type GuideSection = {
  heading: string;
  body: string;
};

export type Guide = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  sections: GuideSection[];
  relatedWebsiteSlug?: string;
  meta: {
    title: string;
    description: string;
  };
};

export const guides: Guide[] = [
  {
    title: "How to Choose Products Online",
    slug: "how-to-choose-products-online",
    category: "Shopping basics",
    excerpt:
      "A practical checklist for evaluating products before you click buy—so you pick items that fit your needs and budget.",
    relatedWebsiteSlug: "northline-goods",
    meta: {
      title: "How to Choose Products Online",
      description:
        "Learn how to narrow options, read listings critically, and choose products online with confidence.",
    },
    sections: [
      {
        heading: "Start with what you actually need",
        body: "Write down the problem you are solving and any must-have features. Avoid browsing aimlessly; a short list keeps you focused and reduces impulse picks that look appealing but do not fit daily use.",
      },
      {
        heading: "Compare specs, not packaging",
        body: "Photos and marketing language change quickly. Prioritize measurable details—dimensions, materials, compatibility, warranty terms, and what is included in the box. When two listings seem identical, favor sellers that disclose specifics clearly.",
      },
      {
        heading: "Use reviews as signals, not verdicts",
        body: "Scan recent feedback for recurring themes about fit, durability, or support. Treat extremely positive or negative outliers with caution. Photos from buyers and answers to common questions often reveal more than star averages.",
      },
      {
        heading: "Check policies before you commit",
        body: "Confirm shipping timelines, return windows, and who pays for return shipping when possible. Transparent policies are a good sign that the store stands behind what it sells.",
      },
    ],
  },
  {
    title: "Online Shopping Mistakes to Avoid",
    slug: "online-shopping-mistakes-to-avoid",
    category: "Shopping basics",
    excerpt:
      "Common pitfalls that lead to wrong purchases, surprise fees, or frustrating returns—and how to sidestep them.",
    meta: {
      title: "Online Shopping Mistakes to Avoid",
      description:
        "Avoid hidden fees, sizing surprises, and checkout traps with these straightforward shopping habits.",
    },
    sections: [
      {
        heading: "Skipping the fine print on totals",
        body: "Taxes, shipping thresholds, and service fees can change the real price. Expand the order summary and verify the final amount before you pay, especially on limited-time promotions.",
      },
      {
        heading: "Ignoring sizing and measurement charts",
        body: "Apparel, furniture, and electronics often need exact measurements. Compare your numbers to the chart instead of guessing from product photos alone.",
      },
      {
        heading: "Rushing checkout on unfamiliar stores",
        body: "Take one minute to confirm contact details, support channels, and return instructions on new sites. Legitimate shops usually make this information easy to find.",
      },
      {
        heading: "Saving cards everywhere",
        body: "Stored payment methods are convenient but increase exposure if an account is compromised. Use them sparingly and enable alerts from your bank or card issuer.",
      },
    ],
  },
  {
    title: "How to Compare Online Stores",
    slug: "how-to-compare-online-stores",
    category: "Discovery",
    excerpt:
      "A simple framework for judging retailers side by side: trust signals, policies, selection, and post-purchase support.",
    relatedWebsiteSlug: "atlas-reference-library",
    meta: {
      title: "How to Compare Online Stores",
      description:
        "Compare online retailers using trust, policies, product depth, and customer support—not hype alone.",
    },
    sections: [
      {
        heading: "Trust and transparency first",
        body: "Look for clear business identity, reachable customer service, and consistent product information. Stores that hide ownership or use only generic stock photos deserve extra scrutiny.",
      },
      {
        heading: "Policies tell you how problems get solved",
        body: "Returns, warranties, and delivery guarantees vary widely. Favor stores that explain exceptions upfront rather than burying them behind multiple clicks.",
      },
      {
        heading: "Breadth versus specialization",
        body: "Large marketplaces offer variety; niche shops offer depth and curation. Match the store type to what you are buying—specialized gear often benefits from focused sellers.",
      },
      {
        heading: "Support channels matter after checkout",
        body: "Email-only support can be fine for simple orders, but responsive chat or phone options help when shipments go wrong. Note typical response times before you rely on a deadline.",
      },
    ],
  },
  {
    title: "Beginner Guide to Finding Useful Websites",
    slug: "beginner-guide-finding-useful-websites",
    category: "Discovery",
    excerpt:
      "How to move beyond the first page of results and build a personal list of dependable sites for learning, tools, and everyday tasks.",
    meta: {
      title: "Beginner Guide to Finding Useful Websites",
      description:
        "Learn simple habits for discovering trustworthy websites and organizing bookmarks you will actually use.",
    },
    sections: [
      {
        heading: "Define the outcome you want",
        body: "Search works better when you name the task—budget planning, comparing appliances, learning a skill—rather than typing vague buzzwords. Specific queries surface specialized sites faster.",
      },
      {
        heading: "Prefer sources that show their work",
        body: "Helpful guides cite data, link to primary references, or explain methodology. Sites that only repeat slogans rarely age well when you need accuracy.",
      },
      {
        heading: "Use bookmarks with labels",
        body: "Create lightweight folders or tags so rediscovered links stay useful. A short note on why you saved a page prevents clutter six months later.",
      },
      {
        heading: "Rotate new discoveries safely",
        body: "Try unfamiliar sites with low-risk tasks first. Avoid entering sensitive data until you have confirmed HTTPS, sensible privacy wording, and a plausible reputation elsewhere.",
      },
    ],
  },
  {
    title: "Useful Websites Worth Checking",
    slug: "useful-websites-worth-checking",
    category: "Roundups",
    excerpt:
      "A starter list of site categories that consistently help people save time—plus what to look for when you explore each.",
    relatedWebsiteSlug: "northline-goods",
    meta: {
      title: "Useful Websites Worth Checking",
      description:
        "Explore categories of genuinely helpful websites and traits that separate lasting tools from short-lived fads.",
    },
    sections: [
      {
        heading: "Learning hubs",
        body: "Structured tutorials and courses help when you want progression instead of random articles. Prioritize platforms that update content and clarify prerequisites.",
      },
      {
        heading: "Productivity and utilities",
        body: "Calendars, note tools, and lightweight calculators solve repeating chores. Prefer tools with export options so you are not locked in if pricing changes.",
      },
      {
        heading: "Comparison and research assistants",
        body: "Sites that aggregate specs or summarize regulations can accelerate decisions if they disclose sources. Cross-check anything safety-critical with official documentation.",
      },
      {
        heading: "Curated retail and specialty makers",
        body: "Smaller shops sometimes focus on quality batches or ethical sourcing. Read their story pages—consistent narratives paired with clear logistics usually indicate serious operators.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}

export function getLatestGuides(count: number): Guide[] {
  return guides.slice(0, count);
}

export function getGuideCategories(): string[] {
  return [...new Set(guides.map((g) => g.category))];
}
