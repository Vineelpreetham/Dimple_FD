import React, { useState, useRef, useCallback, useEffect } from 'react';

function isVideo(src) {
  return /\.(mp4|mov|webm|MOV|MP4)(\?|$)/i.test(src);
}
function opt(url) {
  if (!url || isVideo(url)) return url;
  const [base, qs] = url.split('?');
  const p = new URLSearchParams(qs || '');
  if (!p.has('tr')) p.set('tr', 'f-auto,q-80,w-1200');
  return `${base}?${p}`;
}

export default function MobileSwipeGallery({ title, label, items, onBack, bg }) {
  const [idx, setIdx]         = useState(0);
  const [exiting, setExiting] = useState(null); // { idx, dir }
  const [animating, setAnimating] = useState(false);
  const rootRef    = useRef(null);
  const videoRef   = useRef(null);
  const touchPos   = useRef(null);   // { x, y }
  const locked     = useRef(null);   // 'h' | 'v' | null
  const MIN_SWIPE  = 44;
  const DURATION   = 380;

  const go = useCallback((next, dir) => {
    if (animating) return;
    const clamped = (next + items.length) % items.length;
    if (clamped === idx) return;
    setAnimating(true);
    setExiting({ idx, dir });
    setIdx(clamped);
    setTimeout(() => { setExiting(null); setAnimating(false); }, DURATION);
  }, [animating, idx, items.length]);

  const goNext = useCallback(() => go(idx + 1,  1), [go, idx]);
  const goPrev = useCallback(() => go(idx - 1, -1), [go, idx]);

  // Non-passive touch listeners — required to call preventDefault()
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

      // Block page scroll only for horizontal swipes
      if (locked.current === 'h') e.preventDefault();
    };

    const onEnd = (e) => {
      if (!touchPos.current || locked.current !== 'h') {
        touchPos.current = null;
        locked.current = null;
        return;
      }
      const delta = touchPos.current.x - e.changedTouches[0].clientX;
      if (Math.abs(delta) >= MIN_SWIPE) delta > 0 ? goNext() : goPrev();
      touchPos.current = null;
      locked.current = null;
    };

    // passive:false is the key — React's synthetic events are always passive
    el.addEventListener('touchstart', onStart, { passive: true });
    el.addEventListener('touchmove',  onMove,  { passive: false });
    el.addEventListener('touchend',   onEnd,   { passive: true });
    return () => {
      el.removeEventListener('touchstart', onStart);
      el.removeEventListener('touchmove',  onMove);
      el.removeEventListener('touchend',   onEnd);
    };
  }, [goNext, goPrev]);

  // Auto-play video on slide change
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [idx]);

  // CSS for slide animation
  const DURATION_S = DURATION / 1000;
  const enterStyle = (dir) => ({
    transform: `translateX(${dir > 0 ? '100%' : '-100%'}) scale(1.06)`,
    opacity: 0,
    filter: 'blur(8px)',
  });
  const activeStyle = {
    transform: 'translateX(0) scale(1)',
    opacity: 1,
    filter: 'blur(0px)',
    transition: `transform ${DURATION_S}s cubic-bezier(0.32,0.72,0,1),
                 opacity   ${DURATION_S * 0.7}s ease,
                 filter    ${DURATION_S * 0.8}s ease`,
  };
  const exitStyle = (dir) => ({
    transform: `translateX(${dir > 0 ? '-55%' : '55%'}) scale(0.92)`,
    opacity: 0,
    filter: 'blur(8px)',
    transition: `transform ${DURATION_S}s cubic-bezier(0.32,0.72,0,1),
                 opacity   ${DURATION_S * 0.6}s ease,
                 filter    ${DURATION_S * 0.7}s ease`,
  });

  const item = items[idx];
  const isVid = isVideo(item.src);

  return (
    <div ref={rootRef} className="msg-root" style={{ background: bg || '#111' }}>

      {/* Exiting slide */}
      {exiting && (
        <div className="msg-media" style={exitStyle(exiting.dir)}>
          {isVideo(items[exiting.idx].src) ? (
            <video className="msg-video" muted playsInline preload="none">
              <source src={items[exiting.idx].src} />
            </video>
          ) : (
            <img src={opt(items[exiting.idx].src)} alt="" className="msg-img" draggable={false} />
          )}
        </div>
      )}

      {/* Entering / active slide */}
      <div
        className="msg-media"
        style={exiting ? { ...enterStyle(exiting.dir) } : {}}
        ref={(el) => {
          if (el && exiting) {
            requestAnimationFrame(() => requestAnimationFrame(() => {
              Object.assign(el.style, activeStyle);
            }));
          }
        }}
      >
        {isVid ? (
          <video ref={videoRef} key={item.src} className="msg-video"
            playsInline loop muted controls={false} preload="metadata">
            <source src={item.src} />
          </video>
        ) : (
          <img
            key={item.src}
            src={opt(item.src)}
            alt={item.alt || `Slide ${idx + 1}`}
            className="msg-img"
            loading={idx === 0 ? 'eager' : 'lazy'}
            decoding="async"
            draggable={false}
          />
        )}
      </div>

      <div className="msg-top-grad" />
      <div className="msg-bot-grad" />

      {/* Header */}
      <div className="msg-header">
        <button className="msg-back" onClick={onBack} aria-label="Back">←</button>
        <div className="msg-title-wrap">
          {label && <span className="msg-label">{label}</span>}
          <span className="msg-title">{title}</span>
        </div>
        <span className="msg-counter">{idx + 1} / {items.length}</span>
      </div>

      {/* Progress bar */}
      <div className="msg-progress">
        <div className="msg-progress-fill" style={{ width: `${((idx + 1) / items.length) * 100}%` }} />
      </div>

      {/* Dots */}
      <div className="msg-dots">
        {items.map((_, i) => (
          <button key={i}
            className={`msg-dot${i === idx ? ' msg-dot--on' : ''}`}
            onClick={() => go(i, i > idx ? 1 : -1)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Invisible tap zones */}
      <button className="msg-zone msg-zone--left"  onClick={goPrev} aria-label="Previous" />
      <button className="msg-zone msg-zone--right" onClick={goNext} aria-label="Next" />

      {idx === 0 && <p className="msg-hint">Swipe to browse</p>}
    </div>
  );
}
