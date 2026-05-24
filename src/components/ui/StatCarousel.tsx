"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    stat: "10x",
    color: "#3b82f6",
    accentColor: "#60a5fa",
    bgGradient: "linear-gradient(135deg, #0d1b2e 0%, #1a3a6e 40%, #0d1b2e 100%)",
    patternColor: "rgba(59,130,246,0.06)",
    glowColor: "rgba(59,130,246,0.15)",
    label: "Revenue Growth",
    heading: "We Don't Build Websites.\nWe Build Revenue Machines.",
    body: "Every system we deliver is engineered to generate measurable returns. Our clients average 10x revenue growth within 12 months of launch.",
    tags: [
      { text: "AI Automation", color: "blue" },
      { text: "Revenue Engineering", color: "blue" },
      { text: "Full-Stack", color: "white" },
    ],
  },
  {
    stat: "50+",
    color: "#22c55e",
    accentColor: "#4ade80",
    bgGradient: "linear-gradient(135deg, #071a0e 0%, #0d3320 40%, #071a0e 100%)",
    patternColor: "rgba(34,197,94,0.06)",
    glowColor: "rgba(34,197,94,0.15)",
    label: "Clients Served",
    heading: "50+ Businesses Running\non TenXLabs Systems.",
    body: "From trucking companies to trading firms, our clients span industries. One thing in common: they needed a system that scales. We built it.",
    tags: [
      { text: "Trucking & Logistics", color: "green" },
      { text: "Finance & Trading", color: "green" },
      { text: "E-Commerce", color: "white" },
    ],
  },
  {
    stat: "4–8",
    color: "#a855f7",
    accentColor: "#c084fc",
    bgGradient: "linear-gradient(135deg, #0e0b1e 0%, #2a1a5e 40%, #0e0b1e 100%)",
    patternColor: "rgba(168,85,247,0.06)",
    glowColor: "rgba(168,85,247,0.15)",
    label: "Week Delivery",
    heading: "Full Builds Delivered\nin 4 to 8 Weeks. Guaranteed.",
    body: "No endless timelines. No scope creep excuses. We ship complete, production-ready systems in 4–8 weeks — or we keep working until it's right.",
    tags: [
      { text: "Sprint Delivery", color: "purple" },
      { text: "Fixed Timeline", color: "purple" },
      { text: "On Budget", color: "white" },
    ],
  },
  {
    stat: "24/7",
    color: "#06b6d4",
    accentColor: "#22d3ee",
    bgGradient: "linear-gradient(135deg, #040f14 0%, #0a2a36 40%, #040f14 100%)",
    patternColor: "rgba(6,182,212,0.06)",
    glowColor: "rgba(6,182,212,0.15)",
    label: "Agent Uptime",
    heading: "Your AI Team Never\nClocks Out.",
    body: "Our agents run around the clock — handling leads, automating workflows, and monitoring systems while you sleep. Zero downtime.",
    tags: [
      { text: "Always-On", color: "cyan" },
      { text: "Autonomous", color: "cyan" },
      { text: "Zero Downtime", color: "white" },
    ],
  },
  {
    stat: "100%",
    color: "#22c55e",
    accentColor: "#4ade80",
    bgGradient: "linear-gradient(135deg, #071a0e 0%, #0d3320 40%, #071a0e 100%)",
    patternColor: "rgba(34,197,94,0.06)",
    glowColor: "rgba(34,197,94,0.15)",
    label: "Satisfaction Rate",
    heading: "We Don't Stop Until\nYou're Satisfied.",
    body: "We stand behind every build. If it's not right, we fix it. Our track record is 100% client satisfaction — not because we're perfect, but because we don't quit.",
    tags: [
      { text: "Guaranteed Quality", color: "green" },
      { text: "Revisions Included", color: "green" },
      { text: "Fortune 500 Standard", color: "white" },
    ],
  },
];

const tagStyles: Record<string, { bg: string; color: string; border: string }> = {
  blue:   { bg: "rgba(59,130,246,0.15)",  color: "#60a5fa", border: "rgba(59,130,246,0.3)" },
  green:  { bg: "rgba(34,197,94,0.15)",   color: "#4ade80", border: "rgba(34,197,94,0.3)" },
  purple: { bg: "rgba(168,85,247,0.15)",  color: "#c084fc", border: "rgba(168,85,247,0.3)" },
  cyan:   { bg: "rgba(6,182,212,0.15)",   color: "#22d3ee", border: "rgba(6,182,212,0.3)" },
  white:  { bg: "rgba(255,255,255,0.07)", color: "#94a3b8", border: "rgba(255,255,255,0.12)" },
};

export function StatCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 450);
  }, [animating]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 2500);
    return () => clearInterval(t);
  }, [next, paused]);

  const slide = slides[current];

  return (
    <section className="py-24 border-t border-white/[0.06]" style={{ background: "#0a0a0a" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "40px", flexWrap: "wrap", gap: "12px" }}>
          <div>
            <p style={{ color: "#22c55e", fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
              TenXLabs Results
            </p>
            <h2 style={{ fontFamily: "var(--font-jakarta)", fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.1, letterSpacing: "-0.5px" }}>
              Built for Growth. <span style={{ color: "#3b82f6" }}>Proven by Numbers.</span>
            </h2>
          </div>
          <div style={{ color: "#444", fontSize: "13px", fontWeight: 600, letterSpacing: "1px" }}>
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>
        </div>

        {/* Card */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{
            background: slide.bgGradient,
            borderRadius: "20px",
            border: `1px solid ${slide.color}22`,
            padding: "clamp(32px, 5vw, 64px) clamp(24px, 6vw, 72px)",
            display: "flex",
            alignItems: "center",
            gap: "clamp(24px, 5vw, 72px)",
            flexWrap: "wrap",
            opacity: animating ? 0 : 1,
            transition: "opacity 0.38s ease, background 0.5s ease",
            position: "relative",
            overflow: "hidden",
            minHeight: "260px",
          }}
        >
          {/* Grid pattern overlay */}
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(${slide.patternColor} 1px, transparent 1px), linear-gradient(90deg, ${slide.patternColor} 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }} />

          {/* Glow top-left */}
          <div style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "340px",
            height: "340px",
            borderRadius: "50%",
            background: slide.glowColor,
            filter: "blur(80px)",
            pointerEvents: "none",
          }} />

          {/* Glow bottom-right */}
          <div style={{
            position: "absolute",
            bottom: "-60px",
            right: "-60px",
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            background: `${slide.color}10`,
            filter: "blur(60px)",
            pointerEvents: "none",
          }} />

          {/* Stat block */}
          <div style={{ flexShrink: 0, minWidth: "clamp(140px, 20vw, 220px)", position: "relative", zIndex: 1 }}>
            {/* Accent line */}
            <div style={{
              width: "40px",
              height: "3px",
              background: slide.color,
              borderRadius: "2px",
              marginBottom: "16px",
            }} />
            <div style={{
              fontSize: "clamp(56px, 10vw, 88px)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-3px",
              color: slide.color,
              fontFamily: "var(--font-jakarta)",
              marginBottom: "10px",
              textShadow: `0 0 60px ${slide.color}40`,
            }}>
              {slide.stat}
            </div>
            <div style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#475569",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}>
              {slide.label}
            </div>
          </div>

          {/* Divider — hidden on small screens */}
          <div className="hidden md:block" style={{ width: "1px", height: "130px", background: `${slide.color}22`, flexShrink: 0 }} />

          {/* Content */}
          <div style={{ flex: 1, minWidth: "240px", position: "relative", zIndex: 1 }}>
            <h3 style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "clamp(18px, 3vw, 26px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.3,
              marginBottom: "14px",
              letterSpacing: "-0.2px",
              whiteSpace: "pre-line",
            }}>
              {slide.heading}
            </h3>
            <p style={{
              fontSize: "clamp(13px, 2vw, 14px)",
              color: "#64748b",
              lineHeight: 1.75,
              maxWidth: "480px",
              marginBottom: "24px",
              fontFamily: "var(--font-jakarta)",
            }}>
              {slide.body}
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {slide.tags.map((tag) => {
                const s = tagStyles[tag.color];
                return (
                  <span key={tag.text} style={{
                    padding: "5px 14px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: 600,
                    background: s.bg,
                    color: s.color,
                    border: `1px solid ${s.border}`,
                    fontFamily: "var(--font-jakarta)",
                    letterSpacing: "0.3px",
                  }}>
                    {tag.text}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "24px" }}>
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === current ? s.color : "#222",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
