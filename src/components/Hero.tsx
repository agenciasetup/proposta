"use client";
import { HERO } from "@/data/content";
import Reveal from "./RevealOnScroll";

const chipColors = ["g", "b", "y", "n"];
const tagColors = ["green", "green", "blue", "blue", "yellow", "neutral"];

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Dark section */}
      <div className="bg-[var(--k)] px-6 pt-11 pb-16 relative overflow-hidden">
        {/* Rings */}
        <div
          className="absolute border border-[rgba(125,194,66,.1)] rounded-full pointer-events-none"
          style={{ width: 400, height: 400, top: -80, right: -120, animation: "spin 44s linear infinite" }}
        />
        <div
          className="absolute border border-[rgba(125,194,66,.15)] rounded-full pointer-events-none"
          style={{ width: 240, height: 240, top: -20, right: -40, animation: "spin 28s linear infinite reverse" }}
        />
        {/* Dots */}
        <div className="absolute w-1 h-1 rounded-full bg-[var(--g)] opacity-50" style={{ top: "20%", left: "14%", animation: "blink 2.2s infinite" }} />
        <div className="absolute w-1 h-1 rounded-full bg-[var(--g)] opacity-50" style={{ top: "55%", right: "10%", animation: "blink 2.2s infinite .7s" }} />

        <Reveal>
          <div className="flex items-center gap-2 mb-5">
            <div className="w-[5px] h-[5px] rounded-full bg-[var(--g)]" style={{ animation: "blink 1.5s infinite" }} />
            <span className="text-[10px] tracking-[2.5px] uppercase text-[rgba(125,194,66,.75)]">
              {HERO.pill}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.07}>
          <h1 className="font-serif text-[clamp(46px,13vw,64px)] font-bold leading-[.92] tracking-[-2px] mb-4">
            <span className="block text-[var(--w)]">{HERO.titulo.l1}</span>
            <span className="block text-[var(--y)] italic">{HERO.titulo.l2}</span>
            <span className="block text-[rgba(246,244,238,.22)]">{HERO.titulo.l3}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="text-sm leading-[1.8] text-[rgba(246,244,238,.45)] max-w-[300px] mb-8">
            {HERO.subtitulo}
          </p>
        </Reveal>

        <Reveal delay={0.21}>
          <div className="flex flex-wrap gap-2">
            {HERO.chips.map((chip, i) => {
              const c = chipColors[i % chipColors.length];
              const cls = {
                g: "bg-[rgba(125,194,66,.13)] border-[rgba(125,194,66,.25)] text-[var(--g)]",
                b: "bg-[rgba(26,74,122,.3)] border-[rgba(26,74,122,.45)] text-[#7BAAD4]",
                y: "bg-[rgba(240,224,48,.1)] border-[rgba(240,224,48,.2)] text-[var(--y)]",
                n: "bg-[rgba(246,244,238,.06)] border-[rgba(246,244,238,.1)] text-[rgba(246,244,238,.35)]",
              }[c];
              return (
                <span key={i} className={`px-3.5 py-1.5 rounded-full text-[11px] font-medium border ${cls}`}>
                  {chip}
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>

      {/* Light card */}
      <div className="bg-[var(--w)] px-6 -mt-6 rounded-t-[20px] relative z-10 pb-12">
        <Reveal>
          <div className="bg-white rounded-2xl p-5 shadow-[var(--shadow)] border border-[var(--w3)]">
            <p className="text-[13px] text-[var(--m)] leading-[1.7] mb-4">
              {HERO.greeting.split("Entendemos o que a Bossa precisa").map((part, i) =>
                i === 0 ? (
                  <span key={i}>
                    {part}
                    <b className="text-[var(--k)] font-medium">Entendemos o que a Bossa precisa</b>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {HERO.tags.map((tag, i) => {
                const c = tagColors[i % tagColors.length];
                const cls = {
                  green: "bg-[var(--gll)] text-[var(--gd)] border-[var(--gl)]",
                  blue: "bg-[var(--bl)] text-[var(--b)] border-[#c0d8f0]",
                  yellow: "bg-[#fafacc] text-[var(--ydk)] border-[#e8e040]",
                  neutral: "bg-[var(--w2)] text-[var(--m)] border-[var(--w3)]",
                }[c];
                return (
                  <span key={i} className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold border ${cls}`}>
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
