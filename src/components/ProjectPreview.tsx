"use client";
import { useState } from "react";

/* ─────────────────────────────────────────────
   Miniatura interativa do site da Bossa
   Mostra hero, catálogo com filtros, produto,
   admin panel e integrações — tudo minimalista
   ───────────────────────────────────────────── */

export default function ProjectPreview({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Home", "Catálogo", "Produto", "Admin"];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      {/* Backdrop — ocean tint */}
      <div className="absolute inset-0 bg-[var(--ocean)]/40 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--w)] rounded-3xl overflow-hidden shadow-2xl animate-[slideUp_.4s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header — warm sand */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--sand-dark)]/40 bg-[var(--sand-light)]">
          <div>
            <p className="text-[9px] tracking-[2px] uppercase text-[var(--ocean)] font-semibold">Prévia do projeto</p>
            <h3 className="font-serif text-lg font-bold text-[var(--ocean-deep)]">Como o site vai ficar</h3>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full bg-[var(--sand)] flex items-center justify-center text-[var(--ocean-deep)] hover:bg-[var(--sand-dark)] transition-colors cursor-pointer text-lg">×</button>
        </div>

        {/* Tab bar */}
        <div className="flex gap-1 px-6 pt-4 pb-2 bg-[var(--sand-light)] border-b border-[var(--sand-dark)]/40">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-lg text-[12px] font-semibold transition-all cursor-pointer ${activeTab === i ? "bg-[var(--ocean)] text-white" : "text-[var(--ml)] hover:bg-[var(--sand)]"}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-6">
          {activeTab === 0 && <HomePreview />}
          {activeTab === 1 && <CatalogoPreview />}
          {activeTab === 2 && <ProdutoPreview />}
          {activeTab === 3 && <AdminPreview />}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

/* ════════════════════════════════════════════════
   HOME PREVIEW
   ════════════════════════════════════════════════ */
function HomePreview() {
  return (
    <div className="space-y-4">
      <BrowserFrame url="bossaeletricas.com.br">
        {/* Nav — warm sand */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--sand-light)] border-b border-[var(--sand-dark)]/30">
          <span className="font-serif text-[13px] font-bold text-[var(--ocean)] italic">Bossa</span>
          <div className="flex gap-4">
            {["Modelos", "Test Drive", "Comparar", "Blog", "Contato"].map((l) => (
              <span key={l} className="text-[8px] text-[var(--sand-dark)]">{l}</span>
            ))}
          </div>
          <div className="bg-[var(--y)] text-[var(--ocean-deep)] text-[7px] font-bold px-2.5 py-1 rounded-md">Agendar Test Drive</div>
        </div>

        {/* Hero — beach scene */}
        <div className="relative overflow-hidden">
          <div className="h-56 md:h-72 relative" style={{ background: "linear-gradient(170deg, var(--sky-light) 0%, var(--sky) 35%, var(--ocean) 65%, var(--sand) 85%, var(--sand-dark) 100%)" }}>

            {/* Sun with glow */}
            <div className="absolute top-5 right-10 w-12 h-12 rounded-full bg-[var(--y)] shadow-[0_0_40px_rgba(247,178,103,.6),0_0_80px_rgba(240,224,48,.3)]" />

            {/* Cristo Redentor silhouette */}
            <svg className="absolute bottom-12 left-[15%] opacity-[.15]" width="60" height="90" viewBox="0 0 60 90">
              <circle cx="30" cy="8" r="4" fill="var(--ocean-deep)" />
              <line x1="30" y1="12" x2="30" y2="50" stroke="var(--ocean-deep)" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="12" y1="25" x2="48" y2="25" stroke="var(--ocean-deep)" strokeWidth="3" strokeLinecap="round" />
              <path d="M20,90 Q30,45 40,90Z" fill="var(--ocean-deep)" />
            </svg>

            {/* Palm tree left */}
            <svg className="absolute bottom-0 left-1 opacity-20" width="50" height="80" viewBox="0 0 50 80">
              <path d="M22,80 Q20,50 25,25" stroke="var(--palm)" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M25,25 Q10,15 2,22" stroke="var(--palm)" strokeWidth="2" fill="none" />
              <path d="M25,25 Q15,10 5,8" stroke="var(--palm)" strokeWidth="2" fill="none" />
              <path d="M25,25 Q35,10 45,12" stroke="var(--palm)" strokeWidth="2" fill="none" />
              <path d="M25,25 Q38,18 48,25" stroke="var(--palm)" strokeWidth="2" fill="none" />
              <path d="M25,25 Q20,8 18,2" stroke="var(--palm)" strokeWidth="2" fill="none" />
            </svg>

            {/* Palm tree right */}
            <svg className="absolute bottom-0 right-2 opacity-15" width="45" height="70" viewBox="0 0 45 70">
              <path d="M25,70 Q27,42 22,18" stroke="var(--palm)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M22,18 Q8,10 2,16" stroke="var(--palm)" strokeWidth="1.5" fill="none" />
              <path d="M22,18 Q12,5 5,2" stroke="var(--palm)" strokeWidth="1.5" fill="none" />
              <path d="M22,18 Q32,5 40,8" stroke="var(--palm)" strokeWidth="1.5" fill="none" />
              <path d="M22,18 Q35,12 42,18" stroke="var(--palm)" strokeWidth="1.5" fill="none" />
            </svg>

            {/* Ocean waves */}
            <svg className="absolute bottom-6 left-0 right-0 h-5 opacity-30" viewBox="0 0 400 20" preserveAspectRatio="none">
              <path d="M0,10 Q25,2 50,10 Q75,18 100,10 Q125,2 150,10 Q175,18 200,10 Q225,2 250,10 Q275,18 300,10 Q325,2 350,10 Q375,18 400,10 L400,20 L0,20Z" fill="white" />
            </svg>
            <svg className="absolute bottom-3 left-0 right-0 h-5 opacity-20" viewBox="0 0 400 20" preserveAspectRatio="none">
              <path d="M0,12 Q30,4 60,12 Q90,20 120,12 Q150,4 180,12 Q210,20 240,12 Q270,4 300,12 Q330,20 360,12 Q390,4 400,12 L400,20 L0,20Z" fill="white" />
            </svg>

            {/* Calçadão de Copacabana pattern — sand area */}
            <svg className="absolute bottom-0 left-0 right-0 h-6 opacity-20" viewBox="0 0 200 12" preserveAspectRatio="none">
              <pattern id="copa" width="24" height="12" patternUnits="userSpaceOnUse">
                <path d="M0,6 Q6,0 12,6 Q18,12 24,6" fill="none" stroke="var(--ocean-deep)" strokeWidth="1.2" />
              </pattern>
              <rect width="200" height="12" fill="url(#copa)" />
            </svg>

            {/* Content */}
            <div className="relative z-10 px-6 pt-10 md:pt-14 md:px-10">
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--y)]" style={{ animation: "blink 1.5s infinite" }} />
                <span className="text-[7px] tracking-[2px] uppercase text-white/80 font-semibold drop-shadow-sm">Menos trânsito, mais pôr do sol</span>
              </div>
              <h2 className="font-serif text-[28px] md:text-[40px] font-bold leading-[.9] tracking-[-1px] mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,.15)]">
                <span className="text-white block">Liberdade</span>
                <span className="text-[var(--y)] italic block">Elétrica.</span>
              </h2>
              <p className="text-[10px] text-white/70 max-w-[200px] leading-relaxed mb-4 drop-shadow-sm">
                Criada no Rio, para os cariocas. Encontre sua Bossa perfeita.
              </p>
              <div className="flex gap-2">
                <div className="bg-[var(--y)] text-[var(--ocean-deep)] text-[9px] font-bold px-3 py-2 rounded-lg shadow-md">Encontre sua Bossa →</div>
                <div className="border border-white/40 text-white/80 text-[9px] px-3 py-2 rounded-lg backdrop-blur-sm bg-white/10">Agendar Test Drive</div>
              </div>
            </div>
          </div>
        </div>

        {/* Nossos Modelos — polaroids on sand */}
        <div className="px-4 py-5 bg-gradient-to-b from-[var(--sand)] to-[var(--sand-light)]">
          <p className="text-[8px] tracking-[2px] uppercase text-[var(--ocean)] font-semibold mb-4">Nossos modelos</p>
          <div className="grid grid-cols-4 gap-3 pt-2">
            {[
              { name: "Prime T", price: "R$ 12.990", emoji: "🛵", cat: "Scooter" },
              { name: "Bossa Neo", price: "R$ 9.990", emoji: "🛵", cat: "Scooter" },
              { name: "Bossa Grid", price: "R$ 7.990", emoji: "🚲", cat: "E-Bike" },
              { name: "Bossa Cargo", price: "R$ 14.990", emoji: "🛵", cat: "Cargo" },
            ].map((p, i) => (
              <PolaroidCard key={p.name} {...p} index={i} />
            ))}
          </div>
        </div>

        {/* Quiz CTA — sunset warm */}
        <div className="mx-4 mb-4 p-4 bg-gradient-to-r from-[var(--sunset)] to-[var(--sunset-warm)] rounded-xl flex items-center gap-3 shadow-md">
          <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-lg">🏖️</div>
          <div className="flex-1">
            <p className="text-[10px] font-bold text-[var(--ocean-deep)]">Encontre sua Bossa Perfeita</p>
            <p className="text-[8px] text-[var(--ocean-deep)]/60">Quiz interativo com filtros guiados</p>
          </div>
          <div className="text-[8px] text-[var(--ocean-deep)] font-bold">Começar →</div>
        </div>

        {/* Calculator — sky light */}
        <div className="mx-4 mb-4 p-4 bg-gradient-to-br from-[var(--sky-soft)]/40 to-[var(--sand-light)] rounded-xl border border-[var(--sky-soft)]">
          <p className="text-[9px] font-bold text-[var(--ocean)] mb-2">⚡ Calculadora de Economia</p>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white rounded-lg p-2 text-center border border-[var(--sky-soft)]">
              <p className="text-[7px] text-[var(--ml)]">Gasolina/mês</p>
              <p className="text-[12px] font-bold text-[var(--coral)]">-R$ 480</p>
            </div>
            <div className="bg-white rounded-lg p-2 text-center border border-[var(--sky-soft)]">
              <p className="text-[7px] text-[var(--ml)]">Elétrica/mês</p>
              <p className="text-[12px] font-bold text-[var(--ocean)]">R$ 35</p>
            </div>
            <div className="bg-white rounded-lg p-2 text-center border border-[var(--sky-soft)]">
              <p className="text-[7px] text-[var(--ml)]">Economia/ano</p>
              <p className="text-[12px] font-bold text-[var(--ocean)]">R$ 5.340</p>
            </div>
          </div>
        </div>
      </BrowserFrame>
    </div>
  );
}

/* ════════════════════════════════════════════════
   CATÁLOGO PREVIEW
   ════════════════════════════════════════════════ */
function CatalogoPreview() {
  return (
    <BrowserFrame url="bossaeletricas.com.br/modelos">
      <MiniNav active="Modelos" />

      <div className="flex">
        {/* Sidebar filters */}
        <div className="w-44 bg-[var(--sand-light)] border-r border-[var(--sand-dark)]/30 p-3 hidden md:block">
          <p className="text-[9px] font-bold text-[var(--ocean-deep)] mb-3">Filtros</p>

          <FilterGroup title="Categoria" options={["Scooter", "E-Bike", "Cargo"]} active={[0]} />
          <FilterGroup title="Preço" options={["Até R$ 8k", "R$ 8k–12k", "Acima de R$ 12k"]} active={[1]} />
          <FilterGroup title="Autonomia" options={["Até 40km", "40–80km", "80km+"]} active={[2]} />
          <FilterGroup title="Características" options={["Dobrável", "Bat. removível", "NFC", "Bluetooth"]} active={[0, 3]} />

          <div className="mt-3 pt-3 border-t border-[var(--sand-dark)]/30">
            <p className="text-[7px] text-[var(--ml)]">30+ filtros disponíveis</p>
            <p className="text-[7px] text-[var(--ocean)] font-semibold">Ver todos os filtros ↓</p>
          </div>
        </div>

        {/* Products grid */}
        <div className="flex-1 p-4 bg-gradient-to-b from-white to-[var(--sand-light)]">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[9px] text-[var(--ml)]">Mostrando <b className="text-[var(--ocean-deep)]">8 modelos</b></p>
            <div className="flex gap-1">
              <span className="text-[8px] px-2 py-1 rounded-md bg-[var(--ocean)] text-white font-semibold">Scooter</span>
              <span className="text-[8px] px-2 py-1 rounded-md bg-[var(--sand)] text-[var(--ocean-deep)]">Dobrável</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
            {[
              { name: "Prime T", price: "R$ 12.990", parcela: "12× R$ 1.249", emoji: "🛵", badge: null },
              { name: "Bossa Neo", price: "R$ 9.990", parcela: "12× R$ 949", emoji: "🛵", badge: null },
              { name: "Bossa Grid", price: "R$ 7.990", parcela: "12× R$ 749", emoji: "🚲", badge: null },
              { name: "Bossa Cargo", price: "R$ 14.990", parcela: "12× R$ 1.399", emoji: "🛵", badge: null },
              { name: "Bossa Fold", price: "R$ 6.490", parcela: "12× R$ 599", emoji: "🚲", badge: "Dobrável" },
              { name: "Bossa X", price: "R$ 18.990", parcela: "12× R$ 1.749", emoji: "🛵", badge: "Sob encomenda" },
            ].map((p) => (
              <CatalogCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ════════════════════════════════════════════════
   PRODUTO PREVIEW
   ════════════════════════════════════════════════ */
function ProdutoPreview() {
  const [tab, setTab] = useState(0);

  return (
    <BrowserFrame url="bossaeletricas.com.br/modelos/prime-t">
      <MiniNav active="Modelos" />

      <div className="md:flex">
        {/* Image carousel — sand/sky background */}
        <div className="md:w-1/2 bg-gradient-to-br from-[var(--sky-soft)]/50 to-[var(--sand)] p-6 flex items-center justify-center min-h-[200px] relative">
          <span className="text-[64px]">🛵</span>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            {[0, 1, 2, 3].map((d) => (
              <div key={d} className={`w-2 h-2 rounded-full ${d === 0 ? "bg-[var(--ocean)]" : "bg-[var(--sand-dark)]"}`} />
            ))}
          </div>
          {/* Polaroid frame */}
          <div className="absolute top-3 left-3 rotate-[-3deg] bg-white p-1.5 shadow-[2px_3px_10px_rgba(139,94,60,.15)] rounded-sm">
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-5 h-2.5 bg-[var(--sunset)]/40 rounded-sm z-10" />
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--sky-soft)] to-[var(--sand)] rounded-sm flex items-center justify-center text-lg">🛵</div>
            <p className="text-[5px] text-center text-[var(--ocean)] mt-0.5 font-serif italic">Prime T</p>
          </div>
        </div>

        {/* Product info */}
        <div className="md:w-1/2 p-5 bg-[var(--sand-light)]">
          <p className="text-[8px] text-[var(--ocean)] font-semibold mb-1">SCOOTER ELÉTRICA</p>
          <h3 className="font-serif text-[24px] font-bold text-[var(--ocean-deep)] leading-tight mb-2">Bossa Prime T</h3>

          <div className="flex items-baseline gap-3 mb-4">
            <div>
              <p className="text-[8px] text-[var(--ocean)] font-semibold">PIX</p>
              <p className="font-serif text-[22px] font-bold text-[var(--ocean)]">R$ 12.490</p>
            </div>
            <div>
              <p className="text-[8px] text-[var(--ml)]">OU</p>
              <p className="text-[14px] font-bold text-[var(--ocean-deep)]">12× R$ 1.249</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-3 border-b border-[var(--sand-dark)]/30">
            {["Descrição", "Especificações", "Agendar"].map((t, i) => (
              <button key={t} onClick={() => setTab(i)} className={`px-3 py-2 text-[9px] font-semibold cursor-pointer border-b-2 transition-colors ${tab === i ? "border-[var(--ocean)] text-[var(--ocean-deep)]" : "border-transparent text-[var(--ml)]"}`}>{t}</button>
            ))}
          </div>

          {tab === 0 && (
            <p className="text-[10px] text-[var(--m)] leading-relaxed">
              A Bossa Prime T é a scooter elétrica mais completa da linha. Design premium com NFC, bluetooth, alarme e bateria removível. Perfeita para o trânsito do Rio.
            </p>
          )}

          {tab === 1 && (
            <div className="grid grid-cols-2 gap-1.5">
              {[
                ["Autonomia", "80km"],
                ["Velocidade", "45km/h"],
                ["Potência", "2000W"],
                ["Bateria", "72V 30Ah"],
                ["Peso suportado", "150kg"],
                ["Passageiros", "2"],
                ["Freio", "Disco"],
                ["NFC", "Sim"],
              ].map(([k, v]) => (
                <div key={k} className="bg-white rounded-md px-2 py-1.5 border border-[var(--sand-dark)]/30">
                  <p className="text-[7px] text-[var(--ml)]">{k}</p>
                  <p className="text-[10px] font-semibold text-[var(--ocean-deep)]">{v}</p>
                </div>
              ))}
            </div>
          )}

          {tab === 2 && (
            <div className="space-y-2">
              <div className="bg-[var(--y)] text-[var(--ocean-deep)] text-center py-2.5 rounded-lg text-[10px] font-bold">Agendar Test Drive</div>
              <div className="border border-[var(--ocean)] text-[var(--ocean)] text-center py-2.5 rounded-lg text-[10px] font-bold">Reservar / Encomendar</div>
            </div>
          )}

          {/* Related */}
          <div className="mt-5 pt-4 border-t border-[var(--sand-dark)]/30">
            <p className="text-[8px] text-[var(--ocean)] font-semibold mb-2">Você também pode gostar</p>
            <div className="flex gap-2">
              {[{ name: "Bossa Neo", emoji: "🛵" }, { name: "Bossa Grid", emoji: "🚲" }].map((r) => (
                <div key={r.name} className="flex-1 bg-white rounded-lg p-2 text-center border border-[var(--sand-dark)]/30">
                  <span className="text-lg">{r.emoji}</span>
                  <p className="text-[8px] font-semibold text-[var(--ocean-deep)]">{r.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ════════════════════════════════════════════════
   ADMIN PREVIEW
   ════════════════════════════════════════════════ */
function AdminPreview() {
  return (
    <BrowserFrame url="admin.bossaeletricas.com.br">
      <div className="flex min-h-[350px]">
        {/* Sidebar */}
        <div className="w-14 md:w-44 bg-[var(--k)] flex flex-col border-r border-[rgba(246,244,238,.04)]">
          <div className="px-3 py-4 hidden md:block">
            <span className="font-serif text-[12px] text-[var(--g)] italic font-bold">Bossa Admin</span>
          </div>
          <div className="flex flex-col gap-1 px-2 mt-2 md:mt-0">
            {[
              { icon: "🏠", label: "Dashboard", active: true },
              { icon: "🛵", label: "Produtos", active: false },
              { icon: "💬", label: "Leads", active: false },
              { icon: "📊", label: "Analytics", active: false },
              { icon: "📝", label: "Blog", active: false },
              { icon: "⚙️", label: "Config", active: false },
            ].map((item) => (
              <div key={item.label} className={`flex items-center gap-2 px-2 py-2 rounded-lg text-[10px] ${item.active ? "bg-[var(--g)] text-[var(--k)] font-bold" : "text-[rgba(246,244,238,.3)]"}`}>
                <span className="text-sm">{item.icon}</span>
                <span className="hidden md:inline">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 p-4 bg-[var(--w)]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[8px] text-[var(--ml)]">Bem-vinda de volta!</p>
              <h4 className="text-[14px] font-bold text-[var(--k)]">Dashboard</h4>
            </div>
            <div className="bg-[var(--g)] text-[var(--k)] text-[8px] font-bold px-3 py-1.5 rounded-lg">+ Novo produto</div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
            {[
              { label: "Produtos ativos", value: "24", color: "text-[var(--gd)]" },
              { label: "Leads hoje", value: "7", color: "text-[var(--b)]" },
              { label: "Test drives agendados", value: "3", color: "text-[var(--ydk)]" },
              { label: "Visitas/mês", value: "2.4k", color: "text-[var(--k)]" },
            ].map((kpi) => (
              <div key={kpi.label} className="bg-white rounded-xl p-3 border border-[var(--w3)]">
                <p className="text-[7px] text-[var(--ml)] mb-1">{kpi.label}</p>
                <p className={`text-[18px] font-bold ${kpi.color}`}>{kpi.value}</p>
              </div>
            ))}
          </div>

          {/* Products table */}
          <div className="bg-white rounded-xl border border-[var(--w3)] overflow-hidden">
            <div className="px-3 py-2 border-b border-[var(--w3)] flex items-center justify-between">
              <p className="text-[9px] font-bold text-[var(--k)]">Produtos recentes</p>
              <p className="text-[8px] text-[var(--gd)] font-semibold">Ver todos →</p>
            </div>
            {[
              { name: "Bossa Prime T", price: "R$ 12.990", status: "Ativo", emoji: "🛵" },
              { name: "Bossa Neo", price: "R$ 9.990", status: "Ativo", emoji: "🛵" },
              { name: "Bossa Grid", price: "R$ 7.990", status: "Ativo", emoji: "🚲" },
              { name: "Bossa X", price: "R$ 18.990", status: "Sob encomenda", emoji: "🛵" },
            ].map((row) => (
              <div key={row.name} className="px-3 py-2 flex items-center gap-3 border-b border-[var(--w3)] last:border-0 hover:bg-[var(--gll)] transition-colors">
                <span className="text-sm">{row.emoji}</span>
                <span className="text-[10px] font-medium text-[var(--k)] flex-1">{row.name}</span>
                <span className="text-[10px] text-[var(--gd)] font-semibold">{row.price}</span>
                <span className={`text-[7px] font-bold px-2 py-0.5 rounded-md ${row.status === "Ativo" ? "bg-[var(--gll)] text-[var(--gd)] border border-[var(--gl)]" : "bg-[var(--bl)] text-[var(--b)] border border-[#c0d8f0]"}`}>{row.status}</span>
                <span className="text-[8px] text-[var(--gd)] font-semibold">Editar</span>
              </div>
            ))}
          </div>

          {/* Sync status */}
          <div className="mt-3 flex items-center gap-2 px-3 py-2 bg-[var(--gll)] rounded-xl border border-[var(--gl)]">
            <div className="w-2 h-2 rounded-full bg-[var(--g)]" style={{ animation: "pls 1.5s infinite" }} />
            <p className="text-[9px] text-[var(--gd)] font-semibold">SprintHub + Bling sincronizados</p>
            <span className="text-[8px] text-[var(--ml)] ml-auto">Última sync: agora</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ════════════════════════════════════════════════
   SHARED COMPONENTS
   ════════════════════════════════════════════════ */

function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden border border-[var(--w3)] shadow-lg bg-white">
      {/* Browser bar */}
      <div className="bg-[var(--w2)] px-3 py-2 flex items-center gap-2 border-b border-[var(--w3)]">
        <div className="flex gap-1.5">
          <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#28ca41]" />
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1 text-[9px] text-[var(--ml)] text-center border border-[var(--w3)]">
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

function MiniNav({ active }: { active: string }) {
  return (
    <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--sand-light)] border-b border-[var(--sand-dark)]/30">
      <span className="font-serif text-[13px] font-bold text-[var(--ocean)] italic">Bossa</span>
      <div className="flex gap-4">
        {["Modelos", "Test Drive", "Comparar", "Blog", "Contato"].map((l) => (
          <span key={l} className={`text-[8px] ${l === active ? "text-[var(--ocean)] font-semibold" : "text-[var(--sand-dark)]"}`}>{l}</span>
        ))}
      </div>
    </div>
  );
}

const polaroidRotations = ["rotate-[-3deg]", "rotate-[2deg]", "rotate-[-1deg]", "rotate-[3deg]"];

function PolaroidCard({ name, price, emoji, cat, index = 0 }: { name: string; price: string; emoji: string; cat: string; index?: number }) {
  const rot = polaroidRotations[index % polaroidRotations.length];
  return (
    <div className={`bg-white rounded-sm p-1.5 pb-3 shadow-[2px_3px_12px_rgba(139,94,60,.15)] ${rot} hover:rotate-0 hover:scale-110 transition-all duration-200 cursor-pointer relative`}>
      {/* Tape */}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-3 bg-[var(--sunset)]/40 rounded-sm z-10" />
      <div className="bg-gradient-to-br from-[var(--sky-soft)] to-[var(--sand)] rounded-sm h-16 flex items-center justify-center mb-1.5">
        <span className="text-[24px] drop-shadow-sm">{emoji}</span>
      </div>
      <p className="text-[8px] font-serif font-bold text-[var(--ocean-deep)] italic text-center">{name}</p>
      <p className="text-[7px] text-[var(--sand-dark)] text-center">{cat}</p>
      <p className="text-[9px] text-[var(--ocean)] font-bold text-center">{price}</p>
    </div>
  );
}

function CatalogCard({ name, price, parcela, emoji, badge }: { name: string; price: string; parcela: string; emoji: string; badge: string | null }) {
  return (
    <div className="bg-white rounded-xl border border-[var(--sand-dark)]/30 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
      <div className="bg-gradient-to-br from-[var(--sky-soft)]/30 to-[var(--sand)]/50 h-20 flex items-center justify-center relative">
        <span className="text-[28px] group-hover:scale-110 transition-transform">{emoji}</span>
        {badge && (
          <span className={`absolute top-1.5 left-1.5 text-[6px] font-bold px-1.5 py-0.5 rounded-md ${badge === "Sob encomenda" ? "bg-[var(--sky-soft)] text-[var(--ocean-deep)]" : "bg-[var(--y)] text-[var(--ocean-deep)]"}`}>
            {badge}
          </span>
        )}
      </div>
      <div className="p-2">
        <p className="text-[9px] font-bold text-[var(--ocean-deep)]">{name}</p>
        <p className="text-[10px] font-bold text-[var(--ocean)]">{price}</p>
        <p className="text-[7px] text-[var(--ml)]">{parcela}</p>
        <div className="flex gap-1 mt-2">
          <div className="flex-1 bg-[var(--y)] text-[var(--ocean-deep)] text-[7px] font-bold text-center py-1 rounded-md">Test Drive</div>
          <div className="flex-1 border border-[var(--ocean)]/30 text-[var(--ocean)] text-[7px] font-bold text-center py-1 rounded-md">Comparar</div>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, options, active }: { title: string; options: string[]; active: number[] }) {
  return (
    <div className="mb-3">
      <p className="text-[8px] font-bold text-[var(--k)] mb-1.5">{title}</p>
      <div className="flex flex-col gap-1">
        {options.map((opt, i) => (
          <label key={opt} className="flex items-center gap-1.5 cursor-pointer">
            <div className={`w-3 h-3 rounded border flex items-center justify-center ${active.includes(i) ? "bg-[var(--g)] border-[var(--g)]" : "border-[var(--w4)]"}`}>
              {active.includes(i) && <span className="text-white text-[6px]">✓</span>}
            </div>
            <span className={`text-[8px] ${active.includes(i) ? "text-[var(--k)] font-semibold" : "text-[var(--ml)]"}`}>{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
