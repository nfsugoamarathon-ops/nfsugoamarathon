"use client";

import { CinematicFooter } from "@/components/ui/motion-footer";

export default function Demo() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans selection:bg-white/20 overflow-x-hidden">
      {/* 
        MAIN CONTENT AREA 
        We use a high z-index and minimum height to allow the user 
        to scroll down and reveal the footer securely underneath.
      */}
      <main className="relative z-10 w-full min-h-[120vh] bg-[#FFFCEB] flex flex-col items-center justify-center text-[#191A17] border-b border-[#DADBCF] shadow-md rounded-b-3xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(23,73,209,0.06)_0%,transparent_60%)] pointer-events-none" />
        
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-[#686D66] mb-8 uppercase text-center px-4 font-serif">
          Scroll down to reveal
        </h1>
        
        <div className="w-[1px] h-32 bg-gradient-to-b from-[#686D66] to-transparent" />
      </main>

      {/* The Cinematic Footer is injected here */}
      <CinematicFooter />
    </div>
  );
}

