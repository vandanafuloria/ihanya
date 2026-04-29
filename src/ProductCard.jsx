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
              <path d={STAR_PATH} fill="#fb923c" clipPath={half ? `url(#${clipId})` : undefined} />
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
    handle,
    imageAlt,
  } = product;

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
    ? `From Rs. ${Number(currentPrice).toLocaleString('en-IN')}.00`
    : '';

  return (
    <div className="pc-card" onClick={onNavigate}>
      {/* Image area */}
      <div className="pc-img-wrap">
        <img
          src={src720 || image}
          alt={imageAlt || title}
          srcSet={image ? `${src360} 360w, ${src720} 720w` : undefined}
          sizes="(max-width: 768px) 90vw, 300px"
          width={400}
          height={400}
          loading="lazy"
          className="pc-img"
        />
      </div>

      {/* Info area */}
      <div className="pc-info">
        <h3 className="pc-title">{title}</h3>
        
        {/* Rating and Reviews */}
        <div className="pc-rating-container">
          <StarRow rating={rating} />
          <span className="pc-review-count">({reviewCount} reviews)</span>
        </div>
        
        <p className="pc-price">{priceFormatted}</p>
      </div>
    </div>
  );
};

export default ProductCard;
