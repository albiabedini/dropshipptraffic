export type GuideSection = {
  heading: string;
  body: string;
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type Guide = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  sections: GuideSection[];
  faq?: GuideFaq[];
  relatedWebsiteSlug?: string;
  meta: {
    title: string;
    description: string;
  };
};

export const guides: Guide[] = [
  {
    title: "Referral Traffic for Dropshipping Stores",
    slug: "referral-traffic-for-dropshipping-stores",
    category: "Referral traffic",
    excerpt:
      "How referral links, store placements, and visibility pages can send more visitors directly to a dropshipping website.",
    relatedWebsiteSlug: "northline-goods",
    meta: {
      title: "Referral Traffic for Dropshipping Stores",
      description:
        "See how referral traffic can send more visitors to a dropshipping store through visibility pages, placements, and direct links.",
    },
    sections: [
      {
        heading: "What referral traffic means",
        body: "Referral traffic is visitor activity that reaches your store from another website. For dropshipping stores, that can mean a store feature page, a product mention, a content placement, or a direct link that sends people to your homepage, collection page, or product page. The point is simple: create more routes for people to reach your store and continue to your website.",
      },
      {
        heading: "Why it matters for product views",
        body: "Dropshipping products need visibility before they have any chance to convert. Referral links help more people reach the store pages you want seen. More visitors can lead to more product views, more add-to-cart opportunities, and more chances for shoppers to decide if your offer fits them. Traffic does not promise purchases, but it gives your store more opportunities to earn them.",
      },
      {
        heading: "Where referral links should point",
        body: "The best target page depends on what you want visitors to do. A homepage can work when the store brand and category are easy to understand. A collection page can work when you want visitors to browse a focused product set. A product page can work when one item has strong photos, clear pricing, shipping information, and a simple path to checkout.",
      },
      {
        heading: "What to prepare before traffic starts",
        body: "Before sending visitors to your store, check the basics: fast loading pages, clear product names, useful images, visible pricing, shipping details, return information, trust signals, and a checkout that feels straightforward. Referral traffic is more valuable when the landing page answers obvious questions without making visitors hunt.",
      },
    ],
    faq: [
      {
        question: "Does referral traffic promise purchases?",
        answer:
          "No. Referral traffic can send more visitors to your store, but purchases depend on your products, pricing, offer, store experience, trust signals, and checkout flow.",
      },
      {
        question: "What page should referral traffic go to?",
        answer:
          "Send traffic to the page that best matches the visitor intent: homepage for broad browsing, collection page for a category, or product page for a specific item.",
      },
      {
        question: "Is referral traffic the same as bot traffic?",
        answer:
          "No. DropShippTraffic positions referral visibility around pages, placements, and links, not fake bot traffic or artificial checkout activity.",
      },
    ],
  },
  {
    title: "Product Page Visibility for Dropshipping Stores",
    slug: "product-page-visibility-for-dropshipping",
    category: "Product views",
    excerpt:
      "How store owners can use traffic placements to give specific products more views and more chances to convert.",
    relatedWebsiteSlug: "northline-goods",
    meta: {
      title: "Product Page Visibility for Dropshipping Stores",
      description:
        "See how dropshipping stores can increase product page visibility with traffic placements and referral links.",
    },
    sections: [
      {
        heading: "Pick the products worth sending traffic to",
        body: "Not every product should receive the same traffic push. Choose products with clear photos, easy-to-understand benefits, competitive pricing, useful descriptions, and policies that are easy to find. Traffic works best when visitors land on pages that quickly explain what the item is, who it is for, and why they should keep looking.",
      },
      {
        heading: "Match the placement to the product",
        body: "A visibility page should describe the product category and set the right expectation before a visitor clicks. If the placement talks about seasonal home items, send visitors to a collection that matches that topic. If it highlights one product, send them directly to that product page so the path from interest to browsing is short.",
      },
      {
        heading: "Make the landing page ready",
        body: "A product page should answer the questions visitors bring with them: price, size, materials, shipping, returns, delivery timing, payment options, and what makes the product useful. More views are only useful if the page can hold attention after the click.",
      },
      {
        heading: "Measure traffic separately from sales",
        body: "Product views, referral sessions, click-throughs, add-to-cart events, and purchases are different signals. Track them separately so you can see whether traffic is arriving, whether visitors are engaging, and where your store may need improvement. Do not judge traffic only by sales without checking the steps in between.",
      },
    ],
    faq: [
      {
        question: "Can more product views improve sales chances?",
        answer:
          "More product views can create more chances to sell, but they do not promise purchases. The product page and offer still have to convert visitors.",
      },
      {
        question: "Should every product get traffic?",
        answer:
          "Usually no. Start with products that have strong pages, clear value, and a simple buying path.",
      },
    ],
  },
  {
    title: "Store Visibility Pages: What Dropshipping Stores Should Include",
    slug: "store-visibility-pages-for-dropshipping",
    category: "Store placements",
    excerpt:
      "What a dropshipping store should provide before being featured on a visibility page that sends visitors back to the site.",
    relatedWebsiteSlug: "glownest-beauty-co",
    meta: {
      title: "Store Visibility Pages for Dropshipping Stores",
      description:
        "See what dropshipping stores should include in a visibility page before sending referral visitors to the website.",
    },
    sections: [
      {
        heading: "Explain the store quickly",
        body: "A visibility page should make the store category obvious within a few seconds. Visitors should understand what the store sells, who the products are for, and why the store may be worth browsing. Clear positioning helps people decide whether to click through.",
      },
      {
        heading: "Use direct referral links",
        body: "The placement should include links that send visitors directly to the store owner's website. Those links can point to the homepage, a best-selling collection, a seasonal offer, or a specific product. The key is to avoid vague paths and make the next step obvious.",
      },
      {
        heading: "Keep claims realistic",
        body: "Store visibility copy should be persuasive without overpromising. It can talk about more traffic, more product views, and more chances to convert. It should not promise purchases, specific buyers, instant customer activity, revenue certainty, or conversion outcomes.",
      },
      {
        heading: "Support the click with a ready store",
        body: "A visibility page can introduce the store, but the website has to carry the visitor experience. Store owners should check product pages, pricing, navigation, delivery details, return information, and checkout quality before sending more people there.",
      },
    ],
    faq: [
      {
        question: "What is a store visibility page?",
        answer:
          "It is a page that introduces a dropshipping store and gives visitors a direct link to continue on the store's website.",
      },
      {
        question: "Can a visibility page promise sales?",
        answer:
          "No. It can help send traffic and create more product views, but it should not promise purchases or revenue.",
      },
    ],
  },
  {
    title: "Content Placements for Dropshipping Traffic Campaigns",
    slug: "content-placements-for-dropshipping-traffic",
    category: "Content placements",
    excerpt:
      "How content placements can introduce a dropshipping store and send interested visitors to the right store page.",
    relatedWebsiteSlug: "glownest-beauty-co",
    meta: {
      title: "Content Placements for Dropshipping Traffic Campaigns",
      description:
        "Understand how content placements can help dropshipping stores receive referral visitors without promising sales.",
    },
    sections: [
      {
        heading: "Use content to create context",
        body: "A content placement gives visitors a reason to understand the store before clicking. Instead of dropping a bare link onto a page, the placement can explain the category, the product angle, and why the store may be relevant to someone browsing that topic.",
      },
      {
        heading: "Send people to the most relevant page",
        body: "The strongest placements connect the topic to the destination. If the content discusses skincare bundles, the link should point to a skincare collection or product page, not a generic page that makes visitors search again. Relevance keeps the path smooth.",
      },
      {
        heading: "Write for interested visitors",
        body: "Traffic copy should sound direct and useful. It should help potential buyers decide whether the store is worth a click, while avoiding hype that the landing page cannot support. Clear, specific, and realistic usually performs better than vague excitement.",
      },
      {
        heading: "Review outcomes honestly",
        body: "After a placement is live, store owners should look at referral visits, page engagement, product views, add-to-cart actions, and purchases separately. This makes it easier to understand whether the traffic source, landing page, offer, or checkout needs work.",
      },
    ],
    faq: [
      {
        question: "What is a content placement?",
        answer:
          "It is a contextual mention or feature that introduces a store and links visitors to the store's website.",
      },
      {
        question: "What should content placement copy avoid?",
        answer:
          "It should avoid promised-purchase claims, fake urgency, unsupported results, and any language the store cannot back up.",
      },
    ],
  },
  {
    title: "Traffic vs. Sales for Dropshipping Stores",
    slug: "traffic-vs-sales-for-dropshipping-stores",
    category: "Expectations",
    excerpt:
      "A clear breakdown of how traffic gives your dropshipping products more chances to convert while your store determines sales outcomes.",
    relatedWebsiteSlug: "northline-goods",
    meta: {
      title: "Traffic vs. Sales for Dropshipping Stores",
      description:
        "Understand the difference between sending traffic to a dropshipping store and promising sales, revenue, buyers, or conversions.",
    },
    sections: [
      {
        heading: "Traffic is the visit",
        body: "Traffic means people arrive at your website. They may land on your homepage, a collection, or a product page. A traffic service can help create more of those visits through referral links and visibility assets. That is different from controlling whether each visitor decides to buy.",
      },
      {
        heading: "Sales happen inside the store experience",
        body: "A sale depends on the product, price, offer, trust level, shipping information, page speed, payment options, return policy, and checkout flow. More traffic gives the store more chances, but conversion happens after the visitor lands.",
      },
      {
        heading: "Measure the middle steps",
        body: "Between a visit and a sale, there are useful signals: product views, time on page, clicks, add-to-cart actions, checkout starts, and repeat visits. If traffic arrives but sales do not, those middle signals can show what to improve.",
      },
      {
        heading: "Use strong language without unsafe promises",
        body: "Safe traffic language can still be commercial: get more traffic to your dropshipping store, send more potential buyers to your website, more visitors and more product views, or traffic that gives your products more chances to convert. Avoid claims that promise buyers, revenue certainty, or instant customer activity.",
      },
    ],
    faq: [
      {
        question: "Can DropShippTraffic promise buyers?",
        answer:
          "No. The service can help send visitors to your store, but it does not promise buyers, purchases, revenue, or conversion outcomes.",
      },
      {
        question: "Why is traffic still valuable if purchases are not promised?",
        answer:
          "Products need visitors before they can sell. Traffic creates more opportunities for the store to earn attention, product views, and possible purchases.",
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
