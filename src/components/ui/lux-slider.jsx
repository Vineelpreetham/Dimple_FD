import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getOptimizedUrl } from "../../lib/imageConfig";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const optimizedUrl = getOptimizedUrl(src);

  useEffect(() => {
    if (videoRef.current) {
      // Browsers need .load() when the source changes dynamically
      videoRef.current.load();
      
      const playVideo = setTimeout(() => {
        videoRef.current?.play().catch(err => {
          console.warn("Video auto-play failed:", err);
        });
      }, 150);
      return () => clearTimeout(playVideo);
    }
  }, [optimizedUrl]);

  return (
    <video
      key={optimizedUrl}
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="block w-auto h-auto max-w-full max-h-[70vh] object-contain"
    >
      <source src={optimizedUrl} />
      Your browser does not support the video tag.
    </video>
  );
};

/**
 * LuxSlider - A premium, elegant horizontal image gallery component
 * inspired by high-end Dribbble / Framer designs.
 */
export function LuxSlider({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const lastNavigationTime = useRef(0);
  const navigationCooldown = 600; // ms between navigations

  const navigate = useCallback((newDirection) => {
    const now = Date.now();
    if (now - lastNavigationTime.current < navigationCooldown) return;
    lastNavigationTime.current = now;

    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection > 0) {
        return (prev + 1) % images.length;
      }
      return (prev - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const handleWheel = useCallback(
    (e) => {
      if (Math.abs(e.deltaX) > 30 || Math.abs(e.deltaY) > 30) {
        if (e.deltaX > 0 || e.deltaY > 0) {
          navigate(1);
        } else {
          navigate(-1);
        }
      }
    },
    [navigate]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: true });
    
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleWheel, navigate]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      scale: 1.1,
      opacity: 0,
      filter: "blur(10px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      scale: 0.9,
      opacity: 0,
      filter: "blur(10px)",
    }),
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative h-screen w-full overflow-hidden bg-transparent font-['Cormorant_Garamond']">
      {/* Texture Overlay (Grain) */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-multiply" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      {/* Background Subtle Color */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="h-full w-full"
            style={{ 
               background: `radial-gradient(circle at center, rgba(0,0,0,0.1), transparent)`
            }}
          />
        </AnimatePresence>
      </div>

      {/* Main Image Slider */}
      <div className="relative h-full w-full flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 80, damping: 20, mass: 1 },
              opacity: { duration: 0.8 },
              scale: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
              filter: { duration: 0.8 }
            }}
            className="absolute inset-0 flex items-center justify-center p-12 md:p-32"
          >
            <div className="relative w-auto h-auto max-w-[90vw] max-h-[70vh] group overflow-hidden rounded-xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] border border-white/10">
              {/* Inner glowing edge */}
              <div className="absolute inset-0 border border-white/20 rounded-xl z-20 pointer-events-none" />
              
              {/* Parallax inner media */}
              {(() => {
                const isVideo = images[currentIndex].src.match(/\.(mp4|webm|mov|ogg)/i) || 
                               images[currentIndex].src.toLowerCase().includes('.mp4') || 
                               images[currentIndex].src.toLowerCase().includes('.mov');
                
                if (isVideo) {
                  return (
                    <VideoPlayer 
                      src={images[currentIndex].src} 
                      key={images[currentIndex].src}
                    />
                  );
                }

                return (
                  <motion.img
                    key={images[currentIndex].src}
                    initial={{ scale: 1.15, x: direction > 0 ? 30 : -30 }}
                    animate={{ scale: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
                    src={getOptimizedUrl(images[currentIndex].src)}
                    alt={images[currentIndex].alt || "Brand Image"}
                    className="block w-auto h-auto max-w-full max-h-[70vh] object-contain"
                  />
                );
              })()}
              
              {/* Glassy Inner Overlay for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* UI Elements - Editorial Counters & Labels */}
      <div className="absolute top-1/2 left-10 md:left-20 -translate-y-1/2 flex flex-col gap-6 z-30 pointer-events-none">
        <div className="overflow-hidden">
          <motion.span 
            key={currentIndex}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            className="block text-9xl font-extralight tracking-tighter text-black/90 leading-none"
          >
            {String(currentIndex + 1).padStart(2, "0")}
          </motion.span>
        </div>
        
        <div className="flex flex-col gap-1 ml-4 border-l border-black/10 pl-4">
          <motion.p 
            key={currentIndex + '-label'}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[10px] uppercase tracking-[0.5em] text-black/40 font-sans font-bold"
          >
            {images[currentIndex].label || "Editorial Archive"}
          </motion.p>
          <span className="text-sm italic text-black/20">Volume 0.1</span>
        </div>
      </div>
      
      {/* Vertical Scroll Hint */}
      <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-12 z-30 pointer-events-none opacity-40">
        <p className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.4em] font-sans font-bold text-black/50">
          Scroll to explore
        </p>
        <div className="w-px h-20 bg-gradient-to-b from-black/20 to-transparent" />
      </div>



      {/* Floating Glassy Bottom Bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative flex items-center gap-6 px-8 py-4 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        >
          {/* Previous Arrow */}
          <button 
            onClick={() => navigate(-1)}
            className="p-3 text-white/70 hover:text-white hover:scale-125 transition-all duration-300 group focus:outline-none"
            aria-label="Previous slide"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Thumbnails */}
          <div className="flex gap-3 px-4 border-x border-white/10">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`relative h-12 w-12 rounded-lg overflow-hidden group transition-all duration-500 border ${idx === currentIndex ? 'border-white/60 scale-110 z-10' : 'border-white/10 opacity-40 hover:opacity-100 hover:scale-105'}`}
              >
                {img.src.match(/\.(mp4|webm|mov|ogg)/i) || img.src.toLowerCase().includes('.mp4') || img.src.toLowerCase().includes('.mov') ? (
                  <video
                    src={getOptimizedUrl(img.src)}
                    className="w-full h-full object-cover"
                    muted
                  />
                ) : (
                  <img src={getOptimizedUrl(img.src)} loading="lazy" className="w-full h-full object-cover" alt="thumb" />
                )}
                {idx === currentIndex && (
                  <motion.div 
                    layoutId="active-thumb-border"
                    className="absolute inset-0 border-2 border-white rounded-lg z-10"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Next Arrow */}
          <button 
            onClick={() => navigate(1)}
            className="p-3 text-white/70 hover:text-white hover:scale-125 transition-all duration-300 group focus:outline-none"
            aria-label="Next slide"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          {/* Progress Line */}
          <div className="absolute -bottom-6 left-12 right-12 h-[1px] bg-white/10">
            <motion.div 
              className="h-full bg-white/60"
              animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Side Navigation Hints */}
      <div className="hidden md:flex absolute inset-y-0 left-0 w-24 items-center justify-center z-20">
         <span className="rotate-90 text-[10px] uppercase tracking-[0.3em] text-white/20 whitespace-nowrap">Previous Work</span>
      </div>
      <div className="hidden md:flex absolute inset-y-0 right-0 w-24 items-center justify-center z-20">
         <span className="-rotate-90 text-[10px] uppercase tracking-[0.3em] text-white/20 whitespace-nowrap">Next Gallery</span>
      </div>
    </div>
  );
}
