import React, { useState, useCallback, Suspense, lazy } from 'react';
import '../../mobile.css';

// Core mobile views — eager (small, needed immediately)
import MobileNav            from './MobileNav';
import MobileHero           from './MobileHero';
import MobileCollections    from './MobileCollections';
import MobileAbout          from './MobileAbout';
import MobileContact        from './MobileContact';
import MobileFooter         from './MobileFooter';
import MobileBrandProjects  from './MobileBrandProjects';
import MobileDesignProjects from './MobileDesignProjects';
import MobileSwipeGallery   from './MobileSwipeGallery';
import { BRAND_GALLERIES, DESIGN_GALLERIES, ORGANIC_GALLERY } from './galleryData';

// Desktop sub-pages used on mobile as-is
const TechFlatPage          = lazy(() => import('../TechFlatPage'));
const OrganicStructuresPage = lazy(() => import('../OrganicStructuresPage'));

// Background gradient — lazy
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

const Loader = () => (
  <div className="mp-loader"><div className="mp-spinner" /></div>
);

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

  // Swipe gallery pages — parse brand_N / design_N
  const brandMatch  = page.match(/^brand_(\d+)$/);
  const designMatch = page.match(/^design_(\d+)$/);

  if (brandMatch) {
    const gallery = BRAND_GALLERIES[+brandMatch[1]];
    return gallery ? (
      <div className="mp-root">
        <MobileSwipeGallery
          title={gallery.title}
          label={gallery.label}
          items={gallery.items}
          bg={gallery.bg}
          onBack={() => go('brand_projects')}
        />
      </div>
    ) : null;
  }

  if (designMatch) {
    const gallery = DESIGN_GALLERIES[+designMatch[1]];
    return gallery ? (
      <div className="mp-root">
        <MobileSwipeGallery
          title={gallery.title}
          label={gallery.label}
          items={gallery.items}
          bg={gallery.bg}
          onBack={() => go('design_projects')}
        />
      </div>
    ) : null;
  }

  if (page === 'organic_structures') {
    return (
      <div className="mp-root">
        <Suspense fallback={<Loader />}>
          <OrganicStructuresPage onBack={() => go('collections')} />
        </Suspense>
      </div>
    );
  }

  return (
    <div className="mp-root">
      {isMain && <MobileNav activePage={page} showPage={go} />}

      <Boundary>
        <Suspense fallback={<Loader />}>

          {/* ─── HOME ─── */}
          {page === 'home' && (
            <div className="mp-page">
              <MobileHero />

              <section className="mp-moodboard">
                <span className="mp-label">Portfolio</span>
                <img src={MOODBOARD_URL} alt="Moodboard" className="mp-moodboard-img" loading="lazy" />
              </section>

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

          {/* ─── TECH FLAT (desktop component, lazy) ─── */}
          {page === 'tech_flat' && (
            <div className="mp-page mp-subpage">
              <TechFlatPage onBack={() => go('collections')} />
            </div>
          )}

          {/* ─── BRAND / DESIGN project lists ─── */}
          {page === 'brand_projects' && (
            <MobileBrandProjects
              onBack={() => go('collections')}
              onSelectProject={(id) => go(`brand_${id}`)}
            />
          )}
          {page === 'design_projects' && (
            <MobileDesignProjects
              onBack={() => go('collections')}
              onSelectProject={(id) => go(`design_${id}`)}
            />
          )}

        </Suspense>
      </Boundary>
    </div>
  );
}
