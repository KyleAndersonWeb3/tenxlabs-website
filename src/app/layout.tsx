import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, organizationSchema } from "@/components/seo/JsonLd";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tenxlabs.io"),
  title: { default: "TenXLabs | We Build Success Stories", template: "%s | TenXLabs" },
  description: "TenXLabs is a full-stack digital agency building high-performance web apps, mobile apps, and software systems for startups and enterprises.",
  keywords: ["web development agency", "app development", "software engineering", "Next.js development", "React development", "mobile app development", "AI integration", "TenXLabs"],
  authors: [{ name: "TenXLabs" }],
  creator: "TenXLabs",
  openGraph: {
    type: "website", locale: "en_US", url: "https://tenxlabs.io",
    siteName: "TenXLabs", title: "TenXLabs | We Build Success Stories",
    description: "Full-stack digital agency. Web apps, mobile apps, AI integration. Built to outperform.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "TenXLabs" }],
  },
  twitter: {
    card: "summary_large_image", title: "TenXLabs | We Build Success Stories",
    description: "Full-stack digital agency. Web apps, mobile apps, AI, cloud. Built to outperform.",
    images: ["/og-image.png"], creator: "@myclawagent",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd data={organizationSchema} />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-J3H85FKSH1" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J3H85FKSH1', { page_path: window.location.pathname });
        `}</Script>
      </head>
      <body className={`${jakarta.variable} font-sans antialiased bg-black text-white`}>
        <Header />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
