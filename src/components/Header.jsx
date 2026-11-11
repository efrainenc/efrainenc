import React, { useEffect, useState } from 'react';
import { scrollToTarget } from '../lib/scroll';
import '../css/Header.css';

const LINKS = [
  { n: '01', label: 'About', target: '#aboutMe' },
  { n: '02', label: 'Skills', target: '#skills' },
  { n: '03', label: 'Projects', target: '#projects' },
  { n: '04', label: 'Contact', target: '#contactMe' },
];

const RESUME =
  'https://docs.google.com/document/d/10W3QkQ4qblCWNu1jrTB4JLTZrNNZWe4EXcJhQmd-hbw/edit?usp=sharing';

const Header=()=>{
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const ids = ['aboutMe', 'skills', 'projects', 'contactMe'];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    const home = document.getElementById('home');
    const ioHome = new IntersectionObserver(
      ([e]) => e.isIntersecting && setActive(''),
      { rootMargin: '-45% 0px -45% 0px' }
    );
    if (home) ioHome.observe(home);
    return () => {
      io.disconnect();
      ioHome.disconnect();
    };
  }, []);

  const go = (target) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollToTarget(target);
  };

  return(
    <header className={`header${open ? ' isOpen' : ''}`}>
      <a className='headerLogo' href='#home' onClick={go('#home')} aria-label='Back to top'>
        <span className='headerUser'>efrain</span>
        <span className='headerAt'>@</span>
        <span className='headerHost'>orlando</span>
        <span className='headerPath'>:~$</span>
        <span className='caret' />
      </a>

      <button
        className='headerToggle'
        aria-expanded={open}
        aria-controls='nav'
        onClick={() => setOpen((o) => !o)}
      >
        {open ? '[ close ]' : '[ menu ]'}
      </button>

      <nav id='nav' className='headerNav'>
        {LINKS.map((l) => (
          <a
            key={l.target}
            href={l.target}
            onClick={go(l.target)}
            className={active === l.target ? 'isActive' : ''}
          >
            <span>{l.n}.</span> {l.label}
          </a>
        ))}
        <a id='resume' href={RESUME} target='_blank' rel='noreferrer'>Resume</a>
      </nav>
    </header>
  )
}

export default Header