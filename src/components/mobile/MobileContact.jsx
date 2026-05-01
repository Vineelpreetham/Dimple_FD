import React from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';

const MobileContact = () => {
  return (
    <div className="mobile-contact">
      <div className="mobile-contact-bg-text" aria-hidden="true">Let's connect!</div>

      <div className="mobile-contact-content">
        <span className="mobile-section-label">Get in touch</span>
        <h1 className="mobile-contact-heading">Inquiries.</h1>
        <p className="mobile-contact-sub">Design grows through connection — let's connect</p>

        <div className="mobile-contact-links">
          <a
            href="mailto:dimpleshivukumar@gmail.com"
            className="mobile-contact-link"
          >
            <span className="mobile-contact-link-icon">
              <Mail size={18} strokeWidth={1.5} />
            </span>
            <span>dimpleshivukumar@gmail.com</span>
          </a>

          <a
            href="https://www.instagram.com/sketchstorybydimple"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-contact-link"
          >
            <span className="mobile-contact-link-icon">
              <Instagram size={18} strokeWidth={1.5} />
            </span>
            <span>@sketchstorybydimple</span>
          </a>

          <a
            href="https://www.linkedin.com/in/dimple-shivakumar"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-contact-link"
          >
            <span className="mobile-contact-link-icon">
              <Linkedin size={18} strokeWidth={1.5} />
            </span>
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="mobile-contact-availability">
          <div className="mobile-contact-dot" />
          <span>Available for collaborations & freelance projects</span>
        </div>
      </div>
    </div>
  );
};

export default MobileContact;
