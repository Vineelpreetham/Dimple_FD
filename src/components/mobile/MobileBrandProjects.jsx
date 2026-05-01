import React, { useEffect, useRef } from 'react';
import { getOptimizedUrl } from '../../lib/imageConfig';

const BRAND_PROJECTS = [
  {
    id: 1,
    title: 'Umbra',
    brand: 'Maison Margiela',
    tagline: 'Where the absence of form becomes the form itself.',
    image: 'https://ik.imagekit.io/Nouskun/Dimple/Brand/1/1.jpg?updatedAt=1777066801626',
    accent: '#c4b5a5',
  },
  {
    id: 2,
    title: 'Silt',
    brand: 'Bottega Veneta',
    tagline: 'Earth tones rewritten for the body. Quiet luxury in texture.',
    image: 'https://ik.imagekit.io/Nouskun/Dimple/Brand/2/1.jpg?updatedAt=1777066831725',
    accent: '#b8a490',
  },
  {
    id: 3,
    title: 'Reverie',
    brand: 'Chloé',
    tagline: 'Sun-bleached femininity. Light through muslin.',
    image: 'https://ik.imagekit.io/Nouskun/Dimple/Brand/3/1.jpg?updatedAt=1777066868729',
    accent: '#d4c0a8',
  },
  {
    id: 4,
    title: 'Meridian',
    brand: 'Loewe',
    tagline: 'Architecture of the body. Sculptural volume and restraint.',
    image: 'https://ik.imagekit.io/Nouskun/Dimple/Brand/4/1.jpg?updatedAt=1777066903080',
    accent: '#a89880',
  },
  {
    id: 5,
    title: 'Nocturne',
    brand: 'Saint Laurent',
    tagline: 'The power of black. Edge and precision that owns the room.',
    image: 'https://ik.imagekit.io/Nouskun/Dimple/Brand/5/1.jpg?updatedAt=1777139999300',
    accent: '#8a8a8a',
  },
  {
    id: 6,
    title: 'Prism',
    brand: 'Prada',
    tagline: 'Intellectual rigor meets the fluidity of light.',
    image: 'https://ik.imagekit.io/Nouskun/Dimple/Brand/6/1.jpg?updatedAt=1777140547507',
    accent: '#b0a4c0',
  },
  {
    id: 7,
    title: 'Ethereal',
    brand: 'Celine',
    tagline: 'Minimalist precision. Defined by what is absent.',
    image: 'https://ik.imagekit.io/Nouskun/Dimple/Brand/7/1.jpg?updatedAt=1777140600208',
    accent: '#c8b8a4',
  },
];

function BrandCard({ project, onSelect, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('mbp-card--visible');
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
      className="mbp-card"
      style={{ transitionDelay: `${index * 50}ms` }}
      onClick={() => onSelect(project.id)}
    >
      {/* Image */}
      <div className="mbp-card-img">
        <img
          src={getOptimizedUrl(project.image)}
          alt={project.title}
          loading="lazy"
          decoding="async"
        />
        {/* Gradient overlay always visible on mobile (no hover) */}
        <div className="mbp-card-overlay" />
        {/* Info pinned to bottom-left on the image */}
        <div className="mbp-card-info">
          <span className="mbp-card-brand">{project.brand}</span>
          <h3 className="mbp-card-title">{project.title}</h3>
        </div>
        {/* Arrow */}
        <div className="mbp-card-arrow">→</div>
      </div>
      {/* Tagline below image */}
      <p className="mbp-card-tagline">{project.tagline}</p>
    </button>
  );
}

export default function MobileBrandProjects({ onBack, onSelectProject }) {
  return (
    <div className="mbp-wrap">
      {/* Header */}
      <div className="mbp-header">
        <button className="mbp-back" onClick={onBack}>
          ← Back
        </button>
        <span className="mbp-label">Collections</span>
        <h1 className="mbp-h1">Brand Projects</h1>
        <p className="mbp-intro">Concepts become identities — bold, intentional, built to last.</p>
      </div>

      {/* Card list */}
      <div className="mbp-list">
        {BRAND_PROJECTS.map((p, i) => (
          <BrandCard key={p.id} project={p} onSelect={onSelectProject} index={i} />
        ))}
      </div>
    </div>
  );
}
