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
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(0);   // -1 prev, 1 next, 0 idle
  const touchStart = useRef(null);
  const touchEnd   = useRef(null);
  const videoRef   = useRef(null);
  const MIN_SWIPE  = 44;

  const go = useCallback((next) => {
    const clamped = (next + items.length) % items.length;
    setDir(clamped > idx ? 1 : -1);
    setIdx(clamped);
  }, [idx, items.length]);

  const next = useCallback(() => go(idx + 1), [go, idx]);
  const prev = useCallback(() => go(idx - 1), [go, idx]);

  // Auto-play videos when they become active
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [idx]);

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchMove  = (e) => { touchEnd.current = e.touches[0].clientX; };
  const onTouchEnd   = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const delta = touchStart.current - touchEnd.current;
    if (Math.abs(delta) >= MIN_SWIPE) delta > 0 ? next() : prev();
    touchStart.current = null;
    touchEnd.current   = null;
  };

  const item = items[idx];
  const isVid = isVideo(item.src);

  return (
    <div
      className="msg-root"
      style={{ background: bg || '#FAF6F2' }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Media — full screen */}
      <div className="msg-media">
        {isVid ? (
          <video
            ref={videoRef}
            key={item.src}
            className="msg-video"
            playsInline
            loop
            muted
            controls={false}
            preload="metadata"
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
            draggable={false}
          />
        )}

        {/* Gradient for controls */}
        <div className="msg-top-grad" />
        <div className="msg-bot-grad" />
      </div>

      {/* Header row */}
      <div className="msg-header">
        <button className="msg-back" onClick={onBack} aria-label="Back">
          ←
        </button>
        <div className="msg-title-wrap">
          {label && <span className="msg-label">{label}</span>}
          <span className="msg-title">{title}</span>
        </div>
        <span className="msg-counter">{idx + 1} / {items.length}</span>
      </div>

      {/* Dot row */}
      <div className="msg-dots">
        {items.map((_, i) => (
          <button
            key={i}
            className={`msg-dot${i === idx ? ' msg-dot--on' : ''}`}
            onClick={() => go(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Tap-zone arrows */}
      <button className="msg-zone msg-zone--left"  onClick={prev} aria-label="Previous" />
      <button className="msg-zone msg-zone--right" onClick={next} aria-label="Next" />

      {/* Swipe hint on first slide */}
      {idx === 0 && <p className="msg-hint">Swipe to browse</p>}
    </div>
  );
}
