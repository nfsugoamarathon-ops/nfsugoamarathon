import { MapPin, Bell } from 'lucide-react';

export default function Route() {
  return (
    <section id="route" className="bg-[#FFFCEB] py-24 scroll-mt-16" aria-labelledby="route-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#1749D1] text-xs font-semibold uppercase tracking-widest mb-4">Course route</p>
            <h2 id="route-heading" className="font-serif italic text-4xl sm:text-5xl text-[#191A17] leading-tight mb-6">
              Route to be <br />announced.
            </h2>
            <p className="text-[#686D66] text-base leading-relaxed mb-6">
              The race course will be announced by the organizers before the event. All categories start and finish
              at <strong className="text-[#191A17]">NFSU Goa Campus</strong>.
            </p>
            <div className="flex items-start gap-3 bg-[#EEF2FF] border border-[#1749D1]/20 rounded-xl p-4 mb-6">
              <Bell size={16} className="text-[#1749D1] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-[#191A17]">
                Route details will be shared in the official event WhatsApp group and published on this page once authorized by the organizers.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white border border-[#DADBCF] rounded-xl">
              <MapPin size={16} className="text-[#FFC36A] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-[#191A17]">Start & Finish</p>
                <p className="text-sm text-[#686D66]">NFSU Girls Hostel, NFSU Goa Campus</p>
              </div>
            </div>
          </div>

          {/* Placeholder visual */}
          <div className="relative">
            <div className="rounded-2xl border-2 border-dashed border-[#DADBCF] bg-white aspect-square flex flex-col items-center justify-center gap-4 p-8">
              <div className="w-20 h-20 rounded-full bg-[#EEF2FF] flex items-center justify-center">
                <MapPin size={36} className="text-[#1749D1]" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-[#191A17] text-lg mb-1">Route Map</p>
                <p className="text-[#686D66] text-sm max-w-xs">
                  The official route map has not yet been published. It will appear here once authorized.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-[#FFF7E6] border border-[#FFC36A]/40 rounded-full px-4 py-2 text-sm font-medium text-[#191A17]">
                <span className="w-2 h-2 rounded-full bg-[#FFC36A] animate-pulse" />
                Coming soon
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-[#EBD3F5] opacity-40 blur-xl" aria-hidden="true" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-[#1749D1] opacity-10 blur-2xl" aria-hidden="true" />
          </div>
        </div>

        {/* Route facts */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: '3 KM', detail: 'Fun Run — exact route TBA', sub: 'Flag-off: 6:50 AM' },
            { label: '6 KM', detail: 'Challenge Run — exact route TBA', sub: 'Flag-off: 6:45 AM' },
            { label: '10 KM', detail: 'Elite Run — exact route TBA', sub: 'Flag-off: 6:30 AM' },
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

