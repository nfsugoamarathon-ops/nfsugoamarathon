import { EVENT } from '../data/eventData';

export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-[#FFFCEB] pt-8 sm:pt-10 pb-8 sm:pb-10 border-y border-[#DADBCF] scroll-mt-16" aria-labelledby="sponsors-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-[#1749D1] text-xs font-semibold uppercase tracking-widest mb-3 text-center">Partners & Sponsors</p>
        <h2 id="sponsors-heading" className="font-serif italic text-3xl sm:text-4xl text-[#191A17] text-center mb-3">
          Powering the run.
        </h2>
        <p className="text-[#686D66] text-center text-sm mb-6 sm:mb-8 max-w-md mx-auto">
          Sponsors and partners will be announced here. If you are interested in partnering with Adamya Dhāvanam, contact us.
        </p>

        {/* Placeholder slots (commented for now) */}
        {/*
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 sm:mb-8">
          {['Title Sponsor', 'Gold Partner', 'Silver Partner', 'Associate Partner'].map((tier) => (
            <div key={tier} className="border-2 border-dashed border-[#DADBCF] rounded-2xl p-6 flex flex-col items-center justify-center gap-2 aspect-video">
              <span className="text-[#DADBCF] text-3xl font-black">?</span>
              <span className="text-[#686D66] text-xs text-center">{tier}</span>
            </div>
          ))}
        </div>
        */}

        {/* Coming soon badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#FFF7E6] border border-[#FFC36A]/60 rounded-full px-4 py-2 text-sm font-medium text-[#191A17] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FFC36A] animate-pulse" aria-hidden="true" />
            Coming soon
          </div>
        </div>

        {/* Sponsor interest CTA */}
        <div className="text-center">
          <a
            href={EVENT.sponsorshipProposalPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#1749D1] text-[#1749D1] hover:bg-[#EEF2FF] font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
          >
            Become a sponsor →
          </a>
        </div>

        {/* Organizer — Conference-room institutional lockup */}
        <div className="flex flex-col items-center gap-4 mt-6 sm:mt-8">
          <p className="text-[#686D66] text-xs font-semibold uppercase tracking-[0.2em]">Organised by</p>

          <div className="sponsors-organizer-card w-full max-w-4xl bg-white/90 backdrop-blur-sm border border-[#DADBCF] rounded-2xl px-5 py-6 sm:px-10 sm:py-8 shadow-[0_14px_40px_-16px_rgba(17,26,23,0.08)]">
            
            {/* Mobile Layout (< 640px): Compact Official Header Lockup */}
            <div className="sm:hidden flex flex-col items-center gap-4 text-center">
              {/* Dual Institutional Emblems */}
              <div className="flex items-center justify-between w-full max-w-[280px] px-2">
                <img
                  src="/mha-logo.svg"
                  alt="Ministry of Home Affairs, Government of India"
                  className="h-12 w-auto max-w-[130px] object-contain"
                />
                <img
                  src="/nfsu-crest.png"
                  alt="National Forensic Sciences University Official Crest"
                  className="h-16 w-auto object-contain"
                />
              </div>

              {/* Bilingual Institutional Identity (Vertical Stack) */}
              <div className="flex flex-col items-center text-center space-y-1 w-full">
                <p className="text-base font-bold text-[#191A17] leading-snug">
                  राष्ट्रीय न्यायालयिक विज्ञान विश्वविद्यालय
                </p>
                <p className="text-[11px] font-semibold text-[#1B3678] leading-tight">
                  राष्ट्रीय महत्त्व का संस्थान, गृह मंत्रालय, भारत सरकार
                </p>
                <h3 className="font-serif text-base font-bold text-[#191A17] pt-1 leading-snug">
                  National Forensic Sciences University
                </h3>
                <p className="text-[11px] font-semibold text-[#1B3678] leading-tight">
                  Institution of National Importance, MHA, Government of India
                </p>
                <p className="text-xs font-bold text-[#686D66] pt-1 tracking-wide">
                  गोवा कैंपस <span className="mx-1.5 text-[#DADBCF]">|</span> Goa Campus
                </p>
              </div>
            </div>

            {/* Tablet & Desktop Layout (>= 640px): 3-Column Lockup */}
            <div className="hidden sm:grid grid-cols-[130px_1fr_130px] lg:grid-cols-[160px_1fr_160px] items-center gap-4 lg:gap-6">
              {/* Left: Ministry of Home Affairs emblem */}
              <div className="flex justify-center sm:justify-start">
                <img
                  src="/mha-logo.svg"
                  alt="Ministry of Home Affairs, Government of India"
                  className="h-14 sm:h-16 w-auto max-w-[170px] object-contain"
                />
              </div>

              {/* Center: Bilingual institutional identity */}
              <div className="text-center space-y-1">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#191A17] leading-snug">
                  राष्ट्रीय न्यायालयिक विज्ञान विश्वविद्यालय
                </p>
                <p className="text-xs sm:text-sm font-semibold text-[#1B3678]">
                  राष्ट्रीय महत्त्व का संस्थान, गृह मंत्रालय, भारत सरकार
                </p>
                <h3 className="font-serif text-lg sm:text-xl md:text-[22px] font-bold text-[#191A17] pt-1 leading-snug">
                  National Forensic Sciences University
                </h3>
                <p className="text-xs sm:text-[13px] font-semibold text-[#1B3678]">
                  Institution of National Importance, MHA, Government of India
                </p>
                <p className="text-xs sm:text-sm font-bold text-[#686D66] pt-1 tracking-wide">
                  गोवा कैंपस <span className="mx-1.5 text-[#DADBCF]">|</span> Goa Campus
                </p>
              </div>

              {/* Right: NFSU official crest with Devanagari motto */}
              <div className="flex justify-center sm:justify-end">
                <img
                  src="/nfsu-crest.png"
                  alt="National Forensic Sciences University Official Crest"
                  className="h-20 sm:h-24 w-auto object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

