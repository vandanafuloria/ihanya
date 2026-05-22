import React, { useState, useEffect, useRef, useCallback } from 'react';

const TESTIMONIAL_CLIPS = [
  {
    videoId: 'cXZ94xtggUg',
    duration: '2:14',
    name: 'Priya Sharma',
    role: 'Skincare Enthusiast',
    title: 'My skin finally stopped breaking out',
    snippet: 'Conscious Chemist\'s Berry Bright Sunscreen is the first SPF I\'ve used that doesn\'t clog my pores or leave a white cast. My skin feels protected and looks brighter every day.',
  },
  {
    videoId: '189cVZ2DYrE',
    duration: '1:48',
    name: 'Ananya Mehta',
    role: 'Content Creator',
    title: 'Zero white cast — finally!',
    snippet: 'As someone who\'s always on camera, I need a sunscreen that doesn\'t make me look washed out. Berry Bright is the only one that works perfectly under my ring light and in natural light.',
  },
  {
    videoId: '0U6PCy9Si4w',
    duration: '3:02',
    name: 'Sneha Reddy',
    role: 'Dermatology Patient',
    title: 'My dermatologist approved it',
    snippet: 'After struggling with sensitive, reactive skin for years, my dermatologist recommended I try Conscious Chemist. The clean formula made an immediate difference — no redness, no breakouts.',
  },
  {
    videoId: 'SdIINL14OTQ',
    duration: '2:30',
    name: 'Divya Nair',
    role: 'Working Professional',
    title: 'SPF that actually stays all day',
    snippet: 'Between commuting and outdoor meetings, my sunscreen needs to last. Berry Bright gives me real protection from morning to evening — I\'ve stopped worrying about reapplication every hour.',
  },
  {
    videoId: 'PrVibiRxTeQ',
    duration: '1:55',
    name: 'Kavya Iyer',
    role: 'Fitness Trainer',
    title: 'Gym-proof sunscreen — it exists!',
    snippet: 'I work out outdoors every morning. Most sunscreens run into my eyes or pill under sweat. Conscious Chemist stays put through an entire session and my skin still feels calm afterwards.',
  },
];

function buildEmbedSrc(videoId, autoplay = false) {
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    autoplay: autoplay ? '1' : '0',
    mute: autoplay ? '1' : '0',
  });
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

function thumbUrl(videoId) {
  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
}

const ACCENT = '#378FE9';

export default function CustomerYoutubeTestimonialsCards() {
  const [activeId, setActiveId] = useState(TESTIMONIAL_CLIPS[0].videoId);
  const activeClip = TESTIMONIAL_CLIPS.find((c) => c.videoId === activeId) ?? TESTIMONIAL_CLIPS[0];

  // Mobile state
  const [mobileActiveId, setMobileActiveId] = useState(TESTIMONIAL_CLIPS[0].videoId);
  const mobileActiveClip = TESTIMONIAL_CLIPS.find((c) => c.videoId === mobileActiveId) ?? TESTIMONIAL_CLIPS[0];
  const thumbStripRef = useRef(null);
  const mobilePauseAutoRef = useRef(false);
  const mobilePauseTimerRef = useRef(null);

  const pauseMobileAutoScroll = useCallback((ms = 4500) => {
    mobilePauseAutoRef.current = true;
    if (mobilePauseTimerRef.current) window.clearTimeout(mobilePauseTimerRef.current);
    mobilePauseTimerRef.current = window.setTimeout(() => {
      mobilePauseAutoRef.current = false;
    }, ms);
  }, []);

  useEffect(() => {
    const el = thumbStripRef.current;
    if (!el) return;
    const tick = () => {
      if (window.innerWidth >= 768) return;
      if (mobilePauseAutoRef.current) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 2) return;
      const next = el.scrollLeft + 0.65;
      el.scrollLeft = next >= max - 0.5 ? 0 : next;
    };
    const id = setInterval(tick, 45);
    return () => clearInterval(id);
  }, []);

  useEffect(() => () => {
    if (mobilePauseTimerRef.current) clearTimeout(mobilePauseTimerRef.current);
  }, []);

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-[1500px] px-4 md:px-6">

        {/* Heading */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Customer Testimonials</h2>
          <div className="mt-2 h-1 w-16 rounded-full" style={{ backgroundColor: ACCENT }} />
        </div>

        {/* ── DESKTOP: featured player + sidebar list ── */}
        <div className="hidden md:grid md:grid-cols-[1fr_340px] lg:grid-cols-[1fr_380px] gap-4 lg:gap-6" style={{ height: '520px' }}>

          {/* Left — featured player */}
          <div className="relative overflow-hidden rounded-2xl bg-black h-full">
            <iframe
              key={activeId}
              title={activeClip.title}
              className="absolute inset-0 h-full w-full"
              src={buildEmbedSrc(activeId, false)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
            {/* Name overlay at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 px-5 py-4 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)' }}
            >
              <p className="text-white font-bold text-lg leading-tight">{activeClip.name}</p>
              <p className="text-white/70 text-sm">{activeClip.role}</p>
            </div>
          </div>

          {/* Right — scrollable sidebar */}
          <div className="flex flex-col gap-0 overflow-y-auto rounded-2xl bg-gray-50 border border-gray-100 scrollbar-thin" style={{ scrollbarColor: 'rgba(0,0,0,0.15) transparent' }}>
            {TESTIMONIAL_CLIPS.map((clip) => {
              const isActive = clip.videoId === activeId;
              return (
                <button
                  key={clip.videoId}
                  type="button"
                  onClick={() => setActiveId(clip.videoId)}
                  className="flex flex-col gap-0 text-left transition-colors hover:bg-gray-100"
                  style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}
                >
                  {/* Thumbnail */}
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <img
                      src={thumbUrl(clip.videoId)}
                      alt={clip.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg transition group-hover:scale-105"
                      >
                        <svg className="h-4 w-4 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24" style={{ color: ACCENT }}>
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute inset-0 border-2 rounded-sm pointer-events-none" style={{ borderColor: ACCENT }} />
                    )}
                    {/* Name overlay */}
                    <div className="absolute bottom-0 right-0 px-2 py-1" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
                      <p className="text-white text-xs font-semibold">{clip.name}</p>
                      <p className="text-white/60 text-[10px]">{clip.role}</p>
                    </div>
                  </div>
                  {/* Text */}
                  <div className="px-3 py-3">
                    <p className="text-gray-900 text-sm font-semibold leading-snug mb-1">
                      {clip.name} | {clip.role}
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{clip.snippet}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── MOBILE: full-width player + thumb strip ── */}
        <div className="md:hidden space-y-3">
          <div className="relative -mx-4 overflow-hidden bg-black">
            <div className="relative aspect-video w-full">
              <iframe
                key={`mobile-${mobileActiveId}`}
                title={mobileActiveClip.title}
                className="absolute inset-0 h-full w-full"
                src={buildEmbedSrc(mobileActiveId, false)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                <p className="text-white font-bold text-sm">{mobileActiveClip.name}</p>
                <p className="text-white/70 text-xs">{mobileActiveClip.role}</p>
              </div>
            </div>
          </div>

          <div className="px-0.5">
            <p className="text-gray-900 text-sm font-semibold leading-snug">{mobileActiveClip.title}</p>
            <p className="mt-1 text-gray-500 text-xs leading-snug line-clamp-2">{mobileActiveClip.snippet}</p>
          </div>

          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">More clips</p>
            <div
              ref={thumbStripRef}
              className="customer-youtube-thumb-strip flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory"
              onScroll={() => pauseMobileAutoScroll()}
              onTouchStart={() => pauseMobileAutoScroll()}
            >
              {TESTIMONIAL_CLIPS.map((clip) => {
                const active = clip.videoId === mobileActiveId;
                return (
                  <button
                    key={clip.videoId}
                    type="button"
                    onClick={() => { setMobileActiveId(clip.videoId); pauseMobileAutoScroll(5000); }}
                    className="relative aspect-video w-[30vw] max-w-[132px] min-w-[104px] shrink-0 snap-start overflow-hidden rounded-lg bg-stone-800 transition"
                    style={{ boxShadow: active ? `0 0 0 2px ${ACCENT}` : 'none' }}
                  >
                    <img src={thumbUrl(clip.videoId)} alt="" className="h-full w-full object-cover" loading="lazy" />
                    <span className="pointer-events-none absolute bottom-1 right-1 rounded bg-black/80 px-1 py-px text-[9px] font-medium text-white">
                      {clip.duration}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
