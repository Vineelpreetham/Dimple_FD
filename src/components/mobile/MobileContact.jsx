import React from 'react';

const LINKS = [
  { href: 'mailto:dimpleshivukumar@gmail.com', icon: '✉', label: 'dimpleshivukumar@gmail.com', ext: false },
  { href: 'https://www.instagram.com/sketchstorybydimple', icon: '◉', label: '@sketchstorybydimple', ext: true },
  { href: 'https://www.linkedin.com/in/dimple-shivakumar', icon: 'in', label: 'LinkedIn', ext: true },
];

export default function MobileContact({ onBack }) {
  return (
    <div className="mco-wrap">
      <div className="mco-inner">
        {onBack && (
          <button className="mco-back" onClick={onBack}>← Back</button>
        )}
        <span className="mco-label">Get in touch</span>
        <h1 className="mco-heading">Inquiries.</h1>
        <p className="mco-sub">Design grows through connection — let's connect</p>

        <div className="mco-links">
          {LINKS.map(({ href, icon, label, ext }) => (
            <a
              key={href}
              href={href}
              className="mco-link"
              {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="mco-link-icon">{icon}</span>
              <span>{label}</span>
              <span className="mco-link-arrow">↗</span>
            </a>
          ))}
        </div>

        <div className="mco-avail">
          <span className="mco-dot" />
          Available for collaborations &amp; freelance
        </div>
      </div>
    </div>
  );
}
