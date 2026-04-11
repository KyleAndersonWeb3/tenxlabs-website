import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, organizationSchema } from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tenxlabs.com"),
  title: {
    default: "TenXLabs | We Build What Scales",
    template: "%s | TenXLabs",
  },
  description:
    "TenXLabs is a full-stack digital agency building high-performance web apps, mobile apps, and software systems for startups and enterprises. Speed, SEO, and scale — built in.",
  keywords: [
    "web development agency",
    "app development",
    "software engineering",
    "Next.js development",
    "React development",
    "mobile app development",
    "AI integration",
    "cloud infrastructure",
    "TenXLabs",
  ],
  authors: [{ name: "TenXLabs" }],
  creator: "TenXLabs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tenxlabs.com",
    siteName: "TenXLabs",
    title: "TenXLabs | We Build What Scales",
    description:
      "Full-stack digital agency. Web apps, mobile apps, AI integration, cloud infrastructure. Built to outperform.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TenXLabs — We Build What Scales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TenXLabs | We Build What Scales",
    description: "Full-stack digital agency. Web apps, mobile apps, AI, cloud. Built to outperform.",
    images: ["/og-image.png"],
    creator: "@tenxlabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd data={organizationSchema} />
        {/* GTM - replace GTM-XXXXXXX with real ID */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-brand-navy text-white`}
      >
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
