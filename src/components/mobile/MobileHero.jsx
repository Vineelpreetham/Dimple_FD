import React, { useState, useCallback, useRef } from 'react';

const SLIDES = [
  {
    id: 'pink',
    src: 'https://ik.imagekit.io/Nouskun/Dimple/Home/OB2449469_right_3.png?tr=f-auto,q-75,w-900',
    bg: '#F9F6F8',
    glow: '#e8b4c8',
    titleColor: '#C0758D',
  },
  {
    id: 'gold',
    src: 'https://ik.imagekit.io/Nouskun/Dimple/Home/Blue_use.png?tr=f-auto,q-75,w-900',
    bg: '#F9F8F2',
    glow: '#e8d080',
    titleColor: '#B0986A',
  },
  {
    id: 'maroon',
    src: 'https://ik.imagekit.io/Nouskun/Dimple/Home/maroon%20use.png?tr=f-auto,q-75,w-900',
    bg: '#F8F5F6',
    glow: '#d4a0b0',
    titleColor: '#8E5865',
  },
  {
    id: 'blue',
    src: 'https://ik.imagekit.io/Nouskun/Dimple/Home/lavender_use.png?tr=f-auto,q-75,w-900',
    bg: '#F4F6FA',
    glow: '#9ab4d8',
    titleColor: '#6F88A6',
  },
];

export default function MobileHero() {
  const [active, setActive] = useState(0);
  const [sliding, setSliding] = useState(false);
  const touchStart = useRef(null);
  const touchEnd = useRef(null);
  const MIN_SWIPE = 48;

  const goTo = useCallback((idx) => {
    if (sliding) return;
    setSliding(true);
    setActive(idx);
    setTimeout(() => setSliding(false), 500);
  }, [sliding]);

  const next = useCallback(() => goTo((active + 1) % SLIDES.length), [active, goTo]);
  const prev = useCallback(() => goTo((active - 1 + SLIDES.length) % SLIDES.length), [active, goTo]);

  const onTouchStart = (e) => { touchStart.current = e.targetTouches[0].clientX; };
  const onTouchMove  = (e) => { touchEnd.current = e.targetTouches[0].clientX; };
  const onTouchEnd   = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const delta = touchStart.current - touchEnd.current;
    if (Math.abs(delta) >= MIN_SWIPE) delta > 0 ? next() : prev();
    touchStart.current = null;
    touchEnd.current = null;
  };

  const slide = SLIDES[active];

  return (
    <section
      className="mh-hero"
      style={{ background: slide.bg }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Soft glow — CSS only, no blend modes */}
      <div className="mh-glow" style={{ background: slide.glow }} />

      {/* "Portfolio" title */}
      <h1 className="mh-title" style={{ color: slide.titleColor }}>
        Portfolio
      </h1>

      {/* Model images — CSS crossfade via opacity */}
      <div className="mh-images">
        {SLIDES.map((s, i) => (
          <img
            key={s.id}
            src={s.src}
            alt="Fashion model"
            className="mh-model"
            style={{ opacity: i === active ? 1 : 0 }}
            draggable={false}
            fetchpriority={i === 0 ? 'high' : 'low'}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      {/* Dot indicators */}
      <div className="mh-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`mh-dot${i === active ? ' mh-dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Swipe hint */}
      <p className="mh-hint">Swipe to explore</p>
    </section>
  );
}
