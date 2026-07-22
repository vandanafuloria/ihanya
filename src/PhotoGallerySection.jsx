import React, { useState } from 'react';
import './PhotoGallerySection.css';
import ProductDetailModal from './ProductDetailModal';
import { GALLERY_IMAGES as GALLERY_SRCS } from './PhotoGallery';
import { bestSellerProducts } from './scrapshalaBestSellers';

/** Gallery tiles synced with customer look photos + best-seller copy */
const GALLERY_IMAGES = GALLERY_SRCS.map((src, i) => {
  const p = bestSellerProducts[i % bestSellerProducts.length];
  const neighbors = [
    src,
    GALLERY_SRCS[(i + 1) % GALLERY_SRCS.length],
    GALLERY_SRCS[(i + 2) % GALLERY_SRCS.length],
  ];
  return {
    id: i + 1,
    src,
    images: neighbors,
    title: p.title,
    currentPrice: p.currentPrice,
    originalPrice: p.originalPrice,
    rating: p.rating,
    reviewCount: p.reviewCount,
    category: 'Indo-Western',
    description:
      'Ishnya Indo-Western apparel — contemporary desi fusion designed for comfort, confidence, and everyday celebrations.',
    features: [
      'Comfort-first fits',
      'Inclusive sizing',
      'Festive & everyday ready',
      'Easy exchange',
      'Born in Bombay',
    ],
    alt: p.title,
  };
});

const PhotoGallerySection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductModal, setShowProductModal] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setShowProductModal(true);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setShowProductModal(false);
  };

  const loadMoreImages = () => {
    setVisibleCount((prev) => Math.min(prev + 8, GALLERY_IMAGES.length));
  };

  const visibleImages = GALLERY_IMAGES.slice(0, visibleCount);
  const hasMoreImages = visibleCount < GALLERY_IMAGES.length;

  return (
    <section className="photo-gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">Our Collection</h2>
          <p className="gallery-subtitle">Real customer looks in Ishnya Indo-Western styles.</p>
        </div>

        <div className="gallery-grid">
          {visibleImages.map((product, index) => (
            <div
              key={product.id}
              className={`gallery-item gallery-item-${index + 1}`}
              onClick={() => openProductModal(product)}
            >
              <img src={product.src} alt={product.alt} loading="lazy" className="gallery-image" />
              <div className="gallery-overlay">
                <div className="zoom-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMoreImages && (
          <div className="load-more-container">
            <button className="load-more-btn" onClick={loadMoreImages}>
              Load More ({GALLERY_IMAGES.length - visibleCount} more items)
            </button>
          </div>
        )}
      </div>

      {showProductModal && selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={closeProductModal} />
      )}
    </section>
  );
};

export default PhotoGallerySection;
