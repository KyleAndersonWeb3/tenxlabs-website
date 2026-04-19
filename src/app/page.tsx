import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, organizationSchema, getWebPageSchema } from "@/components/seo/JsonLd";
import { ServiceTabs } from "@/components/home/ServiceTabs";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { BrandName } from "@/components/ui/BrandName";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { StatCounter } from "@/components/ui/StatCounter";
import { HeroVideo } from "@/components/ui/HeroVideo";

export const metadata: Metadata = {
  title: "TenXLabs | We Build Success Stories",
  description: "TenXLabs is a full-stack development and digital agency. We build high-performance web apps, mobile apps, and software systems for startups and enterprises.",
  alternates: { canonical: "https://tenxlabs.io" },
};

const stats = [
  { value: "$50M+", label: "Revenue Generated for Clients" },
  { value: "98%", label: "Customer Retention Rate" },
  { value: "2M+", label: "People Use Our Platforms" },
  { value: "350+", label: "5-Star Reviews" },
];

const approach = [
  { num: "01", title: "Strategy", desc: "Startup and enterprise consulting, go-to-market planning, MVP launch models, market penetration strategies, and scaling frameworks.", video: "/approach-strategy.mp4" },
  { num: "02", title: "Design", desc: "Experience design built on workflows, usability testing, behavior mapping, intuition, and information architecture.", video: "/approach-design.mp4" },
  { num: "03", title: "Engineering", desc: "Full-stack product engineering, software and mobile application development, cloud-native architecture, and legacy software modernization.", video: "/approach-engineering.mp4" },
  { num: "04", title: "Transformation", desc: "Workflow automation, intelligent AI adoption, legacy software modernization, interoperability, and process re-engineering at enterprise level.", video: "/approach-transformation.mp4" },
];

const testimonials = [
  { quote: "They built our SaaS platform from scratch in 8 weeks. It handles 50k users without breaking a sweat.", author: "Sarah K.", title: "CEO, Fintech Startup", photo: "/review-sarah.jpg" },
  { quote: "The difference in quality compared to other agencies was immediate. They actually understand business, not just code.", author: "David M.", title: "CTO, Healthcare Platform", photo: "/review-david.jpg" },
  { quote: "Our app went from idea to App Store in 10 weeks. The UX was so good users didn't need a tutorial.", author: "Rachel T.", title: "Founder, Consumer App", photo: "/review-rachel.jpg" },
  { quote: "They tackled every challenge with precision. The final product was outstanding and delivered on time.", author: "James L.", title: "CEO, Real Estate Platform", photo: "/review-james.jpg" },
];

const awards = [
  { title: "Top Software Development Company", source: "Clutch 2025" },
  { title: "Best Mobile App Agency", source: "GoodFirms 2025" },
  { title: "America's Fastest Growing Tech", source: "Inc. 5000" },
  { title: "Top Web Development Agency", source: "DesignRush 2025" },
];

const industries = [
  { name: "HealthTech", desc: "HIPAA-compliant platforms, patient portals, telehealth systems.", img: "/ind-healthtech.jpg" },
  { name: "EdTech", desc: "LMS platforms, e-learning apps, student engagement tools.", img: "/ind-edtech.jpg" },
  { name: "Logistics", desc: "Fleet management, real-time tracking, supply chain automation.", img: "/ind-logistics.jpg" },
  { name: "Fintech", desc: "Payment systems, trading platforms, banking infrastructure.", img: "/ind-fintech.jpg" },
  { name: "E-Commerce", desc: "High-conversion storefronts, inventory systems, mobile commerce.", img: "/ind-ecommerce.jpg" },
  { name: "Real Estate", desc: "Property management, MLS integrations, listing platforms.", img: "/ind-realestate.jpg" },
  { name: "SaaS", desc: "Multi-tenant architectures, subscription billing, scalable APIs.", img: "/ind-saas.jpg" },
  { name: "Enterprise", desc: "Legacy modernization, ERP integrations, workflow automation.", img: "/ind-enterprise.jpg" },
];

export default function HomePage() {
  const schema = getWebPageSchema(
    "TenXLabs | We Build Success Stories",
    "Full-stack development and digital agency building web apps, mobile apps, and software.",
    "https://tenxlabs.io"
  );

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={schema} />

      {/* ══ 1. HERO — Full Screen Video ══════════════════ */}
      <section className="relative h-[94vh] overflow-hidden bg-black">
        {/* Video background */}
        <HeroVideo />

        {/* Gradient overlay - fades bottom to black like AppVerticals */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 z-10" />

        {/* Content — bottom left like AppVerticals */}
        <div className="absolute bottom-0 left-0 right-0 z-20 max-w-[1400px] mx-auto px-6 lg:px-12 pb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8">
            {/* Left: Headline */}
            <div className="max-w-3xl">
              <p
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#888",
                  marginBottom: "16px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Welcome to <BrandName />
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-jakarta)",
                  color: "#fff",
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                <span style={{ fontSize: "clamp(28px, 6vw, 52px)", fontWeight: 400, display: "block" }}>
                  We Build
                </span>
                <span style={{ fontSize: "clamp(42px, 9vw, 78px)", fontWeight: 700, display: "block" }}>
                  Success Stories
                </span>
              </h1>
            </div>

            {/* Right: Circular CTA button with animated flaring border */}
            <Link
              href="/contact"
              className="hero-circle-btn"
            >
              Let&apos;s Discuss<br />Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 2. FEATURED IN MARQUEE ═══════════════════════ */}
      <section className="bg-[#0a0a0a] border-b border-white/[0.06] py-10">
        <p className="text-[#888] text-xs uppercase tracking-[0.2em] text-center mb-8">Featured In</p>
        <div className="marquee-wrap">
          <div className="marquee-track">
            {[
              /* TechCrunch */
              <span key="tc1" className="marquee-item hover:opacity-100">
                <svg height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="14" fill="#0A8A2C"/>
                  <text x="14" y="19" textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Arial">TC</text>
                  <text x="34" y="20" fill="white" fontSize="16" fontWeight="700" fontFamily="Arial">TechCrunch</text>
                </svg>
              </span>,
              /* Forbes */
              <span key="fo1" className="marquee-item hover:opacity-100">
                <svg height="28" viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="22" fill="white" fontSize="26" fontWeight="700" fontFamily="Georgia, serif" fontStyle="italic">Forbes</text>
                </svg>
              </span>,
              /* WIRED */
              <span key="wi1" className="marquee-item hover:opacity-100">
                <svg height="28" viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="22" fill="white" fontSize="22" fontWeight="900" fontFamily="Arial" letterSpacing="3">WIRED</text>
                </svg>
              </span>,
              /* Inc 5000 */
              <span key="in1" className="marquee-item hover:opacity-100">
                <svg height="28" viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="22" fill="white" fontSize="22" fontWeight="900" fontFamily="Arial" fontStyle="italic">Inc.</text>
                  <text x="44" y="22" fill="#aaa" fontSize="16" fontWeight="700" fontFamily="Arial">5000</text>
                </svg>
              </span>,
              /* Business Leader */
              <span key="bl1" className="marquee-item hover:opacity-100">
                <svg height="28" viewBox="0 0 160 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="6" width="4" height="16" fill="#0057ff"/>
                  <text x="12" y="22" fill="white" fontSize="15" fontWeight="700" fontFamily="Arial">Business Leader</text>
                </svg>
              </span>,
              /* duplicates for seamless loop */
              <span key="tc2" className="marquee-item hover:opacity-100">
                <svg height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="14" fill="#0A8A2C"/>
                  <text x="14" y="19" textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Arial">TC</text>
                  <text x="34" y="20" fill="white" fontSize="16" fontWeight="700" fontFamily="Arial">TechCrunch</text>
                </svg>
              </span>,
              <span key="fo2" className="marquee-item hover:opacity-100">
                <svg height="28" viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="22" fill="white" fontSize="26" fontWeight="700" fontFamily="Georgia, serif" fontStyle="italic">Forbes</text>
                </svg>
              </span>,
              <span key="wi2" className="marquee-item hover:opacity-100">
                <svg height="28" viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="22" fill="white" fontSize="22" fontWeight="900" fontFamily="Arial" letterSpacing="3">WIRED</text>
                </svg>
              </span>,
              <span key="in2" className="marquee-item hover:opacity-100">
                <svg height="28" viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="22" fill="white" fontSize="22" fontWeight="900" fontFamily="Arial" fontStyle="italic">Inc.</text>
                  <text x="44" y="22" fill="#aaa" fontSize="16" fontWeight="700" fontFamily="Arial">5000</text>
                </svg>
              </span>,
              <span key="bl2" className="marquee-item hover:opacity-100">
                <svg height="28" viewBox="0 0 160 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="6" width="4" height="16" fill="#0057ff"/>
                  <text x="12" y="22" fill="white" fontSize="15" fontWeight="700" fontFamily="Arial">Business Leader</text>
                </svg>
              </span>,
            ]}
          </div>
        </div>
      </section>

      {/* ══ PARTICLE BACKGROUND WRAPPER — covers everything below ══ */}
      <div style={{ position: "relative", background: "#000" }}>
        <ParticleBackground />

        {/* All content sits above the canvas */}
        <div style={{ position: "relative", zIndex: 1 }}>


      {/* ══ 4. SERVICES ══════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        {/* Full-section background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/services-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay so text stays readable */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.72) 50%, rgba(0,0,0,0.88) 100%)",
          zIndex: 1,
        }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2 }} className="py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <p className="text-[#e80101] text-sm uppercase tracking-[0.15em] font-semibold mb-6">
              Our Services
            </p>
            <h2
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "52px",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.1,
                marginBottom: "16px",
                maxWidth: "600px",
              }}
            >
              Technology That Carries Business Forward
            </h2>
            <p className="text-[#999] max-w-xl mb-16" style={{ fontFamily: "var(--font-jakarta)" }}>
              We build across the full technical stack — from web and mobile to AI and cloud infrastructure.
            </p>
            <ServiceTabs />
          </div>
        </div>
      </section>


      {/* ══ 6. TESTIMONIALS ══════════════════════════════ */}
      <section className="py-28 border-t border-white/[0.06]" style={{ background: "#fff" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-[#e80101] text-sm uppercase tracking-[0.15em] font-semibold mb-6">
            Testimonials
          </p>
          <h2
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "52px",
              fontWeight: 700,
              color: "#111",
              lineHeight: 1.1,
              marginBottom: "60px",
              maxWidth: "700px",
            }}
          >
            We Take Pride in Delivering Exceptional Results.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="p-10 hover:shadow-xl transition-shadow"
                style={{
                  backgroundColor: "#f8f8f8",
                  border: "1px solid #e8e8e8",
                  borderRadius: "12px",
                }}
              >
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-4 h-4 text-[#e80101] fill-[#e80101]" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p
                  className="leading-relaxed mb-8 text-lg"
                  style={{ fontFamily: "var(--font-jakarta)", color: "#444" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-6" style={{ borderTop: "1px solid #e0e0e0" }}>
                  <div style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #2563EB, #06B6D4)",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "18px",
                      fontFamily: "var(--font-jakarta)",
                    }}>
                      {t.author.split(" ").map((n: string) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold" style={{ fontFamily: "var(--font-jakarta)", color: "#111" }}>
                      {t.author}
                    </div>
                    <div className="text-sm" style={{ fontFamily: "var(--font-jakarta)", color: "#888" }}>
                      {t.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══ 11. CTA ══════════════════════════════════════ */}
      <section className="py-32 border-t border-white/[0.06] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, #e80101 0%, transparent 70%)",
          }}
        />
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "64px",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.05,
              marginBottom: "24px",
            }}
          >
            Ready to Build Your Success Story?
          </h2>
          <p className="text-[#777] text-xl mb-12 max-w-lg mx-auto" style={{ fontFamily: "var(--font-jakarta)" }}>
            Tell us what you&apos;re building. We&apos;ll scope it, architect it, and ship it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                backgroundColor: "#e80101",
                color: "#fff",
                padding: "16px 48px",
                borderRadius: "5px",
                fontSize: "17px",
                fontWeight: 600,
                fontFamily: "var(--font-jakarta)",
                textDecoration: "none",
                border: "1px solid #e80101",
                transition: "all 0.5s",
              }}
              className="hover:bg-transparent hover:text-[#e80101]"
            >
              Let&apos;s Discuss Your Project
            </Link>
            <Link
              href="/services"
              style={{
                display: "inline-block",
                backgroundColor: "transparent",
                color: "#fff",
                padding: "16px 48px",
                borderRadius: "5px",
                fontSize: "17px",
                fontWeight: 600,
                fontFamily: "var(--font-jakarta)",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.2)",
                transition: "all 0.5s",
              }}
              className="hover:border-white"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

        </div>{/* end content z-1 */}
      </div>{/* end particle wrapper */}
    </>
  );
}
