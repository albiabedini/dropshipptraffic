import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { CategoryPill } from "@/components/CategoryPill";
import { getGuideBySlug, getGuideSlugs, guides } from "@/lib/guides";
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
    openGraph: {
      title: guide.meta.title,
      description: guide.meta.description,
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

  const relatedGuides = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <article>
      <div className="border-b border-slate-200 bg-white">
        <Container className="py-12 sm:py-14">
          <CategoryPill label={guide.category} />
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {guide.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">{guide.excerpt}</p>
        </Container>
      </div>

      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-12">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                  {section.heading}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">{section.body}</p>
              </section>
            ))}
          </div>

          {relatedSite && (
            <aside className="mt-14 rounded-2xl border border-teal-200 bg-teal-50/80 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">
                Featured website
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{relatedSite.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{relatedSite.featuredText}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/websites/${relatedSite.slug}`}
                  className="inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  View profile
                </Link>
                <a
                  href={relatedSite.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  Visit website
                </a>
              </div>
            </aside>
          )}

          <div className="mt-14 border-t border-slate-200 pt-10">
            <h2 className="text-lg font-semibold text-slate-900">More guides</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {relatedGuides.map((g) => (
                <li key={g.slug}>
                  <Link href={`/guides/${g.slug}`} className="text-teal-700 hover:text-teal-800">
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/guides"
              className="mt-6 inline-flex text-sm font-semibold text-slate-700 hover:text-slate-900"
            >
              ← Back to all guides
            </Link>
          </div>
        </div>
      </Container>
    </article>
  );
}
