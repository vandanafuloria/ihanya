import React, { useId } from 'react';
import './ProductCard.css';

const STAR_PATH = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";

function StarRow({ rating = 0 }) {
  const uid = useId().replace(/:/g, '');
  return (
    <span className="pc-stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const full = i <= Math.floor(rating);
        const half = !full && i === Math.ceil(rating) && (rating % 1) >= 0.25;
        const clipId = `${uid}-h${i}`;
        return (
          <svg key={i} className="pc-star" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {half && (
              <defs>
                <clipPath id={clipId}>
                  <rect x="0" y="0" width="12" height="24" />
                </clipPath>
              </defs>
            )}
            <path d={STAR_PATH} fill="#d1d5db" />
            {(full || half) && (
              <path d={STAR_PATH} fill="#f97316" clipPath={half ? `url(#${clipId})` : undefined} />
            )}
          </svg>
        );
      })}
    </span>
  );
}

const ProductCard = ({ product, onClick }) => {

  if (!product) return null;

  const {
    image,
    title,
    currentPrice,
    originalPrice,
    rating = 0,
    reviewCount = 0,
    badge,
    handle,
    imageAlt,
  } = product;

  const discountPercent =
    originalPrice && currentPrice
      ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
      : 0;

  const productPath = handle
    ? `/products/${handle.replace(/^\//, '')}`
    : '#';

  const src720 = image || '';
  const src360 = image || '';

  const onNavigate = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    } else if (productPath === '#') {
      e.preventDefault();
    }
  };


  const priceFormatted = currentPrice
    ? `₹ ${Number(currentPrice).toLocaleString('en-IN')}`
    : '';
  const origFormatted = originalPrice
    ? `₹ ${Number(originalPrice).toLocaleString('en-IN')}`
    : '';

  return (
    <div
      className="pc-card"
    >
      {/* Image area — wishlist + CTAs are outside the image link (valid HTML) */}
      <div className="pc-img-wrap">
        <button
          type="button"
          className="pc-wishlist"
          aria-label="Add to wishlist"
          onClick={(e) => e.preventDefault()}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <a href={productPath} onClick={onNavigate} className="pc-img-link">
          {(badge || discountPercent > 0) && (
            <span className="pc-badge">{badge || 'Sale'}</span>
          )}
          <img
            src={src720 || image}
            alt={imageAlt || title}
            srcSet={image ? `${src360} 360w, ${src720} 720w` : undefined}
            sizes="(max-width: 768px) 90vw, 300px"
            width={300}
            height={458}
            loading="lazy"
            className="pc-img"
          />
        </a>
      </div>

      {/* Info area */}
      <div className="pc-info">
        <a href={productPath} onClick={onNavigate} className="pc-title-link">
          <p className="pc-title">{title}</p>
        </a>

        <div className="pc-review-row">
          {rating > 0 && (
            <span className="pc-rating-num">{rating.toFixed(1)}</span>
          )}
          <StarRow rating={rating} />
          <span className="pc-review-label">({reviewCount > 0 ? Number(reviewCount).toLocaleString('en-IN') : 0})</span>
        </div>

        <div className="pc-price-row">
          <span className="pc-price-current">{priceFormatted}</span>
          {discountPercent > 0 && origFormatted ? (
            <s className="pc-price-orig">{origFormatted}</s>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
