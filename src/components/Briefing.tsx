"use client";
import { useState } from "react";
import { BRIEFING } from "@/data/content";
import Reveal from "./RevealOnScroll";

export default function Briefing() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[var(--w)] py-16 md:py-24">
      <div className="content-w">
        <div className="lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:items-start">
          {/* Left — header (sticky on desktop) */}
          <div className="lg:sticky lg:top-24">
            <Reveal>
              <p className="text-[10px] tracking-[3px] uppercase text-[var(--gd)] font-semibold mb-2.5 opacity-80">
                {BRIEFING.tag}
              </p>
            </Reveal>
            <Reveal>
              <h2 className="font-serif text-[clamp(32px,7vw,52px)] font-bold leading-[.97] tracking-[-1.5px] text-[var(--k)] mb-4">
                {BRIEFING.titulo}
                <br />
                <i className="text-[var(--b)] italic">{BRIEFING.tituloDestaque}</i> {BRIEFING.tituloFim}
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-[15px] leading-[1.8] text-[var(--m)] max-w-md">{BRIEFING.lead}</p>
            </Reveal>
          </div>

          {/* Right — accordions */}
          <div className="mt-8 lg:mt-0 flex flex-col gap-2">
            {BRIEFING.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={i} delay={i * 0.05}>
                  <div className={`bg-white rounded-2xl overflow-hidden shadow-[var(--shadow)] border border-[var(--w3)] transition-all duration-200 ${isOpen ? "shadow-lg" : ""}`}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full px-5 py-5 flex items-center gap-4 text-left cursor-pointer relative group"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-[22px] shrink-0 transition-transform duration-300 group-hover:rotate-[-7deg] group-hover:scale-110"
                        style={{ background: item.iconBg }}
                      >
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-[17px] font-bold text-[var(--k)] mb-0.5">{item.titulo}</h3>
                        <p className="text-[12px] text-[var(--ml)]">{item.subtitulo}</p>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <span className={`accordion-arrow ${isOpen ? "open" : ""}`}>↓</span>
                        {!isOpen && i === 0 && <span className="float-hint text-[8px]">toque</span>}
                      </div>
                    </button>
                    <div className={`accordion-body ${isOpen ? "open" : ""}`}>
                      <div className="px-5 pb-5 pt-1">
                        <p className="text-[13px] text-[var(--m)] leading-[1.7]">{item.descricao}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
