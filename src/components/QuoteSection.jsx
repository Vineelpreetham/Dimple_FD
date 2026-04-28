import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * QuoteSection — Full-screen editorial quote with oversized serif typography.
 * 
 * ANIMATIONS:
 * - Section pinned for 150vh scroll
 * - Quote fades in as a whole block (no SplitType to avoid line-overlap bugs)
 * - Quotation mark scales in
 * - Attribution fades in last
 * 
 * SIMPLIFIED: Removed SplitType to prevent the last-line clipping/overlap issue.
 * Uses a clean y-translate + opacity for the entire quote block instead.
 */
export default function QuoteSection() {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);
  const quoteMarkRef = useRef(null);
  const attributionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Pinned timeline ──
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 2,
          anticipatePin: 1,
        },
      });

      // Quotation mark scales in
      tl.from(quoteMarkRef.current, {
        scale: 0.3,
        opacity: 0,
        ease: 'power3.out',
      }, 0);

      // Quote block reveals as a whole
      tl.from(quoteRef.current, {
        y: 80,
        opacity: 0,
        ease: 'power3.out',
      }, 0.1);

      // Attribution fades in last
      tl.from(attributionRef.current, {
        y: 30,
        opacity: 0,
        ease: 'power3.out',
      }, 0.6);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'var(--color-bg-warm)',
        padding: '10vh 5vw',
      }}
      id="quote"
    >
      {/* Large quotation mark */}
      <div
        ref={quoteMarkRef}
        className="mb-8 will-change-transform"
        style={{ color: 'var(--color-accent)' }}
      >
        <svg width="64" height="48" viewBox="0 0 64 48" fill="currentColor">
          <path d="M0 48V28.8C0 20.267 1.867 13.333 5.6 8C9.6 2.667 15.467 0 23.2 0v9.6c-4.267 0.8-7.467 2.933-9.6 6.4-2.133 3.2-3.2 7.2-3.2 12h12V48H0zm36 0V28.8c0-8.533 1.867-15.467 5.6-20.8C45.6 2.667 51.467 0 59.2 0v9.6c-4.267 0.8-7.467 2.933-9.6 6.4-2.133 3.2-3.2 7.2-3.2 12h12V48H36z" />
        </svg>
      </div>

      {/* Quote Text — Single block, no SplitType */}
      <h2
        ref={quoteRef}
        className="font-serif text-center max-w-[950px] will-change-transform"
        style={{
          fontSize: 'clamp(1.8rem, 4.5vw, 4rem)',
          lineHeight: 1.2,
          color: 'var(--color-text)',
          letterSpacing: '-0.01em',
          fontWeight: 400,
        }}
      >
        THE BEST THING ABOUT A PICTURE IS THAT IT NEVER CHANGES, EVEN WHEN THE PEOPLE IN IT DO.
      </h2>

      {/* Attribution */}
      <p
        ref={attributionRef}
        className="mt-10 text-sm italic will-change-transform"
        style={{ color: 'var(--color-text-muted)' }}
      >
        — Andy Warhol
      </p>
    </section>
  );
}
