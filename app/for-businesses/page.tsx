import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "For businesses",
  description:
    "Partner with Dropp for a website profile and informational guides that drive visibility and referral traffic.",
};

export default function ForBusinessesPage() {
  return (
    <div className="border-b border-slate-200 bg-white">
      <Container className="py-12 sm:py-16">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-700">Partnerships</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Featured placements for teams who value editorial trust.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          Dropp is an informational discovery site—not a checkout destination. We publish guides and
          short website profiles so readers can learn first and click through to your properties when
          they are ready.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-xl font-semibold text-slate-900">What a typical package includes</h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600">
              <li>
                <span className="font-semibold text-slate-900">One website profile</span> — Name,
                category, positioning, and a concise explanation of what visitors should expect.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Two to four guide articles</span> —
                Topics that genuinely help readers, with natural calls-to-action toward your site.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Referral-focused CTAs</span> — Buttons
                and links that send motivated readers directly to your pages—not ours.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Visibility & presence</span> — Indexed
                pages that reinforce legitimacy and surface during informational searches.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Optional analytics later</span> — Basic
                click summaries can be layered in once placements are live—no storefront required.
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-teal-200 bg-teal-50/60 p-8">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Who this fits</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Brands, publishers, and operators who already convert on their own domains and want
                thoughtful editorial mentions rather than loud promotions.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                We keep pages factual and reader-first. Sales messaging stays on your site where it
                belongs.
              </p>
            </div>
            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-900">Next step</p>
              <p className="mt-2 text-sm text-slate-600">
                Browse existing guides and profiles to see tone and layout, then reach out through your
                preferred channel with the site you would like featured.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/guides"
                  className="inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Review guides
                </Link>
                <Link
                  href="/websites"
                  className="inline-flex rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  See profiles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
