export default function CrossedMarquee() {
  const yellowItems = [
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
      className="relative w-full overflow-hidden bg-[#FFFCEB] pt-8 sm:pt-10 lg:pt-6 pb-8 sm:pb-10 lg:pb-6 select-none"
      aria-label="Marathon Highlights Marquee"
    >
      <div className="relative w-full flex items-center justify-center min-h-[175px] sm:min-h-[190px] lg:min-h-[175px]">
        {/* ─── 1. Top Tilted Yellow Ribbon (Tilted steeper on mobile/tablet, ~+6deg on desktop) ─── */}
        <div
          className="absolute w-[130%] sm:w-[120%] -ml-[15%] sm:-ml-[10%] rotate-[9.5deg] sm:rotate-[8deg] lg:rotate-[6deg] z-0 shadow-md bg-[#e8e337] border-y border-[#191A17]/25 py-1.5 sm:py-2 lg:py-2.5"
          style={{ willChange: 'transform' }}
        >
          <div className="animate-top-marquee flex items-center whitespace-nowrap">
            {/* Repeated 3x for seamless infinite loop */}
            {[0, 1, 2].map((loopIdx) => (
              <div key={loopIdx} className="flex items-center shrink-0">
                {yellowItems.map((text, i) => (
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

        {/* ─── 2. Bottom Tilted Midnight Ribbon (Tilted steeper on mobile/tablet, ~-6deg on desktop) ─── */}
        <div
          className="absolute w-[130%] sm:w-[120%] -ml-[15%] sm:-ml-[10%] -rotate-[9.5deg] sm:-rotate-[8deg] lg:-rotate-[6deg] z-10 shadow-2xl bg-[#111A17] border-y border-white/15 py-2 sm:py-2.5 lg:py-3"
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
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#e8e337] ml-4 sm:ml-6 md:ml-8 shrink-0" aria-hidden="true" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ─── 3. Center Crossing Circular Badge (Intersecting Seal) ─── */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-white border-2 border-[#111A17] shadow-[0_12px_36px_rgba(17,26,23,0.35)] flex items-center justify-center pointer-events-none"
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

          {/* Center Official NFSU Goa Marathon Logo */}
          <div className="relative z-10 w-[64%] h-[64%] rounded-full bg-white border border-[#111A17]/25 flex items-center justify-center shadow-inner overflow-hidden">
            <img
              src="/marathon-logo-square.png"
              alt="Adamya Dhavanam Logo"
              className="w-full h-full object-cover object-center rounded-full scale-[1.04]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
