import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { JsonLd, getWebPageSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Resources — Guides, Checklists & Tools",
  description:
    "Free resources from TenXLabs: performance checklists, SEO guides, tech stack comparisons, and tools for product teams.",
  alternates: { canonical: "https://tenxlabs.com/resources" },
};

const resources = [
  {
    category: "Performance",
    title: "Core Web Vitals Checklist 2026",
    desc: "The complete checklist we use on every project to hit green on LCP, CLS, and INP.",
    link: "/blog/next-js-performance-guide-2026",
    type: "Blog Post",
  },
  {
    category: "SEO",
    title: "Technical SEO Audit Guide",
    desc: "Step-by-step guide to auditing your site's technical SEO — schema, canonical tags, sitemap, and more.",
    link: "/blog/why-most-agency-websites-fail-at-seo",
    type: "Blog Post",
  },
  {
    category: "Mobile",
    title: "React Native vs Native: Decision Framework",
    desc: "How to decide between React Native and native development for your next app project.",
    link: "/blog/react-native-vs-native-2026",
    type: "Blog Post",
  },
  {
    category: "Strategy",
    title: "MVP Scoping Workshop",
    desc: "How we scope an MVP in one session — prioritization frameworks and common pitfalls to avoid.",
    link: "/contact",
    type: "Workshop (on request)",
  },
];

export default function ResourcesPage() {
  const schema = getWebPageSchema(
    "Resources | TenXLabs",
    "Free guides, checklists, and tools from the TenXLabs team.",
    "https://tenxlabs.com/resources"
  );

  return (
    <>
      <JsonLd data={schema} />

      <section className="py-24 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Resources for{" "}
              <span className="text-brand-blue">product teams.</span>
            </h1>
            <p className="text-brand-gray text-xl leading-relaxed">
              Guides, checklists, and frameworks from what we&apos;ve learned shipping 50+ products.
              Free to use.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((r) => (
              <Link
                key={r.title}
                href={r.link}
                className="group bg-white/3 hover:bg-white/6 border border-white/8 hover:border-brand-blue/30 rounded-2xl p-6 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-brand-blue/10 text-brand-blue text-xs font-medium px-3 py-1 rounded-full">
                    {r.category}
                  </span>
                  <span className="text-brand-gray text-xs">{r.type}</span>
                </div>
                <h2 className="text-white font-bold text-xl mb-3 group-hover:text-brand-blue-glow transition-colors">
                  {r.title}
                </h2>
                <p className="text-brand-gray text-sm leading-relaxed mb-4">{r.desc}</p>
                <div className="flex items-center gap-1 text-brand-blue text-sm font-medium">
                  Access resource <ExternalLink className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
