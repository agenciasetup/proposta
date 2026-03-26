"use client";
import { HERO } from "@/data/content";
import Reveal from "./RevealOnScroll";

const chipColors = ["ocean", "green", "sunset", "sky"];
const tagColors = ["green", "green", "ocean", "ocean", "sunset", "neutral"];

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Beach gradient section — full bleed */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(170deg, var(--sky-light) 0%, var(--sky-soft) 25%, var(--sand-light) 55%, var(--sand) 100%)" }}>
        <div className="content-w pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">

          {/* Sun glow */}
          <div className="absolute w-32 h-32 rounded-full pointer-events-none opacity-40" style={{ top: -20, right: 60, background: "radial-gradient(circle, var(--sunset) 0%, transparent 70%)" }} />

          {/* Decorative rings — ocean tones */}
          <div className="absolute border border-[var(--ocean)]/[.08] rounded-full pointer-events-none" style={{ width: 600, height: 600, top: -150, right: -200, animation: "spin 44s linear infinite" }} />
          <div className="absolute border border-[var(--ocean)]/[.12] rounded-full pointer-events-none" style={{ width: 360, height: 360, top: -40, right: -60, animation: "spin 28s linear infinite reverse" }} />
          <div className="absolute border border-[var(--sky)]/[.08] rounded-full pointer-events-none hidden lg:block" style={{ width: 800, height: 800, top: -300, left: -300, animation: "spin 60s linear infinite" }} />

          {/* Dots — warm beach tones */}
          <div className="absolute w-1.5 h-1.5 rounded-full bg-[var(--ocean)] opacity-40" style={{ top: "20%", left: "14%", animation: "blink 2.2s infinite" }} />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-[var(--sunset)] opacity-40" style={{ top: "55%", right: "10%", animation: "blink 2.2s infinite .7s" }} />
          <div className="absolute w-1 h-1 rounded-full bg-[var(--y)] opacity-30 hidden md:block" style={{ top: "35%", left: "50%", animation: "blink 3s infinite 1.2s" }} />

          {/* Copacabana wave pattern — bottom */}
          <svg className="absolute bottom-0 left-0 right-0 h-10 opacity-[.08] pointer-events-none" viewBox="0 0 400 20" preserveAspectRatio="none">
            <pattern id="hero-copa" width="40" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,10 Q10,0 20,10 Q30,20 40,10" fill="none" stroke="var(--ocean-deep)" strokeWidth="1.5" />
            </pattern>
            <rect width="400" height="20" fill="url(#hero-copa)" />
          </svg>

          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left */}
            <div>
              <Reveal>
                <div className="flex items-center gap-2 mb-6 md:mb-8">
                  <div className="w-[6px] h-[6px] rounded-full bg-[var(--ocean)]" style={{ animation: "blink 1.5s infinite" }} />
                  <span className="text-[11px] tracking-[2.5px] uppercase text-[var(--ocean)]/75">{HERO.pill}</span>
                </div>
              </Reveal>

              <Reveal delay={0.07}>
                <h1 className="font-serif text-[clamp(52px,12vw,88px)] font-bold leading-[.90] tracking-[-3px] mb-6 md:mb-8">
                  <span className="block text-[var(--ocean-deep)]">{HERO.titulo.l1}</span>
                  <span className="block text-[var(--sunset)] italic">{HERO.titulo.l2}</span>
                  <span className="block text-[var(--sand-dark)]">{HERO.titulo.l3}</span>
                </h1>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="text-[15px] leading-[1.8] text-[var(--ocean-deep)]/55 max-w-[380px] mb-8 md:text-base md:max-w-[420px]">
                  {HERO.subtitulo}
                </p>
              </Reveal>

              <Reveal delay={0.21}>
                <div className="flex flex-wrap gap-2.5">
                  {HERO.chips.map((chip, i) => {
                    const c = chipColors[i % chipColors.length];
                    const cls = {
                      ocean: "bg-[var(--ocean)]/10 border-[var(--ocean)]/25 text-[var(--ocean)]",
                      green: "bg-[var(--gd)]/10 border-[var(--gd)]/25 text-[var(--gd)]",
                      sunset: "bg-[var(--sunset)]/15 border-[var(--sunset)]/30 text-[var(--sunset-warm)]",
                      sky: "bg-[var(--sky)]/10 border-[var(--sky)]/25 text-[var(--sky)]",
                    }[c];
                    return <span key={i} className={`px-4 py-2 rounded-full text-[12px] font-medium border ${cls}`}>{chip}</span>;
                  })}
                </div>
              </Reveal>
            </div>

            {/* Right card — desktop only */}
            <div className="hidden lg:block">
              <Reveal delay={0.28}>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[var(--sand-dark)]/20 shadow-[0_4px_24px_rgba(27,154,170,.08)]">
                  <p className="text-[14px] text-[var(--ocean-deep)]/65 leading-[1.7] mb-5">
                    {HERO.greeting.split("Entendemos o que a Bossa precisa").map((part, i) =>
                      i === 0 ? <span key={i}>{part}<b className="text-[var(--ocean)] font-medium">Entendemos o que a Bossa precisa</b></span> : <span key={i}>{part}</span>
                    )}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {HERO.tags.map((tag, i) => {
                      const c = tagColors[i % tagColors.length];
                      const cls = {
                        green: "bg-[var(--gll)] text-[var(--gd)] border-[var(--gl)]",
                        ocean: "bg-[var(--sky-soft)]/40 text-[var(--ocean)] border-[var(--sky-soft)]",
                        sunset: "bg-[var(--sunset)]/15 text-[var(--sunset-warm)] border-[var(--sunset)]/30",
                        neutral: "bg-[var(--sand)] text-[var(--ocean-deep)]/60 border-[var(--sand-dark)]",
                      }[c];
                      return <span key={i} className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold border ${cls}`}>{tag}</span>;
                    })}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* Light card — mobile/tablet only */}
      <div className="bg-[var(--w)] px-6 -mt-6 rounded-t-[20px] relative z-10 pb-12 lg:hidden">
        <Reveal>
          <div className="bg-white rounded-2xl p-5 shadow-[var(--shadow)] border border-[var(--sand-dark)]/20 max-w-lg mx-auto">
            <p className="text-[13px] text-[var(--m)] leading-[1.7] mb-4">
              {HERO.greeting.split("Entendemos o que a Bossa precisa").map((part, i) =>
                i === 0 ? <span key={i}>{part}<b className="text-[var(--ocean-deep)] font-medium">Entendemos o que a Bossa precisa</b></span> : <span key={i}>{part}</span>
              )}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {HERO.tags.map((tag, i) => {
                const c = tagColors[i % tagColors.length];
                const cls = {
                  green: "bg-[var(--gll)] text-[var(--gd)] border-[var(--gl)]",
                  ocean: "bg-[var(--sky-soft)]/40 text-[var(--ocean)] border-[var(--sky-soft)]",
                  sunset: "bg-[var(--sunset)]/15 text-[var(--sunset-warm)] border-[var(--sunset)]/30",
                  neutral: "bg-[var(--sand)] text-[var(--ocean-deep)]/60 border-[var(--sand-dark)]",
                }[c];
                return <span key={i} className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold border ${cls}`}>{tag}</span>;
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
