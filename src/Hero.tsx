import { useId, useState } from 'react';
import type { CSSProperties } from 'react';
import { ArrowRight, ArrowUpRight, ChartNoAxesCombined, NotebookPen, Package, Pause, Play, ShoppingBag, Smartphone } from 'lucide-react';
import { siteConfig, whatsappHref } from './config';
import './hero.css';

const orbitalFeatures = ['PRODUK', 'PENJUALAN', 'LAPORAN', 'KASBON', 'QRIS DINAMIS'];
// Two identical sets fill a circuit. Half a circuit is an exact seamless loop.
const orbitText = `${orbitalFeatures.map(feature => `✦ ${feature}`).join(' ')} `;
const orbitCharacters = [...orbitText.repeat(2)];
const cards = [
  { title: 'Produk', text: 'Kelola katalog', Icon: Package, position: 'products' },
  { title: 'Penjualan', text: 'Transaksi cepat', Icon: ShoppingBag, position: 'sales' },
  { title: 'Laporan', text: 'Pantau usaha', Icon: ChartNoAxesCombined, position: 'reports' },
  { title: 'Kasbon', text: 'Kelola piutang', Icon: NotebookPen, position: 'credit' },
];

function OrbitalRibbon({ rear = false }: { rear?: boolean }) {
  const gradientId = useId();
  return <div className={`orbital-ribbon ${rear ? 'orbital-ribbon--rear' : 'orbital-ribbon--front'}`} aria-hidden="true">
    <div className="orbital-ring-plane">
      <svg className="orbital-ring-surface" viewBox="0 0 560 300" preserveAspectRatio="none" focusable="false">
        <defs><linearGradient id={gradientId} x1="0" y1="0" x2="0.3" y2="1"><stop offset="0" stopColor="#487293" /><stop offset="0.22" stopColor="#102d47" /><stop offset="0.54" stopColor="#030b16" /><stop offset="0.82" stopColor="#173958" /><stop offset="1" stopColor="#527c9c" /></linearGradient></defs>
        <ellipse className="orbital-ring-depth" cx="280" cy="156" rx="257.6" ry="111" />
        <ellipse className="orbital-ring-band" style={{ stroke: `url(#${gradientId})` }} cx="280" cy="150" rx="257.6" ry="111" />
        <ellipse className="orbital-ring-edge" cx="280" cy="150" rx="275.6" ry="129" />
        <ellipse className="orbital-ring-inner" cx="280" cy="150" rx="239.6" ry="93" />
      </svg>
      <div className="orbital-letter-track">
        {orbitCharacters.map((letter, index) => <span className={`orbital-letter${letter === '✦' ? ' orbital-letter--star' : ''}`} style={{ '--letter-position': `${(rear ? 1 : -1) * index / orbitCharacters.length * 100}%`, '--letter-travel': rear ? '50%' : '-50%' } as CSSProperties} key={index}>{letter}</span>)}
      </div>
    </div>
  </div>;
}

export default function Hero() {
  const [paused, setPaused] = useState(false);
  return <section className={`hero hero--orbital${paused ? ' orbital-paused' : ''}`} id="beranda">
    <div className="orbital-universe" aria-hidden="true"><img src="/images/hero/earth-galaxy-cinematic.jpg" alt="" width={1792} height={862} fetchPriority="high" /></div>
    <div className="orbital-stars" aria-hidden="true" />
    <div className="orbital-meteors" aria-hidden="true">
      <span className="orbital-meteor orbital-meteor--cyan" />
      <span className="orbital-meteor orbital-meteor--white" />
      <span className="orbital-meteor orbital-meteor--gold" />
    </div>
    <div className="hero-grid container">
      <div className="hero-copy">
        <div className="eyebrow light"><span />RUANG BARU UNTUK USAHA ANDA</div>
        <h1>Kelola Bisnis<br />dalam Satu<br /><span>Genggaman.</span></h1>
        <p>Kenali ANTARIKSA POS, aplikasi untuk membantu mengelola penjualan, produk, dan aktivitas usaha melalui perangkat Android.</p>
        <div className="hero-actions">
          <a href="#fitur" className="button button-gold">Lihat Fitur Aplikasi <ArrowUpRight size={19} /></a>
           <a href={siteConfig.androidDownloadUrl ?? whatsappHref} target="_blank" rel="noopener noreferrer" className="button button-outline">Download di Google Play <ArrowUpRight size={17} /><span className="sr-only"> (buka Google Play di tab baru)</span></a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="button button-outline">Konsultasi via WhatsApp<ArrowUpRight size={17} /><span className="sr-only"> (buka WhatsApp di tab baru)</span></a>
        </div>
        <div className="hero-caption"><Smartphone size={17} /><span>Dirancang untuk Android</span><i /><span>Kenali. Konsultasikan. Mulai.</span></div>
      </div>
      <div className="orbital-visual">
        <div className="orbital-stage">
          <div className="orbital-halo" aria-hidden="true" />
          <svg className="orbital-command-deck" viewBox="0 0 600 150" fill="none" aria-hidden="true"><ellipse cx="300" cy="75" rx="265" ry="55" /><ellipse cx="300" cy="75" rx="210" ry="38" /><path d="M35 75H565M300 20V130M112 36 488 114M112 114 488 36" /></svg>
          <div className="orbital-guide orbital-guide--one" aria-hidden="true" />
          <div className="orbital-guide orbital-guide--two" aria-hidden="true" />
          <OrbitalRibbon rear />
          <div className="orbital-phone-float">
            <div className="orbital-phone">
              <div className="orbital-phone-screen"><img src={siteConfig.heroScreenshot.src} alt={siteConfig.heroScreenshot.alt} width={634} height={1378} fetchPriority="high" /></div>
              <div className="orbital-glass" aria-hidden="true" />
            </div>
          </div>
          <OrbitalRibbon />
          <div className="orbital-feature-cards" aria-hidden="true">
            {cards.map(({ title, text, Icon, position }) => <div className={`orbital-card orbital-card--${position}`} key={title}><span><Icon size={20} strokeWidth={1.6} /></span><div><strong>{title}</strong><small>{text}</small></div></div>)}
          </div>
        </div>
        <div className="orbital-visual-footer"><p><span />Screenshot asli · dashboard aplikasi</p><button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? 'Lanjutkan animasi hero' : 'Jeda animasi hero'}>{paused ? <Play size={13} /> : <Pause size={13} />}<span>{paused ? 'Lanjutkan' : 'Jeda'} animasi</span></button></div>
      </div>
    </div>
    <div className="hero-bottom container"><span>USAHA ANDA, LANGKAH SELANJUTNYA.</span><a href="#fitur">Jelajahi ANTARIKSA POS <ArrowRight size={16} /></a></div>
  </section>;
}

