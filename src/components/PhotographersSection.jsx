import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PHOTOGRAPHERS = [
  {
    name: 'Adam Denisov',
    role: 'Wildlife & Nature',
    bio: "Award-winning naturalist whose work captures wildlife in extraordinary intimate portraits. His philosophy centers on patience—sometimes waiting weeks for a single frame that reveals the soul of his subject.",
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80',
  },
  {
    name: 'Marie Svenning',
    role: 'Landscapes & Flora',
    bio: "Known for her ethereal landscapes that blur the line between photography and painting. Marie's work with long exposures and natural light has redefined botanical photography for a new generation.",
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80',
  },
  {
    name: 'Amir Wilkinson',
    role: 'Macro & Detail',
    bio: "A pioneer in extreme macro photography, Amir reveals hidden worlds invisible to the naked eye. His images of insects and flora at 10x magnification have been featured in National Geographic.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
  {
    name: 'Karen Herrera',
    role: 'Portrait & Documentary',
    bio: "Documentary photographer whose intimate portraits of indigenous communities have won international acclaim. Karen approaches each subject with deep reverence and authentic storytelling.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
  },
];

/**
 * PhotographersSection — Pinned storytelling section.
 *
 * ANIMATIONS:
 * - Section pins for 300vh scroll
 * - Title stays fixed while photographer cards cycle through
 * - Active photographer tab highlighted
 * - Image + bio crossfade triggered by scroll progress
 * 
 * FIX: Uses visibility + opacity instead of stacked absolute elements
 * to prevent text overlap between photographer bios.
 */
export default function PhotographersSection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalPhotographers = PHOTOGRAPHERS.length;

      // ── Pinned storytelling timeline ──
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${totalPhotographers * 100}%`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const newIndex = Math.min(
            Math.floor(progress * totalPhotographers),
            totalPhotographers - 1
          );
          setActiveIndex(newIndex);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ background: 'var(--color-bg)', padding: '0 5vw' }}
      id="photographers"
    >
      <div className="max-w-[1400px] mx-auto h-full flex flex-col justify-center">
        {/* Section Title */}
        <div className="mb-12">
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 4.5rem)',
              color: 'var(--color-text)',
              lineHeight: 1.1,
            }}
          >
            Meet the{' '}
            <span className="italic" style={{ fontFamily: 'var(--font-script)', fontSize: '110%' }}>
              Photographers
            </span>
          </h2>
        </div>

        {/* Photographer Tabs */}
        <div className="flex gap-2 mb-12" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
          {PHOTOGRAPHERS.map((p, i) => (
            <div
              key={p.name}
              className="relative py-3 px-6 text-sm font-medium cursor-pointer"
              style={{
                color: i === activeIndex ? 'var(--color-text)' : 'var(--color-text-light)',
                letterSpacing: '0.05em',
                transition: 'color 0.5s ease',
              }}
            >
              {p.name}
              {/* Active underline */}
              <div
                className="absolute bottom-0 left-0 w-full h-[2px]"
                style={{
                  background: 'var(--color-text)',
                  transform: i === activeIndex ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.5s ease',
                }}
              />
            </div>
          ))}
        </div>

        {/* Content: Image + Bio — Only render the ACTIVE photographer */}
        <div
          className="grid gap-12 items-start"
          style={{ gridTemplateColumns: '1fr 1.2fr' }}
        >
          {/* Image — crossfade with CSS transitions */}
          <div className="relative" style={{ aspectRatio: '3/4' }}>
            {PHOTOGRAPHERS.map((p, i) => (
              <div
                key={p.name}
                className="absolute inset-0 rounded-lg overflow-hidden"
                style={{
                  opacity: i === activeIndex ? 1 : 0,
                  transform: i === activeIndex ? 'scale(1)' : 'scale(0.97)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                  zIndex: i === activeIndex ? 2 : 1,
                }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Bio — conditional render to avoid overlap */}
          <div className="relative pt-4" style={{ minHeight: '320px' }}>
            {PHOTOGRAPHERS.map((p, i) => (
              <div
                key={p.name}
                className="absolute top-4 left-0 w-full"
                style={{
                  opacity: i === activeIndex ? 1 : 0,
                  transform: i === activeIndex ? 'translateY(0)' : 'translateY(15px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  pointerEvents: i === activeIndex ? 'auto' : 'none',
                  visibility: i === activeIndex ? 'visible' : 'hidden',
                }}
              >
                <h3
                  className="font-serif mb-2"
                  style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                    color: 'var(--color-text)',
                  }}
                >
                  {p.name}
                </h3>
                <span
                  className="text-xs uppercase font-medium block mb-6"
                  style={{ 
                    color: 'var(--color-accent)',
                    letterSpacing: '0.15em',
                  }}
                >
                  {p.role}
                </span>
                <p
                  className="max-w-lg mb-8"
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.8,
                  }}
                >
                  {p.bio}
                </p>
                <div className="flex gap-4">
                  <button
                    className="px-7 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105"
                    style={{ 
                      background: 'var(--color-text)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Learn more
                  </button>
                  <button
                    className="px-7 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{
                      border: '1px solid var(--color-text)',
                      color: 'var(--color-text)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Contact
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex gap-2 mt-8">
          {PHOTOGRAPHERS.map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                background: i === activeIndex ? 'var(--color-text)' : 'rgba(0,0,0,0.15)',
                transform: i === activeIndex ? 'scale(1.3)' : 'scale(1)',
                transition: 'all 0.5s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
