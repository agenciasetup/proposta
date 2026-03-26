"use client";
import Image from "next/image";
import { HERO } from "@/data/content";
import Reveal from "./RevealOnScroll";

const chipColors = ["bossa", "dark", "bossa", "dark"];
const tagColors = ["bossa", "bossa", "dark", "dark", "bossa", "muted"];

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Warm off-white gradient with Bossa green glow */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(170deg, var(--off) 0%, var(--sand-light) 40%, var(--sand) 100%)" }}>
        <div className="content-w pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">

          {/* Bossa green glow */}
          <div className="absolute w-40 h-40 rounded-full pointer-events-none opacity-25" style={{ top: -30, right: 80, background: "radial-gradient(circle, var(--bossa) 0%, transparent 70%)" }} />

          {/* Decorative rings — Bossa green */}
          <div className="absolute border border-[var(--bossa)]/[.1] rounded-full pointer-events-none" style={{ width: 600, height: 600, top: -150, right: -200, animation: "spin 44s linear infinite" }} />
          <div className="absolute border border-[var(--k)]/[.04] rounded-full pointer-events-none" style={{ width: 360, height: 360, top: -40, right: -60, animation: "spin 28s linear infinite reverse" }} />
          <div className="absolute border border-[var(--bossa)]/[.06] rounded-full pointer-events-none hidden lg:block" style={{ width: 800, height: 800, top: -300, left: -300, animation: "spin 60s linear infinite" }} />

          {/* Dots */}
          <div className="absolute w-1.5 h-1.5 rounded-full bg-[var(--bossa)] opacity-50" style={{ top: "20%", left: "14%", animation: "blink 2.2s infinite" }} />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-[var(--k)] opacity-15" style={{ top: "55%", right: "10%", animation: "blink 2.2s infinite .7s" }} />
          <div className="absolute w-1 h-1 rounded-full bg-[var(--bossa)] opacity-30 hidden md:block" style={{ top: "35%", left: "50%", animation: "blink 3s infinite 1.2s" }} />

          {/* Copacabana wave pattern — bottom */}
          <svg className="absolute bottom-0 left-0 right-0 h-10 opacity-[.06] pointer-events-none" viewBox="0 0 400 20" preserveAspectRatio="none">
            <pattern id="hero-copa" width="40" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,10 Q10,0 20,10 Q30,20 40,10" fill="none" stroke="var(--k)" strokeWidth="1.5" />
            </pattern>
            <rect width="400" height="20" fill="url(#hero-copa)" />
          </svg>

          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left */}
            <div>
              <Reveal delay={0.07}>
                <h1 className="font-serif text-[clamp(52px,12vw,88px)] font-bold leading-[.90] tracking-[-3px] mb-6 md:mb-8">
                  <span className="block text-[var(--k)]">{HERO.titulo.l1}</span>
                  <span className="block text-[var(--bossa)] italic">{HERO.titulo.l2}</span>
                  <span className="block text-[var(--k)]/15">{HERO.titulo.l3}</span>
                </h1>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="text-[15px] leading-[1.8] text-[var(--m)] max-w-[380px] mb-8 md:text-base md:max-w-[420px]">
                  {HERO.subtitulo}
                </p>
              </Reveal>

              <Reveal delay={0.21}>
                <div className="flex flex-wrap gap-2.5">
                  {HERO.chips.map((chip, i) => {
                    const c = chipColors[i % chipColors.length];
                    const cls = {
                      bossa: "bg-[var(--bossa)]/15 border-[var(--bossa)]/30 text-[var(--bossa-dark)]",
                      dark: "bg-[var(--k)]/5 border-[var(--k)]/10 text-[var(--k)]/60",
                    }[c];
                    return <span key={i} className={`px-4 py-2 rounded-full text-[12px] font-medium border ${cls}`}>{chip}</span>;
                  })}
                </div>
              </Reveal>
            </div>

            {/* Right — moto image (desktop) */}
            <div className="hidden lg:flex lg:justify-center">
              <Reveal delay={0.28}>
                <Image
                  src="/moto.png"
                  alt="Bossa Elétrica"
                  width={500}
                  height={500}
                  className="w-full max-w-[460px] h-auto drop-shadow-[0_12px_40px_rgba(20,20,16,.12)]"
                  priority
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile moto + greeting card */}
      <div className="bg-[var(--w)] px-6 -mt-6 rounded-t-[20px] relative z-10 pb-12 lg:hidden">
        <Reveal>
          <div className="flex justify-center -mt-8 mb-4">
            <Image
              src="/moto.png"
              alt="Bossa Elétrica"
              width={320}
              height={320}
              className="w-[70%] max-w-[280px] h-auto drop-shadow-[0_8px_24px_rgba(20,20,16,.1)]"
              priority
            />
          </div>
        </Reveal>

        <Reveal delay={0.07}>
          <div className="bg-white rounded-2xl p-5 shadow-[var(--shadow)] border border-[var(--k)]/5 max-w-lg mx-auto">
            <p className="text-[13px] text-[var(--m)] leading-[1.7] mb-4">
              {HERO.greeting.split("Entendemos o que a Bossa precisa").map((part, i) =>
                i === 0 ? <span key={i}>{part}<b className="text-[var(--k)] font-medium">Entendemos o que a Bossa precisa</b></span> : <span key={i}>{part}</span>
              )}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {HERO.tags.map((tag, i) => {
                const c = tagColors[i % tagColors.length];
                const cls = {
                  bossa: "bg-[var(--bossa)]/15 text-[var(--bossa-dark)] border-[var(--bossa)]/25",
                  dark: "bg-[var(--k)]/5 text-[var(--k)]/50 border-[var(--k)]/10",
                  muted: "bg-[var(--w2)] text-[var(--m)] border-[var(--w3)]",
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
