import Link from "next/link";
import type { Guide } from "@/lib/guides";
import { CategoryPill } from "./CategoryPill";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex flex-wrap items-center gap-2">
        <CategoryPill label={guide.category} />
      </div>
      <h2 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">
        <Link
          href={`/guides/${guide.slug}`}
          className="underline-offset-4 hover:underline group-hover:text-slate-800"
        >
          {guide.title}
        </Link>
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{guide.excerpt}</p>
      <Link
        href={`/guides/${guide.slug}`}
        className="mt-5 inline-flex text-sm font-medium text-teal-700 hover:text-teal-800"
      >
        Read guide →
      </Link>
    </article>
  );
}
