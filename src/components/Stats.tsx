"use client";
import { STATS } from "@/data/content";
import Reveal from "./RevealOnScroll";

export default function Stats() {
  return (
    <div className="bg-[var(--w)]">
      <div className="content-w py-4 md:py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--w3)] rounded-2xl overflow-hidden shadow-[var(--shadow)]">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className={`px-5 py-6 md:py-8 ${s.highlight ? "bg-[var(--g)]" : "bg-white"}`}>
                <label className={`block text-[9px] tracking-[2px] uppercase mb-2 ${s.highlight ? "text-[rgba(20,20,16,.45)]" : "text-[var(--ml)]"}`}>
                  {s.label}
                </label>
                <strong className="block font-serif text-[32px] md:text-[36px] font-bold text-[var(--k)] leading-none">
                  {s.valor}
                </strong>
                <small className={`block text-[11px] mt-1 ${s.highlight ? "text-[rgba(20,20,16,.38)]" : "text-[var(--ml)]"}`}>
                  {s.sub}
                </small>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
