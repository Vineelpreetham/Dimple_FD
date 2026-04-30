import React, { useEffect, useRef } from 'react';
import { getOptimizedUrl } from '../lib/imageConfig';
import { ChevronLeft } from 'lucide-react';

const VIDEOS = [
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_6135%203.MOV",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_6134.MOV",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4596.MOV",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/C2DF104F-3F30-448C-9B3F-D3FFB5886252.MP4",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4638.MOV/ik-video.mp4?updatedAt=1777140867859"
];

const IMAGES = [
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/DSC00632.JPG?updatedAt=1777140909246",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/DSC00640.JPG?updatedAt=1777140907368",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/DSC00625.JPG?updatedAt=1777140907059",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/DSC00651.JPG?updatedAt=1777140902111",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/DSC00631.JPG?updatedAt=1777140900058",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/DSC00639.JPG?updatedAt=1777140900249",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/DSC00644.JPG?updatedAt=1777140904755",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4666.HEIC",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_6707.HEIC",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4645.HEIC",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4587.HEIC",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_6709.HEIC",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4299.jpg",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4191.JPG",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4637.HEIC",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4661.HEIC",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_6710.HEIC",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4308%203.JPG",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4232.JPG",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4652.jpg",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4660.HEIC"
];

const PIECES_LAYOUT = [
  {t:'img', label:'01', w:26, h:34, x:3,   y:7,   r:-2.5, z:4},
  {t:'img', label:'02', w:18, h:23, x:27,  y:4,   r:2,    z:3},
  {t:'vid', label:'03', w:30, h:22, x:18,  y:30,  r:-1,   z:5},
  {t:'img', label:'04', w:20, h:28, x:50,  y:5,   r:3,    z:3},
  {t:'img', label:'05', w:15, h:20, x:68,  y:3,   r:-2,   z:2},
  {t:'img', label:'06', w:22, h:16, x:66,  y:26,  r:1.5,  z:3},
  {t:'img', label:'07', w:14, h:20, x:85,  y:10,  r:-3,   z:2},
  {t:'img', label:'08', w:28, h:20, x:4,   y:56,  r:1,    z:3},
  {t:'img', label:'09', w:20, h:28, x:34,  y:52,  r:-2.5, z:4},
  {t:'img', label:'10', w:16, h:18, x:56,  y:55,  r:2,    z:2},
  {t:'img', label:'11', w:24, h:18, x:68,  y:62,  r:-1,   z:3},
  {t:'vid', label:'12', w:18, h:24, x:10,  y:78,  r:3,    z:5},
  {t:'img', label:'13', w:26, h:34, x:32,  y:80,  r:-2,   z:3},
  {t:'img', label:'14', w:20, h:22, x:60,  y:86,  r:2.5,  z:4},
  {t:'img', label:'15', w:14, h:20, x:82,  y:78,  r:-2.5, z:2},
  {t:'img', label:'16', w:22, h:16, x:4,   y:112, r:1.5,  z:3},
  {t:'vid', label:'17', w:30, h:22, x:28,  y:118, r:-1,   z:5},
  {t:'img', label:'18', w:18, h:28, x:62,  y:112, r:3,    z:3},
  {t:'img', label:'19', w:22, h:18, x:74,  y:106, r:-2,   z:2},
  {t:'img', label:'20', w:20, h:28, x:6,   y:142, r:2,    z:3},
  {t:'img', label:'21', w:30, h:20, x:30,  y:150, r:-1.5, z:4},
  {t:'img', label:'22', w:16, h:22, x:62,  y:144, r:2.5,  z:2},
  {t:'vid', label:'23', w:26, h:34, x:72,  y:138, r:-2,   z:5},
  {t:'img', label:'24', w:22, h:30, x:4,   y:178, r:1,    z:3},
  {t:'img', label:'25', w:18, h:22, x:28,  y:186, r:-3,   z:2},
  {t:'img', label:'26', w:30, h:22, x:48,  y:178, r:2,    z:3},
  {t:'img', label:'27', w:16, h:24, x:78,  y:182, r:-1.5, z:2},
  {t:'img', label:'28', w:24, h:32, x:10,  y:216, r:-2,   z:4},
  {t:'vid', label:'29', w:28, h:20, x:38,  y:222, r:1.5,  z:5},
  {t:'img', label:'30', w:20, h:28, x:68,  y:216, r:3,    z:3},
];

let vI = 0, iI = 0;
const PIECES = PIECES_LAYOUT.map(p => {
  if (p.t === 'vid') {
    return { ...p, src: VIDEOS[vI++ % VIDEOS.length] };
  } else {
    return { ...p, src: IMAGES[iI++ % IMAGES.length] };
  }
});

const TEXTS = [
  {cls:'ghost', html:'Organic', x:30, y:42,  r:-4},
  {cls:'lbl',   html:'Material ↓ Process ↓ Form', x:92, y:60, r:0},
  {cls:'qte',   html:'Form emerges from what <em>material</em> wants to become.', x:38, y:130, r:1},
  {cls:'ghost', html:'Form', x:44, y:198, r:3},
  {cls:'qte',   html:'Each texture holds the <em>memory</em> of its making.', x:6, y:240, r:-1},
  {cls:'lbl',   html:'Dimple Studio — Organic Series', x:4, y:200, r:0},
];

const LINES = [
  {x:18, y:162, l:58, d:'h'},
  {x:5,  y:198, l:40, d:'v'},
  {x:72, y:108, l:22, d:'h'},
];

const OrganicStructuresPage = ({ onBack }) => {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  // Parallax and interactions
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if(ticking) return;
      window.requestAnimationFrame(() => {
        const sy = window.scrollY;
        const pieces = document.querySelectorAll('.os-piece');
        pieces.forEach(el => {
          const i = parseInt(el.dataset.i || 0);
          const r = parseFloat(el.dataset.r || 0);
          const spd = [0.018, 0.032, 0.01][i % 3];
          const drift = Math.sin(sy * 0.0015 + i * 0.9) * 0.5;
          el.style.transform = `rotate(${r + drift}deg) translateY(${-sy * spd}px)`;
        });
        ticking = false;
      });
      ticking = true;
    };

    const handleMouseMove = (e) => {
      if(cursorRef.current && ringRef.current) {
        cursorRef.current.style.left = e.clientX - 4 + 'px';
        cursorRef.current.style.top = e.clientY - 4 + 'px';
        ringRef.current.style.left = e.clientX + 'px';
        ringRef.current.style.top = e.clientY + 'px';
      }
    };

    const handleMouseOver = (e) => {
      const p = e.target.closest('.os-piece');
      if(cursorRef.current && ringRef.current) {
        if(p){ 
          cursorRef.current.style.transform='scale(3.5)'; 
          ringRef.current.style.width='54px'; 
          ringRef.current.style.height='54px'; 
          ringRef.current.style.borderColor='#b8845a'; 
        } else { 
          cursorRef.current.style.transform='scale(1)';   
          ringRef.current.style.width='30px'; 
          ringRef.current.style.height='30px'; 
          ringRef.current.style.borderColor='#7a5c42'; 
        }
      }
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // Initial trigger for intersection observer (fade in)
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { 
        if(e.isIntersecting){ 
          e.target.classList.add('vis'); 
          obs.unobserve(e.target); 
        }
      });
    }, {threshold: 0.04, rootMargin: '0px 0px -30px 0px'});
    
    document.querySelectorAll('.os-piece').forEach(el => obs.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        
        .os-container {
          --bg: transparent;
          --ink: #16120d;
          --umber: #7a5c42;
          --clay: #b8845a;
          --dust: #cec5b0;
          --pale: #e6e0d4;
          background: var(--bg);
          color: var(--ink);
          font-family: 'Cormorant Garamond', serif;
          overflow-x: hidden;
          min-height: 280vw; /* Accommodate the absolute items */
          cursor: none;
        }
        
        #os-cur {
          width: 8px; height: 8px; background: var(--ink); border-radius: 50%;
          position: fixed; pointer-events: none; z-index: 9999;
          transition: transform .12s ease; mix-blend-mode: multiply; top: 0; left: 0;
        }
        #os-cur-ring {
          width: 30px; height: 30px; border: 1px solid var(--umber); border-radius: 50%;
          position: fixed; pointer-events: none; z-index: 9998;
          transition: left .22s cubic-bezier(.23,1,.32,1), top .22s cubic-bezier(.23,1,.32,1),
                      width .22s, height .22s, border-color .22s;
          top: 0; left: 0; transform: translate(-50%,-50%);
        }

        .os-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          display: flex; justify-content: space-between; align-items: flex-start;
          padding: 1.8rem 2.5rem; pointer-events: none;
        }
        .os-logo {
          font-family: 'Cormorant Garamond', serif; font-size: 1rem; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink);
          pointer-events: all; mix-blend-mode: multiply; cursor: pointer;
          display: flex; align-items: center; gap: 8px;
        }
        .os-logo:hover { opacity: 0.7; }
        .os-nav-r {
          font-family: 'Jost', sans-serif; font-size: 0.65rem; letter-spacing: 0.18em;
          color: var(--umber); text-align: right; line-height: 2; pointer-events: all;
          text-transform: uppercase;
        }

        .os-stage { position: relative; width: 100%; height: 100%; }

        .os-piece {
          position: absolute; overflow: hidden; background: var(--dust);
          box-shadow: 0 3px 20px rgba(22,18,13,.12), 0 1px 5px rgba(22,18,13,.07);
          opacity: 0; transform-origin: center center;
          transition: opacity .9s cubic-bezier(.23,1,.32,1), box-shadow .4s ease, filter .5s ease;
          will-change: transform, opacity;
        }
        .os-piece.vis { opacity: 1; }
        .os-piece img, .os-piece video {
          width: 100%; height: 100%; object-fit: cover; display: block;
          filter: saturate(.68) contrast(1.05);
          transition: filter .65s ease, transform .7s cubic-bezier(.23,1,.32,1);
        }
        .os-piece:hover {
          box-shadow: 0 12px 60px rgba(22,18,13,.24), 0 3px 12px rgba(22,18,13,.12);
          z-index: 80 !important;
        }
        .os-piece:hover img, .os-piece:hover video {
          filter: saturate(1.05) contrast(1.04); transform: scale(1.05);
        }

        .os-txt { position: absolute; pointer-events: none; z-index: 5; }
        .os-txt.ghost {
          font-size: clamp(6rem, 15vw, 13rem); font-weight: 300; font-style: italic;
          color: var(--dust); line-height: 1; letter-spacing: -.04em; opacity: .35;
        }
        .os-txt.lbl {
          font-family: 'Jost', sans-serif; font-size: 0.6rem; letter-spacing: 0.3em;
          color: var(--umber); text-transform: uppercase;
          writing-mode: vertical-rl; transform: rotate(180deg);
        }
        .os-txt.qte {
          font-size: clamp(1.3rem, 2.8vw, 2.2rem); font-weight: 300; font-style: italic;
          color: var(--ink); max-width: 20ch; line-height: 1.45;
        }
        .os-txt.qte em { color: var(--clay); }
        .os-txt.idx {
          font-family: 'Cormorant Garamond', serif; font-size: clamp(5rem, 9vw, 8rem); 
          font-weight: 300; font-style: italic; color: var(--dust); line-height: 1;
        }

        .os-ln { position: absolute; background: var(--dust); pointer-events: none; }
        .os-ln.h { height: 1px; }
        .os-ln.v { width: 1px; }

        .os-footer {
          position: absolute; bottom: 0; left: 0; right: 0; z-index: 10;
          padding: 7rem 3rem 4rem; display: flex; justify-content: space-between; align-items: flex-end;
          border-top: 1px solid var(--dust); background: transparent;
        }
        .os-f-title { font-size: clamp(3rem, 7vw, 6rem); font-weight: 300; font-style: italic; line-height: 1; }
        .os-f-meta {
          font-family: 'Jost', sans-serif; font-size: 0.65rem; letter-spacing: 0.25em;
          color: var(--umber); text-align: right; line-height: 2.6; text-transform: uppercase;
        }
        
        @media (max-width: 768px) {
          .os-container { min-height: 450vw; cursor: auto; }
          #os-cur, #os-cur-ring { display: none; }
          .os-piece { width: calc(var(--w) * 1.8)!important; height: calc(var(--h) * 1.8)!important; left: calc(var(--x) * 1.5 - 20vw)!important; top: calc(var(--y) * 1.8)!important; }
          .os-txt.ghost { font-size: 20vw; }
          .os-txt.idx { font-size: 15vw; }
          .os-txt { top: calc(var(--y) * 1.8)!important; left: calc(var(--x) * 1.5 - 20vw)!important; }
          .os-ln { display: none; }
          .os-footer { position: relative; margin-top: 380vw; }
        }
      `}</style>

      <div className="os-container relative w-full" ref={containerRef}>
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
        <div id="os-cur" ref={cursorRef}></div>
        <div id="os-cur-ring" ref={ringRef}></div>

        <div className="scroll-explore">
          <div className="scroll-explore-line"></div>
          <p className="scroll-explore-text">Scroll to Explore</p>
        </div>

        <nav className="os-nav">
          {onBack ? (
            <button onClick={onBack} className="project-back-btn" style={{ position: 'fixed', zIndex: 200, pointerEvents: 'auto' }}>
              <ChevronLeft size={18} strokeWidth={1.5} />
              <span>Back</span>
            </button>
          ) : <div />}
          <div className="os-nav-r">Organic Structure</div>
        </nav>

        <div className="os-stage">
          {PIECES.map((p, i) => {
            const isMassiveDSLR = p.src.includes('DSC00');
            const optimizedSrc = isMassiveDSLR ? `${p.src.split('?')[0]}?tr=orig` : getOptimizedUrl(p.src);

            return (
              <div 
                key={`piece-${i}`}
                className="os-piece"
                data-i={i}
                data-r={p.r}
                style={{
                  '--w': `${p.w}vw`, '--h': `${p.h}vw`, '--x': `${p.x}vw`, '--y': `${p.y}vw`,
                  width: `${p.w}vw`, height: `${p.h}vw`, left: `${p.x}vw`, top: `${p.y}vw`,
                  transform: `rotate(${p.r}deg)`, zIndex: p.z,
                  transitionDelay: `${(i % 6) * 0.055}s`
                }}
              >
                {p.t === 'img' ? (
                  <img src={optimizedSrc} alt={`Organic ${p.label}`} loading="lazy" />
                ) : (
                  <video src={optimizedSrc} autoPlay muted loop playsInline />
                )}
              </div>
            );
          })}

          {TEXTS.map((t, i) => (
            <div 
              key={`txt-${i}`}
              className={`os-txt ${t.cls}`}
              style={{
                '--x': `${t.x}vw`, '--y': `${t.y}vw`,
                left: `${t.x}vw`, top: `${t.y}vw`, transform: `rotate(${t.r}deg)`
              }}
              dangerouslySetInnerHTML={{ __html: t.html }}
            />
          ))}

          {LINES.map((l, i) => (
            <div 
              key={`ln-${i}`}
              className={`os-ln ${l.d}`}
              style={l.d === 'h' ? { left: `${l.x}vw`, top: `${l.y}vw`, width: `${l.l}vw` } : { left: `${l.x}vw`, top: `${l.y}vw`, height: `${l.l}vw` }}
            />
          ))}
        </div>

        <footer className="os-footer">
          <h2 className="os-f-title">Organic<br/><em>Structure</em></h2>
          <div className="os-f-meta">
            Dimple Studio<br/>
            Material Studies<br/>
            Process &amp; Form
          </div>
        </footer>
      </div>
    </>
  );
};

export default OrganicStructuresPage;
