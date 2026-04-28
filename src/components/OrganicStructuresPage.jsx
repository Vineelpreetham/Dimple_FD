import React, { useState, useEffect, useRef } from 'react';
import { getOptimizedUrl } from '../lib/imageConfig';
import { ChevronLeft } from 'lucide-react';

// Only include files confirmed to return 200 from ImageKit
const COLLAGE_ITEMS = [
  // ROW 1
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_6135%203.MOV", alt: "Process Video", left: 8, top: 5, width: 14, height: 28, type: 'video' },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4666.HEIC", alt: "Organic Pattern", left: 24, top: 8, width: 12, height: 22 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4199.JPG", alt: "Detail Shot", left: 38, top: 5, width: 18, height: 30 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_6707.HEIC", alt: "Texture Exploration", left: 58, top: 8, width: 13, height: 24 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4645.HEIC", alt: "Natural Material", left: 73, top: 5, width: 10, height: 28 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4587.HEIC", alt: "Organic Form", left: 85, top: 10, width: 10, height: 20 },

  // ROW 2
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_6709.HEIC", alt: "Structure Study", left: 6, top: 38, width: 16, height: 24 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4299.jpg", alt: "Nature Study", left: 24, top: 34, width: 10, height: 28 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4191.JPG", alt: "Organic Detail", left: 36, top: 40, width: 8, height: 22 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4637.HEIC", alt: "Organic Texture", left: 46, top: 36, width: 14, height: 26 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_6134.MOV", alt: "Process Video", left: 62, top: 38, width: 12, height: 24, type: 'video' },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4661.HEIC", alt: "Organic Structure", left: 76, top: 36, width: 10, height: 22 },

  // ROW 3
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_6710.HEIC", alt: "Material Study", left: 10, top: 66, width: 12, height: 24 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4308%203.JPG", alt: "Close-up Study", left: 24, top: 68, width: 16, height: 22 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4232.JPG", alt: "Natural Form", left: 42, top: 66, width: 10, height: 26 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4596.MOV", alt: "Process Video", left: 54, top: 70, width: 12, height: 20, type: 'video' },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4652.jpg", alt: "Texture Detail", left: 68, top: 66, width: 10, height: 24 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/C2DF104F-3F30-448C-9B3F-D3FFB5886252.MP4", alt: "Process Video", left: 80, top: 68, width: 12, height: 22, type: 'video' },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4660.HEIC", alt: "Organic Structure", left: 4, top: 72, width: 5, height: 14 },
].map((item, i) => ({ ...item, id: i + 1 }));

// Determine if a source is a video
const isVideo = (src, type) => {
  if (type === 'video') return true;
  return src && /\.(mp4|mov|webm|ogg)$/i.test(src);
};

/**
 * Lazy-loaded media card — only loads when visible in viewport
 */
const LazyMediaCard = ({ item, style }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const optimizedSrc = getOptimizedUrl(item.src);

  return (
    <div
      ref={ref}
      className="absolute rounded-xl overflow-hidden bg-white/40 border-4 border-white/60 shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-white/90"
      style={style}
    >
      {isVisible ? (
        isVideo(item.src, item.type) ? (
          <video
            src={optimizedSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={() => setHasError(true)}
          />
        ) : hasError ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#f0d6de]/40 to-[#d6e8f4]/40" />
        ) : (
          <img
            src={optimizedSrc}
            alt={item.alt || "Organic Structure"}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={() => setHasError(true)}
          />
        )
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-white/60 to-white/20 animate-pulse" />
      )}
    </div>
  );
};

const OrganicStructuresPage = ({ onBack }) => {
  const maxVirtualHeight = Math.max(...COLLAGE_ITEMS.map(i => i.top + i.height)) + 6;
  const containerPaddingBottom = (maxVirtualHeight / 100) * 62.5;

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden overflow-y-auto pb-32">
      <div className="scroll-explore">
        <div className="scroll-explore-line"></div>
        <p className="scroll-explore-text">Scroll to Explore</p>
      </div>

      <div className="w-full flex flex-col items-center pt-24">
        {/* Back button */}
        {onBack && (
          <button onClick={onBack} className="project-back-btn">
            <ChevronLeft size={18} strokeWidth={1.5} />
            <span>Back</span>
          </button>
        )}

        {/* Heading - properly centered */}
        <div className="w-full text-center mb-16 px-4">
          <h2 className="section-title" style={{ textAlign: 'center', width: '100%' }}>Organic Textures</h2>
        </div>

        {/* Collage container */}
        <div
          className="relative w-full max-w-[1600px] mx-auto z-10"
          style={{ paddingBottom: `${containerPaddingBottom}%` }}
        >
          {COLLAGE_ITEMS.map((item) => (
            <LazyMediaCard
              key={item.id}
              item={item}
              style={{
                left: `${item.left}%`,
                top: `${(item.top / maxVirtualHeight) * 100}%`,
                width: `${item.width}%`,
                height: `${(item.height / maxVirtualHeight) * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganicStructuresPage;
