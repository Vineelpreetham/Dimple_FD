import React from 'react';
import { LuxSlider } from './ui/lux-slider';

const design1Images = [
  { id: 1, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/design%201/1.jpg?updatedAt=1777146977236", alt: "Design Project 1 Image 1", label: "Design Series 01" },
  { id: 2, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/design%201/2.jpg?updatedAt=1777146977453", alt: "Design Project 1 Image 2", label: "Design Series 02" },
  { id: 3, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/design%201/3.jpg?updatedAt=1777146977790", alt: "Design Project 1 Image 3", label: "Design Series 03" },
  { id: 4, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/design%201/4.jpg?updatedAt=1777146977610", alt: "Design Project 1 Image 4", label: "Design Series 04" },
  { id: 5, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/design%201/5.jpg?updatedAt=1777146977808", alt: "Design Project 1 Image 5", label: "Design Series 05" },
  { id: 6, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/design%201/6.jpg?updatedAt=1777146977733", alt: "Design Project 1 Image 6", label: "Design Series 06" },
  { id: 7, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/design%201/7.jpg?updatedAt=1777146978272", alt: "Design Project 1 Image 7", label: "Design Series 07" },
  { id: 8, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/design%201/8.jpg?updatedAt=1777146977800", alt: "Design Project 1 Image 8", label: "Design Series 08" },
  { id: 9, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/design%201/9.jpg?updatedAt=1777146977711", alt: "Design Project 1 Image 9", label: "Design Series 09" },
  { id: 10, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/design%201/10.jpg?updatedAt=1777146977782", alt: "Design Project 1 Image 10", label: "Design Series 10" },
  { id: 11, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/design%201/11.jpg?updatedAt=1777146977754", alt: "Design Project 1 Image 11", label: "Design Series 11" },
  { id: 12, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/design%201/12.jpg?updatedAt=1777146977798", alt: "Design Project 1 Image 12", label: "Design Series 12" },
  { id: 13, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/design%201/13.jpg?updatedAt=1777146977998", alt: "Design Project 1 Image 13", label: "Design Series 13" },
  { id: 14, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/design%201/14.jpg?updatedAt=1777146977730", alt: "Design Project 1 Image 14", label: "Design Series 14" },
  { id: 15, src: "https://ik.imagekit.io/Nouskun/Dimple/design%20/design%201/15.jpg?updatedAt=1777146977947", alt: "Design Project 1 Image 15", label: "Design Series 15" },
];

const Design1Page = ({ onBack }) => {
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
        <LuxSlider images={design1Images} />
      </div>
    </div>
  );
};

export default Design1Page;
