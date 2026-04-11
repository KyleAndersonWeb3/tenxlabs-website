import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Smartphone, Code2, Brain, Cloud, TrendingUp, ChevronRight } from "lucide-react";
import { JsonLd, getWebPageSchema } from "@/components/seo/JsonLd";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services — Web, App, AI & Cloud Development",
  description:
    "TenXLabs builds web applications, mobile apps, custom software, AI integrations, and cloud infrastructure. Full-stack development agency for startups and enterprises.",
  alternates: { canonical: "https://tenxlabs.com/services" },
  openGraph: {
    title: "Services | TenXLabs",
    description: "Full-stack development: Web, App, Software, AI, Cloud, Strategy.",
    url: "https://tenxlabs.com/services",
  },
};

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-8 h-8" />,
  Smartphone: <Smartphone className="w-8 h-8" />,
  Code2: <Code2 className="w-8 h-8" />,
  Brain: <Brain className="w-8 h-8" />,
  Cloud: <Cloud className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
};

export default function ServicesPage() {
  const schema = getWebPageSchema(
    "Services | TenXLabs",
    "Full-stack development services: Web apps, mobile apps, software engineering, AI integration, cloud infrastructure, and digital strategy.",
    "https://tenxlabs.com/services"
  );

  return (
    <>
      <JsonLd data={schema} />

      <section className="py-24 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Everything you need.{" "}
              <span className="text-brand-blue">Nothing you don&apos;t.</span>
            </h1>
            <p className="text-brand-gray text-xl leading-relaxed">
              We cover the full technical stack. Pick what you need, or let us design the
              right combination for your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white/3 hover:bg-white/6 border border-white/8 hover:border-brand-blue/30 rounded-2xl p-8 transition-all duration-200"
              >
                <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue/20 transition-colors">
                  {iconMap[service.icon]}
                </div>
                <div className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {service.category}
                </div>
                <h2 className="text-white font-bold text-2xl mb-3">{service.title}</h2>
                <p className="text-brand-gray mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-brand-gray text-sm">
                      <div className="w-1.5 h-1.5 bg-brand-blue rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-1 text-brand-blue text-sm font-medium">
                  View details <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
