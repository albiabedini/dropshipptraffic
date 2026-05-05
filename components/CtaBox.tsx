import Link from "next/link";

export function CtaBox({
  title,
  description,
  href,
  buttonLabel,
  eyebrow,
  variant = "standalone",
}: {
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
  eyebrow?: string;
  variant?: "standalone" | "inset";
}) {
  const eyebrowText = eyebrow ?? "Traffic offer";
  if (variant === "inset") {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#faf8f5]/[0.97] p-8 shadow-[0_28px_70px_-48px_rgba(0,0,0,0.85)] ring-1 ring-amber-400/15 sm:p-10 lg:p-11">
        <div
          className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-teal-400/12 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-indigo-400/10 blur-3xl"
          aria-hidden
        />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-900">{eyebrowText}</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
            {description}
          </p>
        <Link
          href={href}
          className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[#152032] px-6 py-3 text-sm font-semibold text-[#faf8f5] shadow-[0_14px_36px_-20px_rgba(21,32,50,0.85)] transition-colors hover:bg-[#1c2a3d] sm:w-auto"
        >
            {buttonLabel}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-teal-900/14 bg-gradient-to-br from-teal-100/70 via-[#faf8f5] to-indigo-100/55 p-8 shadow-[0_22px_56px_-40px_rgba(13,148,136,0.45)] ring-1 ring-white/75 sm:p-10">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-teal-400/18 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-28 -left-20 h-52 w-52 rounded-full bg-indigo-400/12 blur-3xl"
        aria-hidden
      />
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-900">{eyebrowText}</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{title}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
          {description}
        </p>
      <Link
        href={href}
        className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[#152032] px-6 py-3 text-sm font-semibold text-[#faf8f5] shadow-[0_12px_28px_-18px_rgba(21,32,50,0.75)] transition-colors hover:bg-[#1c2a3d] sm:w-auto"
      >
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
}
