import React from 'react';
import { LuxSlider } from './ui/lux-slider';

const design6Images = [
  { id: 1, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/6/1.jpg?updatedAt=1777147162715", alt: "Design Project 6 Image 1", label: "Form Exploration 01" },
  { id: 2, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/6/2.jpg?updatedAt=1777147163594", alt: "Design Project 6 Image 2", label: "Form Exploration 02" },
  { id: 3, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/6/3.jpg?updatedAt=1777147163914", alt: "Design Project 6 Image 3", label: "Form Exploration 03" },
  { id: 4, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/6/4.jpg?updatedAt=1777147163557", alt: "Design Project 6 Image 4", label: "Form Exploration 04" },
  { id: 5, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/6/5.jpg?updatedAt=1777147163348", alt: "Design Project 6 Image 5", label: "Form Exploration 05" },
  { id: 6, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/6/6.jpg?updatedAt=1777147163610", alt: "Design Project 6 Image 6", label: "Form Exploration 06" },
  { id: 7, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/6/7.jpg?updatedAt=1777147163820", alt: "Design Project 6 Image 7", label: "Form Exploration 07" },
  { id: 8, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/6/9.jpg?updatedAt=1777147163813", alt: "Design Project 6 Image 8", label: "Form Exploration 08" },
  { id: 9, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/6/project%206.mp4?updatedAt=1777147164531", alt: "Design Project 6 Video", label: "Process Motion" },
];

const Design6Page = ({ onBack }) => {
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
        <LuxSlider images={design6Images} />
      </div>
    </div>
  );
};

export default Design6Page;
