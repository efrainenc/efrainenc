import React, { useLayoutEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from './SectionTitle';
import { revealIn } from '../lib/reveal';
import '../css/AboutMe.css';

gsap.registerPlugin(ScrollTrigger);

const BIO =
  "I'm an experienced Full-Stack developer with a strong background in customer service and a proven ability to deliver high-quality, innovative web applications. " +
  'Skilled in various programming languages including JavaScript, Python, and Java, as well as popular technologies such as React, Django, Angular, Node.js, and Express. ' +
  'Strong understanding of database management, including PostgreSQL, MongoDB, and Firebase. Adept at troubleshooting and resolving technical issues, and able to work effectively in ' +
  'a team environment. A dedicated professional with a strong ability to understand and meet customer needs, resulting in the successful delivery of projects.';

const TUX = String.raw`    .--.
   |o_o |
   |:_/ |
  //   \ \
 (|     | )
/'\_   _/\`\
\___)=(___/`;

const INFO = [
  ['user', 'efrain@orlando'],
  ['role', 'Full-Stack Developer'],
  ['langs', 'JavaScript, Python, Java'],
  ['stack', 'React, Django, Angular, Node, Express'],
  ['data', 'PostgreSQL, MongoDB, Firebase'],
  ['bg', 'customer service → code'],
];

const AboutMe=()=>{
  const root = useRef(null);
  const words = useMemo(() => BIO.split(' '), []);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        revealIn(root.current);

        const spans = root.current.querySelectorAll('.aboutWord');
        gsap.set(spans, { opacity: 0.14 });

        // pin the section; words ignite one by one as you scroll
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: '+=170%',
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
          },
        });
        tl.to(spans, { opacity: 1, color: '#e4fff1', stagger: 0.5, ease: 'none', duration: 0.5 }, 0);
        tl.fromTo('.aboutCard', { y: 140, rotate: 3 }, { y: -40, rotate: -1.5, ease: 'none', duration: spans.length * 0.5 }, 0);
        tl.fromTo('.aboutTux', { opacity: 0.2 }, { opacity: 1, ease: 'none', duration: spans.length * 0.5 }, 0);
      });
    }, root);
    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return(
    <section id='aboutMe' ref={root}>
      <div className='aboutMeContainer'>
        <div className='aboutContent'>
          <SectionTitle n='01' cmd='cat about.md'>About Me</SectionTitle>
          <p className='aboutText'>
            {words.map((w, i) => (
              <span className='aboutWord' key={i}>{w} </span>
            ))}
          </p>
        </div>

        <aside className='aboutCard' aria-label='System info'>
          <div className='aboutBar'><i /><i /><i /><span>neofetch</span></div>
          <div className='aboutBody'>
            <pre className='aboutTux'>{TUX}</pre>
            <dl>
              {INFO.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default AboutMe