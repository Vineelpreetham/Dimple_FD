import React from 'react';

export default function MobileAbout() {
  return (
    <div className="ma-wrap">
      {/* Full-bleed portrait */}
      <div className="ma-photo">
        <img
          src="https://ik.imagekit.io/Nouskun/Dimple/WhatsApp%20Image%202026-04-22%20at%2020.29.30.jpeg?tr=f-auto,q-75,w-900"
          alt="Dimple Shivakumar"
          loading="lazy"
          decoding="async"
        />
        <div className="ma-photo-tag">Designer &amp; Visionary</div>
      </div>

      {/* Content */}
      <div className="ma-body">
        <span className="ma-label">About the designer</span>

        <h1 className="ma-heading">
          Hi! I'm Dimple —<br />
          a fashion designer who tells <em>stories</em> through prints.
        </h1>

        <div className="ma-rule" />

        <p className="ma-text">
          I grew up surrounded by hand printing and beautiful textiles, and without even realising it,
          that world quietly shaped everything about how I see design. I moved to the US in 2024, and
          stepping into a completely new country shifted something in me — the way people dress, the art
          on the walls, the colours in unexpected places.
        </p>
        <p className="ma-text">
          Along the way I've had the chance to work with some wonderful brands, explore different creative
          spaces, and keep pushing what's possible with fabric — including my love for creating sequin work
          through natural textiles, which is its own kind of magic.
        </p>
        <p className="ma-text">
          I'm also that person constantly photographing everything and turning it into a memory wall — and
          more often than not, that's exactly where a new collection begins. Let's connect!
        </p>

        <p className="ma-signature">Dimple Shivakumar</p>
      </div>
    </div>
  );
}
