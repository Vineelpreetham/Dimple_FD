import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import Lenis from 'lenis';
import { ChevronLeft } from 'lucide-react';
import { getOptimizedUrl } from '../lib/imageConfig';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';

// 1. Generate images sequentially (OS_1.jpg to OS_45.jpg)
const MASONRY_ITEMS = [];
const SIZES = ['sq', 'tall', 'wide', 'port', 'xtal'];

for (let i = 1; i <= 45; i++) {
  MASONRY_ITEMS.push({
    type: 'img',
    size: SIZES[i % SIZES.length],
    src: `https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/OS_${i}.jpg`
  });
}

// 2. Generate videos sequentially (OS_VID_1.mp4 to OS_VID_5.mp4)
for (let i = 1; i <= 5; i++) {
  MASONRY_ITEMS.push({
    type: 'vid',
    size: SIZES[(i + 3) % SIZES.length],
    src: `https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/OS_VID_${i}.mp4`
  });
}

// Deterministic shuffle
let seed = 1;
MASONRY_ITEMS.sort(() => {
  let x = Math.sin(seed++) * 10000;
  return (x - Math.floor(x)) - 0.5;
});

// Insert seamless text cards
MASONRY_ITEMS.splice(7, 0, { type: 'text', label: 'Material Study', title: 'Form finds<br/>its nature', body: 'Structure follows the logic of growth — where geometry meets the organic.' });
MASONRY_ITEMS.splice(18, 0, { type: 'text', label: 'Process Note — 02', title: 'Each texture holds<br/>memory', body: 'Clay remembers the hand. The material carries its own history.' });
MASONRY_ITEMS.splice(35, 0, { type: 'text', label: 'Organic Structure — 2024', title: 'Material<br/>meets form', body: 'A study in growth, texture, and the tension between making and letting be.' });

function ParallaxBloomMedia({ item, index }) {
  const ref = useRef(null);
  
  // Parallax inverse to scroll direction
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div ref={ref} className="w-full h-full relative overflow-hidden group">
      {item.type === 'img' ? (
        <motion.img 
          src={getOptimizedUrl(item.src)} 
          loading={index < 8 ? "eager" : "lazy"} 
          alt="Organic Snapshot"
          style={{ y }}
          initial={{ filter: "grayscale(100%) blur(6px) saturate(0.8) contrast(1.05)", scale: 1.15 }}
          whileInView={{ filter: "grayscale(0%) blur(0px) saturate(1.1) contrast(1.05)", scale: 1.25 }}
          viewport={{ margin: "-25% 0px -25% 0px" }} // Blooms only in the middle 50% of the screen
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.35, filter: "grayscale(0%) blur(0px) saturate(1.2) contrast(1.1)" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <motion.video 
          autoPlay muted loop playsInline
          style={{ y }}
          initial={{ filter: "grayscale(100%) blur(6px) saturate(0.8) contrast(1.05)", scale: 1.15 }}
          whileInView={{ filter: "grayscale(0%) blur(0px) saturate(1.1) contrast(1.05)", scale: 1.25 }}
          viewport={{ margin: "-25% 0px -25% 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.35, filter: "grayscale(0%) blur(0px) saturate(1.2) contrast(1.1)" }}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={getOptimizedUrl(item.src)} type="video/mp4" />
        </motion.video>
      )}
    </div>
  );
}

export default function OrganicStructuresPage({ onBack }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      wheelMultiplier: 1.2,
    });
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Scroll reveal observer
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if(e.isIntersecting){
          setTimeout(() => e.target.classList.add('vis'), (i % 4) * 55);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

    if (containerRef.current) {
      containerRef.current.querySelectorAll('.org-card, .org-text-card').forEach(el => obs.observe(el));
      
      containerRef.current.querySelectorAll('.org-card, .org-text-card').forEach((el, i) => {
        el.style.transitionDelay = (i * 0.04) + 's';
      });

      setTimeout(() => {
        if (!containerRef.current) return;
        containerRef.current.querySelectorAll('.org-card, .org-text-card').forEach(el => {
          const rect = el.getBoundingClientRect();
          if(rect.top < window.innerHeight + 100) el.classList.add('vis');
        });
      }, 100);
    }
    
    return () => {
      lenis.destroy();
      obs.disconnect();
    };
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden relative bg-[#FAF6F2]" ref={containerRef}>
      
      {/* Liquid Blue Background for Continuity! */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-80">
        <BackgroundGradientAnimation 
          containerClassName="absolute inset-0 w-full h-full"
          gradientBackgroundStart="rgb(250, 246, 242)"
          gradientBackgroundEnd="rgb(250, 246, 242)"
          firstColor="100, 180, 255"
          secondColor="150, 210, 255"
          thirdColor="200, 235, 255"
          fourthColor="250, 246, 242"
          fifthColor="120, 190, 255"
          pointerColor="140, 200, 255"
          blendingValue="normal"
        />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .org-masonry {
          column-count: 5;
          column-gap: 16px;
          padding: 16px;
        }
        @media(max-width:1100px){ .org-masonry{ column-count:4 } }
        @media(max-width:800px) { .org-masonry{ column-count:3 } }
        @media(max-width:500px) { .org-masonry{ column-count:2; column-gap:8px; padding: 8px; } }

        .org-card {
          break-inside: avoid;
          margin-bottom: 16px;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          background: transparent;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .75s cubic-bezier(.23,1,.32,1), transform .75s cubic-bezier(.23,1,.32,1);
          cursor: pointer;
        }
        .org-card.vis { opacity: 1; transform: translateY(0); }
        .org-card:hover { z-index: 10; }

        /* HTML-inspired Aspect Ratios directly on the card for parallax constraint */
        .org-card.sq   { aspect-ratio: 1/1; }
        .org-card.tall { aspect-ratio: 2/3; }
        .org-card.wide { aspect-ratio: 4/3; }
        .org-card.port { aspect-ratio: 3/4; }
        .org-card.xtal { aspect-ratio: 9/16; }

        .org-text-card {
          break-inside: avoid;
          margin-bottom: 16px;
          border-radius: 12px;
          background: rgba(250, 246, 242, 0.45);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 2.5rem 1.6rem;
          display: flex; flex-direction: column; gap: .8rem;
          opacity: 0; transform: translateY(24px);
          transition: opacity .75s cubic-bezier(.23,1,.32,1), transform .75s cubic-bezier(.23,1,.32,1);
          color: #3A2E2E;
        }
        .org-text-card.vis { opacity: 1; transform: translateY(0); }
        .org-text-card .tc-label {
          font-family: 'DM Mono', monospace;
          font-size: .65rem; letter-spacing: .2em; font-weight: bold;
          color: #6A5F5F; text-transform: uppercase;
        }
        .org-text-card .tc-title {
          font-family: 'DM Serif Display', serif;
          font-size: 2rem; font-weight: 400; font-style: italic;
          line-height: 1.1; color: #3A2E2E;
        }
        .org-text-card .tc-body {
          font-family: 'Jost', sans-serif;
          font-size: 1rem; font-weight: 400;
          line-height: 1.6; color: #6A5F5F;
        }
      `}} />

      {/* Top Gradient Fade for perfectly readable title & back button */}
      <div className="fixed top-0 left-0 w-full h-[11rem] bg-gradient-to-b from-[#FAF6F2] via-[#FAF6F2]/90 to-transparent pointer-events-none z-30"></div>
      
      {/* Bottom Gradient Fade so images softly disappear */}
      <div className="fixed bottom-0 left-0 w-full h-[4vh] bg-gradient-to-t from-[#FAF6F2] via-[#FAF6F2]/90 to-transparent pointer-events-none z-30"></div>

      {/* Back button maintaining exact Tech Flat continuity */}
      {onBack && (
        <button onClick={onBack} className="project-back-btn z-40" style={{ position: 'fixed' }}>
          <ChevronLeft size={18} strokeWidth={1.5} />
          <span>Back</span>
        </button>
      )}

      {/* Overlay Title matching Tech Flat continuity */}
      <div className="fixed top-10 left-0 w-full text-center pointer-events-none z-40">
        <h2 className="section-title text-[#3A2E2E] drop-shadow-sm !text-[3.15rem] md:!text-[5rem] lg:!text-[5.85rem] tracking-tight" style={{ textShadow: '0 4px 25px rgba(250, 246, 242, 0.9), 0 0 10px rgba(250, 246, 242, 0.5)' }}>
          Organic Structure
        </h2>
      </div>

      {/* Masonry Content */}
      <section className="px-4 pb-32 max-w-[1800px] mx-auto z-20 relative" style={{ paddingTop: 'clamp(170px, 20vh, 255px)' }}>
        <div className="org-masonry">
          {MASONRY_ITEMS.map((item, index) => {
            if (item.type === 'text') {
              return (
                <div key={index} className="org-text-card">
                  <span className="tc-label">{item.label}</span>
                  <div className="tc-title" dangerouslySetInnerHTML={{ __html: item.title }}></div>
                  <div className="tc-body">{item.body}</div>
                </div>
              );
            }

            return (
              <div key={index} className={`org-card ${item.size}`}>
                <ParallaxBloomMedia item={item} index={index} />
              </div>
            );
          })}
        </div>
      </section>
      
    </div>
  );
}
