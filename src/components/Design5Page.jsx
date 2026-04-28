import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { LuxSlider } from './ui/lux-slider';

const design5Images = [
  { id: 1, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/5/1.jpg?updatedAt=1777147125992", alt: "Design Project 5 Image 1", label: "Experimental Study 01" },
  { id: 2, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/5/3.jpg?updatedAt=1777147126056", alt: "Design Project 5 Image 2", label: "Experimental Study 02" },
  { id: 3, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/5/4.jpg?updatedAt=1777147126245", alt: "Design Project 5 Image 3", label: "Experimental Study 03" },
  { id: 4, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/5/5.jpg?updatedAt=1777147126273", alt: "Design Project 5 Image 4", label: "Experimental Study 04" },
  { id: 5, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/5/6.jpg?updatedAt=1777147126002", alt: "Design Project 5 Image 5", label: "Experimental Study 05" },
  { id: 6, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/5/7.jpg?updatedAt=1777147126534", alt: "Design Project 5 Image 6", label: "Experimental Study 06" },
  { id: 7, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/5/8.jpg?updatedAt=1777147125963", alt: "Design Project 5 Image 7", label: "Experimental Study 07" },
  { id: 8, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/5/9.jpg?updatedAt=1777147126198", alt: "Design Project 5 Image 8", label: "Experimental Study 08" },
  { id: 9, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/5/10.jpg?updatedAt=1777147126046", alt: "Design Project 5 Image 9", label: "Experimental Study 09" },
  { id: 10, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/5/11.jpg?updatedAt=1777147126221", alt: "Design Project 5 Image 10", label: "Experimental Study 10" },
  { id: 11, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/5/12.jpg?updatedAt=1777147126026", alt: "Design Project 5 Image 11", label: "Experimental Study 11" },
  { id: 12, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/5/13.jpg?updatedAt=1777147126268", alt: "Design Project 5 Image 12", label: "Experimental Study 12" },
  { id: 13, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/5/14.jpg?updatedAt=1777147126011", alt: "Design Project 5 Image 13", label: "Experimental Study 13" },
  { id: 14, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/5/15.jpg?updatedAt=1777147126440", alt: "Design Project 5 Image 14", label: "Experimental Study 14" },
  { id: 15, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/5/16.jpg?updatedAt=1777147126053", alt: "Design Project 5 Image 15", label: "Experimental Study 15" },
  { id: 16, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/5/project%205.mp4?updatedAt=1777147127102", alt: "Design Project 5 Video", label: "Process Motion" },
];

const Design5Page = ({ onBack }) => {
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
        <LuxSlider images={design5Images} />
      </div>
    </div>
  );
};

export default Design5Page;
