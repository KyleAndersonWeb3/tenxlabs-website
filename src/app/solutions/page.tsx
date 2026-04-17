"use client";

import Link from "next/link";
import { ArrowRight, ShoppingCart, Building2, Stethoscope, Truck, BarChart3, GraduationCap } from "lucide-react";
import { useState } from "react";

const solutions = [
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E-Commerce",
    desc: "High-converting storefronts, inventory systems, and fulfillment integrations. Built to handle traffic spikes and scale with your catalog.",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    video: "https://assets.mixkit.co/videos/42123/42123-1080.mp4",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Enterprise",
    desc: "Custom internal tools, ERP integrations, workflow automation, and legacy system modernization for organizations that can't afford downtime.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    video: "https://assets.mixkit.co/videos/914/914-1080.mp4",
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Healthcare",
    desc: "HIPAA-compliant platforms, patient portals, telehealth apps, and clinical workflow systems built with security as a foundation.",
    img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    video: "https://assets.mixkit.co/videos/4745/4745-1080.mp4",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Logistics",
    desc: "Fleet tracking, dispatch systems, route optimization, and real-time visibility platforms for trucking and supply chain companies.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    video: "https://assets.mixkit.co/videos/4705/4705-1080.mp4",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Fintech",
    desc: "Payment platforms, financial dashboards, KYC flows, and trading tools built with compliance and security baked in.",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    video: "https://assets.mixkit.co/videos/41277/41277-1080.mp4",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "EdTech",
    desc: "Learning management systems, course platforms, student portals, and assessment tools designed for real learners.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    video: "https://assets.mixkit.co/videos/4519/4519-1080.mp4",
  },
];

function SolutionCard({ sol }: { sol: typeof solutions[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "18px",
        overflow: "hidden",
        minHeight: "380px",
        cursor: "pointer",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Static background photo */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${sol.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "opacity 0.4s",
        opacity: hovered ? 0 : 1,
      }} />

      {/* Hover video */}
      {hovered && (
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={sol.video} type="video/mp4" />
        </video>
      )}

      {/* Dark gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: hovered
          ? "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)"
          : "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.88) 100%)",
        transition: "background 0.4s",
        zIndex: 1,
      }} />

      {/* Flare border on hover */}
      {hovered && (
        <div style={{
          position: "absolute", inset: 0,
          borderRadius: "18px",
          boxShadow: "inset 0 0 0 2px #00D084, 0 0 20px 4px #00D08466",
          animation: "cardFlare 1.4s ease-in-out infinite",
          zIndex: 2,
          pointerEvents: "none",
        }} />
      )}

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 3,
        padding: "36px 28px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        minHeight: "380px",
      }}>
        <div style={{
          width: "48px", height: "48px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "12px",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", marginBottom: "20px",
          backdropFilter: "blur(4px)",
        }}>
          {sol.icon}
        </div>
        <h2 style={{
          fontFamily: "var(--font-jakarta)",
          fontSize: "24px", fontWeight: 800,
          color: "#fff", marginBottom: "12px",
        }}>
          {sol.title}
        </h2>
        <p style={{
          fontFamily: "var(--font-jakarta)",
          fontSize: "14px", color: "rgba(255,255,255,0.75)",
          lineHeight: 1.7, marginBottom: "24px",
        }}>
          {sol.desc}
        </p>
        <Link href="/contact" style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          fontFamily: "var(--font-jakarta)",
          fontSize: "14px", fontWeight: 600,
          color: hovered ? "#00D084" : "#0057ff",
          textDecoration: "none",
          transition: "color 0.3s",
        }}>
          Discuss your project <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "#000", minHeight: "50vh",
        display: "flex", alignItems: "center",
        paddingTop: "140px", paddingBottom: "80px",
      }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <p style={{
            fontFamily: "var(--font-jakarta)", fontSize: "13px",
            fontWeight: 600, color: "#e80101",
            textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px",
          }}>
            Industries
          </p>
          <h1 style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "clamp(40px, 6vw, 68px)",
            fontWeight: 800, color: "#fff",
            lineHeight: 1.1, marginBottom: "20px",
          }}>
            Solutions Built for{" "}
            <span style={{ color: "#e80101" }}>Your Industry</span>
          </h1>
          <p style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "18px", color: "rgba(255,255,255,0.55)",
            maxWidth: "560px", lineHeight: 1.7,
          }}>
            Every industry has different requirements, regulations, and user expectations.
            We&apos;ve built across them all.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section style={{ background: "#000", paddingBottom: "100px" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol) => (
              <SolutionCard key={sol.title} sol={sol} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
