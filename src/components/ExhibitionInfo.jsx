import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MOODBOARD_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=800", // sketch / sewing
    top: '5%', left: '8%', width: '22vw', speed: 1.3, scaleStart: 0.9, scaleEnd: 1.1, zIndex: 2,
    aspectRatio: '3/4',
    rotation: -2
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800", // vintage fabric / dress
    top: '8%', left: '38%', width: '30vw', speed: 0.7, scaleStart: 1.0, scaleEnd: 1.05, zIndex: 1,
    aspectRatio: '4/5',
    rotation: 1
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=800", // floral drawing/print
    top: '12%', left: '72%', width: '20vw', speed: 1.5, scaleStart: 0.8, scaleEnd: 1.15, zIndex: 3,
    aspectRatio: '1/1',
    rotation: 3
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=800", // crafting hands
    top: '38%', left: '15%', width: '26vw', speed: 0.8, scaleStart: 1.1, scaleEnd: 0.95, zIndex: 4,
    aspectRatio: '4/3',
    rotation: -1
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1558769132-cb1fac0840c2?q=80&w=800", // bold fashion sketch
    top: '40%', left: '45%', width: '18vw', speed: 1.6, scaleStart: 0.85, scaleEnd: 1.12, zIndex: 5,
    aspectRatio: '2/3',
    rotation: 2
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800", // textured fabric swatch
    top: '48%', left: '68%', width: '24vw', speed: 0.6, scaleStart: 1.05, scaleEnd: 1.0, zIndex: 2,
    aspectRatio: '1/1',
    rotation: -4
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=800", // b&w mood
    top: '70%', left: '10%', width: '22vw', speed: 1.2, scaleStart: 0.95, scaleEnd: 1.1, zIndex: 3,
    aspectRatio: '3/4',
    rotation: 1
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1600164318359-54bc91238805?q=80&w=800", // dress form
    top: '65%', left: '40%', width: '25vw', speed: 1.4, scaleStart: 1.0, scaleEnd: 1.15, zIndex: 2,
    aspectRatio: '4/5',
    rotation: -2
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=800", // floral details
    top: '75%', left: '70%', width: '20vw', speed: 0.9, scaleStart: 1.05, scaleEnd: 0.95, zIndex: 4,
    aspectRatio: '1/1',
    rotation: 3
  }
];

/**
 * ExhibitionInfo (now functioning as a Moodboard Collage).
 * 
 * Cinematic scattered layout where images have varying scroll speeds
 * and scaling factors to simulate 3D parallax depth, inspired by Cosmos.so.
 */
export default function ExhibitionInfo() {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a master timeline that spans the time the section is in view
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom', // Start when top of container hits bottom of screen
          end: 'bottom top',   // End when bottom of container leaves top of screen
          scrub: 1,            // Smooth scrubbing
        }
      });

      // Animate each image independently within the shared scrubbed timeline
      imagesRef.current.forEach((imgEl, index) => {
        if (!imgEl) return;
        
        const data = MOODBOARD_IMAGES[index];
        const { speed, scaleStart, scaleEnd } = data;

        // Apply initial scale state explicitly
        gsap.set(imgEl, { scale: scaleStart });

        // Calculate Y translation based on speed.
        // Speed 1.0 is neutral. > 1.0 moves upwards faster (negative y). < 1.0 moves upwards slower (positive y lag).
        const yDistance = (1 - speed) * 350; // Use px/vh for predictable relative movement

        masterTl.to(imgEl, {
          y: yDistance,
          scale: scaleEnd,
          ease: 'none'
        }, 0); // start all animations at timeline offset 0
        
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{
        background: 'var(--color-bg)',
        minHeight: '200vh', // Gives plenty of scrolling room for parallax to shine
        paddingTop: '10vh',
        paddingBottom: '10vh',
      }}
      id="moodboard-collage"
    >
      {/* Background radial gradient to add center focus */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, var(--color-bg-warm) 100%)',
          opacity: 0.4
        }}
      />

      <div className="relative w-full h-full max-w-[1600px] mx-auto min-h-[180vh]">
        {MOODBOARD_IMAGES.map((img, i) => (
          <div
            key={img.id}
            className="absolute will-change-transform shadow-2xl"
            style={{
              top: img.top,
              left: img.left,
              width: img.width,
              zIndex: img.zIndex,
              aspectRatio: img.aspectRatio,
              transform: `rotate(${img.rotation}deg)`,
              // Hard drop shadows for a physical moodboard card feel
              boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.05)',
              borderRadius: '2px', // Slight rounding or none for paper edge
              padding: '6px', // Simulate a paper border/polaroid effect
              backgroundColor: '#fff',
            }}
          >
            <div className="w-full h-full overflow-hidden rounded-[1px] relative bg-gray-100">
              <img
                ref={el => imagesRef.current[i] = el}
                src={img.src}
                alt={`Moodboard Reference ${img.id}`}
                className="w-full h-full object-cover will-change-transform transform-origin-center"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
