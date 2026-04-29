/** Muun Home — best sellers */

export const MUUN_HOME_GALLERY_IMAGES = [
  'https://www.muunhome.com/cdn/shop/files/57_ef5c06d2-7dbf-45ff-9a99-c6c091b1ac86_2048x2048.png?v=1776332647',
  'https://www.muunhome.com/cdn/shop/files/52_b0679966-514a-4dd7-9f8c-c22720c81b41_2048x2048.png?v=1776333112',
  'https://www.muunhome.com/cdn/shop/files/65_38a50b65-934b-4059-a9d2-aeb6dc7b8f0d_2048x2048.png?v=1776660440',
  'https://www.muunhome.com/cdn/shop/files/51_171c58b6-8a74-439e-a83d-fc5b6fb2ee45_2048x2048.png?v=1776333112',
];

export const MUUN_HOME_PRODUCT_IMAGES = [
  'https://www.muunhome.com/cdn/shop/files/57_ef5c06d2-7dbf-45ff-9a99-c6c091b1ac86_2048x2048.png?v=1776332647',
  'https://www.muunhome.com/cdn/shop/files/52_b0679966-514a-4dd7-9f8c-c22720c81b41_2048x2048.png?v=1776333112',
  'https://www.muunhome.com/cdn/shop/files/65_38a50b65-934b-4059-a9d2-aeb6dc7b8f0d_2048x2048.png?v=1776660440',
  'https://www.muunhome.com/cdn/shop/files/51_171c58b6-8a74-439e-a83d-fc5b6fb2ee45_2048x2048.png?v=1776333112',
  // extra slots to keep the 6 best-seller cards populated
  'https://www.muunhome.com/cdn/shop/files/57_ef5c06d2-7dbf-45ff-9a99-c6c091b1ac86_2048x2048.png?v=1776332647',
  'https://www.muunhome.com/cdn/shop/files/52_b0679966-514a-4dd7-9f8c-c22720c81b41_2048x2048.png?v=1776333112',
];

export const bestSellerProducts = [
  {
    id: 1,
    image: MUUN_HOME_PRODUCT_IMAGES[0],
    galleryImages: MUUN_HOME_GALLERY_IMAGES,
    title: 'Modern Accent Chair',
    currentPrice: 12999,
    originalPrice: 18999,
    rating: 4.8,
    reviewCount: 124,
    badge: 'Sale',
  },
  {
    id: 2,
    image: MUUN_HOME_PRODUCT_IMAGES[1],
    title: 'Luxury Sofa Set',
    currentPrice: 45999,
    originalPrice: 65999,
    rating: 4.9,
    reviewCount: 89,
    badge: 'Sale',
  },
  {
    id: 3,
    image: MUUN_HOME_PRODUCT_IMAGES[2],
    title: 'Designer Coffee Table',
    currentPrice: 8999,
    originalPrice: 14999,
    rating: 4.7,
    reviewCount: 156,
    badge: 'Sale',
  },
  {
    id: 4,
    image: MUUN_HOME_PRODUCT_IMAGES[3],
    title: 'Contemporary Dining Set',
    currentPrice: 24999,
    originalPrice: 35999,
    rating: 4.8,
    reviewCount: 78,
    badge: 'Sale',
  },
  {
    id: 5,
    image: MUUN_HOME_PRODUCT_IMAGES[4],
    title: 'Premium Armchair',
    currentPrice: 15999,
    originalPrice: 22999,
    rating: 4.9,
    reviewCount: 92,
    badge: 'Sale',
  },
  {
    id: 6,
    image: MUUN_HOME_PRODUCT_IMAGES[5],
    title: 'Executive Office Chair',
    currentPrice: 18999,
    originalPrice: 27999,
    rating: 4.6,
    reviewCount: 134,
    badge: 'Sale',
  },
];
