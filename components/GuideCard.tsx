import Link from "next/link";
import type { Guide } from "@/lib/guides";
import { CategoryPill } from "./CategoryPill";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-900/11 bg-gradient-to-br from-[#faf8f5] via-teal-50/45 to-stone-200/70 p-6 shadow-[0_2px_8px_rgba(21,32,50,0.05),0_22px_48px_-36px_rgba(15,118,110,0.35)] ring-1 ring-white/70 backdrop-blur-[2px] transition-[box-shadow,transform,border-color] duration-200 hover:-translate-y-1 hover:border-teal-900/18 hover:shadow-[0_28px_56px_-38px_rgba(15,118,110,0.45)]">
      <span
        className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/55 to-transparent opacity-90"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-y-5 left-0 w-[3px] rounded-full bg-gradient-to-b from-teal-300 via-teal-600 to-teal-900 shadow-[0_0_12px_rgba(13,148,136,0.35)]"
        aria-hidden
      />
      <div className="pl-3.5">
        <div className="flex flex-wrap items-center gap-2">
          <CategoryPill variant="teal" label={guide.category} />
        </div>
        <h2 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-slate-900">
          <Link
            href={`/guides/${guide.slug}`}
            className="underline-offset-[5px] decoration-slate-900/18 hover:underline hover:decoration-teal-700/45"
          >
            {guide.title}
          </Link>
        </h2>
        <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-slate-600">{guide.excerpt}</p>
        <Link
          href={`/guides/${guide.slug}`}
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal-900 hover:text-teal-950"
        >
          Read guide
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
