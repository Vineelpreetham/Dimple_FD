import React, { useState, useEffect, useRef } from 'react';

const NAV_LINKS = [
  { label: 'Home',        page: 'home' },
  { label: 'About',       page: 'about' },
  { label: 'Collections', page: 'collections' },
  { label: 'Contact',     page: 'contact' },
];

export default function MobileNav({ activePage, showPage }) {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prevPage = useRef(activePage);

  // Close on page change
  useEffect(() => {
    if (prevPage.current !== activePage) {
      setOpen(false);
      prevPage.current = activePage;
    }
  }, [activePage]);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Top bar */}
      <header className={`mn-bar${scrolled ? ' mn-bar--scrolled' : ''}`}>
        <button className="mn-brand" onClick={() => showPage('home')}>
          Dimple Shivakumar
        </button>
        <button
          className={`mn-burger${open ? ' mn-burger--open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </header>

      {/* Full-screen overlay */}
      <div className={`mn-overlay${open ? ' mn-overlay--open' : ''}`} aria-hidden={!open}>
        <nav className="mn-links">
          {NAV_LINKS.map(({ label, page }, i) => (
            <button
              key={page}
              className={`mn-link${activePage === page ? ' mn-link--active' : ''}`}
              style={{ transitionDelay: open ? `${i * 60 + 80}ms` : '0ms' }}
              onClick={() => { showPage(page); setOpen(false); }}
            >
              <span className="mn-link-num">0{i + 1}</span>
              {label}
            </button>
          ))}
        </nav>
        <div className="mn-overlay-footer">
          <span>dimpleshivukumar@gmail.com</span>
          <a
            href="https://www.instagram.com/sketchstorybydimple"
            target="_blank" rel="noopener noreferrer"
          >
            @sketchstorybydimple
          </a>
        </div>
      </div>
    </>
  );
}
