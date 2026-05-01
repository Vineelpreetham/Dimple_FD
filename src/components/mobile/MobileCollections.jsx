import React from 'react';
import { ChevronRight } from 'lucide-react';
import { getOptimizedUrl } from '../../lib/imageConfig';

const collections = [
  {
    id: 'brand_projects',
    title: 'Brand Projects',
    subtitle: 'Curated Fragments',
    desc: 'Where concepts become identities — bold, intentional, and built to last.',
    image: 'https://ik.imagekit.io/Nouskun/Dimple/Brand/5/6.jpg?updatedAt=1777139999924',
    accent: '#e8c4a0',
  },
  {
    id: 'design_projects',
    title: 'Design Projects',
    subtitle: 'Selected Works',
    desc: 'Concepts crafted into visual stories worth telling.',
    image: 'https://ik.imagekit.io/Nouskun/Dimple/design%20/4/2.jpg?updatedAt=1777147098468',
    accent: '#b0c8d8',
  },
  {
    id: 'tech_flat',
    title: 'Tech Flat',
    subtitle: 'Technical Archetypes',
    desc: 'Silhouettes before stitches — detailed technical sketches.',
    image: 'https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/Untitled_Artwork%209.png?updatedAt=1777051493325',
    accent: '#c8d8b0',
    contain: true,
  },
  {
    id: 'organic_structures',
    title: 'Organic Textures',
    subtitle: 'Nature & Geometry',
    desc: 'Bio-morphic forms and organic textures where every collection takes its first breath.',
    image: 'https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4645.HEIC?updatedAt=1777140857224',
    accent: '#d8b0c8',
  },
];

const MobileCollections = ({ onSelectPage }) => {
  return (
    <div className="mobile-collections">
      <div className="mobile-section-header">
        <span className="mobile-section-label">All Collections</span>
        <h2 className="mobile-section-title">Artistic Fashion Collections</h2>
      </div>

      <div className="mobile-collection-list">
        {collections.map((col, i) => (
          <button
            key={col.id}
            className="mobile-collection-card"
            onClick={() => onSelectPage(col.id)}
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="mobile-collection-img-wrap">
              <img
                src={getOptimizedUrl(col.image)}
                alt={col.title}
                loading="lazy"
                style={{ objectFit: col.contain ? 'contain' : 'cover', background: col.contain ? '#f5f5f0' : 'none' }}
              />
              <div
                className="mobile-collection-accent"
                style={{ background: `radial-gradient(circle at 70% 30%, ${col.accent}55 0%, transparent 70%)` }}
              />
            </div>
            <div className="mobile-collection-info">
              <div>
                <span className="mobile-collection-sub">{col.subtitle}</span>
                <h3 className="mobile-collection-title">{col.title}</h3>
                <p className="mobile-collection-desc">{col.desc}</p>
              </div>
              <div className="mobile-collection-cta">
                <span>View</span>
                <ChevronRight size={16} strokeWidth={1.5} />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileCollections;
