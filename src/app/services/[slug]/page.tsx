import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { JsonLd, getWebPageSchema } from "@/components/seo/JsonLd";
import { services, getServiceBySlug } from "@/lib/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} | TenXLabs`,
    description: service.description,
    keywords: service.keywords,
    alternates: { canonical: `https://tenxlabs.com/services/${slug}` },
    openGraph: {
      title: `${service.title} | TenXLabs`,
      description: service.description,
      url: `https://tenxlabs.com/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const schema = getWebPageSchema(
    `${service.title} | TenXLabs`,
    service.description,
    `https://tenxlabs.com/services/${slug}`
  );

  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd data={schema} />

      <section className="py-24 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-brand-blue/10 text-brand-blue text-sm font-medium px-4 py-2 rounded-full mb-6">
              {service.category}
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">{service.title}</h1>
            <p className="text-brand-gray text-xl leading-relaxed">{service.description}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-8">What&apos;s included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-brand-gray">{feature}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Our approach</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-brand-gray leading-relaxed mb-4">
                  Every {service.title.toLowerCase()} project starts with understanding your business — not
                  just your technical requirements. We need to know who your users are, what success looks
                  like, and what constraints we&apos;re working within before we design anything.
                </p>
                <p className="text-brand-gray leading-relaxed mb-4">
                  Once we understand the goal, we design the architecture. This is where most agencies
                  shortcut — they start coding immediately. We spend time on architecture because decisions
                  made here determine your performance, scalability, and maintenance cost for years.
                </p>
                <p className="text-brand-gray leading-relaxed">
                  Then we build in agile sprints with weekly demos. You see progress constantly, can provide
                  feedback early, and never show up at the end to find something that doesn&apos;t match your vision.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/3 border border-white/8 rounded-2xl p-6 sticky top-24">
                <h3 className="text-white font-semibold text-lg mb-4">Start this service</h3>
                <p className="text-brand-gray text-sm mb-6">
                  Tell us about your {service.title.toLowerCase()} project. We&apos;ll respond within 24 hours.
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-brand-blue hover:bg-brand-blue-light text-white font-semibold text-center px-6 py-3 rounded-xl transition-colors mb-4"
                >
                  Start a Project
                </Link>
                <div className="text-center text-brand-gray text-xs">No commitment required</div>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-white mb-8">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-white/3 hover:bg-white/6 border border-white/8 hover:border-brand-blue/30 rounded-xl p-5 transition-all"
                >
                  <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                  <p className="text-brand-gray text-sm mb-3">{s.shortDescription}</p>
                  <div className="flex items-center gap-1 text-brand-blue text-sm font-medium">
                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
