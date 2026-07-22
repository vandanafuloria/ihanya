import React, { useId, useState } from 'react';
import './ProductCard.css';
import MarketplaceBadgeRotator from './MarketplaceBadgeRotator';

const STAR_PATH = 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

function StarRow({ rating = 0, reviewCount = 0 }) {
  const uid = useId().replace(/:/g, '');
  return (
    <div className="pc-star-row">
      {[1, 2, 3, 4, 5].map((i) => {
        const full = i <= Math.floor(rating);
        const half = !full && i === Math.ceil(rating) && rating % 1 >= 0.25;
        const clipId = `${uid}-h${i}`;
        return (
          <svg key={i} className="pc-star-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {half && (
              <defs>
                <clipPath id={clipId}>
                  <rect x="0" y="0" width="12" height="24" />
                </clipPath>
              </defs>
            )}
            <path d={STAR_PATH} fill="none" stroke="#c41e3a" strokeWidth="1.5" />
            {(full || half) && (
              <path
                d={STAR_PATH}
                fill="#c41e3a"
                stroke="#c41e3a"
                strokeWidth="1.5"
                clipPath={half ? `url(#${clipId})` : undefined}
              />
            )}
          </svg>
        );
      })}
      {reviewCount > 0 && (
        <span className="pc-review-count">{reviewCount} reviews</span>
      )}
    </div>
  );
}

function formatInr(amount) {
  return `Rs.${Number(amount).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

const ProductCard = ({ product, onClick }) => {
  if (!product) return null;

  const {
    image,
    galleryImages,
    title,
    currentPrice,
    originalPrice,
    rating = 0,
    reviewCount = 0,
    imageAlt,
  } = product;

  const images = (galleryImages?.length ? galleryImages : [image]).filter(Boolean);
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbStart, setThumbStart] = useState(0);

  const visibleThumbs = 3;
  const activeImage = images[activeIndex] || image;
  const canScrollUp = thumbStart > 0;
  const canScrollDown = thumbStart + visibleThumbs < images.length;

  const onNavigate = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  const showThumb = (index) => {
    setActiveIndex(index);
    if (index < thumbStart) setThumbStart(index);
    if (index >= thumbStart + visibleThumbs) setThumbStart(index - visibleThumbs + 1);
  };

  return (
    <div className="pc-card" onClick={onNavigate}>
      <div className="pc-img-wrap">
        <img
          src={activeImage}
          alt={imageAlt || title}
          width={380}
          height={507}
          loading="lazy"
          className="pc-img"
        />

        {images.length > 1 && (
          <div
            className="pc-thumbs"
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="pc-thumb-nav"
              aria-label="Previous images"
              disabled={!canScrollUp}
              onClick={() => setThumbStart((s) => Math.max(0, s - 1))}
            >
              ▴
            </button>
            <div className="pc-thumb-list">
              {images.slice(thumbStart, thumbStart + visibleThumbs).map((src, i) => {
                const index = thumbStart + i;
                return (
                  <button
                    key={`${src}-${index}`}
                    type="button"
                    className={`pc-thumb${index === activeIndex ? ' is-active' : ''}`}
                    onClick={() => showThumb(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img src={src} alt="" loading="lazy" />
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              className="pc-thumb-nav"
              aria-label="Next images"
              disabled={!canScrollDown}
              onClick={() =>
                setThumbStart((s) =>
                  Math.min(Math.max(0, images.length - visibleThumbs), s + 1)
                )
              }
            >
              ▾
            </button>
          </div>
        )}

        <div className="pc-img-market-overlay" onClick={(e) => e.stopPropagation()}>
          <MarketplaceBadgeRotator />
        </div>

        <button
          type="button"
          className="pc-quick-view"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(e);
          }}
        >
          QUICK VIEW
        </button>
      </div>

      <div className="pc-info">
        <h3 className="pc-title">{title}</h3>

        {rating > 0 && <StarRow rating={rating} reviewCount={reviewCount} />}

        {currentPrice > 0 && (
          <p className="pc-price-row">
            <span className="pc-price">{formatInr(currentPrice)}</span>
            {originalPrice > currentPrice && (
              <span className="pc-price-mrp">{formatInr(originalPrice)}</span>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
