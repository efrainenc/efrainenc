import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from './SectionTitle';
import WaveStrip from './WaveStrip';
import { revealIn } from '../lib/reveal';
import '../css/Skills.css';

gsap.registerPlugin(ScrollTrigger);

const GROUPS = [
  {
    dir: 'languages',
    title: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'C', 'Java', 'CSS3', 'HTML5', 'C++'],
  },
  {
    dir: 'databases',
    title: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
  },
  {
    dir: 'frameworks',
    title: 'Frameworks, Platforms and Libraries',
    items: [
      'React', 'Express.js', 'Django', 'Angular', 'Node.js', 'JWT', 'SASS', 'Bootstrap',
      'jQuery', 'NPM', 'Anaconda', 'Flask', 'Svelte', 'PyTorch', 'Pandas', 'NumPy', 'Postman',
    ],
  },
];

export const Skills = () => {
  const root = useRef(null);
  const track = useRef(null);
  const bar = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      // desktop: horizontal scroll driven by vertical scroll
      mm.add('(min-width: 861px) and (prefers-reduced-motion: no-preference)', () => {
        const dist = () => track.current.scrollWidth - window.innerWidth;
        gsap.to(track.current, {
          x: () => -dist(),
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: () => `+=${dist()}`,
            pin: true,
            scrub: 0.7,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (bar.current) bar.current.style.transform = `scaleX(${self.progress})`;
            },
          },
        });

        // skillList pop in as their panel approaches centre
        gsap.utils.toArray('.skillCategory').forEach((panel) => {
          const skillList = panel.querySelectorAll('.skillChip');
          gsap.from(skillList, {
            y: 40, opacity: 0, stagger: 0.04, duration: 0.6, ease: 'power3.out',
            scrollTrigger: {
              trigger: panel,
              containerAnimation: gsap.getTweensOf(track.current)[0],
              start: 'left 85%',
              toggleActions: 'play none none reverse',
            },
          });
        });
      });

      // mobile / tablet: vertical stack with simple reveals
      mm.add('(max-width: 860px) and (prefers-reduced-motion: no-preference)', () => {
        revealIn(root.current);
        gsap.utils.toArray('.skillCategory').forEach((panel) => {
          gsap.from(panel, {
            y: 60, opacity: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: panel, start: 'top 88%', toggleActions: 'play none none reverse' },
          });
        });
      });
    }, root);
    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return(
    <section id='skills' ref={root}>
      <div className='skillsContainer' ref={track}>
        <div className='skillsIntro'>
          <SectionTitle n='02' cmd='ls -la /usr/lib/skills'>Skills</SectionTitle>
          <p className='skillsHint' data-reveal>
            drag down <span>→</span> traverse the filesystem
          </p>
        </div>

        {GROUPS.map((g, i) => (
          <article className='skillCategory' key={g.dir}>
            <header className='skillTop'>
              <span className='perm'>drwxr-xr-x</span>
              <span className='dir'>{g.dir}/</span>
              <span className='count'>{g.items.length} items</span>
            </header>
            <span className='skillIndex' aria-hidden='true'>{String(i + 1).padStart(2, '0')}</span>
            <h3 className={`skillTitle${g.title.length > 14 ? ' isLong' : ''}`}>{g.title}</h3>
            <ul className='skillList'>
              {g.items.map((s) => (
                <li className='skillChip' key={s} data-hot>
                  <span>▸</span> {s}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className='skillsFoot' aria-hidden='true'>
        <WaveStrip />
        <div className='skillsBar'><i ref={bar} /></div>
      </div>
    </section>
  )
}

export default Skills