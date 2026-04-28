import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getOptimizedUrl } from '../lib/imageConfig';

gsap.registerPlugin(ScrollTrigger);

/**
 * MarqueeSection — "YOUR ONE-STOP DESTINATION" infinite horizontal marquee.
 *
 * ANIMATIONS:
 * - Continuous CSS marquee with scroll-speed modulation via GSAP
 * - Small circular image insets between words
 * - Speed increases when scrolling, slows when idle
 */
export default function MarqueeSection() {
  const sectionRef = useRef(null);
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Speed modulation: accelerate marquee when scrolling through section
      gsap.to([track1Ref.current, track2Ref.current], {
        animationDuration: '12s',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            const speed = 30 - self.progress * 15; // Faster as you scroll deeper
            if (track1Ref.current) {
              track1Ref.current.style.animationDuration = `${speed}s`;
            }
            if (track2Ref.current) {
              track2Ref.current.style.animationDuration = `${speed + 5}s`;
            }
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const MarqueeContent = () => (
    <>
      <span className="font-serif" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', whiteSpace: 'nowrap', fontWeight: 400 }}>
        YOUR ONE-STOP
      </span>
      <div
        className="inline-flex items-center justify-center rounded-full overflow-hidden mx-6 flex-shrink-0"
        style={{ width: 'clamp(50px, 5vw, 80px)', height: 'clamp(50px, 5vw, 80px)' }}
      >
        <img
          src={getOptimizedUrl("https://images.unsplash.com/photo-1557401622-09e9cf0ed114?w=200&q=80")}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <span className="font-serif" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', whiteSpace: 'nowrap', fontWeight: 400 }}>
        DESTINATION
      </span>
      <span className="mx-8" style={{ color: 'var(--color-accent)', fontSize: 'clamp(2rem, 4vw, 5rem)' }}>✦</span>
      <span className="font-serif" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', whiteSpace: 'nowrap', fontWeight: 400 }}>
        YOUR ONE-STOP
      </span>
      <div
        className="inline-flex items-center justify-center rounded-full overflow-hidden mx-6 flex-shrink-0"
        style={{ width: 'clamp(50px, 5vw, 80px)', height: 'clamp(50px, 5vw, 80px)' }}
      >
        <img
          src={getOptimizedUrl("https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=200&q=80")}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <span className="font-serif" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', whiteSpace: 'nowrap', fontWeight: 400 }}>
        DESTINATION
      </span>
      <span className="mx-8" style={{ color: 'var(--color-accent)', fontSize: 'clamp(2rem, 4vw, 5rem)' }}>✦</span>
    </>
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: 'var(--color-bg)',
        padding: '8vh 0',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
      id="marquee"
    >
      {/* Track 1 — scrolls left */}
      <div
        ref={track1Ref}
        className="flex items-center gap-0 whitespace-nowrap"
        style={{
          animation: 'marquee-scroll 30s linear infinite',
          color: 'var(--color-text)',
        }}
      >
        <MarqueeContent />
        <MarqueeContent />
      </div>

      {/* Track 2 — scrolls right (reversed, lighter) */}
      <div
        ref={track2Ref}
        className="flex items-center gap-0 whitespace-nowrap mt-4"
        style={{
          animation: 'marquee-scroll 35s linear infinite reverse',
          color: 'var(--color-text)',
          opacity: 0.15,
        }}
      >
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </section>
  );
}
