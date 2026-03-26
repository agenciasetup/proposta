"use client";
import Reveal from "./RevealOnScroll";

export default function Prazo() {
  return (
    <div className="bg-[var(--y)]">
      <div className="content-w py-16 md:py-24">
        <Reveal>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <p className="text-[9px] tracking-[3px] uppercase font-semibold text-[rgba(20,20,16,.35)] mb-2.5">
                Sem enrolação
              </p>
              <h3 className="font-serif text-[clamp(28px,6vw,48px)] font-bold text-[var(--k)] leading-[1.05] tracking-[-1px] mb-4">
                Em 45 dias, o site está no ar.
              </h3>
              <p className="text-[14px] text-[rgba(20,20,16,.5)] leading-[1.75] max-w-md">
                Acompanhamento semanal e aprovação em cada etapa. Você não fica no escuro, cada entrega é validada antes da próxima começar.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:flex lg:justify-end">
              <div className="flex items-baseline gap-3">
                <strong className="font-serif text-[clamp(84px,18vw,140px)] font-bold text-[var(--k)] leading-none tracking-[-4px]">
                  45
                </strong>
                <div className="flex flex-col">
                  <span className="text-[12px] text-[rgba(20,20,16,.35)] uppercase tracking-[2px]">dias</span>
                  <span className="text-[12px] text-[rgba(20,20,16,.35)] uppercase tracking-[2px]">corridos</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
