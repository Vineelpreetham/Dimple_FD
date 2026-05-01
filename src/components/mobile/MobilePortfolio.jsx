import React, { useState, useCallback, Suspense, lazy } from 'react';
import '../../mobile.css';

// Core mobile views — eager (small, needed immediately)
import MobileNav           from './MobileNav';
import MobileHero          from './MobileHero';
import MobileCollections   from './MobileCollections';
import MobileAbout         from './MobileAbout';
import MobileContact       from './MobileContact';
import MobileFooter        from './MobileFooter';
import MobileBrandProjects from './MobileBrandProjects';
import MobileDesignProjects from './MobileDesignProjects';

// Heavy desktop sub-pages — loaded only when navigated to
const TechFlatPage          = lazy(() => import('../TechFlatPage'));
const OrganicStructuresPage = lazy(() => import('../OrganicStructuresPage'));
const Brand1Page  = lazy(() => import('../Brand1Page'));
const Brand2Page  = lazy(() => import('../Brand2Page'));
const Brand3Page  = lazy(() => import('../Brand3Page'));
const Brand4Page  = lazy(() => import('../Brand4Page'));
const Brand5Page  = lazy(() => import('../Brand5Page'));
const Brand6Page  = lazy(() => import('../Brand6Page'));
const Brand7Page  = lazy(() => import('../Brand7Page'));
const Design1Page = lazy(() => import('../Design1Page'));
const Design2Page = lazy(() => import('../Design2Page'));
const Design3Page = lazy(() => import('../Design3Page'));
const Design4Page = lazy(() => import('../Design4Page'));
const Design5Page = lazy(() => import('../Design5Page'));
const Design6Page = lazy(() => import('../Design6Page'));
const Design7Page = lazy(() => import('../Design7Page'));
const Design8Page = lazy(() => import('../Design8Page'));
const Design9Page = lazy(() => import('../Design9Page'));

// Background gradient — lazy because it imports CSS-in-JS
const BGA = lazy(() =>
  import('../ui/background-gradient-animation').then(m => ({
    default: m.BackgroundGradientAnimation,
  }))
);

const MOODBOARD_URL =
  'https://ik.imagekit.io/Nouskun/Dimple/WhatsApp%20Image%202026-04-09%20at%2010.42.25%20PM.jpeg?tr=f-auto,q-70,w-900';

const IG_POSTS = [
  'https://www.instagram.com/p/DV843M-jQRh/',
  'https://www.instagram.com/reel/DVjUNI9jn07/',
  'https://www.instagram.com/p/DS33UkdE_X8/',
  'https://www.instagram.com/p/DJrkQ86O5dV/',
];

// Spinner shown while a lazy chunk loads
const Loader = () => (
  <div className="mp-loader">
    <div className="mp-spinner" />
  </div>
);

// Catches render errors so we never see a blank white screen
class Boundary extends React.Component {
  state = { err: null };
  static getDerivedStateFromError(e) { return { err: e }; }
  render() {
    if (this.state.err) {
      return (
        <div className="mp-error">
          <p>Something went wrong</p>
          <small>{this.state.err?.message}</small>
          <button onClick={() => this.setState({ err: null })}>Retry</button>
        </div>
      );
    }
    return this.props.children;
  }
}

const MAIN = ['home', 'about', 'collections', 'contact'];

export default function MobilePortfolio() {
  const [page, setPage] = useState('home');

  const go = useCallback((p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const isMain = MAIN.includes(page);

  return (
    <div className="mp-root">
      {isMain && <MobileNav activePage={page} showPage={go} />}

      <Boundary>
        <Suspense fallback={<Loader />}>

          {/* ─── HOME ─── */}
          {page === 'home' && (
            <div className="mp-page">
              <MobileHero />

              {/* Moodboard */}
              <section className="mp-moodboard">
                <span className="mp-label">Portfolio</span>
                <img src={MOODBOARD_URL} alt="Moodboard" className="mp-moodboard-img" loading="lazy" />
              </section>

              {/* Collections teaser */}
              <section className="mp-section">
                <div className="mp-section-head">
                  <span className="mp-label">Selected Work</span>
                  <h2 className="mp-h2">Curated Fragments</h2>
                  <button className="mp-text-btn" onClick={() => go('collections')}>
                    All Collections →
                  </button>
                </div>
                <MobileCollections onSelectPage={go} />
              </section>

              {/* Instagram */}
              <section className="mp-ig">
                <div className="mp-ig-head">
                  <span className="mp-label">Follow Along</span>
                  <h2 className="mp-h2">@sketchstorybydimple</h2>
                  <p className="mp-ig-sub">
                    Behind the seams — sketches, fittings, and moments from the atelier.
                  </p>
                </div>
                <div className="mp-ig-grid">
                  {IG_POSTS.map((url, i) => (
                    <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="mp-ig-cell">
                      <img src={`/assets/instagram_${i + 1}.jpg`} alt={`Post ${i + 1}`} loading="lazy" />
                      <div className="mp-ig-over">View</div>
                    </a>
                  ))}
                </div>
                <a
                  href="https://www.instagram.com/sketchstorybydimple"
                  target="_blank" rel="noopener noreferrer"
                  className="mp-outline-btn"
                >
                  Follow on Instagram
                </a>
              </section>

              <MobileFooter showPage={go} />
            </div>
          )}

          {/* ─── ABOUT ─── */}
          {page === 'about' && (
            <div className="mp-page mp-page--nav">
              <MobileAbout />
              <MobileFooter showPage={go} />
            </div>
          )}

          {/* ─── COLLECTIONS ─── */}
          {page === 'collections' && (
            <div className="mp-page mp-page--nav">
              <div className="mp-section-head mp-section-head--center">
                <span className="mp-label">All Collections</span>
                <h2 className="mp-h2">Artistic Fashion Collections</h2>
              </div>
              <MobileCollections onSelectPage={go} />
              <MobileFooter showPage={go} />
            </div>
          )}

          {/* ─── CONTACT ─── */}
          {page === 'contact' && (
            <div className="mp-page mp-page--nav">
              <MobileContact />
              <MobileFooter showPage={go} />
            </div>
          )}

          {/* ─── TECH FLAT ─── */}
          {page === 'tech_flat' && (
            <div className="mp-page mp-subpage">
              <TechFlatPage onBack={() => go('collections')} />
            </div>
          )}

          {/* ─── BRAND PROJECTS ─── */}
          {page === 'brand_projects' && (
            <MobileBrandProjects onBack={() => go('collections')} onSelectProject={(id) => go(`brand_${id}`)} />
          )}
          {page === 'brand_1' && <Brand1Page onBack={() => go('brand_projects')} />}
          {page === 'brand_2' && <Brand2Page onBack={() => go('brand_projects')} />}
          {page === 'brand_3' && <Brand3Page onBack={() => go('brand_projects')} />}
          {page === 'brand_4' && <Brand4Page onBack={() => go('brand_projects')} />}
          {page === 'brand_5' && <Brand5Page onBack={() => go('brand_projects')} />}
          {page === 'brand_6' && <Brand6Page onBack={() => go('brand_projects')} />}
          {page === 'brand_7' && <Brand7Page onBack={() => go('brand_projects')} />}

          {/* ─── DESIGN PROJECTS ─── */}
          {page === 'design_projects' && (
            <MobileDesignProjects onBack={() => go('collections')} onSelectProject={(id) => go(`design_${id}`)} />
          )}
          {page === 'design_1' && <Design1Page onBack={() => go('design_projects')} />}
          {page === 'design_2' && <Design2Page onBack={() => go('design_projects')} />}
          {page === 'design_3' && <Design3Page onBack={() => go('design_projects')} />}
          {page === 'design_4' && <Design4Page onBack={() => go('design_projects')} />}
          {page === 'design_5' && <Design5Page onBack={() => go('design_projects')} />}
          {page === 'design_6' && <Design6Page onBack={() => go('design_projects')} />}
          {page === 'design_7' && <Design7Page onBack={() => go('design_projects')} />}
          {page === 'design_8' && <Design8Page onBack={() => go('design_projects')} />}
          {page === 'design_9' && <Design9Page onBack={() => go('design_projects')} />}

          {/* ─── ORGANIC STRUCTURES ─── */}
          {page === 'organic_structures' && (
            <div className="mp-page mp-subpage">
              <OrganicStructuresPage onBack={() => go('collections')} />
            </div>
          )}

        </Suspense>
      </Boundary>
    </div>
  );
}
