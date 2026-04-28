import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * Header — "Dimple Shivakumar" serif top-left, minimal nav top-right.
 * Matches the fashion portfolio reference screenshots exactly.
 */
export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -16,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.3,
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full flex justify-between items-center z-[1000]"
      style={{ padding: '1.6rem 3vw' }}
    >
      {/* Designer name — serif, cream */}
      <span
        className="font-serif"
        style={{
          fontSize: 'clamp(0.85rem, 1.2vw, 1.1rem)',
          color: 'rgba(245, 235, 228, 0.92)',
          letterSpacing: '0.02em',
          fontWeight: 400,
        }}
      >
        Dimple Shivakumar
      </span>

      {/* Navigation — minimal, cream, uppercase small */}
      <nav className="flex items-center gap-8">
        {['Home', 'About', 'Collection', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="transition-opacity duration-300 hover:opacity-60"
            style={{
              color: 'rgba(235, 220, 215, 0.75)',
              fontSize: '0.7rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 400,
            }}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
