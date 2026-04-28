import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Animation Logic
const initAnimations = () => {
  // 1. Background Zoom
  gsap.to('.hero-bg', {
    scale: 1.15,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });

  // 2. Model Parallax & Float
  gsap.to('.hero-model', {
    yPercent: -15,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });

  // Floating effect for the model
  gsap.to('.hero-model', {
    y: '+=20',
    rotation: '+=1',
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });

  // 3. Headline Parallax (Individual lines for depth)
  const tlHeadline = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    }
  });

  tlHeadline.to('.line-1', { yPercent: -40, opacity: 0 }, 0);
  tlHeadline.to('.line-2', { yPercent: -60, opacity: 0 }, 0.1);


  // 5. Author Label Fade Out
  gsap.to('.author-label', {
    x: -50,
    opacity: 0,
    scrollTrigger: {
      trigger: '.hero-section',
      start: '10% top',
      end: '40% top',
      scrub: true,
    }
  });

  // 6. Split Reveal Transition
  // Create a transition effect where the model moves into the second section
  const tlSplit = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero-section',
      start: '70% top',
      end: 'bottom top',
      scrub: true,
    }
  });

  // Fade out hero background
  tlSplit.to('.hero-background-wrapper', {
    opacity: 0,
    ease: 'none'
  }, 0);

  // Smoothly move model down
  tlSplit.to('.model-container', {
    yPercent: 100,
    opacity: 0.5,
    scale: 0.8,
    ease: 'power1.inOut'
  }, 0);

  // Reveal second section content
  gsap.from('.reveal-content', {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: '.second-section',
      start: 'top 80%',
      end: 'top center',
      scrub: true,
    }
  });
};

// Start animations
initAnimations();

// Refresh ScrollTrigger on resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

console.log('Premium Hero Landing Page Initialized.');
