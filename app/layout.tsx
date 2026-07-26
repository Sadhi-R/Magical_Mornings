import { Inter, Noto_Sans_Telugu, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import { seo } from "@/data/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoTelugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-telugu",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://magicalmornings.lawofleadership.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
    siteName: seo.title,
    locale: "en_IN",
    images: [
      {
        url: "/images/mentors/sampath-kumar.jpg",
        width: 800,
        height: 1000,
        alt: "Magical Mornings by The Law of Leadership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/images/mentors/sampath-kumar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoTelugu.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
