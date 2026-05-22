/**
 * Saada Designs — Local video assets with Instagram links.
 * Single source for home "Shop videos", header reels, and PDP reel strip.
 */
export const MUUN_SHOP_VIDEO_CLIPS = [
  {
    url: 'https://cdn.shopify.com/s/files/1/0081/1155/4613/files/tn_247d9e09-3352-463d-b934-3d085cedd389.mp4?v=1773314468',
    title: 'Elegant designs for everyday',
    instagramUrl: 'https://www.instagram.com/p/DXFEHf4E4ke/'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0081/1155/4613/files/whatmore_tn_91389b19-3df0-4c53-a7fb-fb457cce5a01.mp4?v=1770106387',
    title: 'Crafted with care',
    instagramUrl: 'https://www.instagram.com/p/DW_dQ-hEcYo/?img_index=1'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0081/1155/4613/files/whatmore_tn_e26b5e69-af67-48db-a1d9-b3b356bcc668.mp4?v=1758636398',
    title: 'Style meets function',
    instagramUrl: 'https://www.instagram.com/p/DXhf5J9kv3z/'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0081/1155/4613/files/whatmore_tn_1768e37f-4628-40f0-90a6-76d0a7b45303.mp4?v=1744021677',
    title: 'Timeless pieces',
    instagramUrl: 'https://www.instagram.com/p/DYTWyVgy1zH/'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0081/1155/4613/files/tn_3e56a98a-e972-4a8c-8b11-265d518e2c0b.mp4?v=1772797517',
    title: 'Modern aesthetics',
    instagramUrl: 'https://www.instagram.com/p/DYFckGuy9C-/'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0081/1155/4613/files/tn_a75a1933-aaf9-48f1-bdad-e5a4f4c74319.mp4?v=1772797330',
    title: 'Quality craftsmanship',
    instagramUrl: 'https://www.instagram.com/p/DXQ_88pEfmP/'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0081/1155/4613/files/tn_5780cdac-dfbd-4ca2-9f4d-f71fe5dbb055.mp4?v=1772797948',
    title: 'Designer collections',
    instagramUrl: 'https://www.instagram.com/p/DXFEHf4E4ke/'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0081/1155/4613/files/whatmore_tn_a53a73f2-1037-43d5-ba2f-024577ededf6.mp4?v=1749651172',
    title: 'Signature style',
    instagramUrl: 'https://www.instagram.com/p/DW_dQ-hEcYo/?img_index=1'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0081/1155/4613/files/tn_6b6be36e-a3d7-4118-98ed-af3ede4116c8.mp4?v=1776075263',
    title: 'Saada signature style',
    instagramUrl: 'https://www.instagram.com/p/DYTWyVgy1zH/'
  },
];

/** @deprecated Prefer `MUUN_SHOP_VIDEO_CLIPS` — kept for existing imports (URL list only) */
export const SCRAPSHALA_SHOP_VIDEOS = MUUN_SHOP_VIDEO_CLIPS.map((c) => c.url);

/** Floating draggable reel on the product (PDP) page */
export const PDP_DRAGGABLE_VIDEO = SCRAPSHALA_SHOP_VIDEOS[3];
