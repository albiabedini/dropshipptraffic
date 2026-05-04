import Link from "next/link";
import type { WebsiteProfile } from "@/lib/websites";
import { CategoryPill } from "./CategoryPill";

export function WebsiteCard({ site }: { site: WebsiteProfile }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex flex-wrap items-center gap-2">
        <CategoryPill label={site.category} />
      </div>
      <h2 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">
        <Link
          href={`/websites/${site.slug}`}
          className="underline-offset-4 hover:underline group-hover:text-slate-800"
        >
          {site.name}
        </Link>
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{site.description}</p>
      <Link
        href={`/websites/${site.slug}`}
        className="mt-5 inline-flex text-sm font-medium text-teal-700 hover:text-teal-800"
      >
        View profile →
      </Link>
    </article>
  );
}
