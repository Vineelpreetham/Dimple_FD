import { useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import PriyaPortfolio from './components/PriyaPortfolio';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * App — Replicated Priya Portfolio Entry Point.
 * Initializes Lenis smooth scrolling and renders the portfolio component.
 */
export default function App() {
  // Initialize Lenis smooth scrolling (synced with GSAP)
  useLenis();

  // Refresh ScrollTrigger on resize or page change
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <main>
        <PriyaPortfolio />
      </main>
    </>
  );
}
