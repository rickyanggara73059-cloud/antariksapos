import { useState } from 'react';
import type { ReactNode } from 'react';
import { MessageCircle, Pause, Play } from 'lucide-react';

export function GalleryMotion({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  return <div className={`gallery-motion${paused ? ' gallery-motion--paused' : ''}`}>
    <div className="gallery-motion-controls"><button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? 'Lanjutkan animasi galeri' : 'Jeda animasi galeri'}>{paused ? <Play size={13} /> : <Pause size={13} />}<span>{paused ? 'Lanjutkan' : 'Jeda'} animasi galeri</span></button></div>
    {children}
  </div>;
}

export function GalleryOrbits() {
  return <div className="gallery-orbits" aria-hidden="true">
    <div className="gallery-orbit gallery-orbit--primary"><span className="gallery-orbit-node" /></div>
    <div className="gallery-orbit gallery-orbit--secondary"><span className="gallery-orbit-node" /></div>
    <div className="gallery-device-shadow" />
  </div>;
}

export function MissionPlanet({ step }: { step: number }) {
  return <div className={`mission-planet mission-planet--${step}`}>
    {step === 3 && <i className="mission-planet-ring mission-planet-ring--back" aria-hidden="true" />}
    <div className="mission-planet-sphere" aria-hidden="true"><i className="mission-planet-surface" /></div>
    {step === 3 && <i className="mission-planet-ring mission-planet-ring--front" aria-hidden="true" />}
    <span className="mission-planet-number">{String(step).padStart(2, '0')}</span>
  </div>;
}

export function MissionPath() {
  return <svg className="mission-path" viewBox="0 0 1100 160" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M0 0C200 0 350 78 550 78S900 24 1100 24" /><path d="M0 0C200 0 350 78 550 78S900 24 1100 24" className="mission-path-glow" /></svg>;
}

export function CommunicationBeacon() {
  return <div className="communication-beacon" aria-hidden="true"><span /><span /><span /><MessageCircle size={39} strokeWidth={1} /></div>;
}
