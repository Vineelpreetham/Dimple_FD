import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { LuxSlider } from './ui/lux-slider';

const design7Images = [
  { id: 1, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/7/1.jpg?updatedAt=1777147292623", alt: "Design Project 7 Image 1", label: "Structural Study 01" },
  { id: 2, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/7/2.jpg?updatedAt=1777147293884", alt: "Design Project 7 Image 2", label: "Structural Study 02" },
  { id: 3, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/7/3.jpg?updatedAt=1777147292965", alt: "Design Project 7 Image 3", label: "Structural Study 03" },
  { id: 4, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/7/4.jpg?updatedAt=1777147293409", alt: "Design Project 7 Image 4", label: "Structural Study 04" },
  { id: 5, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/7/5.jpg?updatedAt=1777147292992", alt: "Design Project 7 Image 5", label: "Structural Study 05" },
  { id: 6, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/7/6.jpg?updatedAt=1777147293004", alt: "Design Project 7 Image 6", label: "Structural Study 06" },
  { id: 7, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/7/7.jpg?updatedAt=1777147292583", alt: "Design Project 7 Image 7", label: "Structural Study 07" },
];

const Design7Page = ({ onBack }) => {
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
        {onBack && (
          <button onClick={onBack} className="project-back-btn" style={{ position: 'fixed' }}>
            <ChevronLeft size={18} strokeWidth={1.5} />
            <span>Back</span>
          </button>
        )}
        <LuxSlider images={design7Images} />
      </div>
    </div>
  );
};

export default Design7Page;
