import { useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';

export default function VolunteerBannerModal({ isOpen, onClose, onExploreVolunteers }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="We are team of 100 volunteers banner"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm sm:max-w-md md:max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/20 transform transition-all duration-300 scale-100 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar (styled matching the reference) */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-slate-200 text-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Adamya Dhāvanam 2026
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            aria-label="Close banner modal"
            title="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body: 100 Volunteers Banner Image */}
        <div className="relative overflow-y-auto overflow-x-hidden p-2 sm:p-3 bg-slate-100 flex items-center justify-center">
          <img
            src="/volunteers-100-banner.webp"
            alt="We are team of 100 volunteers - Adamya Dhavanam 2026"
            className="w-full h-auto max-h-[72vh] object-contain rounded-xl shadow-md cursor-pointer hover:opacity-95 transition-opacity"
            onClick={() => {
              if (onExploreVolunteers) {
                onClose();
                onExploreVolunteers();
              }
            }}
          />
        </div>

        {/* Modal Footer CTA */}
        <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between gap-2">
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Close
          </button>

          {onExploreVolunteers && (
            <button
              onClick={() => {
                onClose();
                onExploreVolunteers();
              }}
              className="inline-flex items-center gap-1.5 bg-[#1749D1] hover:bg-[#1340b8] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-xl shadow-md transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Meet the Volunteers</span>
              <ChevronRight size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
