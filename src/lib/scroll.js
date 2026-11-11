import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Shared, mutable scroll state. Read by the background canvas, HUD and marquee
 * every frame without causing React re-renders.
 */
export const scrollState = {
  y: 0,
  vel: 0, // px per frame-ish (lenis velocity)
  dir: 1,
  progress: 0,
};

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis = null;

export function initSmoothScroll() {
  if (prefersReducedMotion()) return () => {};

  lenis = new Lenis({
    lerp: 0.085,
    wheelMultiplier: 1,
    smoothWheel: true,
  });

  const onScroll = (l) => {
    scrollState.y = l.scroll;
    scrollState.vel = l.velocity || 0;
    scrollState.dir = l.direction || 1;
    scrollState.progress = l.progress || 0;
    ScrollTrigger.update();
  };
  lenis.on('scroll', onScroll);

  const tick = (t) => lenis.raf(t * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(tick);
    lenis.destroy();
    lenis = null;
  };
}

export const stopScroll = () => lenis && lenis.stop();
export const startScroll = () => lenis && lenis.start();

export function scrollToTarget(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { duration: 1.6, offset: 0 });
  else el.scrollIntoView({ behavior: 'smooth' });
}

/** Fallback progress tracking when Lenis is disabled (reduced motion). */
export function trackNativeScroll() {
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    scrollState.y = window.scrollY;
    scrollState.progress = max > 0 ? window.scrollY / max : 0;
    scrollState.vel = 0;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  return () => window.removeEventListener('scroll', onScroll);
}
