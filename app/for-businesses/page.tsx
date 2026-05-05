import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { absoluteUrl, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  title: "For Businesses",
  description:
    "Plain-language explanation of how DropshippTraffic publishes informational website profiles and discovery guides for dropshipping-related visibility—without selling traffic or promising rankings, visitors, or conversions.",
  alternates: {
    canonical: absoluteUrl("/for-businesses"),
  },
  openGraph: {
    type: "website",
    siteName,
    title: `For Businesses | ${siteName}`,
    description:
      "How DropshippTraffic publishes informational website profiles and discovery guides for dropshipping-related reader education and contextual visibility—not ecommerce or agency services.",
    url: absoluteUrl("/for-businesses"),
  },
};

const clarityPoints = [
  {
    title: "Written for readers first",
    body: "Guides answer everyday questions with clear sections; profiles summarize what your site explains or provides without turning DropshippTraffic into promotional copy.",
  },
  {
    title: "Outbound when context helps",
    body: "Readers can follow links to your domain for full source material. DropshippTraffic stays informational and keeps each page educational.",
  },
  {
    title: "Straightforward structure",
    body: "Pages use predictable headings so someone evaluating DropshippTraffic quickly understands what exists and why.",
  },
];

const businessInputs = [
  "The website URL and the public pages readers should use as primary source material.",
  "A plain explanation of what the organization publishes, provides, or helps people understand.",
  "Any topics that would make useful informational guides for beginners.",
  "Policy, support, about, or reference pages that help readers verify context.",
  "Clear boundaries around claims that should not be overstated.",
] as const;

const siteDoesNotDo = [
  "No guaranteed rankings, traffic volume, visitors, leads, conversions, sales, or specific reader actions.",
  "No account system, dashboard, fulfillment workflow, or replacement for the business website.",
  "No aggressive promotional pages disguised as informational guides.",
  "No unsupported claims, fake urgency, or exaggerated performance language.",
  "No new route structure beyond the profile and informational guide format.",
] as const;

const goodFitSignals = [
  "The website has public pages that explain the organization clearly.",
  "There are beginner-friendly topics that can stand alone as useful guides.",
  "The organization is comfortable with neutral wording and realistic expectations.",
  "Outbound links can be framed as optional source material, not pressure.",
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
          eyebrow="Overview"
          eyebrowTone="teal"
          headingLevel="h1"
          title="If you were contacted—or directed here from elsewhere"
          description="Most organizations reach this page after an introduction outside DropshippTraffic. DropshippTraffic publishes discovery guides and neutral website profiles for dropshipping-related informational visibility—readers find context here, then choose whether to keep researching on featured destinations. DropshippTraffic does not sell traffic and does not guarantee rankings, impressions, audience volume, or any specific reader action."
        />

        <div className="relative mt-12 overflow-hidden rounded-2xl border border-slate-900/10 bg-[#152032] p-8 text-[#faf8f5] shadow-[0_28px_72px_-44px_rgba(21,32,50,0.65)] sm:p-10 lg:p-11">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_90%_-10%,rgba(129,140,248,0.15),transparent_55%),radial-gradient(ellipse_50%_45%_at_10%_110%,rgba(45,212,191,0.1),transparent_52%)]"
            aria-hidden
          />
          <div className="relative max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200/95">
              Typical editorial footprint
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Three to five DropshippTraffic URLs per featured destination
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-[0.9375rem]">
              Collaborations usually publish{" "}
              <strong className="font-semibold text-white">one featured website profile</strong> and{" "}
              <strong className="font-semibold text-white">two to four informational guide pages</strong>.
              Guides include contextual mentions where helpful and{" "}
              <strong className="font-semibold text-white">contextual outbound links</strong> that send readers to your website when they want the full source material.
            </p>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-[0.9375rem]">
              The intent is straightforward{" "}
              <strong className="font-semibold text-white">visibility and discovery context</strong>—indexed pages readers may find useful, plus outbound paths when alignment makes sense. Actual audience volume depends on topics, timing, and how readers behave; treat outcomes as uncertain, not guaranteed.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {clarityPoints.map((item, i) => (
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
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              What businesses should provide
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              DropshippTraffic works best when the source material is specific, readable, and useful to a
              general reader. The strongest fit is not a hard pitch; it is a website with enough
              public information to support neutral summaries and practical guide topics.
            </p>
            <ul className="mt-7 space-y-4 text-sm leading-relaxed text-slate-600">
              {businessInputs.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-indigo-950/12 bg-gradient-to-br from-[#ecebff] via-[#faf8f5] to-amber-50/50 p-8 shadow-[0_22px_56px_-40px_rgba(67,56,202,0.35)] ring-1 ring-white/80 sm:p-10">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              What DropshippTraffic does not promise
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              This page is mainly for organizations directed here from outreach or another platform.
              It explains the editorial format before any conversation goes further. DropshippTraffic can publish
              public informational pages and optional outbound links for readers who want primary sources, but it cannot promise how readers,
              search engines, or external platforms will respond.
            </p>
            <ul className="mt-7 space-y-4 text-sm leading-relaxed text-slate-600">
              {siteDoesNotDo.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-2xl border border-slate-900/10 bg-[#faf8f5]/95 p-8 shadow-[0_2px_8px_rgba(21,32,50,0.04),0_24px_62px_-42px_rgba(21,32,50,0.2)] ring-1 ring-white/90 backdrop-blur-[2px] sm:p-10">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">What is typically included</h2>
            <ul className="mt-8 space-y-6 text-sm leading-relaxed text-slate-600">
              <li className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-900/[0.1] text-xs font-bold text-teal-900 ring-1 ring-teal-900/15">
                  1
                </span>
                <span>
                  <span className="font-semibold text-slate-900">One featured website profile</span> — A neutral summary of category, positioning, and what visitors can do on your domain—without overstating outcomes.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-900/[0.1] text-xs font-bold text-teal-900 ring-1 ring-teal-900/15">
                  2
                </span>
                <span>
                  <span className="font-semibold text-slate-900">Two to four informational guides</span> — Topics tied to genuine reader questions; mentions or sidebar links appear only when they help someone apply the advice.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-900/[0.1] text-xs font-bold text-teal-900 ring-1 ring-teal-900/15">
                  3
                </span>
                <span>
                  <span className="font-semibold text-slate-900">Contextual links to your website</span> — Buttons or inline links so readers can continue researching on your pages when the extra context is useful.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-900/[0.1] text-xs font-bold text-teal-900 ring-1 ring-teal-900/15">
                  4
                </span>
                <span>
                  <span className="font-semibold text-slate-900">Visibility and online presence</span> — Public DropshippTraffic URLs someone can open while evaluating your organization alongside everything else they already trust or question.
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-teal-900/12 bg-teal-50/70 p-8 shadow-[0_18px_48px_-38px_rgba(15,118,110,0.25)] ring-1 ring-white/80 sm:p-10">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">What makes a good fit</h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                A good fit is a website that can be explained in plain language and connected to useful
                informational topics. The strongest guide ideas answer beginner questions such as how to
                evaluate websites, how to understand a category, what trust signals to check, or what
                mistakes readers should avoid while researching.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                If the only available angle is a promotional claim, it is probably not a strong DropshippTraffic fit.
                If the angle can become a helpful checklist, explainer, mistake guide, or trust-signal
                overview, it has a much better chance of feeling natural here.
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
                {goodFitSignals.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-indigo-950/12 bg-gradient-to-br from-[#ecebff] via-[#faf8f5] to-amber-50/50 p-8 shadow-[0_22px_56px_-40px_rgba(67,56,202,0.35)] ring-1 ring-white/80 sm:p-10">
              <div
                className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-amber-300/15 blur-3xl"
                aria-hidden
              />
              <h2 className="relative text-xl font-semibold tracking-tight text-slate-900">Who this is meant for</h2>
              <p className="relative mt-5 text-sm leading-relaxed text-slate-600">
                Teams that already publish useful information on their own sites and want readable reference pages here—not aggressive promotions staged as editorial content.
              </p>
              <p className="relative mt-4 text-sm leading-relaxed text-slate-600">
                Persuasive selling stays where you control it; DropshippTraffic focuses on concise explanations readers can skim quickly when vetting a destination.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-900/10 bg-[#152032] p-8 text-[#faf8f5] shadow-[0_22px_56px_-38px_rgba(21,32,50,0.55)] sm:p-10">
              <p className="text-sm font-semibold text-white">Review examples</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Explore live guides and profiles to judge tone and usefulness for yourself. Continue any conversation through the channel that directed you here—this page simply documents how DropshippTraffic structures informational assets.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/guides"
                  className="inline-flex rounded-xl bg-teal-400 px-5 py-2.5 text-sm font-semibold text-teal-950 hover:bg-teal-300"
                >
                  Browse guides
                </Link>
                <Link
                  href="/websites"
                  className="inline-flex rounded-xl border border-white/18 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-[#faf8f5] hover:bg-white/[0.1]"
                >
                  Browse profiles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
