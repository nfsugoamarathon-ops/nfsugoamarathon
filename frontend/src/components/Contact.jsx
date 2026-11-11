import { useState, useEffect } from 'react';
import { Phone, MessageCircle, ExternalLink, Calendar, MapPin, Maximize2, X, Download, Compass } from 'lucide-react';
import { EVENT } from '../data/eventData';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section id="contact" className="bg-[#111A17] py-20 sm:py-24 scroll-mt-16 text-white" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Left Column: Contact & Event Details */}
          <div>
            <p className="text-[#FFC36A] text-xs font-semibold uppercase tracking-widest mb-4">Get in touch</p>
            <h2 id="contact-heading" className="font-serif italic text-4xl sm:text-5xl text-white leading-tight mb-6">
              We're here <br />to help.
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Have a question about registration, payment, or the race weekend? Reach out to Abhay — the fastest way is WhatsApp.
            </p>

            <div className="space-y-4">
              <a
                href={EVENT.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-4 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                  <MessageCircle size={20} className="text-[#25D366]" />
                </div>
                <div>
                  <p className="text-white font-semibold">WhatsApp</p>
                  <p className="text-white/50 text-sm">{EVENT.contact.phone}</p>
                </div>
                <ExternalLink size={14} className="ml-auto text-white/30 group-hover:text-white/60 transition-colors" />
              </a>

              <a
                href={`tel:${EVENT.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-4 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#1749D1]/20 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-[#1749D1]" />
                </div>
                <div>
                  <p className="text-white font-semibold">Call Abhay</p>
                  <p className="text-white/50 text-sm">{EVENT.contact.phone}</p>
                </div>
              </a>
            </div>

            <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Event Details</p>
              <div className="space-y-2.5 text-sm">
                <p className="text-white/80 flex items-center gap-2">
                  <Calendar size={15} className="text-[#FFC36A] shrink-0" />
                  <span className="text-white/40">Race Date:</span> 6 December 2026
                </p>
                <p className="text-white/80 flex items-center gap-2">
                  <MapPin size={15} className="text-[#FFC36A] shrink-0" />
                  <span className="text-white/40">Venue:</span> NFSU Girls Hostel, Ponda, Goa
                </p>
                <p className="text-white/80 flex items-center gap-2">
                  <Compass size={15} className="text-[#FFC36A] shrink-0" />
                  <span className="text-white/40">Itinerary:</span> 4-Day Marathon & Heritage Circuit
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Day Marathon & Heritage Itinerary */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#FFC36A]/20 text-[#FFC36A] border border-[#FFC36A]/30 mb-2">
                  4-Day Heritage Itinerary
                </span>
                <h3 className="font-serif italic text-2xl sm:text-3xl text-white leading-tight">
                  Run the race. <br className="hidden sm:inline" />Experience Goa.
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white bg-white/10 hover:bg-white/20 border border-white/10 px-3 py-1.5 rounded-lg transition-colors shrink-0"
                aria-label="Expand itinerary poster"
              >
                <Maximize2 size={13} />
                <span>Zoom</span>
              </button>
            </div>

            {/* Poster Graphic Card with interactive zoom */}
            <div
              onClick={() => setIsModalOpen(true)}
              className="relative group rounded-xl overflow-hidden border border-white/15 bg-black/40 cursor-pointer shadow-lg"
            >
              <img
                src="/marathon-itinerary.jpg"
                alt="4-Day Goa Marathon & Heritage Itinerary"
                className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                <span className="inline-flex items-center gap-2 bg-[#1749D1] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                  <Maximize2 size={14} /> Click to expand full poster
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="4-Day Goa Marathon & Heritage Itinerary Poster"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-4xl max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between gap-3 text-white mb-3 px-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFC36A]" />
                <span className="text-xs sm:text-sm font-semibold tracking-wide">
                  4-Day Goa Marathon & Heritage Itinerary
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/marathon-itinerary.jpg"
                  download="ADAMYA-DHAVANAM-4-Day-Goa-Marathon-Itinerary.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <Download size={13} />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Poster Image */}
            <div className="overflow-auto max-h-[82vh] rounded-xl border border-white/20 shadow-2xl bg-black">
              <img
                src="/marathon-itinerary.jpg"
                alt="4-Day Goa Marathon & Heritage Itinerary Full Resolution"
                className="max-h-[80vh] w-auto object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

