import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { CardCarousel } from './ui/card-carousel';
import { getOptimizedUrl } from '../lib/imageConfig';

/**
 * Three clickable dress renders → each triggers a different model angle.
 */
const LOOKS = [
  {
    id: 0,
    title: 'Rosé Ruffle',
    description: 'Pink floral corset · tiered satin',
    imageSrc: getOptimizedUrl('https://ik.imagekit.io/Nouskun/Dimple/Home/OB2449469_right_4_vgzhda.png'),
  },
  {
    id: 1,
    title: 'Fleur Mini',
    description: 'Embroidered bodice · puff skirt',
    imageSrc: getOptimizedUrl('https://ik.imagekit.io/Nouskun/Dimple/Home/OB2449469_right_6_yplfd4.png'),
  },
  {
    id: 2,
    title: 'Petal Drop',
    description: 'Ivory floral · balloon hem',
    imageSrc: getOptimizedUrl('https://ik.imagekit.io/Nouskun/Dimple/Home/OB2449469_right_5_fiygcg.png'),
  },
];

export default function HeroSection() {
  const [activeId, setActiveId] = useState(1); // Track sync with card stack

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden"
      style={{ background: '#6E6E6E' }} // The exact grey color from the provided swatch
    >
      {/* ── Top Navigation / Header ── */}
      <header className="absolute top-0 left-0 right-0 p-10 px-16 flex justify-between items-center z-50 text-white/50 text-[14px] tracking-wide font-light">
        <div className="text-[15px] tracking-[0.05em] text-white/80">Dimple Shivakumar</div>
        <nav className="flex gap-10">
          <a href="#home" className="hover:text-white transition-colors cursor-pointer">Home</a>
          <a href="#about" className="hover:text-white transition-colors cursor-pointer">About</a>
          <a href="#collection" className="hover:text-white transition-colors cursor-pointer">Collection</a>
          <a href="#contact" className="hover:text-white transition-colors cursor-pointer">Contact</a>
        </nav>
      </header>
      {/* ── LEFT HALF: Card Stack Component ── */}
      <div className="absolute inset-y-0 left-0 flex flex-col items-center justify-center p-12" style={{ width: '56%', zIndex: 20 }}>
        <CardCarousel
          images={LOOKS}
          autoplayDelay={0} // Disabled autoplay
          showPagination={true}
          showNavigation={true} // Enabled buttons
          onChangeIndex={(index) => setActiveId(index)}
        />
      </div>

      {/* ── RIGHT HALF: Full-body model ── */}
      <div
        className="absolute inset-y-0 right-0 flex items-end justify-center"
        style={{ width: '44%' }}
      >
        {/* Subtle ground glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: '55%',
            height: '30%',
            background: 'radial-gradient(ellipse, rgba(200, 130, 160, 0.12) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />

        {/* 3D Rotating Model Video */}
        <div className="relative flex flex-col items-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            src={getOptimizedUrl("https://ik.imagekit.io/Nouskun/Dimple/Home/Make_it_rotate_202604100102_eqko2m.mp4")}
            style={{
              height: '82vh',
              maxHeight: 820,
              width: 'auto',
              objectFit: 'contain',
              objectPosition: 'bottom center',
              filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.85)) drop-shadow(-8px 0 30px rgba(0,0,0,0.4))',
              position: 'relative',
              zIndex: 5,
            }}
          />

          {/* Outfit Info Block */}
          <motion.div 
            key={activeId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex flex-col items-center text-center px-6"
            style={{ zIndex: 10 }}
          >
            <span className="text-[10px] tracking-[0.25em] text-white/40 uppercase mb-2">Collection 2026</span>
            <h2 className="text-4xl font-light tracking-tight text-[#f0d8e8] mb-1">{LOOKS[activeId]?.name}</h2>
            <p className="text-sm text-white/50 font-light italic mb-8">{LOOKS[activeId]?.subtitle}</p>
            
            <button className="px-8 py-3 rounded-full border border-white/20 bg-white/5 text-xs tracking-widest uppercase text-white/80 hover:bg-white/10 hover:border-white/40 transition-all duration-300">
              Shop the look
            </button>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom vignette fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-20"
        style={{
          height: '12%',
          background: 'linear-gradient(to top, rgba(110,110,110,0.95) 0%, transparent 100%)',
        }}
      />
    </section>
  );
}
