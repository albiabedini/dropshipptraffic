"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteName } from "@/lib/seo";
import { Container } from "./Container";

const nav = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Guides" },
  { href: "/websites", label: "Websites" },
  { href: "/for-businesses", label: "For Businesses" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-900/10 bg-[#faf8f5]/90 shadow-[0_1px_0_rgba(255,252,248,0.85)_inset] backdrop-blur-xl backdrop-saturate-150">
      <Container className="relative flex min-h-16 items-center justify-between gap-4 py-2">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="group flex min-h-11 items-center gap-2.5 rounded-lg pr-2"
        >
          <span
            className="relative flex h-9 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-700 via-teal-600 to-indigo-700 px-0.5 shadow-[0_6px_18px_-8px_rgba(15,118,110,0.65)]"
            aria-hidden
          >
            <span className="text-[0.5rem] font-bold tracking-tighter text-white/95">DST</span>
          </span>
          <span className="text-[1.07rem] font-semibold tracking-tight text-slate-900">{siteName}</span>
        </Link>

        <nav
          className="hidden items-center justify-end gap-1 text-[0.8125rem] font-medium text-slate-700 md:flex"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-2.5 transition-colors ${
                  active
                    ? "bg-slate-900/[0.07] text-slate-950 ring-1 ring-slate-900/10"
                    : "hover:bg-slate-900/[0.06] hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-900/10 bg-white/70 text-slate-900 shadow-sm transition-colors hover:bg-white md:hidden"
        >
          <span className="sr-only">{isOpen ? "Close navigation" : "Open navigation"}</span>
          <span className="flex h-5 w-5 flex-col justify-center gap-1.5" aria-hidden>
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition-transform ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition-transform ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <div
          id="mobile-primary-navigation"
          aria-hidden={!isOpen}
          className={`absolute left-4 right-4 top-[calc(100%+0.45rem)] overflow-hidden rounded-2xl border border-slate-900/10 bg-[#faf8f5]/98 shadow-[0_24px_60px_-38px_rgba(21,32,50,0.55)] ring-1 ring-white/80 backdrop-blur-xl transition-[opacity,transform] md:hidden ${
            isOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <nav className="p-2" aria-label="Primary mobile">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  tabIndex={isOpen ? undefined : -1}
                  onClick={() => setIsOpen(false)}
                  className={`flex min-h-12 items-center justify-between rounded-xl px-4 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-[#152032] text-[#faf8f5] shadow-[0_12px_28px_-22px_rgba(21,32,50,0.8)]"
                      : "text-slate-700 hover:bg-slate-900/[0.06] hover:text-slate-950"
                  }`}
                >
                  {item.label}
                  <span className={active ? "text-teal-200" : "text-slate-400"} aria-hidden>
                    →
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
}
