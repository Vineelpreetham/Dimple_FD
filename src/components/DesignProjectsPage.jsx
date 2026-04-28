import React from 'react';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import { ArrowRight } from 'lucide-react';
import { getOptimizedUrl } from '../lib/imageConfig';

const designProjects = [
  {
    id: 1,
    title: "FLEUR SAUVAGE",
    category: "Design",
    tagline: "Form meets function — a study in structural silhouette and deliberate proportion.",
    image: "https://ik.imagekit.io/Nouskun/Dimple/design%20/design%201/1.jpg?updatedAt=1777146977236",
    delay: "0s"
  },
  {
    id: 2,
    title: "Adaptive fashion.",
    category: "Design",
    tagline: "Layered constructions that speak of architecture and the body in equal measure.",
    image: "https://ik.imagekit.io/Nouskun/Dimple/design%20/2/1.jpg?updatedAt=1777147019999",
    delay: "0.1s"
  },
  {
    id: 3,
    title: "Cyber Stitch",
    category: "Design",
    tagline: "The geometry of fabric — where every fold is a decision and every seam a statement.",
    image: "https://ik.imagekit.io/Nouskun/Dimple/design%20/3/1.jpg?updatedAt=1777147045908",
    delay: "0.2s"
  },
  {
    id: 4,
    title: "Surreal Softness (clo3d)",
    category: "Design",
    tagline: "Deconstructed tailoring. The raw edges are intentional, the softness earned.",
    image: "https://ik.imagekit.io/Nouskun/Dimple/design%20/4/1.jpg?updatedAt=1777147097453",
    delay: "0.3s"
  },
  {
    id: 5,
    title: "Coach nightfall",
    category: "Design",
    tagline: "Exploring the boundary between garment and armor. Protective, yet fluid.",
    image: "https://ik.imagekit.io/Nouskun/Dimple/design%20/5/1.jpg?updatedAt=1777147125992",
    delay: "0.1s"
  },
  {
    id: 6,
    title: "Scale & Skin",
    category: "Design",
    tagline: "The architecture of motion. Capturing the tension between stillness and speed.",
    image: "https://ik.imagekit.io/Nouskun/Dimple/design%20/6/1.jpg?updatedAt=1777147162715",
    delay: "0.2s"
  },
  {
    id: 7,
    title: "CHAP",
    category: "Design",
    tagline: "Symmetry in chaos. A visual dialogue between contrasting textile weights.",
    image: "https://ik.imagekit.io/Nouskun/Dimple/design%20/7/1.jpg?updatedAt=1777147292623",
    delay: "0.3s"
  },
  {
    id: 8,
    title: "The Infinite Grid",
    category: "Design",
    tagline: "The intersection of geometric precision and organic flow. A study in balance.",
    image: "https://ik.imagekit.io/Nouskun/Dimple/design%20/8/1.jpg?updatedAt=1777147372918",
    delay: "0.4s"
  },
  {
    id: 9,
    title: "TIDE woven",
    category: "Design",
    tagline: "The final synthesis. Bringing together all the structural lessons of the series.",
    image: "https://ik.imagekit.io/Nouskun/Dimple/design%20/9/1.jpg?updatedAt=1777147410119",
    delay: "0.5s"
  },
];

const DesignProjectsPage = ({ onBack, onSelectProject }) => {
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden overflow-y-auto pb-32">
      <BackgroundGradientAnimation
        containerClassName="!fixed inset-0 !z-[-1] !h-screen !w-screen"
        gradientBackgroundStart="#F1DEE4"
        gradientBackgroundEnd="#E2C2CA"
        firstColor="174, 230, 229"
        secondColor="184, 179, 232"
        thirdColor="144, 180, 245"
        fourthColor="98, 128, 230"
        fifthColor="100, 220, 255"
        pointerColor="200, 200, 250"
      />




      <div className="scroll-explore">
        <div className="scroll-explore-line"></div>
        <p className="scroll-explore-text">Scroll to Explore</p>
      </div>

      <div className="collections-page-container flex-grow relative z-10 w-full min-h-screen flex flex-col items-center">

        
        <div className="collections-header w-full flex flex-col items-center mb-16">
          <h2 className="section-title">Design projects</h2>
        </div>



        {/* Large Image Cards */}
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-16 md:gap-24">
          {designProjects.map((item) => (
            <div 
              key={item.id}
              onClick={() => onSelectProject && onSelectProject(item.id)}
              className="reveal relative w-full block cursor-pointer rounded overflow-hidden group transition-all duration-700 hover:-translate-y-2"
              style={{ transitionDelay: item.delay }}
            >
              <div className="relative w-full aspect-[16/10] md:aspect-[16/7] overflow-hidden rounded bg-[#e8d8dc]/60 flex items-center justify-center">
                {item.image ? (
                  <img 
                    src={getOptimizedUrl(item.image)} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 saturate-90 group-hover:brightness-75 group-hover:saturate-100"
                  />
                ) : (
                  <span className="text-[#8b7355]/40 text-xs uppercase tracking-widest">Image coming soon</span>
                )}
                
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c17a4a]/10 via-transparent to-[#2c2420]/35 transition-opacity duration-500 opacity-50 group-hover:opacity-70"></div>
              </div>
              
              {/* Corner Pill */}
              <div className="absolute top-5 right-5 px-4 py-2 bg-[#faf6f0]/10 backdrop-blur-md border border-white/20 rounded-[2px] text-[9px] tracking-[0.25em] uppercase text-white/70 font-light opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hidden md:block">
                View Project
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 px-6 pt-12 pb-6 md:px-10 md:pt-16 md:pb-8 bg-gradient-to-t from-[#140e0a]/80 via-[#140e0a]/40 to-transparent flex items-end justify-between gap-6 transition-all duration-500 group-hover:pb-10">
                <div className="flex-1">

                  <h2 className="font-serif text-3xl md:text-4xl font-light text-[#f5ede0] leading-none tracking-wide mb-2 transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h2>

                </div>
                
                <div className="flex-shrink-0 flex flex-col items-end gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#e8c4a0]/35 bg-[#c17a4a]/15 backdrop-blur-md flex items-center justify-center transition-all duration-500 -rotate-45 group-hover:rotate-0 group-hover:bg-[#c17a4a]/40 group-hover:border-[#e8c4a0]/60">
                    <ArrowRight className="w-4 h-4 text-[#f5ede0]" strokeWidth={1.5} />
                  </div>
                  {/* Category removed per user request */}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DesignProjectsPage;
