import React, { useEffect, useRef } from 'react';
import { scrollState, prefersReducedMotion } from '../lib/scroll';
import '../css/Background.css';

/**
 * Fixed full-screen canvas. A swarm of test particles orbits a central
 * mass under an inverse-square force (F = GM / r²). Scrolling drags the
 * mass across the screen on a sine path, so particles get slung around and
 * left in comet-like trails; scroll speed increases G. The cursor is a
 * second, lighter mass; clicking releases a radial shockwave.
 */
const TAU = Math.PI * 2;

function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduce = prefersReducedMotion();
    const fine = window.matchMedia('(pointer: fine)').matches;

    let W = 0;
    let H = 0;
    let dpr = 1;
    let raf = 0;
    let running = true;
    let particles = [];

    const well = { x: 0, y: 0, tx: 0, ty: 0, vx: 0, vy: 0 };
    const mouse = { x: -9999, y: -9999, active: false };
    const GM = 2600; // well "mass"
    const GM_MOUSE = 700;
    const SOFT = 900; // softening, avoids singularities
    let shock = null; // { x, y, r, life }

    const spawn = (p, anywhere) => {
      // place on a roughly circular orbit around the well
      const r = anywhere
        ? 60 + Math.random() * Math.max(W, H) * 0.7
        : 80 + Math.random() * 380;
      const a = Math.random() * TAU;
      p.x = well.x + Math.cos(a) * r;
      p.y = well.y + Math.sin(a) * r * 0.75;
      const vCirc = Math.sqrt(GM / Math.sqrt(r * r + SOFT)) * (0.8 + Math.random() * 0.35);
      const dir = Math.random() < 0.88 ? 1 : -1;
      p.vx = -Math.sin(a) * vCirc * dir;
      p.vy = Math.cos(a) * vCirc * dir;
      p.z = 0.35 + Math.random() * 0.65; // depth: size, brightness, parallax
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(W < 700 ? 90 : 230, (W * H) / 9000));
      while (particles.length < count) particles.push({ x: 0, y: 0, vx: 0, vy: 0, z: 1 });
      particles.length = count;
      const target = wellTarget();
      well.x = well.tx = target.x;
      well.y = well.ty = target.y;
      particles.forEach((p) => spawn(p, false));
    };

    const wellTarget = () => {
      const p = scrollState.progress;
      const narrow = W < 700;
      return {
        x: W * (narrow ? 0.5 : 0.68 + 0.24 * Math.sin(p * Math.PI * 3.2)),
        y: H * (narrow ? 0.38 : 0.5) + Math.cos(p * Math.PI * 5) * H * 0.08,
      };
    };

    let lastY = scrollState.y;
    let last = performance.now();
    let time = 0;

    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      if (!running) return;
      const dtRaw = Math.min((now - last) / 16.667, 3);
      last = now;
      const dt = reduce ? 0 : dtRaw;
      time += dtRaw;

      const scrollDelta = scrollState.y - lastY;
      lastY = scrollState.y;
      const energy = Math.min(Math.abs(scrollState.vel) * 0.04, 2.2);

      // well springs toward scroll-driven target (critically-ish damped)
      const t = wellTarget();
      well.tx = t.x;
      well.ty = t.y;
      well.vx += (well.tx - well.x) * 0.02 * dt;
      well.vy += (well.ty - well.y) * 0.02 * dt;
      well.vx *= Math.pow(0.86, dt);
      well.vy *= Math.pow(0.86, dt);
      well.x += well.vx * dt;
      well.y += well.vy * dt;

      const G = GM * (1 + energy);
      const fade = 1 - Math.min(scrollState.y / (H * 0.9), 1) * 0.58;

      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'lighter';

      // shockwave
      if (shock) {
        shock.r += 14 * dt;
        shock.life -= 0.022 * dt;
        if (shock.life <= 0) shock = null;
      }

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];

        // parallax: scrolling shifts particles by depth
        p.y -= scrollDelta * 0.18 * p.z;

        // gravity from the well
        let dx = well.x - p.x;
        let dy = well.y - p.y;
        let d2 = dx * dx + dy * dy + SOFT;
        let inv = 1 / Math.sqrt(d2);
        let a = (G / d2) * dt;
        p.vx += dx * inv * a;
        p.vy += dy * inv * a;

        // gravity from the cursor
        if (mouse.active) {
          dx = mouse.x - p.x;
          dy = mouse.y - p.y;
          d2 = dx * dx + dy * dy + SOFT * 2;
          inv = 1 / Math.sqrt(d2);
          a = (GM_MOUSE / d2) * dt;
          p.vx += dx * inv * a;
          p.vy += dy * inv * a;
        }

        // shockwave impulse
        if (shock) {
          dx = p.x - shock.x;
          dy = p.y - shock.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          if (Math.abs(dist - shock.r) < 40) {
            const k = (shock.life * 2.2 * dt) / dist;
            p.vx += dx * k;
            p.vy += dy * k;
          }
        }

        const drag = Math.pow(0.9992, dt);
        p.vx *= drag;
        p.vy *= drag;
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // escaped the screen neighbourhood -> recycle near the well
        const out = Math.max(W, H) * 1.1;
        if (
          p.x < -out * 0.3 || p.x > W + out * 0.3 ||
          p.y < -out * 0.3 || p.y > H + out * 0.3
        ) {
          spawn(p, false);
        }

        // draw: speed -> color (slow green, fast cyan/white), trail along velocity
        const sp = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const heat = Math.min(sp / 9, 1);
        const r = Math.round(57 + heat * 170);
        const g = Math.round(255 - heat * 30);
        const b = Math.round(136 + heat * 119);
        const alpha = (0.25 + heat * 0.55) * p.z * fade;
        const trail = 3 + sp * 2.6;
        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.lineWidth = 0.6 + p.z * 1.1;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - (p.vx / (sp || 1)) * trail, p.y - (p.vy / (sp || 1)) * trail);
        ctx.stroke();
      }

      // the well itself: core + tilted orbit rings
      const cx = well.x;
      const cy = well.y;
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 70);
      glow.addColorStop(0, `rgba(39,217,255,${0.55 * fade})`);
      glow.addColorStop(0.35, `rgba(57,255,136,${0.12 * fade})`);
      glow.addColorStop(1, 'rgba(57,255,136,0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, 70, 0, TAU);
      ctx.fill();

      ctx.lineWidth = 1;
      for (let k = 0; k < 3; k += 1) {
        ctx.strokeStyle = `rgba(57,255,136,${(0.16 - k * 0.04) * fade})`;
        ctx.beginPath();
        ctx.ellipse(
          cx, cy,
          110 + k * 70, 38 + k * 26,
          time * 0.004 * (k % 2 ? -1 : 1) + k, 0, TAU
        );
        ctx.stroke();
      }

      // measurement overlay: dashed line cursor <-> well with r readout
      if (mouse.active && fine) {
        const dx2 = mouse.x - cx;
        const dy2 = mouse.y - cy;
        const dist = Math.sqrt(dx2 * dx2 + dy2 * dy2);
        ctx.globalCompositeOperation = 'source-over';
        ctx.setLineDash([3, 6]);
        ctx.strokeStyle = `rgba(228,255,241,${0.16 * fade})`;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.font = '10px "JetBrains Mono Variable", monospace';
        ctx.fillStyle = `rgba(228,255,241,${0.5 * fade})`;
        ctx.fillText(`r = ${dist.toFixed(0)} px`, (cx + mouse.x) / 2 + 8, (cy + mouse.y) / 2 - 8);
      }
      ctx.globalCompositeOperation = 'source-over';

      if (shock) {
        ctx.strokeStyle = `rgba(39,217,255,${shock.life * 0.5})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(shock.x, shock.y, shock.r, 0, TAU);
        ctx.stroke();
      }
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
    };
    const onDown = (e) => {
      if (reduce) return;
      shock = { x: e.clientX, y: e.clientY, r: 0, life: 1 };
    };
    const onVis = () => {
      running = !document.hidden;
      last = performance.now();
    };

    resize();
    if (reduce) frame(performance.now());
    else raf = requestAnimationFrame(frame);

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    document.addEventListener('visibilitychange', onVis);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      document.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return(
    <canvas ref={canvasRef} className='background' aria-hidden='true' />
  )
}

export default Background