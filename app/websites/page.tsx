import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { WebsiteCard } from "@/components/WebsiteCard";
import { SectionHeader } from "@/components/SectionHeader";
import { websites } from "@/lib/websites";
import { absoluteUrl, siteName } from "@/lib/seo";

const placementPrinciples = [
  {
    title: "Built to send visitors",
    body: "Each placement creates a clear path from DropShippTraffic to the store owner's own website.",
  },
  {
    title: "Focused on product visibility",
    body: "The page makes the store, product category, and reason to click obvious before visitors land on the website.",
  },
  {
    title: "Clear traffic boundary",
    body: "A placement can create traffic and product views. The store experience determines what visitors do after they land.",
  },
] as const;

const placementChecklist = [
  "Which store page should receive traffic?",
  "What products or collections should visitors see first?",
  "Is the store ready for referral visitors?",
  "Do the claims stay realistic and supportable?",
  "Does the call to action send people directly to the store?",
] as const;

const placementUseCases = [
  "Feature a dropshipping store so visitors can click through to the website.",
  "Send referral visitors to a specific product, collection, or homepage.",
  "Give products more views without promising sales outcomes.",
  "Support traffic campaigns with clear store-facing pages.",
] as const;

export const metadata: Metadata = {
  title: "Store Placements for Dropshipping Traffic",
  description:
    "DropShippTraffic store placements feature dropshipping websites with referral links that send visitors directly to product pages, collections, or store homepages.",
  alternates: {
    canonical: absoluteUrl("/websites"),
  },
  openGraph: {
    type: "website",
    siteName,
    title: "Store Placements for Dropshipping Traffic",
    description:
      "Featured dropshipping store visibility pages with referral links that send visitors directly to store websites.",
    url: absoluteUrl("/websites"),
  },
};

export default function WebsitesPage() {
  return (
    <div className="relative border-b border-slate-900/8 pb-16 sm:pb-20">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1a1f4b] via-[#252c63] to-[#152032] pb-28 pt-14 text-[#faf8f5] sm:pb-32 sm:pt-16 lg:pt-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_65%_-20%,rgba(129,140,248,0.2),transparent_55%),radial-gradient(ellipse_50%_45%_at_5%_95%,rgba(251,191,36,0.08),transparent_52%)]"
          aria-hidden
        />
        <Container className="relative">
          <SectionHeader
            inverse
            eyebrowTone="amber"
            eyebrow="Traffic placements"
            headingLevel="h1"
            title="Dropshipping store placements"
            description="Store features, content mentions, and direct referral links built to send visitors to dropshipping websites."
            actions={
              <Link
                href="/for-businesses"
                className="hidden text-sm font-semibold text-amber-100/95 hover:text-white sm:inline sm:pb-1"
              >
                List my store →
              </Link>
            }
          />
        </Container>
      </div>

      <Container className="relative z-10 -mt-20 sm:-mt-24">
        <section className="mb-10 rounded-2xl border border-indigo-950/12 bg-[#faf8f5]/95 p-8 shadow-[0_2px_8px_rgba(21,32,50,0.05),0_26px_66px_-42px_rgba(67,56,202,0.3)] ring-1 ring-white/90 backdrop-blur-[2px] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-800">
                How traffic placements work
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                Get your store featured and send visitors to your website
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
                Store placements are built to send referral visitors. A placement introduces the
                store, highlights the product category, and gives people a direct route to the
                store owner&apos;s own website.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
                The goal is more traffic and more product views, not a promise that every visitor
                will buy. Once visitors click through, the store&apos;s products, pricing, page quality,
                trust signals, and checkout experience determine what happens next.
              </p>
            </div>
            <div className="rounded-xl border border-indigo-950/12 bg-indigo-50/70 p-6">
              <h2 className="text-base font-semibold text-slate-900">Placement checklist</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600">
                {placementChecklist.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {placementPrinciples.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-900/10 bg-white/70 p-5">
                <h2 className="text-sm font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-slate-900/10 bg-[#152032] p-6 text-[#faf8f5]">
            <h2 className="text-base font-semibold text-white">We drive traffic. Your store converts it.</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              DropShippTraffic helps send more potential buyers to your store through placements,
              content mentions, and referral links. Your product pages, offer, pricing, trust
              signals, and checkout decide what happens after the click.
            </p>
            <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-slate-300 sm:grid-cols-2">
              {placementUseCases.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="grid gap-7 md:grid-cols-2 md:gap-8">
          {websites.map((w) => (
            <WebsiteCard key={w.slug} site={w} />
          ))}
        </div>
      </Container>
    </div>
  );
}
