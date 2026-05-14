import React from 'react';
import { 
  GridBody,
  DraggableContainer,
  GridItem, 
} from "./ui/infinite-drag-scroll";
import { getOptimizedUrl } from '../lib/imageConfig';
import { ChevronLeft } from 'lucide-react';

const images = [
  { id: 1, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%201%20copy.png?updatedAt=1777051674264" },
  { id: 2, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%205%20copy.png?updatedAt=1777051663100" },
  { id: 3, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%207%20copy.png?updatedAt=1777051661443" },
  { id: 4, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%2010.png?updatedAt=1777051658184" },
  { id: 5, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%2012.png?updatedAt=1777051653650" },
  { id: 6, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork.png?updatedAt=1777051649738" },
  { id: 7, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%207.png?updatedAt=1777051647018" },
  { id: 8, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%205.png?updatedAt=1777051641090" },
  { id: 9, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%204.png?updatedAt=1777051636657" },
  { id: 10, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%2013.png?updatedAt=1777051627724" },
  { id: 11, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%2012%20copy.png?updatedAt=1777051623493" },
  { id: 12, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%208.png?updatedAt=1777051599411" },
  { id: 13, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%201%20copy%202.png?updatedAt=1777051585162" },
  { id: 14, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%204%20copy.png?updatedAt=1777051577120" },
  { id: 15, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%2011.png?updatedAt=1777051574981" },
  { id: 16, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%208%20copy.png?updatedAt=1777051536873" },
  { id: 17, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%203.png?updatedAt=1777051534745" },
  { id: 18, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%203%20copy.png?updatedAt=1777051529058" },
  { id: 19, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%205%20copy%202.png?updatedAt=1777051524682" },
  { id: 20, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%206%20copy%202.png?updatedAt=1777051524299" },
  { id: 21, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%2014.png?updatedAt=1777051518905" },
  { id: 22, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%2010%20copy.png?updatedAt=1777051515465" },
  { id: 23, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%20copy%202.png?updatedAt=1777051507633" },
  { id: 24, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%202%20copy.png?updatedAt=1777051502810" },
  { id: 25, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%207%20copy%202.png?updatedAt=1777051499702" },
  { id: 27, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%206.png?updatedAt=1777051474874" },
  { id: 28, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%2011%20copy.png?updatedAt=1777051434256" },
  { id: 29, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%20copy%203.png?updatedAt=1777051429626" },
  { id: 30, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%209%20copy.png?updatedAt=1777051416835" },
  { id: 31, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%208%20copy%202.png?updatedAt=1777051412133" },
  { id: 32, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%202.png?updatedAt=1777051668366" },
  { id: 33, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%20copy.png" },
  { id: 35, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%201.png" },
  { id: 36, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6870%20Background%20Removed.png" },
  { id: 37, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6871%20Background%20Removed.png" },
  { id: 38, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6872%20Background%20Removed.png" },
  { id: 39, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6873%20Background%20Removed.png" },
  { id: 40, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6874%20Background%20Removed.png" },
  { id: 41, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6875%20Background%20Removed.png" },
  { id: 42, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6876%20Background%20Removed.png" },
  { id: 43, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6877%20Background%20Removed.png" },
  { id: 44, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6878%20Background%20Removed.png" },
  { id: 45, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6879%20Background%20Removed.png" },
  { id: 46, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6880-Photoroom.png" },
  { id: 47, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6881%20Background%20Removed.png" },
  { id: 48, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6882%20Background%20Removed.png" },
  { id: 49, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6883%20Background%20Removed.png" },
  { id: 50, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6884%20Background%20Removed.png" },
  { id: 51, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6885%20Background%20Removed.png" },
  { id: 52, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6886%20Background%20Removed.png" },
  { id: 53, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6887%20Background%20Removed.png" },
  { id: 54, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6888%20Background%20Removed.png" },
  { id: 55, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6889%20Background%20Removed.png" },
  { id: 56, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6890%20Background%20Removed.png" },
  { id: 57, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6891%20Background%20Removed.png" },
  { id: 58, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6892%20Background%20Removed.png" },
  { id: 59, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6893%20Background%20Removed.png" },
  { id: 60, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6894%20Background%20Removed.png" },
  { id: 61, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6895%20Background%20Removed.png" },
  { id: 62, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6896%20Background%20Removed.png" },
  { id: 63, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6897%20Background%20Removed.png" },
  { id: 64, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6898%20Background%20Removed.png" },
  { id: 65, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6899%20Background%20Removed.png" },
  { id: 66, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6900%20Background%20Removed.png" },
  { id: 67, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/New%20TechFlat/IMG_6901%20Background%20Removed.png" },
  { id: 68, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%206%20copy.png" }
];

import { BackgroundGradientAnimation } from './ui/background-gradient-animation';

const TechFlatPage = ({ onBack }) => {

  const spacedImages = React.useMemo(() => {
    // 1. Extract base name to identify identical artworks (ignoring "copy" suffixes)
    const getBaseName = (src) => {
      let name = src.split('/').pop().split('?')[0];
      name = decodeURIComponent(name);
      name = name.replace(/\s*copy\s*\d*/gi, '').replace(/\s*copy/gi, '').trim();
      return name;
    };

    // 2. Group images by their base artwork
    const groups = {};
    images.forEach(img => {
      const base = getBaseName(img.src);
      if (!groups[base]) groups[base] = [];
      groups[base].push(img);
    });

    // 3. Sort groups by size so we process the most highly-duplicated ones first
    const groupKeys = Object.keys(groups).sort((a, b) => groups[b].length - groups[a].length);
    
    // 4. Flatten them round-robin style so duplicates are spaced as far apart as possible
    const flatRoundRobin = [];
    while (flatRoundRobin.length < images.length) {
      for (const key of groupKeys) {
        if (groups[key].length > 0) {
          flatRoundRobin.push(groups[key].shift());
        }
      }
    }

    // 5. Scramble the round-robin array using a prime stride (13 is coprime to 66)
    // This perfectly scatters them so they don't form vertical or diagonal lines in the 11-col grid!
    const result = new Array(images.length);
    const stride = 13; 
    for (let i = 0; i < images.length; i++) {
      result[(i * stride) % images.length] = flatRoundRobin[i];
    }
    return result;
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden relative bg-[#FAF6F2]">
      {/* Liquid Blue Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
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

      {/* Top Gradient Fade for perfectly readable title & back button */}
      <div className="absolute top-0 left-0 w-full h-[11rem] bg-gradient-to-b from-[#FAF6F2] via-[#FAF6F2]/90 to-transparent pointer-events-none z-10"></div>
      
      {/* Bottom Gradient Fade so images softly disappear */}
      <div className="absolute bottom-0 left-0 w-full h-[4vh] bg-gradient-to-t from-[#FAF6F2] via-[#FAF6F2]/90 to-transparent pointer-events-none z-10"></div>

      <div className="drag-explore z-20">
        <div className="drag-explore-line"></div>
        <p className="drag-explore-text">Drag to Explore</p>
      </div>
      
      <div style={{ mixBlendMode: 'multiply' }}>
        <DraggableContainer variant="masonry">
          <GridBody>
            {spacedImages.map((image) => (
              <GridItem
                key={image.id}
                className="relative h-40 w-28 md:h-64 md:w-44 lg:h-80 lg:w-56 bg-transparent flex items-center justify-center transition-all duration-500 ease-out hover:z-50 active:z-50"
              >
                <img
                  src={getOptimizedUrl(image.src, { isTransparent: false })}
                  alt={image.alt}
                  loading="lazy"
                  draggable={false}
                  className={`absolute h-full w-full object-contain p-2 transition-all duration-300 ease-out group-hover:scale-[1.6] group-hover:drop-shadow-[0_25px_25px_rgba(0,0,0,0.2)] group-active:scale-[1.4] group-active:drop-shadow-[0_15px_15px_rgba(0,0,0,0.15)] origin-center ${image.customClass || ''}`}
                  style={{ userSelect: 'none', WebkitUserSelect: 'none', WebkitUserDrag: 'none' }}
                />
              </GridItem>
            ))}
          </GridBody>
        </DraggableContainer>
      </div>

      {/* Overlay Title restored with subtle glow and increased size */}
      <div className="absolute top-10 left-0 w-full text-center pointer-events-none z-20">
        <h2 className="section-title text-[#3A2E2E] drop-shadow-sm !text-[3.15rem] md:!text-[5rem] lg:!text-[5.85rem] tracking-tight" style={{ textShadow: '0 4px 25px rgba(250, 246, 242, 0.9), 0 0 10px rgba(250, 246, 242, 0.5)' }}>Tech Flat</h2>
      </div>

      {/* Back button */}
      {onBack && (
        <button onClick={onBack} className="project-back-btn z-20" style={{ position: 'fixed' }}>
          <ChevronLeft size={18} strokeWidth={1.5} />
          <span>Back</span>
        </button>
      )}
    </div>
  );
};

export default TechFlatPage;
