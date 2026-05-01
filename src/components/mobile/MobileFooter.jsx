import React from 'react';

const LINKS = ['home', 'about', 'collections', 'contact'];

export default function MobileFooter({ showPage }) {
  return (
    <footer className="mf-footer">
      <div className="mf-brand">Dimple<br />Shivakumar</div>
      <nav className="mf-nav">
        {LINKS.map(p => (
          <button key={p} className="mf-link" onClick={() => showPage(p)}>
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </nav>
      <div className="mf-bottom">
        <p>dimpleshivukumar@gmail.com</p>
        <p>© {new Date().getFullYear()} Dimple Shivakumar</p>
      </div>
    </footer>
  );
}
