"use client";
import { useState } from "react";
import { ENTREGAS } from "@/data/content";
import Reveal from "./RevealOnScroll";

const colorMap: Record<string, string> = {
  green: "bg-[var(--gll)]",
  blue: "bg-[var(--bl)]",
  yellow: "bg-[#fafacc]",
  pink: "bg-[#fce4ec]",
};

export default function Entregas() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-13 px-6 bg-[var(--w2)]">
      <Reveal>
        <p className="text-[10px] tracking-[3px] uppercase text-[var(--gd)] font-semibold mb-2.5 opacity-80">
          {ENTREGAS.tag}
        </p>
      </Reveal>
      <Reveal>
        <h2 className="font-serif text-[clamp(32px,9vw,44px)] font-bold leading-[.97] tracking-[-1.5px] text-[var(--k)] mb-3">
          {ENTREGAS.titulo}
          <br />
          <i className="text-[var(--b)] italic">{ENTREGAS.tituloDestaque}</i>
        </h2>
      </Reveal>
      <Reveal>
        <p className="text-sm leading-[1.8] text-[var(--m)]">{ENTREGAS.lead}</p>
      </Reveal>

      <div className="mt-8 flex flex-col gap-1">
        {ENTREGAS.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={i} delay={i * 0.05}>
              <div className="bg-white rounded-[14px] overflow-hidden shadow-[var(--shadow)] border border-[var(--w3)] transition-all duration-200 cursor-pointer">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full px-4 py-4 flex items-center gap-3 text-left cursor-pointer group"
                >
                  <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center text-[19px] shrink-0 transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110 ${colorMap[item.colorClass]}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-base font-bold text-[var(--k)] mb-0.5">{item.titulo}</h3>
                    <p className="text-[11px] text-[var(--ml)]">{item.subtitulo}</p>
                  </div>
                  <span className={`accordion-arrow ${isOpen ? "open" : ""}`}>↓</span>
                </button>
                <div className={`accordion-body ${isOpen ? "open" : ""}`}>
                  <div className="px-4 pb-4">
                    <p className="text-xs text-[var(--m)] leading-[1.7] mb-3">{item.descricao}</p>
                    <div className="flex flex-wrap gap-1">
                      {item.chips.map((chip, j) => (
                        <span key={j} className="text-[9px] font-medium px-2.5 py-1 rounded-full bg-[var(--w2)] text-[var(--m)] border border-[var(--w3)]">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
