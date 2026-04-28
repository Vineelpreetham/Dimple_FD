import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { LuxSlider } from './ui/lux-slider';

const brand4Images = [
  { id: 1, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/4/1.jpg?updatedAt=1777066903080", alt: "Brand Project 4 Image 1", label: "Brand Series 01" },
  { id: 2, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/4/2.jpg?updatedAt=1777066904000", alt: "Brand Project 4 Image 2", label: "Brand Series 02" },
  { id: 3, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/4/3.jpg?updatedAt=1777066903990", alt: "Brand Project 4 Image 3", label: "Brand Series 03" },
  { id: 4, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/4/4.jpg?updatedAt=1777066904268", alt: "Brand Project 4 Image 4", label: "Brand Series 04" },
  { id: 5, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/4/5.jpg?updatedAt=1777066903745", alt: "Brand Project 4 Image 5", label: "Brand Series 05" },
  { id: 6, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/4/6.jpg?updatedAt=1777066904491", alt: "Brand Project 4 Image 6", label: "Brand Series 06" },
];

const Brand4Page = ({ onBack }) => {
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
        <LuxSlider images={brand4Images} />
      </div>
    </div>
  );
};

export default Brand4Page;
