import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Users, Zap, Globe } from "lucide-react";
import { JsonLd, getWebPageSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About TenXLabs",
  description:
    "TenXLabs was built on a simple belief: most agencies ship mediocre work because they don't care enough. We care. Learn about our team, mission, and approach.",
  alternates: { canonical: "https://tenxlabs.com/about" },
  openGraph: {
    title: "About TenXLabs",
    description: "Built on quality. Driven by results.",
    url: "https://tenxlabs.com/about",
  },
};

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Quality over throughput",
    desc: "We take on fewer projects so we can do each one right. We'd rather turn down work than ship something mediocre.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Direct access",
    desc: "You work directly with the engineers building your product. No account managers, no middlemen, no telephone game.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance is non-negotiable",
    desc: "Slow websites lose money. We engineer performance from the first line of code, not as an afterthought.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "You own everything",
    desc: "Full source code, documentation, and IP transfers to you at project close. No lock-in. Ever.",
  },
];

export default function AboutPage() {
  const schema = getWebPageSchema(
    "About TenXLabs",
    "TenXLabs was built on a simple belief: most agencies ship mediocre work because they don't care enough. We care.",
    "https://tenxlabs.com/about"
  );

  return (
    <>
      <JsonLd data={schema} />

      {/* Hero */}
      <section className="py-24 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Built on quality.{" "}
              <span className="text-brand-blue">Driven by results.</span>
            </h1>
            <p className="text-brand-gray text-xl leading-relaxed">
              TenXLabs exists because most agencies ship mediocre work. They optimize for
              speed-to-invoice, not quality. We optimize for the thing that actually matters:
              building products people love using.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Story</h2>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>
                  Kyle Anderson founded TenXLabs after a decade of watching agencies promise excellence
                  and deliver mediocrity. The pattern was always the same: great sales pitch, okay designs,
                  slow code, missed deadlines, and a client who couldn't wait to leave.
                </p>
                <p>
                  He built TenXLabs to be different in three specific ways: smaller client roster (more
                  attention per client), senior engineers on every project (no juniors learning on your dime),
                  and total transparency (weekly demos, no surprises).
                </p>
                <p>
                  The goal isn't to be the biggest agency. It's to build products that clients are still
                  proud of five years later. Code that scales. UX that users love. Infrastructure that
                  doesn't wake you up at 3am.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
                <div className="text-4xl font-bold text-brand-blue mb-2">50+</div>
                <div className="text-white font-medium mb-1">Projects Shipped</div>
                <div className="text-brand-gray text-sm">Across web, mobile, and software</div>
              </div>
              <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
                <div className="text-4xl font-bold text-brand-blue mb-2">100%</div>
                <div className="text-white font-medium mb-1">Client Retention</div>
                <div className="text-brand-gray text-sm">Clients who work with us come back</div>
              </div>
              <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
                <div className="text-4xl font-bold text-brand-blue mb-2">&lt;2s</div>
                <div className="text-white font-medium mb-1">Average Load Time</div>
                <div className="text-brand-gray text-sm">Across all projects we&apos;ve shipped</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How We Work</h2>
            <p className="text-brand-gray max-w-2xl mx-auto">The principles that guide every project.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white/3 border border-white/8 rounded-2xl p-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-4">
                  {v.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Want to work together?</h2>
          <p className="text-brand-gray mb-8">
            Tell us what you&apos;re building. If it&apos;s a fit, we&apos;ll make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Start a Project <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
