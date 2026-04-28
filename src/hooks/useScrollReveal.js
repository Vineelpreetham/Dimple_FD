import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Reusable scroll-triggered reveal animation.
 * Elements fade in and lift from below when scrolled into view.
 *
 * @param {Object} options
 * @param {string} options.trigger - CSS selector or ref for trigger element
 * @param {number} [options.y=60] - Starting Y offset
 * @param {number} [options.duration=1.2] - Animation duration
 * @param {number} [options.stagger=0.15] - Stagger between children
 * @param {string} [options.start='top 85%'] - ScrollTrigger start
 */
export function useScrollReveal(containerRef, options = {}) {
  useEffect(() => {
    if (!containerRef.current) return;

    const {
      children = '[data-reveal]',
      y = 60,
      duration = 1.2,
      stagger = 0.15,
      start = 'top 85%',
      scrub = false,
    } = options;

    const elements = containerRef.current.querySelectorAll(children);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      gsap.from(elements, {
        y,
        opacity: 0,
        duration: scrub ? undefined : duration,
        stagger: scrub ? undefined : stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          end: scrub ? 'bottom 60%' : undefined,
          scrub: scrub ? 1.5 : false,
          toggleActions: scrub ? undefined : 'play none none none',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, options]);
}
