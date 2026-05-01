import React, { useState, useRef, useCallback, useEffect } from 'react';

const SLIDES = [
  {
    id: 'brand_projects',
    title: 'Brand Projects',
    sub: 'Editorial Archive',
    num: '01',
    desc: 'Concepts become identities — bold, intentional, built to last.',
    img: 'https://ik.imagekit.io/Nouskun/Dimple/Brand/5/6.jpg?tr=f-auto,q-75,w-1000',
  },
  {
    id: 'design_projects',
    title: 'Design Projects',
    sub: 'Selected Works',
    num: '02',
    desc: 'Concepts crafted into visual stories worth telling.',
    img: 'https://ik.imagekit.io/Nouskun/Dimple/design%20/4/2.jpg?tr=f-auto,q-75,w-1000',
  },
  {
    id: 'tech_flat',
    title: 'Tech Flat',
    sub: 'Technical Archetypes',
    num: '03',
    desc: 'Silhouettes before stitches — precise technical drawings.',
    img: 'https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%209.png?tr=f-auto,q-75,w-1000',
    contain: true,
  },
  {
    id: 'organic_structures',
    title: 'Organic Textures',
    sub: 'Nature & Geometry',
    num: '04',
    desc: 'Bio-morphic forms where every collection begins.',
    img: 'https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4645.HEIC?tr=f-auto,q-75,w-1000',
  },
];

const ANIM_MS = 520;

export default function MobileCuratedCarousel({ onSelectPage }) {
  const [curr, setCurr]       = useState(0);
  const [exiting, setExiting] = useState(null);
  const [dir, setDir]         = useState(1);
  const busy    = useRef(false);
  const rootRef = useRef(null);
  const touchPos = useRef(null); // { x, y }
  const locked   = useRef(null); // 'h' | 'v' | null
  const MIN_SWIPE = 44;

  const go = useCallback((next, d) => {
    if (busy.current) return;
    const c = (next + SLIDES.length) % SLIDES.length;
    if (c === curr) return;
    busy.current = true;
    setDir(d);
    setExiting({ idx: curr, dir: d });
    setCurr(c);
    setTimeout(() => { setExiting(null); busy.current = false; }, ANIM_MS);
  }, [curr]);

  const next = useCallback(() => go(curr + 1,  1), [go, curr]);
  const prev = useCallback(() => go(curr - 1, -1), [go, curr]);

  // Non-passive listeners — intercept horizontal swipes, let vertical pass through
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const onStart = (e) => {
      touchPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      locked.current = null;
    };
    const onMove = (e) => {
      if (!touchPos.current) return;
      const dx = Math.abs(e.touches[0].clientX - touchPos.current.x);
      const dy = Math.abs(e.touches[0].clientY - touchPos.current.y);
      if (!locked.current) {
        if (dx > dy + 4)      locked.current = 'h';
        else if (dy > dx + 4) locked.current = 'v';
        else return;
      }
      if (locked.current === 'h') e.preventDefault();
    };
    const onEnd = (e) => {
      if (!touchPos.current || locked.current !== 'h') {
        touchPos.current = null; locked.current = null; return;
      }
      const delta = touchPos.current.x - e.changedTouches[0].clientX;
      if (Math.abs(delta) >= MIN_SWIPE) delta > 0 ? next() : prev();
      touchPos.current = null; locked.current = null;
    };

    el.addEventListener('touchstart', onStart, { passive: true });
    el.addEventListener('touchmove',  onMove,  { passive: false });
    el.addEventListener('touchend',   onEnd,   { passive: true });
    return () => {
      el.removeEventListener('touchstart', onStart);
      el.removeEventListener('touchmove',  onMove);
      el.removeEventListener('touchend',   onEnd);
    };
  }, [next, prev]);

  const slide = SLIDES[curr];

  return (
    <div
      ref={rootRef}
      className="mcc-root"
    >
      {/* Stage — fixed height, clips everything */}
      <div className="mcc-stage">

        {/* Exiting slide */}
        {exiting !== null && (
          <div
            key={`exit-${exiting.idx}`}
            className={`mcc-slide mcc-slide--exit-${exiting.dir > 0 ? 'left' : 'right'}`}
          >
            <SlideCard slide={SLIDES[exiting.idx]} onSelect={onSelectPage} />
          </div>
        )}

        {/* Entering / active slide */}
        <div
          key={`enter-${curr}`}
          className={`mcc-slide mcc-slide--enter-${dir > 0 ? 'right' : 'left'}`}
        >
          <SlideCard slide={slide} onSelect={onSelectPage} />
        </div>

        {/* Big number overlay — top-left like desktop */}
        <div className="mcc-counter" key={curr}>
          <span className="mcc-counter-big">{slide.num}</span>
          <div className="mcc-counter-meta">
            <span className="mcc-counter-sub">{slide.sub}</span>
            <span className="mcc-counter-vol">Volume 0.1</span>
          </div>
        </div>

        {/* Scroll hint — vertical text right side like desktop */}
        <div className="mcc-scroll-hint">Swipe to explore</div>
      </div>

      {/* Glass bottom bar */}
      <div className="mcc-bar">
        <button className="mcc-arrow" onClick={prev} aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Thumbnails */}
        <div className="mcc-thumbs">
          {SLIDES.map((s, i) => (
            <button
              key={i}
              className={`mcc-thumb${i === curr ? ' mcc-thumb--on' : ''}`}
              onClick={() => go(i, i > curr ? 1 : -1)}
              aria-label={s.title}
            >
              <img src={s.img} alt={s.title} loading="lazy" decoding="async"
                style={{ objectFit: s.contain ? 'contain' : 'cover' }} />
              {i === curr && <div className="mcc-thumb-ring" />}
            </button>
          ))}
        </div>

        {/* Progress line */}
        <div className="mcc-progress">
          <div
            className="mcc-progress-fill"
            style={{ width: `${((curr + 1) / SLIDES.length) * 100}%` }}
          />
        </div>

        <button className="mcc-arrow" onClick={next} aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function SlideCard({ slide, onSelect }) {
  return (
    <button className="mcc-card" onClick={() => onSelect(slide.id)}>
      {/* Full bleed image */}
      <div className="mcc-img" style={{ background: slide.contain ? '#f0ede8' : '#16100c' }}>
        <img
          src={slide.img}
          alt={slide.title}
          loading="lazy"
          decoding="async"
          style={{ objectFit: slide.contain ? 'contain' : 'cover' }}
        />
        {/* Inner glow/depth overlay like desktop */}
        <div className="mcc-img-inner" />
      </div>

      {/* Title overlay pinned to bottom of image */}
      <div className="mcc-info">
        <h3 className="mcc-title">{slide.title}</h3>
        <p className="mcc-desc">{slide.desc}</p>
      </div>
    </button>
  );
}
