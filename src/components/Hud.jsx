import React, { useEffect, useRef } from 'react';
import { scrollState } from '../lib/scroll';
import '../css/Hud.css';

/** Telemetry readout: scroll progress, velocity (Δy/Δt) and uptime. */
function Hud() {
  const bar = useRef(null);
  const pctEl = useRef(null);
  const velEl = useRef(null);
  const upEl = useRef(null);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    let smooth = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      smooth += (scrollState.vel - smooth) * 0.15;
      const p = scrollState.progress;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      if (pctEl.current) pctEl.current.textContent = `${String(Math.round(p * 100)).padStart(3, '0')}%`;
      if (velEl.current) {
        const v = smooth;
        velEl.current.textContent = `${v >= 0 ? '+' : '-'}${Math.abs(v).toFixed(1).padStart(4, '0')}`;
      }
      if (upEl.current) {
        const s = Math.floor((performance.now() - start) / 1000);
        upEl.current.textContent =
          `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
      }
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);

  return(
    <>
      <div className='progress' aria-hidden='true'><i ref={bar} /></div>
      <div className='hud' aria-hidden='true'>
        <div><span>scroll</span><b ref={pctEl}>000%</b></div>
        <div><span>Δy/Δt</span><b ref={velEl}>+00.0</b></div>
        <div><span>uptime</span><b ref={upEl}>00:00</b></div>
      </div>
    </>
  )
}

export default Hud