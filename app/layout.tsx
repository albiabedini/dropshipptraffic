import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  absoluteUrl,
  getSiteUrl,
  metadataTitleTemplate,
  siteDescription,
  siteName,
  siteTitleDefault,
} from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  applicationName: siteName,
  title: {
    default: siteTitleDefault,
    template: metadataTitleTemplate,
  },
  description: siteDescription,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    siteName,
    title: siteTitleDefault,
    description: siteDescription,
    url: absoluteUrl("/"),
  },
  twitter: {
    card: "summary",
    title: siteTitleDefault,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="dropp-body min-h-full overflow-x-clip flex flex-col font-sans text-slate-900">
        <SiteHeader />
        <main className="dropp-main flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
