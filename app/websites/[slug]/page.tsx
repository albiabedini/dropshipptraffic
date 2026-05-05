import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { CategoryPill } from "@/components/CategoryPill";
import { getGuideBySlug } from "@/lib/guides";
import { absoluteUrl, siteName } from "@/lib/seo";
import { getWebsiteBySlug, getWebsiteSlugs } from "@/lib/websites";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getWebsiteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const site = getWebsiteBySlug(slug);
  if (!site) return {};
  return {
    title: site.meta.title,
    description: site.meta.description,
    alternates: {
      canonical: absoluteUrl(`/websites/${site.slug}`),
    },
    openGraph: {
      type: "website",
      siteName,
      title: site.meta.title,
      description: site.meta.description,
      url: absoluteUrl(`/websites/${site.slug}`),
    },
  };
}

export default async function WebsiteProfilePage({ params }: Props) {
  const { slug } = await params;
  const site = getWebsiteBySlug(slug);
  if (!site) notFound();

  const relatedGuides = site.relatedGuideSlugs
    .map((s) => getGuideBySlug(s))
    .filter((g): g is NonNullable<typeof g> => g !== undefined);

  return (
    <article>
      <div className="relative overflow-hidden border-b border-slate-900/10 bg-gradient-to-br from-[#1a1f4b] via-[#24316b] to-[#152032] text-[#faf8f5]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_65%_-15%,rgba(165,180,252,0.22),transparent_56%),radial-gradient(ellipse_45%_40%_at_15%_95%,rgba(45,212,191,0.08),transparent_52%)]"
          aria-hidden
        />
        <Container className="relative py-12 sm:py-14 lg:py-16">
          <div className="flex flex-wrap items-center gap-3">
            <CategoryPill variant="onDark" label={site.category} />
            <span className="hidden h-1 w-1 rounded-full bg-white/35 sm:inline" aria-hidden />
            <span className="hidden text-xs font-medium uppercase tracking-[0.12em] text-indigo-200/85 sm:inline">
              Store placement
            </span>
          </div>
          <h1 className="mt-6 max-w-3xl text-[2rem] font-semibold leading-[1.14] tracking-tight text-white sm:text-[2.35rem] sm:leading-[1.1] lg:text-4xl">
            {site.name}
          </h1>
          <p className="mt-7 max-w-3xl border-l-2 border-indigo-300/55 pl-6 text-lg leading-relaxed text-slate-200 sm:text-xl sm:leading-relaxed">
            {site.description}
          </p>
        </Container>
      </div>

      <div className="relative bg-gradient-to-b from-[#ebe6df] via-[#f4f2ff]/80 to-[#ebe6df] py-12 sm:py-16 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_50%_0%,rgba(79,70,229,0.06),transparent_55%)]"
          aria-hidden
        />
        <Container className="relative">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_min(340px,100%)] lg:items-start lg:gap-12">
            <div className="min-w-0 space-y-10">
              <section className="rounded-2xl border border-indigo-950/12 bg-[#faf8f5]/95 p-8 shadow-[0_2px_8px_rgba(21,32,50,0.05),0_26px_68px_-42px_rgba(67,56,202,0.26)] ring-1 ring-white/90 backdrop-blur-[2px] sm:p-10">
                <h2 className="flex flex-col gap-3 text-xl font-semibold tracking-tight text-slate-900">
                  <span
                    className="h-1 w-11 rounded-full bg-gradient-to-r from-indigo-500 via-violet-600 to-amber-500/85"
                    aria-hidden
                  />
                  Store visibility note
                </h2>
                <p className="mt-6 max-w-prose text-[1.0625rem] leading-[1.78] text-slate-600">{site.featuredText}</p>
              </section>

              <section className="rounded-2xl border border-indigo-950/12 bg-[#faf8f5]/95 p-8 shadow-[0_2px_8px_rgba(21,32,50,0.05),0_26px_68px_-42px_rgba(67,56,202,0.22)] ring-1 ring-white/90 backdrop-blur-[2px] sm:p-10">
                <div className="divide-y divide-slate-900/[0.07]">
                  {site.sections.map((section) => (
                    <div key={section.heading} className="py-8 first:pt-0 last:pb-0">
                      <h2 className="flex flex-col gap-3 text-xl font-semibold tracking-tight text-slate-900">
                        <span
                          className="h-1 w-11 rounded-full bg-gradient-to-r from-indigo-500 via-violet-600 to-amber-500/85"
                          aria-hidden
                        />
                        {section.heading}
                      </h2>
                      <p className="mt-5 max-w-prose text-[1.0625rem] leading-[1.78] text-slate-600">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-slate-900/10 bg-gradient-to-br from-[#f5f2ec] via-[#faf8f5] to-indigo-50/60 p-8 shadow-[0_18px_48px_-38px_rgba(67,56,202,0.25)] ring-1 ring-white/80 sm:p-10">
                <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                  Questions to ask before sending traffic
                </h2>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600">
                  {site.verificationQuestions.map((question) => (
                    <li key={question} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-700" />
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="overflow-hidden rounded-2xl border border-slate-900/10 bg-[#152032] p-8 text-[#faf8f5] shadow-[0_22px_56px_-38px_rgba(21,32,50,0.55)] sm:p-10">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold text-white">Related traffic pages</h2>
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-slate-400">
                      {siteName} pages that help store owners understand referral traffic, product views, and conversion expectations.
                    </p>
                  </div>
                  <Link href="/guides" className="text-xs font-semibold uppercase tracking-[0.12em] text-indigo-200/90 hover:text-indigo-100">
                    Traffic pages →
                  </Link>
                </div>
                {relatedGuides.length === 0 ? (
                  <p className="mt-5 border-t border-white/[0.09] pt-5 text-sm text-slate-400">
                    No linked traffic pages yet.
                  </p>
                ) : (
                  <ul className="mt-5 flex flex-col gap-4 border-t border-white/[0.09] pt-6">
                    {relatedGuides.map((g) => (
                      <li key={g.slug}>
                        <Link
                          href={`/guides/${g.slug}`}
                          className="group flex items-start gap-3 text-[0.9375rem] font-medium text-slate-200 hover:text-white"
                        >
                          <span className="mt-2 h-1 w-6 shrink-0 rounded-full bg-indigo-400/75 transition-[width] group-hover:w-8" />
                          {g.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  href="/websites"
                  className="mt-8 inline-flex text-sm font-semibold text-slate-300 hover:text-white"
                >
                  ← All store placements
                </Link>
              </section>
            </div>

            <aside className="lg:sticky lg:top-[calc(3.65rem+1rem)]">
              <div className="relative overflow-hidden rounded-2xl border border-indigo-950/15 bg-gradient-to-b from-[#faf8f5] via-[#ecebff] to-indigo-100/60 p-7 shadow-[0_26px_64px_-42px_rgba(67,56,202,0.45)] ring-1 ring-white/90 sm:p-8">
                <div
                  className="pointer-events-none absolute -right-12 top-0 h-36 w-36 rounded-full bg-indigo-400/15 blur-2xl"
                  aria-hidden
                />
                <p className="relative text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-indigo-900">
                  Send visitors to the store
                </p>
                <p className="relative mt-4 text-sm leading-relaxed text-slate-600">
                  Use the store website for current products, prices, policies, and checkout. This {siteName} placement points visitors there.
                </p>
                <a
                  href={site.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[#24316b] px-6 py-3.5 text-center text-sm font-semibold text-[#faf8f5] shadow-[0_16px_40px_-24px_rgba(36,49,107,0.75)] transition-colors hover:bg-[#2d3d7a]"
                >
                  Open {site.name}
                </a>
                <p className="relative mt-4 border-t border-slate-900/10 pt-4 text-xs leading-relaxed text-slate-500">
                  Opens in a new tab. {siteName} sends referral visitors; the store handles products, checkout, support, and sales outcomes.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </article>
  );
}
