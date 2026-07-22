import React, { useState, useEffect, useCallback } from 'react';
import './PhotoGallery.css';

// Customer gallery — Ishnya looks (synced with PDP reviews)
import g01 from './assets/photo_gallery/gallery_01.png';
import g02 from './assets/photo_gallery/gallery_02.png';
import g03 from './assets/photo_gallery/gallery_03.png';
import g04 from './assets/photo_gallery/gallery_04.png';
import g05 from './assets/photo_gallery/gallery_05.png';
import g06 from './assets/photo_gallery/gallery_06.png';
import g07 from './assets/photo_gallery/gallery_07.png';
import g08 from './assets/photo_gallery/gallery_08.png';
import g09 from './assets/photo_gallery/gallery_09.png';
import g10 from './assets/photo_gallery/gallery_10.png';
import g11 from './assets/photo_gallery/gallery_11.png';
import g12 from './assets/photo_gallery/gallery_12.png';
import g13 from './assets/photo_gallery/gallery_13.png';
import g14 from './assets/photo_gallery/gallery_14.png';
import { bestSellerProducts } from './scrapshalaBestSellers';

export const GALLERY_IMAGES = [
  g01, g02, g03, g04, g05, g06, g07,
  g08, g09, g10, g11, g12, g13, g14,
];

const INITIAL_SHOW = 12;

const inr = (n) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n);

/** Dummy PDP-style copy per gallery index (cycles product catalog). */
function getGalleryProductDetail(index) {
  const p = bestSellerProducts[index % bestSellerProducts.length];
  const pct = Math.round((1 - p.currentPrice / p.originalPrice) * 100);
  return {
    title: p.title,
    currentPrice: p.currentPrice,
    originalPrice: p.originalPrice,
    pctOff: pct,
    rating: p.rating,
    reviewCount: p.reviewCount,
  };
}

export default function PhotoGallery({
  title = 'Our Gallery',
  subtitle = 'Real looks from the Ishnya community — Indo-Western styles in everyday moments.',
}) {
  const [lightbox, setLightbox] = useState(null); // index or null
  const [showAll, setShowAll] = useState(false);

  const images = showAll ? GALLERY_IMAGES : GALLERY_IMAGES.slice(0, INITIAL_SHOW);

  const close = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() =>
    setLightbox(i => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length), []);

  const next = useCallback(() =>
    setLightbox(i => (i + 1) % GALLERY_IMAGES.length), []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, prev, next]);

  return (
    <section className="pg-section">
      <div className="pg-header">
        <h2 className="pg-title">{title}</h2>
        {subtitle && <p className="pg-subtitle">{subtitle}</p>}
      </div>

      <div className="pg-grid">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className="pg-cell"
            onClick={() => setLightbox(i)}
            aria-label={`Open gallery photo ${i + 1}`}
          >
            <img src={src} alt={`Ishnya look ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      {GALLERY_IMAGES.length > INITIAL_SHOW && (
        <div className="pg-more">
          <button type="button" className="pg-more-btn" onClick={() => setShowAll(v => !v)}>
            {showAll ? 'Show Less' : `View All ${GALLERY_IMAGES.length} Photos`}
          </button>
        </div>
      )}

      {lightbox !== null && (
        <div className="pg-lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button type="button" className="pg-lb-close" onClick={close} aria-label="Close">×</button>
          <button type="button" className="pg-lb-nav pg-lb-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">‹</button>
          <button type="button" className="pg-lb-nav pg-lb-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">›</button>
          <div className="pg-lb-inner" onClick={(e) => e.stopPropagation()}>
            <img src={GALLERY_IMAGES[lightbox]} alt={`Ishnya look ${lightbox + 1}`} />
            {(() => {
              const detail = getGalleryProductDetail(lightbox);
              return (
                <div className="pg-lb-meta">
                  <p className="pg-lb-counter">{lightbox + 1} / {GALLERY_IMAGES.length}</p>
                  <h3 className="pg-lb-title">{detail.title}</h3>
                  <p className="pg-lb-price">
                    <span className="pg-lb-now">{inr(detail.currentPrice)}</span>
                    <span className="pg-lb-mrp">{inr(detail.originalPrice)}</span>
                    <span className="pg-lb-off">{detail.pctOff}% off</span>
                  </p>
                  <p className="pg-lb-rating">{detail.rating} · {detail.reviewCount}+ reviews</p>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
}
