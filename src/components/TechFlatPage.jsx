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
  { id: 26, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%209.png?updatedAt=1777051493325" },
  { id: 27, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%206.png?updatedAt=1777051474874" },
  { id: 28, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%2011%20copy.png?updatedAt=1777051434256" },
  { id: 29, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%20copy%203.png?updatedAt=1777051429626" },
  { id: 30, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%209%20copy.png?updatedAt=1777051416835" },
  { id: 31, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%208%20copy%202.png?updatedAt=1777051412133" },
  { id: 32, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%202.png?updatedAt=1777051668366" },
  { id: 33, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%20copy.png" },
  { id: 34, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%206%20copy.png" },
  { id: 35, alt: "Tech Flat", src: "https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%201.png" }
];

const TechFlatPage = ({ onBack }) => {

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div className="drag-explore">
        <div className="drag-explore-line"></div>
        <p className="drag-explore-text">Drag to Explore</p>
      </div>
      <DraggableContainer variant="masonry">
        <GridBody>
          {images.map((image) => (
            <GridItem
              key={image.id}
              className="relative h-54 w-36 md:h-96 md:w-64 bg-transparent"
            >
              <img
                src={getOptimizedUrl(image.src, { isTransparent: true })}
                alt={image.alt}
                className={`pointer-events-none absolute h-full w-full object-contain p-2 ${image.customClass || ''}`}
                style={{ mixBlendMode: 'multiply' }}
              />
            </GridItem>
          ))}
        </GridBody>
      </DraggableContainer>
      

      {/* Overlay Title restored */}
      <div className="absolute top-12 left-0 w-full text-center pointer-events-none z-20">
        <h2 className="section-title text-[#1a2744]">Tech Flat</h2>
      </div>

      {/* Back button */}
      {onBack && (
        <button onClick={onBack} className="project-back-btn" style={{ position: 'fixed' }}>
          <ChevronLeft size={18} strokeWidth={1.5} />
          <span>Back</span>
        </button>
      )}
    </div>
  );
};

export default TechFlatPage;
