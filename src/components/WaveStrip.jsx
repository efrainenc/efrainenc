import React, { useEffect, useRef } from 'react';
import { scrollState, prefersReducedMotion } from '../lib/scroll';

/**
 * Small oscilloscope: superposition of three sine waves. Scroll position sets
 * the phase, scroll speed sets the amplitude.
 */
function WaveStrip() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    const ctx = c.getContext('2d');
    let raf = 0;
    let amp = 1;
    const reduce = prefersReducedMotion();

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      c.width = c.clientWidth * dpr;
      c.height = c.clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();
    window.addEventListener('resize', size);

    const draw = () => {
      raf = requestAnimationFrame(draw);
      const w = c.clientWidth;
      const h = c.clientHeight;
      ctx.clearRect(0, 0, w, h);
      amp += (1 + Math.min(Math.abs(scrollState.vel) * 0.25, 2.5) - amp) * 0.1;
      const phase = scrollState.y * 0.01;
      const mid = h / 2;

      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(57,255,136,0.08)';
      ctx.beginPath();
      ctx.moveTo(0, mid);
      ctx.lineTo(w, mid);
      ctx.stroke();

      const waves = [
        { f: 0.012, a: 0.22, p: 1, col: 'rgba(57,255,136,0.9)' },
        { f: 0.031, a: 0.12, p: -1.7, col: 'rgba(39,217,255,0.55)' },
        { f: 0.007, a: 0.16, p: 0.6, col: 'rgba(228,255,241,0.35)' },
      ];
      waves.forEach((wv) => {
        ctx.strokeStyle = wv.col;
        ctx.beginPath();
        for (let x = 0; x <= w; x += 3) {
          const y = mid + Math.sin(x * wv.f + phase * wv.p * 2 + (reduce ? 0 : performance.now() * 0.0008 * wv.p)) * h * wv.a * amp;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', size);
    };
  }, []);

  return(
    <canvas ref={ref} className='skillWave' />
  )
}

export default WaveStrip