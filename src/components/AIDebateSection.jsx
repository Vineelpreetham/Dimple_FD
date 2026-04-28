import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * AIDebateSection — Dark cinematic section about the future of photography.
 *
 * ANIMATIONS:
 * - Background color transitions from warm beige to deep dark
 * - Portrait revealed through expanding clip-path mask
 * - Localized glow effect behind portrait
 * - Text editorial card fades and lifts in
 * - Parallax depth on portrait vs. text
 */
export default function AIDebateSection() {
  const sectionRef = useRef(null);
  const portraitRef = useRef(null);
  const glowRef = useRef(null);
  const cardRef = useRef(null);
  const bgTransitionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Background color transition from beige → dark ──
      gsap.fromTo(bgTransitionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 2,
          },
        }
      );

      // ── Portrait clip-path masked reveal ──
      gsap.fromTo(portraitRef.current,
        { clipPath: 'circle(8% at 50% 50%)' },
        {
          clipPath: 'circle(75% at 50% 50%)',
          ease: 'none',
          scrollTrigger: {
            trigger: portraitRef.current,
            start: 'top 70%',
            end: 'top 10%',
            scrub: 2,
          },
        }
      );

      // ── Glow pulse ──
      gsap.from(glowRef.current, {
        opacity: 0,
        scale: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 40%',
          end: 'center center',
          scrub: 1.5,
        },
      });

      // ── Editorial card reveal ──
      const cardChildren = cardRef.current.querySelectorAll('[data-reveal]');
      gsap.from(cardChildren, {
        y: 50,
        opacity: 0,
        stagger: 0.12,
        ease: 'power3.out',
        duration: 1.2,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      // ── Portrait parallax (moves slower than scroll) ──
      gsap.to(portraitRef.current, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{
        padding: '14vh 5vw',
      }}
      id="ai-debate"
    >
      {/* Base background (beige) */}
      <div className="absolute inset-0" style={{ background: 'var(--color-bg)' }} />

      {/* Dark background that fades in on scroll */}
      <div
        ref={bgTransitionRef}
        className="absolute inset-0 opacity-0"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1e2b2b 50%, #0f1a1a 100%)' }}
      />

      {/* Background glow */}
      <div
        ref={glowRef}
        className="absolute will-change-transform"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(80,160,200,0.12) 0%, rgba(80,160,200,0.04) 40%, transparent 70%)',
          top: '15%',
          left: '10%',
          filter: 'blur(80px)',
        }}
      />

      <div
        className="relative z-[2] max-w-[1400px] mx-auto w-full grid gap-12 items-center"
        style={{ gridTemplateColumns: '1fr 1fr' }}
      >
        {/* Portrait with clip-path mask */}
        <div className="relative">
          <div
            ref={portraitRef}
            className="relative overflow-hidden rounded-xl will-change-transform"
            style={{
              aspectRatio: '3/4',
              clipPath: 'circle(75% at 50% 50%)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=700&q=80"
              alt="The Future of Photography"
              className="w-full h-full object-cover"
              style={{ filter: 'contrast(1.05) saturate(0.85)' }}
            />
            {/* Glass overlay effect */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(80,160,200,0.15) 0%, transparent 40%, rgba(80,130,170,0.1) 100%)',
              }}
            />
          </div>

          {/* Featured project ticker at bottom */}
          <div
            className="absolute bottom-0 left-0 w-full overflow-hidden py-2 rounded-b-xl"
            style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)' }}
          >
            <div className="flex items-center gap-4 whitespace-nowrap text-xs opacity-50" style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.15em' }}>
              {Array(6).fill(null).map((_, i) => (
                <span key={i} className="flex items-center gap-3">
                  <span style={{ color: 'var(--color-accent)' }}>✦</span>
                  <span>FEATURED PROJECT</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Editorial Card */}
        <div ref={cardRef} className="flex flex-col gap-5">
          <span
            data-reveal
            className="text-xs uppercase font-medium"
            style={{ color: 'var(--color-accent)', letterSpacing: '0.2em' }}
          >
            From the blog
          </span>

          <span
            data-reveal
            className="text-xs uppercase font-medium"
            style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em' }}
          >
            The debate
          </span>

          <h2
            data-reveal
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3.5rem)',
              lineHeight: 1.15,
              color: 'var(--color-white)',
            }}
          >
            The{' '}
            <em style={{ fontFamily: 'var(--font-script)', fontSize: '110%' }}>Future</em>
            <br />
            of Photography
            <br />
            in the{' '}
            <span style={{ fontWeight: 600 }}>A.I. Era</span>
          </h2>

          <p
            data-reveal
            className="max-w-md"
            style={{
              fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.8,
            }}
          >
            From AI-enhanced editing tools to computationally generated imagery,
            the boundaries between human creativity and artificial intelligence
            continue to blur. What does authenticity mean when algorithms can
            create photorealistic images from text?
          </p>

          {/* CTA Buttons */}
          <div data-reveal className="flex gap-4 mt-2">
            <button
              className="px-7 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
              style={{
                background: 'var(--color-white)',
                color: '#0a0a0a',
                letterSpacing: '0.06em',
              }}
            >
              Learn more
            </button>
            <button
              className="px-7 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
              style={{
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'var(--color-white)',
                letterSpacing: '0.06em',
              }}
            >
              Buy tickets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
