"use client";
import { HERO } from "@/data/content";
import Reveal from "./RevealOnScroll";

const chipColors = ["g", "b", "y", "n"];
const tagColors = ["green", "green", "blue", "blue", "yellow", "neutral"];

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Dark section — full bleed */}
      <div className="bg-[var(--k)] relative overflow-hidden">
        <div className="content-w pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
          {/* Rings */}
          <div className="absolute border border-[rgba(125,194,66,.08)] rounded-full pointer-events-none" style={{ width: 600, height: 600, top: -150, right: -200, animation: "spin 44s linear infinite" }} />
          <div className="absolute border border-[rgba(125,194,66,.12)] rounded-full pointer-events-none" style={{ width: 360, height: 360, top: -40, right: -60, animation: "spin 28s linear infinite reverse" }} />
          <div className="absolute border border-[rgba(125,194,66,.05)] rounded-full pointer-events-none hidden lg:block" style={{ width: 800, height: 800, top: -300, left: -300, animation: "spin 60s linear infinite" }} />
          {/* Dots */}
          <div className="absolute w-1.5 h-1.5 rounded-full bg-[var(--g)] opacity-50" style={{ top: "20%", left: "14%", animation: "blink 2.2s infinite" }} />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-[var(--g)] opacity-50" style={{ top: "55%", right: "10%", animation: "blink 2.2s infinite .7s" }} />
          <div className="absolute w-1 h-1 rounded-full bg-[var(--y)] opacity-30 hidden md:block" style={{ top: "35%", left: "50%", animation: "blink 3s infinite 1.2s" }} />

          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left */}
            <div>
              <Reveal>
                <div className="flex items-center gap-2 mb-6 md:mb-8">
                  <div className="w-[6px] h-[6px] rounded-full bg-[var(--g)]" style={{ animation: "blink 1.5s infinite" }} />
                  <span className="text-[11px] tracking-[2.5px] uppercase text-[rgba(125,194,66,.75)]">{HERO.pill}</span>
                </div>
              </Reveal>

              <Reveal delay={0.07}>
                <h1 className="font-serif text-[clamp(52px,12vw,88px)] font-bold leading-[.90] tracking-[-3px] mb-6 md:mb-8">
                  <span className="block text-[var(--w)]">{HERO.titulo.l1}</span>
                  <span className="block text-[var(--y)] italic">{HERO.titulo.l2}</span>
                  <span className="block text-[rgba(246,244,238,.18)]">{HERO.titulo.l3}</span>
                </h1>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="text-[15px] leading-[1.8] text-[rgba(246,244,238,.45)] max-w-[380px] mb-8 md:text-base md:max-w-[420px]">
                  {HERO.subtitulo}
                </p>
              </Reveal>

              <Reveal delay={0.21}>
                <div className="flex flex-wrap gap-2.5">
                  {HERO.chips.map((chip, i) => {
                    const c = chipColors[i % chipColors.length];
                    const cls = { g: "bg-[rgba(125,194,66,.13)] border-[rgba(125,194,66,.25)] text-[var(--g)]", b: "bg-[rgba(26,74,122,.3)] border-[rgba(26,74,122,.45)] text-[#7BAAD4]", y: "bg-[rgba(240,224,48,.1)] border-[rgba(240,224,48,.2)] text-[var(--y)]", n: "bg-[rgba(246,244,238,.06)] border-[rgba(246,244,238,.1)] text-[rgba(246,244,238,.35)]" }[c];
                    return <span key={i} className={`px-4 py-2 rounded-full text-[12px] font-medium border ${cls}`}>{chip}</span>;
                  })}
                </div>
              </Reveal>
            </div>

            {/* Right card — desktop only inside hero */}
            <div className="hidden lg:block">
              <Reveal delay={0.28}>
                <div className="bg-white/[.07] backdrop-blur-sm rounded-2xl p-6 border border-[rgba(246,244,238,.08)]">
                  <p className="text-[14px] text-[rgba(246,244,238,.55)] leading-[1.7] mb-5">
                    {HERO.greeting.split("Entendemos o que a Bossa precisa").map((part, i) =>
                      i === 0 ? <span key={i}>{part}<b className="text-[var(--g)] font-medium">Entendemos o que a Bossa precisa</b></span> : <span key={i}>{part}</span>
                    )}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {HERO.tags.map((tag, i) => {
                      const c = tagColors[i % tagColors.length];
                      const cls = { green: "bg-[rgba(125,194,66,.12)] text-[var(--g)] border-[rgba(125,194,66,.2)]", blue: "bg-[rgba(26,74,122,.2)] text-[#7BAAD4] border-[rgba(26,74,122,.3)]", yellow: "bg-[rgba(240,224,48,.08)] text-[var(--y)] border-[rgba(240,224,48,.15)]", neutral: "bg-[rgba(246,244,238,.06)] text-[rgba(246,244,238,.4)] border-[rgba(246,244,238,.1)]" }[c];
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
          <div className="bg-white rounded-2xl p-5 shadow-[var(--shadow)] border border-[var(--w3)] max-w-lg mx-auto">
            <p className="text-[13px] text-[var(--m)] leading-[1.7] mb-4">
              {HERO.greeting.split("Entendemos o que a Bossa precisa").map((part, i) =>
                i === 0 ? <span key={i}>{part}<b className="text-[var(--k)] font-medium">Entendemos o que a Bossa precisa</b></span> : <span key={i}>{part}</span>
              )}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {HERO.tags.map((tag, i) => {
                const c = tagColors[i % tagColors.length];
                const cls = { green: "bg-[var(--gll)] text-[var(--gd)] border-[var(--gl)]", blue: "bg-[var(--bl)] text-[var(--b)] border-[#c0d8f0]", yellow: "bg-[#fafacc] text-[var(--ydk)] border-[#e8e040]", neutral: "bg-[var(--w2)] text-[var(--m)] border-[var(--w3)]" }[c];
                return <span key={i} className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold border ${cls}`}>{tag}</span>;
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
