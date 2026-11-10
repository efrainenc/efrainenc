import gsap from 'gsap';

const GLYPHS = '!<>-_\\/[]{}=+*^?#%$&01';

/**
 * "Decrypt" an element's text: characters resolve left to right from noise.
 * Returns the gsap tween so callers can pause / kill it.
 */
export function scramble(el, text, { duration = 1, delay = 0, ease = 'none' } = {}) {
  const state = { p: 0 };
  return gsap.to(state, {
    p: 1,
    duration,
    delay,
    ease,
    onUpdate() {
      const settled = Math.floor(state.p * text.length);
      let out = '';
      for (let i = 0; i < text.length; i += 1) {
        const ch = text[i];
        if (i < settled || ch === ' ') out += ch;
        else out += GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      el.textContent = out;
    },
    onComplete() {
      el.textContent = text;
    },
  });
}

/** Re-scramble any [data-scramble] element on hover. */
export function bindHoverScramble(root) {
  const nodes = root.querySelectorAll('[data-scramble]');
  const cleanups = [];
  nodes.forEach((node) => {
    const original = node.textContent;
    let tween;
    const enter = () => {
      if (tween) tween.kill();
      tween = scramble(node, original, { duration: 0.5 });
    };
    node.addEventListener('mouseenter', enter);
    cleanups.push(() => {
      node.removeEventListener('mouseenter', enter);
      if (tween) tween.kill();
      node.textContent = original;
    });
  });
  return () => cleanups.forEach((fn) => fn());
}
