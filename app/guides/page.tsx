import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { GuideCard } from "@/components/GuideCard";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Browse practical guides on online shopping, comparing stores, and discovering trustworthy websites.",
};

export default function GuidesPage() {
  return (
    <Container className="py-12 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Guides</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
        Straightforward articles that help you shop with intent, evaluate retailers, and curate a
        useful list of websites.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <GuideCard key={g.slug} guide={g} />
        ))}
      </div>
    </Container>
  );
}
