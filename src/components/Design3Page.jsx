import React from 'react';
import { LuxSlider } from './ui/lux-slider';

const design3Images = [
  { id: 1, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/3/1.jpg?updatedAt=1777147045908", alt: "Design Project 3 Image 1", label: "Experimental Form 01" },
  { id: 2, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/3/2.jpg?updatedAt=1777147045669", alt: "Design Project 3 Image 2", label: "Experimental Form 02" },
  { id: 3, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/3/3.jpg?updatedAt=1777147046280", alt: "Design Project 3 Image 3", label: "Experimental Form 03" },
  { id: 4, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/3/4.jpg?updatedAt=1777147046045", alt: "Design Project 3 Image 4", label: "Experimental Form 04" },
  { id: 5, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/3/5.jpg?updatedAt=1777147045420", alt: "Design Project 3 Image 5", label: "Experimental Form 05" },
  { id: 6, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/3/6.jpg?updatedAt=1777147045638", alt: "Design Project 3 Image 6", label: "Experimental Form 06" },
  { id: 7, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/3/7.jpg?updatedAt=1777147046071", alt: "Design Project 3 Image 7", label: "Experimental Form 07" },
  { id: 8, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/3/8.jpg?updatedAt=1777147045692", alt: "Design Project 3 Image 8", label: "Experimental Form 08" },
  { id: 9, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/3/9.jpg?updatedAt=1777147045614", alt: "Design Project 3 Image 9", label: "Experimental Form 09" },
  { id: 10, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/3/10.jpg?updatedAt=1777147045678", alt: "Design Project 3 Image 10", label: "Experimental Form 10" },
  { id: 11, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/3/project%203.mp4?updatedAt=1777147053271", alt: "Design Project 3 Video", label: "Process Motion" },
];

const Design3Page = ({ onBack }) => {
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
        <LuxSlider images={design3Images} />
      </div>
    </div>
  );
};

export default Design3Page;
