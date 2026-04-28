import React from 'react';
import { getOptimizedUrl } from '../lib/imageConfig';
import { ArrowRight } from 'lucide-react';

const BASE_ITEMS = [
  // ROW 1
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_6135%203.MOV", alt: "Video", left: 20, top: 14, width: 10, height: 24 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/DSC00633.JPG", alt: "Image", left: 32, top: 14, width: 9, height: 18 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/DSC00638.JPG", alt: "Image", left: 43, top: 14, width: 10, height: 30 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/DSC00643.JPG", alt: "Image", left: 55, top: 14, width: 9, height: 22 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4666.HEIC", alt: "Image", left: 66, top: 14, width: 9, height: 32 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4199.JPG", alt: "Image", left: 77, top: 40, width: 3, height: 6 },

  // ROW 2
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_6707.HEIC", alt: "Image", left: 14, top: 40, width: 16, height: 22 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4645.HEIC", alt: "Image", left: 32, top: 34, width: 9, height: 28 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4587.HEIC", alt: "Image", left: 43, top: 46, width: 10, height: 18 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_6709.HEIC", alt: "Image", left: 55, top: 38, width: 9, height: 22 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/DSC00647.JPG", alt: "Image", left: 66, top: 48, width: 14, height: 16 },

  // ROW 3
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_6134.MOV", alt: "Video", left: 14, top: 64, width: 10, height: 22 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/DSC00644.JPG", alt: "Image", left: 26, top: 64, width: 4, height: 16 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/DSC00629.JPG", alt: "Image", left: 32, top: 64, width: 17, height: 20 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4299.jpg", alt: "Image", left: 51, top: 62, width: 9, height: 24 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4191.JPG", alt: "Image", left: 62, top: 62, width: 4, height: 24 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/C2DF104F-3F30-448C-9B3F-D3FFB5886252.MP4", alt: "Video", left: 68, top: 66, width: 12, height: 20 },
  { src: "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4661.HEIC", alt: "Image", left: 82, top: 68, width: 7, height: 14 },
];

// Generate a single continuous array of items. We duplicate the layout logic but shift the `top` down.
const CONTINUOUS_IMAGES = [];
let idCounter = 1;

const ALL_ASSETS = [
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_6135%203.MOV",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4666.HEIC",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4199.JPG",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_6707.HEIC",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4645.HEIC",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_6134.MOV",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4587.HEIC",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4191.JPG",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4637.HEIC",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_6710.HEIC",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/C2DF104F-3F30-448C-9B3F-D3FFB5886252.MP4",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4308%203.JPG",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4232.JPG",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4596.MOV",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4652.jpg",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4658.HEIC",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4654.HEIC",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4659.HEIC",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4653.HEIC",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4660.HEIC",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/DSC00631.JPG",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/DSC00635.JPG",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/DSC00641.JPG",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4649.jpg",
];

let globalImageIndex = 0;
const getNextSource = () => {
  const src = ALL_ASSETS[globalImageIndex % ALL_ASSETS.length];
  globalImageIndex++;
  return src;
};

// Batch 1
BASE_ITEMS.forEach((item) => {
  CONTINUOUS_IMAGES.push({ 
    ...item, 
    id: idCounter++,
    src: getNextSource()
  });
});

// Batch 2 (Shifted down)
BASE_ITEMS.forEach((item) => {
  CONTINUOUS_IMAGES.push({
    ...item,
    id: idCounter++,
    top: item.top + 74,
    src: getNextSource()
  });
});

// Batch 3 (Shifted down)
BASE_ITEMS.forEach((item) => {
  CONTINUOUS_IMAGES.push({
    ...item,
    id: idCounter++,
    top: item.top + 148,
    src: getNextSource()
  });
});

const OrganicStructuresPage = () => {
  // Calculate dynamic container height based on the lowest item.
  // The original layout assumed an aspect ratio of 16/10 (height is 62.5% of width).
  // We use this multiplier to convert virtual coordinates to actual padding-bottom percentage.
  const maxVirtualHeight = Math.max(...CONTINUOUS_IMAGES.map(i => i.top + i.height)) + 10; // add padding at bottom
  const containerPaddingBottom = (maxVirtualHeight / 100) * 62.5;

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden overflow-y-auto pb-32">
      <div className="scroll-explore">
        <div className="scroll-explore-line"></div>
        <p className="scroll-explore-text">Scroll to Explore</p>
      </div>
      <div className="w-full flex flex-col items-center pt-24">
        <div className="collections-header w-full flex flex-col items-center mb-16">
          <h2 className="section-title">Organic Textures</h2>
        </div>

        {/* Single continuous collage container */}
        <div 
          className="relative w-full max-w-[1600px] mx-auto z-10"
          style={{ paddingBottom: `${containerPaddingBottom}%` }}
        >
          {CONTINUOUS_IMAGES.map((item) => (
            <div 
              key={item.id} 
              className="absolute rounded-xl overflow-hidden reveal bg-white/40 border-4 border-white/60 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-white/90"
              style={{ 
                left: `${item.left}%`, 
                top: `${(item.top / maxVirtualHeight) * 100}%`, 
                width: `${item.width}%`, 
                height: `${(item.height / maxVirtualHeight) * 100}%`,
                transitionDelay: `${Math.random() * 0.4}s` 
              }}
            >
              {item.isText ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md p-4 text-center">
                  <h2 className="font-serif text-sm md:text-lg tracking-wider text-gray-900 leading-snug mb-2 whitespace-pre-line">
                    {item.text}
                  </h2>
                  <button className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-gray-700 hover:text-gray-900 transition-colors group">
                    {item.linkText}
                    <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ) : item.src && item.src.match(/\.(mp4|mov)$/i) ? (
                <video 
                  src={getOptimizedUrl(item.src)} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                />
              ) : (
                <img 
                  src={getOptimizedUrl(item.src)} 
                  alt={item.alt || "Organic Structure"}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OrganicStructuresPage;
