import React, { useEffect, useRef } from 'react';

const COLS = [
  {
    id: 'brand_projects',
    title: 'Brand Projects',
    sub: 'Curated Fragments',
    desc: 'Concepts become identities — bold, intentional, built to last.',
    img: 'https://ik.imagekit.io/Nouskun/Dimple/Brand/5/6.jpg?tr=f-auto,q-70,w-800',
  },
  {
    id: 'design_projects',
    title: 'Design Projects',
    sub: 'Selected Works',
    desc: 'Concepts crafted into visual stories worth telling.',
    img: 'https://ik.imagekit.io/Nouskun/Dimple/design%20/4/2.jpg?tr=f-auto,q-70,w-800',
  },
  {
    id: 'tech_flat',
    title: 'Tech Flat',
    sub: 'Technical Archetypes',
    desc: 'Silhouettes before stitches — detailed technical drawings.',
    img: 'https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%209.png?tr=f-auto,q-70,w-800',
    contain: true,
  },
  {
    id: 'organic_structures',
    title: 'Organic Textures',
    sub: 'Nature & Geometry',
    desc: 'Bio-morphic forms where every collection takes its first breath.',
    img: 'https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4645.HEIC?tr=f-auto,q-70,w-800',
  },
];

function Card({ col, onSelect, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('mc-card--visible');
          // Free GPU memory once animation is done
          setTimeout(() => { el.style.willChange = 'auto'; }, 450);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <button
      ref={ref}
      className="mc-card"
      style={{ transitionDelay: `${index * 60}ms` }}
      onClick={() => onSelect(col.id)}
    >
      <div className="mc-card-img" style={{ background: col.contain ? '#f5f5f0' : 'transparent' }}>
        <img
          src={col.img}
          alt={col.title}
          loading="lazy"
          decoding="async"
          style={{ objectFit: col.contain ? 'contain' : 'cover' }}
        />
      </div>
      <div className="mc-card-body">
        <div>
          <span className="mc-card-sub">{col.sub}</span>
          <h3 className="mc-card-title">{col.title}</h3>
          <p className="mc-card-desc">{col.desc}</p>
        </div>
        <span className="mc-card-arrow">→</span>
      </div>
    </button>
  );
}

export default function MobileCollections({ onSelectPage }) {
  return (
    <div className="mc-list">
      {COLS.map((col, i) => (
        <Card key={col.id} col={col} onSelect={onSelectPage} index={i} />
      ))}
    </div>
  );
}
