'use client';
import { useRef, useEffect } from 'react';

const COLORS = ['#00D084', '#00c47a', '#0052CC', '#3d7fff', '#ffffff'];

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

interface Dot {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  color: string;
  alpha: number;
  alphaSpeed: number;
}

interface Trace {
  points: { x: number; y: number }[];
  progress: number;
  speed: number;
  color: string;
  alpha: number;
}

function makeTrace(w: number, h: number): Trace {
  const points: { x: number; y: number }[] = [];
  let x = rand(0, w), y = rand(0, h);
  points.push({ x, y });
  const steps = 3 + Math.floor(5 * Math.random());
  for (let i = 0; i < steps; i++) {
    const dir = Math.floor(4 * Math.random());
    const dist = rand(60, 200);
    if (dir === 0) x += dist;
    else if (dir === 1) x -= dist;
    else if (dir === 2) y += dist;
    else y -= dist;
    points.push({ x, y });
  }
  return {
    points,
    progress: rand(0, 1),
    speed: rand(0.002, 0.006),
    color: Math.random() > 0.45 ? '#00D084' : '#0052CC',
    alpha: rand(0.15, 0.45),
  };
}

export function ParticleBackground({ height }: { height?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    let raf: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const dots: Dot[] = Array.from({ length: 140 }, () => ({
      x: rand(0, W), y: rand(0, H),
      vx: rand(-0.3, 0.3), vy: rand(-0.3, 0.3),
      size: rand(0.8, 2.5),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: rand(0.2, 1),
      alphaSpeed: rand(0.003, 0.012) * (Math.random() > 0.5 ? 1 : -1),
    }));

    const traces: Trace[] = Array.from({ length: 18 }, () => makeTrace(W, H));

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouse.current = { x: -9999, y: -9999 }; };
    const onResize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', onResize);

    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, W, H);

    function drawTrace(trace: Trace) {
      const pts = trace.points;
      if (pts.length < 2) return;
      let totalLen = 0;
      for (let i = 1; i < pts.length; i++)
        totalLen += Math.hypot(pts[i].x - pts[i-1].x, pts[i].y - pts[i-1].y);
      const drawLen = trace.progress * totalLen;
      let walked = 0;
      ctx.save();
      ctx.globalAlpha = trace.alpha;
      ctx.strokeStyle = trace.color;
      ctx.lineWidth = 0.8;
      ctx.shadowBlur = 6;
      ctx.shadowColor = trace.color;
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) {
        const seg = Math.hypot(pts[i].x - pts[i-1].x, pts[i].y - pts[i-1].y);
        if (walked + seg <= drawLen) { ctx.lineTo(pts[i].x, pts[i].y); walked += seg; }
        else {
          const t = (drawLen - walked) / seg;
          ctx.lineTo(pts[i-1].x + (pts[i].x - pts[i-1].x) * t, pts[i-1].y + (pts[i].y - pts[i-1].y) * t);
          break;
        }
      }
      ctx.stroke();
      if (trace.progress < 1) {
        const tipLen = Math.min(trace.progress, 0.999) * totalLen;
        let tx = pts[0].x, ty = pts[0].y, tw = 0;
        for (let i = 1; i < pts.length; i++) {
          const seg = Math.hypot(pts[i].x - pts[i-1].x, pts[i].y - pts[i-1].y);
          if (tw + seg <= tipLen) { tx = pts[i].x; ty = pts[i].y; tw += seg; }
          else {
            const t2 = (tipLen - tw) / seg;
            tx = pts[i-1].x + (pts[i].x - pts[i-1].x) * t2;
            ty = pts[i-1].y + (pts[i].y - pts[i-1].y) * t2;
            break;
          }
        }
        ctx.globalAlpha = 0.9;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(tx, ty, 2, 0, 2 * Math.PI);
        ctx.fillStyle = trace.color;
        ctx.fill();
      }
      ctx.restore();
    }

    function draw() {
      ctx.fillStyle = 'rgba(5,5,5,0.18)';
      ctx.fillRect(0, 0, W, H);

      const mx = mouse.current.x, my = mouse.current.y;

      for (const d of dots) {
        const dx = d.x - mx, dy = d.y - my;
        const dist = Math.hypot(dx, dy);
        if (dist < 150 && dist > 0) {
          const force = ((150 - dist) / 150) * 0.2;
          d.vx += (dx / dist) * force;
          d.vy += (dy / dist) * force;
        }
        d.vx *= 0.96; d.vy *= 0.96;
        d.x += d.vx; d.y += d.vy;
        d.alpha += d.alphaSpeed;
        if (d.alpha > 1 || d.alpha < 0.1) d.alphaSpeed *= -1;
        d.alpha = Math.max(0.1, Math.min(1, d.alpha));
        if (d.x < -10) d.x = W + 10;
        if (d.x > W + 10) d.x = -10;
        if (d.y < -10) d.y = H + 10;
        if (d.y > H + 10) d.y = -10;
        ctx.save();
        ctx.globalAlpha = d.alpha;
        ctx.shadowBlur = 4 * d.size;
        ctx.shadowColor = d.color;
        ctx.fillStyle = d.color;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
      }

      ctx.save();
      ctx.lineWidth = 0.4;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dist = Math.hypot(dots[i].x - dots[j].x, dots[i].y - dots[j].y);
          if (dist < 90) {
            ctx.globalAlpha = (1 - dist / 90) * 0.12;
            ctx.strokeStyle = '#00D084';
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      for (const trace of traces) {
        trace.progress += trace.speed;
        if (trace.progress > 1.5) {
          const t = makeTrace(W, H);
          trace.points = t.points;
          trace.progress = 0;
          trace.color = t.color;
          trace.alpha = t.alpha;
        }
        drawTrace(trace);
      }

      raf = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        display: 'block',
      }}
    />
  );
}
