import { Noto_Sans_Telugu, Poppins } from "next/font/google";
import type { Metadata } from "next";
import { seo, site } from "@/data/content";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const notoTelugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-telugu",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
    siteName: site.productName,
    url: site.siteUrl,
    locale: "en_IN",
    images: [
      {
        url: "/images/magical-mornings-banner.png",
        width: 1024,
        height: 768,
        alt: "Magical Mornings by 10x Wealth Creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/images/magical-mornings-banner.png"],
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
    <html lang="en" className={`${poppins.variable} ${notoTelugu.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
