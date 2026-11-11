import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scramble } from '../lib/scramble';
import { prefersReducedMotion } from '../lib/scroll';
import '../css/Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home=({ ready })=>{
  const root = useRef(null);
  const intro = useRef(null);

  // scroll-linked exit + paused intro timeline
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      const l1 = root.current.querySelector('.welcomeLine1 > span');
      const l2 = root.current.querySelector('.welcomeLine2 > span');

      gsap.set('.welcomeFade', { opacity: 0, y: 24 });
      gsap.set([l1, l2], { yPercent: 115 });

      const tl = gsap.timeline({ paused: true });
      tl.to(l1, { yPercent: 0, duration: 1.1, ease: 'expo.out' }, 0)
        .to(l2, { yPercent: 0, duration: 1.1, ease: 'expo.out' }, 0.12)
        .add(() => scramble(l1, 'EFRAIN', { duration: 0.9 }), 0.05)
        .add(() => scramble(l2, 'ENCARNACION.', { duration: 1.2 }), 0.15)
        .to('.welcomeFade', { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' }, 0.5);
      intro.current = tl;

      // scrubbed exit: lines split apart horizontally, hero recedes
      const exit = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      exit
        .to('.welcomeLine1', { xPercent: -14, ease: 'none' }, 0)
        .to('.welcomeLine2', { xPercent: 14, ease: 'none' }, 0)
        .to('#welcome', { scale: 0.92, opacity: 0.0, ease: 'none' }, 0.1)
        .to('.welcomeBottom', { y: -80, opacity: 0, ease: 'none' }, 0);
    }, root);
    return () => ctx.revert();
  }, []);

  // play the intro once the boot loader releases
  useLayoutEffect(() => {
    if (ready && intro.current) intro.current.play();
  }, [ready]);

  return(
    <section id='home' ref={root}>
      <div id='welcome'>
        <h2 className='welcomeFade welcomeComment'># Hi, my name is</h2>
        <h1 className='welcomeName' aria-label='Efrain Encarnacion.'>
          <span className='welcomeLine1' aria-hidden='true'><span>EFRAIN</span></span>
          <span className='welcomeLine2' aria-hidden='true'><span>ENCARNACION.</span></span>
        </h1>
        <p className='welcomeFade welcomeInfo'>
          <span className='welcomePrompt'>$ ./role.sh</span>
          A Full-Stack Developer from Orlando!
          <span className='caret' />
        </p>
      </div>

      <div className='welcomeBottom welcomeFade'>
        <code>uid=1000(efrain) gid=1000(full-stack) groups=react,django,node,postgres</code>
        <span className='welcomeScroll'>scroll to descend <i /></span>
      </div>
    </section>
  )
}

export default Home