import React, { useState, useEffect } from 'react';

const MobileNav = ({ activePage, showPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.pageYOffset > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when page changes
  useEffect(() => {
    setIsOpen(false);
  }, [activePage]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Collections', page: 'collections' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <header
        className="mobile-nav-bar"
        style={{
          background: isScrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          boxShadow: isScrolled ? '0 1px 0 rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <button
          className="mobile-nav-brand"
          onClick={() => showPage('home')}
          aria-label="Go to home"
        >
          Dimple Shivakumar
        </button>

        <button
          className={`mobile-hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span className="ham-line" />
          <span className="ham-line" />
          <span className="ham-line" />
        </button>
      </header>

      {/* Full-Screen Overlay Menu */}
      <div className={`mobile-menu-overlay ${isOpen ? 'is-open' : ''}`}>
        <nav className="mobile-menu-links">
          {navLinks.map((link, i) => (
            <button
              key={link.page}
              className={`mobile-menu-link ${activePage === link.page ? 'active' : ''}`}
              onClick={() => showPage(link.page)}
              style={{ transitionDelay: isOpen ? `${i * 0.07 + 0.1}s` : '0s' }}
            >
              <span className="mobile-menu-link-num">0{i + 1}</span>
              {link.label}
            </button>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <p>dimpleshivukumar@gmail.com</p>
          <a
            href="https://www.instagram.com/sketchstorybydimple"
            target="_blank"
            rel="noopener noreferrer"
          >
            @sketchstorybydimple
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
