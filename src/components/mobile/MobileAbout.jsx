import React from 'react';
import { getOptimizedUrl } from '../../lib/imageConfig';

const MobileAbout = () => {
  return (
    <div className="mobile-about">
      {/* Photo */}
      <div className="mobile-about-img-wrap">
        <img
          src={getOptimizedUrl('https://ik.imagekit.io/Nouskun/Dimple/WhatsApp%20Image%202026-04-22%20at%2020.29.30.jpeg')}
          alt="Dimple Shivakumar"
          className="mobile-about-img"
          loading="lazy"
        />
        <span className="mobile-about-caption">Designer &amp; Visionary</span>
      </div>

      {/* Text */}
      <div className="mobile-about-text">
        <span className="mobile-section-label">About the designer</span>
        <h1 className="mobile-about-heading">
          Hi! I'm Dimple —<br />a fashion designer who tells{' '}
          <em>stories</em> through prints.
        </h1>

        <div className="mobile-about-divider" />

        <div className="mobile-about-body">
          <p>
            I grew up surrounded by hand printing and beautiful textiles, and without even
            realising it, that world quietly shaped everything about how I see design. I moved
            to the US in 2024, and stepping into a completely new country shifted something in
            me — the way people dress, the art on the walls, the colours in unexpected places.
          </p>
          <p>
            Along the way I've had the chance to work with some wonderful brands, explore
            different creative spaces, and keep pushing what's possible with fabric — including
            my love for creating sequin work through natural textiles, which is its own kind of magic.
          </p>
          <p>
            I'm also that person constantly photographing everything and turning it into a memory
            wall — and more often than not, that's exactly where a new collection begins. Let's connect!
          </p>
        </div>

        <div className="mobile-about-signature">Dimple Shivakumar</div>
      </div>
    </div>
  );
};

export default MobileAbout;
