"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  value: string; // e.g. "$50M+", "98%", "2M+", "350+"
  style?: React.CSSProperties;
  className?: string;
}

function parse(raw: string) {
  const prefix = raw.startsWith("$") ? "$" : "";
  const stripped = raw.replace("$", "");
  const suffix = stripped.replace(/[\d.]+/, "");
  const num = parseFloat(stripped);
  return { prefix, num, suffix };
}

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function StatCounter({ value, style, className }: Props) {
  const { prefix, num, suffix } = parse(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          function tick(now: number) {
            const t = Math.min((now - start) / duration, 1);
            setDisplay(Math.floor(easeOut(t) * num));
            if (t < 1) requestAnimationFrame(tick);
            else setDisplay(num);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [num]);

  return (
    <div ref={ref} style={style} className={className}>
      {prefix}{display}{suffix}
    </div>
  );
}
