import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { GuideCard } from "@/components/GuideCard";
import { SectionHeader } from "@/components/SectionHeader";
import { guides } from "@/lib/guides";
import { absoluteUrl, siteName } from "@/lib/seo";

const guideHubNotes = [
  {
    title: "Use guides as checklists",
    body: "Each guide is written so a beginner can turn the advice into a short checklist: what to check first, what red flags to notice, and what questions to ask before relying on a page.",
  },
  {
    title: "Read for browsing habits",
    body: "The library focuses on repeatable online browsing tips, not one-off opinions. You can reuse the same habits when comparing websites, reading product information, saving bookmarks, or checking source quality.",
  },
  {
    title: "Treat examples as optional",
    body: "Some guides mention a related website profile when a concrete example helps. Those links are context for learning, not a requirement to take action on another site.",
  },
] as const;

const guideTopics = [
  "Beginner website safety checklist",
  "Website trust signals and red flags",
  "How to evaluate information online",
  "How to find useful websites",
  "Online browsing mistakes to avoid",
  "How to compare websites before trusting them",
] as const;

const readingSteps = [
  "Start with the page that matches your immediate question.",
  "Turn the headings into a quick checklist before you browse elsewhere.",
  "Notice the red flags and examples, then compare them with a real page.",
  "Use related guides when the question shifts from safety to research or organization.",
] as const;

const startHerePaths = [
  {
    need: "I want to check a website more safely",
    href: "/guides/how-to-compare-online-stores",
    label: "Start with website comparison",
  },
  {
    need: "I keep making quick browsing mistakes",
    href: "/guides/online-shopping-mistakes-to-avoid",
    label: "Review common mistakes",
  },
  {
    need: "I want better sources to save",
    href: "/guides/beginner-guide-finding-useful-websites",
    label: "Build a discovery routine",
  },
] as const;

export const metadata: Metadata = {
  title: "Guides for Online Research and Discovery",
  description:
    "Beginner-friendly DropTraffic guides about online research, website comparison, browsing mistakes, trust signals, useful links, and safer discovery habits—with dropshipping visibility context.",
  alternates: {
    canonical: absoluteUrl("/guides"),
  },
  openGraph: {
    type: "website",
    siteName,
    title: "DropTraffic Guides for Online Research and Discovery",
    description:
      "Beginner-friendly DropTraffic guides about online research, website comparison, browsing mistakes, trust signals, useful links, and safer discovery habits—with dropshipping visibility context.",
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
            eyebrow="Library"
            headingLevel="h1"
            title="Guides"
            description="Straightforward explainers—many link to neutral website profiles when a real destination helps illustrate the advice."
            actions={
              <Link
                href="/websites"
                className="hidden text-sm font-semibold text-amber-100/95 hover:text-white sm:inline sm:pb-1"
              >
                Browse profiles →
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
                How to use this library
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                Guides for safer, clearer online research
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
                DropTraffic guides are written for people who want practical help understanding websites,
                not dense technical manuals. The topics cover how to check if a website is safe, how
                to know if a website is trustworthy, how to avoid misleading pages, and how to keep
                useful online research organized.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
                Start with the guide closest to your question, then use the related reading links to
                move sideways. A guide about online browsing mistakes may lead naturally into a website
                trust checklist; a guide about useful websites may lead into bookmark habits or source
                evaluation.
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
            <h2 className="text-base font-semibold text-white">A simple way to read DropTraffic guides</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              These guides are most useful when you read them with a real question in mind. If you are
              checking whether a website is safe, focus on trust signals, contact details, policy clarity,
              and misleading website red flags. If you are trying to find useful websites, focus on search
              phrases, source quality, bookmarks, and how to evaluate information online.
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
            <h2 className="text-base font-semibold text-slate-900">Start here by reader need</h2>
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
