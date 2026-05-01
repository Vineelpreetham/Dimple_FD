import { useEffect, useState, lazy, Suspense } from 'react';
import { useLenis } from './hooks/useLenis';
import PriyaPortfolio from './components/PriyaPortfolio';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lazy-load the entire mobile bundle — zero mobile code is bundled/run on desktop
const MobilePortfolio = lazy(() => import('./components/mobile/MobilePortfolio'));

const MOBILE_BREAKPOINT = 768;

const Spinner = () => (
  <div style={{
    position: 'fixed', inset: 0, display: 'flex',
    alignItems: 'center', justifyContent: 'center',
    background: '#FAF6F2',
  }}>
    <div style={{
      width: 36, height: 36,
      border: '2px solid #f0dce4',
      borderTop: '2px solid #C0758D',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite',
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

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
    return (
      <Suspense fallback={<Spinner />}>
        <MobilePortfolio />
      </Suspense>
    );
  }

  return <DesktopApp />;
}
