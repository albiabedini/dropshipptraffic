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

const discoveryNotes = [
  {
    title: "What DropTraffic is",
    body: "DropTraffic is an informational discovery site focused on dropshipping-related topics: beginner-friendly guides, website trust comparisons, and short reference profiles for useful destinations. The focus stays on learning and orientation—not ecommerce, SaaS, agency services, or selling traffic.",
  },
  {
    title: "What readers can do here",
    body: "Use DropTraffic when you want a plain-language checklist, a practical browsing habit, or a quick way to understand what a featured website is about before you continue your own research elsewhere.",
  },
  {
    title: "How profiles fit",
    body: "Website profiles are neutral summaries. They explain what a site appears to provide, what kind of reader may find it relevant, and which guides give helpful context. They are examples and reference points, not endorsements.",
  },
] as const;

const guideThemes = [
  "How to evaluate product information pages",
  "How to compare websites before trusting them",
  "Online browsing mistakes beginners should avoid",
  "How to find useful websites and organize bookmarks",
  "Website safety, trust signals, and red flags",
] as const;

export const metadata: Metadata = {
  title: "Informational Guides and Website Discovery",
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
              Dropshipping discovery · informational only
            </p>
            <h1 className="mt-5 text-[2rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-[2.65rem] sm:leading-[1.08] lg:text-5xl">
              Practical guides and website profiles—built for readers, not pitches.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              DropTraffic publishes discovery guides and neutral website profiles for dropshipping-related informational visibility—reader education and referral context, not visitor packages or outcome guarantees.
              Read here for context and habits, then follow outbound links when you want primary details on each domain.
            </p>
            <div className="mt-11 flex flex-wrap gap-3">
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-xl bg-teal-400 px-6 py-3.5 text-sm font-semibold text-teal-950 shadow-[0_16px_38px_-22px_rgba(45,212,191,0.65)] transition-colors hover:bg-teal-300"
              >
                Browse guides
              </Link>
              <Link
                href="/websites"
                className="inline-flex items-center justify-center rounded-xl border border-white/18 bg-white/[0.07] px-6 py-3.5 text-sm font-semibold text-[#faf8f5] backdrop-blur-sm transition-colors hover:bg-white/[0.12]"
              >
                Featured websites
              </Link>
            </div>
          </div>

          <div className="relative mt-14 hidden lg:mt-0 lg:flex lg:flex-col lg:gap-4">
            <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 shadow-[0_22px_56px_-36px_rgba(0,0,0,0.65)] backdrop-blur-md">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-teal-200/90">
                Guides
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                Habits for comparing listings, spotting thin policies, and choosing destinations you will
                reopen—not impulse clicks.
              </p>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-teal-400/40 to-transparent" />
              <p className="mt-4 text-xs text-slate-400">Editorial guides · reader-first</p>
            </div>
            <div className="-translate-x-6 rounded-2xl border border-amber-400/15 bg-[#faf8f5]/[0.96] p-6 text-slate-900 shadow-[0_24px_56px_-38px_rgba(251,191,36,0.35)] ring-1 ring-white/40">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-indigo-700">
                Profiles
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Neutral summaries of what a site offers and who it is for—discovery notes you can skim,
                then verify on their domain.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-900/8 bg-[#faf8f5] py-14 sm:py-16 lg:py-20">
        <Container>
          <SectionHeader
            eyebrow="About DropTraffic"
            title="Discovery guides and neutral website profiles"
            description="DropTraffic helps readers slow down, understand what they are looking at, and make sense of useful websites—informational traffic and visibility context without buyer-pressure language."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {discoveryNotes.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-900/10 bg-gradient-to-br from-[#f5f2ec] via-[#faf8f5] to-teal-50/50 p-6 shadow-[0_14px_36px_-30px_rgba(15,118,110,0.2)] ring-1 ring-white/80"
              >
                <h2 className="text-base font-semibold tracking-tight text-slate-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-slate-900/10 bg-[#152032] p-7 text-[#faf8f5] shadow-[0_22px_56px_-42px_rgba(21,32,50,0.55)] sm:p-8">
            <h2 className="text-lg font-semibold text-white">Why the focus stays informational</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">
              Many people reach the web with simple questions: how to check if a website is safe,
              how to compare online information, how to avoid misleading websites, or how to keep
              useful links organized. DropTraffic is designed for those discovery moments. Guides provide
              practical steps, while profiles give readers a concise way to understand a destination
              before deciding whether it belongs in their own research.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-900/8 bg-gradient-to-b from-[#f0ebe3] via-[#ebe6df] to-[#e6e0d8] py-14 sm:py-16 lg:py-20">
        <Container>
          <SectionHeader
            eyebrow="Topics"
            eyebrowTone="amber"
            title="Guide categories"
            description="Themes we publish today—product research, discovery habits, online safety, and roundups—structured so you can jump to what you need."
          />
          <div className="mt-10 flex flex-wrap gap-2 sm:gap-2.5">
            {categories.map((c) => (
              <CategoryPill key={c} variant="warm" label={c} />
            ))}
          </div>
          <div className="mt-9 grid gap-4 text-sm leading-relaxed text-slate-600 sm:grid-cols-2">
            {guideThemes.map((theme) => (
              <div key={theme} className="rounded-xl border border-slate-900/10 bg-[#faf8f5]/80 p-5">
                {theme}
              </div>
            ))}
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
            eyebrow="Reading list"
            title="Latest guides"
            description="Explainers on researching products, comparing websites, finding dependable sources, and keeping bookmarks useful."
            actions={
              <Link
                href="/guides"
                className="text-sm font-semibold text-teal-900 hover:text-teal-950 sm:pb-0.5"
              >
                View all guides →
              </Link>
            }
          />
          <div className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {latestGuides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-indigo-950/10 bg-gradient-to-br from-[#e8e6ff] via-[#f5f2ec] to-[#fdeecf]/70 py-14 sm:py-16 lg:py-20">
        <Container>
          <SectionHeader
            eyebrow="Spotlights"
            eyebrowTone="indigo"
            title="Featured websites"
            description="Pages that spell out what each destination provides and link out when you want depth—reference-style, not promotional copy."
            actions={
              <Link
                href="/websites"
                className="text-sm font-semibold text-indigo-950 hover:text-indigo-950/85 sm:pb-0.5"
              >
                All profiles →
              </Link>
            }
          />
          <div className="mt-11 grid gap-7 md:grid-cols-2 md:gap-8">
            {websites.map((w) => (
              <WebsiteCard key={w.slug} site={w} />
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
            eyebrow="Directed here?"
            title="If someone pointed you to DropTraffic after outreach"
            description="This short section explains how informational pages work here—a neutral profile plus guides readers can use for context—not a pitch deck or funnel."
            href="/for-businesses"
            buttonLabel="Read how DropTraffic lists destinations"
          />
        </Container>
      </section>
    </>
  );
}
