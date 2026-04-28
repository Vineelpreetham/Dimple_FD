import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { LuxSlider } from './ui/lux-slider';

const brand3Images = [
  { id: 1, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/3/1.jpg?updatedAt=1777066868729", alt: "Brand Project 3 Image 1", label: "Motion Series 01" },
  { id: 2, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/3/2.mp4?updatedAt=1777066870658", alt: "Brand Project 3 Image 2", label: "Motion Series 02" },
  { id: 3, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/3/3.mp4?updatedAt=1777066874643", alt: "Brand Project 3 Image 3", label: "Motion Series 03" },
  { id: 4, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/3/4.jpg?updatedAt=1777066869139", alt: "Brand Project 3 Image 4", label: "Motion Series 04" },
  { id: 5, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/3/5.mp4?updatedAt=1777066872116", alt: "Brand Project 3 Image 5", label: "Motion Series 05" },
  { id: 6, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/3/6.jpg?updatedAt=1777066868975", alt: "Brand Project 3 Image 6", label: "Motion Series 06" },
  { id: 7, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/3/7.mp4?updatedAt=1777066871811", alt: "Brand Project 3 Image 7", label: "Motion Series 07" },
  { id: 8, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/3/8.jpg?updatedAt=1777066869358", alt: "Brand Project 3 Image 8", label: "Motion Series 08" },
];

const Brand3Page = ({ onBack }) => {
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
        <LuxSlider images={brand3Images} />
      </div>
    </div>
  );
};

export default Brand3Page;
