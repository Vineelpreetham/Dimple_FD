import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook for staggered text reveal using SplitType.
 * Splits text into lines/words/chars and animates them on scroll.
 *
 * @param {Object} options
 * @param {string} [options.types='lines'] - SplitType split types
 * @param {number} [options.stagger=0.08] - Stagger delay
 * @param {number} [options.y=80] - Starting Y offset
 * @param {boolean} [options.scrub=true] - Whether to scrub
 * @param {string} [options.start='top 80%'] - ScrollTrigger start
 */
export function useSplitText(elementRef, options = {}) {
  const splitRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const {
      types = 'lines',
      stagger = 0.08,
      y = 80,
      scrub = true,
      start = 'top 80%',
      end = 'top 30%',
    } = options;

    // Split the text
    const split = new SplitType(elementRef.current, {
      types,
      tagName: 'span',
    });
    splitRef.current = split;

    // Wrap each line in an overflow container for clip effect
    const targets = split.lines || split.words || split.chars;
    if (!targets || !targets.length) return;

    targets.forEach((el) => {
      const wrapper = document.createElement('div');
      wrapper.style.overflow = 'hidden';
      wrapper.style.display = 'block';
      el.parentNode.insertBefore(wrapper, el);
      wrapper.appendChild(el);
    });

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        yPercent: 100,
        opacity: 0,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elementRef.current,
          start,
          end,
          scrub: scrub ? 1.5 : false,
          toggleActions: scrub ? undefined : 'play none none none',
        },
      });
    });

    return () => {
      ctx.revert();
      if (splitRef.current) {
        splitRef.current.revert();
      }
    };
  }, [elementRef, options]);

  return splitRef;
}
