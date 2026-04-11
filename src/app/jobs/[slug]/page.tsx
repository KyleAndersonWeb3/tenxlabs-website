import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Briefcase, DollarSign, ArrowLeft, CheckCircle } from "lucide-react";
import { JsonLd, getJobPostingSchema } from "@/components/seo/JsonLd";
import { jobs, getJobBySlug } from "@/lib/data/jobs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return {
    title: `${job.title} at TenXLabs`,
    description: job.description,
    alternates: { canonical: `https://tenxlabs.com/jobs/${slug}` },
  };
}

export default async function JobPage({ params }: Props) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  const schema = getJobPostingSchema(job);

  return (
    <>
      <JsonLd data={schema} />

      <section className="py-24 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/jobs" className="inline-flex items-center gap-2 text-brand-gray hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Positions
          </Link>
          <div className="inline-block bg-brand-blue/10 text-brand-blue text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            {job.department}
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">{job.title}</h1>
          <div className="flex flex-wrap gap-6 text-brand-gray">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-blue" />{job.location}</div>
            <div className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-brand-blue" />{job.type}</div>
            {job.salary && <div className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-brand-blue" />{job.salary}</div>}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">The Role</h2>
                <p className="text-brand-gray leading-relaxed">{job.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                      <span className="text-brand-gray">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                      <span className="text-brand-gray">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {job.niceToHave.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Nice to Have</h2>
                  <ul className="space-y-3">
                    {job.niceToHave.map((r) => (
                      <li key={r} className="flex items-start gap-3">
                        <div className="w-5 h-5 border border-brand-blue/50 rounded-full flex-shrink-0 mt-0.5" />
                        <span className="text-brand-gray">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div>
              <div className="bg-white/3 border border-white/8 rounded-2xl p-6 sticky top-24">
                <h3 className="text-white font-semibold text-lg mb-4">Apply for this role</h3>
                <p className="text-brand-gray text-sm mb-6">
                  Send us your resume and a brief note about why you&apos;re a fit. We respond to every application.
                </p>
                <Link
                  href={`/contact?role=${job.slug}`}
                  className="block w-full bg-brand-blue hover:bg-brand-blue-light text-white font-semibold text-center px-6 py-3 rounded-xl transition-colors"
                >
                  Apply Now
                </Link>
                <div className="mt-4 text-center text-brand-gray text-xs">
                  Posted {new Date(job.datePosted).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
