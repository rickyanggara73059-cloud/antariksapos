import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Check, Download, KeyRound, Package, QrCode, Store } from 'lucide-react';
import { guides } from './guides';
import { whatsappHref } from './config';
import './guides.css';

const readStorageKey = 'antariksa-guide-read-v1';
const guideIcons = [Download, KeyRound, Store, Package, QrCode];

function initialReadIds(): string[] {
  try {
    const stored: unknown = JSON.parse(localStorage.getItem(readStorageKey) ?? '[]');
    return Array.isArray(stored) ? guides.filter(guide => stored.includes(guide.id)).map(guide => guide.id) : [];
  } catch { return []; }
}

export default function GuideCenter() {
  const [selected, setSelected] = useState(0);
  const [readIds, setReadIds] = useState(initialReadIds);
  const detailTitle = useRef<HTMLHeadingElement>(null);
  const listTitle = useRef<HTMLHeadingElement>(null);
  const selectedByUser = useRef(false);
  const guide = guides[selected];
  const isRead = readIds.includes(guide.id);

  useEffect(() => {
    try { localStorage.setItem(readStorageKey, JSON.stringify(readIds)); } catch { /* Progress remains available in memory. */ }
  }, [readIds]);

  useEffect(() => {
    if (selectedByUser.current) detailTitle.current?.focus();
  }, [selected]);

  function selectGuide(index: number) {
    selectedByUser.current = true;
    if (index === selected) detailTitle.current?.focus();
    setSelected(index);
  }

  return <section className="section guide-center" id="panduan" aria-labelledby="panduan-heading">
    <div className="container">
      <div className="guide-intro"><div><div className="eyebrow"><BookOpen size={15} /> PELAJARI APLIKASINYA</div><h2 id="panduan-heading">Pusat Panduan<br /><span>ANTARIKSA POS.</span></h2></div><p>Kenali materi penggunaan dari instalasi hingga pengajuan QRIS. Bagian yang belum memiliki bukti alur ditandai agar Anda dapat melanjutkan bersama tim.</p></div>
      <div className="guide-progress"><div><span aria-live="polite">{readIds.length} dari {guides.length} materi ditandai dibaca</span><button type="button" disabled={!readIds.length} onClick={() => setReadIds([])}>Reset status baca</button></div><progress value={readIds.length} max={guides.length} aria-label="Jumlah materi panduan yang ditandai sudah dibaca" /><p>Status ini hanya catatan baca di browser Anda, bukan status keberhasilan akun, toko, produk, atau QRIS.</p></div>
      <div className="guide-layout">
        <nav className="guide-list" aria-label="Daftar tutorial"><h3 id="daftar-panduan" ref={listTitle} tabIndex={-1}>Daftar tutorial</h3><ol>{guides.map((item, index) => { const Icon = guideIcons[index]; return <li key={item.id}><button type="button" aria-pressed={selected === index} aria-controls="panduan-detail" onClick={() => selectGuide(index)}><span className="guide-list-number">0{index + 1}</span><span className="guide-list-text"><strong>{item.title}</strong><small>{item.status}</small>{readIds.includes(item.id) && <small className="guide-read-indicator"><Check size={12} /> Ditandai dibaca</small>}</span><Icon size={18} aria-hidden="true" /></button></li>; })}</ol></nav>
        <article className="guide-detail" id="panduan-detail" aria-labelledby="panduan-detail-title">
          <div className="guide-detail-heading"><span className={`guide-status${guide.status === 'Sebagian terverifikasi' ? ' guide-status--partial' : ''}`}>{guide.status} · belum lengkap</span><span className="guide-page">0{selected + 1} / 05</span></div>
          <h3 id="panduan-detail-title" ref={detailTitle} tabIndex={-1}>{guide.title}</h3><p className="guide-summary">{guide.summary}</p>
          <div className="guide-notice" id={guide.id === 'download' ? 'panduan-status-download' : undefined}>{guide.note}</div>
          <ol className="guide-steps">{guide.steps.map((step, index) => <li key={`${guide.id}-${index}`}><span className="guide-step-number" aria-hidden="true">{index + 1}</span><div><h4>{step.title}</h4><span className={`guide-step-evidence${step.verified ? ' is-verified' : ''}`}>{step.verified ? 'Terlihat pada screenshot' : 'Konfirmasi bersama tim'}</span><p>{step.text}</p></div></li>)}</ol>
          {guide.images ? <div className={`guide-evidence${guide.id === 'qris' ? ' guide-evidence--portrait' : ''}`}><h4>Cuplikan aplikasi asli</h4>{guide.images.map(item => <figure key={item.src}><a href={item.src} target="_blank" rel="noopener noreferrer" aria-label={`Buka gambar: ${item.caption} (tab baru)`}><img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" /></a><figcaption>{item.caption}</figcaption></figure>)}</div> : <div className="guide-missing-image"><BookOpen size={24} aria-hidden="true" /><p>Screenshot tutorial ini belum tersedia.<br />Tidak ada tampilan aplikasi yang direka ulang.</p></div>}
          <div className="guide-missing"><h4>Materi yang masih diperlukan</h4><ul>{guide.missing.map(item => <li key={item}>{item}</li>)}</ul></div>
          <div className="guide-actions"><button type="button" className="guide-read-button" aria-pressed={isRead} onClick={() => setReadIds(current => isRead ? current.filter(id => id !== guide.id) : [...current, guide.id])}><Check size={16} />{isRead ? 'Sudah dibaca — batalkan tanda' : 'Tandai materi ini telah dibaca'}</button><a href={whatsappHref} target="_blank" rel="noopener noreferrer">Konsultasikan panduan <ArrowUpRight size={16} /><span className="sr-only"> (WhatsApp, tab baru)</span></a></div>
          <nav className="guide-pagination" aria-label="Navigasi tutorial"><a href="#daftar-panduan" onClick={() => listTitle.current?.focus({ preventScroll: true })}><ArrowLeft size={15} /> Kembali ke daftar</a>{selected < guides.length - 1 ? <button type="button" onClick={() => selectGuide(selected + 1)}>Tutorial berikutnya <ArrowRight size={15} /><span className="sr-only">: {guides[selected + 1].title}</span></button> : <button type="button" onClick={() => selectGuide(0)}>Ke tutorial pertama <ArrowRight size={15} /></button>}</nav>
        </article>
      </div>
    </div>
  </section>;
}
