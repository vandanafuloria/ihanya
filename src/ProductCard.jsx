import React, { useId } from 'react';
import './ProductCard.css';
import MarketplaceBadgeRotator from './MarketplaceBadgeRotator';

const STAR_PATH = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";

function StarRow({ rating = 0, reviewCount = 0 }) {
  const uid = useId().replace(/:/g, '');
  return (
    <div className="pc-star-row">
      {[1, 2, 3, 4, 5].map((i) => {
        const full = i <= Math.floor(rating);
        const half = !full && i === Math.ceil(rating) && (rating % 1) >= 0.25;
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
            <path d={STAR_PATH} fill="#e5e7eb" />
            {(full || half) && (
              <path d={STAR_PATH} fill="#f97316" clipPath={half ? `url(#${clipId})` : undefined} />
            )}
          </svg>
        );
      })}
      <span className="pc-rating-num">{rating}</span>
      {reviewCount > 0 && (
        <span className="pc-review-count">({reviewCount > 60 ? `${reviewCount}+` : reviewCount})</span>
      )}
    </div>
  );
}

const ProductCard = ({ product, onClick }) => {
  if (!product) return null;

  const {
    image,
    title,
    currentPrice,
    rating = 0,
    reviewCount = 0,
    size,
    tagline,
    imageAlt,
  } = product;

  const onNavigate = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <div className="pc-card" onClick={onNavigate}>
      {/* Image with marketplace badge overlaid at bottom */}
      <div className="pc-img-wrap">
        <img
          src={image}
          alt={imageAlt || title}
          width={400}
          height={400}
          loading="lazy"
          className="pc-img"
        />
        <div className="pc-img-market-overlay">
          <MarketplaceBadgeRotator />
        </div>
      </div>

      <div className="pc-info">
        {size && <p className="pc-size">{size}</p>}

        {tagline && (
          <div className="pc-tagline-pill">
            <span>{tagline}</span>
          </div>
        )}

        <h3 className="pc-title">{title}</h3>

        {rating > 0 && (
          <StarRow rating={rating} reviewCount={reviewCount} />
        )}

        {currentPrice > 0 && (
          <p className="pc-price">Rs. {Number(currentPrice).toLocaleString('en-IN')}</p>
        )}

        <button
          className="pc-add-btn"
          onClick={(e) => { e.stopPropagation(); onNavigate(e); }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
