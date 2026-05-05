import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { absoluteUrl, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Get Traffic for Your Dropshipping Store",
  description:
    "Get more traffic to your dropshipping store through visibility pages, store placements, content mentions, and referral links that send visitors to your website.",
  alternates: {
    canonical: absoluteUrl("/for-businesses"),
  },
  openGraph: {
    type: "website",
    siteName,
    title: `Get Traffic for Your Dropshipping Store | ${siteName}`,
    description:
      "DropShippTraffic helps dropshipping store owners get more referral visitors, more product views, and more chances to make sales while keeping outcomes realistic.",
    url: absoluteUrl("/for-businesses"),
  },
};

const trafficBenefits = [
  {
    title: "Send visitors to your store",
    body: "We build placements and links that point people directly to your dropshipping website, product pages, collections, or homepage.",
  },
  {
    title: "Get your store featured",
    body: "A dedicated store feature explains what you sell and gives visitors a clear button or link to keep browsing on your site.",
  },
  {
    title: "Increase product views",
    body: "More traffic gives your products more chances to be seen. Your store experience decides what happens after the click.",
  },
];

const includedItems = [
  "A dedicated store feature or visibility page",
  "Content mentions that introduce your store in context",
  "Referral links that send visitors directly to your website",
  "Traffic-focused copy written for dropshipping shoppers",
  "More product views and more chances for your store to convert",
] as const;

const storeInputs = [
  "Your store URL and the specific pages you want traffic sent to.",
  "Your strongest products, collections, offers, or customer use cases.",
  "A direct explanation of who the store is for and why shoppers should click through.",
  "Any claims, shipping details, or policy boundaries we should not overstate.",
  "The call to action you want visitors to take after they land on your website.",
] as const;

const noPromiseItems = [
  "No promised purchases, revenue, buyers, conversion outcomes, or checkout activity.",
  "No fake bot traffic or claims that visitors will automatically purchase.",
  "No promise that search engines or platforms will rank a page in a specific position.",
  "No exaggerated urgency, fake scarcity, or unsupported performance claims.",
  "No replacement for your store's product pages, pricing, offer, support, or checkout quality.",
] as const;

const fitSignals = [
  "You own or manage a dropshipping store and want more visitors.",
  "Your website is live, navigable, and ready for people to browse.",
  "Your product pages, policies, and checkout flow are ready to receive traffic.",
  "You want more visibility without pretending traffic automatically becomes sales.",
] as const;

export default function ForBusinessesPage() {
  return (
    <div className="relative overflow-hidden border-b border-slate-900/8">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ebe6df] via-[#f5f2ec] to-[#e8e6ff]/90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-30%,rgba(15,118,110,0.1),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative py-12 sm:py-16 lg:py-20">
        <SectionHeader
          eyebrow="Get traffic"
          eyebrowTone="teal"
          headingLevel="h1"
          title="Get More Traffic to Your Dropshipping Store"
          description="DropShippTraffic helps dropshipping store owners get featured through store placements, visibility pages, content mentions, and referral links that send visitors directly to their websites."
          actions={
            <Link
              href="#get-featured"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#152032] px-5 py-2.5 text-sm font-semibold text-[#faf8f5] shadow-[0_12px_28px_-18px_rgba(21,32,50,0.7)] transition-colors hover:bg-[#1c2a3d]"
            >
              List My Store
            </Link>
          }
        />

        <div className="relative mt-12 overflow-hidden rounded-2xl border border-slate-900/10 bg-[#152032] p-8 text-[#faf8f5] shadow-[0_28px_72px_-44px_rgba(21,32,50,0.65)] sm:p-10 lg:p-11">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_90%_-10%,rgba(129,140,248,0.15),transparent_55%),radial-gradient(ellipse_50%_45%_at_10%_110%,rgba(45,212,191,0.1),transparent_52%)]"
            aria-hidden
          />
          <div className="relative max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200/95">
              Direct traffic offer
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              More visitors. More product views. More chances to sell.
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-[0.9375rem]">
              We help send potential buyers to your store through store placements, content mentions, and
              referral links. Traffic gives your products more chances to convert, but your store&apos;s
              products, pricing, offer, trust signals, and checkout experience determine sales.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {trafficBenefits.map((item, i) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-xl border border-slate-900/10 bg-[#faf8f5]/92 p-6 shadow-[0_14px_36px_-28px_rgba(21,32,50,0.18)] ring-1 ring-white/80 backdrop-blur-[2px]"
            >
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-amber-800/90">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <section className="rounded-2xl border border-slate-900/10 bg-[#faf8f5]/95 p-8 shadow-[0_2px_8px_rgba(21,32,50,0.04),0_24px_62px_-42px_rgba(21,32,50,0.2)] ring-1 ring-white/90 backdrop-blur-[2px] sm:p-10">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">What you get when your store is featured</h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              The service is built to send more referral visitors to dropshipping stores. Each
              placement should make the store clear, make the offer easy to understand, and make the
              click to your website obvious.
            </p>
            <ul className="mt-7 space-y-4 text-sm leading-relaxed text-slate-600">
              {includedItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-indigo-950/12 bg-gradient-to-br from-[#ecebff] via-[#faf8f5] to-amber-50/50 p-8 shadow-[0_22px_56px_-40px_rgba(67,56,202,0.35)] ring-1 ring-white/80 sm:p-10">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              The clean traffic boundary
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              We drive traffic. Your store converts it. The store controls the product, offer, page
              experience, trust signals, and checkout.
            </p>
            <ul className="mt-7 space-y-4 text-sm leading-relaxed text-slate-600">
              {noPromiseItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div id="get-featured" className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-2xl border border-slate-900/10 bg-[#faf8f5]/95 p-8 shadow-[0_2px_8px_rgba(21,32,50,0.04),0_24px_62px_-42px_rgba(21,32,50,0.2)] ring-1 ring-white/90 backdrop-blur-[2px] sm:p-10">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">What store owners should provide</h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              Strong placements need clear store details. The better your product pages are, the
              easier it is to send visitors to the right page with the right reason to click.
            </p>
            <ul className="mt-8 space-y-6 text-sm leading-relaxed text-slate-600">
              {storeInputs.map((item, index) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-900/[0.1] text-xs font-bold text-teal-900 ring-1 ring-teal-900/15">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-teal-900/12 bg-teal-50/70 p-8 shadow-[0_18px_48px_-38px_rgba(15,118,110,0.25)] ring-1 ring-white/80 sm:p-10">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">Who this is for</h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                DropShippTraffic is for dropshipping store owners who want more visitors, more
                product views, and direct links pointing people back to their websites.
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
                {fitSignals.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-900/10 bg-[#152032] p-8 text-[#faf8f5] shadow-[0_22px_56px_-38px_rgba(21,32,50,0.55)] sm:p-10">
              <p className="text-sm font-semibold text-white">Ready to send more visitors to your store?</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Use the same channel that directed you here to share your store URL, target pages,
                and the products you want visitors to see first.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/websites"
                  className="inline-flex rounded-xl bg-teal-400 px-5 py-2.5 text-sm font-semibold text-teal-950 hover:bg-teal-300"
                >
                  Get My Store Featured
                </Link>
                <Link
                  href="/guides"
                  className="inline-flex rounded-xl border border-white/18 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-[#faf8f5] hover:bg-white/[0.1]"
                >
                  See How Traffic Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
