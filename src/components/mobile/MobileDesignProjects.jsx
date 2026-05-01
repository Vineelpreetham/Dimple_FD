import React, { useEffect, useRef } from 'react';
import { getOptimizedUrl } from '../../lib/imageConfig';

const DESIGN_PROJECTS = [
  { id: 1, title: 'Fleur Sauvage', tagline: 'Form meets function — structural silhouette and deliberate proportion.' , image: 'https://ik.imagekit.io/Nouskun/Dimple/design%20/design%201/1.jpg?updatedAt=1777146977236' },
  { id: 2, title: 'Adaptive Fashion', tagline: 'Layered constructions that speak of architecture and the body in equal measure.', image: 'https://ik.imagekit.io/Nouskun/Dimple/design%20/2/1.jpg?updatedAt=1777147019999' },
  { id: 3, title: 'Cyber Stitch', tagline: 'Where every fold is a decision and every seam a statement.', image: 'https://ik.imagekit.io/Nouskun/Dimple/design%20/3/1.jpg?updatedAt=1777147045908' },
  { id: 4, title: 'Surreal Softness', tagline: 'Deconstructed tailoring. The raw edges are intentional, the softness earned.', image: 'https://ik.imagekit.io/Nouskun/Dimple/design%20/4/1.jpg?updatedAt=1777147097453' },
  { id: 5, title: 'Coach Nightfall', tagline: 'Exploring the boundary between garment and armor. Protective, yet fluid.', image: 'https://ik.imagekit.io/Nouskun/Dimple/design%20/5/1.jpg?updatedAt=1777147125992' },
  { id: 6, title: 'Scale & Skin', tagline: 'Capturing the tension between stillness and speed.', image: 'https://ik.imagekit.io/Nouskun/Dimple/design%20/6/1.jpg?updatedAt=1777147162715' },
  { id: 7, title: 'CHAP', tagline: 'Symmetry in chaos. A dialogue between contrasting textile weights.', image: 'https://ik.imagekit.io/Nouskun/Dimple/design%20/7/1.jpg?updatedAt=1777147292623' },
  { id: 8, title: 'The Infinite Grid', tagline: 'Geometric precision and organic flow. A study in balance.', image: 'https://ik.imagekit.io/Nouskun/Dimple/design%20/8/1.jpg?updatedAt=1777147372918' },
  { id: 9, title: 'Tide Woven', tagline: 'The final synthesis — bringing together all the structural lessons of the series.', image: 'https://ik.imagekit.io/Nouskun/Dimple/design%20/9/1.jpg?updatedAt=1777147410119' },
];

function DesignCard({ project, onSelect, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('mbp-card--visible'); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <button
      ref={ref}
      className="mbp-card"
      style={{ transitionDelay: `${index * 45}ms` }}
      onClick={() => onSelect(project.id)}
    >
      <div className="mbp-card-img">
        <img src={getOptimizedUrl(project.image)} alt={project.title} loading="lazy" />
        <div className="mbp-card-overlay" />
        <div className="mbp-card-info">
          <span className="mbp-card-brand">Design</span>
          <h3 className="mbp-card-title">{project.title}</h3>
        </div>
        <div className="mbp-card-arrow">→</div>
      </div>
      <p className="mbp-card-tagline">{project.tagline}</p>
    </button>
  );
}

export default function MobileDesignProjects({ onBack, onSelectProject }) {
  return (
    <div className="mbp-wrap">
      <div className="mbp-header">
        <button className="mbp-back" onClick={onBack}>← Back</button>
        <span className="mbp-label">Collections</span>
        <h1 className="mbp-h1">Design Projects</h1>
        <p className="mbp-intro">Concepts crafted into visual stories worth telling.</p>
      </div>
      <div className="mbp-list">
        {DESIGN_PROJECTS.map((p, i) => (
          <DesignCard key={p.id} project={p} onSelect={onSelectProject} index={i} />
        ))}
      </div>
    </div>
  );
}
