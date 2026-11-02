import { useEffect, useRef } from 'react';
import './rocket-transitions.css';

// Sparse transition bands occupy existing section padding, never document flow.
const transitions = [
  { anchor: '#galeri', reverse: false },
  { anchor: '#mulai', reverse: true },
  { anchor: '.closing', reverse: false },
] as const;

export default function RocketTransitions() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = root.current;
    const main = layer?.parentElement;
    if (!layer || !main) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobile = window.matchMedia('(max-width: 760px)');
    const bands = Array.from(layer.querySelectorAll<HTMLElement>('.rocket-transition'));
    let boundaries: number[] = [];
    let frame = 0;
    let disposed = false;

    const paint = () => {
      frame = 0;
      const viewport = window.innerHeight;
      const reduced = motion.matches;
      bands.forEach((band, index) => {
        const distance = boundaries[index] - window.scrollY;
        const progress = Math.max(0, Math.min(1, (viewport - distance) / viewport));
        const direction = transitions[index].reverse ? -1 : 1;
        const travel = mobile.matches ? 28 : 62;
        const x = reduced ? 50 : 50 + direction * (progress - .5) * travel;
        band.style.setProperty('--rocket-x', x + '%');
        band.style.setProperty('--rocket-y', (reduced ? 0 : (progress - .5) * -28) + 'px');
        band.style.setProperty('--star-shift', (reduced ? 0 : direction * (progress - .5) * 26) + 'px');
        band.style.setProperty('--dust-shift', (reduced ? 0 : direction * (progress - .5) * -55) + 'px');
        band.style.opacity = reduced ? '.85' : String(Math.min(1, progress * 7, (1 - progress) * 7));
      });
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(paint); };
    const measure = () => {
      const mainRect = main.getBoundingClientRect();
      boundaries = transitions.map(({ anchor }, index) => {
        const target = main.querySelector<HTMLElement>(anchor);
        if (!target) { bands[index].hidden = true; return 0; }
        const rect = target.getBoundingClientRect();
        bands[index].style.top = (rect.top - mainRect.top) + 'px';
        return rect.top + window.scrollY;
      });
      schedule();
    };
    const observer = new ResizeObserver(measure);
    observer.observe(main);
    for (const child of main.children) if (child !== layer) observer.observe(child);
    measure();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', measure);
    motion.addEventListener('change', schedule);
    mobile.addEventListener('change', schedule);
    document.fonts.ready.then(() => { if (!disposed) measure(); });
    return () => {
      disposed = true;
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', measure);
      motion.removeEventListener('change', schedule);
      mobile.removeEventListener('change', schedule);
    };
  }, []);

  return <div ref={root} className="rocket-transitions" aria-hidden="true">
    {transitions.map(({ anchor, reverse }) => <div key={anchor} className={
      'rocket-transition' + (reverse ? ' rocket-transition--reverse' : '')
    }>
      <div className="rocket-transition-stars" />
      <div className="rocket-transition-dust" />
      <div className="rocket-traveler"><div className="rocket-craft">
        <i className="rocket-engine-trail" />
        <img src="/images/decorations/orbital-rocket.png" alt="" width={384} height={384} decoding="async" loading="lazy" />
      </div></div>
    </div>)}
  </div>;
}
