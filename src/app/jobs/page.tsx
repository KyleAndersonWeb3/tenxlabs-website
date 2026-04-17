import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Briefcase, DollarSign, ArrowRight } from "lucide-react";
import { JsonLd, getWebPageSchema } from "@/components/seo/JsonLd";
import { jobs } from "@/lib/data/jobs";
import { BrandName } from "@/components/ui/BrandName";

export const metadata: Metadata = {
  title: "Careers — Join TenXLabs",
  description:
    "Join the TenXLabs team. We're hiring senior engineers, mobile developers, and cloud specialists. Remote-friendly, competitive pay, exceptional work.",
  alternates: { canonical: "https://tenxlabs.com/jobs" },
};

export default function JobsPage() {
  const schema = getWebPageSchema(
    "Careers | TenXLabs",
    "Join TenXLabs. We build exceptional digital products and we need exceptional people to do it.",
    "https://tenxlabs.com/jobs"
  );

  return (
    <>
      <JsonLd data={schema} />

      <section className="py-24 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Work on things{" "}
              <span className="text-brand-blue">worth building.</span>
            </h1>
            <p className="text-brand-gray text-xl leading-relaxed">
              We&apos;re a small team that ships excellent work. If you care about craft and want
              to work directly with great clients on meaningful products, we should talk.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2>
              {jobs.map((job) => (
                <Link
                  key={job.slug}
                  href={`/jobs/${job.slug}`}
                  className="group block bg-white/3 hover:bg-white/6 border border-white/8 hover:border-brand-blue/30 rounded-2xl p-6 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <div className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-medium px-3 py-1 rounded-full mb-3">
                        {job.department}
                      </div>
                      <h3 className="text-white font-bold text-xl mb-3">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-brand-gray text-sm">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-brand-blue" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4 text-brand-blue" />
                          {job.type}
                        </div>
                        {job.salary && (
                          <div className="flex items-center gap-1.5">
                            <DollarSign className="w-4 h-4 text-brand-blue" />
                            {job.salary}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-brand-blue text-sm font-medium flex-shrink-0">
                      View job <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="space-y-6">
              <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
                <h3 className="text-white font-semibold text-lg mb-4">Why <BrandName />?</h3>
                <ul className="space-y-3 text-brand-gray text-sm">
                  {[
                    "Remote-first culture",
                    "Senior team — you learn from the best",
                    "Real products with real users",
                    "Competitive compensation",
                    "Direct client access (for those who want it)",
                    "You own what you build — your name is on it",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-brand-blue rounded-full flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-3">Don&apos;t see your role?</h3>
                <p className="text-brand-gray text-sm mb-4">
                  We hire exceptional people regardless of open positions. Send us your background.
                </p>
                <Link href="/contact" className="block w-full bg-brand-blue hover:bg-brand-blue-light text-white text-sm font-medium text-center px-4 py-2.5 rounded-lg transition-colors">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
