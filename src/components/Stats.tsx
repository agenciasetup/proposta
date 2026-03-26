"use client";
import { STATS } from "@/data/content";
import Reveal from "./RevealOnScroll";

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-px bg-[var(--w3)]">
      {STATS.map((s, i) => (
        <Reveal key={i} delay={i * 0.07}>
          <div className={`px-4 py-5 ${s.highlight ? "bg-[var(--g)]" : "bg-[var(--w)]"}`}>
            <label className={`block text-[9px] tracking-[2px] uppercase mb-1.5 ${s.highlight ? "text-[rgba(20,20,16,.45)]" : "text-[var(--ml)]"}`}>
              {s.label}
            </label>
            <strong className="block font-serif text-[32px] font-bold text-[var(--k)] leading-none">
              {s.valor}
            </strong>
            <small className={`block text-[11px] mt-0.5 ${s.highlight ? "text-[rgba(20,20,16,.38)]" : "text-[var(--ml)]"}`}>
              {s.sub}
            </small>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
