import React from 'react';
import { LuxSlider } from './ui/lux-slider';

const design4Images = [
  { id: 1, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/4/1.jpg?updatedAt=1777147097453", alt: "Design Project 4 Image 1", label: "Structural Form 01" },
  { id: 2, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/4/2.jpg?updatedAt=1777147098468", alt: "Design Project 4 Image 2", label: "Structural Form 02" },
  { id: 3, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/4/3.jpg?updatedAt=1777147098133", alt: "Design Project 4 Image 3", label: "Structural Form 03" },
  { id: 4, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/4/4.jpg?updatedAt=1777147097888", alt: "Design Project 4 Image 4", label: "Structural Form 04" },
  { id: 5, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/4/5.jpg?updatedAt=1777147098443", alt: "Design Project 4 Image 5", label: "Structural Form 05" },
  { id: 6, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/4/6.jpg?updatedAt=1777147097992", alt: "Design Project 4 Image 6", label: "Structural Form 06" },
  { id: 7, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/4/7.jpg?updatedAt=1777147097760", alt: "Design Project 4 Image 7", label: "Structural Form 07" },
  { id: 8, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/4/8.jpg?updatedAt=1777147098012", alt: "Design Project 4 Image 8", label: "Structural Form 08" },
  { id: 9, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/4/9.jpg?updatedAt=1777147098004", alt: "Design Project 4 Image 9", label: "Structural Form 09" },
  { id: 10, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/4/10.jpg?updatedAt=1777147098418", alt: "Design Project 4 Image 10", label: "Structural Form 10" },
  { id: 11, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/4/11.jpg?updatedAt=1777147098284", alt: "Design Project 4 Image 11", label: "Structural Form 11" },
  { id: 12, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/4/12.mp4?updatedAt=1777147098811", alt: "Design Project 4 Video 1", label: "Process Motion I" },
  { id: 13, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/4/13.mp4?updatedAt=1777147099725", alt: "Design Project 4 Video 2", label: "Process Motion II" },
];

const Design4Page = ({ onBack }) => {
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
        <LuxSlider images={design4Images} />
      </div>
    </div>
  );
};

export default Design4Page;
