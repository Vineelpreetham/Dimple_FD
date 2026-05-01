import { useEffect, useState } from 'react';
import { useLenis } from './hooks/useLenis';
import PriyaPortfolio from './components/PriyaPortfolio';
import MobilePortfolio from './components/mobile/MobilePortfolio';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MOBILE_BREAKPOINT = 768;

/**
 * App — Device-aware entry point.
 * - Mobile (≤768px): renders MobilePortfolio (purpose-built mobile experience)
 * - Desktop (>768px): renders PriyaPortfolio (original, untouched)
 *
 * Lenis smooth scrolling and GSAP ScrollTrigger are only initialised on
 * desktop since mobile uses native scroll.
 */
function DesktopApp() {
  useLenis();

  useEffect(() => {
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main>
      <PriyaPortfolio />
    </main>
  );
}

export default function App() {
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth <= MOBILE_BREAKPOINT
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (isMobile) {
    return <MobilePortfolio />;
  }

  return <DesktopApp />;
}
