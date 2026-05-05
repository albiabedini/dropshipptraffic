import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CtaBox } from "@/components/CtaBox";
import { GuideCard } from "@/components/GuideCard";
import { WebsiteCard } from "@/components/WebsiteCard";
import { CategoryPill } from "@/components/CategoryPill";
import { SectionHeader } from "@/components/SectionHeader";
import { getGuideCategories, getLatestGuides } from "@/lib/guides";
import { absoluteUrl, siteDescription, siteName, siteTitleDefault } from "@/lib/seo";
import { websites } from "@/lib/websites";

const serviceNotes = [
  {
    title: "Traffic for dropshipping stores",
    body: "You want more traffic. We create store placements, content mentions, and referral links that send visitors to your dropshipping website.",
  },
  {
    title: "Built around product visibility",
    body: "Your products need people looking at them. More referral visitors create more product views and more chances for your store to turn interest into orders.",
  },
  {
    title: "Realistic outcome boundaries",
    body: "We drive traffic. Your store converts it. Sales depend on your products, pricing, offer, website quality, trust signals, and checkout experience.",
  },
] as const;

const whatYouGet = [
  "More referral visitors to your dropshipping store",
  "A dedicated store feature or visibility page",
  "Links that send people directly to your website",
  "More product views across the products you want seen",
  "More chances to turn visitors into customers",
] as const;

const trafficMethods = [
  "Store visibility pages",
  "Content placements",
  "Dedicated store features",
  "Contextual referral links",
  "Traffic-focused store mentions",
] as const;

export const metadata: Metadata = {
  title: "Get More Traffic to Your Dropshipping Store",
  description: siteDescription,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    siteName,
    title: siteTitleDefault,
    description: siteDescription,
    url: absoluteUrl("/"),
  },
};

export default function HomePage() {
  const categories = getGuideCategories();
  const latestGuides = getLatestGuides(5);

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-900/10 bg-gradient-to-br from-[#152032] via-[#1c2d42] to-[#152032] text-[#faf8f5]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_65%_at_70%_-25%,rgba(45,212,191,0.16),transparent_58%),radial-gradient(ellipse_60%_45%_at_10%_90%,rgba(251,191,36,0.07),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-12deg, transparent, transparent 100px, rgba(255,252,248,0.08) 100px, rgba(255,252,248,0.08) 101px)",
          }}
          aria-hidden
        />
        <Container className="relative py-16 sm:py-20 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:py-28">
          <div className="max-w-xl lg:max-w-none">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200/95">
              Traffic and visibility for dropshipping stores
            </p>
            <h1 className="mt-5 text-[2rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-[2.65rem] sm:leading-[1.08] lg:text-5xl">
              Get More Traffic to Your Dropshipping Store
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              DropShippTraffic helps dropshipping store owners get more visitors through visibility
              pages, store placements, and referral links that send people directly to their websites.
              More visitors means more product views and more chances to make sales.
            </p>
            <div className="mt-11 flex flex-wrap gap-3">
              <Link
                href="/for-businesses"
                className="inline-flex items-center justify-center rounded-xl bg-teal-400 px-6 py-3.5 text-sm font-semibold text-teal-950 shadow-[0_16px_38px_-22px_rgba(45,212,191,0.65)] transition-colors hover:bg-teal-300"
              >
                Get Traffic for My Store
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-xl border border-white/18 bg-white/[0.07] px-6 py-3.5 text-sm font-semibold text-[#faf8f5] backdrop-blur-sm transition-colors hover:bg-white/[0.12]"
              >
                See How Traffic Works
              </Link>
            </div>
          </div>

          <div className="relative mt-14 hidden lg:mt-0 lg:flex lg:flex-col lg:gap-4">
            <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 shadow-[0_22px_56px_-36px_rgba(0,0,0,0.65)] backdrop-blur-md">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-teal-200/90">
                We drive traffic
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                Visibility pages, content placements, store features, and referral links create more
                paths for visitors to reach your dropshipping website.
              </p>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-teal-400/40 to-transparent" />
              <p className="mt-4 text-xs text-slate-400">Referral visitors - product visibility</p>
            </div>
            <div className="-translate-x-6 rounded-2xl border border-amber-400/15 bg-[#faf8f5]/[0.96] p-6 text-slate-900 shadow-[0_24px_56px_-38px_rgba(251,191,36,0.35)] ring-1 ring-white/40">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-indigo-700">
                Your store converts it
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Sales depend on your offer, product-market fit, pricing, trust signals, page speed,
                checkout flow, and follow-up.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="how-it-works" className="border-b border-slate-900/8 bg-[#faf8f5] py-14 sm:py-16 lg:py-20">
        <Container>
          <SectionHeader
            eyebrow="How it works"
            title="We drive traffic. Your store converts it."
            description="We help bring more visitors to your dropshipping website. Sales depend on your products, pricing, offer, website quality, trust signals, and checkout experience."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {serviceNotes.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-900/10 bg-gradient-to-br from-[#f5f2ec] via-[#faf8f5] to-teal-50/50 p-6 shadow-[0_14px_36px_-30px_rgba(15,118,110,0.2)] ring-1 ring-white/80"
              >
                <h2 className="text-base font-semibold tracking-tight text-slate-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-900/8 bg-gradient-to-b from-[#f0ebe3] via-[#ebe6df] to-[#e6e0d8] py-14 sm:py-16 lg:py-20">
        <Container>
          <SectionHeader
            eyebrow="What you get"
            eyebrowTone="amber"
            title="A store feature, referral links, and more product views"
            description="DropShippTraffic gives store owners concrete traffic assets: a feature or placement, direct links to the website, content mentions, and more chances for visitors to see products."
          />
          <div className="mt-9 grid gap-4 text-sm leading-relaxed text-slate-600 sm:grid-cols-2 lg:grid-cols-5">
            {whatYouGet.map((item) => (
              <div key={item} className="rounded-xl border border-slate-900/10 bg-[#faf8f5]/80 p-5">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-slate-900/10 bg-[#152032] p-7 text-[#faf8f5] shadow-[0_22px_56px_-42px_rgba(21,32,50,0.55)] sm:p-8">
            <h2 className="text-lg font-semibold text-white">Traffic that gives your products more chances to convert</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">
              We do not sell fake bot traffic, and we do not promise purchases or revenue. The service is
              focused on visibility, referral visitors, and direct paths to your store so real people
              have more chances to view your products.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative border-b border-slate-900/8 py-14 sm:py-16 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(15,118,110,0.07),transparent_55%)]"
          aria-hidden
        />
        <Container className="relative">
          <SectionHeader
            eyebrow="Traffic methods"
            title="How we send visitors to your store"
            description="Your store can be featured through pages and placements that link to the products, collections, or homepage you want visitors to see."
          />
          <div className="mt-10 flex flex-wrap gap-2 sm:gap-2.5">
            {trafficMethods.map((method) => (
              <CategoryPill key={method} variant="warm" label={method} />
            ))}
          </div>
          <div className="mt-10 grid gap-7 md:grid-cols-2 md:gap-8">
            {websites.map((w) => (
              <WebsiteCard key={w.slug} site={w} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-indigo-950/10 bg-gradient-to-br from-[#e8e6ff] via-[#f5f2ec] to-[#fdeecf]/70 py-14 sm:py-16 lg:py-20">
        <Container>
          <SectionHeader
            eyebrow="Traffic pages"
            eyebrowTone="indigo"
            title="Make your store ready for the traffic"
            description="Short, practical pages on referral traffic, store placements, product-page views, and why traffic creates chances while your store handles conversion."
            actions={
              <Link
                href="/guides"
                className="text-sm font-semibold text-indigo-950 hover:text-indigo-950/85 sm:pb-0.5"
              >
                See How Traffic Works →
              </Link>
            }
          />
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-2.5">
            {categories.map((c) => (
              <CategoryPill key={c} variant="indigo" label={c} />
            ))}
          </div>
          <div className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {latestGuides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 bg-[#152032] py-14 sm:py-16 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_80%_110%,rgba(45,212,191,0.1),transparent_55%),radial-gradient(ellipse_50%_40%_at_15%_-10%,rgba(251,191,36,0.07),transparent_50%)]"
          aria-hidden
        />
        <Container className="relative">
          <CtaBox
            variant="inset"
            eyebrow="Ready for more visitors?"
            title="Get your store featured and start receiving referral visitors"
            description="Tell us where you want traffic sent. We shape the store feature, content mentions, and referral links around the pages you want visitors to open."
            href="/for-businesses"
            buttonLabel="Get My Store Featured"
          />
        </Container>
      </section>
    </>
  );
}
