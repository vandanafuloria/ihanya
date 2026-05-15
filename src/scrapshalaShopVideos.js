/**
 * Saada Designs — Local video assets with Instagram links.
 * Single source for home "Shop videos", header reels, and PDP reel strip.
 */
export const MUUN_SHOP_VIDEO_CLIPS = [
  { 
    url: '/src/assets/videos/saadaadesigns_1776499724_3877880544378354063_12580228633.mp4', 
    title: 'Elegant designs for everyday',
    instagramUrl: 'https://www.instagram.com/p/DXFEHf4E4ke/'
  },
  { 
    url: '/src/assets/videos/saadaadesigns_1777479960_3886104929815949187_12580228633.mp4', 
    title: 'Crafted with care',
    instagramUrl: 'https://www.instagram.com/p/DW_dQ-hEcYo/?img_index=1'
  },
  { 
    url: '/src/assets/videos/saadaadesigns_1777809485_3888869675068860781.mp4', 
    title: 'Style meets function',
    instagramUrl: 'https://www.instagram.com/p/DXhf5J9kv3z/'
  },
  { 
    url: '/src/assets/videos/saadaadesigns_1777914985_3889754030604017524.mp4', 
    title: 'Timeless pieces',
    instagramUrl: 'https://www.instagram.com/p/DYTWyVgy1zH/'
  },
  { 
    url: '/src/assets/videos/saadaadesigns_1778175552_3891940132143582136.mp4', 
    title: 'Modern aesthetics',
    instagramUrl: 'https://www.instagram.com/p/DYFckGuy9C-/'
  },
  { 
    url: '/src/assets/videos/saadaadesigns_1778259339_3892643079362695358.mp4', 
    title: 'Quality craftsmanship',
    instagramUrl: 'https://www.instagram.com/p/DXQ_88pEfmP/'
  },
  { 
    url: '/src/assets/videos/saadaadesigns_1778394333_3893774697292198599.mp4', 
    title: 'Designer collections',
    instagramUrl: 'https://www.instagram.com/p/DXFEHf4E4ke/'
  },
  { 
    url: '/src/assets/videos/saadaadesigns_1778726091_3896558318701468871.mp4', 
    title: 'Saada signature style',
    instagramUrl: 'https://www.instagram.com/p/DW_dQ-hEcYo/?img_index=1'
  },
];

/** @deprecated Prefer `MUUN_SHOP_VIDEO_CLIPS` — kept for existing imports (URL list only) */
export const SCRAPSHALA_SHOP_VIDEOS = MUUN_SHOP_VIDEO_CLIPS.map((c) => c.url);

/** Floating draggable reel on the product (PDP) page */
export const PDP_DRAGGABLE_VIDEO = SCRAPSHALA_SHOP_VIDEOS[3];
