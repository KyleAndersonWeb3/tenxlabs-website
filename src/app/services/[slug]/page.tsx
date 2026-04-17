import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd, getWebPageSchema } from "@/components/seo/JsonLd";
import { services, getServiceBySlug } from "@/lib/data/services";
import { BrandName } from "@/components/ui/BrandName";

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
    alternates: { canonical: `https://tenxlabs.io/services/${slug}` },
    openGraph: {
      title: `${service.title} | TenXLabs`,
      description: service.description,
      url: `https://tenxlabs.io/services/${slug}`,
    },
  };
}

const processSteps = [
  {
    num: "01", title: "Discovery",
    desc: "We learn your business, users, and goals before touching any code. This is the phase most agencies skip — we don't.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80",
  },
  {
    num: "02", title: "Architecture",
    desc: "We design the technical blueprint. Stack selection, system design, data models — decisions made here determine performance for years.",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=700&q=80",
  },
  {
    num: "03", title: "Build",
    desc: "Agile sprints with weekly demos. You see progress constantly, provide feedback early, and never get surprised at the end.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&q=80",
  },
  {
    num: "04", title: "Launch",
    desc: "We handle deployment, QA, performance testing, and go-live. Then we stay on to ensure everything runs clean.",
    img: "https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=700&q=80",
  },
];

const stats = [
  { value: "350+", label: "Projects Shipped" },
  { value: "98%", label: "Client Retention" },
  { value: "$50M+", label: "Revenue Generated" },
  { value: "4.9★", label: "Average Rating" },
];

const techStack: Record<string, string[]> = {
  "web-development": ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Vercel", "AWS"],
  "app-development": ["React Native", "Swift", "Kotlin", "Expo", "Firebase", "GraphQL", "Fastlane", "TestFlight"],
  "software-engineering": ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Terraform"],
  "ai-integration": ["OpenAI", "Anthropic", "LangChain", "Pinecone", "Python", "FastAPI", "HuggingFace", "AWS Bedrock"],
  "cloud-infrastructure": ["AWS", "GCP", "Azure", "Kubernetes", "Terraform", "Datadog", "Grafana", "GitHub Actions"],
  "digital-strategy": ["Figma", "Notion", "Linear", "Miro", "Segment", "Mixpanel", "Vercel", "Slack"],
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const schema = getWebPageSchema(
    `${service.title} | TenXLabs`,
    service.description,
    `https://tenxlabs.io/services/${slug}`
  );

  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);
  const stack = techStack[slug] || techStack["web-development"];

  return (
    <>
      <JsonLd data={schema} />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{
        background: "#000",
        minHeight: "94vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "140px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(0deg, #0a0a0a, rgba(0,0,0,0) 52.64%)",
          zIndex: 0,
        }} />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full" style={{ position: "relative", zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                background: "#1a1a1a", borderRadius: "6px",
                padding: "6px 14px", marginBottom: "28px",
              }}>
                <Link href="/services" style={{ color: "#888", fontSize: "13px", textDecoration: "none" }}>Services</Link>
                <span style={{ color: "#555", fontSize: "13px" }}>›</span>
                <span style={{ color: "#ccc", fontSize: "13px" }}>{service.title}</span>
              </div>
              <h1 style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.1,
                marginBottom: "24px",
              }}>
                {service.title}{" "}
                <span style={{ color: "#e80101" }}>That Drives</span>{" "}
                Real Growth
              </h1>
              <p style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "18px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
                marginBottom: "40px",
                maxWidth: "520px",
              }}>
                {service.description}
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/contact" style={{
                  background: "#e80101", color: "#fff",
                  padding: "12px 32px", borderRadius: "5px",
                  fontSize: "15px", fontWeight: 600,
                  textDecoration: "none", border: "1px solid #e80101",
                  transition: "0.5s", fontFamily: "var(--font-jakarta)",
                }}>
                  Get a Free Estimate
                </Link>
                <Link href="/resources" style={{
                  background: "transparent", color: "#e80101",
                  padding: "12px 32px", borderRadius: "5px",
                  fontSize: "15px", fontWeight: 600,
                  textDecoration: "none", border: "1px solid #e80101",
                  transition: "0.5s", fontFamily: "var(--font-jakarta)",
                }}>
                  See Our Work
                </Link>
                <Link href="/contact" style={{
                  background: "#fff", color: "#111",
                  padding: "12px 32px", borderRadius: "5px",
                  fontSize: "15px", fontWeight: 600,
                  textDecoration: "none", border: "1px solid #fff",
                  transition: "0.5s", fontFamily: "var(--font-jakarta)",
                }}>
                  Discuss Your Project
                </Link>
              </div>
            </div>

            {/* Right — stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "32px 24px",
                }}>
                  <div style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "44px", fontWeight: 800,
                    color: "#fff", marginBottom: "8px",
                  }}>{s.value}</div>
                  <div style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "13px", color: "#888",
                    textTransform: "uppercase", letterSpacing: "0.1em",
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED — WHITE SECTION ──────────────── */}
      <section style={{ background: "#fff", padding: "100px 0" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p style={{
            fontFamily: "var(--font-jakarta)", fontSize: "13px",
            fontWeight: 600, color: "#e80101",
            textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px",
          }}>
            What&apos;s Included
          </p>
          <h2 style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 800, color: "#000",
            lineHeight: 1.1, marginBottom: "60px",
            maxWidth: "700px",
          }}>
            Everything You Need to{" "}
            <span style={{ color: "#e80101" }}>Build &amp; Scale</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {service.features.map((feature, i) => (
              <div key={feature} style={{
                borderLeft: "2px solid #e80101",
                padding: "28px 32px",
                borderBottom: "1px solid #e8e8e8",
                borderRight: i % 2 === 0 ? "1px solid #e8e8e8" : "none",
              }}>
                <div style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "12px", fontWeight: 600,
                  color: "#b7b7b7", textTransform: "uppercase",
                  letterSpacing: "0.1em", marginBottom: "10px",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "20px", fontWeight: 700,
                  color: "#333", marginBottom: "8px",
                }}>
                  {feature}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS — LIGHT GRAY ─────────────────────────── */}
      <section style={{ background: "#f6f7f8", padding: "100px 0" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p style={{
            fontFamily: "var(--font-jakarta)", fontSize: "13px",
            fontWeight: 600, color: "#e80101",
            textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px",
          }}>
            Our Process
          </p>
          <h2 style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 800, color: "#000",
            lineHeight: 1.1, marginBottom: "60px", maxWidth: "600px",
          }}>
            How We Build{" "}
            <span style={{ color: "#e80101" }}>Without Surprises</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.num} className="process-card group" style={{
                position: "relative",
                borderRadius: "15px",
                overflow: "hidden",
                minHeight: "340px",
                border: "1px solid #e8e8e8",
                boxShadow: "0 14px 28px 0 rgba(203,203,203,0.25)",
                cursor: "default",
              }}>
                {/* Background image */}
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: `url(${step.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.6s ease",
                }} className="group-hover:scale-110" />
                {/* Dark overlay — lightens on hover */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.82) 100%)",
                  transition: "opacity 0.4s",
                }} className="group-hover:opacity-70" />
                {/* Red accent bar on hover */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: "3px", background: "#e80101",
                  transform: "scaleX(0)", transformOrigin: "left",
                  transition: "transform 0.4s ease",
                }} className="group-hover:scale-x-100" />
                {/* Content */}
                <div style={{ position: "relative", zIndex: 1, padding: "36px 28px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                  <div style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "52px", fontWeight: 800,
                    color: "rgba(255,255,255,0.2)", marginBottom: "12px",
                    lineHeight: 1,
                  }}>
                    {step.num}
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "22px", fontWeight: 700,
                    color: "#fff", marginBottom: "10px",
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "14px", color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.7,
                  }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK — WHITE ───────────────────────────── */}
      <section style={{ background: "#fff", padding: "100px 0" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p style={{
            fontFamily: "var(--font-jakarta)", fontSize: "13px",
            fontWeight: 600, color: "#e80101",
            textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px",
          }}>
            Tech Stack
          </p>
          <h2 style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 800, color: "#000",
            lineHeight: 1.1, marginBottom: "60px",
          }}>
            Tools We Build With
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {stack.map((tech) => (
              <div key={tech} style={{
                background: "#fff",
                border: "1px solid #333",
                borderRadius: "7px",
                padding: "20px 12px",
                textAlign: "center",
                fontFamily: "var(--font-jakarta)",
                fontSize: "13px", fontWeight: 600,
                color: "#333",
              }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROACH — DARK ──────────────────────────────── */}
      <section style={{ background: "#000", padding: "100px 0" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p style={{
                fontFamily: "var(--font-jakarta)", fontSize: "13px",
                fontWeight: 600, color: "#e80101",
                textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px",
              }}>
                Why <BrandName />
              </p>
              <h2 style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 800, color: "#fff",
                lineHeight: 1.1, marginBottom: "24px",
              }}>
                We Build What You{" "}
                <span style={{ color: "#e80101" }}>Actually Need</span>
              </h2>
              <p style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "17px", color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7, marginBottom: "20px",
              }}>
                Every {service.title.toLowerCase()} project starts with understanding your business — not
                just your technical requirements. We need to know who your users are, what success looks
                like, and what constraints we&apos;re working within.
              </p>
              <p style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "17px", color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7, marginBottom: "40px",
              }}>
                Once we understand the goal, we design the architecture. Then we build in agile sprints
                with weekly demos. You see progress constantly and never get surprised at the end.
              </p>
              <Link href="/contact" style={{
                background: "#e80101", color: "#fff",
                padding: "14px 40px", borderRadius: "5px",
                fontSize: "15px", fontWeight: 600,
                textDecoration: "none", border: "1px solid #e80101",
                fontFamily: "var(--font-jakarta)",
                display: "inline-block",
              }}>
                Start Your Project
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Senior engineers only", desc: "No juniors learning on your dime. Every project gets our best people." },
                { title: "Weekly demos", desc: "You see real progress every week. No black boxes, no surprises." },
                { title: "Business-first thinking", desc: "We understand your goals before we write a single line of code." },
                { title: "On-time delivery", desc: "We scope realistically and hit our deadlines. Every time." },
              ].map((item) => (
                <div key={item.title} style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  padding: "24px 28px",
                  display: "flex", gap: "16px", alignItems: "flex-start",
                }}>
                  <div style={{
                    width: "8px", height: "8px", borderRadius: "50%",
                    background: "#e80101", flexShrink: 0, marginTop: "6px",
                  }} />
                  <div>
                    <div style={{
                      fontFamily: "var(--font-jakarta)",
                      fontSize: "16px", fontWeight: 700, color: "#fff", marginBottom: "6px",
                    }}>{item.title}</div>
                    <div style={{
                      fontFamily: "var(--font-jakarta)",
                      fontSize: "14px", color: "#777",
                    }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES — WHITE ─────────────────────── */}
      <section style={{ background: "#fff", padding: "100px 0" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p style={{
            fontFamily: "var(--font-jakarta)", fontSize: "13px",
            fontWeight: 600, color: "#e80101",
            textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px",
          }}>
            Also Explore
          </p>
          <h2 style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "clamp(28px, 3vw, 42px)",
            fontWeight: 800, color: "#000",
            lineHeight: 1.1, marginBottom: "50px",
          }}>
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} style={{
                display: "block",
                background: "#fff",
                border: "1px solid #cacaca",
                borderRadius: "20px",
                padding: "36px 28px",
                textDecoration: "none",
                boxShadow: "0 14px 28px 0 rgba(203,203,203,0.25)",
                transition: "0.3s",
              }}
                className="hover:border-[#e80101]"
              >
                <h3 style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "20px", fontWeight: 700,
                  color: "#000", marginBottom: "10px",
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "15px", color: "#6e6e6e",
                  lineHeight: 1.6, marginBottom: "20px",
                }}>
                  {s.shortDescription}
                </p>
                <span style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "14px", fontWeight: 600,
                  color: "#e80101",
                }}>
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA — DARK ────────────────────────────── */}
      <section style={{
        background: "#0a0a0a",
        borderTop: "10px solid #e80101",
        padding: "100px 0",
        textAlign: "center",
      }}>
        <div className="max-w-[800px] mx-auto px-6">
          <h2 style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 800, color: "#fff",
            lineHeight: 1.1, marginBottom: "20px",
          }}>
            Ready to Build?<br />
            <span style={{ color: "#e80101" }}>Let&apos;s Talk.</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "18px", color: "rgba(255,255,255,0.55)",
            marginBottom: "40px",
          }}>
            Tell us about your project. We respond within 24 hours.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{
              background: "#e80101", color: "#fff",
              padding: "14px 48px", borderRadius: "5px",
              fontSize: "16px", fontWeight: 600,
              textDecoration: "none", border: "1px solid #e80101",
              fontFamily: "var(--font-jakarta)", transition: "0.5s",
            }}>
              Get a Free Estimate
            </Link>
            <Link href="/resources" style={{
              background: "transparent", color: "#fff",
              padding: "14px 48px", borderRadius: "5px",
              fontSize: "16px", fontWeight: 600,
              textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)",
              fontFamily: "var(--font-jakarta)", transition: "0.5s",
            }}>
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
