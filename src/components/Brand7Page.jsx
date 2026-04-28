import React from 'react';
import { LuxSlider } from './ui/lux-slider';

const brand7Images = [
  { id: 1, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/7/1.jpg?updatedAt=1777140600208", alt: "Brand Project 7 Image 1", label: "Monograph Series 01" },
  { id: 2, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/7/2.jpg?updatedAt=1777140602382", alt: "Brand Project 7 Image 2", label: "Monograph Series 02" },
  { id: 3, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/7/3.jpg?updatedAt=1777140601330", alt: "Brand Project 7 Image 3", label: "Monograph Series 03" },
  { id: 4, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/7/4.jpg?updatedAt=1777140601751", alt: "Brand Project 7 Image 4", label: "Monograph Series 04" },
  { id: 5, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/7/5.jpg?updatedAt=1777140601343", alt: "Brand Project 7 Image 5", label: "Monograph Series 05" },
  { id: 6, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/7/6.jpg?updatedAt=1777140600602", alt: "Brand Project 7 Image 6", label: "Monograph Series 06" },
  { id: 7, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/7/7.jpg?updatedAt=1777140601135", alt: "Brand Project 7 Image 7", label: "Monograph Series 07" },
  { id: 8, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/7/8.jpg?updatedAt=1777140601062", alt: "Brand Project 7 Image 8", label: "Monograph Series 08" },
];

const Brand7Page = ({ onBack }) => {
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
        <LuxSlider images={brand7Images} />
      </div>
    </div>
  );
};

export default Brand7Page;
