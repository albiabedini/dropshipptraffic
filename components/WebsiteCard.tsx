import Link from "next/link";
import type { WebsiteProfile } from "@/lib/websites";
import { CategoryPill } from "./CategoryPill";

export function WebsiteCard({ site }: { site: WebsiteProfile }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-indigo-950/12 bg-gradient-to-br from-[#ecebff] via-[#faf8f5] to-amber-50/55 p-6 shadow-[0_2px_8px_rgba(21,32,50,0.05),0_24px_52px_-38px_rgba(67,56,202,0.38)] ring-1 ring-white/75 backdrop-blur-[2px] transition-[box-shadow,transform,border-color] duration-200 hover:-translate-y-1 hover:border-indigo-900/22 hover:shadow-[0_28px_60px_-40px_rgba(67,56,202,0.48)]">
      <span
        className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/45 to-transparent"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-y-5 left-0 w-[3px] rounded-full bg-gradient-to-b from-indigo-300 via-indigo-600 to-violet-900 shadow-[0_0_12px_rgba(79,70,229,0.35)]"
        aria-hidden
      />
      <div className="pl-3.5">
        <div className="flex flex-wrap items-center gap-2">
          <CategoryPill variant="indigo" label={site.category} />
        </div>
        <h2 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-slate-900">
          <Link
            href={`/websites/${site.slug}`}
            className="underline-offset-[5px] decoration-slate-900/18 hover:underline hover:decoration-indigo-700/45"
          >
            {site.name}
          </Link>
        </h2>
        <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-slate-600">{site.description}</p>
        <Link
          href={`/websites/${site.slug}`}
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-indigo-950 hover:text-indigo-950/90"
        >
          View store feature
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
