import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio — Client Work | TenXLabs",
  description:
    "Real results for real clients. See how TenXLabs delivers web development, SEO, digital campaigns, and AI-powered growth.",
  alternates: { canonical: "https://tenxlabs.com/portfolio" },
};

const projects = [
  {
    client: "MyClawAgent.io",
    logo: null,
    logoAlt: "MyClawAgent",
    bg: "bg-black",
    bgImage: undefined,
    liveUrl: "https://myclawagent.io",
    services: ["Website Development", "AI Agent Integration", "Brand Identity"],
    description:
      "Built and launched the full MyClawAgent.io website — AI agent service platform with video hero, TenXLabs branding, booking funnel, and live OpenClaw integration.",
    url: "https://myclawagent.io",
    tags: ["Web Dev", "AI Integration"],
  },
  {
    client: "Title Boxing",
    logo: null,
    logoAlt: "Title Boxing",
    bg: "bg-white",
    bgImage: "/client-title-boxing-bg.jpg",
    liveUrl: undefined,
    services: ["Digital Marketing Campaign", "Social Media Strategy", "Paid Ads"],
    description:
      "Executed a full-scale digital marketing campaign for Title Boxing — one of the nation's leading boxing gym franchises. Drove brand awareness, lead generation, and membership growth across digital channels.",
    url: null,
    tags: ["Digital Campaign", "Marketing"],
  },
  {
    client: "Benchmark Structures",
    logo: "/client-benchmark-logo.jpg",
    logoAlt: "Benchmark Structures",
    bg: "bg-[#0a1628]",
    bgImage: undefined,
    liveUrl: undefined,
    services: ["Website Development", "SEO Strategy", "Targeted Email Campaigns"],
    description:
      "Full digital build-out for Benchmark Structures — custom website development, on-page SEO optimization, and targeted email marketing campaigns to drive inbound leads for their structural services.",
    url: null,
    tags: ["Web Dev", "SEO", "Email"],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="py-24 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Work that{" "}
              <span className="text-brand-blue">moves the needle.</span>
            </h1>
            <p className="text-brand-gray text-xl leading-relaxed">
              We don&apos;t do vanity projects. Every engagement is built around one goal — growing your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              <span className="text-[#e80101]">Most</span>{" "}
              <span className="text-[#22c55e]">Recent</span>{" "}
              <span className="text-[#0057ff]">Projects</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/8"
              >
                {/* Brand panel */}
                {project.liveUrl ? (
                  <div className="live-iframe-container relative overflow-hidden bg-black cursor-pointer" style={{ height: '360px' }}>
                    <style>{`
                      @keyframes pageScroll {
                        0%   { transform: scale(0.5) translateY(0); }
                        80%  { transform: scale(0.5) translateY(-3200px); }
                        95%  { transform: scale(0.5) translateY(-3200px); }
                        100% { transform: scale(0.5) translateY(0); }
                      }
                      .live-iframe-wrap {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 200%;
                        transform-origin: top left;
                        animation: pageScroll 24s ease-in-out infinite;
                        animation-play-state: paused;
                      }
                      .live-iframe-container:hover .live-iframe-wrap {
                        animation-play-state: running;
                      }
                      .live-iframe-wrap iframe {
                        width: 100%;
                        height: 7200px;
                        border: none;
                        display: block;
                      }
                    `}</style>
                    <div className="live-iframe-wrap">
                      <iframe
                        src={project.liveUrl}
                        title={project.client}
                        scrolling="no"
                      />
                    </div>
                  </div>
                ) : (
                  <div className={`relative ${project.bgImage ? '' : project.bg} flex flex-col items-center justify-center p-16 min-h-[280px] overflow-hidden`}>
                    {project.bgImage && (
                      <Image src={project.bgImage} alt={project.client} fill className="object-cover" />
                    )}
                    <div className="relative z-10 w-48 h-24 flex items-center justify-center">
                      {project.logo ? (
                        <div className="relative w-full h-full">
                          <Image src={project.logo} alt={project.logoAlt} fill className="object-contain" />
                        </div>
                      ) : !project.bgImage ? (
                        <span className="text-white font-bold text-2xl tracking-tight">{project.client}</span>
                      ) : null}
                    </div>
                  </div>
                )}

                {/* Content panel */}
                <div className="bg-white/3 p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-brand-blue/10 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-white font-bold text-2xl mb-3">{project.client}</h2>
                  <ul className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                    {project.services.map((s) => (
                      <li key={s} className="text-brand-gray text-xs flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-brand-blue inline-block" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-brand-gray text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  {project.url && (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-brand-blue text-sm font-semibold hover:underline"
                    >
                      Visit site <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to be next?</h2>
            <p className="text-brand-gray mb-8 max-w-xl mx-auto">
              Tell us what you&apos;re building and we&apos;ll show you what&apos;s possible.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
