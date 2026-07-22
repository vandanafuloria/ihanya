import React, { useId, useState } from 'react';
import './AIBrandEngine.css';

const SHOP_URL = 'https://ishnya.com/';
const INSTAGRAM_URL = 'https://www.instagram.com/labelishnya/';

function PremiumAIIcon({ gradientId, className, style, size = 40 }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e07a8a" />
          <stop offset="0.45" stopColor="#c41e3a" />
          <stop offset="1" stopColor="#8b1530" />
        </linearGradient>
      </defs>
      <path
        d="M24 12C25.6 18.3 29.7 22.4 36 24C29.7 25.6 25.6 29.7 24 36C22.4 29.7 18.3 25.6 12 24C18.3 22.4 22.4 18.3 24 12Z"
        fill={`url(#${gradientId})`}
      />
      <path
        d="M16.3 28.7C16.8 30.5 18 31.7 19.8 32.2C18 32.7 16.8 33.9 16.3 35.7C15.8 33.9 14.6 32.7 12.8 32.2C14.6 31.7 15.8 30.5 16.3 28.7Z"
        fill="#FFFFFF"
        opacity="0.9"
      />
    </svg>
  );
}

function AIBrandEngine({ showExtras = true, compact = false }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('metrics');
  const [activeMetric, setActiveMetric] = useState('satisfaction');
  const baseId = useId().replace(/:/g, '');

  if (!showExtras) return null;

  const getIcon = (type) => {
    const icons = {
      collection: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 15l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      style: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 3l2.2 4.4L19 8.2l-3.5 3.4.8 4.9L12 14.3 7.7 16.5l.8-4.9L5 8.2l4.8-.8L12 3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      ),
      craft: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      occasion: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      shipping: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M1 3H17L22 8L17 13H1V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2" />
          <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      brand: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 12L10.5 14.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      metrics: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 16L12 11L16 15L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 10V3H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    };
    return icons[type] || icons.metrics;
  };

  const brandInfo = {
    collection: {
      title: 'Signature Collections',
      iconType: 'collection',
      content: [
        {
          label: 'Indo-Western',
          value: 'Desi Fusion Edit',
          description:
            'Indian aesthetics meet contemporary cuts — kurtas, drapes, and silhouettes made for the modern woman.',
        },
        {
          label: 'Co-Ord Sets',
          value: 'Matched Separates',
          description:
            'From Rozana drape skirts to printed shirt sets — effortless two-pieces you can style together or apart.',
        },
        {
          label: 'Suit & Sharara',
          value: 'Festive & Everyday',
          description:
            'Suit sets, farshi salwars, and shararas designed for celebrations without sacrificing all-day comfort.',
        },
      ],
      highlights: [
        'Bestsellers span Indo-Western, co-ords, shirts, and the Daily Edit.',
        'New arrivals drop regularly — prints, embroidery, and statement colourways.',
        'Inclusive sizing so more women can find their fit and feel confident.',
      ],
    },
    style: {
      title: 'How It Wears',
      iconType: 'style',
      content: [
        {
          label: 'Comfort First',
          value: 'Soft, Moveable Fits',
          description:
            'Beautiful enough for compliments, comfortable enough for a full day — work, travel, family, or festivities.',
        },
        {
          label: 'Contemporary Desi',
          value: 'Neither Too Ethnic Nor Too Western',
          description:
            'Born to fill the gap between typical Indian wear and plain western — fusion that feels current, not costume.',
        },
        {
          label: 'Versatile Looks',
          value: 'AM to PM Ready',
          description:
            'One co-ord for brunch, one embroidered set for evening — pieces that shift with your day.',
        },
      ],
      highlights: [
        'Designed for women who move between office, travel, and celebrations.',
        'Trendy silhouettes with wearable, flattering proportions.',
        'Affordable fashion without compromising on finish or feel.',
      ],
    },
    craft: {
      title: 'Prints & Craft',
      iconType: 'craft',
      content: [
        {
          label: 'Signature Prints',
          value: 'Lotus · Bandhani · Ajrakh',
          description:
            'From blue lotus drapes to bandhani shirts and Ajrakh-inspired prints — artistry you can wear every day.',
        },
        {
          label: 'Embroidery & Detail',
          value: 'Hand-Finished Touches',
          description:
            'Aari work, festive jacquards, and embroidered necklines that elevate co-ords, dresses, and three-piece sets.',
        },
        {
          label: 'Feel of Fabric',
          value: 'Breathable & Easy',
          description:
            'Soft cottons and light weaves chosen for Indian weather — looks polished, feels breezy.',
        },
      ],
      highlights: [
        'Colour stories that pop — wine, emerald, magenta, indigo, and festive brights.',
        'Details like drapes, high-lows, cowl pants, and flared silhouettes for movement.',
        'Packaging and presentation customers call “perfect” every time.',
      ],
    },
    occasion: {
      title: 'Dress for Every Moment',
      iconType: 'occasion',
      content: [
        {
          label: 'Daily Edit',
          value: 'Everyday Ethnic',
          description:
            'Printed shirts, straight kurtas, and easy co-ords for workdays and weekends that still feel special.',
        },
        {
          label: 'Festive Wear',
          value: 'Celebration Ready',
          description:
            'Shararas, pathani sets, embroidered dresses, and statement colours for weddings, poojas, and parties.',
        },
        {
          label: 'Travel & City',
          value: 'On-the-Go Glam',
          description:
            'Lightweight sets that pack well, photograph beautifully, and keep you comfortable on the move.',
        },
      ],
      highlights: [
        'One wardrobe language from desk to dinner to destination.',
        'Customers love the festive edit for comfort + style in equal measure.',
        'Influencer-approved looks that still feel wearable in real life.',
      ],
    },
    shipping: {
      title: 'Delivery & Exchange',
      iconType: 'shipping',
      content: [
        {
          label: 'Fast Dispatch',
          value: 'Ships Quickly',
          description:
            'Orders move fast — customers often note almost-instant shipping and responsive updates.',
        },
        {
          label: 'COD Available',
          value: 'Pay on Delivery',
          description:
            'Cash on delivery and easy checkout options so shopping feels low-friction and secure.',
        },
        {
          label: 'Easy Exchange',
          value: 'Hassle-Free Returns',
          description:
            'Need a size swap? Use the Return / Exchange flow on ishnya.com for a smooth post-purchase experience.',
        },
      ],
      highlights: [
        'International shipping available alongside domestic delivery.',
        'Friendly support via phone, WhatsApp, and email from the Dadar West studio.',
        'Secure checkout with genuine quality assurance.',
      ],
    },
    brand: {
      title: 'Ishnya',
      iconType: 'brand',
      content: [
        {
          label: 'Brand Promise',
          value: 'Desi Fusion for Modern Women',
          description:
            'An Indo-Western apparel label that blends Indian aesthetics with contemporary silhouettes — confidence, comfort, and you.',
        },
        {
          label: 'Born in Bombay',
          value: 'Homegrown Label',
          description:
            'Created to close the gap between western wear and typical Indian wear — for women who live in between.',
        },
        {
          label: 'Community',
          value: '@labelishnya',
          description:
            'New drops, styling reels, and real customer looks on Instagram — Pret · Desi · Fusion.',
        },
      ],
      highlights: [
        'Clothes that look beautiful and make you feel completely yourself.',
        'Inclusive sizing and accessible pricing without diluting design.',
        'Loved for festive wear, contemporary cuts, and warm customer service.',
      ],
    },
  };

  const graphData = {
    satisfaction: {
      label: 'Style love',
      data: [84, 86, 88, 90, 91, 93, 95],
      color: '#c41e3a',
    },
    results: {
      label: 'Fit & comfort',
      data: [78, 80, 83, 85, 87, 90, 92],
      color: '#e07a8a',
    },
    repeat: {
      label: 'Repeat shoppers',
      data: [62, 65, 68, 72, 75, 78, 82],
      color: '#8b1530',
    },
    delivery: {
      label: 'Delivery experience',
      data: [86, 87, 89, 90, 92, 93, 95],
      color: '#c41e3a',
    },
    rating: {
      label: 'Avg. product rating',
      data: [4.3, 4.4, 4.5, 4.6, 4.7, 4.7, 4.8],
      color: '#e07a8a',
    },
    recommend: {
      label: 'Would recommend',
      data: [81, 83, 85, 88, 90, 92, 94],
      color: '#8b1530',
    },
  };

  const metrics = [
    { id: 'satisfaction', label: 'Love' },
    { id: 'results', label: 'Fit' },
    { id: 'repeat', label: 'Repeat' },
    { id: 'delivery', label: 'Ship' },
    { id: 'rating', label: 'Stars' },
    { id: 'recommend', label: 'Refer' },
  ];

  const currentMetric = graphData[activeMetric];
  const currentValue = currentMetric.data[currentMetric.data.length - 1];
  const percentage = typeof currentValue === 'number' ? currentValue.toFixed(1) : currentValue;
  const displayValue =
    activeMetric === 'rating' && typeof currentValue === 'number' && currentValue < 10
      ? `${currentValue.toFixed(1)}/5`
      : `${percentage}%`;

  const renderChart = () => {
    const data = currentMetric.data;
    const maxValue = Math.max(...data) * 1.1;
    const minValue = Math.min(...data) * 0.9;
    const range = maxValue - minValue || 1;
    const width = 340;
    const height = 160;
    const padding = { top: 15, right: 15, bottom: 35, left: 45 };
    const gradId = `${baseId}-chart-${activeMetric}`;

    const points = data.map((value, index) => {
      const x = padding.left + (index / (data.length - 1)) * (width - padding.left - padding.right);
      const y =
        padding.top +
        (height - padding.top - padding.bottom) -
        ((value - minValue) / range) * (height - padding.top - padding.bottom);
      return { x, y, value };
    });

    const linePath = points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');
    const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - padding.bottom} L ${points[0].x} ${height - padding.bottom} Z`;

    return (
      <div className="chart-container">
        <div className="chart-header">
          <h5 className="chart-title">Ishnya style snapshot</h5>
          <div className="chart-value">{displayValue}</div>
        </div>
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="chart-svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={currentMetric.color} stopOpacity="0.45" />
              <stop offset="100%" stopColor={currentMetric.color} stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill={`url(#${gradId})`} opacity="0.35" />
          {[0, 1, 2, 3, 4].map((i) => {
            const y = padding.top + (i / 4) * (height - padding.top - padding.bottom);
            return (
              <line
                key={i}
                x1={padding.left}
                y1={y}
                x2={width - padding.right}
                y2={y}
                stroke="#e8eaed"
                strokeWidth="1"
                strokeDasharray="2,2"
              />
            );
          })}
          <path
            d={linePath}
            fill="none"
            stroke={currentMetric.color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="4"
              fill={currentMetric.color}
              stroke="white"
              strokeWidth="2"
            />
          ))}
          {points.map((point, index) => (
            <text
              key={`lbl-${index}`}
              x={point.x}
              y={height - padding.bottom + 20}
              textAnchor="middle"
              fill="#666"
              fontSize="10"
              fontWeight="500"
            >
              W{index + 1}
            </text>
          ))}
        </svg>
        <div className="metric-filters">
          {metrics.map((metric) => (
            <button
              key={metric.id}
              type="button"
              className={`metric-filter-btn ${activeMetric === metric.id ? 'active' : ''}`}
              onClick={() => setActiveMetric(metric.id)}
            >
              {metric.label}
            </button>
          ))}
        </div>
        <p className="chart-footnote">
          Illustrative trend only. Based on customer themes: fit, comfort, design love, and delivery.
        </p>
      </div>
    );
  };

  const tabs = [
    { id: 'metrics', label: 'Signals', iconType: 'metrics' },
    { id: 'collection', label: 'Edit', iconType: 'collection' },
    { id: 'style', label: 'Style', iconType: 'style' },
    { id: 'craft', label: 'Craft', iconType: 'craft' },
    { id: 'occasion', label: 'Wear', iconType: 'occasion' },
    { id: 'shipping', label: 'Ship', iconType: 'shipping' },
    { id: 'brand', label: 'Brand', iconType: 'brand' },
  ];

  const currentInfo = brandInfo[activeTab];
  const sparkleGrad = `${baseId}-sparkle`;

  return (
    <div className={`ai-brand-engine ${isExpanded ? 'expanded' : ''}`}>
      {!isExpanded ? (
        <div className="ai-brand-engine-trigger-wrap">
          <button
            type="button"
            className={`ai-brand-engine-trigger${compact ? ' abe-compact' : ''}`}
            onClick={() => setIsExpanded(true)}
            aria-label="Open fashion insights for Ishnya"
          >
            <div className="trigger-icon">
              <span className="ai-gemini-rotator" aria-hidden="true">
                <PremiumAIIcon gradientId={sparkleGrad} className="ai-gemini-icon" size={36} />
              </span>
            </div>
            {!compact && (
              <div className="trigger-text">
                <span className="trigger-label">Style insights</span>
                <span className="trigger-sublabel">Ishnya</span>
              </div>
            )}
            <span className="trigger-badge">AI</span>
          </button>
          {!compact && (
            <div className="ai-brand-engine-tooltip" role="note">
              Collections, fit & fusion fashion — tap to explore
              <span className="ai-brand-engine-tooltip__arrow" aria-hidden />
            </div>
          )}
        </div>
      ) : (
        <div className="ai-brand-engine-panel" role="dialog" aria-label="Ishnya fashion insights">
          <div className="panel-header">
            <div className="header-left">
              <div className="header-icon">
                <PremiumAIIcon gradientId={`${baseId}-head`} style={{ width: 36, height: 36 }} size={36} />
              </div>
              <div>
                <h3 className="panel-title">AI Style Engine</h3>
                <p className="panel-subtitle">Ishnya · Indo-Western for Modern Women</p>
              </div>
            </div>
            <button type="button" className="panel-close-btn" onClick={() => setIsExpanded(false)} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="panel-tabs" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{getIcon(tab.iconType)}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="panel-content">
            {activeTab === 'metrics' ? (
              renderChart()
            ) : currentInfo ? (
              <>
                <div className="content-header">
                  <div className="content-icon">{getIcon(currentInfo.iconType)}</div>
                  <h4 className="content-title">{currentInfo.title}</h4>
                </div>
                <div className="stats-grid">
                  {currentInfo.content.map((item) => (
                    <div key={item.label} className="stat-card">
                      <div className="stat-value">{item.value}</div>
                      <div className="stat-label">{item.label}</div>
                      <div className="stat-description">{item.description}</div>
                    </div>
                  ))}
                </div>
                <div className="highlights-section">
                  <h5 className="highlights-title">Why it matters</h5>
                  <ul className="highlights-list">
                    {currentInfo.highlights.map((highlight) => (
                      <li key={highlight} className="highlight-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="highlight-icon">
                          <path
                            d="M20 6L9 17L4 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="panel-content-cta">
                  <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="abe-cta abe-cta--primary">
                    Shop Ishnya
                  </a>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="abe-cta abe-cta--ghost">
                    Instagram
                  </a>
                </div>
              </>
            ) : null}
          </div>

          <div className="panel-footer">
            <div className="footer-badge">
              <span className="footer-badge-icon" aria-hidden>
                <PremiumAIIcon gradientId={`${baseId}-foot`} size={18} />
              </span>
              <span>Pret · Desi · Fusion · Born in Bombay</span>
            </div>
            <p className="footer-note">
              Style notes are for inspiration. Check size guides and product details on{' '}
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                ishnya.com
              </a>{' '}
              before you buy. Easy exchange available when you need a better fit.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AIBrandEngine;
