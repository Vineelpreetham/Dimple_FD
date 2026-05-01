import React, { useState, useCallback, useEffect, useRef } from 'react';
import { getOptimizedUrl } from '../../lib/imageConfig';

const HERO_SLIDES = [
  {
    id: 'pink',
    mainImage: getOptimizedUrl('https://ik.imagekit.io/Nouskun/Dimple/Home/OB2449469_right_3.png'),
    background: '#F9F6F8',
    simpleGlow: 'rgba(206,135,159,0.75)',
    titleGradient: 'linear-gradient(180deg, #D4A0B5 0%, #C0758D 62%, #5A3742 100%)',
    navColor: '#8C5B6B',
  },
  {
    id: 'gold',
    mainImage: getOptimizedUrl('https://ik.imagekit.io/Nouskun/Dimple/Home/Blue_use.png'),
    background: '#F9F8F2',
    simpleGlow: 'rgba(237,200,80,0.80)',
    titleGradient: 'linear-gradient(180deg, #EDE4A8 0%, #CCBA5E 67%, #6B5C22 91%)',
    navColor: '#B0986A',
  },
  {
    id: 'maroon',
    mainImage: getOptimizedUrl('https://ik.imagekit.io/Nouskun/Dimple/Home/maroon%20use.png'),
    background: '#F8F5F6',
    simpleGlow: 'rgba(194,135,150,0.78)',
    titleGradient: 'linear-gradient(180deg, #C9B0B5 0%, #AC8E93 58%, #5C3040 91%)',
    navColor: '#8E5865',
  },
  {
    id: 'blue',
    mainImage: getOptimizedUrl('https://ik.imagekit.io/Nouskun/Dimple/Home/lavender_use.png'),
    background: '#F4F6FA',
    simpleGlow: 'rgba(150,175,225,0.78)',
    titleGradient: 'linear-gradient(180deg, #A8B8CE 0%, #7A97B8 69%, #1A1845 91%)',
    navColor: '#6F88A6',
  },
];

const MobileHero = ({ onExplore }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dragStartX, setDragStartX] = useState(null);
  const [dragDelta, setDragDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const heroRef = useRef(null);

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActiveSlide(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide((activeSlide + 1) % HERO_SLIDES.length);
  }, [activeSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((activeSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, [activeSlide, goToSlide]);

  // Touch / drag handlers
  const onTouchStart = (e) => {
    setDragStartX(e.touches[0].clientX);
    setDragDelta(0);
    setIsDragging(true);
  };

  const onTouchMove = (e) => {
    if (dragStartX === null) return;
    setDragDelta(e.touches[0].clientX - dragStartX);
  };

  const onTouchEnd = () => {
    if (Math.abs(dragDelta) > 50) {
      if (dragDelta < 0) nextSlide();
      else prevSlide();
    }
    setDragStartX(null);
    setDragDelta(0);
    setIsDragging(false);
  };

  const slide = HERO_SLIDES[activeSlide];

  return (
    <section
      ref={heroRef}
      className="mobile-hero"
      style={{
        backgroundColor: slide.background,
        transition: 'background-color 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Glow blob */}
      <div
        className="mobile-hero-glow"
        style={{
          background: `radial-gradient(ellipse at top left, ${slide.simpleGlow} 0%, transparent 65%)`,
          transition: 'background 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      {/* Portfolio title */}
      <div className="mobile-hero-title-wrap">
        <h1
          className="mobile-hero-title"
          style={{
            backgroundImage: slide.titleGradient,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
            transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          Portfolio
        </h1>
      </div>

      {/* 3-D Model Carousel */}
      <div className="mobile-hero-carousel" style={{ perspective: '1000px' }}>
        {HERO_SLIDES.map((s, index) => {
          const total = HERO_SLIDES.length;
          const diff = ((index - activeSlide) % total + total) % total;
          let position;
          if (diff === 0) position = 'active';
          else if (diff === 1) position = 'next';
          else if (diff === total - 1) position = 'prev';
          else position = 'hidden';

          const posStyles = {
            active: {
              transform: `translateX(-50%) translateZ(0) scale(1.15)`,
              left: '50%',
              opacity: 1,
              filter: 'blur(0px)',
              zIndex: 10,
            },
            prev: {
              transform: `translateX(-50%) translateZ(-160px) scale(0.55)`,
              left: '2%',
              opacity: 0.38,
              filter: 'blur(2px)',
              zIndex: 5,
            },
            next: {
              transform: `translateX(-50%) translateZ(-160px) scale(0.55)`,
              left: '98%',
              opacity: 0.38,
              filter: 'blur(2px)',
              zIndex: 5,
            },
            hidden: {
              transform: `translateX(-50%) translateZ(-400px) scale(0.3)`,
              left: '50%',
              opacity: 0,
              filter: 'blur(6px)',
              zIndex: 1,
            },
          };

          const ps = posStyles[position];

          return (
            <div
              key={s.id}
              className="mobile-hero-model"
              onClick={() => {
                if (position === 'next') nextSlide();
                else if (position === 'prev') prevSlide();
              }}
              style={{
                left: ps.left,
                transform: ps.transform,
                opacity: ps.opacity,
                filter: ps.filter,
                zIndex: ps.zIndex,
                transition: isDragging
                  ? 'none'
                  : 'transform 0.7s cubic-bezier(0.22,1,0.36,1), left 0.7s cubic-bezier(0.22,1,0.36,1), opacity 0.7s ease, filter 0.7s ease',
                willChange: 'transform, opacity',
              }}
            >
              <img
                src={s.mainImage}
                alt="Fashion Model"
                draggable={false}
                style={{
                  height: '80vh',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: position === 'active' ? 'drop-shadow(0 24px 48px rgba(0,0,0,0.28))' : 'none',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="mobile-hero-dots">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`mobile-hero-dot ${i === activeSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Swipe hint */}
      <p className="mobile-hero-hint">Swipe to explore</p>
    </section>
  );
};

export default MobileHero;
