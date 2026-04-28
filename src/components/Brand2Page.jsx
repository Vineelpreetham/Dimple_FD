import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { LuxSlider } from './ui/lux-slider';

const brand2Images = [
  { id: 1, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/2/1.jpg?updatedAt=1777066831725", alt: "Brand Project 2 Image 1", label: "Collection Series 01" },
  { id: 2, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/2/2.jpg?updatedAt=1777066832185", alt: "Brand Project 2 Image 2", label: "Collection Series 02" },
  { id: 3, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/2/3.jpg?updatedAt=1777066832215", alt: "Brand Project 2 Image 3", label: "Collection Series 03" },
  { id: 4, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/2/4.jpg?updatedAt=1777066832232", alt: "Brand Project 2 Image 4", label: "Collection Series 04" },
  { id: 5, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/2/5.jpg?updatedAt=1777066832096", alt: "Brand Project 2 Image 5", label: "Collection Series 05" },
  { id: 6, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/2/6.jpg?updatedAt=1777066832370", alt: "Brand Project 2 Image 6", label: "Collection Series 06" },
  { id: 7, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/2/7.jpg?updatedAt=1777066831706", alt: "Brand Project 2 Image 7", label: "Collection Series 07" },
  { id: 8, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/2/8.jpg?updatedAt=1777066831906", alt: "Brand Project 2 Image 8", label: "Collection Series 08" },
  { id: 9, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/2/9.jpg?updatedAt=1777066831779", alt: "Brand Project 2 Image 9", label: "Collection Series 09" },
  { id: 10, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/2/10.jpg?updatedAt=1777066832065", alt: "Brand Project 2 Image 10", label: "Collection Series 10" },
];

const Brand2Page = ({ onBack }) => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      <div
        className="fixed inset-0 z-[-1] h-screen w-screen"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 20%, rgba(206,135,159, 0.45), transparent 68%),
            radial-gradient(ellipse 70% 60% at 20% 80%, rgba(110,165,225, 0.35), transparent 68%),
            radial-gradient(ellipse 60% 50% at 60% 65%, rgba(255,249,145, 0.50), transparent 68%),
            linear-gradient(180deg, #FDFBFB 0%, #EBEDEE 100%)
          `,
        }}
      />

      

      <div className="relative z-10 h-screen w-full">
        {onBack && (
          <button onClick={onBack} className="project-back-btn" style={{ position: 'fixed' }}>
            <ChevronLeft size={18} strokeWidth={1.5} />
            <span>Back</span>
          </button>
        )}
        <LuxSlider images={brand2Images} />
      </div>
    </div>
  );
};

export default Brand2Page;
