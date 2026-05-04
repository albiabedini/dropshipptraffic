import Link from "next/link";
import { Container } from "./Container";

const nav = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Guides" },
  { href: "/websites", label: "Websites" },
  { href: "/for-businesses", label: "For Businesses" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          Dropp<span className="text-slate-400">.</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-1 gap-y-2 text-sm font-medium text-slate-600">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
