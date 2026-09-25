/**
 * Root layout — wraps every page on the site.
 *
 * What lives here:
 * - Global font (Inter) + `app/globals.css` design tokens.
 * - Site-wide SEO (title template, Open Graph, Twitter cards) built from
 *   `data/site.ts` so brand copy only needs updating in one place.
 * - JSON-LD structured data for Google rich results.
 * - Skip-to-content link for keyboard users.
 *
 * New maintainer: you almost never need to touch this file except to
 * change global SEO defaults. Per-page titles live in each `page.tsx`.
 */
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "domestic worker salary",
    "household employment records",
    "salary slip for domestic worker",
    "household service invoice",
    "domestic work financial identity",
    "household workforce management",
    "Servy app",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/images/servy-app-on-desk.webp",
        width: 1672,
        height: 941,
        alt: "The Servy app open on a phone, ready to book a home service professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/servy-app-on-desk.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#283593",
  colorScheme: "light",
};

/** Structured data for Google rich results (Organization + mobile app). */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.contactEmail,
      slogan: siteConfig.tagline,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "MobileApplication",
      name: `${siteConfig.name} — Household Employment & Salary Records`,
      operatingSystem: ["Android", "iOS"],
      applicationCategory: "FinanceApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-canvas font-sans text-ink">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
