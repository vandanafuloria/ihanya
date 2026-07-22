/** Best sellers — fashion product imagery */

export const MUUN_HOME_PRODUCT_IMAGES = [
  'https://ishnya.com/cdn/shop/files/website_resolution_3_ed1f16bf-d750-4e7c-85d3-b03853586b0a_380x_crop_top.png?v=1766997193',
  'https://ishnya.com/cdn/shop/files/13_71a652ae-4d48-4e6d-b2cc-ae96f6d9afe9_380x_crop_top.png?v=1767682310',
  'https://ishnya.com/cdn/shop/files/Website_resolution_26_380x_crop_top.png?v=1756899785',
  'https://ishnya.com/cdn/shop/files/Website_resolution_56_380x_crop_top.png?v=1757508721',
];

export const MUUN_HOME_GALLERY_IMAGES = [...MUUN_HOME_PRODUCT_IMAGES];

export const bestSellerProducts = [
  {
    id: 1,
    image: MUUN_HOME_PRODUCT_IMAGES[0],
    galleryImages: [
      MUUN_HOME_PRODUCT_IMAGES[0],
      MUUN_HOME_PRODUCT_IMAGES[1],
      MUUN_HOME_PRODUCT_IMAGES[2],
      MUUN_HOME_PRODUCT_IMAGES[3],
    ],
    title: 'Indigo Muse — Navy Printed Co-ord Set',
    currentPrice: 2899,
    originalPrice: 3499,
    rating: 4.6,
    reviewCount: 548,
  },
  {
    id: 2,
    image: MUUN_HOME_PRODUCT_IMAGES[1],
    galleryImages: [
      MUUN_HOME_PRODUCT_IMAGES[1],
      MUUN_HOME_PRODUCT_IMAGES[0],
      MUUN_HOME_PRODUCT_IMAGES[3],
      MUUN_HOME_PRODUCT_IMAGES[2],
    ],
    title: 'Riwaayat Rebel — Red Printed Straight Kurta With Pants',
    currentPrice: 3200,
    originalPrice: 3500,
    rating: 4.4,
    reviewCount: 512,
  },
  {
    id: 3,
    image: MUUN_HOME_PRODUCT_IMAGES[2],
    galleryImages: [
      MUUN_HOME_PRODUCT_IMAGES[2],
      MUUN_HOME_PRODUCT_IMAGES[3],
      MUUN_HOME_PRODUCT_IMAGES[0],
      MUUN_HOME_PRODUCT_IMAGES[1],
    ],
    title: 'Emerald Glow — Green Embroidered Kurta Set',
    currentPrice: 3999,
    originalPrice: 4599,
    rating: 4.7,
    reviewCount: 586,
  },
  {
    id: 4,
    image: MUUN_HOME_PRODUCT_IMAGES[3],
    galleryImages: [
      MUUN_HOME_PRODUCT_IMAGES[3],
      MUUN_HOME_PRODUCT_IMAGES[2],
      MUUN_HOME_PRODUCT_IMAGES[1],
      MUUN_HOME_PRODUCT_IMAGES[0],
    ],
    title: 'Magenta Reign — Embroidered Straight Kurta',
    currentPrice: 3599,
    originalPrice: 4199,
    rating: 4.5,
    reviewCount: 563,
  },
];
