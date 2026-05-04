import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { CategoryPill } from "@/components/CategoryPill";
import { getGuideBySlug, getGuideSlugs, guides } from "@/lib/guides";
import { absoluteUrl, siteName } from "@/lib/seo";
import { getWebsiteBySlug } from "@/lib/websites";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.meta.title,
    description: guide.meta.description,
    alternates: {
      canonical: absoluteUrl(`/guides/${guide.slug}`),
    },
    openGraph: {
      type: "article",
      siteName,
      title: guide.meta.title,
      description: guide.meta.description,
      url: absoluteUrl(`/guides/${guide.slug}`),
    },
  };
}

export default async function GuideArticlePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const relatedSite = guide.relatedWebsiteSlug
    ? getWebsiteBySlug(guide.relatedWebsiteSlug)
    : undefined;

  const relatedGuides = guides
    .filter((g) => g.slug !== guide.slug)
    .sort((a, b) => {
      const score = (g: (typeof guides)[number]) =>
        (g.category === guide.category ? 2 : 0) +
        (g.relatedWebsiteSlug &&
        guide.relatedWebsiteSlug &&
        g.relatedWebsiteSlug === guide.relatedWebsiteSlug
          ? 1
          : 0);
      return score(b) - score(a);
    })
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    articleSection: guide.category,
    mainEntityOfPage: absoluteUrl(`/guides/${guide.slug}`),
  };

  const faqJsonLd = guide.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: guide.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : undefined;

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      ) : null}
      <div className="relative overflow-hidden border-b border-slate-900/10 bg-[#152032] text-[#faf8f5]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_60%_at_40%_-25%,rgba(45,212,191,0.14),transparent_58%),radial-gradient(ellipse_50%_45%_at_95%_85%,rgba(251,191,36,0.05),transparent_52%)]"
          aria-hidden
        />
        <Container className="relative py-12 sm:py-14 lg:py-16">
          <div className="flex flex-wrap items-center gap-3">
            <CategoryPill variant="onDark" label={guide.category} />
            <span className="hidden h-1 w-1 rounded-full bg-white/35 sm:inline" aria-hidden />
            <span className="hidden text-xs font-medium uppercase tracking-[0.12em] text-slate-400 sm:inline">
              Guide
            </span>
          </div>
          <h1 className="mt-6 max-w-3xl text-[2rem] font-semibold leading-[1.14] tracking-tight text-white sm:text-[2.35rem] sm:leading-[1.1] lg:text-4xl">
            {guide.title}
          </h1>
          <p className="mt-7 max-w-3xl border-l-2 border-teal-400/55 pl-6 text-lg leading-relaxed text-slate-300 sm:text-xl sm:leading-relaxed">
            {guide.excerpt}
          </p>
        </Container>
      </div>

      <div className="relative bg-gradient-to-b from-[#ebe6df] via-[#f5f2ec] to-[#ebe6df] py-12 sm:py-16 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(15,118,110,0.06),transparent_55%)]"
          aria-hidden
        />
        <Container className="relative">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-slate-900/10 bg-[#faf8f5]/95 p-8 shadow-[0_2px_8px_rgba(21,32,50,0.05),0_28px_70px_-42px_rgba(21,32,50,0.28)] ring-1 ring-white/90 backdrop-blur-[2px] sm:p-10 lg:p-12">
              <div className="divide-y divide-slate-900/[0.07]">
                {guide.sections.map((section) => (
                  <section key={section.heading} className="py-10 first:pt-0">
                    <h2 className="flex flex-col gap-3 text-xl font-semibold tracking-tight text-slate-900 sm:text-[1.35rem] sm:leading-snug">
                      <span
                        className="h-1 w-11 rounded-full bg-gradient-to-r from-teal-500 via-teal-600 to-amber-500/90"
                        aria-hidden
                      />
                      {section.heading}
                    </h2>
                    <p className="mt-6 max-w-prose text-[1.0625rem] leading-[1.78] text-slate-600">
                      {section.body}
                    </p>
                  </section>
                ))}
              </div>
            </div>

            {guide.faq?.length ? (
              <section className="mt-10 rounded-2xl border border-slate-900/10 bg-[#faf8f5]/95 p-8 shadow-[0_2px_8px_rgba(21,32,50,0.05),0_24px_62px_-42px_rgba(21,32,50,0.24)] ring-1 ring-white/90 backdrop-blur-[2px] sm:p-10">
                <h2 className="flex flex-col gap-3 text-xl font-semibold tracking-tight text-slate-900 sm:text-[1.35rem] sm:leading-snug">
                  <span
                    className="h-1 w-11 rounded-full bg-gradient-to-r from-teal-500 via-teal-600 to-amber-500/90"
                    aria-hidden
                  />
                  Common questions
                </h2>
                <div className="mt-7 divide-y divide-slate-900/[0.07]">
                  {guide.faq.map((item) => (
                    <div key={item.question} className="py-6 first:pt-0 last:pb-0">
                      <h3 className="text-base font-semibold leading-snug text-slate-900">
                        {item.question}
                      </h3>
                      <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate-600">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {relatedSite && (
              <aside className="relative mt-10 overflow-hidden rounded-2xl border border-dashed border-slate-900/18 bg-gradient-to-br from-[#f5f2ec] via-[#faf8f5] to-teal-50/40 p-7 shadow-[0_18px_48px_-38px_rgba(15,118,110,0.25)] sm:p-9">
                <div
                  className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-teal-400/10"
                  aria-hidden
                />
                <div className="relative flex flex-wrap items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-amber-500/90 shadow-[0_0_0_4px_rgba(251,191,36,0.2)]" />
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-teal-900">
                    Related profile on {siteName}
                  </p>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-slate-600">
                  Below is one featured destination that illustrates ideas from this guide—not a requirement to take action,
                  just a concrete example if you want to compare notes before visiting their site.
                </p>
                <p className="relative mt-4 text-lg font-semibold text-slate-900">{relatedSite.name}</p>
                <p className="relative mt-3 text-[0.9375rem] leading-relaxed text-slate-600">
                  {relatedSite.featuredText}
                </p>
                <div className="relative mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/websites/${relatedSite.slug}`}
                    className="inline-flex rounded-xl bg-[#152032] px-5 py-2.5 text-sm font-semibold text-[#faf8f5] hover:bg-[#1c2a3d]"
                  >
                    Open the {siteName} profile
                  </Link>
                  <a
                    href={relatedSite.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-xl border border-slate-900/14 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-stone-50"
                  >
                    Continue on their website
                  </a>
                </div>
              </aside>
            )}

            <div className="mt-12 overflow-hidden rounded-2xl border border-slate-900/10 bg-[#152032] p-8 text-[#faf8f5] shadow-[0_22px_56px_-38px_rgba(21,32,50,0.55)] sm:p-10">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h2 className="text-lg font-semibold text-white">Continue reading</h2>
                <Link href="/guides" className="text-xs font-semibold uppercase tracking-[0.12em] text-amber-200/90 hover:text-amber-100">
                  All guides →
                </Link>
              </div>
              <ul className="mt-6 flex flex-col gap-4 border-t border-white/[0.09] pt-6">
                {relatedGuides.map((g) => (
                  <li key={g.slug}>
                    <Link
                      href={`/guides/${g.slug}`}
                      className="group flex items-start gap-3 text-[0.9375rem] font-medium text-slate-200 hover:text-white"
                    >
                      <span className="mt-2 h-1 w-6 shrink-0 rounded-full bg-teal-400/70 transition-[width] group-hover:w-8" />
                      {g.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/guides"
                className="mt-8 inline-flex text-sm font-semibold text-slate-300 hover:text-white"
              >
                ← Back to guides hub
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </article>
  );
}
