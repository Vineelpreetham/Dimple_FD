import React, { useState, useRef, useCallback } from 'react';

const SLIDES = [
  {
    id: 'brand_projects',
    title: 'Brand Projects',
    sub: 'Curated Fragments',
    num: '01',
    desc: 'Concepts become identities — bold, intentional, built to last.',
    img: 'https://ik.imagekit.io/Nouskun/Dimple/Brand/5/6.jpg?tr=f-auto,q-70,w-900',
  },
  {
    id: 'design_projects',
    title: 'Design Projects',
    sub: 'Selected Works',
    num: '02',
    desc: 'Concepts crafted into visual stories worth telling.',
    img: 'https://ik.imagekit.io/Nouskun/Dimple/design%20/4/2.jpg?tr=f-auto,q-70,w-900',
  },
  {
    id: 'tech_flat',
    title: 'Tech Flat',
    sub: 'Technical Archetypes',
    num: '03',
    desc: 'Silhouettes before stitches — precise technical drawings.',
    img: 'https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%209.png?tr=f-auto,q-70,w-900',
    contain: true,
  },
  {
    id: 'organic_structures',
    title: 'Organic Textures',
    sub: 'Nature & Geometry',
    num: '04',
    desc: 'Bio-morphic forms where every collection begins.',
    img: 'https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4645.HEIC?tr=f-auto,q-70,w-900',
  },
];

export default function MobileCuratedCarousel({ onSelectPage }) {
  const [idx, setIdx]   = useState(0);
  const [busy, setBusy] = useState(false);
  const touchStart = useRef(null);
  const touchEnd   = useRef(null);
  const MIN_SWIPE  = 44;

  const go = useCallback((next) => {
    if (busy) return;
    const c = (next + SLIDES.length) % SLIDES.length;
    if (c === idx) return;
    setBusy(true);
    setIdx(c);
    setTimeout(() => setBusy(false), 420);
  }, [busy, idx]);

  const next = () => go(idx + 1);
  const prev = () => go(idx - 1);

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchMove  = (e) => { touchEnd.current   = e.touches[0].clientX; };
  const onTouchEnd   = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const delta = touchStart.current - touchEnd.current;
    if (Math.abs(delta) >= MIN_SWIPE) delta > 0 ? next() : prev();
    touchStart.current = null;
    touchEnd.current   = null;
  };

  return (
    <div
      className="mcc-root"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Horizontal track — all slides side-by-side, slide via translateX */}
      <div
        className="mcc-track"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {SLIDES.map((slide, i) => (
          <div className="mcc-slide" key={slide.id}>
            <button
              className="mcc-card"
              onClick={() => onSelectPage(slide.id)}
              tabIndex={i === idx ? 0 : -1}
            >
              {/* Image */}
              <div className="mcc-img" style={{ background: slide.contain ? '#f5f5f0' : '#1a1a1a' }}>
                <img
                  src={slide.img}
                  alt={slide.title}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  style={{ objectFit: slide.contain ? 'contain' : 'cover' }}
                />
              </div>

              {/* Text */}
              <div className="mcc-body">
                <div>
                  <span className="mcc-num">{slide.num} / {String(SLIDES.length).padStart(2,'0')}</span>
                  <span className="mcc-sub">{slide.sub}</span>
                  <h3 className="mcc-title">{slide.title}</h3>
                  <p className="mcc-desc">{slide.desc}</p>
                </div>
                <span className="mcc-cta">View Collection →</span>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mcc-bar">
        <button className="mcc-arrow" onClick={prev} aria-label="Previous">←</button>

        <div className="mcc-pips">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`mcc-pip${i === idx ? ' mcc-pip--on' : ''}`}
              onClick={() => go(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <button className="mcc-arrow" onClick={next} aria-label="Next">→</button>
      </div>
    </div>
  );
}
