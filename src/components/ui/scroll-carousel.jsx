import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const DUMMY_IMAGES = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529139574466-a303027c028c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
  
  // Row 2
  'https://images.unsplash.com/photo-1488161628813-04466f872507?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512413914840-a54823ce4dff?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550614000-4b95d4ed79d1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1604072366595-e75de92b5be4?q=80&w=1200&auto=format&fit=crop',
];

const CarouselImage = ({ src, index, totalColumns, progress }) => {
  // Determine at what scroll point (0 to 1) this column is centered
  const centerPoint = index / (totalColumns - 1);
  
  // Scale mapping: reaches 1.3 at center, shrinks to 0.7 at edges
  const scale = useTransform(
    progress,
    [centerPoint - 0.2, centerPoint, centerPoint + 0.2],
    [0.75, 1.15, 0.75]
  );
  
  // Brightness mapping: darkens slightly towards edges
  const brightness = useTransform(
    progress,
    [centerPoint - 0.2, centerPoint, centerPoint + 0.2],
    [0.5, 1.0, 0.5]
  );
  
  return (
    <motion.div 
      style={{ scale, filter: useTransform(brightness, b => `brightness(${b})`) }}
      className="w-[22vw] min-w-[280px] aspect-[4/5] flex-shrink-0 overflow-hidden shadow-2xl transition-all"
    >
      <img src={src} className="w-full h-full object-cover" alt="Editorial Fashion" />
    </motion.div>
  );
};

export const ScrollCarousel = () => {
  const containerRef = useRef(null);
  
  // Track scroll inside the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth the scroll progress to give it a more fluid, premium feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80, damping: 15, restDelta: 0.001
  });

  const columns = 8;
  const itemWidthVW = 22; // w-[22vw]
  const gapVW = 2; // gap-[2vw] roughly
  const shiftVW = itemWidthVW + gapVW;
  const totalOffset = `-${(columns - 1) * shiftVW}vw`;
  
  const x = useTransform(smoothProgress, [0, 1], ["0vw", totalOffset]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-[#0A0A0A] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center bg-[#0A0A0A]">
         <div className="text-center absolute top-12 w-full text-white/50 tracking-widest text-sm font-serif pointer-events-none">
            C U R A T E D&nbsp;&nbsp;&nbsp;V I S I O N S
         </div>
         
         <motion.div 
            style={{ x }} 
            className="flex flex-col gap-[3vw]"
         >
           {/* Row 1 */}
           <div 
             className="flex items-center" 
             style={{ gap: `${gapVW}vw`, paddingLeft: `calc(50vw - ${itemWidthVW / 2}vw)` }}
           >
             {DUMMY_IMAGES.slice(0, columns).map((src, i) => (
                <CarouselImage key={`top-${i}`} src={src} index={i} totalColumns={columns} progress={smoothProgress} />
             ))}
           </div>
           
           {/* Row 2 - Slightly offset initially */}
           <div 
             className="flex items-center -ml-[5vw]" 
             style={{ gap: `${gapVW}vw`, paddingLeft: `calc(50vw - ${itemWidthVW / 2}vw)` }}
           >
             {DUMMY_IMAGES.slice(columns, columns * 2).map((src, i) => (
                <CarouselImage key={`bottom-${i}`} src={src} index={i} totalColumns={columns} progress={smoothProgress} />
             ))}
           </div>
         </motion.div>
      </div>
    </div>
  );
};
