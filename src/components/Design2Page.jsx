import React from 'react';
import { LuxSlider } from './ui/lux-slider';

const design2Images = [
  { id: 1, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/2/1.jpg?updatedAt=1777147019999", alt: "Design Project 2 Image 1", label: "Structural Study 01" },
  { id: 2, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/2/2.jpg?updatedAt=1777147020229", alt: "Design Project 2 Image 2", label: "Structural Study 02" },
  { id: 3, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/2/3.jpg?updatedAt=1777147020239", alt: "Design Project 2 Image 3", label: "Structural Study 03" },
  { id: 4, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/2/4.jpg?updatedAt=1777147019813", alt: "Design Project 2 Image 4", label: "Structural Study 04" },
  { id: 5, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/2/5.jpg?updatedAt=1777147019818", alt: "Design Project 2 Image 5", label: "Structural Study 05" },
  { id: 6, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/2/6.jpg?updatedAt=1777147019826", alt: "Design Project 2 Image 6", label: "Structural Study 06" },
  { id: 7, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/2/7.jpg?updatedAt=1777147019987", alt: "Design Project 2 Image 7", label: "Structural Study 07" },
  { id: 8, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/2/8.jpg?updatedAt=1777147019555", alt: "Design Project 2 Image 8", label: "Structural Study 08" },
  { id: 9, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/2/9.jpg?updatedAt=1777147019190", alt: "Design Project 2 Image 9", label: "Structural Study 09" },
  { id: 10, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/2/10.jpg?updatedAt=1777147020648", alt: "Design Project 2 Image 10", label: "Structural Study 10" },
];

const Design2Page = ({ onBack }) => {
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
        <LuxSlider images={design2Images} />
      </div>
    </div>
  );
};

export default Design2Page;
