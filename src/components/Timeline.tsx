"use client";
import { useState } from "react";
import { TIMELINE } from "@/data/content";
import Reveal from "./RevealOnScroll";

export default function Timeline() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-13 px-6 bg-[var(--w)]">
      <Reveal>
        <p className="text-[10px] tracking-[3px] uppercase text-[var(--gd)] font-semibold mb-2.5 opacity-80">
          {TIMELINE.tag}
        </p>
      </Reveal>
      <Reveal>
        <h2 className="font-serif text-[clamp(32px,9vw,44px)] font-bold leading-[.97] tracking-[-1.5px] text-[var(--k)] mb-3">
          {TIMELINE.titulo}
          <br />
          <i className="text-[var(--b)] italic">{TIMELINE.tituloDestaque}</i>
        </h2>
      </Reveal>
      <Reveal>
        <p className="text-sm leading-[1.8] text-[var(--m)]">{TIMELINE.lead}</p>
      </Reveal>

      <Reveal>
        <div className="mt-8 relative">
          {/* Vertical line */}
          <div className="absolute left-[20px] top-2.5 bottom-0 w-px bg-[var(--w3)]" />

          {TIMELINE.etapas.map((etapa, i) => {
            const isAct = active === i;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="flex gap-4 pb-6.5 last:pb-0 cursor-pointer text-left w-full"
              >
                <div
                  className={`w-[42px] h-[42px] rounded-full border-[1.5px] flex items-center justify-center shrink-0 relative z-[1] transition-all duration-300 ${
                    isAct
                      ? "bg-[var(--g)] border-[var(--g)] scale-[1.08] shadow-[0_3px_14px_rgba(125,194,66,.28)]"
                      : "bg-[var(--w2)] border-[var(--w3)]"
                  }`}
                >
                  <span className={`font-serif text-base font-bold transition-colors ${isAct ? "text-[var(--k)]" : "text-[var(--ml)]"}`}>
                    {i + 1}
                  </span>
                </div>
                <div className="pt-2 flex-1">
                  <p className={`text-[9px] tracking-[2px] uppercase font-semibold mb-1 transition-colors ${isAct ? "text-[var(--gd)]" : "text-[var(--ml)]"}`}>
                    {etapa.semana}
                  </p>
                  <h3 className={`font-serif text-[17px] font-bold mb-0.5 transition-colors ${isAct ? "text-[var(--k)]" : "text-[var(--w4)]"}`}>
                    {etapa.titulo}
                  </h3>
                  <p className={`text-xs leading-[1.6] transition-colors ${isAct ? "text-[var(--m)]" : "text-[var(--w3)]"}`}>
                    {etapa.descricao}
                  </p>
                  <div
                    className="flex flex-wrap gap-1 overflow-hidden transition-all duration-400"
                    style={{ maxHeight: isAct ? 60 : 0, marginTop: isAct ? 8 : 0 }}
                  >
                    {etapa.tags.map((tag, j) => (
                      <span key={j} className="bg-[var(--gll)] text-[var(--gd)] text-[9px] font-semibold px-2 py-1 rounded-[10px] border border-[var(--gl)]">
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
    </section>
  );
}
