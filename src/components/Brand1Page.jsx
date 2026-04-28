import React from 'react';
import { LuxSlider } from './ui/lux-slider';

const brand1Images = [
  { id: 1, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/1/1.jpg?updatedAt=1777066801626", alt: "Brand Project Image 1", label: "Editorial Series 01" },
  { id: 2, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/1/2.jpg?updatedAt=1777066803188", alt: "Brand Project Image 2", label: "Editorial Series 02" },
  { id: 3, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/1/3.jpg?updatedAt=1777066802581", alt: "Brand Project Image 3", label: "Editorial Series 03" },
  { id: 4, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/1/4.jpg?updatedAt=1777066803089", alt: "Brand Project Image 4", label: "Editorial Series 04" },
  { id: 5, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/1/5.jpg?updatedAt=1777066803115", alt: "Brand Project Image 5", label: "Editorial Series 05" },
  { id: 6, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/1/6.jpg?updatedAt=1777066802989", alt: "Brand Project Image 6", label: "Editorial Series 06" },
  { id: 7, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/1/7.jpg?updatedAt=1777066803187", alt: "Brand Project Image 7", label: "Editorial Series 07" },
  { id: 8, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/1/8.jpg?updatedAt=1777066802867", alt: "Brand Project Image 8", label: "Editorial Series 08" },
];

const Brand1Page = ({ onBack }) => {
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
        <LuxSlider images={brand1Images} />
      </div>
    </div>
  );
};

export default Brand1Page;
