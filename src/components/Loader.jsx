import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../css/Loader.css';

const LOG = [
  '[    0.000000] Linux version 6.x-efrain (gcc 13) #1 SMP PREEMPT',
  '[    0.004211] Command line: BOOT_IMAGE=/vmlinuz root=/dev/portfolio quiet',
  '[    0.113842] x86/fpu: Supporting XSAVE feature 0x001: x87 floating point',
  '[    0.290117] physics: gravity well online, G = 6.674e-11',
  '[    0.402993] random: crng init done',
  '[  OK  ] Mounted /home/efrain',
  '[  OK  ] Started Network Manager',
  '[  OK  ] Reached target Graphical Interface',
  '[  OK  ] Loaded react@18, gsap, lenis',
  'efrain login: efrain  (auto)',
];

function Loader({ onDone }) {
  const root = useRef(null);
  const logRef = useRef(null);
  const barRef = useRef(null);
  const [pct, setPct] = useState(0);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const state = { p: 0 };
    let shown = 0;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(state, {
        p: 100,
        duration: 2.3,
        ease: 'power2.inOut',
        onUpdate: () => {
          const p = Math.round(state.p);
          setPct(p);
          const target = Math.floor((state.p / 100) * LOG.length);
          if (target > shown) {
            shown = target;
            setLines(LOG.slice(0, shown));
          }
          if (barRef.current) barRef.current.style.transform = `scaleX(${state.p / 100})`;
        },
      });
      tl.add(() => onDone(), '+=0.15');
      tl.to(root.current, {
        yPercent: -100,
        duration: 1,
        ease: 'expo.inOut',
      }, '<');
      tl.set(root.current, { display: 'none' });

      const skip = () => tl.timeScale(6);
      root.current.addEventListener('pointerdown', skip);
      window.addEventListener('keydown', skip);
      return () => {
        window.removeEventListener('keydown', skip);
      };
    }, root);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <div className='loader' ref={root} role='status' aria-label='Loading'>
      <pre className='loaderLog' ref={logRef}>
        {lines.join('\n')}
        <span className='caret' />
      </pre>
      <div className='loaderFoot'>
        <span className='loaderPercent'>{String(pct).padStart(3, '0')}</span>
        <span className='loaderLabel'>booting portfolio.service</span>
        <span className='loaderHint'>click to skip</span>
      </div>
      <div className='loaderBar'><i ref={barRef} /></div>
    </div>
  )
}

export default Loader