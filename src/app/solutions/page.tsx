import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingCart, Building2, Stethoscope, Truck, BarChart3, GraduationCap } from "lucide-react";
import { JsonLd, getWebPageSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Solutions by Industry",
  description:
    "TenXLabs builds industry-specific digital solutions for e-commerce, enterprise, healthcare, logistics, fintech, and edtech. Real solutions for real businesses.",
  alternates: { canonical: "https://tenxlabs.com/solutions" },
};

const solutions = [
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E-Commerce",
    desc: "High-converting storefronts, inventory systems, and fulfillment integrations. Built to handle traffic spikes and scale with your catalog.",
    link: "/contact",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Enterprise",
    desc: "Custom internal tools, ERP integrations, workflow automation, and legacy system modernization for organizations that can't afford downtime.",
    link: "/contact",
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Healthcare",
    desc: "HIPAA-compliant platforms, patient portals, telehealth apps, and clinical workflow systems built with security as a foundation.",
    link: "/contact",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Logistics",
    desc: "Fleet tracking, dispatch systems, route optimization, and real-time visibility platforms for trucking and supply chain companies.",
    link: "/contact",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Fintech",
    desc: "Payment platforms, financial dashboards, KYC flows, and trading tools built with compliance and security baked in.",
    link: "/contact",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "EdTech",
    desc: "Learning management systems, course platforms, student portals, and assessment tools designed for real learners.",
    link: "/contact",
  },
];

export default function SolutionsPage() {
  const schema = getWebPageSchema(
    "Solutions by Industry | TenXLabs",
    "Industry-specific digital solutions for e-commerce, enterprise, healthcare, logistics, fintech, and edtech.",
    "https://tenxlabs.com/solutions"
  );

  return (
    <>
      <JsonLd data={schema} />

      <section className="py-24 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Solutions built for{" "}
              <span className="text-brand-blue">your industry.</span>
            </h1>
            <p className="text-brand-gray text-xl leading-relaxed">
              Every industry has different requirements, regulations, and user expectations.
              We&apos;ve built across them all. Here&apos;s what we know about yours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol) => (
              <div key={sol.title} className="bg-white/3 border border-white/8 rounded-2xl p-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-4">
                  {sol.icon}
                </div>
                <h2 className="text-white font-bold text-xl mb-3">{sol.title}</h2>
                <p className="text-brand-gray text-sm leading-relaxed mb-6">{sol.desc}</p>
                <Link
                  href={sol.link}
                  className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:text-brand-blue-glow transition-colors"
                >
                  Discuss your project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
