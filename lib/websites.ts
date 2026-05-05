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
    category: "Home & lifestyle store",
    description:
      "A store feature for home essentials, storage products, and seasonal lifestyle items with referral links that send visitors directly to the website.",
    websiteUrl: "https://northlinegoods.example",
    featuredText:
      `${siteName} features Northline Goods to send home and lifestyle shoppers directly to the store website. The placement introduces the product category, then gives visitors a clear click path to browse products.`,
    sections: [
      {
        heading: "Traffic goal",
        body: "This placement is designed to send more people to Northline Goods. The page introduces the store category, explains what visitors can browse, and keeps the next step clear with direct referral links.",
      },
      {
        heading: "Where traffic should go",
        body: "Referral traffic can be sent to the Northline Goods homepage, a home essentials collection, or a specific product page depending on the campaign goal. The best destination is the page that gives visitors the clearest next step after they click.",
      },
      {
        heading: "How traffic helps the store",
        body: "More visitors can create more product views and more chances for the store to convert interest into orders. The placement does not promise purchases, specific buyers, revenue, or checkout activity. Those outcomes depend on the store's products, pricing, offer, trust signals, and checkout experience.",
      },
      {
        heading: "What the store should keep ready",
        body: "Before receiving referral visitors, Northline Goods should keep product pages clear, shipping and return information easy to find, pricing visible, and checkout friction low. Traffic is more useful when the landing page answers visitor questions quickly.",
      },
    ],
    verificationQuestions: [
      "Which page should receive referral visitors first?",
      "Are product details, prices, shipping, and returns easy to understand?",
      "Does the store explain why visitors should click through and keep browsing?",
      "Are claims specific enough to support without promising outcomes?",
      "Which related traffic page helps prepare the store for visitors?",
    ],
    relatedGuideSlugs: [
      "referral-traffic-for-dropshipping-stores",
      "product-page-visibility-for-dropshipping",
      "traffic-vs-sales-for-dropshipping-stores",
    ],
    meta: {
      title: `Northline Goods | ${siteName} Store Placement`,
      description:
        `Northline Goods is featured on ${siteName} as a dropshipping store placement built to send referral visitors to the store website.`,
    },
  },
  {
    name: "GlowNest Beauty Co.",
    slug: "glownest-beauty-co",
    category: "Beauty dropshipping store",
    description:
      "A store feature for beauty tools, self-care products, and skincare accessories with direct links that send visitors to the website.",
    websiteUrl: "https://glownestbeauty.example",
    featuredText:
      `${siteName} features GlowNest Beauty Co. to send beauty shoppers directly to the store website. The page introduces the product angle, then points visitors to the pages where they can browse and buy.`,
    sections: [
      {
        heading: "Traffic goal",
        body: "This placement introduces GlowNest Beauty Co. as a beauty and self-care store so visitors can quickly decide whether the category fits what they want. The goal is more referral traffic, with a direct path back to the store.",
      },
      {
        heading: "Where traffic should go",
        body: "For beauty stores, referral traffic often works best when it points to a focused collection, a seasonal bundle, or a product page with strong images and clear usage details. Visitors should not have to search again after they click.",
      },
      {
        heading: "How content placements can help",
        body: "A content placement can introduce the category, mention the store in context, and send interested visitors to the right page. This gives products more chances to be seen while keeping the sales outcome in the hands of the store experience.",
      },
      {
        heading: "What the store should keep ready",
        body: "GlowNest Beauty Co. should make product benefits, ingredients or materials, shipping details, returns, support, and checkout steps easy to understand. Strong traffic works best when the store is ready for visitors who are deciding quickly.",
      },
    ],
    verificationQuestions: [
      "Which beauty collection or product should receive traffic?",
      "Does the page explain product benefits and usage clearly?",
      "Are shipping, return, and support details visible?",
      "Does the placement avoid promised-purchase language?",
      "Which content placement angle gives visitors the best context?",
    ],
    relatedGuideSlugs: [
      "store-visibility-pages-for-dropshipping",
      "content-placements-for-dropshipping-traffic",
      "traffic-vs-sales-for-dropshipping-stores",
    ],
    meta: {
      title: `GlowNest Beauty Co. | ${siteName} Store Placement`,
      description:
        `GlowNest Beauty Co. is featured on ${siteName} as a beauty dropshipping store placement with referral links to the store website.`,
    },
  },
];

export function getWebsiteBySlug(slug: string): WebsiteProfile | undefined {
  return websites.find((w) => w.slug === slug);
}

export function getWebsiteSlugs(): string[] {
  return websites.map((w) => w.slug);
}
