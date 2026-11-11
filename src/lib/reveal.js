import gsap from 'gsap';

/**
 * Standard entrance reveals inside a component's gsap.context:
 *  - [data-title-line] rises from its mask
 *  - [data-reveal] fades/slides up
 * Content stays visible by default in CSS; initial states are set here only
 * when motion is allowed.
 */
export function revealIn(root) {
  root.querySelectorAll('[data-title-line]').forEach((el) => {
    gsap.from(el, {
      yPercent: 110,
      duration: 1.1,
      ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' },
    });
  });
  root.querySelectorAll('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' },
    });
  });
}
