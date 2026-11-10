import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../css/Cursor.css';

/** Crosshair ring with live x/y readout. Only mounts for fine pointers. */
function Cursor() {
  const ring = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;
    const el = ring.current;
    const xTo = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3' });

    const move = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      if (label.current) {
        label.current.textContent =
          `x:${String(e.clientX).padStart(4, '0')} y:${String(e.clientY).padStart(4, '0')}`;
      }
      el.classList.add('isOn');
    };
    const over = (e) => {
      const hot = e.target.closest && e.target.closest('a, button, [data-hot]');
      el.classList.toggle('isHot', !!hot);
    };
    const leave = () => el.classList.remove('isOn');

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerover', over, { passive: true });
    document.addEventListener('pointerleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', over);
      document.removeEventListener('pointerleave', leave);
    };
  }, []);

  return(
    <div className='cursor' ref={ring} aria-hidden='true'>
      <span className='cursorRing' />
      <span className='cursorLabel' ref={label} />
    </div>
  )
}

export default Cursor