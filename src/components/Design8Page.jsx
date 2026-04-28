import React from 'react';
import { LuxSlider } from './ui/lux-slider';

const design8Images = [
  { id: 1, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/8/1.jpg?updatedAt=1777147372918", alt: "Design Project 8 Image 1", label: "Form Study 01" },
  { id: 2, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/8/2.jpg?updatedAt=1777147373264", alt: "Design Project 8 Image 2", label: "Form Study 02" },
  { id: 3, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/8/3.jpg?updatedAt=1777147373436", alt: "Design Project 8 Image 3", label: "Form Study 03" },
  { id: 4, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/8/4.jpg?updatedAt=1777147373228", alt: "Design Project 8 Image 4", label: "Form Study 04" },
  { id: 5, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/8/5.jpg?updatedAt=1777147373451", alt: "Design Project 8 Image 5", label: "Form Study 05" },
  { id: 6, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/8/6.jpg?updatedAt=1777147373263", alt: "Design Project 8 Image 6", label: "Form Study 06" },
];

const Design8Page = ({ onBack }) => {
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
        <LuxSlider images={design8Images} />
      </div>
    </div>
  );
};

export default Design8Page;
