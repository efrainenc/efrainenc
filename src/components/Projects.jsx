import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from './SectionTitle';
import { revealIn } from '../lib/reveal';
import '../css/Projects.css';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    name: 'Travelogue',
    img: 'https://i.gyazo.com/a58e1fdb0a1a097b63abbab19b7741cd.jpg',
    desc: 'A Full stack travel app that helps you plan, track and log your trips w/OAuth2.0 for Google Authentication',
    tech: ['Django', 'Python', 'OAuth2.0', 'PostgreSQL', 'Bootstrap'],
    links: [
      ['Demo', 'https://travelogue.herokuapp.com'],
      ['GitHub', 'https://github.com/evanenc/travelogue'],
    ],
  },
  {
    name: 'FotoBook',
    img: 'https://i.gyazo.com/13e2920de1b35e6b31e236490f445bdc.png',
    desc: 'A Full stack app collaboration that recreates the Instagram user experience. Utilizing MERN stack and JWT Authentication. Complete with full CRUD operations hitting all RESTful API calls.',
    tech: ['MERN Stack', 'JavaScript', 'HTML', 'CSS'],
    links: [
      ['Demo', 'https://fotobook-dark.netlify.app/'],
      ['GitHub', 'https://github.com/efrainenc/project-3-fe/tree/efrain_dev'],
    ],
  },
  {
    name: 'HAPI HOUR',
    img: 'https://camo.githubusercontent.com/81f8a71f750107cd04914867f2d42645934782171a222a26a287018d8708b386/68747470733a2f2f696d6775722e636f6d2f43784558506b442e6a7067',
    desc: 'A React app collaboration that utilizes API calls to provide the user with any cocktail of various categories.',
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    links: [
      ['Demo', 'https://HAPI-HOUR.netlify.app/'],
      ['Repo', 'https://github.com/cbowman422/hapi-hour'],
    ],
  },
  {
    name: 'Simon Says',
    img: 'https://camo.githubusercontent.com/19afd36991f68237a6c4bde3b927b9fa6298d1bb5e920e3dd444fadc7b15753b/68747470733a2f2f692e6779617a6f2e636f6d2f63386333393038613036303031383938663263626362316535623338656431332e6a7067',
    desc: 'A classic Windows themed Simon Says game! Created with JS, HTML, and CSS, This was the very first game that I created to start my journey as a software developer!',
    tech: ['JavaScript', 'HTML', 'CSS'],
    links: [
      ['Demo', 'https://efrainenc.github.io/Project-1-Game/'],
      ['GitHub', 'https://github.com/efrainenc/Project-1-Game'],
    ],
  },
];

const Projects=()=>{
  const root = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        revealIn(root.current);

        const cards = gsap.utils.toArray('.projectCard');
        cards.forEach((card, i) => {
          // image parallax inside its frame
          gsap.fromTo(
            card.querySelector('.projectImage img'),
            { yPercent: -9 },
            {
              yPercent: 9,
              ease: 'none',
              scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true },
            }
          );

          // big index number drifts
          gsap.fromTo(
            card.querySelector('.projectNumber'),
            { yPercent: 25 },
            {
              yPercent: -25,
              ease: 'none',
              scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true },
            }
          );

          // stacking: as the next card slides over, this one recedes
          const next = cards[i + 1];
          if (next) {
            gsap.to(card.querySelector('.projectSheet'), {
              scale: 0.9,
              opacity: 0.25,
              filter: 'blur(3px)',
              ease: 'none',
              scrollTrigger: {
                trigger: next,
                start: 'top bottom',
                end: 'top top',
                scrub: true,
              },
            });
          }
        });
      });
    }, root);
    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return(
    <section id='projects' ref={root}>
      <div className='projectsHead'>
        <SectionTitle n='03' cmd='ls ~/projects'>Projects</SectionTitle>
      </div>

      <div className='mainProjects'>
        {PROJECTS.map((p, i) => (
          <article className='projectCard' key={p.name}>
            <div className='projectSheet'>
              <span className='projectNumber' aria-hidden='true'>{String(i + 1).padStart(2, '0')}</span>

              <div className='projectInfo'>
                <p className='projectCmd'>$ man {p.name.toLowerCase().replace(/\s+/g, '-')}</p>
                <h3 className='projectName'>{p.name}</h3>
                <p className='projectDesc'>{p.desc}</p>
                <ul className='projTech' aria-label='Tech stack'>
                  {p.tech.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <div className='projLinks'>
                  {p.links.map(([label, href]) => (
                    <a key={label} href={href} target='_blank' rel='noreferrer'>
                      [{label}]
                    </a>
                  ))}
                </div>
              </div>

              <a className='projectImage' href={p.links[0][1]} target='_blank' rel='noreferrer' aria-label={`${p.name} – open demo`}>
                <div className='projectChrome'>
                  <i /><i /><i /><span>{p.name.toLowerCase().replace(/\s+/g, '-')}.sh</span>
                </div>
                <div className='projectFrame'>
                  <img src={p.img} alt={`${p.name} screenshot`} loading='lazy' />
                  <span className='projectScan' />
                </div>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects