"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { EVENT, openRegistration } from "../../data/eventData";

// Register ScrollTrigger safely for React
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// 1. THEME-ADAPTIVE INLINE STYLES
// -------------------------------------------------------------------------
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');

.cinematic-footer-wrapper {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  
  /* Dynamic Variables using standard shadcn/tailwind v4 tokens */
  --pill-bg-1: color-mix(in oklch, var(--foreground, #ffffff) 6%, transparent);
  --pill-bg-2: color-mix(in oklch, var(--foreground, #ffffff) 2%, transparent);
  --pill-shadow: color-mix(in oklch, var(--background, #000000) 50%, transparent);
  --pill-highlight: color-mix(in oklch, var(--foreground, #ffffff) 18%, transparent);
  --pill-inset-shadow: color-mix(in oklch, var(--background, #000000) 80%, transparent);
  --pill-border: color-mix(in oklch, var(--foreground, #ffffff) 15%, transparent);
  
  --pill-bg-1-hover: color-mix(in oklch, var(--foreground, #ffffff) 14%, transparent);
  --pill-bg-2-hover: color-mix(in oklch, var(--foreground, #ffffff) 5%, transparent);
  --pill-border-hover: color-mix(in oklch, var(--foreground, #ffffff) 35%, transparent);
  --pill-shadow-hover: color-mix(in oklch, var(--background, #000000) 70%, transparent);
  --pill-highlight-hover: color-mix(in oklch, var(--foreground, #ffffff) 35%, transparent);
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
}

@keyframes footer-scroll-marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(239, 68, 68, 0.6)); }
  15%, 45% { transform: scale(1.2); filter: drop-shadow(0 0 12px rgba(239, 68, 68, 0.9)); }
  30% { transform: scale(1); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 30s linear infinite;
}

.animate-footer-scroll-marquee:hover {
  animation-play-state: paused;
}

.animate-footer-heartbeat {
  animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

/* Theme-adaptive Grid Background */
.footer-bg-grid {
  background-size: 60px 60px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

/* Theme-adaptive Aurora Glow */
.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    rgba(23, 73, 209, 0.28) 0%, 
    rgba(255, 195, 106, 0.18) 40%, 
    transparent 70%
  );
}

/* Glass Pill Theming */
.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow: 
      0 10px 30px -10px var(--pill-shadow), 
      inset 0 1px 1px var(--pill-highlight), 
      inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow: 
      0 20px 40px -10px var(--pill-shadow-hover), 
      inset 0 1px 1px var(--pill-highlight-hover);
  color: var(--foreground, #ffffff);
}

/* Giant Background Text Masking */
.footer-giant-bg-text {
  font-size: 22vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.09);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, transparent 65%);
  -webkit-background-clip: text;
  background-clip: text;
}

/* Metallic Text Glow */
.footer-text-glow {
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.5) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 24px rgba(255, 255, 255, 0.25));
}
`;

// -------------------------------------------------------------------------
// 2. MAGNETIC BUTTON PRIMITIVE (Zero Dependency)
// -------------------------------------------------------------------------
export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

export const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.4,
            y: y * 0.4,
            rotationX: -y * 0.15,
            rotationY: x * 0.15,
            scale: 1.05,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove as any);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove as any);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as any).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as any).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

// -------------------------------------------------------------------------
// 3. HIGH-VISIBILITY MARQUEE ITEM
// -------------------------------------------------------------------------
const HighVisibilityMarqueeItem = () => (
  <div className="flex items-center space-x-8 px-6 whitespace-nowrap">
    <span className="flex items-center gap-2">
      <span className="text-[#FFC36A] font-serif italic text-base">अदम्यधावनम्</span>
      <span className="text-white font-black tracking-wider">ADAMYA DHĀVANAM 2026</span>
    </span>
    <span className="text-[#FFC36A] text-lg font-black drop-shadow-[0_0_8px_#FFC36A]">✦</span>
    
    <span className="bg-[#1749D1] text-white px-3 py-0.5 rounded-full font-bold text-xs tracking-wider">
      6 DECEMBER 2026
    </span>
    <span className="text-[#93c5fd] text-lg font-black">✦</span>

    <span className="text-white font-bold">NFSU GOA CAMPUS · PONDA</span>
    <span className="text-[#FFC36A] text-lg font-black drop-shadow-[0_0_8px_#FFC36A]">✦</span>

    <span className="text-[#FFC36A] font-extrabold tracking-wide">
      10K ELITE · 6K CHALLENGE · 3K FUN RUN
    </span>
    <span className="text-[#93c5fd] text-lg font-black">✦</span>

    <span className="text-white font-semibold">DAWN RACE · REPORTING 5:00 AM</span>
    <span className="text-[#FFC36A] text-lg font-black drop-shadow-[0_0_8px_#FFC36A]">✦</span>

    <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-0.5 rounded-full text-xs font-bold">
      BIB PICKUP: 4 &amp; 5 DEC
    </span>
    <span className="text-[#93c5fd] text-lg font-black">✦</span>

    <span className="text-white/90 font-medium">HELPDESK: +91 87886 29231</span>
    <span className="text-[#FFC36A] text-lg font-black drop-shadow-[0_0_8px_#FFC36A]">✦</span>
  </div>
);

// -------------------------------------------------------------------------
// 4. MAIN CINEMATIC FOOTER COMPONENT
// -------------------------------------------------------------------------
export interface CinematicFooterProps {
  giantText?: string;
  heading?: string;
  onOpenPortal?: (portal: 'participant' | 'admin') => void;
  brandName?: string;
}

export function CinematicFooter({
  giantText = "ADAMYADHAVANAM",
  heading = "Dare to run. Run to dare.",
  onOpenPortal,
  brandName = "NFSU Goa",
}: CinematicFooterProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    // React strict mode compatible GSAP context cleanup
    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.8, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // Staggered Content Reveal
      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 40%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      
      {/* 
        The "Curtain Reveal" Wrapper:
        It sits in standard flow. Because it has clip-path, its contents
        are ONLY visible within its bounding box. 
      */}
      <div
        ref={wrapperRef}
        className="relative h-screen w-full bg-[#111A17]"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        {/* The actual footer stays fixed to the viewport underneath everything */}
        <footer className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-[#111A17] text-white cinematic-footer-wrapper">
          
          {/* Ambient Light & Grid Background */}
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px] pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant background text */}
          <div
            ref={giantTextRef}
            className="footer-giant-bg-text absolute -bottom-[4vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none text-center font-serif uppercase"
          >
            {giantText}
          </div>

          {/* 
            1. PROMINENT, HIGH-VISIBILITY MARQUEE STRIP (Top of footer)
            - Increased z-index (z-30) to guarantee it sits above all elements
            - Rich obsidian glass with glowing golden borders & shadow
            - Crisp white & gold typography with live pulse indicator
          */}
          <div className="relative z-30 w-full overflow-hidden border-y-2 border-[#FFC36A]/50 bg-[#0E1714]/95 backdrop-blur-xl py-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(255,195,106,0.15)] mt-4 sm:mt-6">
            <div className="flex items-center">
              {/* Optional Fixed Sticky Badge on the left for context */}
              <div className="hidden lg:flex items-center gap-2 pl-6 pr-4 border-r border-white/10 shrink-0 z-10 bg-[#0E1714]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFC36A] animate-ping" />
                <span className="text-[11px] font-black tracking-widest text-[#FFC36A] uppercase">
                  RACE TICKER
                </span>
              </div>

              {/* Infinite Scrolling Content Track */}
              <div className="flex w-max animate-footer-scroll-marquee text-xs md:text-sm font-bold tracking-[0.2em] uppercase select-none cursor-pointer">
                <HighVisibilityMarqueeItem />
                <HighVisibilityMarqueeItem />
                <HighVisibilityMarqueeItem />
                <HighVisibilityMarqueeItem />
              </div>
            </div>
          </div>

          {/* 2. Main Center Content (With adequate top padding to prevent overlap) */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-4 pb-6 w-full max-w-5xl mx-auto">
            {/* Marathon Crest Badge */}
            <div className="flex items-center gap-2.5 mb-4 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs text-white/90 shadow-md backdrop-blur-md">
              <img src="/marathon-logo.png" alt="Marathon Crest" className="w-5 h-5 rounded-full object-contain" />
              <span className="font-semibold">National Forensic Sciences University · Goa Campus</span>
            </div>

            <h2
              ref={headingRef}
              className="text-3xl sm:text-5xl md:text-7xl font-black footer-text-glow tracking-tight mb-8 text-center font-serif italic leading-tight"
            >
              {heading}
            </h2>

            {/* Interactive Magnetic Pills Layout */}
            <div ref={linksRef} className="flex flex-col items-center gap-4 w-full">
              {/* Primary Marathon Actions */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
                <MagneticButton
                  as="a"
                  href={EVENT.googleFormUrl || "#contact"}
                  target={EVENT.googleFormUrl ? "_blank" : undefined}
                  rel={EVENT.googleFormUrl ? "noopener noreferrer" : undefined}
                  onClick={openRegistration}
                  className="footer-glass-pill px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-white font-bold text-sm md:text-base flex items-center gap-2.5 group bg-[#1749D1]/40 hover:bg-[#1749D1]/70 border-[#1749D1]"
                >
                  <span className="text-xl">🏃</span>
                  <span>Register Now (3K · 6K · 10K)</span>
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="https://wa.me/918788629231"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-glass-pill px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-white font-bold text-sm md:text-base flex items-center gap-2.5 group border-[#25D366]/50 hover:bg-[#25D366]/20"
                >
                  <span className="text-xl">💬</span>
                  <span>WhatsApp Helpdesk (+91 87886 29231)</span>
                </MagneticButton>
              </div>

              {/* Secondary Navigation Links */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 w-full mt-1">
                <MagneticButton
                  as="a"
                  href="#about"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    scrollToSection('#about');
                  }}
                  className="footer-glass-pill px-5 py-2 rounded-full text-white/70 font-medium text-xs md:text-sm hover:text-white"
                >
                  About Race
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="#categories"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    scrollToSection('#categories');
                  }}
                  className="footer-glass-pill px-5 py-2 rounded-full text-white/70 font-medium text-xs md:text-sm hover:text-white"
                >
                  Categories
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="#schedule"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    scrollToSection('#schedule');
                  }}
                  className="footer-glass-pill px-5 py-2 rounded-full text-white/70 font-medium text-xs md:text-sm hover:text-white"
                >
                  Race Day Schedule
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="#faqs"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    scrollToSection('#faqs');
                  }}
                  className="footer-glass-pill px-5 py-2 rounded-full text-white/70 font-medium text-xs md:text-sm hover:text-white"
                >
                  FAQs
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="#terms"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    scrollToSection('#terms');
                  }}
                  className="footer-glass-pill px-5 py-2 rounded-full text-white/70 font-medium text-xs md:text-sm hover:text-white"
                >
                  Terms &amp; Medical Waiver
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* 3. Bottom Bar / Credits */}
          <div className="relative z-20 w-full pb-6 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-white/50 text-[10px] md:text-xs font-semibold tracking-widest uppercase order-2 md:order-1">
              © 2026 ADAMYA DHĀVANAM · NFSU GOA. ALL RIGHTS RESERVED.
            </div>

            {/* "Made with Love" Badge */}
            <div className="footer-glass-pill px-5 py-2.5 rounded-full flex items-center gap-2 order-1 md:order-2 cursor-default border-white/10">
              <span className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-widest">Organised with</span>
              <span className="animate-footer-heartbeat text-sm md:text-base text-red-500">❤</span>
              <span className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-widest">by</span>
              <span className="text-[#FFC36A] font-black text-xs md:text-sm tracking-normal ml-1 font-serif italic">NFSU Goa</span>
            </div>

            {/* Back to top */}
            <MagneticButton
              as="button"
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full footer-glass-pill flex items-center justify-center text-white/70 hover:text-white group order-3"
              aria-label="Back to top"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            </MagneticButton>
          </div>
        </footer>
      </div>
    </>
  );
}
