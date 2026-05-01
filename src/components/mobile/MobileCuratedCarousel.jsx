import React, { useState, useRef, useCallback } from 'react';

const SLIDES = [
  {
    id: 'brand_projects',
    title: 'Brand Projects',
    sub: 'Curated Fragments',
    num: '01',
    desc: 'Concepts become identities — bold, intentional, built to last.',
    img: 'https://ik.imagekit.io/Nouskun/Dimple/Brand/5/6.jpg?tr=f-auto,q-70,w-900',
    accent: '#c4a882',
  },
  {
    id: 'design_projects',
    title: 'Design Projects',
    sub: 'Selected Works',
    num: '02',
    desc: 'Concepts crafted into visual stories worth telling.',
    img: 'https://ik.imagekit.io/Nouskun/Dimple/design%20/4/2.jpg?tr=f-auto,q-70,w-900',
    accent: '#a882b4',
  },
  {
    id: 'tech_flat',
    title: 'Tech Flat',
    sub: 'Technical Archetypes',
    num: '03',
    desc: 'Silhouettes before stitches — precise technical drawings.',
    img: 'https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%209.png?tr=f-auto,q-70,w-900',
    accent: '#82a8c4',
    contain: true,
  },
  {
    id: 'organic_structures',
    title: 'Organic Textures',
    sub: 'Nature & Geometry',
    num: '04',
    desc: 'Bio-morphic forms where every collection begins.',
    img: 'https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4645.HEIC?tr=f-auto,q-70,w-900',
    accent: '#a8c482',
  },
];

const DURATION = 400;

export default function MobileCuratedCarousel({ onSelectPage }) {
  const [idx, setIdx]         = useState(0);
  const [prevIdx, setPrevIdx] = useState(null);
  const [dir, setDir]         = useState(1);
  const [busy, setBusy]       = useState(false);
  const touchStart = useRef(null);
  const touchEnd   = useRef(null);
  const MIN_SWIPE  = 44;

  const go = useCallback((next, d) => {
    if (busy) return;
    const c = (next + SLIDES.length) % SLIDES.length;
    if (c === idx) return;
    setBusy(true);
    setDir(d);
    setPrevIdx(idx);
    setIdx(c);
    setTimeout(() => { setPrevIdx(null); setBusy(false); }, DURATION);
  }, [busy, idx]);

  const next = () => go(idx + 1,  1);
  const prev = () => go(idx - 1, -1);

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchMove  = (e) => { touchEnd.current   = e.touches[0].clientX; };
  const onTouchEnd   = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const delta = touchStart.current - touchEnd.current;
    if (Math.abs(delta) >= MIN_SWIPE) delta > 0 ? next() : prev();
    touchStart.current = null;
    touchEnd.current   = null;
  };

  const slide = SLIDES[idx];

  return (
    <div
      className="mcc-root"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Background colour transitions with the slide */}
      <div
        className="mcc-bg"
        style={{ background: `${slide.accent}22` }}
      />

      {/* Slide stack */}
      <div className="mcc-stage">
        {/* Exiting slide */}
        {prevIdx !== null && (
          <div
            key={`exit-${prevIdx}`}
            className="mcc-slide mcc-slide--exit"
            style={{
              '--tx': dir > 0 ? '-55%' : '55%',
              '--scale': '0.88',
            }}
          >
            <SlideContent slide={SLIDES[prevIdx]} onSelect={onSelectPage} />
          </div>
        )}

        {/* Active slide */}
        <div
          key={`active-${idx}`}
          className={`mcc-slide mcc-slide--enter${prevIdx !== null ? ' mcc-slide--active' : ''}`}
          style={{
            '--tx-from': dir > 0 ? '100%' : '-100%',
          }}
        >
          <SlideContent slide={slide} onSelect={onSelectPage} />
        </div>
      </div>

      {/* Bottom bar — counter, progress, arrows */}
      <div className="mcc-bar">
        <button className="mcc-arrow" onClick={prev} aria-label="Previous">←</button>

        <div className="mcc-progress-wrap">
          <div className="mcc-num">
            <span className="mcc-num-big">{slide.num}</span>
            <span className="mcc-num-total">/ {String(SLIDES.length).padStart(2,'0')}</span>
          </div>
          <div className="mcc-track">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`mcc-pip${i === idx ? ' mcc-pip--on' : ''}`}
                onClick={() => go(i, i > idx ? 1 : -1)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <button className="mcc-arrow" onClick={next} aria-label="Next">→</button>
      </div>
    </div>
  );
}

function SlideContent({ slide, onSelect }) {
  return (
    <button className="mcc-content" onClick={() => onSelect(slide.id)}>
      {/* Image */}
      <div className="mcc-img-wrap" style={{ background: slide.contain ? '#f5f5f0' : 'transparent' }}>
        <img
          src={slide.img}
          alt={slide.title}
          loading="lazy"
          decoding="async"
          style={{ objectFit: slide.contain ? 'contain' : 'cover' }}
        />
        <div className="mcc-img-overlay" />
      </div>

      {/* Info */}
      <div className="mcc-info">
        <div>
          <span className="mcc-sub">{slide.sub}</span>
          <h3 className="mcc-title">{slide.title}</h3>
          <p className="mcc-desc">{slide.desc}</p>
        </div>
        <span className="mcc-cta">View Collection →</span>
      </div>
    </button>
  );
}
