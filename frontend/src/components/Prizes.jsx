import { useState } from 'react';
import { Trophy, Medal, Award, Sparkles, Check, Users, ChevronRight, ChevronDown, Coins, ShieldCheck, Crown } from 'lucide-react';
import { EVENT, openRegistration } from '../data/eventData';

function PodiumIcon({ type, isFirst, index }) {
  if (type === 'trophy' || isFirst) {
    return (
      <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border-2 border-amber-400/60 flex items-center justify-center text-amber-500 shadow-sm relative shrink-0">
        <Trophy size={26} className="text-amber-500 fill-amber-400/30" strokeWidth={2.2} />
        <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-white shadow-xs">
          1
        </span>
      </div>
    );
  }
  if (type === 'silver' || index === 1) {
    return (
      <div className="w-12 h-12 rounded-2xl bg-slate-200/70 border-2 border-slate-300 flex items-center justify-center text-slate-600 shadow-sm relative shrink-0">
        <Medal size={26} className="text-slate-600 fill-slate-400/30" strokeWidth={2.2} />
        <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-500 text-[10px] font-black text-white shadow-xs">
          2
        </span>
      </div>
    );
  }
  return (
    <div className="w-12 h-12 rounded-2xl bg-amber-900/10 border-2 border-amber-700/40 flex items-center justify-center text-amber-800 shadow-sm relative shrink-0">
      <Medal size={26} className="text-amber-800 fill-amber-700/30" strokeWidth={2.2} />
      <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-800 text-[10px] font-black text-white shadow-xs">
        3
      </span>
    </div>
  );
}

const PRIZE_DATA = {
  '10k': {
    name: '10 KM Long-Distance Run',
    tag: 'Flag-off: 6:30 AM · Timing Chip',
    pool: '₹88,000 Cash Pool',
    mobilePool: '₹88K Pool',
    ageGroups: [
      {
        id: 'open',
        label: '15–35 Years (Open Category)',
        shortLabel: '15–35 (Open)',
        places: [
          {
            place: '1st Place',
            badge: '1ST PLACE · CHAMPION',
            amount: '₹10,000',
            men: '₹10,000',
            women: '₹10,000',
            trophy: 'Distinct Champion Trophy',
            medal: 'Official Gold Medal',
            subtext: 'Equal cash vouchers for Men & Women winners',
            featured: true,
            iconType: 'trophy',
          },
          {
            place: '2nd Place',
            badge: '2ND PLACE · RUNNER UP',
            amount: '₹7,000',
            men: '₹7,000',
            women: '₹7,000',
            trophy: 'Distinct Runner-Up Trophy',
            medal: 'Official Silver Medal',
            subtext: 'Equal cash vouchers for Men & Women runners-up',
            featured: false,
            iconType: 'silver',
          },
          {
            place: '3rd Place',
            badge: '3RD PLACE · 2ND RUNNER UP',
            amount: '₹5,000',
            men: '₹5,000',
            women: '₹5,000',
            trophy: 'Distinct 2nd Runner-Up Trophy',
            medal: 'Official Bronze Medal',
            subtext: 'Equal cash vouchers for Men & Women podium',
            featured: false,
            iconType: 'bronze',
          },
        ],
      },
      {
        id: 'veteran',
        label: '36–59 Years (Veterans Category)',
        shortLabel: '36–59 (Veterans)',
        places: [
          {
            place: '1st Place',
            badge: '1ST PLACE · VETERAN CHAMPION',
            amount: '₹10,000',
            men: '₹10,000',
            women: '₹10,000',
            trophy: 'Distinct Champion Trophy',
            medal: 'Official Gold Medal',
            subtext: 'Equal cash vouchers for Men & Women winners',
            featured: true,
            iconType: 'trophy',
          },
          {
            place: '2nd Place',
            badge: '2ND PLACE · VETERAN RUNNER UP',
            amount: '₹7,000',
            men: '₹7,000',
            women: '₹7,000',
            trophy: 'Distinct Runner-Up Trophy',
            medal: 'Official Silver Medal',
            subtext: 'Equal cash vouchers for Men & Women runners-up',
            featured: false,
            iconType: 'silver',
          },
          {
            place: '3rd Place',
            badge: '3RD PLACE · VETERAN 2ND RUNNER UP',
            amount: '₹5,000',
            men: '₹5,000',
            women: '₹5,000',
            trophy: 'Distinct 2nd Runner-Up Trophy',
            medal: 'Official Bronze Medal',
            subtext: 'Equal cash vouchers for Men & Women podium',
            featured: false,
            iconType: 'bronze',
          },
        ],
      },
    ],
  },
  '6k': {
    name: '6 KM Endurance Run',
    tag: 'Flag-off: 6:45 AM · Timing Chip',
    pool: '₹60,000 Cash Pool',
    mobilePool: '₹60K Pool',
    ageGroups: [
      {
        id: 'open',
        label: '15–35 Years (Open Category)',
        shortLabel: '15–35 (Open)',
        places: [
          {
            place: '1st Place',
            badge: '1ST PLACE · CHAMPION',
            amount: '₹7,000',
            men: '₹7,000',
            women: '₹7,000',
            trophy: 'Distinct Champion Trophy',
            medal: 'Official Gold Medal',
            subtext: 'Equal cash vouchers for Men & Women winners',
            featured: true,
            iconType: 'trophy',
          },
          {
            place: '2nd Place',
            badge: '2ND PLACE · RUNNER UP',
            amount: '₹5,000',
            men: '₹5,000',
            women: '₹5,000',
            trophy: 'Distinct Runner-Up Trophy',
            medal: 'Official Silver Medal',
            subtext: 'Equal cash vouchers for Men & Women runners-up',
            featured: false,
            iconType: 'silver',
          },
          {
            place: '3rd Place',
            badge: '3RD PLACE · 2ND RUNNER UP',
            amount: '₹3,000',
            men: '₹3,000',
            women: '₹3,000',
            trophy: 'Distinct 2nd Runner-Up Trophy',
            medal: 'Official Bronze Medal',
            subtext: 'Equal cash vouchers for Men & Women podium',
            featured: false,
            iconType: 'bronze',
          },
        ],
      },
      {
        id: 'veteran',
        label: '36–59 Years (Veterans Category)',
        shortLabel: '36–59 (Veterans)',
        places: [
          {
            place: '1st Place',
            badge: '1ST PLACE · VETERAN CHAMPION',
            amount: '₹7,000',
            men: '₹7,000',
            women: '₹7,000',
            trophy: 'Distinct Champion Trophy',
            medal: 'Official Gold Medal',
            subtext: 'Equal cash vouchers for Men & Women winners',
            featured: true,
            iconType: 'trophy',
          },
          {
            place: '2nd Place',
            badge: '2ND PLACE · VETERAN RUNNER UP',
            amount: '₹5,000',
            men: '₹5,000',
            women: '₹5,000',
            trophy: 'Distinct Runner-Up Trophy',
            medal: 'Official Silver Medal',
            subtext: 'Equal cash vouchers for Men & Women runners-up',
            featured: false,
            iconType: 'silver',
          },
          {
            place: '3rd Place',
            badge: '3RD PLACE · VETERAN 2ND RUNNER UP',
            amount: '₹3,000',
            men: '₹3,000',
            women: '₹3,000',
            trophy: 'Distinct 2nd Runner-Up Trophy',
            medal: 'Official Bronze Medal',
            subtext: 'Equal cash vouchers for Men & Women podium',
            featured: false,
            iconType: 'bronze',
          },
        ],
      },
    ],
  },
  '3k': {
    name: '3 KM Fun Run & Fitness Dash',
    tag: 'Flag-off: 6:50 AM · Non-Timed / Fun',
    pool: '12 Trophies + Medals',
    mobilePool: 'Trophies',
    ageGroups: [
      {
        id: 'junior',
        label: 'Under 14 Years (Junior Category)',
        shortLabel: 'Under 14 (Junior)',
        places: [
          {
            place: '1st Place',
            badge: '1ST PLACE · JUNIOR CHAMPION',
            amount: 'Gold Trophy',
            men: 'Boys Winner',
            women: 'Girls Winner',
            trophy: 'Official Winner Trophy',
            medal: 'Gold Medal',
            subtext: 'Trophy + Gold Medal for Boys & Girls winners',
            featured: true,
            iconType: 'trophy',
          },
          {
            place: '2nd Place',
            badge: '2ND PLACE · JUNIOR RUNNER UP',
            amount: 'Silver Trophy',
            men: 'Boys Runner Up',
            women: 'Girls Runner Up',
            trophy: 'Official Runner-Up Trophy',
            medal: 'Silver Medal',
            subtext: 'Trophy + Silver Medal for Boys & Girls',
            featured: false,
            iconType: 'silver',
          },
          {
            place: '3rd Place',
            badge: '3RD PLACE · JUNIOR 2ND RUNNER UP',
            amount: 'Bronze Trophy',
            men: 'Boys 2nd Runner Up',
            women: 'Girls 2nd Runner Up',
            trophy: 'Official Podium Trophy',
            medal: 'Bronze Medal',
            subtext: 'Trophy + Bronze Medal for Boys & Girls',
            featured: false,
            iconType: 'bronze',
          },
        ],
      },
      {
        id: 'senior',
        label: 'Above 60 Years (Senior Masters)',
        shortLabel: '60+ (Senior)',
        places: [
          {
            place: '1st Place',
            badge: '1ST PLACE · SENIOR CHAMPION',
            amount: 'Gold Trophy',
            men: 'Senior Men Winner',
            women: 'Senior Women Winner',
            trophy: 'Official Winner Trophy',
            medal: 'Gold Medal',
            subtext: 'Trophy + Gold Medal for Men & Women',
            featured: true,
            iconType: 'trophy',
          },
          {
            place: '2nd Place',
            badge: '2ND PLACE · SENIOR RUNNER UP',
            amount: 'Silver Trophy',
            men: 'Senior Men Runner Up',
            women: 'Senior Women Runner Up',
            trophy: 'Official Runner-Up Trophy',
            medal: 'Silver Medal',
            subtext: 'Trophy + Silver Medal for Men & Women',
            featured: false,
            iconType: 'silver',
          },
          {
            place: '3rd Place',
            badge: '3RD PLACE · SENIOR 2ND RUNNER UP',
            amount: 'Bronze Trophy',
            men: 'Senior Men 2nd Runner Up',
            women: 'Senior Women 2nd Runner Up',
            trophy: 'Official Podium Trophy',
            medal: 'Bronze Medal',
            subtext: 'Trophy + Bronze Medal for Men & Women',
            featured: false,
            iconType: 'bronze',
          },
        ],
      },
    ],
  },
};

const TABLE_DATA = [
  {
    race: '10 KM',
    age: '15–35 years',
    men: '1st ₹10,000 · 2nd ₹7,000 · 3rd ₹5,000',
    women: '1st ₹10,000 · 2nd ₹7,000 · 3rd ₹5,000',
    awards: 'Distinct trophy + Gold/Silver/Bronze medal',
  },
  {
    race: '10 KM',
    age: '36–59 years',
    men: '1st ₹10,000 · 2nd ₹7,000 · 3rd ₹5,000',
    women: '1st ₹10,000 · 2nd ₹7,000 · 3rd ₹5,000',
    awards: 'Distinct trophy + Gold/Silver/Bronze medal',
  },
  {
    race: '6 KM',
    age: '15–35 years',
    men: '1st ₹7,000 · 2nd ₹5,000 · 3rd ₹3,000',
    women: '1st ₹7,000 · 2nd ₹5,000 · 3rd ₹3,000',
    awards: 'Distinct trophy + Gold/Silver/Bronze medal',
  },
  {
    race: '6 KM',
    age: '36–59 years',
    men: '1st ₹7,000 · 2nd ₹5,000 · 3rd ₹3,000',
    women: '1st ₹7,000 · 2nd ₹5,000 · 3rd ₹3,000',
    awards: 'Distinct trophy + Gold/Silver/Bronze medal',
  },
  {
    race: '3 KM',
    age: 'Under 14 years',
    men: 'No cash prize',
    women: 'No cash prize',
    awards: 'Trophy + Gold/Silver/Bronze medal',
  },
  {
    race: '3 KM',
    age: 'Above 60 years',
    men: 'No cash prize',
    women: 'No cash prize',
    awards: 'Trophy + Gold/Silver/Bronze medal',
  },
];

export default function Prizes() {
  const [selectedDistance, setSelectedDistance] = useState('10k');
  const [selectedAgeIndex, setSelectedAgeIndex] = useState(0);
  const [showTable, setShowTable] = useState(false);

  const currentDistance = PRIZE_DATA[selectedDistance];
  const currentAgeGroup = currentDistance.ageGroups[selectedAgeIndex] || currentDistance.ageGroups[0];

  const handleDistanceChange = (distKey) => {
    setSelectedDistance(distKey);
    setSelectedAgeIndex(0);
  };

  return (
    <section
      id="prizes"
      className="relative bg-[#FFFCEB] pt-2 sm:pt-4 pb-3 sm:pb-4 scroll-mt-16 overflow-hidden"
      aria-labelledby="prizes-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 rounded-full text-[11px] sm:text-xs font-bold tracking-widest uppercase bg-[#1749D1]/10 text-[#1749D1] border border-[#1749D1]/20 mb-2.5 sm:mb-3.5">
            <Trophy size={13} className="shrink-0" />
            <span>Prize Pool &amp; Awards</span>
          </div>

          <h2
            id="prizes-heading"
            className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-[#191A17] font-bold tracking-tight mb-2 sm:mb-3"
          >
            Dare to run. Claim the glory.
          </h2>

          <div className="text-3xl sm:text-5xl md:text-6xl font-black text-[#191A17] tracking-tight mb-2.5 sm:mb-3">
            <span className="text-[#1749D1]">₹1,48,000</span>{' '}
            <span className="text-sm sm:text-2xl md:text-3xl font-semibold text-[#686D66]">in prizes &amp; awards</span>
          </div>

          <p className="text-[#686D66] text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Top male and female runners across 10K, 6K, and 3K age divisions take home cash vouchers, distinctive university trophies, and official NFSU Goa medals.
          </p>
        </div>

        {/* 
          Prominent Cyber Obsidian Highlights Strip 
          Optimized on mobile: 3-column compact ribbon instead of tall stacked slab
          Desktop (sm:): Stays identical horizontal layout
        */}
        <div className="bg-[#051124] border-2 border-[#e8e337] rounded-2xl p-2.5 sm:p-5 shadow-[0_12px_36px_rgba(0,0,0,0.3)] text-white max-w-4xl mx-auto mb-6 sm:mb-12">
          <div className="grid grid-cols-3 divide-x divide-white/15 text-center">
            
            {/* Stat 1: Cash Pool */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3.5 px-1 sm:px-3 py-1 sm:py-0">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#e8e337]/15 border border-[#e8e337]/30 flex items-center justify-center text-[#e8e337] shrink-0">
                <Coins className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.2} />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xs sm:text-2xl font-black text-[#e8e337] tracking-tight leading-tight">
                  ₹1,48,000
                </div>
                <div className="text-[8px] sm:text-[11px] uppercase tracking-tight sm:tracking-wider text-white/70 font-bold leading-tight mt-0.5">
                  CASH PRIZE POOL
                </div>
              </div>
            </div>

            {/* Stat 2: Trophies */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3.5 px-1 sm:px-3 py-1 sm:py-0">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#e8e337]/15 border border-[#e8e337]/30 flex items-center justify-center text-[#e8e337] shrink-0">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.2} />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xs sm:text-2xl font-black text-[#e8e337] tracking-tight leading-tight">
                  36
                </div>
                <div className="text-[8px] sm:text-[11px] uppercase tracking-tight sm:tracking-wider text-white/70 font-bold leading-tight mt-0.5">
                  TROPHIES
                </div>
              </div>
            </div>

            {/* Stat 3: Medals */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3.5 px-1 sm:px-3 py-1 sm:py-0">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#e8e337]/15 border border-[#e8e337]/30 flex items-center justify-center text-[#e8e337] shrink-0">
                <Medal className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.2} />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xs sm:text-2xl font-black text-[#e8e337] tracking-tight leading-tight">
                  500+
                </div>
                <div className="text-[8px] sm:text-[11px] uppercase tracking-tight sm:tracking-wider text-white/70 font-bold leading-tight mt-0.5">
                  MEDALS
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 
          Distance Category Selector Tabs 
          - Desktop (lg:): Strictly original horizontal pill layout with full labels
          - Mobile & Tablet (< lg): Clean segmented control bar with high-contrast active state and zero cramped wrapping
        */}
        {/* DESKTOP (lg and above): 100% UNTOUCHED */}
        <div className="hidden lg:flex flex-row items-center justify-center gap-3 mb-8">
          {Object.entries(PRIZE_DATA).map(([key, data]) => {
            const isSelected = selectedDistance === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => handleDistanceChange(key)}
                className={`px-6 py-3 rounded-2xl text-sm font-bold tracking-wide transition-all cursor-pointer flex flex-row items-center justify-center gap-2 ${
                  isSelected
                    ? 'bg-[#191A17] text-white shadow-[0_6px_20px_rgba(25,26,23,0.25)] scale-[1.02]'
                    : 'bg-white hover:bg-[#F5F5F0] text-[#191A17] border border-[#DADBCF]'
                }`}
              >
                <span>{data.name.split(' ')[0]} {data.name.split(' ')[1]}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold whitespace-nowrap ${
                    isSelected ? 'bg-[#e8e337] text-[#191A17]' : 'bg-[#191A17]/10 text-[#191A17]'
                  }`}
                >
                  {data.pool}
                </span>
              </button>
            );
          })}
        </div>

        {/* MOBILE & TABLET (< lg): Sleek segmented control */}
        <div className="lg:hidden max-w-sm sm:max-w-md mx-auto mb-4 p-1.5 bg-white rounded-2xl border border-[#DADBCF] shadow-xs">
          <div className="grid grid-cols-3 gap-1.5">
            {Object.entries(PRIZE_DATA).map(([key, data]) => {
              const isSelected = selectedDistance === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleDistanceChange(key)}
                  className={`py-2 px-1.5 rounded-xl text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                    isSelected
                      ? 'bg-[#191A17] text-white shadow-sm'
                      : 'hover:bg-[#F5F5F0] text-[#191A17]'
                  }`}
                >
                  <span className="text-xs sm:text-sm font-black tracking-tight leading-tight">
                    {data.name.split(' ')[0]} {data.name.split(' ')[1]}
                  </span>
                  <span
                    className={`text-[9px] sm:text-[10px] font-bold tracking-tight mt-1 leading-none ${
                      isSelected ? 'text-[#e8e337]' : 'text-[#686D66]'
                    }`}
                  >
                    {data.mobilePool}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 
          Age Group Switcher 
          - Desktop (lg:): Strictly original centered inline buttons with full labels
          - Mobile & Tablet (< lg): Clean 2-button capsule with single-line labels
        */}
        {/* DESKTOP (lg and above): 100% UNTOUCHED */}
        <div className="hidden lg:flex items-center justify-center gap-2 mb-10">
          <span className="text-xs text-[#686D66] font-medium mr-2">Age Category:</span>
          {currentDistance.ageGroups.map((ag, idx) => {
            const isSelected = selectedAgeIndex === idx;
            return (
              <button
                key={ag.id}
                type="button"
                onClick={() => setSelectedAgeIndex(idx)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#1749D1] text-white shadow-xs'
                    : 'bg-white hover:bg-[#F5F5F0] text-[#686D66] hover:text-[#191A17] border border-[#DADBCF]'
                }`}
              >
                {ag.label}
              </button>
            );
          })}
        </div>

        {/* MOBILE & TABLET (< lg): Single-line capsule */}
        <div className="lg:hidden flex items-center justify-center max-w-xs sm:max-w-sm mx-auto mb-6 p-1 bg-white rounded-full border border-[#DADBCF] shadow-xs">
          {currentDistance.ageGroups.map((ag, idx) => {
            const isSelected = selectedAgeIndex === idx;
            return (
              <button
                key={ag.id}
                type="button"
                onClick={() => setSelectedAgeIndex(idx)}
                className={`flex-1 py-1.5 px-3 rounded-full text-[11px] sm:text-xs font-bold text-center transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#1749D1] text-white shadow-xs'
                    : 'text-[#686D66] hover:text-[#191A17]'
                }`}
              >
                {ag.shortLabel}
              </button>
            );
          })}
        </div>

        {/* 
          Podium Cards (1st Place, 2nd Place, 3rd Place)
          Directly matches the neo-brutalist card style in reference image
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch mb-10 sm:mb-12">
          {currentAgeGroup.places.map((place, idx) => {
            const isFirst = place.featured;

            return (
              <div
                key={idx}
                className={`flex flex-col justify-between rounded-2xl sm:rounded-3xl p-5 sm:p-7 transition-all duration-300 relative ${
                  isFirst
                    ? 'bg-white border-2 border-[#191A17] shadow-[5px_5px_0px_#191A17] sm:shadow-[6px_6px_0px_#191A17] md:-translate-y-2'
                    : 'bg-white border border-[#DADBCF] shadow-sm hover:shadow-md'
                }`}
              >
                {/* Header: Place Badge + Icon */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3.5 sm:mb-4">
                    <span
                      className={`text-[9px] sm:text-[11px] font-black uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full leading-tight ${
                        isFirst
                          ? 'bg-[#1749D1]/10 text-[#1749D1] border border-[#1749D1]/25'
                          : idx === 1
                          ? 'bg-slate-100 text-slate-700 border border-slate-200'
                          : 'bg-amber-50 text-amber-800 border border-amber-200'
                      }`}
                    >
                      {place.badge}
                    </span>

                    {/* Trophy / Medal Vector Graphic */}
                    <PodiumIcon type={place.iconType} isFirst={isFirst} index={idx} />
                  </div>

                  {/* Prize Amount */}
                  <div className="mb-3.5 sm:mb-4">
                    <div className="text-2xl sm:text-4xl font-black text-[#191A17] tracking-tight">
                      {place.amount}
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#686D66] mt-0.5 leading-snug">
                      {place.subtext}
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-[#191A17] pt-3.5 sm:pt-4 border-t border-[#DADBCF]/70">
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-[#1749D1] shrink-0 mt-0.5" />
                      <span>
                        <strong>Men:</strong> {place.men}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-[#1749D1] shrink-0 mt-0.5" />
                      <span>
                        <strong>Women:</strong> {place.women}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-[#1749D1] shrink-0 mt-0.5" />
                      <span>{place.trophy}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-[#1749D1] shrink-0 mt-0.5" />
                      <span>{place.medal} + Winner E-Certificate</span>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* 
          Special Institutional Award: Biggest Participating Group Trophy
          Matches image 3 in the prompt!
          Mobile: Clean centered layout with centered trophy icon and full-width CTA
          Desktop: Untouched horizontal row with left-aligned content and right-side CTA
        */}
        <div className="bg-[#F6EEFF] border-2 border-[#9B59C8] rounded-3xl p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-5 shadow-sm mb-6 sm:mb-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 w-full md:w-auto">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-[#9B59C8]/30 flex items-center justify-center text-[#9B59C8] shadow-sm shrink-0">
              <Trophy size={30} className="text-[#9B59C8] fill-[#9B59C8]/20" strokeWidth={2.2} />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#9B59C8] mb-1">
                <Sparkles size={13} />
                <span>Special Group Championship Award</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#191A17] tracking-tight leading-snug">
                BIGGEST PARTICIPATING GROUP TROPHY
              </h3>
              <p className="text-xs sm:text-sm text-[#686D66] mt-1 max-w-2xl leading-relaxed">
                Special rolling championship trophy awarded to the collegiate institution, corporate organization, or running club registering the highest number of participants.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href={EVENT.googleFormUrl || '#contact'}
              target={EVENT.googleFormUrl ? '_blank' : undefined}
              rel={EVENT.googleFormUrl ? 'noopener noreferrer' : undefined}
              onClick={openRegistration}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#9B59C8] hover:bg-[#8347b0] text-white px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-md hover:scale-[1.02]"
            >
              <span>Register Squad / Group</span>
              <ChevronRight size={15} />
            </a>
          </div>
        </div>

        {/* 500+ Medals for All Finishers Banner */}
        <div className="bg-white border border-[#DADBCF] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left mb-2 sm:mb-3">
          <div className="flex flex-col sm:flex-row items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-400/40 flex items-center justify-center text-amber-500 shrink-0">
              <Award size={24} className="text-amber-500 fill-amber-400/25" strokeWidth={2.2} />
            </div>
            <div>
              <h4 className="font-bold text-[#191A17] text-sm sm:text-base">
                500+ Finisher Medals Across All Categories
              </h4>
              <p className="text-xs text-[#686D66] mt-0.5">
                Every runner crossing the finish line in 10K, 6K, and 3K receives an official medal, timed e-certificate, and hot breakfast.
              </p>
            </div>
          </div>
        </div>

        {/* 
          Official Awards Breakdown Table
          Matches image 2 (the exact spreadsheet table provided in the prompt)
        */}
        {showTable && (
          <div className="bg-white border border-[#DADBCF] rounded-2xl overflow-hidden shadow-sm animate-hero-fadeUp mb-2 sm:mb-3 mt-4">
            <div className="bg-[#191A17] text-white px-5 py-3 flex items-center justify-between">
              <span className="font-semibold text-xs sm:text-sm tracking-wide">
                1. Proposed Race Categories &amp; Awards (Official Table)
              </span>
              <span className="text-[11px] text-[#e8e337] font-bold">NFSU Goa Marathon 2026</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1E293B] text-white text-[11px] uppercase tracking-wider">
                    <th className="py-3 px-4 font-bold border-b border-slate-700">Race</th>
                    <th className="py-3 px-4 font-bold border-b border-slate-700">Age Category</th>
                    <th className="py-3 px-4 font-bold border-b border-slate-700">Men's Cash Vouchers</th>
                    <th className="py-3 px-4 font-bold border-b border-slate-700">Women's Cash Vouchers</th>
                    <th className="py-3 px-4 font-bold border-b border-slate-700">Award for Each Winner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DADBCF] text-[#191A17]">
                  {TABLE_DATA.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FFFCEB]/50 transition-colors">
                      <td className="py-3 px-4 font-black text-[#1749D1] whitespace-nowrap">{row.race}</td>
                      <td className="py-3 px-4 font-medium whitespace-nowrap">{row.age}</td>
                      <td className="py-3 px-4 font-mono font-semibold">{row.men}</td>
                      <td className="py-3 px-4 font-mono font-semibold">{row.women}</td>
                      <td className="py-3 px-4 text-[#686D66]">{row.awards}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
