import Link from "next/link";
import { Container } from "@/components/Container";
import { CtaBox } from "@/components/CtaBox";
import { GuideCard } from "@/components/GuideCard";
import { WebsiteCard } from "@/components/WebsiteCard";
import { CategoryPill } from "@/components/CategoryPill";
import { getGuideCategories, getLatestGuides } from "@/lib/guides";
import { websites } from "@/lib/websites";

export default function HomePage() {
  const categories = getGuideCategories();
  const latestGuides = getLatestGuides(5);

  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-16 sm:py-24">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-700">
            Discovery platform
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Guides and website profiles for smarter browsing.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Dropp publishes practical explainers and short profiles of useful sites. Our goal is to
            help you compare options, avoid common pitfalls, and find destinations worth returning
            to—not to sell products here.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/guides"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Browse guides
            </Link>
            <Link
              href="/websites"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Featured websites
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Popular guide topics
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Categories we write about today—each guide stays practical and reader-first.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <CategoryPill key={c} label={c} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-14 sm:py-16">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Latest guides</h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                Fresh explainers on shopping habits, comparisons, and finding dependable sites.
              </p>
            </div>
            <Link href="/guides" className="text-sm font-semibold text-teal-700 hover:text-teal-800">
              View all guides →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {latestGuides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Featured websites
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                Short profiles with context on why each destination stands out for readers.
              </p>
            </div>
            <Link href="/websites" className="text-sm font-semibold text-teal-700 hover:text-teal-800">
              All profiles →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {websites.map((w) => (
              <WebsiteCard key={w.slug} site={w} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white py-14 sm:py-16">
        <Container>
          <CtaBox
            title="Want your website featured?"
            description="We partner with businesses to publish a concise website profile plus several informational guides that naturally link to your site—focused on visibility and referral traffic."
            href="/for-businesses"
            buttonLabel="Learn about placements"
          />
        </Container>
      </section>
    </>
  );
}
