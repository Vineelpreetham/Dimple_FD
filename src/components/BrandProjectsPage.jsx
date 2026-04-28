import React from 'react';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { getOptimizedUrl } from '../lib/imageConfig';

const brandProjects = [
  {
    id: 1,
    title: "Umbra",
    brand: "Margiela",
    tagline: "Maison Margiela — Where the absence of form becomes the form itself. Deconstruction taken to its quietest edge.",
    image: "https://ik.imagekit.io/Nouskun/Dimple/Brand/1/1.jpg?updatedAt=1777066801626",
    delay: "0s"
  },
  {
    id: 2,
    title: "Silt",
    brand: "Bottega",
    tagline: "Bottega Veneta — Earth tones rewritten for the body. Quiet luxury that speaks only in texture.",
    image: "https://ik.imagekit.io/Nouskun/Dimple/Brand/2/1.jpg?updatedAt=1777066831725",
    delay: "0.1s"
  },
  {
    id: 3,
    title: "Reverie",
    brand: "Chloé",
    tagline: "Chloé — Sun-bleached femininity. A collection that moves like afternoon light through muslin.",
    image: "https://ik.imagekit.io/Nouskun/Dimple/Brand/3/1.jpg?updatedAt=1777066868729",
    delay: "0.2s"
  },
  {
    id: 4,
    title: "Meridian",
    brand: "Loewe",
    tagline: "Loewe — Architecture of the body. Sculptural volume, tactile contradiction, and the precision of restraint.",
    image: "https://ik.imagekit.io/Nouskun/Dimple/Brand/4/1.jpg?updatedAt=1777066903080",
    delay: "0.3s"
  },
  {
    id: 5,
    title: "Nocturne",
    brand: "Saint Laurent",
    tagline: "Saint Laurent — The power of black. Edge, precision, and a silhouette that owns the room before a word is spoken.",
    image: "https://ik.imagekit.io/Nouskun/Dimple/Brand/5/1.jpg?updatedAt=1777139999300",
    delay: "0.4s"
  },
  {
    id: 6,
    title: "Prism",
    brand: "Prada",
    tagline: "Prada — A study in transparency and structure. Where intellectual rigor meets the fluidity of light.",
    image: "https://ik.imagekit.io/Nouskun/Dimple/Brand/6/1.jpg?updatedAt=1777140547507",
    delay: "0.5s"
  },
  {
    id: 7,
    title: "Ethereal",
    brand: "Celine",
    tagline: "Celine — Minimalist precision. A collection defined by what is absent, captured in the perfection of line.",
    image: "https://ik.imagekit.io/Nouskun/Dimple/Brand/7/1.jpg?updatedAt=1777140600208",
    delay: "0.6s"
  }
];

const BrandProjectsPage = ({ onBack, onSelectProject }) => {
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

      <div className="collections-page-container flex-grow relative z-10 w-full flex flex-col items-center pt-24">
        {onBack && (
          <button onClick={onBack} className="project-back-btn">
            <ChevronLeft size={18} strokeWidth={1.5} />
            <span>Back</span>
          </button>
        )}
        <div className="collections-header w-full flex flex-col items-center mb-16">
          <h2 className="section-title">Brand projects</h2>
        </div>



        {/* Large Image Cards */}
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-16 md:gap-24">
          {brandProjects.map((item) => (
            <div 
              key={item.id}
              onClick={() => onSelectProject && onSelectProject(item.id)}
              className="reveal relative w-full block cursor-pointer rounded overflow-hidden group transition-all duration-700 hover:-translate-y-2"
              style={{ transitionDelay: item.delay, willChange: 'transform' }}
            >
              <div className="relative w-full aspect-[16/10] md:aspect-[16/7] overflow-hidden rounded">
                <img
                  src={getOptimizedUrl(item.image)}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 saturate-90 group-hover:brightness-75 group-hover:saturate-100"
                />
                
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

                </div>
                
                <div className="flex-shrink-0 flex flex-col items-end gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#e8c4a0]/35 bg-[#c17a4a]/15 backdrop-blur-md flex items-center justify-center transition-all duration-500 -rotate-45 group-hover:rotate-0 group-hover:bg-[#c17a4a]/40 group-hover:border-[#e8c4a0]/60">
                    <ArrowRight className="w-4 h-4 text-[#f5ede0]" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BrandProjectsPage;
