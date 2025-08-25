// src/components/ParticleBackground.tsx
import React, { useRef, useEffect } from 'react';

type Particle = {
  x: number;
  y: number;
  z: number; // depth (0..1)
  size: number;
  vx: number;
  vy: number;
  hue: number;
  alpha: number;
};

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let particles: Particle[] = [];
    let raf = 0;
    let isDark = document.documentElement.classList.contains('dark');
    let mouse = { x: -9999, y: -9999, active: false };
    let t = 0; // time for gradient animation
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    // ---------- Utils
    const clamp = (n: number, min: number, max: number) =>
      Math.max(min, Math.min(max, n));

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    // ---------- Resize & scale
    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      initParticles();
    };

    // ---------- Particles
    const baseDensity = 0.10; // particles per 10,000 px^2 (scaled further below)
    function particleCountForViewport() {
      const area = window.innerWidth * window.innerHeight;
      // Clamp count for perf; more on desktop, less on mobile
      return clamp(Math.floor((area / 10000) * baseDensity * 120), 70, 240);
    }

    function makeParticle(): Particle {
      const z = Math.pow(Math.random(), 1.6);
      const speed = isDark ? rand(0.05, 0.2) : rand(0.04, 0.16); // reduced speed
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z,
        size: clamp((1 - z) * rand(1.2, 2.4), 0.6, 3.2),
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        hue: isDark ? rand(200, 260) : rand(200, 230),
        alpha: isDark
          ? rand(0.25, 0.55) * (1 - z)
          : rand(0.18, 0.38) * (1 - z),
      };
    }


    function initParticles() {
      particles = Array.from({ length: particleCountForViewport() }, makeParticle);
    }

    // ---------- Interaction
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onMouseLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    // ---------- Theme observer
    const themeObserver = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.attributeName === 'class') {
          const nowDark = document.documentElement.classList.contains('dark');
          if (nowDark !== isDark) {
            isDark = nowDark;
            // retint particles smoothly
            particles.forEach((p) => {
              p.hue = isDark ? rand(200, 260) : rand(200, 230);
              p.alpha = isDark
                ? clamp(p.alpha * 1.25, 0.15, 0.65)
                : clamp(p.alpha * 0.85, 0.12, 0.45);
            });
          }
        }
      }
    });

    themeObserver.observe(document.documentElement, { attributes: true });

    // ---------- Debounced resize
    let resizeTimer = 0 as unknown as number;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 150);
    };

    // ---------- Gradient background (animated)
    function drawGradientBackground(time: number) {
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Slowly morphing angle
      const angle = (Math.sin(time * 0.00025) + 1) * Math.PI * 0.35 + 0.2;
      const x = Math.cos(angle) * w;
      const y = Math.sin(angle) * h;

      const grad = ctx.createLinearGradient(0, 0, x, y);

      // Two schemes to fit light/dark
      if (isDark) {
        // deep blues & purples with subtle neon
        grad.addColorStop(0, 'rgba(6, 11, 25, 0.9)');
        grad.addColorStop(0.48, 'rgba(20, 15, 45, 0.85)');
        grad.addColorStop(1, 'rgba(10, 24, 46, 0.9)');
      } else {
        // soft bluish tint for light mode
        grad.addColorStop(0, 'rgba(245, 247, 255, 0.95)');
        grad.addColorStop(0.5, 'rgba(232, 238, 252, 0.95)');
        grad.addColorStop(1, 'rgba(240, 246, 255, 0.95)');
      }

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Add a floating radial glow “nebula”
      const nx = (Math.cos(time * 0.0004) * 0.25 + 0.5) * w;
      const ny = (Math.sin(time * 0.0003) * 0.25 + 0.5) * h;
      const r = Math.max(w, h) * 0.6;
      const rg = ctx.createRadialGradient(nx, ny, 0, nx, ny, r);

      if (isDark) {
        rg.addColorStop(0, 'rgba(80, 120, 255, 0.18)');
        rg.addColorStop(0.5, 'rgba(120, 90, 255, 0.12)');
        rg.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        rg.addColorStop(0, 'rgba(120, 160, 255, 0.12)');
        rg.addColorStop(0.5, 'rgba(160, 190, 255, 0.08)');
        rg.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }

      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = rg;
      ctx.beginPath();
      ctx.arc(nx, ny, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
    }

    // ---------- Main loop
    function step(now: number) {
      t = now;

      // Background
      drawGradientBackground(now);

      // Parallax from subtle scroll tilt
      const parallaxX = (mouse.active ? (mouse.x / window.innerWidth - 0.5) : 0) * 8;
      const parallaxY = (mouse.active ? (mouse.y / window.innerHeight - 0.5) : 0) * 8;

      // Update + draw particles
      const w = window.innerWidth;
      const h = window.innerHeight;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Repulse on hover
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist2 = dx * dx + dy * dy;
          const radius = 120 * (1 - p.z); // nearer particles feel more
          const r2 = radius * radius;

          if (dist2 < r2) {
            const force = (1 - dist2 / r2) * 0.8;
            const inv = 1 / (Math.sqrt(dist2) + 0.001);
            p.vx += (dx * inv) * force * 0.35;
            p.vy += (dy * inv) * force * 0.35;
          }
        }

        // Update positions with slight time-based drift
        p.x += p.vx + Math.sin((t * 0.0005 + i) * 0.7) * 0.01 * (1 - p.z);
        p.y += p.vy + Math.cos((t * 0.0006 + i) * 0.6) * 0.01 * (1 - p.z);


        // Wrap around edges
        if (p.x > w + 10) p.x = -10;
        if (p.x < -10) p.x = w + 10;
        if (p.y > h + 10) p.y = -10;
        if (p.y < -10) p.y = h + 10;

        // Draw particle (parallax offset)
        const px = p.x + parallaxX * (1 - p.z);
        const py = p.y + parallaxY * (1 - p.z);

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        const sat = isDark ? 70 : 60;
        ctx.fillStyle = `hsla(${p.hue}, ${sat}%, ${isDark ? 70 : 35}%, ${p.alpha})`;
        ctx.fill();
      }

      // Connect close particles
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);

          const maxD = 100 * (1 - (a.z + b.z) * 0.5); // nearer ones connect farther
          if (dist < maxD) {
            const o = (1 - dist / maxD) * 0.35 * (isDark ? 1.1 : 0.9);
            ctx.strokeStyle = `rgba(${isDark ? '255,255,255' : '0,0,0'}, ${o * (isDark ? 0.7 : 0.45)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(step);
    }

    // ---------- Init & listeners
    resize();
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave, { passive: true });

    raf = requestAnimationFrame(step);

    // ---------- Cleanup
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;
