import type { ReactNode } from "react";

type Tone = "teal" | "indigo" | "amber";

const toneEyebrow: Record<Tone, string> = {
  teal: "text-teal-700",
  indigo: "text-indigo-700",
  amber: "text-amber-800",
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  actions,
  className = "",
  inverse = false,
  eyebrowTone: tone = "teal",
  headingLevel = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
  inverse?: boolean;
  eyebrowTone?: Tone;
  headingLevel?: "h1" | "h2";
}) {
  const eb = inverse ? "text-amber-200/95" : toneEyebrow[tone];
  const ti = inverse ? "text-white" : "text-slate-900";
  const de = inverse ? "text-slate-300" : "text-slate-600";
  const TitleTag = headingLevel;

  return (
    <div
      className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${className}`}
    >
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${eb}`}>{eyebrow}</p>
        ) : null}
        <TitleTag className={`mt-1 text-2xl font-semibold tracking-tight ${ti} sm:text-[1.65rem] sm:leading-snug`}>
          {title}
        </TitleTag>
        {description ? (
          <p className={`mt-2 text-sm leading-relaxed sm:text-[0.9375rem] ${de}`}>{description}</p>
        ) : null}
      </div>
      {actions ? <div className="shrink-0">{actions}</div> : null}
    </div>
  );
}
