import Link from "next/link";
import { Container } from "./Container";

const footerLinks = [
  { href: "/guides", label: "Guides" },
  { href: "/websites", label: "Websites" },
  { href: "/for-businesses", label: "For Businesses" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <Container className="py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <p className="text-base font-semibold text-slate-900">Dropp</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Practical guides and featured websites for people who prefer clarity over hype.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Explore
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-700 hover:text-slate-900">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} Dropp. Informational content only.
        </p>
      </Container>
    </footer>
  );
}
