import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EXHIBITIONS = [
  {
    month: 'February 2025',
    title: 'Arctic Wilderness',
    location: 'Stockholm, Sweden',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=500&q=80',
  },
  {
    month: 'March 2025',
    title: 'Urban Fragments',
    location: 'Berlin, Germany',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&q=80',
  },
  {
    month: 'April 2025',
    title: 'Silent Oceans',
    location: 'Lisbon, Portugal',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&q=80',
  },
  {
    month: 'May 2025',
    title: 'Golden Hour',
    location: 'Marrakech, Morocco',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80',
  },
];

/**
 * ExhibitionsGallery — Asymmetric card grid with staggered reveals.
 *
 * ANIMATIONS:
 * - Cards reveal with staggered y-offsets for asymmetric feel
 * - Each card has a different vertical starting position
 * - Subtle hover scale on cards
 * - Navigation arrows fade in
 */
export default function ExhibitionsGallery() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Title reveal ──
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // ── Cards with asymmetric stagger ──
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        // Varying y-offsets for asymmetric spacing feel
        const yOffset = [80, 120, 60, 100][i % 4];
        const delay = i * 0.12;

        gsap.from(card, {
          y: yOffset,
          opacity: 0,
          duration: 1.4,
          ease: 'power3.out',
          delay,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: 'var(--color-bg)',
        padding: '12vh 5vw 16vh',
      }}
      id="exhibitions"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header Row */}
        <div
          ref={titleRef}
          className="flex items-center justify-between mb-16"
        >
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 4.5rem)',
              color: 'var(--color-text)',
              lineHeight: 1.1,
            }}
          >
            <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>All</em>{' '}
            Exhibitions
          </h2>

          {/* Navigation arrows */}
          <div className="flex gap-3">
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ border: '1px solid rgba(0,0,0,0.15)' }}
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ border: '1px solid rgba(0,0,0,0.15)' }}
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Exhibition Cards Grid — asymmetric layout */}
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
        >
          {EXHIBITIONS.map((ex, i) => (
            <div
              key={ex.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group cursor-pointer will-change-transform"
              style={{
                // Asymmetric vertical offset for visual rhythm
                marginTop: [0, 40, -20, 60][i % 4],
              }}
            >
              {/* Image container with hover effect */}
              <div
                className="relative overflow-hidden rounded-lg mb-5 transition-transform duration-700 group-hover:scale-[1.02]"
                style={{ aspectRatio: '3/4' }}
              >
                <img
                  src={ex.image}
                  alt={ex.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Date badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium tracking-wider"
                  style={{
                    background: 'rgba(255,255,255,0.9)',
                    color: 'var(--color-text)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {ex.month}
                </div>
              </div>

              {/* Card info */}
              <h3
                className="font-serif mb-1 transition-colors duration-300"
                style={{
                  fontSize: '1.3rem',
                  color: 'var(--color-text)',
                }}
              >
                {ex.title}
              </h3>
              <p
                className="text-xs uppercase tracking-[0.1em]"
                style={{ color: 'var(--color-text-light)' }}
              >
                {ex.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
