import Link from "next/link";
import { siteName } from "@/lib/seo";
import { Container } from "./Container";

const footerLinks = [
  { href: "/for-businesses", label: "List My Store" },
  { href: "/websites", label: "Store Placements" },
  { href: "/guides", label: "Traffic Pages" },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-slate-800 bg-[#101722] text-slate-300">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_20%_120%,rgba(45,212,191,0.09),transparent_55%),radial-gradient(ellipse_70%_50%_at_95%_-10%,rgba(251,191,36,0.06),transparent_45%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/25 to-transparent"
        aria-hidden
      />
      <Container className="relative py-12 sm:py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <p className="text-base font-semibold tracking-tight text-white">{siteName}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Store placements, content mentions, and direct referral links for dropshipping store
              owners who want more visitors.
            </p>
          </div>
          <div>
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Traffic links
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-200 transition-colors hover:text-amber-100">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-white/[0.07] pt-8 text-xs leading-relaxed text-slate-500">
          (c) {new Date().getFullYear()} {siteName}. Traffic visibility service. No promised sales or revenue outcomes.
        </p>
      </Container>
    </footer>
  );
}
