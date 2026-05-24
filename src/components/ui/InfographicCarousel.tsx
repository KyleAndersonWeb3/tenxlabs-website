"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = Array.from({ length: 18 }, (_, i) => ({
  src: `/infographics/seo-page-${String(i + 1).padStart(2, "0")}.png`,
  label: [
    "Search Engine Optimization",
    "Growth Analytics & Performance",
    "Data Research & Discovery",
    "Keyword Strategy & Rankings",
    "Content Marketing Framework",
    "Link Building & Authority",
    "Technical SEO Architecture",
    "Local SEO Domination",
    "Competitor Analysis",
    "On-Page Optimization",
    "Off-Page SEO Strategy",
    "SEO Audit & Reporting",
    "Social Signals & SEO",
    "Mobile-First Indexing",
    "Voice Search Optimization",
    "E-Commerce SEO",
    "Analytics & Conversion",
    "SEO ROI & Results",
  ][i],
}));

export function InfographicCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 2500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-24 border-t border-white/[0.06]" style={{ background: "#0a0a0a" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p style={{
              color: "#22c55e",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}>
              TenXLabs Intelligence
            </p>
            <h2 style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "42px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.5px",
            }}>
              Digital Growth,<br />
              <span style={{ color: "#3b82f6" }}>By the Numbers.</span>
            </h2>
          </div>
          <div style={{ color: "#555", fontSize: "13px", fontWeight: 500 }}>
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>
        </div>

        {/* Slide */}
        <div style={{
          position: "relative",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.06)",
          background: "#111",
          maxHeight: "560px",
        }}>
          {/* Label bar */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, transparent 100%)",
            padding: "20px 28px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}>
            <div style={{
              background: "#22c55e",
              borderRadius: "3px",
              width: "4px",
              height: "20px",
              flexShrink: 0,
            }} />
            <span style={{
              color: "#fff",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.03em",
              fontFamily: "var(--font-jakarta)",
            }}>
              {slides[current].label}
            </span>
            <span style={{
              marginLeft: "auto",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "20px",
              padding: "3px 12px",
              color: "#fff",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}>
              TenXLabs
            </span>
          </div>

          {/* Image */}
          <div style={{
            opacity: isAnimating ? 0 : 1,
            transition: "opacity 0.35s ease",
          }}>
            <Image
              src={slides[current].src}
              alt={slides[current].label}
              width={1400}
              height={560}
              style={{
                width: "100%",
                height: "560px",
                objectFit: "cover",
                objectPosition: "top",
                display: "block",
              }}
              priority={current === 0}
            />
          </div>

          {/* Bottom gradient */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "80px",
            background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 100%)",
          }} />
        </div>

        {/* Dots */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "24px",
          flexWrap: "wrap",
        }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === current ? "#22c55e" : "#333",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Nav buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "20px" }}>
          <button
            onClick={() => goTo((current - 1 + slides.length) % slides.length)}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              color: "#fff",
              padding: "8px 20px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            Prev
          </button>
          <button
            onClick={next}
            style={{
              background: "#22c55e",
              border: "none",
              borderRadius: "8px",
              color: "#000",
              padding: "8px 20px",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
          >
            Next
          </button>
        </div>

      </div>
    </section>
  );
}
