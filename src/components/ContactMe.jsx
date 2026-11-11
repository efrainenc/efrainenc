import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from './SectionTitle';
import { revealIn } from '../lib/reveal';
import { scramble, bindHoverScramble } from '../lib/scramble';
import { scrollToTarget } from '../lib/scroll';
import '../css/ContactMe.css';

gsap.registerPlugin(ScrollTrigger);

const EMAIL = 'efrainenc@pm.me';

const ContactMe=()=>{
  const root = useRef(null);
  const mail = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    let unbind = () => {};
    const ctx = gsap.context(() => {
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        revealIn(root.current);

        // decrypt the address when it scrolls into view
        ScrollTrigger.create({
          trigger: mail.current,
          start: 'top 85%',
          once: true,
          onEnter: () => scramble(mail.current, EMAIL, { duration: 1.3 }),
        });

        // giant background word scrubs sideways
        gsap.fromTo('.contactGhost',
          { xPercent: 12 },
          {
            xPercent: -22, ease: 'none',
            scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom bottom', scrub: true },
          });

        unbind = bindHoverScramble(root.current);
      });
    }, root);
    return () => {
      unbind();
      mm.revert();
      ctx.revert();
    };
  }, []);

  return(
    <section id='contactMe' ref={root}>
      <div className='contactGhost' aria-hidden='true'>E = mc² · sudo · ∇ · root · E = mc²</div>

      <div className='contactInner'>
        <SectionTitle n='04' cmd='echo $EMAIL'>Contact Me</SectionTitle>

        <a className='contactMail' href={`mailto:${EMAIL}`} ref={mail} data-hot>
          {EMAIL}
        </a>

        <div className='socials' data-reveal>
          <a href='https://linkedin.com/in/efrainencarnacion' target='_blank' rel='noreferrer'>
            <svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path><rect x='2' y='9' width='4' height='12'></rect><circle cx='4' cy='4' r='2'></circle></svg>
            <span data-scramble>LinkedIn</span>
          </a>
          <a href='https://github.com/efrainenc' target='_blank' rel='noreferrer'>
            <svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path></svg>
            <span data-scramble>GitHub</span>
          </a>
        </div>
      </div>

      <footer className='contactFoot'>
        <span>© {new Date().getFullYear()} Efrain Encarnacion</span>
        <a href='#home' onClick={(e) => { e.preventDefault(); scrollToTarget('#home'); }}>cd ~ ↑</a>
        <span>exit 0</span>
      </footer>
    </section>
  )
}

export default ContactMe
