type Variant = "default" | "warm" | "teal" | "indigo" | "onDark";

const styles: Record<Variant, string> = {
  default:
    "border-slate-900/10 bg-slate-900/[0.04] text-slate-700",
  warm:
    "border-amber-900/12 bg-amber-950/[0.06] text-amber-950",
  teal:
    "border-teal-900/15 bg-teal-900/[0.07] text-teal-900",
  indigo:
    "border-indigo-900/15 bg-indigo-950/[0.07] text-indigo-950",
  onDark:
    "border-white/15 bg-white/10 text-stone-100",
};

export function CategoryPill({ label, variant = "default" }: { label: string; variant?: Variant }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.06em] ${styles[variant]}`}
    >
      {label}
    </span>
  );
}
