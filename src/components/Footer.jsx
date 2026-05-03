import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PARTNERS = ['Canon', 'Leica', 'Nikon', 'Hasselblad', 'Fujifilm', 'Kodak'];

/**
 * Footer — Partners, newsletter, and cinematic final CTA.
 *
 * ANIMATIONS:
 * - Partners logos fade in with stagger
 * - Newsletter section lifts up
 * - Final CTA appears with cinematic fade and lift
 */
export default function Footer() {
  const sectionRef = useRef(null);
  const partnersRef = useRef(null);
  const newsletterRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Partners stagger ──
      const partnerItems = partnersRef.current.querySelectorAll('[data-partner]');
      gsap.from(partnerItems, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: partnersRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // ── Newsletter lift ──
      gsap.from(newsletterRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: newsletterRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // ── Cinematic CTA fade + lift ──
      gsap.from(ctaRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.6,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: 'var(--color-bg-warm)',
        padding: '10vh 5vw 6vh',
      }}
      id="footer"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Partners Section */}
        <div ref={partnersRef} className="mb-16">
          <h3
            className="text-sm uppercase font-medium tracking-[0.2em] mb-10 text-center"
            style={{ color: 'var(--color-text-light)' }}
          >
            Our partners
          </h3>
          <div
            className="grid items-center justify-items-center gap-8"
            style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}
          >
            {PARTNERS.map((partner) => (
              <div
                key={partner}
                data-partner
                className="font-serif text-center transition-opacity duration-300 hover:opacity-100 cursor-pointer will-change-transform"
                style={{
                  fontSize: 'clamp(1rem, 1.5vw, 1.4rem)',
                  opacity: 0.4,
                  color: 'var(--color-text)',
                  letterSpacing: '0.05em',
                }}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] mb-16" style={{ background: 'rgba(0,0,0,0.08)' }} />

        {/* Newsletter + CTA Grid */}
        <div
          className="grid gap-16 items-start mb-20"
          style={{ gridTemplateColumns: '1fr 1fr' }}
        >
          {/* Newsletter */}
          <div ref={newsletterRef}>
            <h3
              className="font-serif italic mb-4"
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                color: 'var(--color-text)',
              }}
            >
              Puzzle Newsletter
            </h3>
            <p
              className="mb-8 max-w-sm"
              style={{
                fontSize: '0.9rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
              }}
            >
              Stay in the frame. Get exclusive access to upcoming exhibitions,
              photographer interviews, and behind-the-lens stories.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3 rounded-full text-sm outline-none transition-shadow duration-300 focus:shadow-lg"
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid rgba(0,0,0,0.08)',
                  color: 'var(--color-text)',
                }}
              />
              <button
                className="px-7 py-3 rounded-full text-sm font-medium tracking-wider text-white transition-all duration-300 hover:scale-105 flex-shrink-0"
                style={{ background: 'var(--color-text)' }}
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Smiling portrait + info */}
          <div className="flex items-center gap-6">
            <div
              className="rounded-2xl overflow-hidden flex-shrink-0"
              style={{ width: '180px', height: '220px' }}
            >
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80"
                alt="Welcome"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4
                className="font-serif mb-2"
                style={{ fontSize: '1.3rem', color: 'var(--color-text)' }}
              >
                Join Our Community
              </h4>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Connect with fellow photography enthusiasts and gain early access
                to exclusive exhibitions worldwide.
              </p>
              <button
                className="text-xs uppercase font-medium tracking-[0.15em] transition-opacity duration-300 hover:opacity-60"
                style={{ color: 'var(--color-accent)' }}
              >
                Learn more →
              </button>
            </div>
          </div>
        </div>

        {/* ── Cinematic Final CTA ── */}
        <div
          ref={ctaRef}
          className="text-center py-16 will-change-transform"
          style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
        >
          <p
            className="text-xs uppercase tracking-[0.3em] mb-6"
            style={{ color: 'var(--color-text-light)' }}
          >
            Begin your journey
          </p>
          <h2
            className="font-serif mb-8"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              color: 'var(--color-text)',
              lineHeight: 1,
            }}
          >
            Experience the{' '}
            <em style={{ fontFamily: 'var(--font-script)', fontSize: '105%' }}>Exhibition</em>
          </h2>
          <button
            className="px-10 py-4 rounded-full text-sm font-medium tracking-[0.15em] text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            style={{ background: 'var(--color-text)' }}
          >
            GET YOUR TICKETS
          </button>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex justify-between items-center pt-8"
          style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
        >
          <span className="text-xs" style={{ color: 'var(--color-text-light)' }}>
            © 2025 Dimple Shivakumar. All rights reserved.
          </span>
          <div className="flex gap-6">
            {['Instagram', 'Twitter', 'Behance'].map((s) => (
              <span
                key={s}
                className="text-xs cursor-pointer transition-opacity duration-300 hover:opacity-100"
                style={{ color: 'var(--color-text-light)', opacity: 0.6 }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
