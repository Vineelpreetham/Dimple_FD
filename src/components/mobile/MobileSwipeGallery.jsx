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
  const [idx, setIdx]     = useState(0);
  const [prev, setPrev]   = useState(null);     // { idx, dir }
  const [animating, setAnimating] = useState(false);
  const touchStart  = useRef(null);
  const touchEnd    = useRef(null);
  const videoRef    = useRef(null);
  const MIN_SWIPE   = 44;
  const DURATION    = 380; // ms

  const go = useCallback((next, dir) => {
    if (animating) return;
    const clamped = (next + items.length) % items.length;
    if (clamped === idx) return;
    setAnimating(true);
    setPrev({ idx, dir });
    setIdx(clamped);
    setTimeout(() => { setPrev(null); setAnimating(false); }, DURATION);
  }, [animating, idx, items.length]);

  const next = useCallback(() => go(idx + 1,  1), [go, idx]);
  const prev_ = useCallback(() => go(idx - 1, -1), [go, idx]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [idx]);

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchMove  = (e) => { touchEnd.current   = e.touches[0].clientX; };
  const onTouchEnd   = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const delta = touchStart.current - touchEnd.current;
    if (Math.abs(delta) >= MIN_SWIPE) delta > 0 ? next() : prev_();
    touchStart.current = null;
    touchEnd.current   = null;
  };

  // CSS for entering / exiting slides
  const enterStyle = (dir) => ({
    transform: `translateX(${dir > 0 ? '100%' : '-100%'}) scale(1.04)`,
    opacity: 0,
    filter: 'blur(6px)',
  });
  const activeStyle = {
    transform: 'translateX(0) scale(1)',
    opacity: 1,
    filter: 'blur(0px)',
    transition: `transform ${DURATION}ms cubic-bezier(0.32,0.72,0,1),
                 opacity   ${DURATION * 0.7}ms ease,
                 filter    ${DURATION * 0.8}ms ease`,
  };
  const exitStyle = (dir) => ({
    transform: `translateX(${dir > 0 ? '-60%' : '60%'}) scale(0.92)`,
    opacity: 0,
    filter: 'blur(8px)',
    transition: `transform ${DURATION}ms cubic-bezier(0.32,0.72,0,1),
                 opacity   ${DURATION * 0.6}ms ease,
                 filter    ${DURATION * 0.7}ms ease`,
  });

  const item = items[idx];
  const isVid = isVideo(item.src);

  return (
    <div
      className="msg-root"
      style={{ background: bg || '#111' }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* ── Exiting slide ── */}
      {prev && (
        <div
          key={`exit-${prev.idx}`}
          className="msg-media"
          style={exitStyle(prev.dir)}
        >
          {isVideo(items[prev.idx].src) ? (
            <video className="msg-video" muted playsInline preload="none">
              <source src={items[prev.idx].src} />
            </video>
          ) : (
            <img
              src={opt(items[prev.idx].src)}
              alt=""
              className="msg-img"
              draggable={false}
            />
          )}
        </div>
      )}

      {/* ── Entering / active slide ── */}
      <div
        key={`active-${idx}`}
        className="msg-media"
        style={prev ? { ...enterStyle(prev.dir), animation: 'none' } : {}}
        ref={(el) => {
          if (el && prev) {
            // Trigger transition on next frame
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                Object.assign(el.style, activeStyle);
              });
            });
          }
        }}
      >
        {isVid ? (
          <video
            ref={videoRef}
            key={item.src}
            className="msg-video"
            playsInline loop muted controls={false} preload="metadata"
          >
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

      {/* Gradients */}
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
        <div
          className="msg-progress-fill"
          style={{ width: `${((idx + 1) / items.length) * 100}%` }}
        />
      </div>

      {/* Dot indicators */}
      <div className="msg-dots">
        {items.map((_, i) => (
          <button
            key={i}
            className={`msg-dot${i === idx ? ' msg-dot--on' : ''}`}
            onClick={() => go(i, i > idx ? 1 : -1)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Tap zones */}
      <button className="msg-zone msg-zone--left"  onClick={prev_} aria-label="Previous" />
      <button className="msg-zone msg-zone--right" onClick={next}  aria-label="Next" />

      {idx === 0 && <p className="msg-hint">Swipe to browse</p>}
    </div>
  );
}
