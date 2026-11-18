import { MapPin, Bell, Droplets, Clock, ShieldCheck } from 'lucide-react';

export default function Route() {
  return (
    <section id="route" className="bg-[#FFFCEB] pt-12 sm:pt-16 pb-10 sm:pb-14 scroll-mt-16 overflow-hidden" aria-labelledby="route-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Course Narrative & Key Logistics */}
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 bg-[#1749D1]/[0.08] border border-[#1749D1]/20 rounded-full px-3.5 py-1 text-[#1749D1] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1749D1]" />
              Course Route
            </div>

            <h2 id="route-heading" className="font-serif italic text-4xl sm:text-5xl text-[#191A17] leading-[1.12] mb-5">
              Official course <br className="hidden sm:inline" />route map.
            </h2>

            <p className="text-[#686D66] text-sm sm:text-base leading-relaxed mb-6">
              Explore the official race courses, key landmark turns, and start/finish zones. All categories start and finish at{' '}
              <strong className="text-[#191A17]">NFSU Girls Hostel, Ponda Goa</strong>.
            </p>

            {/* Event Guidance Alert */}
            <div className="flex items-start gap-3 bg-[#EEF2FF] border border-[#1749D1]/20 rounded-2xl p-4 mb-6 shadow-xs">
              <Bell size={18} className="text-[#1749D1] mt-0.5 flex-shrink-0" />
              <p className="text-xs sm:text-sm text-[#191A17] leading-relaxed">
                Clear course markings route marshals will be positioned across the loop. Any live race-day updates will be shared via our official WhatsApp helpdesk.
              </p>
            </div>

            {/* Quick Logistics Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
              <div className="flex items-start gap-3 p-3.5 bg-white border border-[#DADBCF] rounded-xl shadow-xs">
                <MapPin size={17} className="text-[#e8e337] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#191A17] uppercase tracking-wider">Start & Finish</p>
                  <p className="text-xs text-[#686D66] mt-0.5">NFSU Girls Hostel, Ponda</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white border border-[#DADBCF] rounded-xl shadow-xs">
                <Droplets size={17} className="text-[#1749D1] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#191A17] uppercase tracking-wider">Hydration & Aid</p>
                  <p className="text-xs text-[#686D66] mt-0.5">Every 2 km + Medical</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white border border-[#DADBCF] rounded-xl shadow-xs">
                <Clock size={17} className="text-[#e8e337] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#191A17] uppercase tracking-wider">Flag-Off Time</p>
                  <p className="text-xs text-[#686D66] mt-0.5">6:30 AM onwards</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white border border-[#DADBCF] rounded-xl shadow-xs">
                <ShieldCheck size={17} className="text-[#1749D1] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#191A17] uppercase tracking-wider">Course Safety</p>
                  <p className="text-xs text-[#686D66] mt-0.5">Police & Ambulance Escort</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Official Route Map Showcase Card */}
          <div className="relative min-w-0 w-full">
            <div className="relative z-10 rounded-2xl border border-[#DADBCF] bg-white shadow-xl overflow-hidden p-2 sm:p-2.5 transition-all duration-300 hover:shadow-2xl">
              <div className="relative w-full bg-white rounded-xl overflow-hidden flex items-center justify-center">
                <img
                  src="/route-map.jpg"
                  alt="Adamya Dhavanam 2026 - The Forensic Marathon Official Route Map"
                  className="w-full h-auto max-h-[520px] lg:max-h-[560px] object-contain rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Decorative background ambient glows */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#EBD3F5] opacity-50 blur-2xl pointer-events-none" aria-hidden="true" />
            <div className="absolute -bottom-4 -left-4 w-28 h-28 rounded-full bg-[#1749D1] opacity-15 blur-2xl pointer-events-none" aria-hidden="true" />
          </div>
        </div>

        {/* Route Category Breakdown Cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              label: '3 KM',
              title: 'Fun Run',
              color: 'text-[#e65100]',
              badge: 'bg-[#fff3e0] text-[#e65100] border-[#ffb74d]/40',
              detail: 'Start Line → Sahakari Petroleum (Endline)',
              sub: 'Flag-off: 6:50 AM · Cut-off: 2 hour',
            },
            {
              label: '6 KM',
              title: 'Challenge Run',
              color: 'text-[#f59e0b]',
              badge: 'bg-[#fef3c7] text-[#b45309] border-[#fcd34d]/50',
              detail: 'Loop via Betora Circle & St Anna Bakery',
              sub: 'Flag-off: 6:45 AM · Cut-off: 2 hours',
            },
            {
              label: '10 KM',
              title: 'Elite Run',
              color: 'text-[#1749D1]',
              badge: 'bg-[#EEF2FF] text-[#1749D1] border-[#1749D1]/25',
              detail: 'Full Loop & Indian Oil Out-and-Back',
              sub: 'Flag-off: 6:30 AM · Cut-off: 2 hours',
            },
          ].map((r) => (
            <div
              key={r.label}
              className="bg-white border border-[#DADBCF] rounded-2xl p-5 shadow-xs transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-black text-2xl sm:text-3xl ${r.color}`}>{r.label}</span>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${r.badge}`}>
                  {r.title}
                </span>
              </div>
              <p className="text-[#191A17] font-semibold text-sm leading-snug">{r.detail}</p>
              <p className="text-[#686D66] text-xs mt-2 pt-2 border-t border-[#DADBCF]/50">{r.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

