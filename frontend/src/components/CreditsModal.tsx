import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Code2, Mail, Sparkles } from 'lucide-react';

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

interface CreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreditsModal({ isOpen, onClose }: CreditsModalProps) {
  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="credits-modal-title"
    >
      {/* Modal Card - Single Box, NO scrollbar */}
      <div
        className="relative w-full max-w-2xl bg-[#051124] text-white rounded-3xl border border-[#FFC36A]/40 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_50px_rgba(255,195,106,0.15)] p-4 sm:p-6 space-y-3.5 overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Top Accent Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#FFC36A] to-transparent pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3.5 sm:top-5 right-3.5 sm:right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white flex items-center justify-center transition-all cursor-pointer group"
          aria-label="Close dialog"
        >
          <X size={16} className="group-hover:rotate-90 transition-transform duration-200" />
        </button>

        {/* Header */}
        <div className="space-y-1.5 pr-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFC36A]/10 border border-[#FFC36A]/30 text-[#FFC36A] text-[10px] font-bold tracking-widest uppercase">
            <Sparkles size={11} className="animate-pulse" />
            <span>WEBSITE ENGINEERING &amp; DESIGN</span>
          </div>
          <h2
            id="credits-modal-title"
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-serif italic"
          >
            Crafted with <span className="text-red-500 not-italic inline-block animate-pulse">❤️</span> for NFSU Goa
          </h2>
          <p className="text-white/60 text-[11px] sm:text-xs leading-relaxed max-w-xl">
            This digital platform was designed and engineered from the ground up by students of the{' '}
            <strong className="text-white font-medium">NFSU, Goa Campus</strong> for{' '}
            <span className="text-[#FFC36A] font-semibold">Adamya Dhāvanam 2026</span> - Forensic Marathon.
          </p>
        </div>

        {/* Team Section */}
        <div className="space-y-2">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#FFC36A]/80 flex items-center gap-1">
            <Code2 size={13} />
            <span>CORE DEVELOPMENT TEAM</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            {/* Neel Varia Card */}
            <div className="relative group bg-[#08152c] border-2 border-[#FFC36A] rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-md hover:shadow-[0_0_25px_rgba(255,195,106,0.2)] transition-all duration-300 flex flex-col justify-between">
              <div>
                {/* Photo Frame with Inner Golden Border */}
                <div className="relative w-full aspect-[4/5] rounded-lg sm:rounded-xl overflow-hidden border-2 border-[#FFC36A] bg-[#030914] shadow-inner mb-2 sm:mb-2.5">
                  <img
                    src="/neel.jpg"
                    alt="Neel Varia"
                    className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Card Meta */}
                <div className="space-y-0.5">
                  <h4 className="text-sm sm:text-lg font-black text-white group-hover:text-[#FFC36A] transition-colors tracking-tight font-serif italic truncate">
                    Neel Varia
                  </h4>
                  <p className="text-[10px] sm:text-xs font-semibold text-emerald-400 leading-tight">
                    Developer · M.Sc DFIS Sem 3
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-white/60 font-medium">
                    NFSU Goa Campus
                  </p>
                </div>
              </div>

              {/* Links - Responsive Single Row */}
              <div className="grid grid-cols-3 gap-1 pt-2 sm:pt-2.5 mt-2 sm:mt-2.5 border-t border-white/10 w-full">
                <a
                  href="https://www.linkedin.com/in/neelvaria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 py-1 sm:py-1.5 px-0.5 sm:px-1 rounded-lg bg-[#0A66C2]/20 hover:bg-[#0A66C2]/40 text-[#70b5f9] hover:text-white border border-[#0A66C2]/40 text-[9px] sm:text-[11px] font-semibold transition-all hover:scale-[1.02] whitespace-nowrap"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 sm:w-3 sm:h-3 shrink-0" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/neelvaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 py-1 sm:py-1.5 px-0.5 sm:px-1 rounded-lg bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/10 text-[9px] sm:text-[11px] font-semibold transition-all hover:scale-[1.02] whitespace-nowrap"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-3.5 h-3.5 sm:w-3 sm:h-3 shrink-0" />
                  <span>GitHub</span>
                </a>
                <a
                  href="mailto:neelvaria08@gmail.com"
                  className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 py-1 sm:py-1.5 px-0.5 sm:px-1 rounded-lg bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/10 text-[9px] sm:text-[11px] font-semibold transition-all hover:scale-[1.02] whitespace-nowrap"
                  title="Send email"
                >
                  <Mail size={12} className="shrink-0" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Yash Bhagwani Card */}
            <div className="relative group bg-[#08152c] border-2 border-[#FFC36A] rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-md hover:shadow-[0_0_25px_rgba(255,195,106,0.2)] transition-all duration-300 flex flex-col justify-between">
              <div>
                {/* Photo Frame with Inner Golden Border */}
                <div className="relative w-full aspect-[4/5] rounded-lg sm:rounded-xl overflow-hidden border-2 border-[#FFC36A] bg-[#030914] shadow-inner mb-2 sm:mb-2.5">
                  <img
                    src="/yash.jpg"
                    alt="Yash Bhagwani"
                    className="w-full h-full object-cover object-[center_12%] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Card Meta */}
                <div className="space-y-0.5">
                  <h4 className="text-sm sm:text-lg font-black text-white group-hover:text-[#FFC36A] transition-colors tracking-tight font-serif italic truncate">
                    Yash Bhagwani
                  </h4>
                  <p className="text-[10px] sm:text-xs font-semibold text-amber-300 leading-tight">
                    Developer · M.Sc DFIS Sem 1
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-white/60 font-medium">
                    NFSU Goa Campus
                  </p>
                </div>
              </div>

              {/* Links - Responsive Single Row */}
              <div className="grid grid-cols-3 gap-1 pt-2 sm:pt-2.5 mt-2 sm:mt-2.5 border-t border-white/10 w-full">
                <a
                  href="https://www.linkedin.com/in/yash-bhagwani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 py-1 sm:py-1.5 px-0.5 sm:px-1 rounded-lg bg-[#0A66C2]/20 hover:bg-[#0A66C2]/40 text-[#70b5f9] hover:text-white border border-[#0A66C2]/40 text-[9px] sm:text-[11px] font-semibold transition-all hover:scale-[1.02] whitespace-nowrap"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 sm:w-3 sm:h-3 shrink-0" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/yash3135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 py-1 sm:py-1.5 px-0.5 sm:px-1 rounded-lg bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/10 text-[9px] sm:text-[11px] font-semibold transition-all hover:scale-[1.02] whitespace-nowrap"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-3.5 h-3.5 sm:w-3 sm:h-3 shrink-0" />
                  <span>GitHub</span>
                </a>
                <a
                  href="mailto:yashbhagwani88@gmail.com"
                  className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 py-1 sm:py-1.5 px-0.5 sm:px-1 rounded-lg bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/10 text-[9px] sm:text-[11px] font-semibold transition-all hover:scale-[1.02] whitespace-nowrap"
                  title="Send email"
                >
                  <Mail size={12} className="shrink-0" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Bottom Bar */}
        <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
          <p className="text-[10px] text-white/50">
            © 2026 National Forensic Sciences University · Goa Campus. All rights reserved.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-1.5 rounded-xl bg-[#1749D1] hover:bg-[#1340b8] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
          >
            Close Credits
          </button>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
