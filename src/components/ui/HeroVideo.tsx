"use client";
import { useEffect, useRef, CSSProperties } from "react";

const CSS_HIDE_CONTROLS = `
  video::-webkit-media-controls,
  video::-webkit-media-controls-enclosure,
  video::-webkit-media-controls-panel,
  video::-webkit-media-controls-play-button,
  video::-webkit-media-controls-start-playback-button {
    display: none !important;
    -webkit-appearance: none;
  }
`;

function forcePlay(video: HTMLVideoElement) {
  video.muted = true;
  video.play().catch(() => {});
}

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    forcePlay(v);
    const resume = () => forcePlay(v);
    document.addEventListener("touchstart", resume, { once: true });
    return () => document.removeEventListener("touchstart", resume);
  }, []);
  return (
    <>
      <style>{CSS_HIDE_CONTROLS}</style>
      <video ref={ref} autoPlay loop muted playsInline preload="auto"
             className="absolute inset-0 w-full h-full object-cover opacity-60"
             style={{ pointerEvents: "none" }}>
        <source src="/hero-bg-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export function AutoVideo({ src, mobileSrc, style }: { src: string; mobileSrc?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    // Play immediately
    forcePlay(v);
    // Also play on scroll into view (for below-fold videos on iOS)
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) forcePlay(v);
    }, { threshold: 0.1 });
    observer.observe(v);
    // Play on first touch anywhere
    const onTouch = () => forcePlay(v);
    document.addEventListener("touchstart", onTouch, { once: true });
    return () => {
      observer.disconnect();
      document.removeEventListener("touchstart", onTouch);
    };
  }, []);
  return (
    <video ref={ref} autoPlay loop muted playsInline preload="auto"
           style={{ ...style, pointerEvents: "none" }}>
      {mobileSrc && <source src={mobileSrc} type="video/mp4" media="(max-width: 768px)" />}
      <source src={src} type="video/mp4" />
    </video>
  );
}
