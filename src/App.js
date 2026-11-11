import { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './css/App.css';
import Header from './components/Header'
import Home from './components/Home'
import Marquee from './components/Marquee'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import ContactMe from './components/ContactMe'
import Projects from './components/Projects'
import Background from './components/Background';
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Hud from './components/Hud'
import {
  initSmoothScroll,
  stopScroll,
  startScroll,
  trackNativeScroll,
  prefersReducedMotion,
} from './lib/scroll';

const seenBoot = () => {
  try {
    return sessionStorage.getItem('booted') === '1';
  } catch (e) {
    return false;
  }
};

function App() {
  const [showLoader] = useState(() => !prefersReducedMotion() && !seenBoot());
  const [ready, setReady] = useState(!showLoader);

  useEffect(() => {
    const cleanups = [];
    if (prefersReducedMotion()) cleanups.push(trackNativeScroll());
    else cleanups.push(initSmoothScroll());
    if (showLoader) stopScroll();

    // layout shifts from fonts/images move pinned positions: re-measure
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
    return () => {
      window.removeEventListener('load', refresh);
      cleanups.forEach((fn) => fn());
    };
  }, [showLoader]);

  const done = () => {
    try {
      sessionStorage.setItem('booted', '1');
    } catch (e) {
      /* ignore */
    }
    setReady(true);
    startScroll();
    ScrollTrigger.refresh();
  };

  return (
    <div className="App">
      {showLoader && <Loader onDone={done} />}
      <Cursor />
      <Hud />
      <Header />
      <main>
        <Home ready={ready} />
        <Marquee />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </main>
      <Background />
    </div>
  );
}

export default App;
