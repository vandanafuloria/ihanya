/**
 * Saada Designs — Local video assets with Instagram links.
 * Single source for home "Shop videos", header reels, and PDP reel strip.
 */
export const MUUN_SHOP_VIDEO_CLIPS = [
  {
    url: 'https://cdn.shopify.com/s/files/1/0071/7035/9347/files/tn_5e6045a5-805e-44fa-9a1b-d665e7db2128.mp4?v=1783064189',
    title: 'Elegant designs for everyday',
    instagramUrl: 'https://www.instagram.com/reel/DbDEaYEvqWY/'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0071/7035/9347/files/tn_b0946844-61e7-4128-bd6b-d8785b3a6bb2.mp4?v=1783065104',
    title: 'Crafted with care',
    instagramUrl: 'https://www.instagram.com/reel/Da9tEb0ofrG/'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0071/7035/9347/files/tn_7983fa39-f553-459c-a0a5-540c9feda565.mp4?v=1783065567',
    title: 'Style meets function',
    instagramUrl: 'https://www.instagram.com/reel/DauM6ErIepi/'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0071/7035/9347/files/tn_d8df9665-877d-406f-aa36-f6144a50dde5.mp4?v=1771314036',
    title: 'Timeless pieces',
    instagramUrl: 'https://www.instagram.com/reel/DapRxwWo1P9/'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0071/7035/9347/files/tn_a2f67164-921b-4c3d-b521-9647956bab87.mp4?v=1783064180',
    title: 'Modern aesthetics',
    instagramUrl: 'https://www.instagram.com/reel/Da4igM9ItXX/'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0071/7035/9347/files/tn_a9092bd1-eca6-4a78-bde9-4e063b6dd5ec.mp4?v=1776841202',
    title: 'Quality craftsmanship',
    instagramUrl: 'https://www.instagram.com/reel/Dae3BnkI3YG/'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0071/7035/9347/files/tn_2429c37a-bb0e-4bd6-bc1b-8ea1bb810830.mp4?v=1777448671',
    title: 'Designer collections',
    instagramUrl: 'https://www.instagram.com/reel/DaPZPVPuJ9R/'
  },
];

/** @deprecated Prefer `MUUN_SHOP_VIDEO_CLIPS` — kept for existing imports (URL list only) */
export const SCRAPSHALA_SHOP_VIDEOS = MUUN_SHOP_VIDEO_CLIPS.map((c) => c.url);

/** Floating draggable reel on the product (PDP) page */
export const PDP_DRAGGABLE_VIDEO = SCRAPSHALA_SHOP_VIDEOS[3];
