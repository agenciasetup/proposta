"use client";
import { useState } from "react";
import { TIMELINE } from "@/data/content";
import Reveal from "./RevealOnScroll";

export default function Timeline() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[var(--w)] py-16 md:py-24">
      <div className="content-w">
        <div className="lg:grid lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:items-start">
          {/* Left — header */}
          <div className="lg:sticky lg:top-24">
            <Reveal>
              <p className="text-[10px] tracking-[3px] uppercase text-[var(--gd)] font-semibold mb-2.5 opacity-80">
                {TIMELINE.tag}
              </p>
            </Reveal>
            <Reveal>
              <h2 className="font-serif text-[clamp(32px,7vw,52px)] font-bold leading-[.97] tracking-[-1.5px] text-[var(--k)] mb-4">
                {TIMELINE.titulo}
                <br />
                <i className="text-[var(--gd)] italic">{TIMELINE.tituloDestaque}</i>
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-[15px] leading-[1.8] text-[var(--m)] max-w-md">{TIMELINE.lead}</p>
            </Reveal>
          </div>

          {/* Right — timeline */}
          <Reveal>
            <div className="mt-8 lg:mt-0 relative">
              <div className="absolute left-[21px] top-2.5 bottom-0 w-px bg-[var(--w3)]" />

              {TIMELINE.etapas.map((etapa, i) => {
                const isAct = active === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="flex gap-5 pb-8 last:pb-0 cursor-pointer text-left w-full"
                  >
                    <div className={`w-[44px] h-[44px] rounded-full border-[1.5px] flex items-center justify-center shrink-0 relative z-[1] transition-all duration-300 ${isAct ? "bg-[var(--g)] border-[var(--g)] scale-[1.08] shadow-[0_3px_14px_rgba(229,229,67,.28)]" : "bg-[var(--w2)] border-[var(--w3)]"}`}>
                      <span className={`font-serif text-[17px] font-bold transition-colors ${isAct ? "text-[var(--k)]" : "text-[var(--ml)]"}`}>
                        {i + 1}
                      </span>
                    </div>
                    <div className="pt-2 flex-1">
                      <p className={`text-[9px] tracking-[2px] uppercase font-semibold mb-1 transition-colors ${isAct ? "text-[var(--gd)]" : "text-[var(--ml)]"}`}>
                        {etapa.semana}
                      </p>
                      <h3 className={`font-serif text-[18px] font-bold mb-1 transition-colors ${isAct ? "text-[var(--k)]" : "text-[var(--w4)]"}`}>
                        {etapa.titulo}
                      </h3>
                      <p className={`text-[13px] leading-[1.6] transition-colors ${isAct ? "text-[var(--m)]" : "text-[var(--w3)]"}`}>
                        {etapa.descricao}
                      </p>
                      <div className="flex flex-wrap gap-1.5 overflow-hidden transition-all duration-400" style={{ maxHeight: isAct ? 60 : 0, marginTop: isAct ? 10 : 0 }}>
                        {etapa.tags.map((tag, j) => (
                          <span key={j} className="bg-[var(--gll)] text-[var(--gd)] text-[10px] font-semibold px-2.5 py-1 rounded-[10px] border border-[var(--gl)]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
