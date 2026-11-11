import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { scrollState, prefersReducedMotion } from '../lib/scroll';
import '../css/Marquee.css';

const ROW_A = [
  'sudo su -',
  'chmod +x exploit.sh',
  'nmap -sV -p-',
  'grep -r "password"',
  'ssh -i ~/.ssh/id_ed25519',
  'iptables -A INPUT -j DROP',
  'cat /etc/shadow',
  'chown root:root',
];
const ROW_B = [
  'rm -rf /tmp/*',
  'tail -f /var/log/auth.log',
  'kill -9 $(pidof bug)',
  'tcpdump -i eth0',
  'zero trust',
  'curl -sI | head',
  'systemctl status sshd',
  'openssl enc -aes-256-cbc',
];

const Row = ({ items, outline, rowRef }) => (
  <div className={`marqueeRow${outline ? ' isOutline' : ''}`} ref={rowRef}>
    {[0, 1].map((dup) => (
      <div className='marqueeSet' key={dup} aria-hidden={dup === 1}>
        {items.map((t) => (
          <span key={`${dup}-${t}`}>
            {t}
            <em>✦</em>
          </span>
        ))}
      </div>
    ))}
  </div>
);

/** Two skewed tickers. Base drift + scroll velocity drive their speed. */
const Marquee=()=>{
  const a = useRef(null);
  const b = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const rows = [
      { el: a.current, dir: -1, x: 0 },
      { el: b.current, dir: 1, x: 0 },
    ];
    const widths = rows.map((r) => r.el.firstChild.offsetWidth);
    let w = widths;
    const measure = () => {
      w = rows.map((r) => r.el.firstChild.offsetWidth);
    };
    window.addEventListener('resize', measure);

    const tick = () => {
      const boost = Math.abs(scrollState.vel) * 0.9;
      rows.forEach((r, i) => {
        const speed = (0.9 + boost) * r.dir * (scrollState.dir < 0 && boost > 0.4 ? -1 : 1);
        r.x += speed;
        const width = w[i] || 1;
        if (r.x <= -width) r.x += width;
        if (r.x > 0) r.x -= width;
        r.el.style.transform = `translate3d(${r.x}px,0,0)`;
      });
    };
    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener('resize', measure);
    };
  }, []);

  return(
    <div className='marquee' aria-hidden='true'>
      <div className='marqueeTilt'>
        <Row items={ROW_A} rowRef={a} />
        <Row items={ROW_B} outline rowRef={b} />
      </div>
    </div>
  )
}

export default Marquee