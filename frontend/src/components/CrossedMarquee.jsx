export default function CrossedMarquee() {
  const lilacItems = [
    '10 KM ELITE RUN',
    '6 KM CHALLENGE RUN',
    '3 KM FUN RUN',
    'FINISHER MEDAL',
    'DRY-FIT T-SHIRT',
    'PODIUM TROPHY',
    'RECOVERY', 
    'BREAKFAST',
    'RACE DAY · 6 DEC 2026',
  ];

  const darkItems = [
    'ADAMYA DHĀVANAM 2026',
    'EVIDENCE DOESN’T LIE',
    'NFSU GOA CAMPUS',
    'EVERY STEP. EVERY CLUE. EVERY TRUTH.',
    'ENTRY ₹750 ALL CATEGORIES',
    '6 DECEMBER 2026',
  ];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#FFFCEB] pt-8 sm:pt-12 md:pt-14 pb-4 sm:pb-6 md:pb-8 select-none"
      aria-label="Marathon Highlights Marquee"
    >
      <div className="relative w-full flex items-center justify-center min-h-[170px] sm:min-h-[210px] md:min-h-[240px]">
        {/* ─── 1. Top Tilted Lilac Ribbon (Tilted ~+6deg, scrolls left) ─── */}
        <div
          className="absolute w-[130%] sm:w-[120%] -ml-[15%] sm:-ml-[10%] rotate-[4.5deg] sm:rotate-[5.5deg] md:rotate-[6deg] z-0 shadow-md bg-[#EBD3F5] border-y border-[#191A17]/20 py-2 sm:py-2.5"
          style={{ willChange: 'transform' }}
        >
          <div className="animate-top-marquee flex items-center whitespace-nowrap">
            {/* Repeated 3x for seamless infinite loop */}
            {[0, 1, 2].map((loopIdx) => (
              <div key={loopIdx} className="flex items-center shrink-0">
                {lilacItems.map((text, i) => (
                  <span
                    key={`${loopIdx}-${i}`}
                    className="inline-flex items-center text-[#191A17] font-bold text-xs sm:text-sm tracking-[0.16em] uppercase mx-4 sm:mx-6 md:mx-8"
                  >
                    <span>{text}</span>
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#191A17] ml-4 sm:ml-6 md:ml-8 shrink-0" aria-hidden="true" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ─── 2. Bottom Tilted Midnight Ribbon (Tilted ~-6deg, scrolls right) ─── */}
        <div
          className="absolute w-[130%] sm:w-[120%] -ml-[15%] sm:-ml-[10%] -rotate-[4.5deg] sm:-rotate-[5.5deg] md:-rotate-[6deg] z-10 shadow-2xl bg-[#111A17] border-y border-white/15 py-2.5 sm:py-3"
          style={{ willChange: 'transform' }}
        >
          <div className="animate-marquee-reverse flex items-center whitespace-nowrap">
            {/* Repeated 3x for seamless infinite loop */}
            {[0, 1, 2].map((loopIdx) => (
              <div key={loopIdx} className="flex items-center shrink-0">
                {darkItems.map((text, i) => (
                  <span
                    key={`${loopIdx}-${i}`}
                    className="inline-flex items-center text-white font-bold text-xs sm:text-sm tracking-[0.18em] uppercase mx-4 sm:mx-6 md:mx-8"
                  >
                    <span>{text}</span>
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FFC36A] ml-4 sm:ml-6 md:ml-8 shrink-0" aria-hidden="true" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ─── 3. Center Crossing Circular Badge (Intersecting Seal) ─── */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-white border-2 border-[#111A17] shadow-[0_12px_36px_rgba(17,26,23,0.35)] flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          {/* Rotating Circular Text SVG */}
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 120 120" className="w-full h-full">
              <path
                id="crossedMarqueeCircle"
                d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                fill="none"
              />
              <text className="text-[10px] sm:text-[10.5px] font-black uppercase tracking-[0.24em] fill-[#111A17]">
                <textPath href="#crossedMarqueeCircle" startOffset="0%">
                  ★ ADAMYA DHĀVANAM  ★  NFSU GOA ★
                </textPath>
              </text>
            </svg>
          </div>

          {/* Static Center Soundwave / Athletic Glyph */}
          <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#FFFCEB] border border-[#111A17]/15 flex items-center justify-center shadow-inner">
            <div className="flex items-center justify-center gap-[3px] text-[#1749D1]">
              <span className="w-[3px] h-3 bg-[#111A17] rounded-full animate-pulse" />
              <span className="w-[3px] h-5 bg-[#1749D1] rounded-full" />
              <span className="w-[3.5px] h-7 bg-[#1749D1] rounded-full" />
              <span className="w-[3px] h-5 bg-[#1749D1] rounded-full" />
              <span className="w-[3px] h-3 bg-[#111A17] rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
