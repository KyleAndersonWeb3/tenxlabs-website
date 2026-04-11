import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  Trophy,
  Users,
  Globe2,
  Zap,
  Play,
  ShieldCheck,
  Layers,
  Cpu,
  RefreshCw,
} from "lucide-react";
import { JsonLd, organizationSchema, getWebPageSchema } from "@/components/seo/JsonLd";
import { ServiceTabs } from "@/components/home/ServiceTabs";
import { FaqAccordion } from "@/components/home/FaqAccordion";

export const metadata: Metadata = {
  title: "TenXLabs | Full-Stack Development & Marketing Digital Agency",
  description:
    "TenXLabs is a full-stack development and marketing digital agency. We build high-performance web apps, mobile apps, and software systems for startups and enterprises.",
  alternates: { canonical: "https://tenxlabs.com" },
};

/* ─── Data ─────────────────────────────────────────── */

const pressLogos = [
  "Forbes", "TechCrunch", "Entrepreneur", "Inc.", "Wired", "Fast Company",
];

const clientLogos = [
  "Stripe", "Shopify", "HubSpot", "Salesforce", "Twilio", "Vercel",
  "Figma", "Notion", "Linear", "Cloudflare", "Supabase", "PlanetScale",
];

const approach = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Strategy",
    desc: "Startup and enterprise consulting, go-to-market planning, MVP launch models, market penetration strategies, and scaling frameworks.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Design",
    desc: "Experience design built on workflows, usability testing, behavior mapping, intuition, and information architecture.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Engineering",
    desc: "Full-stack product engineering, software and mobile application development, cloud-native architecture, and legacy software modernization.",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Transformation",
    desc: "Workflow automation, intelligent AI adoption, legacy software modernization, interoperability, and process re-engineering at enterprise level.",
  },
];

const testimonials = [
  {
    quote: "TenXLabs built our SaaS platform from scratch in 8 weeks. It handles 50k users without breaking a sweat.",
    author: "Sarah K.",
    title: "CEO, Fintech Startup",
  },
  {
    quote: "The difference in quality compared to other agencies was immediate. They actually understand business, not just code.",
    author: "David M.",
    title: "CTO, Healthcare Platform",
  },
  {
    quote: "Our app went from idea to App Store in 10 weeks. The UX was so good users didn't need a tutorial.",
    author: "Rachel T.",
    title: "Founder, Consumer App",
  },
  {
    quote: "TenXLabs tackled every challenge with precision. The final product was outstanding and delivered on time.",
    author: "James L.",
    title: "CEO, Real Estate Platform",
  },
];

const awards = [
  "Top Software Development Company — Clutch 2025",
  "Best Mobile App Agency — GoodFirms 2025",
  "America's Fastest Growing Tech Companies — Inc. 5000",
  "Top Web Development Agency — DesignRush 2025",
];

const industries = [
  { name: "Healthcare", icon: "🏥" },
  { name: "Fintech", icon: "💳" },
  { name: "E-Commerce", icon: "🛍️" },
  { name: "Logistics", icon: "🚚" },
  { name: "EdTech", icon: "🎓" },
  { name: "Real Estate", icon: "🏠" },
  { name: "SaaS", icon: "☁️" },
  { name: "Enterprise", icon: "🏢" },
];

/* ─── Page ─────────────────────────────────────────── */

export default function HomePage() {
  const schema = getWebPageSchema(
    "TenXLabs | Full-Stack Development & Marketing Digital Agency",
    "Full-stack development and marketing digital agency building web apps, mobile apps, and software systems.",
    "https://tenxlabs.com"
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Do you sign NDAs?", acceptedAnswer: { "@type": "Answer", text: "Yes. We sign NDAs at the start of every engagement." } },
      { "@type": "Question", name: "Who owns the code?", acceptedAnswer: { "@type": "Answer", text: "You own all source code, designs, and documentation." } },
    ],
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />

      {/* ══ 1. HERO ══════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center bg-[#080808] overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-brand-blue/8 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-accent/5 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* ── Left: Copy ── */}
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full px-4 py-1.5 mb-8 text-sm text-brand-blue-glow font-medium">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Accepting new projects · Q2 2026
              </div>

              <h1 className="text-[3.5rem] sm:text-[4.5rem] font-extrabold text-white leading-[1.03] tracking-tight mb-6">
                Build Digital<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-blue-glow to-brand-accent">
                  Products That
                </span>
                <br />Dominate.
              </h1>

              <p className="text-[1.1rem] text-[#8b9ab0] leading-relaxed max-w-lg mb-10">
                TenXLabs is a full-stack development and marketing digital agency.
                We build the technology that powers startups, scale-ups, and Fortune
                500 companies — from web apps and mobile apps to AI integration and
                cloud infrastructure.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-[15px]"
                >
                  Start a Discussion <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-[15px]"
                >
                  <Play className="w-4 h-4 text-brand-blue fill-brand-blue" />
                  View Our Work
                </Link>
              </div>

              {/* Social proof row */}
              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/5">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-[#8b9ab0] text-xs mt-0.5">Projects Shipped</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-[#8b9ab0] text-xs mt-0.5">Client Retention</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex flex-col items-center">
                  <div className="flex gap-0.5 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <div className="text-[#8b9ab0] text-xs">5-Star Reviews</div>
                </div>
              </div>
            </div>

            {/* ── Right: Phone Mockup ── */}
            <div className="relative hidden lg:flex items-center justify-center">
              {/* Glow */}
              <div className="absolute w-72 h-72 bg-brand-blue/15 rounded-full blur-3xl" />

              {/* Phone frame */}
              <div className="relative w-[260px]">
                <div className="bg-[#111] rounded-[40px] border-[3px] border-[#333] shadow-2xl overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-[#0a0a0a] flex items-center justify-between px-6 pt-4 pb-2">
                    <span className="text-white text-[10px] font-semibold">9:41</span>
                    <div className="flex gap-1 items-center">
                      <div className="h-[3px] w-3 bg-white/70 rounded" />
                      <div className="h-[3px] w-2 bg-white/50 rounded" />
                      <div className="h-[3px] w-1 bg-white/30 rounded" />
                    </div>
                  </div>
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#111] rounded-b-2xl" />

                  {/* Screen content */}
                  <div className="bg-[#0d0d0d] px-4 pb-6 pt-2 min-h-[480px]">
                    {/* App header */}
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <div className="text-white font-bold text-sm">Dashboard</div>
                        <div className="text-[#666] text-[10px]">Good morning, Kyle</div>
                      </div>
                      <div className="w-7 h-7 bg-brand-blue rounded-full flex items-center justify-center text-white text-[10px] font-bold">K</div>
                    </div>

                    {/* KPI card */}
                    <div className="bg-gradient-to-br from-brand-blue to-brand-accent rounded-2xl p-4 mb-4">
                      <div className="text-white/70 text-[10px] mb-1">Total Revenue</div>
                      <div className="text-white text-2xl font-bold">$2.4M</div>
                      <div className="text-white/80 text-[10px] mt-1">↑ 24% this month</div>
                    </div>

                    {/* Two mini cards */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                        <div className="text-[#666] text-[9px]">Users</div>
                        <div className="text-white font-bold text-sm">48.2K</div>
                        <div className="text-green-400 text-[9px]">+12%</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                        <div className="text-[#666] text-[9px]">Uptime</div>
                        <div className="text-white font-bold text-sm">99.9%</div>
                        <div className="text-green-400 text-[9px]">All systems ✓</div>
                      </div>
                    </div>

                    {/* Mini chart bars */}
                    <div className="bg-white/3 rounded-xl p-3 border border-white/5 mb-4">
                      <div className="text-[#666] text-[9px] mb-2">Weekly Activity</div>
                      <div className="flex items-end gap-1 h-10">
                        {[30,55,40,70,50,85,65].map((h, i) => (
                          <div key={i} className="flex-1 rounded-sm"
                            style={{ height:`${h}%`, background: i===5 ? '#2563EB' : 'rgba(37,99,235,0.25)' }} />
                        ))}
                      </div>
                    </div>

                    {/* Recent notifications */}
                    {["New client onboarded", "Payment received", "Deploy succeeded"].map((n, i) => (
                      <div key={i} className="flex items-center gap-2 py-1.5 border-b border-white/5 last:border-0">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${i===0 ? 'bg-brand-blue' : i===1 ? 'bg-green-400' : 'bg-purple-400'}`} />
                        <span className="text-[#888] text-[10px]">{n}</span>
                      </div>
                    ))}
                  </div>

                  {/* Home bar */}
                  <div className="bg-[#0a0a0a] py-2 flex justify-center">
                    <div className="w-20 h-1 bg-white/30 rounded-full" />
                  </div>
                </div>

                {/* Floating badge 1 */}
                <div className="absolute -right-12 top-16 bg-[#111] border border-white/10 rounded-2xl shadow-xl p-3 w-36">
                  <div className="flex items-center gap-2 mb-1">
                    <Trophy className="w-4 h-4 text-yellow-400" />
                    <span className="text-white text-[11px] font-semibold">Top Rated</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <div className="text-[#666] text-[9px] mt-1">Clutch · GoodFirms</div>
                </div>

                {/* Floating badge 2 */}
                <div className="absolute -left-14 bottom-20 bg-[#111] border border-white/10 rounded-2xl shadow-xl p-3 w-32">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-brand-blue" />
                    <span className="text-white text-[11px] font-semibold">Performance</span>
                  </div>
                  <div className="flex items-end gap-0.5 h-8">
                    {[40,60,50,80,70].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm"
                        style={{ height:`${h}%`, background: i===3 ? '#2563EB' : 'rgba(37,99,235,0.3)' }} />
                    ))}
                  </div>
                  <div className="text-green-400 text-[9px] mt-1">Score: 98/100</div>
                </div>

                {/* Floating badge 3 */}
                <div className="absolute -left-12 top-8 bg-[#111] border border-white/10 rounded-2xl shadow-xl px-3 py-2">
                  <div className="flex items-center gap-1.5">
                    <Globe2 className="w-3.5 h-3.5 text-brand-accent" />
                    <span className="text-white text-[11px] font-medium">Live in 3 countries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 2. FEATURED IN ════════════════════════════════ */}
      <section className="bg-[#0d0d0d] border-y border-white/5 py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#555] text-xs uppercase tracking-widest text-center mb-5 font-medium">Featured In</p>
          <div className="flex items-center gap-10 overflow-x-auto no-scrollbar pb-2">
            {pressLogos.map((logo) => (
              <div key={logo} className="flex-shrink-0 text-[#444] hover:text-[#777] transition-colors font-bold text-sm tracking-wide">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. WHO WE ARE ════════════════════════════════ */}
      <section className="py-28 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-4">Who We Are</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                We Are TenXLabs.
              </h2>
              <p className="text-[#8b9ab0] text-lg leading-relaxed mb-6">
                We build the digital infrastructure for companies that shape the world.
                TenXLabs is a proud tech partner of groundbreaking startups and enterprises
                — creating new products, transforming businesses, and scaling teams.
              </p>
              <p className="text-[#8b9ab0] leading-relaxed mb-8">
                Our approach is simple: understand the business first, then engineer the
                right technology. We don&apos;t sell retainers or bloated agency packages.
                We build what you actually need, and we build it right.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue-glow font-semibold transition-colors"
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "$50M+", label: "Revenue Generated for Clients", icon: "💰" },
                { value: "100%", label: "Client Retention Rate", icon: "🤝" },
                { value: "2M+", label: "People Using Our Platforms", icon: "👥" },
                { value: "5★", label: "Average Client Rating", icon: "⭐" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-brand-blue/20 transition-colors">
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-[#666] text-sm leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. SERVICES TABS ══════════════════════════════ */}
      <section className="py-28 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-4">Our Services</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 max-w-2xl">
            Technology That Carries the Business Forward
          </h2>
          <p className="text-[#8b9ab0] max-w-xl mb-12">
            We build across the full technical stack — from web and mobile to AI and cloud.
          </p>
          <ServiceTabs />
        </div>
      </section>

      {/* ══ 5. APPROACH ══════════════════════════════════ */}
      <section className="py-28 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-4">Approach</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            We Engineer Workflows<br />That Make Teams Unstoppable.
          </h2>
          <p className="text-[#8b9ab0] max-w-xl mb-16">
            Every engagement follows a structured four-phase framework.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((item, i) => (
              <div key={item.title} className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-brand-blue/20 transition-colors group">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue/20 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[#333] font-bold text-2xl">0{i + 1}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. TESTIMONIALS ══════════════════════════════ */}
      <section className="py-28 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-4">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 max-w-2xl">
            We Take Pride in Delivering Exceptional Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
                <div className="flex gap-1 mb-5">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-[#8b9ab0] leading-relaxed mb-6 text-lg">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.author}</div>
                    <div className="text-[#555] text-xs">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. DIFFERENTIATOR ══════════════════════════ */}
      <section className="py-28 bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(37,99,235,0.08),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-4">The TenXLabs Difference</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl mx-auto">
              We Build Digital Products That Create Dominance & Legacy.
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { value: "$50M+", label: "Revenue Generated" },
              { value: "100%", label: "Client Retention Rate" },
              { value: "2M+", label: "People Use Our Platforms" },
              { value: "50+", label: "5-Star Reviews" },
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-[#111] border border-white/5 rounded-2xl py-10 px-6">
                <div className="text-4xl sm:text-5xl font-extrabold text-white mb-3">{stat.value}</div>
                <div className="text-[#666] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Presence */}
          <div className="flex flex-wrap justify-center gap-4">
            {["United States", "United Kingdom", "Middle East"].map((region) => (
              <div key={region} className="flex items-center gap-2 bg-[#111] border border-white/5 rounded-full px-5 py-2.5">
                <Globe2 className="w-4 h-4 text-brand-blue" />
                <span className="text-white text-sm font-medium">{region}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 8. AWARDS ════════════════════════════════════ */}
      <section className="py-20 bg-[#0d0d0d] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-wider text-center mb-4">Awards</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Among America&apos;s Fastest Growing Tech Companies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {awards.map((award) => (
              <div key={award} className="bg-[#111] border border-white/5 rounded-xl px-5 py-4 flex items-center gap-3">
                <Trophy className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-[#8b9ab0] text-sm">{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 9. INDUSTRIES ════════════════════════════════ */}
      <section className="py-28 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-4">Industries</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">
            Scaling Businesses with<br />Industry Specific Solutions
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <Link
                key={ind.name}
                href="/solutions"
                className="group bg-[#111] hover:bg-[#161616] border border-white/5 hover:border-brand-blue/20 rounded-2xl px-6 py-8 text-center transition-all"
              >
                <div className="text-4xl mb-3">{ind.icon}</div>
                <div className="text-white font-medium group-hover:text-brand-blue-glow transition-colors">{ind.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 10. CLIENTS ══════════════════════════════════ */}
      <section className="py-20 bg-[#0d0d0d] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-5 h-5 text-brand-blue" />
            <p className="text-brand-blue text-sm font-semibold uppercase tracking-wider">Clients</p>
          </div>
          <h2 className="text-3xl font-bold text-white mb-10">You&apos;re in Great Company</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="bg-[#111] border border-white/5 rounded-xl py-4 px-3 flex items-center justify-center hover:border-white/10 transition-colors"
              >
                <span className="text-[#444] hover:text-[#777] transition-colors font-semibold text-sm">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 11. FAQ ══════════════════════════════════════ */}
      <section className="py-28 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-4">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">
            Frequently Asked Questions
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* ══ 12. CTA ══════════════════════════════════════ */}
      <section className="py-28 bg-[#0d0d0d] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(37,99,235,0.12),transparent)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to Build Something That Lasts?
          </h2>
          <p className="text-[#8b9ab0] text-xl mb-10 max-w-xl mx-auto">
            Tell us what you&apos;re building. We&apos;ll scope it, architect it, and ship it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-semibold px-9 py-4 rounded-xl transition-colors text-lg"
            >
              Start a Discussion <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-9 py-4 rounded-xl transition-colors text-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
