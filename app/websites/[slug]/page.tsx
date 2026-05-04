import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { CategoryPill } from "@/components/CategoryPill";
import { getGuideBySlug } from "@/lib/guides";
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
    openGraph: {
      title: site.meta.title,
      description: site.meta.description,
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
      <div className="border-b border-slate-200 bg-white">
        <Container className="py-12 sm:py-14">
          <CategoryPill label={site.category} />
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {site.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">{site.description}</p>
        </Container>
      </div>

      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">Why we featured it</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{site.featuredText}</p>
          </section>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-medium text-slate-600">Visit the destination</p>
            <a
              href={site.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800 sm:w-auto"
            >
              Go to {site.name}
            </a>
            <p className="mt-3 text-xs text-slate-500">
              Opens in a new tab. Dropp does not process purchases on your behalf.
            </p>
          </div>

          <section className="border-t border-slate-200 pt-10">
            <h2 className="text-lg font-semibold text-slate-900">Related guides</h2>
            {relatedGuides.length === 0 ? (
              <p className="mt-3 text-sm text-slate-600">No linked guides yet.</p>
            ) : (
              <ul className="mt-4 flex flex-col gap-3">
                {relatedGuides.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/guides/${g.slug}`} className="text-teal-700 hover:text-teal-800">
                      {g.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <Link
              href="/websites"
              className="mt-8 inline-flex text-sm font-semibold text-slate-700 hover:text-slate-900"
            >
              ← All featured websites
            </Link>
          </section>
        </div>
      </Container>
    </article>
  );
}
