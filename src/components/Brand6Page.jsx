import React from 'react';
import { LuxSlider } from './ui/lux-slider';

const brand6Images = [
  { id: 1, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/6/1.jpg?updatedAt=1777140547507", alt: "Brand Project 6 Image 1", label: "Film Series 01" },
  { id: 2, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/6/2.mp4?updatedAt=1777140555714", alt: "Brand Project 6 Video 2", label: "Film Series 02" },
  { id: 3, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/6/3.mp4?updatedAt=1777140561921", alt: "Brand Project 6 Video 3", label: "Film Series 03" },
  { id: 4, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/6/4.jpg?updatedAt=1777140548502", alt: "Brand Project 6 Image 4", label: "Film Series 04" },
  { id: 5, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/6/5.jpg?updatedAt=1777140547879", alt: "Brand Project 6 Image 5", label: "Film Series 05" },
];

const Brand6Page = ({ onBack }) => {
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
        <LuxSlider images={brand6Images} />
      </div>
    </div>
  );
};

export default Brand6Page;
