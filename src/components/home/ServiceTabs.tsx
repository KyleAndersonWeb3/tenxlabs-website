"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tabs = [
  {
    id: "web",
    label: "Web Development",
    heading: "Web Platforms Built to Perform",
    description:
      "We engineer high-performance web platforms that load fast, scale cleanly, and support real operational demands. Our modern frontend frameworks and structured data architecture keep performance consistent while handling content, traffic spikes, and complex user flows.",
    links: [
      { label: "E-commerce Development", href: "/services/web-development" },
      { label: "SaaS Platform Development", href: "/services/web-development" },
      { label: "Web Application Development", href: "/services/web-development" },
    ],
    visual: {
      color: "from-blue-600/20 to-violet-600/20",
      accent: "bg-blue-500",
      items: ["Next.js & React", "PostgreSQL", "REST APIs", "Vercel / AWS"],
    },
  },
  {
    id: "app",
    label: "App Development",
    heading: "Mobile Apps That Users Love",
    description:
      "We build iOS and Android applications that deliver real value. From startup MVPs to enterprise mobile tools, we engineer for performance, usability, and long-term retention — not just a launch.",
    links: [
      { label: "iOS App Development", href: "/services/app-development" },
      { label: "Android App Development", href: "/services/app-development" },
      { label: "React Native Cross-Platform", href: "/services/app-development" },
    ],
    visual: {
      color: "from-emerald-600/20 to-teal-600/20",
      accent: "bg-emerald-500",
      items: ["React Native", "Swift / Kotlin", "App Store Optimization", "Push Notifications"],
    },
  },
  {
    id: "software",
    label: "Software Engineering",
    heading: "Custom Software Around Your Business",
    description:
      "Off-the-shelf software doesn't fit every business. We build custom systems — from internal tools to complex enterprise platforms — engineered to your exact workflows and scale requirements.",
    links: [
      { label: "Enterprise Software", href: "/services/software-engineering" },
      { label: "API Development", href: "/services/software-engineering" },
      { label: "Legacy Modernization", href: "/services/software-engineering" },
    ],
    visual: {
      color: "from-orange-600/20 to-red-600/20",
      accent: "bg-orange-500",
      items: ["Microservices", "Node.js / Python", "PostgreSQL", "CI/CD Pipelines"],
    },
  },
  {
    id: "ai",
    label: "AI Integration",
    heading: "AI That Works in Production",
    description:
      "We integrate AI that actually ships. LLMs, RAG systems, computer vision — we wire AI into your existing products and workflows to automate operations and unlock new capabilities.",
    links: [
      { label: "LLM Integration", href: "/services/ai-integration" },
      { label: "AI Automation", href: "/services/ai-integration" },
      { label: "Custom AI Features", href: "/services/ai-integration" },
    ],
    visual: {
      color: "from-purple-600/20 to-pink-600/20",
      accent: "bg-purple-500",
      items: ["OpenAI / Anthropic", "RAG & Vector DBs", "Fine-tuning", "AI Safety"],
    },
  },
];

export function ServiceTabs() {
  const [active, setActive] = useState("web");
  const [paused, setPaused] = useState(false);
  const tab = tabs.find((t) => t.id === active)!;

  useEffect(() => {
    if (paused) return;
    const ids = tabs.map((t) => t.id);
    const interval = setInterval(() => {
      setActive((cur) => {
        const idx = ids.indexOf(cur);
        return ids[(idx + 1) % ids.length];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);;

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Tab buttons */}
      <div className="flex flex-wrap gap-2 mb-12">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => { setActive(t.id); setPaused(true); }}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
              active === t.id
                ? "bg-brand-blue text-white"
                : "bg-white/5 text-brand-gray hover:text-white hover:bg-white/10 border border-white/10"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold text-white mb-5">{tab.heading}</h3>
          <p className="text-brand-gray leading-relaxed mb-8">{tab.description}</p>
          <ul className="space-y-3 mb-8">
            {tab.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-2 text-brand-gray hover:text-white transition-colors"
                >
                  <ArrowRight className="w-4 h-4 text-brand-blue group-hover:translate-x-1 transition-transform" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Discuss This Service <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Visual card */}
        <div className={`rounded-2xl bg-gradient-to-br ${tab.visual.color} border border-white/10 p-8`}>
          <div className="space-y-3">
            {tab.visual.items.map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/8"
              >
                <div className={`w-2.5 h-2.5 rounded-full ${tab.visual.accent} flex-shrink-0`} />
                <span className="text-white text-sm font-medium">{item}</span>
                <div className="ml-auto flex gap-1">
                  {[...Array(3)].map((_, j) => (
                    <div
                      key={j}
                      className="h-1 rounded-full bg-white/20"
                      style={{ width: `${20 + (i + j) * 8}px` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="flex justify-between text-sm">
              <span className="text-brand-gray">Delivery timeline</span>
              <span className="text-white font-medium">4–12 weeks</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-brand-gray">Team size</span>
              <span className="text-white font-medium">2–6 engineers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
