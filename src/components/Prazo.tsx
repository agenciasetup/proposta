"use client";
import Reveal from "./RevealOnScroll";

export default function Prazo() {
  return (
    <div className="bg-[var(--y)] px-6 py-10">
      <Reveal>
        <p className="text-[9px] tracking-[3px] uppercase font-semibold text-[rgba(20,20,16,.35)] mb-2.5">
          Sem enrolação
        </p>
        <h3 className="font-serif text-[clamp(26px,8vw,38px)] font-bold text-[var(--k)] leading-[1.05] tracking-[-1px] mb-2.5">
          Em 45 dias, o site está no ar.
        </h3>
        <p className="text-[13px] text-[rgba(20,20,16,.5)] leading-[1.75] mb-6">
          Acompanhamento semanal e aprovação em cada etapa. Você não fica no escuro, cada entrega é validada antes da próxima começar.
        </p>
        <div className="flex items-baseline gap-1.5">
          <strong className="font-serif text-[84px] font-bold text-[var(--k)] leading-none tracking-[-3px]">
            45
          </strong>
          <div className="flex flex-col">
            <span className="text-[10px] text-[rgba(20,20,16,.35)] uppercase tracking-[1.5px]">dias</span>
            <span className="text-[10px] text-[rgba(20,20,16,.35)] uppercase tracking-[1.5px]">corridos</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
