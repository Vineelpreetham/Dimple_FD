import React from 'react';
import { LuxSlider } from './ui/lux-slider';

const design9Images = [
  { id: 1, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/9/1.jpg?updatedAt=1777147410119", alt: "Design Project 9 Image 1", label: "Final Study 01" },
  { id: 2, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/9/2.jpg?updatedAt=1777147410292", alt: "Design Project 9 Image 2", label: "Final Study 02" },
  { id: 3, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/9/3.jpg?updatedAt=1777147410369", alt: "Design Project 9 Image 3", label: "Final Study 03" },
  { id: 4, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/9/4.jpg?updatedAt=1777147410438", alt: "Design Project 9 Image 4", label: "Final Study 04" },
  { id: 5, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/9/5.jpg?updatedAt=1777147410628", alt: "Design Project 9 Image 5", label: "Final Study 05" },
  { id: 6, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/9/6.jpg?updatedAt=1777147410390", alt: "Design Project 9 Image 6", label: "Final Study 06" },
];

const Design9Page = ({ onBack }) => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Background with subtle gradients */}
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
        <LuxSlider images={design9Images} />
      </div>
    </div>
  );
};

export default Design9Page;
