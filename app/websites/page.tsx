import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { WebsiteCard } from "@/components/WebsiteCard";
import { websites } from "@/lib/websites";

export const metadata: Metadata = {
  title: "Featured websites",
  description:
    "Explore curated website profiles: context on what each destination offers and why readers trust them.",
};

export default function WebsitesPage() {
  return (
    <Container className="py-12 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Featured websites
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
        Independent profiles of destinations we believe deserve attention. Each summary explains who
        the site serves and how it approaches quality or transparency.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {websites.map((w) => (
          <WebsiteCard key={w.slug} site={w} />
        ))}
      </div>
    </Container>
  );
}
