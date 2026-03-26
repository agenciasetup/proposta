"use client";
import { useState, useMemo } from "react";
import { PRICING } from "@/data/pricing";
import { buildWhatsAppURL, type PaymentMode } from "@/lib/whatsapp";
import Reveal from "./RevealOnScroll";

function fmt(val: number) {
  return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });
}

export default function Pricing() {
  const [mode, setMode] = useState<PaymentMode>("avista");
  const [parcelaEntrada, setParcelaEntrada] = useState(1);
  const [parcelaFinal, setParcelaFinal] = useState(1);
  const [manutencao, setManutencao] = useState(false);
  const [showParcelaEntrada, setShowParcelaEntrada] = useState(false);
  const [showParcelaFinal, setShowParcelaFinal] = useState(false);

  const total = PRICING.total;
  const desconto = total * PRICING.descontoAVista;
  const valorAVista = total - desconto;
  const metade = total / 2;

  const jurosEntrada = PRICING.parcelamento.find((p) => p.vezes === parcelaEntrada)?.juros ?? 0;
  const jurosFinal = PRICING.parcelamento.find((p) => p.vezes === parcelaFinal)?.juros ?? 0;
  const totalEntrada = metade * (1 + jurosEntrada);
  const totalFinal = metade * (1 + jurosFinal);

  const whatsappUrl = useMemo(
    () =>
      buildWhatsAppURL({
        mode,
        parcelaEntrada: mode === "parcelado" ? parcelaEntrada : undefined,
        parcelaFinal: mode === "parcelado" ? parcelaFinal : undefined,
        manutencao,
      }),
    [mode, parcelaEntrada, parcelaFinal, manutencao]
  );

  return (
    <section className="py-13 px-6 bg-[var(--w2)]">
      <Reveal>
        <p className="text-[10px] tracking-[3px] uppercase text-[var(--gd)] font-semibold mb-2.5 opacity-80">
          Investimento
        </p>
      </Reveal>
      <Reveal>
        <h2 className="font-serif text-[clamp(32px,9vw,44px)] font-bold leading-[.97] tracking-[-1.5px] text-[var(--k)] mb-3">
          Transparente do
          <br />
          início <i className="text-[var(--b)] italic">ao fim</i>
        </h2>
      </Reveal>
      <Reveal>
        <p className="text-sm leading-[1.8] text-[var(--m)] mb-6">
          Escolha a forma de pagamento que funciona melhor para você.
        </p>
      </Reveal>

      {/* ========== VALOR TOTAL ========== */}
      <Reveal>
        <div className="bg-[var(--k)] rounded-2xl p-6 text-center mb-4 relative overflow-hidden">
          <div className="absolute -top-2 -right-1.5 font-serif text-[84px] font-bold opacity-5 text-white leading-none pointer-events-none">
            $
          </div>
          <p className="text-[9px] tracking-[2.5px] uppercase font-semibold text-[rgba(246,244,238,.3)] mb-3">
            Valor total do projeto
          </p>
          <div className="font-serif text-[52px] font-bold text-white leading-none tracking-[-1px] mb-1">
            {fmt(total)}
          </div>
          <p className="text-xs text-[rgba(246,244,238,.3)]">
            Veja as condições abaixo
          </p>
        </div>
      </Reveal>

      {/* ========== TABS ========== */}
      <Reveal delay={0.07}>
        <div className="tab-selector mb-4">
          <button
            className={`tab-btn ${mode === "avista" ? "active" : ""}`}
            onClick={() => setMode("avista")}
          >
            {mode !== "avista" && <span className="badge">-{PRICING.descontoAVista * 100}%</span>}
            💰 À vista
            {mode === "avista" && (
              <span className="block text-[10px] text-[var(--gd)] font-bold mt-0.5">
                {PRICING.descontoAVista * 100}% de desconto
              </span>
            )}
          </button>
          <button
            className={`tab-btn ${mode === "parcelado" ? "active" : ""}`}
            onClick={() => setMode("parcelado")}
          >
            📋 50 / 50
            {mode === "parcelado" && (
              <span className="block text-[10px] text-[var(--b)] font-bold mt-0.5">
                Podendo parcelar cada metade
              </span>
            )}
          </button>
        </div>
      </Reveal>

      {/* ========== À VISTA CONTENT ========== */}
      {mode === "avista" && (
        <Reveal>
          <div className="bg-[var(--g)] rounded-2xl p-6 relative overflow-hidden mb-4">
            <div className="absolute -top-2 -right-1.5 font-serif text-[84px] font-bold opacity-5 text-[var(--k)] leading-none pointer-events-none">
              ✓
            </div>
            <span className="text-[9px] tracking-[2.5px] uppercase font-semibold text-[rgba(20,20,16,.4)] block mb-3">
              Pagamento único
            </span>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-serif text-[44px] font-bold text-[var(--k)] leading-none tracking-[-0.5px]">
                {fmt(valorAVista)}
              </span>
            </div>
            <p className="text-xs text-[rgba(20,20,16,.5)] mb-1">
              <span className="line-through opacity-60">{fmt(total)}</span>{" "}
              <span className="font-semibold text-[var(--k)]">→ economia de {fmt(desconto)}</span>
            </p>
            <div className="mt-5 flex flex-col gap-2">
              {[
                "Projeto completo entregue em 45 dias",
                "Design aprovado antes de codar",
                "Todas as integrações ativas",
                "Treinamento + 30 dias de suporte",
              ].map((item, i) => (
                <div key={i} className="flex gap-2 items-start text-xs text-[rgba(20,20,16,.6)]">
                  <span className="text-[rgba(20,20,16,.8)] font-bold shrink-0">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {/* ========== 50/50 CONTENT ========== */}
      {mode === "parcelado" && (
        <>
          {/* ENTRADA */}
          <Reveal>
            <div className="bg-[var(--k)] rounded-2xl p-5 relative overflow-hidden mb-3">
              <div className="absolute -top-2 -right-1.5 font-serif text-[84px] font-bold opacity-5 text-white leading-none pointer-events-none">
                50%
              </div>
              <span className="text-[9px] tracking-[2.5px] uppercase font-semibold text-[rgba(246,244,238,.3)] block mb-3">
                Entrada — na assinatura
              </span>

              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="font-serif text-[36px] font-bold text-white leading-none tracking-[-0.5px]">
                    {parcelaEntrada === 1
                      ? fmt(metade)
                      : `${parcelaEntrada}× ${fmt(totalEntrada / parcelaEntrada)}`}
                  </div>
                  {parcelaEntrada > 1 && jurosEntrada > 0 && (
                    <p className="text-[10px] text-[rgba(246,244,238,.35)] mt-1">
                      Total: {fmt(totalEntrada)}
                    </p>
                  )}
                </div>

                {/* Toggle parcelamento */}
                <div className="flex flex-col items-end gap-1.5">
                  <button
                    onClick={() => setShowParcelaEntrada(!showParcelaEntrada)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span className="text-[10px] text-[rgba(246,244,238,.45)] font-medium">
                      Parcelar?
                    </span>
                    <div className={`toggle-track ${showParcelaEntrada ? "active" : ""} shimmer-hint relative pulse-ring`}>
                      <div className="toggle-thumb" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Installment picker */}
              {showParcelaEntrada && (
                <div className="mt-4 pt-4 border-t border-[rgba(246,244,238,.08)]">
                  <p className="text-[9px] tracking-[1.5px] uppercase text-[rgba(246,244,238,.3)] font-semibold mb-2.5">
                    Escolha o parcelamento
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {PRICING.parcelamento.map((p) => {
                      const isActive = parcelaEntrada === p.vezes;
                      return (
                        <button
                          key={p.vezes}
                          onClick={() => setParcelaEntrada(p.vezes)}
                          className={`px-3 py-2 rounded-lg text-[11px] font-semibold transition-all duration-200 cursor-pointer border ${
                            isActive
                              ? "bg-[var(--g)] text-[var(--k)] border-[var(--g)]"
                              : "bg-[rgba(246,244,238,.06)] text-[rgba(246,244,238,.4)] border-[rgba(246,244,238,.1)] hover:border-[var(--g)] hover:text-[var(--g)]"
                          }`}
                        >
                          {p.label}
                          {p.juros > 0 && (
                            <span className="block text-[8px] opacity-60 mt-0.5">
                              +{p.juros * 100}%
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="mt-4 flex flex-col gap-1.5">
                {[
                  "Projeto começa imediatamente",
                  "Design aprovado antes de codar",
                  "Acompanhamento semanal",
                  "Revisões ilimitadas no design",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 items-start text-xs text-[rgba(246,244,238,.5)]">
                    <span className="text-[var(--g)] font-bold shrink-0">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* FINAL */}
          <Reveal delay={0.07}>
            <div className="bg-[var(--g)] rounded-2xl p-5 relative overflow-hidden mb-3">
              <div className="absolute -top-2 -right-1.5 font-serif text-[84px] font-bold opacity-5 text-[var(--k)] leading-none pointer-events-none">
                50%
              </div>
              <span className="text-[9px] tracking-[2.5px] uppercase font-semibold text-[rgba(20,20,16,.4)] block mb-3">
                Na entrega do site
              </span>

              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="font-serif text-[36px] font-bold text-[var(--k)] leading-none tracking-[-0.5px]">
                    {parcelaFinal === 1
                      ? fmt(metade)
                      : `${parcelaFinal}× ${fmt(totalFinal / parcelaFinal)}`}
                  </div>
                  {parcelaFinal > 1 && jurosFinal > 0 && (
                    <p className="text-[10px] text-[rgba(20,20,16,.4)] mt-1">
                      Total: {fmt(totalFinal)}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-end gap-1.5">
                  <button
                    onClick={() => setShowParcelaFinal(!showParcelaFinal)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span className="text-[10px] text-[rgba(20,20,16,.5)] font-medium">
                      Parcelar?
                    </span>
                    <div className={`toggle-track ${showParcelaFinal ? "active" : ""} relative`}>
                      <div className="toggle-thumb" />
                    </div>
                  </button>
                </div>
              </div>

              {showParcelaFinal && (
                <div className="mt-4 pt-4 border-t border-[rgba(20,20,16,.1)]">
                  <p className="text-[9px] tracking-[1.5px] uppercase text-[rgba(20,20,16,.4)] font-semibold mb-2.5">
                    Escolha o parcelamento
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {PRICING.parcelamento.map((p) => {
                      const isActive = parcelaFinal === p.vezes;
                      return (
                        <button
                          key={p.vezes}
                          onClick={() => setParcelaFinal(p.vezes)}
                          className={`px-3 py-2 rounded-lg text-[11px] font-semibold transition-all duration-200 cursor-pointer border ${
                            isActive
                              ? "bg-[var(--k)] text-white border-[var(--k)]"
                              : "bg-[rgba(20,20,16,.06)] text-[rgba(20,20,16,.5)] border-[rgba(20,20,16,.15)] hover:border-[var(--k)] hover:text-[var(--k)]"
                          }`}
                        >
                          {p.label}
                          {p.juros > 0 && (
                            <span className="block text-[8px] opacity-60 mt-0.5">
                              +{p.juros * 100}%
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="mt-4 flex flex-col gap-1.5">
                {[
                  "Todas as integrações ativas",
                  "Treinamento do painel com a equipe",
                  "30 dias de suporte incluídos",
                  "Domínio e código em nome de vocês",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 items-start text-xs text-[rgba(20,20,16,.6)]">
                    <span className="text-[rgba(20,20,16,.8)] font-bold shrink-0">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </>
      )}

      {/* ========== ORDER BUMP: MANUTENÇÃO ========== */}
      <Reveal delay={0.14}>
        <button
          onClick={() => setManutencao(!manutencao)}
          className={`w-full text-left rounded-2xl p-5 transition-all duration-300 cursor-pointer border-2 ${
            manutencao
              ? "bg-[var(--bl)] border-[var(--b)] shadow-lg"
              : "bg-white border-[var(--w3)] hover:border-[var(--b)] hover:shadow-md"
          }`}
        >
          <div className="flex items-start gap-3">
            {/* Checkbox */}
            <div
              className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${
                manutencao
                  ? "bg-[var(--b)] border-[var(--b)]"
                  : "border-[var(--w4)] shimmer-hint"
              }`}
            >
              {manutencao && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[var(--b)]">
                  Adicionar
                </span>
                {!manutencao && (
                  <span className="text-[8px] px-2 py-0.5 rounded-full bg-[var(--y)] text-[var(--k)] font-bold animate-pulse">
                    RECOMENDADO
                  </span>
                )}
              </div>
              <h4 className="font-serif text-lg font-bold text-[var(--k)] mb-1">
                Manutenção Mensal
              </h4>
              <p className="text-xs text-[var(--m)] leading-[1.6] mb-3">
                Hospedagem, monitoramento, segurança, ajustes mensais, subpáginas regionais e SEO contínuo para atrair mais pesquisas locais.
              </p>

              <div className="flex items-baseline gap-1 mb-3">
                <strong className="font-serif text-[28px] font-bold text-[var(--b)]">
                  {fmt(PRICING.manutencao.valor)}
                </strong>
                <span className="text-[13px] text-[var(--ml)]">/mês</span>
              </div>

              {manutencao && (
                <div className="flex flex-col gap-1.5 pt-3 border-t border-[rgba(26,74,122,.15)]">
                  {PRICING.manutencao.beneficios.map((b, i) => (
                    <div key={i} className="flex gap-2 items-start text-[11px] text-[var(--m)]">
                      <span className="text-[var(--b)] font-bold shrink-0">✓</span>
                      {b}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </button>
      </Reveal>

      {/* ========== RESUMO + CTA WHATSAPP ========== */}
      <Reveal delay={0.21}>
        <div className="mt-6 bg-[var(--k)] rounded-2xl p-6 relative overflow-hidden">
          <p className="text-[9px] tracking-[2.5px] uppercase font-semibold text-[rgba(246,244,238,.3)] mb-4">
            Resumo do seu pedido
          </p>

          <div className="flex flex-col gap-2 mb-5">
            <div className="flex justify-between text-sm">
              <span className="text-[rgba(246,244,238,.5)]">Projeto</span>
              <span className="text-white font-semibold">
                {mode === "avista" ? fmt(valorAVista) : fmt(totalEntrada + totalFinal)}
              </span>
            </div>
            {mode === "avista" && (
              <div className="flex justify-between text-xs">
                <span className="text-[var(--g)]">Desconto à vista</span>
                <span className="text-[var(--g)] font-semibold">-{fmt(desconto)}</span>
              </div>
            )}
            {mode === "parcelado" && (
              <>
                <div className="flex justify-between text-xs text-[rgba(246,244,238,.35)]">
                  <span>↳ Entrada: {parcelaEntrada === 1 ? "à vista" : `${parcelaEntrada}×`}</span>
                  <span>{fmt(totalEntrada)}</span>
                </div>
                <div className="flex justify-between text-xs text-[rgba(246,244,238,.35)]">
                  <span>↳ Na entrega: {parcelaFinal === 1 ? "à vista" : `${parcelaFinal}×`}</span>
                  <span>{fmt(totalFinal)}</span>
                </div>
              </>
            )}
            {manutencao && (
              <div className="flex justify-between text-sm pt-2 border-t border-[rgba(246,244,238,.08)]">
                <span className="text-[rgba(246,244,238,.5)]">Manutenção mensal</span>
                <span className="text-white font-semibold">{fmt(PRICING.manutencao.valor)}/mês</span>
              </div>
            )}
          </div>

          {/* WHATSAPP CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[var(--g)] text-[var(--k)] px-5 py-4.5 rounded-[13px] text-[15px] font-bold no-underline transition-all duration-200 hover:bg-[var(--gl)] active:scale-[.97] relative overflow-hidden"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[21px] h-[21px] shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Aceitar proposta via WhatsApp
          </a>
          <p className="text-[11px] text-[rgba(246,244,238,.2)] text-center mt-3 leading-[1.7]">
            Todas as suas escolhas vão organizadas na mensagem. Proposta válida por 15 dias.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
