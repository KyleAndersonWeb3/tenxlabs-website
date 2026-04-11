import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Smartphone,
  Code2,
  Brain,
  Cloud,
  TrendingUp,
  Star,
  ChevronRight,
  Play,
} from "lucide-react";
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
    quote:
      "TenXLabs built our SaaS platform from scratch in 8 weeks. It handles 50k users without breaking a sweat. Their engineering is exceptional.",
    author: "Sarah K.",
    title: "CEO, Fintech Startup",
    rating: 5,
  },
  {
    quote:
      "We'd worked with two other agencies before TenXLabs. The difference in quality was immediate. They actually understand business, not just code.",
    author: "David M.",
    title: "CTO, Healthcare Platform",
    rating: 5,
  },
  {
    quote:
      "Our app went from idea to App Store in 10 weeks. The UX was so good that users didn't need a tutorial. That's not easy to pull off.",
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

const projects = [
  {
    label: "SaaS Platform",
    title: "FinFlow Dashboard",
    desc: "Real-time financial analytics for 50k+ users",
    color: "from-blue-600 to-violet-600",
    tags: ["Next.js", "PostgreSQL", "AWS"],
  },
  {
    label: "Mobile App",
    title: "LogiTrack Pro",
    desc: "Fleet tracking app for 200+ trucking companies",
    color: "from-emerald-600 to-teal-600",
    tags: ["React Native", "Node.js", "Maps API"],
  },
  {
    label: "E-Commerce",
    title: "StyleVault",
    desc: "Fashion marketplace processing $2M/month",
    color: "from-orange-600 to-red-600",
    tags: ["Next.js", "Stripe", "Shopify"],
  },
  {
    label: "AI Integration",
    title: "DocuMind AI",
    desc: "Document intelligence platform for law firms",
    color: "from-purple-600 to-pink-600",
    tags: ["OpenAI", "Python", "Vector DB"],
  },
];

export default function HomePage() {
  const webPageSchema = getWebPageSchema(
    "TenXLabs | We Build What Scales",
    "Full-stack development and marketing digital agency building high-performance web apps, mobile apps, and software systems.",
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

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050810]">
        {/* Animated gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.3),transparent)]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.12),transparent_70%)]" />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-brand-blue-glow text-sm font-medium">
                  Now accepting new projects
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
                We Build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-accent">
                  What Scales.
                </span>
              </h1>

              <p className="text-xl text-brand-gray max-w-xl mb-10 leading-relaxed">
                TenXLabs is a full-stack development and marketing digital
                agency. We engineer web apps, mobile apps, and software systems
                that perform at scale — not just at launch.
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
                  href="#showreel"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
                >
                  <Play className="w-5 h-5 text-brand-blue fill-brand-blue" />
                  Watch Showreel
                </Link>
              </div>

              {/* Trust strip */}
              <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/5">
                <div className="flex -space-x-2">
                  {["S", "D", "R", "M"].map((l, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#050810] bg-gradient-to-br from-brand-blue to-brand-accent flex items-center justify-center text-white text-xs font-bold"
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-brand-gray text-xs">
                    Trusted by 50+ companies
                  </p>
                </div>
              </div>
            </div>

            {/* Right — animated device mockup */}
            <div className="relative hidden lg:flex items-center justify-center">
              {/* Glow behind device */}
              <div className="absolute w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl" />

              {/* Browser mockup */}
              <div className="relative w-full max-w-md bg-[#0d1117] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 bg-[#0d1117] rounded-md mx-4 px-3 py-1 text-brand-gray text-xs">
                    app.tenxlabs.com/dashboard
                  </div>
                </div>

                {/* Dashboard preview */}
                <div className="p-4 space-y-3">
                  {/* Stat cards row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "Revenue", value: "$2.4M", up: true, color: "text-green-400" },
                      { label: "Users", value: "48.2K", up: true, color: "text-brand-blue-glow" },
                      { label: "Uptime", value: "99.9%", up: true, color: "text-emerald-400" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/3 rounded-lg p-2.5 border border-white/5">
                        <div className={`text-base font-bold ${stat.color}`}>{stat.value}</div>
                        <div className="text-brand-gray text-[10px]">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="bg-white/3 rounded-lg p-3 border border-white/5">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white text-xs font-medium">Monthly Revenue</span>
                      <span className="text-green-400 text-xs">+24%</span>
                    </div>
                    {/* Fake bar chart */}
                    <div className="flex items-end gap-1 h-16">
                      {[40, 65, 45, 80, 55, 90, 70, 95, 60, 100, 75, 110].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm"
                          style={{
                            height: `${h * 0.6}%`,
                            background:
                              i === 11
                                ? "linear-gradient(to top, #2563EB, #60A5FA)"
                                : "rgba(37,99,235,0.3)",
                          }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-1">
                      {["Jan", "Apr", "Jul", "Oct", "Dec"].map((m) => (
                        <span key={m} className="text-brand-gray text-[9px]">{m}</span>
                      ))}
                    </div>
                  </div>

                  {/* Recent activity */}
                  <div className="space-y-2">
                    {[
                      { user: "Sarah K.", action: "New subscription", time: "2m ago", color: "bg-blue-500" },
                      { user: "Marcus T.", action: "Upgraded to Pro", time: "8m ago", color: "bg-violet-500" },
                      { user: "Priya M.", action: "Payment received", time: "14m ago", color: "bg-green-500" },
                    ].map((item) => (
                      <div key={item.user} className="flex items-center gap-2.5 bg-white/3 rounded-lg px-3 py-2 border border-white/5">
                        <div className={`w-6 h-6 ${item.color} rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>
                          {item.user[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white text-[11px] font-medium">{item.user}</div>
                          <div className="text-brand-gray text-[10px]">{item.action}</div>
                        </div>
                        <div className="text-brand-gray text-[10px] flex-shrink-0">{item.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating mobile card */}
              <div className="absolute -bottom-4 -left-8 bg-[#0d1117] rounded-2xl border border-white/10 shadow-xl p-4 w-44">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 bg-brand-blue rounded-lg flex items-center justify-center">
                    <Smartphone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white text-xs font-semibold">Mobile App</span>
                </div>
                <div className="text-2xl font-bold text-white mb-0.5">4.9★</div>
                <div className="text-brand-gray text-[10px]">App Store rating</div>
                <div className="mt-2 h-1.5 bg-white/5 rounded-full">
                  <div className="h-full w-[92%] bg-brand-blue rounded-full" />
                </div>
              </div>

              {/* Floating perf card */}
              <div className="absolute -top-4 -right-4 bg-[#0d1117] rounded-2xl border border-white/10 shadow-xl p-4 w-40">
                <div className="text-brand-gray text-[10px] mb-1">Performance Score</div>
                <div className="text-3xl font-bold text-green-400">98</div>
                <div className="text-[10px] text-brand-gray">Core Web Vitals ✓</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
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

      {/* ── SHOWREEL / VIDEO ── */}
      <section id="showreel" className="py-24 bg-[#050810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              See What We Build
            </h2>
            <p className="text-brand-gray max-w-xl mx-auto">
              A quick look at the products, platforms, and apps that come out of TenXLabs.
            </p>
          </div>

          {/* Video embed container */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0d1117] aspect-video group cursor-pointer">
            {/* YouTube embed — replace VIDEO_ID with actual reel */}
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0&modestbranding=1"
              title="TenXLabs Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ── WORK SHOWCASE ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-3">Selected Work</h2>
              <p className="text-brand-gray">Products we&apos;ve built that are live in production.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:text-brand-blue-glow transition-colors flex-shrink-0"
            >
              Start your project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative rounded-2xl overflow-hidden border border-white/8 bg-[#0d1117] hover:border-white/20 transition-all duration-300"
              >
                {/* Gradient visual area */}
                <div className={`h-56 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  {/* Fake UI elements inside */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 p-4">
                      <div className="h-2 bg-white/40 rounded mb-2 w-3/4" />
                      <div className="h-2 bg-white/20 rounded mb-3 w-1/2" />
                      <div className="flex gap-2">
                        <div className="h-8 flex-1 bg-white/20 rounded-lg" />
                        <div className="h-8 flex-1 bg-white/10 rounded-lg" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium">
                    {project.label}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-brand-gray text-sm mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/5 border border-white/10 text-brand-gray text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What We Build</h2>
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

      {/* ── WHY TENXLABS ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why TenXLabs?</h2>
              <p className="text-brand-gray mb-8 leading-relaxed">
                Most agencies ship mediocre work because they&apos;re optimizing for throughput, not
                quality. We&apos;re different. Every project gets our A-team and our full attention.
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

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Clients Say</h2>
            <p className="text-brand-gray">Don&apos;t take our word for it.</p>
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

      {/* ── FAQ ── */}
      <section className="py-24">
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

      {/* ── CTA ── */}
      <section className="py-24 bg-[#050810] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(37,99,235,0.15),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-accent">
              real?
            </span>
          </h2>
          <p className="text-brand-gray text-xl mb-10 max-w-2xl mx-auto">
            Tell us what you&apos;re building. We&apos;ll tell you how we&apos;d build it and what it&apos;ll take.
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
