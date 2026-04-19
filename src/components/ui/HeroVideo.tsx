"use client";
import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    // Force play — required for iOS Safari autoplay
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // If autoplay fails, try again on first user interaction
        const resume = () => {
          video.play().catch(() => {});
          document.removeEventListener("touchstart", resume);
          document.removeEventListener("click", resume);
        };
        document.addEventListener("touchstart", resume, { once: true });
        document.addEventListener("click", resume, { once: true });
      });
    }
  }, []);

  return (
    <>
      <style>{`
        video::-webkit-media-controls,
        video::-webkit-media-controls-enclosure,
        video::-webkit-media-controls-panel,
        video::-webkit-media-controls-play-button,
        video::-webkit-media-controls-start-playback-button {
          display: none !important;
          -webkit-appearance: none;
        }
      `}</style>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        x-webkit-airplay="deny"
        style={{ pointerEvents: "none" }}
      >
        {/* Mobile-optimized smaller file loads faster on iOS */}
        <source src="/hero-bg-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
    </>
  );
}
