import React from 'react';

const MobileFooter = ({ showPage }) => (
  <footer className="mobile-footer">
    <div className="mobile-footer-brand">
      <p>Dimple<br />Shivakumar</p>
    </div>

    <nav className="mobile-footer-links">
      {['home', 'about', 'collections', 'contact'].map((page) => (
        <button
          key={page}
          onClick={() => showPage(page)}
          className="mobile-footer-link"
        >
          {page.charAt(0).toUpperCase() + page.slice(1)}
        </button>
      ))}
    </nav>

    <div className="mobile-footer-bottom">
      <p>dimpleshivukumar@gmail.com</p>
      <p>© {new Date().getFullYear()} Dimple Shivakumar. All rights reserved.</p>
    </div>
  </footer>
);

export default MobileFooter;
