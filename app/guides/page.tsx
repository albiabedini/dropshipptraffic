import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { GuideCard } from "@/components/GuideCard";
import { SectionHeader } from "@/components/SectionHeader";
import { guides } from "@/lib/guides";
import { absoluteUrl, siteName } from "@/lib/seo";

const guideHubNotes = [
  {
    title: "Traffic first",
    body: "These pages support the service offer: more referral visitors, more product-page views, and more traffic sent to dropshipping stores.",
  },
  {
    title: "Store owner focus",
    body: "The copy is written for people who own or manage stores, not for readers looking for a general dropshipping course.",
  },
  {
    title: "Clear conversion boundary",
    body: "The pages separate traffic from sales so expectations stay strong, direct, and realistic.",
  },
] as const;

const guideTopics = [
  "Referral traffic for dropshipping stores",
  "Store visibility pages",
  "Product-page traffic",
  "Content placements",
  "Traffic versus conversion",
  "Preparing your store for visitors",
] as const;

const readingSteps = [
  "Start with the traffic problem your store has right now.",
  "Choose the page that matches the traffic asset you want to use.",
  "Use the checklist to prepare your store before visitors arrive.",
  "Remember that traffic creates chances; your store experience handles conversion.",
] as const;

const startHerePaths = [
  {
    need: "I want more referral visitors",
    href: "/guides/referral-traffic-for-dropshipping-stores",
    label: "Start with referral traffic",
  },
  {
    need: "I want products seen more often",
    href: "/guides/product-page-visibility-for-dropshipping",
    label: "Improve product visibility",
  },
  {
    need: "I want realistic expectations",
    href: "/guides/traffic-vs-sales-for-dropshipping-stores",
    label: "Understand traffic vs. sales",
  },
] as const;

export const metadata: Metadata = {
  title: "Traffic Pages for Dropshipping Store Owners",
  description:
    "Traffic-focused DropShippTraffic pages for store owners who want more referral visitors, more product views, and realistic expectations about sales outcomes.",
  alternates: {
    canonical: absoluteUrl("/guides"),
  },
  openGraph: {
    type: "website",
    siteName,
    title: "Traffic Pages for Dropshipping Store Owners",
    description:
      "Traffic-focused DropShippTraffic pages for store owners who want more referral visitors and more product views without promised-purchase claims.",
    url: absoluteUrl("/guides"),
  },
};

export default function GuidesPage() {
  return (
    <div className="relative border-b border-slate-900/8 pb-16 sm:pb-20">
      <div className="relative overflow-hidden bg-[#152032] pb-28 pt-14 text-[#faf8f5] sm:pb-32 sm:pt-16 lg:pt-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-25%,rgba(45,212,191,0.14),transparent_58%),radial-gradient(ellipse_55%_45%_at_100%_85%,rgba(251,191,36,0.06),transparent_55%)]"
          aria-hidden
        />
        <Container className="relative">
          <SectionHeader
            inverse
            eyebrowTone="amber"
            eyebrow="Traffic setup"
            headingLevel="h1"
            title="Dropshipping traffic pages"
            description="Practical pages for store owners who want more visitors, more product views, and a store ready to receive referral traffic."
            actions={
              <Link
                href="/for-businesses"
                className="hidden text-sm font-semibold text-amber-100/95 hover:text-white sm:inline sm:pb-1"
              >
                Get Traffic for My Store →
              </Link>
            }
          />
        </Container>
      </div>

      <Container className="relative z-10 -mt-20 sm:-mt-24">
        <section className="mb-10 rounded-2xl border border-slate-900/10 bg-[#faf8f5]/95 p-8 shadow-[0_2px_8px_rgba(21,32,50,0.05),0_26px_66px_-42px_rgba(21,32,50,0.3)] ring-1 ring-white/90 backdrop-blur-[2px] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-800">
                Built for store owners
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                See how traffic assets send visitors to your store
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
                These pages show the traffic side of DropShippTraffic: visibility pages,
                referral links, store placements, and content mentions that point visitors back to
                dropshipping websites.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
                They are not a generic dropshipping blog and they do not promise sales. Use them to
                prepare your store for traffic, choose target pages, and understand how product views
                create more chances for your own site to convert.
              </p>
            </div>
            <div className="rounded-xl border border-teal-900/12 bg-teal-50/60 p-6">
              <h2 className="text-base font-semibold text-slate-900">Topics covered</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600">
                {guideTopics.map((topic) => (
                  <li key={topic} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-700" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {guideHubNotes.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-900/10 bg-white/70 p-5">
                <h2 className="text-sm font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-slate-900/10 bg-[#152032] p-6 text-[#faf8f5]">
            <h2 className="text-base font-semibold text-white">A simple way to use these traffic pages</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              More traffic helps more people reach your store. Before that happens, your product pages
              should be clear, your policies should be easy to find, and your offer should be ready for
              visitors who are deciding whether to keep browsing.
            </p>
            <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-slate-300 sm:grid-cols-2">
              {readingSteps.map((step) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 rounded-xl border border-slate-900/10 bg-white/75 p-6">
            <h2 className="text-base font-semibold text-slate-900">Start here by store need</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {startHerePaths.map((item) => (
                <div key={item.href} className="rounded-lg border border-slate-900/10 bg-[#faf8f5] p-5">
                  <p className="text-sm leading-relaxed text-slate-600">{item.need}</p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex text-sm font-semibold text-teal-900 hover:text-teal-950"
                  >
                    {item.label} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {guides.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      </Container>
    </div>
  );
}
