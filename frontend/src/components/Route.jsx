import { MapPin, Bell, ExternalLink } from 'lucide-react';
import { EVENT } from '../data/eventData';

export default function Route() {
  return (
    <section id="route" className="bg-[#FFFCEB] py-24 scroll-mt-16" aria-labelledby="route-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#1749D1] text-xs font-semibold uppercase tracking-widest mb-4">Course route</p>
            <h2 id="route-heading" className="font-serif italic text-4xl sm:text-5xl text-[#191A17] leading-tight mb-6">
              Official course <br />route map.
            </h2>
            <p className="text-[#686D66] text-base leading-relaxed mb-6">
              Explore the official race courses, water stations, and route markers on the interactive map. All categories start and finish
              at <strong className="text-[#191A17]">NFSU Girls Hostel</strong>.
            </p>
            <div className="flex items-start gap-3 bg-[#EEF2FF] border border-[#1749D1]/20 rounded-xl p-4 mb-6">
              <Bell size={16} className="text-[#1749D1] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-[#191A17]">
                Use the map controls to zoom, toggle layers, or open in Google Maps. Any race-day updates will also be shared in the official event WhatsApp group.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white border border-[#DADBCF] rounded-xl">
              <MapPin size={16} className="text-[#FFC36A] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-[#191A17]">Start & Finish</p>
                <p className="text-sm text-[#686D66]">NFSU Girls Hostel</p>
              </div>
            </div>
          </div>

          {/* Interactive Google My Maps */}
          <div className="relative min-w-0">
            <div className="relative z-10 rounded-2xl border border-[#DADBCF] bg-white shadow-lg overflow-hidden">
              {/* Map card header */}
              <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[#DADBCF] bg-[#FFFCEB]/60">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-[#1749D1] shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-semibold text-[#191A17] truncate">
                    Official Race Route Map
                  </span>
                </div>
                <a
                  href={EVENT.routeMapViewerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1749D1] hover:text-[#1340b8] bg-[#EEF2FF] hover:bg-[#dfe6ff] px-3 py-1.5 rounded-lg transition-colors shrink-0"
                >
                  <span>Open Map</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Embedded Map */}
              <div className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] bg-[#EEF2FF]">
                <iframe
                  src={EVENT.routeMapEmbedUrl}
                  title="NFSU Goa Marathon Official Route Map"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-[#EBD3F5] opacity-40 blur-xl pointer-events-none" aria-hidden="true" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-[#1749D1] opacity-10 blur-2xl pointer-events-none" aria-hidden="true" />
          </div>
        </div>

        {/* Route facts */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: '3 KM', detail: 'Fun Run view route on map', sub: 'Flag-off: 6:50 AM' },
            { label: '6 KM', detail: 'Challenge Run view route on map', sub: 'Flag-off: 6:45 AM' },
            { label: '10 KM', detail: 'Elite Run view route on map', sub: 'Flag-off: 6:30 AM' },
          ].map((r) => (
            <div key={r.label} className="bg-white border border-[#DADBCF] rounded-2xl p-5">
              <span className="text-[#1749D1] font-black text-2xl block mb-1">{r.label}</span>
              <p className="text-[#191A17] font-medium text-sm">{r.detail}</p>
              <p className="text-[#686D66] text-xs mt-1">{r.sub} · Cut-off: 2 hours</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

