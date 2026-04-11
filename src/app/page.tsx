import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Globe, Smartphone, Code2, Brain, Cloud, TrendingUp, Star, ChevronRight } from "lucide-react";
import { JsonLd, organizationSchema, getWebPageSchema } from "@/components/seo/JsonLd";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "TenXLabs | We Build What Scales",
  description:
    "TenXLabs is a full-stack development and marketing digital agency. We build high-performance web apps, mobile apps, and software systems for startups and enterprises.",
  alternates: {
    canonical: "https://tenxlabs.com",
  },
};

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  Cloud: <Cloud className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
};

const stats = [
  { value: "50+", label: "Projects Shipped" },
  { value: "<2s", label: "Avg. Load Time" },
  { value: "100%", label: "Client Retention" },
  { value: "3", label: "Countries Served" },
];

const testimonials = [
  {
    quote: "TenXLabs built our SaaS platform from scratch in 8 weeks. It handles 50k users without breaking a sweat. Their engineering is exceptional.",
    author: "Sarah K.",
    title: "CEO, Fintech Startup",
    rating: 5,
  },
  {
    quote: "We'd worked with two other agencies before TenXLabs. The difference in quality was immediate. They actually understand business, not just code.",
    author: "David M.",
    title: "CTO, Healthcare Platform",
    rating: 5,
  },
  {
    quote: "Our app went from idea to App Store in 10 weeks. The UX was so good that users didn't need a tutorial. That's not easy to pull off.",
    author: "Rachel T.",
    title: "Founder, Consumer App",
    rating: 5,
  },
];

const faqItems = [
  {
    question: "How long does it take to build a website?",
    answer:
      "A production-ready marketing site takes 2–4 weeks. A full web application with backend, auth, and integrations takes 6–12 weeks depending on scope.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Yes. We work with founders at pre-seed, seed, and Series A. We're good at MVP scoping — figuring out what to build first and what to defer.",
  },
  {
    question: "What does your process look like?",
    answer:
      "Discovery → Architecture → Build → QA → Deploy. We use agile sprints with weekly demos so you always know where we are.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do. Everything we build is yours. Full source code, documentation, and IP transfers at project close.",
  },
];

export default function HomePage() {
  const webPageSchema = getWebPageSchema(
    "TenXLabs | We Build What Scales",
    "Full-stack digital agency building high-performance web apps, mobile apps, and software systems.",
    "https://tenxlabs.com"
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-blue-glow pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
              <span className="text-brand-blue-glow text-sm font-medium">Now accepting new projects</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              We Build{" "}
              <span className="text-brand-blue">What Scales.</span>
            </h1>

            <p className="text-xl text-brand-gray max-w-2xl mb-10 leading-relaxed">
              TenXLabs is a full-stack development and marketing digital agency. We engineer web apps, mobile apps,
              and software systems that perform at scale — not just at launch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
              >
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-navy-light border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-brand-blue mb-2">{stat.value}</div>
                <div className="text-brand-gray text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What We Build
            </h2>
            <p className="text-brand-gray max-w-2xl mx-auto">
              From your first MVP to your millionth user. We cover the full technical stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white/3 hover:bg-white/6 border border-white/8 hover:border-brand-blue/30 rounded-2xl p-6 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-4 group-hover:bg-brand-blue/20 transition-colors">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-brand-gray text-sm mb-4 leading-relaxed">{service.shortDescription}</p>
                <div className="flex items-center gap-1 text-brand-blue text-sm font-medium">
                  Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why TenXLabs */}
      <section className="py-24 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why TenXLabs?
              </h2>
              <p className="text-brand-gray mb-8 leading-relaxed">
                Most agencies ship mediocre work because they're optimizing for throughput, not quality.
                We're different. Every project gets our A-team and our full attention.
              </p>
              <ul className="space-y-4">
                {[
                  "Performance built in from day one — not bolted on after launch",
                  "SEO architecture designed before the first line of code",
                  "You own everything: code, designs, documentation",
                  "Direct access to the engineers building your product",
                  "Weekly demos so you're never in the dark",
                  "We say no when something won't work — that's how you trust us",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-brand-gray text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/3 border border-white/8 rounded-2xl p-8">
              <h3 className="text-white font-semibold text-xl mb-6">Our Process</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Discovery", desc: "We learn your business, users, and goals before writing a line of code." },
                  { step: "02", title: "Architecture", desc: "We design the technical foundation for performance, SEO, and scale." },
                  { step: "03", title: "Build", desc: "Agile sprints with weekly demos. You always know what's done and what's next." },
                  { step: "04", title: "Launch", desc: "QA, optimization, deployment. We don't ship until it's production-ready." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-blue text-sm font-bold">{item.step}</span>
                    </div>
                    <div>
                      <div className="text-white font-medium mb-1">{item.title}</div>
                      <div className="text-brand-gray text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Clients Say</h2>
            <p className="text-brand-gray">Don't take our word for it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white/3 border border-white/8 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-brand-gray text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="text-white font-medium text-sm">{t.author}</div>
                  <div className="text-brand-gray text-xs">{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-brand-navy-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Common Questions</h2>
          </div>

          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-white/3 border border-white/8 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3">{item.question}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to build something{" "}
            <span className="text-brand-blue">real?</span>
          </h2>
          <p className="text-brand-gray text-xl mb-10 max-w-2xl mx-auto">
            Tell us what you're building. We'll tell you how we'd build it and what it'll take.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-semibold px-10 py-5 rounded-xl transition-colors text-lg"
          >
            Start a Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
