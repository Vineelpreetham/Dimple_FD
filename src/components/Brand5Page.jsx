import React from 'react';
import { LuxSlider } from './ui/lux-slider';

const brand5Images = [
  { id: 1, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/5/1.jpg?updatedAt=1777139999300", alt: "Brand Project 5 Image 1", label: "Studio Series 01" },
  { id: 2, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/5/2.jpg?updatedAt=1777139998965", alt: "Brand Project 5 Image 2", label: "Studio Series 02" },
  { id: 3, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/5/3.jpg?updatedAt=1777139999420", alt: "Brand Project 5 Image 3", label: "Studio Series 03" },
  { id: 4, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/5/4.jpg?updatedAt=1777140000166", alt: "Brand Project 5 Image 4", label: "Studio Series 04" },
  { id: 5, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/5/5.jpg?updatedAt=1777139999831", alt: "Brand Project 5 Image 5", label: "Studio Series 05" },
  { id: 6, src: "https://ik.imagekit.io/Nouskun/Dimple/Brand/5/6.jpg?updatedAt=1777139999924", alt: "Brand Project 5 Image 6", label: "Studio Series 06" },
];

const Brand5Page = ({ onBack }) => {
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
        <LuxSlider images={brand5Images} />
      </div>
    </div>
  );
};

export default Brand5Page;
