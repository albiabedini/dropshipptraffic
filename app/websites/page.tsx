import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { WebsiteCard } from "@/components/WebsiteCard";
import { SectionHeader } from "@/components/SectionHeader";
import { websites } from "@/lib/websites";
import { absoluteUrl, siteName } from "@/lib/seo";

const profilePrinciples = [
  {
    title: "Summaries, not endorsements",
    body: "A profile explains what a website appears to provide and why it may be useful to understand. It does not replace your own checks, and it should not be read as a blanket endorsement.",
  },
  {
    title: "Context from guides",
    body: "Profiles work best beside guides about website trust signals, online research, useful bookmarks, and safe website evaluation. The guide gives the method; the profile gives a concrete destination to inspect.",
  },
  {
    title: "Reader-first details",
    body: "A useful profile should answer basic questions: what the website covers, who might find it relevant, what kind of information is summarized, and where to continue for primary details.",
  },
] as const;

const profileChecklist = [
  "What does this website explain or provide?",
  "Is the category clear enough to understand quickly?",
  "Which related guides help evaluate it?",
  "What should I verify on the website itself?",
  "Does the profile stay neutral and specific?",
] as const;

const profileUseCases = [
  "Use a profile before reading deeper pages on an unfamiliar website.",
  "Pair a profile with a guide when you want a website trust checklist.",
  "Compare profiles by category, source clarity, and related guide context.",
  "Keep your own notes about what still needs verification.",
] as const;

export const metadata: Metadata = {
  title: "Featured Website Profiles",
  description:
    "Neutral DropshippTraffic summaries of useful websites, what each destination explains, and related informational guides for dropshipping discovery context.",
  alternates: {
    canonical: absoluteUrl("/websites"),
  },
  openGraph: {
    type: "website",
    siteName,
    title: "Featured Website Profiles on DropshippTraffic",
    description:
      "Neutral DropshippTraffic summaries of useful websites, what each destination explains, and related informational guides for dropshipping discovery context.",
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
            eyebrow="Discovery"
            headingLevel="h1"
            title="Featured websites"
            description="Short reference pages about worthwhile destinations—what they provide, who they suit, and companion guides when you want more reading."
            actions={
              <Link
                href="/guides"
                className="hidden text-sm font-semibold text-amber-100/95 hover:text-white sm:inline sm:pb-1"
              >
                Read guides →
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
                How profiles work
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                A curated reference area for useful websites
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
                Featured website profiles are short informational summaries. They help readers understand
                what a destination is about before doing deeper online research. A profile may describe a
                category, explain the type of material available, and point to related DropshippTraffic guides that
                make the topic easier to evaluate.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
                Use profiles as starting notes, not final judgments. If a profile seems relevant, read the
                connected guides, check the destination directly, and apply the same trust questions you
                would use anywhere else: identity, clarity, update signals, policies, and source quality.
                A good profile should make verification easier by naming what to inspect next.
              </p>
            </div>
            <div className="rounded-xl border border-indigo-950/12 bg-indigo-50/70 p-6">
              <h2 className="text-base font-semibold text-slate-900">Profile reading checklist</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600">
                {profileChecklist.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {profilePrinciples.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-900/10 bg-white/70 p-5">
                <h2 className="text-sm font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-slate-900/10 bg-[#152032] p-6 text-[#faf8f5]">
            <h2 className="text-base font-semibold text-white">How to use profiles alongside guides</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              A website profile can help you orient quickly, but the guides explain how to evaluate what
              you find. For example, a profile may introduce a learning resource, while a guide helps you
              check update signals, source quality, privacy wording, or whether the site is useful enough
              to bookmark. That combination keeps the profile area informational instead of promotional.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              The profile page is also a place to practice safe website evaluation. Read the summary, scan
              the related guides, then decide what still needs checking on the original domain. A strong
              profile should make your next question clearer for future reference, not ask you to skip
              your own judgment.
            </p>
            <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-slate-300 sm:grid-cols-2">
              {profileUseCases.map((item) => (
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
