import React, { useState, useEffect, useCallback } from 'react';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TechFlatPage from './TechFlatPage';
import { CircularGallery } from "./ui/circular-gallery";
import BrandProjectsPage from './BrandProjectsPage';
import OrganicStructuresPage from './OrganicStructuresPage';
import Brand1Page from './Brand1Page';
import Brand2Page from './Brand2Page';
import Brand3Page from './Brand3Page';
import Brand4Page from './Brand4Page';
import Brand5Page from './Brand5Page';
import Brand6Page from './Brand6Page';
import Brand7Page from './Brand7Page';
import DesignProjectsPage from './DesignProjectsPage';
import Design1Page from './Design1Page';
import Design2Page from './Design2Page';
import Design3Page from './Design3Page';
import Design4Page from './Design4Page';
import Design5Page from './Design5Page';
import Design6Page from './Design6Page';
import Design7Page from './Design7Page';
import Design8Page from './Design8Page';
import Design9Page from './Design9Page';
import { getOptimizedUrl } from '../lib/imageConfig';

const galleryCollections = [
  {
    common: 'Tech Flat',
    binomial: 'Technical Archetypes',
    photo: {
      url: getOptimizedUrl('https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%206.png?updatedAt=1777051474874'),
      text: 'Detailed technical sketches and archetypes',
      by: 'Dimple Shivakumar'
    }
  },
  {
    common: 'Design Project 02',
    binomial: 'Selected Works',
    photo: {
      url: getOptimizedUrl('https://ik.imagekit.io/Nouskun/Dimple/design%20/2/1.jpg?updatedAt=1777147019999'),
      text: 'Conceptual design and pattern exploration',
      by: 'Dimple Shivakumar'
    }
  },
  {
    common: 'Design Project 09',
    binomial: 'Selected Works',
    photo: {
      url: getOptimizedUrl('https://ik.imagekit.io/Nouskun/Dimple/design%20/5/5.jpg?updatedAt=1777147126273'),
      text: 'Experimental silhouettes and textiles',
      by: 'Dimple Shivakumar'
    }
  },
  {
    common: 'Organic Structures',
    binomial: 'Nature & Geometry',
    photo: {
      url: getOptimizedUrl('https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4661.HEIC?updatedAt=1777140857374'),
      text: 'Bio-morphic forms and organic textures',
      by: 'Dimple Shivakumar'
    }
  },
  {
    common: 'Brand Identity 07',
    binomial: 'Curated Fragments',
    photo: {
      url: getOptimizedUrl('https://ik.imagekit.io/Nouskun/Dimple/Brand/7/4.jpg?updatedAt=1777140601751'),
      text: 'Strategic brand storytelling and visual systems',
      by: 'Dimple Shivakumar'
    }
  },
  {
    common: 'Brand Identity 03',
    binomial: 'Curated Fragments',
    photo: {
      url: getOptimizedUrl('https://ik.imagekit.io/Nouskun/Dimple/Brand/3/1.jpg?updatedAt=1777066868729'),
      text: 'Editorial branding and graphic narrative',
      by: 'Dimple Shivakumar'
    }
  },
];

const HERO_SLIDES = [
  {
    id: 'pink',
    mainImage: getOptimizedUrl('https://ik.imagekit.io/Nouskun/Dimple/Home/OB2449469_right_3.png'),
    background: '#F9F6F8',
    simpleGlow: 'rgba(206,135,159,0.75)',
    titleGradient: 'linear-gradient(180deg, #D4A0B5 0%, #C0758D 62%, #5A3742 100%)',
    navColor: '#8C5B6B',
    modelHeight: '108vh',
    modelScale: 1.35,
    modelTop: '-8%',
  },
  {
    id: 'gold',
    mainImage: getOptimizedUrl('https://ik.imagekit.io/Nouskun/Dimple/Home/Blue_use.png'),
    background: '#F9F8F2',
    simpleGlow: 'rgba(237,200,80,0.80)',
    titleGradient: 'linear-gradient(180deg, #EDE4A8 0%, #CCBA5E 67%, #6B5C22 91%)',
    navColor: '#B0986A',
    modelHeight: '108vh',
    modelScale: 1.35,
    modelTop: '-8%',
  },
  {
    id: 'maroon',
    mainImage: getOptimizedUrl('https://ik.imagekit.io/Nouskun/Dimple/Home/maroon%20use.png'),
    background: '#F8F5F6',
    simpleGlow: 'rgba(194,135,150,0.78)',
    titleGradient: 'linear-gradient(180deg, #C9B0B5 0%, #AC8E93 58%, #5C3040 91%)',
    navColor: '#8E5865',
    modelHeight: '145vh',
    modelScale: 1.35,
    modelTop: '-35%',
  },
  {
    id: 'blue',
    mainImage: getOptimizedUrl('https://ik.imagekit.io/Nouskun/Dimple/Home/lavender_use.png'),
    background: '#F4F6FA',
    simpleGlow: 'rgba(150,175,225,0.78)',
    titleGradient: 'linear-gradient(180deg, #A8B8CE 0%, #7A97B8 69%, #1A1845 91%)',
    navColor: '#6F88A6',
    modelHeight: '108vh',
    modelScale: 1.10,
    modelTop: '8.5%',
  }
];

/**
 * PriyaPortfolio Component
 * Replicates the provided portfolio page with state-based navigation
 * and scroll-reveal animations.
 */
const Nav = ({ activePage, showPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`priya-nav ${isScrolled ? "nav-scrolled" : ""}`}>
      <a href="#" className="brand" onClick={(e) => { e.preventDefault(); showPage('home'); }}>Dimple Shivakumar</a>
      <ul className="links">
        <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('home'); }} className={activePage === 'home' ? 'active' : ''}>Home</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('about'); }} className={activePage === 'about' ? 'active' : ''}>About</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('collections'); }} className={activePage === 'collections' ? 'active' : ''}>Collections</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('contact'); }} className={activePage === 'contact' ? 'active' : ''}>Contact</a></li>
      </ul>
    </nav>
  );
};

const Footer = ({ showPage }) => (
  <footer className="priya-footer">
    <div><p className="footer-brand">Dimple<br />Shivakumar</p></div>
    <ul className="footer-links">
      <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('home'); }}>Home</a></li>
      <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('about'); }}>About</a></li>
      <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('collections'); }}>Collections</a></li>
      <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('contact'); }}>Contact</a></li>
    </ul>
    <div className="footer-contact"><p>dimple@dimpleshivakumar.com</p></div>
  </footer>
);

const PriyaPortfolio = () => {
  const [activePage, setActivePage] = useState('home');
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Force scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [activePage]);

  // Determine if the current page is a main hub page
  const isMainPage = ['home', 'about', 'collections', 'contact'].includes(activePage);

  const showPage = (pageName) => {
    setActivePage(pageName);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveHeroSlide(index);
    setTimeout(() => setIsTransitioning(false), 900);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((activeHeroSlide + 1) % HERO_SLIDES.length);
  }, [activeHeroSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((activeHeroSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, [activeHeroSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (activePage !== 'home') return;
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activePage, nextSlide, prevSlide]);

  useEffect(() => {
    const initReveal = () => {
      const els = document.querySelectorAll('.reveal');
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) { 
            e.target.classList.add('visible'); 
          }
        });
      }, { threshold: 0.1 });
      els.forEach(el => obs.observe(el));
    };

    initReveal();
    // Re-initialize animations when activePage changes
  }, [activePage]);

  return (
    <div className="priya-portfolio-wrapper" style={{ '--dynamic-nav-color': activePage === 'home' ? HERO_SLIDES[activeHeroSlide].navColor : '#4A3728' }}>
      {isMainPage && <Nav activePage={activePage} showPage={showPage} />}

      {/* ═══ HOME PAGE ═══ */}
      {activePage === 'home' && (
        <div id="page-home" className="page">
          <section className="new-hero-section" style={{ backgroundColor: HERO_SLIDES[activeHeroSlide].background, transition: 'background-color 0.9s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            
            {/* Concentrated corner glow blob — matches reference */}
            <div
              className="absolute z-[0]"
              style={{
                top: '-10%',
                left: '-10%',
                width: '55%',
                height: '60%',
                background: `radial-gradient(ellipse at top left, ${HERO_SLIDES[activeHeroSlide].simpleGlow} 0%, transparent 70%)`,
                filter: 'blur(48px)',
                transition: 'background 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
                pointerEvents: 'none',
              }}
            />

            {/* Portfolio Title */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[1]" style={{ filter: 'drop-shadow(3px 8px 12px rgba(90,55,66,0.18)) drop-shadow(-1px -1px 2px rgba(255,255,255,0.5))' }}>
              {/* Glassy shimmer overlay — sits on top of gradient text */}
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <div 
                  className="new-hero-title select-none"
                  style={{ 
                    backgroundImage: HERO_SLIDES[activeHeroSlide].titleGradient, 
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Portfolio
                </div>
                {/* Glass highlight stripe — all slides */}
                  <div
                    className="new-hero-title select-none"
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: 'linear-gradient(170deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 40%, transparent 60%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      color: 'transparent',
                      pointerEvents: 'none',
                    }}
                  >
                    Portfolio
                  </div>
              </div>
            </div>
            
            {/* Removed Explore all */}


            {/* ══ Custom 3D Carousel ══ */}
            <div className="absolute inset-0 z-10 overflow-hidden" style={{ perspective: '1800px' }}>
              {HERO_SLIDES.map((slide, index) => {
                const total = HERO_SLIDES.length;
                const diff = ((index - activeHeroSlide) % total + total) % total;
                
                // Position mapping: 0=active, 1=next, total-1=prev, others=hidden
                let position;
                if (diff === 0) position = 'active';
                else if (diff === 1) position = 'next';
                else if (diff === total - 1) position = 'prev';
                else position = 'hidden';
                
                const styles = {
                  active: {
                    transform: `translateX(-50%) translateZ(0) scale(${slide.modelScale ?? 1.35})`,
                    left: '50%',
                    opacity: 1,
                    filter: 'blur(0px)',
                    zIndex: 10,
                    height: slide.modelHeight || '108vh',
                  },
                  prev: {
                    transform: 'translateX(-50%) translateZ(-200px) scale(0.5)',
                    left: '8%',
                    opacity: 0.35,
                    filter: 'blur(2px)',
                    zIndex: 5,
                    height: '95vh',
                  },
                  next: {
                    transform: 'translateX(-50%) translateZ(-200px) scale(0.5)',
                    left: '92%',
                    opacity: 0.35,
                    filter: 'blur(2px)',
                    zIndex: 5,
                    height: '95vh',
                  },
                  hidden: {
                    transform: 'translateX(-50%) translateZ(-500px) scale(0.3)',
                    left: '50%',
                    opacity: 0,
                    filter: 'blur(8px)',
                    zIndex: 1,
                    height: '95vh',
                  },
                };
                
                const s = styles[position];
                
                return (
                  <div
                    key={slide.id}
                    className="absolute cursor-pointer"
                    onClick={() => {
                      if (position === 'next') nextSlide();
                      else if (position === 'prev') prevSlide();
                    }}
                    style={{
                      left: s.left,
                      ...(position === 'active' ? { top: slide.modelTop ?? '-8%' } : { bottom: 0 }),
                      transform: s.transform,
                      opacity: s.opacity,
                      filter: s.filter,
                      zIndex: s.zIndex,
                      transition: 'all 0.85s cubic-bezier(0.22, 1, 0.36, 1)',
                      willChange: 'transform, opacity, filter',
                      transformOrigin: position === 'active' ? 'top center' : 'center bottom',
                    }}
                  >
                    <img 
                      src={slide.mainImage} 
                      alt="Fashion Model"
                      className="object-contain"
                      style={{ 
                        height: s.height,
                        filter: position === 'active' ? 'drop-shadow(0 40px 80px rgba(0,0,0,0.35))' : 'none',
                        transition: 'filter 0.85s ease',
                      }}
                      draggable={false}
                    />
                  </div>
                );
              })}
            </div>

            {/* Slide Navigation Arrows - flanking the model */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-[95vw] flex justify-between pointer-events-none">
              <button 
                onClick={prevSlide}
                className="hero-nav-arrow left pointer-events-auto"
                aria-label="Previous slide"
              >
                <ChevronLeft size={36} strokeWidth={1} />
              </button>
              <button 
                onClick={nextSlide}
                className="hero-nav-arrow right pointer-events-auto"
                aria-label="Next slide"
              >
                <ChevronRight size={36} strokeWidth={1} />
              </button>
            </div>

            {/* Navigation dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
              {HERO_SLIDES.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => goToSlide(i)}
                  className="group p-1"
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <div className={`rounded-full transition-all duration-500 ${i === activeHeroSlide ? 'w-8 h-2 bg-black/40' : 'w-2 h-2 bg-black/15 group-hover:bg-black/30'}`}></div>
                </button>
              ))}
            </div>
          </section>

          <section id="moodboard" className="py-20 px-6 md:px-12">
            <div className="reveal flex flex-col items-center">
              <p className="section-label mb-8">Portfolio</p>
              <div className="w-full max-w-7xl relative overflow-hidden">
                <img 
                  src={getOptimizedUrl('https://ik.imagekit.io/Nouskun/Dimple/WhatsApp%20Image%202026-04-09%20at%2010.42.25%20PM.jpeg?updatedAt=1777054038407')} 
                  alt="Creative Moodboard"
                  className="w-full h-auto block"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            </div>
          </section>


          {/* ══ Curated Fragments Header + Gallery ══ */}
          <section id="projects" className="relative bg-[var(--warm-white)]">
            <div className="reveal text-center px-4 pt-16 pb-4 md:pt-20 md:pb-6 flex flex-col items-center">
              <p className="section-label !mb-4 md:!mb-6" style={{ justifyContent: 'center' }}>Selected Work</p>
              <h2 className="section-title">Curated Fragments</h2>
              <div className="mt-3 md:mt-4">
                <a href="#" onClick={(e) => { e.preventDefault(); showPage('collections'); }} className="all-collections-link hover:opacity-70 transition-opacity inline-block">All Collections →</a>
              </div>
            </div>
            <div className="h-[300vh] relative">
              <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
                <div className="w-full h-full">
                  <CircularGallery 
                    items={galleryCollections} 
                    radius={window.innerWidth > 768 ? 700 : 350} 
                    autoRotateSpeed={0.01}
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="instagram">
            <div className="ig-header reveal">
              <p className="section-label" style={{ justifyContent: 'center' }}>Follow Along</p>
              <h2 className="section-title">@dimpleshivakumar</h2>
              <p className="ig-intro-text">
                Behind the seams — sketches, fittings, and moments from the atelier.
              </p>
            </div>
            <div className="ig-grid reveal">
              {[
                "https://www.instagram.com/p/DV843M-jQRh/",
                "https://www.instagram.com/reel/DVjUNI9jn07/",
                "https://www.instagram.com/p/DS33UkdE_X8/",
                "https://www.instagram.com/p/DJrkQ86O5dV/",
                "https://www.instagram.com/p/CoJlYtHJT4B/",
                "https://www.instagram.com/p/DTYESDsDjJX/"
              ].map((url, i) => (
                <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="ig-post">
                  <img src={`/assets/instagram_${i + 1}.jpg`} alt={`Instagram Post ${i + 1}`} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="ig-overlay"><span>View</span></div>
                </a>
              ))}
            </div>
            <a href="#" className="ig-cta">Follow Instagram</a>
          </section>
          {isMainPage && <Footer showPage={showPage} />}
        </div>
      )}

         {activePage === 'about' && (
        <div id="page-about" className="page relative z-0 min-h-screen bg-white overflow-hidden">
          {/* Background giant text */}
          <div className="about-v2-bg-title"><span>Let's connect!</span></div>

          {/* Main content */}
          <main className="about-v2-main">
            {/* LEFT: Photo */}
            <div className="about-v2-image-col">
              <div className="about-v2-image-frame">
                <img 
                  src={getOptimizedUrl('https://ik.imagekit.io/Nouskun/Dimple/WhatsApp%20Image%202026-04-22%20at%2020.29.30.jpeg')} 
                  alt="Dimple Shivakumar"
                  className="w-full block object-cover aspect-[3/4] rounded-[2px] filter saturate-[0.9]"
                />
              </div>
              <span className="about-v2-image-caption">Designer & Visionary</span>
            </div>

            {/* RIGHT: Text */}
            <div className="about-v2-text-col">
              <span className="about-v2-section-label">About the designer</span>

              <h1 className="about-v2-heading">
                Hi! I'm Dimple — a fashion designer who tells <em>stories</em> through prints.
              </h1>

              <div className="about-v2-divider"></div>

              <div className="about-v2-body">
                <p>
                  I grew up surrounded by hand printing and beautiful textiles, and without even realising it, that world quietly shaped everything about how I see design. I moved to the US in 2024, and stepping into a completely new country shifted something in me — the way people dress, the art on the walls, the colours in unexpected places. It made me look closer and appreciate more. 
                </p>
                <p>
                  Along the way I've had the chance to work with some wonderful brands, explore different creative spaces, and keep pushing what's possible with fabric — including my love for creating sequin work through natural textiles, which is its own kind of magic.
                </p>
                <p>
                  I'm also that person constantly photographing everything and turning it into a memory wall — and more often than not, that's exactly where a new collection begins. If you love design, get excited about craft, or just want to talk about what's inspiring you lately, I think we'll get along just fine. Let's connect!
                </p>
              </div>

              <div className="about-v2-signature">Dimple Shivakumar</div>
            </div>
          </main>
          
          {isMainPage && <Footer showPage={showPage} />}
        </div>
      )}

      {/* ═══ COLLECTIONS PAGE ═══ */}
      {activePage === 'collections' && (
        <div id="page-collections" className="page relative z-0">
          <BackgroundGradientAnimation
            containerClassName="!fixed inset-0 !z-[-1] !h-screen !w-screen"
            gradientBackgroundStart="#F8F9FF"
            gradientBackgroundEnd="#F0F0FF"
            firstColor="180, 165, 230"
            secondColor="237, 220, 143"
            thirdColor="206, 135, 159"
            fourthColor="167, 187, 211"
            fifthColor="245, 180, 160"
            pointerColor="206, 135, 159"
            size="80%"
            blendingValue="hard-light"
          />

          <div className="scroll-explore">
            <div className="scroll-explore-line"></div>
            <p className="scroll-explore-text">Scroll to Explore</p>
          </div>

          <div className="collections-page-container flex-grow relative z-10 w-full min-h-screen">

              <div className="collections-header">
                <h2 className="section-title">Artistic Fashion Collections</h2>
              </div>
            
            <div className="collections-staggered-grid">
              {/* Brand Projects - Large Wide Card */}
              <div 
                className="collection-card-glass card-ethereal reveal cursor-pointer group"
                onClick={() => showPage('brand_projects')}
              >
                <div className="collection-card-content">
                  <div className="collection-card-text">
                    <h3 className="collection-card-title">BRAND PROJECTS</h3>
                    <p className="collection-card-desc">Where concepts become identities. A showcase of brand work built from the ground up — bold, intentional, and built to last.</p>
                  </div>
                  <div className="collection-card-img-wrapper">
                    <img src={getOptimizedUrl("https://ik.imagekit.io/Nouskun/Dimple/Brand/5/6.jpg?updatedAt=1777139999924")} alt="Brand Projects" loading="lazy" />

                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs uppercase tracking-widest font-bold">View Projects</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Flat - Square Card */}
              <div 
                className="collection-card-glass card-texture reveal cursor-pointer group" 
                style={{ transitionDelay: '0.1s' }}
                onClick={() => showPage('tech_flat')}
              >
                <div className="collection-card-content">
                  <div className="collection-card-img-wrapper square">
                    <img 
                      src={getOptimizedUrl("https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%209.png?updatedAt=1777051493325")} 
                      alt="Tech Flat" 
                      className="!object-contain scale-110"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs uppercase tracking-widest font-bold">View Projects</span>
                    </div>
                  </div>
                  <div className="collection-card-text">
                    <h3 className="collection-card-title small">TECH FLAT</h3>
                    <p className="collection-card-desc small">Silhouettes Before Stitches.</p>
                  </div>
                </div>
              </div>

              {/* Organic Textures - Portrait Card */}
              <div 
                className="collection-card-glass card-nomadic reveal cursor-pointer group" 
                style={{ transitionDelay: '0.2s' }}
                onClick={() => showPage('organic_structures')}
              >
                <div className="collection-card-content">
                  <div className="collection-card-img-wrapper portrait">
                    <img src={getOptimizedUrl("https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4645.HEIC?updatedAt=1777140857224")} alt="Organic Textures" loading="lazy" />

                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs uppercase tracking-widest font-bold">View Collection</span>
                    </div>
                  </div>
                  <div className="collection-card-text">
                    <h3 className="collection-card-title small">ORGANIC TEXTURES</h3>
                    <p className="collection-card-desc small">Where Every Collection Takes Its First Breath.</p>
                  </div>
                </div>
              </div>


              {/* Design Projects - Large Wide Card */}
              <div className="collection-card-glass card-silent reveal cursor-pointer group" style={{ transitionDelay: '0.4s' }} onClick={() => showPage('design_projects')}>
                <div className="collection-card-content horizontal">
                  <div className="collection-card-img-wrapper wide">
                    <img src={getOptimizedUrl("https://ik.imagekit.io/Nouskun/Dimple/design%20/4/2.jpg?updatedAt=1777147098468")} alt="Design Projects" loading="lazy" />

                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs uppercase tracking-widest font-bold">View Projects</span>
                    </div>
                  </div>
                  <div className="collection-card-text">
                    <h3 className="collection-card-title">DESIGN PROJECTS</h3>
                    <p className="collection-card-desc">Concepts Crafted Into Visual Stories Worth Telling.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isMainPage && <Footer showPage={showPage} />}
        </div>
      )}

      {/* ═══ TECH FLAT PAGE ═══ */}
      {activePage === 'tech_flat' && (
        <div id="page-tech-flat" className="page relative z-0">
          <BackgroundGradientAnimation
            containerClassName="!fixed inset-0 !z-[-1] !h-screen !w-screen"
            gradientBackgroundStart="#ffffff"
            gradientBackgroundEnd="#ffffff"
            firstColor="100, 149, 237"
            secondColor="135, 206, 235"
            thirdColor="70, 130, 180"
            fourthColor="173, 216, 230"
            fifthColor="0, 191, 255"
            pointerColor="200, 200, 250"
          />
          <div className="relative z-10">
            <TechFlatPage onBack={() => showPage('collections')} />
          </div>
        </div>
      )}


      {activePage === 'brand_projects' && (
        <BrandProjectsPage onBack={() => showPage('collections')} onSelectProject={(projectId) => showPage(`brand_${projectId}`)} />
      )}

      {activePage === 'brand_1' && (
        <Brand1Page onBack={() => showPage('brand_projects')} />
      )}

      {activePage === 'brand_2' && (
        <Brand2Page onBack={() => showPage('brand_projects')} />
      )}

      {activePage === 'brand_3' && (
        <Brand3Page onBack={() => showPage('brand_projects')} />
      )}

      {activePage === 'brand_4' && (
        <Brand4Page onBack={() => showPage('brand_projects')} />
      )}

      {activePage === 'brand_5' && (
        <Brand5Page onBack={() => showPage('brand_projects')} />
      )}

      {activePage === 'brand_6' && (
        <Brand6Page onBack={() => showPage('brand_projects')} />
      )}

      {activePage === 'brand_7' && (
        <Brand7Page onBack={() => showPage('brand_projects')} />
      )}

      {activePage === 'design_projects' && (
        <DesignProjectsPage onBack={() => showPage('collections')} onSelectProject={(id) => showPage(`design_${id}`)} />
      )}

      {activePage === 'design_1' && (
        <Design1Page onBack={() => showPage('design_projects')} />
      )}

      {activePage === 'design_2' && (
        <Design2Page onBack={() => showPage('design_projects')} />
      )}

      {activePage === 'design_3' && (
        <Design3Page onBack={() => showPage('design_projects')} />
      )}

      {activePage === 'design_4' && (
        <Design4Page onBack={() => showPage('design_projects')} />
      )}

      {activePage === 'design_5' && (
        <Design5Page onBack={() => showPage('design_projects')} />
      )}

      {activePage === 'design_6' && (
        <Design6Page onBack={() => showPage('design_projects')} />
      )}

      {activePage === 'design_7' && (
        <Design7Page onBack={() => showPage('design_projects')} />
      )}

      {activePage === 'design_8' && (
        <Design8Page onBack={() => showPage('design_projects')} />
      )}

      {activePage === 'design_9' && (
        <Design9Page onBack={() => showPage('design_projects')} />
      )}

      {activePage === 'organic_structures' && (
        <div id="page-organic-structures" className="page relative z-0">
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
          <OrganicStructuresPage onBack={() => showPage('collections')} />
          {isMainPage && <Footer showPage={showPage} />}
        </div>
      )}

      {activePage === 'contact' && (
        <div id="page-contact" className="page relative z-0 min-h-screen bg-white overflow-hidden">

          {/* Main content */}
          <main className="contact-v2-main">
            <div className="contact-v2-content">
              <h1 className="contact-v2-heading">Inquiries.</h1>
              <p className="contact-v2-subheading">Design grows through connection - let’s connect</p>
              
              <div className="contact-v2-links">
                <a href="mailto:dimple@dimpleshivakumar.com" className="contact-v2-link">dimple@dimpleshivakumar.com</a>
                <a href="tel:+18575066139" className="contact-v2-link">+1 (857) 506-6139</a>
                <a href="https://www.linkedin.com/in/dimple-shivakumar" target="_blank" rel="noopener noreferrer" className="contact-v2-link">LinkedIn</a>
                <a href="https://instagram.com/dimpleshivakumar" target="_blank" rel="noopener noreferrer" className="contact-v2-link">Instagram</a>
              </div>
            </div>
          </main>
          
          {isMainPage && <Footer showPage={showPage} />}
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ season, name, delay = "0s" }) => (
  <div className="project-card reveal" style={{ transitionDelay: delay }}>
    <div className="project-img">
      <div className="project-img-inner"></div>
      <div className="project-overlay"><span className="project-overlay-text">View Project</span></div>
    </div>
    <div className="project-meta">
      <p className="project-season">{season}</p>
      <p className="project-name">{name}</p>
    </div>
  </div>
);

const CollectionItem = ({ num, name, desc }) => (
  <div className="collection-item">
    <div className="collection-thumb"></div>
    <div>
      <p className="collection-num">{num}</p>
      <p className="collection-name">{name}</p>
      <p className="collection-desc">{desc}</p>
    </div>
  </div>
);

const ContactInfoItem = ({ label, value }) => (
  <div className="contact-info-item">
    <p className="contact-info-label">{label}</p>
    <p className="contact-info-value">{value}</p>
  </div>
);

export default PriyaPortfolio;
