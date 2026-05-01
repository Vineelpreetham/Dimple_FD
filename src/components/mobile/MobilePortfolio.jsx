import React, { useState, useEffect, useCallback } from 'react';
import MobileNav from './MobileNav';
import MobileHero from './MobileHero';
import MobileCollections from './MobileCollections';
import MobileAbout from './MobileAbout';
import MobileContact from './MobileContact';
import MobileFooter from './MobileFooter';

// Re-use the existing sub-page components unchanged
import TechFlatPage from '../TechFlatPage';
import BrandProjectsPage from '../BrandProjectsPage';
import OrganicStructuresPage from '../OrganicStructuresPage';
import DesignProjectsPage from '../DesignProjectsPage';
import Brand1Page from '../Brand1Page';
import Brand2Page from '../Brand2Page';
import Brand3Page from '../Brand3Page';
import Brand4Page from '../Brand4Page';
import Brand5Page from '../Brand5Page';
import Brand6Page from '../Brand6Page';
import Brand7Page from '../Brand7Page';
import Design1Page from '../Design1Page';
import Design2Page from '../Design2Page';
import Design3Page from '../Design3Page';
import Design4Page from '../Design4Page';
import Design5Page from '../Design5Page';
import Design6Page from '../Design6Page';
import Design7Page from '../Design7Page';
import Design8Page from '../Design8Page';
import Design9Page from '../Design9Page';
import { BackgroundGradientAnimation } from '../ui/background-gradient-animation';
import { getOptimizedUrl } from '../../lib/imageConfig';

/** Top-level pages that show the nav + footer */
const MAIN_PAGES = ['home', 'about', 'collections', 'contact'];

const MobilePortfolio = () => {
  const [activePage, setActivePage] = useState('home');

  const showPage = useCallback((pageName) => {
    setActivePage(pageName);
    window.scrollTo(0, 0);
    if (window.lenis) window.lenis.scrollTo(0, { immediate: true });
  }, []);

  // Scroll to top on every page change
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.lenis) window.lenis.scrollTo(0, { immediate: true });
  }, [activePage]);

  const isMainPage = MAIN_PAGES.includes(activePage);

  return (
    <div className="mobile-portfolio">
      {/* Nav is always visible on main pages */}
      {isMainPage && <MobileNav activePage={activePage} showPage={showPage} />}

      {/* ── HOME ── */}
      {activePage === 'home' && (
        <div className="mobile-page">
          <MobileHero />

          {/* Moodboard strip */}
          <section className="mobile-moodboard">
            <span className="mobile-section-label" style={{ justifyContent: 'center', display: 'flex' }}>Portfolio</span>
            <img
              src={getOptimizedUrl('https://ik.imagekit.io/Nouskun/Dimple/WhatsApp%20Image%202026-04-09%20at%2010.42.25%20PM.jpeg?updatedAt=1777054038407')}
              alt="Creative Moodboard"
              className="mobile-moodboard-img"
              loading="lazy"
            />
          </section>

          {/* Collections teaser */}
          <section className="mobile-home-collections">
            <div className="mobile-section-header" style={{ textAlign: 'center' }}>
              <span className="mobile-section-label" style={{ justifyContent: 'center', display: 'flex' }}>Selected Work</span>
              <h2 className="mobile-section-title">Curated Fragments</h2>
              <button
                className="mobile-all-collections-link"
                onClick={() => showPage('collections')}
              >
                All Collections →
              </button>
            </div>
            <MobileCollections onSelectPage={showPage} />
          </section>

          {/* Instagram */}
          <section className="mobile-instagram">
            <div className="mobile-section-header" style={{ textAlign: 'center' }}>
              <span className="mobile-section-label" style={{ justifyContent: 'center', display: 'flex' }}>Follow Along</span>
              <h2 className="mobile-section-title">@sketchstorybydimple</h2>
              <p className="mobile-ig-intro">Behind the seams — sketches, fittings, and moments from the atelier.</p>
            </div>
            <div className="mobile-ig-grid">
              {[
                'https://www.instagram.com/p/DV843M-jQRh/',
                'https://www.instagram.com/reel/DVjUNI9jn07/',
                'https://www.instagram.com/p/DS33UkdE_X8/',
                'https://www.instagram.com/p/DJrkQ86O5dV/',
              ].map((url, i) => (
                <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="mobile-ig-post">
                  <img src={`/assets/instagram_${i + 1}.jpg`} alt={`Instagram Post ${i + 1}`} loading="lazy" />
                  <div className="mobile-ig-overlay"><span>View</span></div>
                </a>
              ))}
            </div>
            <a
              href="https://www.instagram.com/sketchstorybydimple?igsh=ZmIxMXFqZDFtZDdr"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-ig-cta"
            >
              Follow on Instagram
            </a>
          </section>

          <MobileFooter showPage={showPage} />
        </div>
      )}

      {/* ── ABOUT ── */}
      {activePage === 'about' && (
        <div className="mobile-page">
          <MobileAbout />
          <MobileFooter showPage={showPage} />
        </div>
      )}

      {/* ── COLLECTIONS ── */}
      {activePage === 'collections' && (
        <div className="mobile-page">
          <BackgroundGradientAnimation
            containerClassName="!fixed inset-0 !z-[-1] !h-screen !w-screen"
            gradientBackgroundStart="#F8F9FF"
            gradientBackgroundEnd="#F0F0FF"
            firstColor="180, 165, 230"
            secondColor="237, 220, 143"
            thirdColor="206, 135, 159"
            fourthColor="167, 187, 211"
            fifthColor="245, 180, 160"
            pointerColor="206, 135, 159"
            size="80%"
            blendingValue="hard-light"
          />
          <div className="relative z-10 pt-20 pb-12">
            <MobileCollections onSelectPage={showPage} />
          </div>
          <MobileFooter showPage={showPage} />
        </div>
      )}

      {/* ── CONTACT ── */}
      {activePage === 'contact' && (
        <div className="mobile-page">
          <MobileContact />
          <MobileFooter showPage={showPage} />
        </div>
      )}

      {/* ── TECH FLAT ── */}
      {activePage === 'tech_flat' && (
        <div className="mobile-page relative">
          <BackgroundGradientAnimation
            containerClassName="!fixed inset-0 !z-[-1] !h-screen !w-screen"
            gradientBackgroundStart="#ffffff"
            gradientBackgroundEnd="#ffffff"
            firstColor="100, 149, 237"
            secondColor="135, 206, 235"
            thirdColor="70, 130, 180"
            fourthColor="173, 216, 230"
            fifthColor="0, 191, 255"
            pointerColor="200, 200, 250"
          />
          <div className="relative z-10">
            <TechFlatPage onBack={() => showPage('collections')} />
          </div>
        </div>
      )}

      {/* ── BRAND PROJECTS ── */}
      {activePage === 'brand_projects' && (
        <BrandProjectsPage
          onBack={() => showPage('collections')}
          onSelectProject={(id) => showPage(`brand_${id}`)}
        />
      )}

      {/* ── BRAND SUB-PAGES ── */}
      {activePage === 'brand_1' && <Brand1Page onBack={() => showPage('brand_projects')} />}
      {activePage === 'brand_2' && <Brand2Page onBack={() => showPage('brand_projects')} />}
      {activePage === 'brand_3' && <Brand3Page onBack={() => showPage('brand_projects')} />}
      {activePage === 'brand_4' && <Brand4Page onBack={() => showPage('brand_projects')} />}
      {activePage === 'brand_5' && <Brand5Page onBack={() => showPage('brand_projects')} />}
      {activePage === 'brand_6' && <Brand6Page onBack={() => showPage('brand_projects')} />}
      {activePage === 'brand_7' && <Brand7Page onBack={() => showPage('brand_projects')} />}

      {/* ── DESIGN PROJECTS ── */}
      {activePage === 'design_projects' && (
        <DesignProjectsPage
          onBack={() => showPage('collections')}
          onSelectProject={(id) => showPage(`design_${id}`)}
        />
      )}

      {/* ── DESIGN SUB-PAGES ── */}
      {activePage === 'design_1' && <Design1Page onBack={() => showPage('design_projects')} />}
      {activePage === 'design_2' && <Design2Page onBack={() => showPage('design_projects')} />}
      {activePage === 'design_3' && <Design3Page onBack={() => showPage('design_projects')} />}
      {activePage === 'design_4' && <Design4Page onBack={() => showPage('design_projects')} />}
      {activePage === 'design_5' && <Design5Page onBack={() => showPage('design_projects')} />}
      {activePage === 'design_6' && <Design6Page onBack={() => showPage('design_projects')} />}
      {activePage === 'design_7' && <Design7Page onBack={() => showPage('design_projects')} />}
      {activePage === 'design_8' && <Design8Page onBack={() => showPage('design_projects')} />}
      {activePage === 'design_9' && <Design9Page onBack={() => showPage('design_projects')} />}

      {/* ── ORGANIC STRUCTURES ── */}
      {activePage === 'organic_structures' && (
        <div className="mobile-page relative">
          <BackgroundGradientAnimation
            containerClassName="!fixed inset-0 !z-[-1] !h-screen !w-screen"
            gradientBackgroundStart="#F1DEE4"
            gradientBackgroundEnd="#E2C2CA"
            firstColor="174, 230, 229"
            secondColor="184, 179, 232"
            thirdColor="144, 180, 245"
            fourthColor="98, 128, 230"
            fifthColor="100, 220, 255"
            pointerColor="200, 200, 250"
          />
          <OrganicStructuresPage onBack={() => showPage('collections')} />
        </div>
      )}
    </div>
  );
};

export default MobilePortfolio;
