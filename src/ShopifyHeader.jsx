import React from 'react';
import headerLap from './assets/header_lap.png';
import h1Lap from './assets/h1_lap.png';
import headerPhone from './assets/header_phone.png';
import headerPhone1 from './assets/header_phone1.png';
import h1Phone from './assets/h1_phone.png';
import HeaderReels from './HeaderReels';

const ShopifyHeader = ({ onProductClick }) => {
  return (
    <header className="w-full">
      <img
        src={headerLap}
        alt="Header"
        className="hidden md:block w-full h-auto"
      />
      <video
        src="https://carriall.com/cdn/shop/videos/c/vp/bc3c89c4955c43e99d3e1dc60ea163f2/bc3c89c4955c43e99d3e1dc60ea163f2.HD-1080p-7.2Mbps-79603042.mp4?v=0"
        className="hidden md:block w-full h-auto"
        autoPlay
        muted
        loop
        playsInline
      />
      <img
        src={headerPhone1}
        alt="Header"
        className="block md:hidden w-full h-auto"
      />
      <HeaderReels onViewProduct={onProductClick} />
      <img
        src={h1Lap}
        alt="Featured products"
        className="hidden md:block w-full h-auto"
      />
      <img
        src={h1Phone}
        alt="Featured products"
        className="block md:hidden w-full h-auto"
      />
    </header>
  );
};

export default ShopifyHeader;
