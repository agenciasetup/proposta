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
      {/* Browser chrome */}
      <BrowserFrame url="bossaeletricas.com.br">
        {/* Nav */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--k)] border-b border-[rgba(246,244,238,.06)]">
          <span className="font-serif text-[13px] font-bold text-[var(--g)] italic">Bossa</span>
          <div className="flex gap-4">
            {["Modelos", "Test Drive", "Comparar", "Blog", "Contato"].map((l) => (
              <span key={l} className="text-[8px] text-[rgba(246,244,238,.3)]">{l}</span>
            ))}
          </div>
          <div className="bg-[var(--g)] text-[var(--k)] text-[7px] font-bold px-2.5 py-1 rounded-md">Agendar Test Drive</div>
        </div>

        {/* Hero */}
        <div className="relative overflow-hidden">
          {/* Copacabana background */}
          <div className="h-56 md:h-72 relative" style={{ background: "linear-gradient(135deg, #141410 0%, #1a2a10 40%, #141410 100%)" }}>
            {/* Calçadão pattern (simplified) */}
            <svg className="absolute bottom-0 left-0 right-0 h-8 opacity-[.07]" viewBox="0 0 200 20" preserveAspectRatio="none">
              <pattern id="calc" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0,10 Q5,0 10,10 Q15,20 20,10" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
              <rect width="200" height="20" fill="url(#calc)" />
            </svg>

            {/* Mountains silhouette */}
            <svg className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-[.08]" width="300" height="100" viewBox="0 0 300 100">
              <path d="M50,100 Q80,20 150,5 Q220,20 250,100Z" fill="white" />
            </svg>

            {/* Sun */}
            <div className="absolute top-6 right-8 w-8 h-8 rounded-full bg-[var(--y)] opacity-60 shadow-[0_0_30px_rgba(240,224,48,.4)]" />

            {/* Content */}
            <div className="relative z-10 px-6 pt-12 md:pt-16 md:px-10">
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-1 h-1 rounded-full bg-[var(--g)]" style={{ animation: "blink 1.5s infinite" }} />
                <span className="text-[7px] tracking-[2px] uppercase text-[rgba(125,194,66,.6)]">Menos trânsito, mais pôr do sol</span>
              </div>
              <h2 className="font-serif text-[28px] md:text-[40px] font-bold leading-[.9] tracking-[-1px] mb-3">
                <span className="text-white block">Liberdade</span>
                <span className="text-[var(--y)] italic block">Elétrica.</span>
              </h2>
              <p className="text-[10px] text-[rgba(246,244,238,.4)] max-w-[200px] leading-relaxed mb-5">
                Criada no Rio, para os cariocas. Encontre sua Bossa perfeita.
              </p>
              <div className="flex gap-2">
                <div className="bg-[var(--g)] text-[var(--k)] text-[9px] font-bold px-3 py-2 rounded-lg">Encontre sua Bossa →</div>
                <div className="border border-[rgba(246,244,238,.15)] text-[rgba(246,244,238,.4)] text-[9px] px-3 py-2 rounded-lg">Agendar Test Drive</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category carousel */}
        <div className="px-4 py-5 bg-[var(--w)]">
          <p className="text-[8px] tracking-[2px] uppercase text-[var(--ml)] font-semibold mb-3">Nossos modelos</p>
          <div className="grid grid-cols-4 gap-2">
            {[
              { name: "Prime T", price: "R$ 12.990", emoji: "🛵", cat: "Scooter" },
              { name: "Bossa Neo", price: "R$ 9.990", emoji: "🛵", cat: "Scooter" },
              { name: "Bossa Grid", price: "R$ 7.990", emoji: "🚲", cat: "E-Bike" },
              { name: "Bossa Cargo", price: "R$ 14.990", emoji: "🛵", cat: "Cargo" },
            ].map((p) => (
              <PolaroidCard key={p.name} {...p} />
            ))}
          </div>
        </div>

        {/* Quiz CTA */}
        <div className="mx-4 mb-4 p-4 bg-[var(--k)] rounded-xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--g)] flex items-center justify-center text-lg">🎯</div>
          <div className="flex-1">
            <p className="text-[10px] font-bold text-white">Encontre sua Bossa Perfeita</p>
            <p className="text-[8px] text-[rgba(246,244,238,.4)]">Quiz interativo com filtros guiados</p>
          </div>
          <div className="text-[8px] text-[var(--g)] font-bold">Começar →</div>
        </div>

        {/* Calculator preview */}
        <div className="mx-4 mb-4 p-4 bg-[var(--gll)] rounded-xl border border-[var(--gl)]">
          <p className="text-[9px] font-bold text-[var(--gd)] mb-2">⚡ Calculadora de Economia</p>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white rounded-lg p-2 text-center border border-[var(--gl)]">
              <p className="text-[7px] text-[var(--ml)]">Gasolina/mês</p>
              <p className="text-[12px] font-bold text-red-500">-R$ 480</p>
            </div>
            <div className="bg-white rounded-lg p-2 text-center border border-[var(--gl)]">
              <p className="text-[7px] text-[var(--ml)]">Elétrica/mês</p>
              <p className="text-[12px] font-bold text-[var(--gd)]">R$ 35</p>
            </div>
            <div className="bg-white rounded-lg p-2 text-center border border-[var(--gl)]">
              <p className="text-[7px] text-[var(--ml)]">Economia/ano</p>
              <p className="text-[12px] font-bold text-[var(--gd)]">R$ 5.340</p>
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
      {/* Nav mini */}
      <MiniNav active="Modelos" />

      <div className="flex">
        {/* Sidebar filters */}
        <div className="w-44 bg-white border-r border-[var(--w3)] p-3 hidden md:block">
          <p className="text-[9px] font-bold text-[var(--k)] mb-3">Filtros</p>

          <FilterGroup title="Categoria" options={["Scooter", "E-Bike", "Cargo"]} active={[0]} />
          <FilterGroup title="Preço" options={["Até R$ 8k", "R$ 8k–12k", "Acima de R$ 12k"]} active={[1]} />
          <FilterGroup title="Autonomia" options={["Até 40km", "40–80km", "80km+"]} active={[2]} />
          <FilterGroup title="Características" options={["Dobrável", "Bat. removível", "NFC", "Bluetooth"]} active={[0, 3]} />

          <div className="mt-3 pt-3 border-t border-[var(--w3)]">
            <p className="text-[7px] text-[var(--ml)]">30+ filtros disponíveis</p>
            <p className="text-[7px] text-[var(--gd)] font-semibold">Ver todos os filtros ↓</p>
          </div>
        </div>

        {/* Products grid */}
        <div className="flex-1 p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[9px] text-[var(--ml)]">Mostrando <b className="text-[var(--k)]">8 modelos</b></p>
            <div className="flex gap-1">
              <span className="text-[8px] px-2 py-1 rounded-md bg-[var(--g)] text-[var(--k)] font-semibold">Scooter</span>
              <span className="text-[8px] px-2 py-1 rounded-md bg-[var(--w2)] text-[var(--ml)]">Dobrável</span>
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
        {/* Image carousel */}
        <div className="md:w-1/2 bg-[var(--gll)] p-6 flex items-center justify-center min-h-[200px] relative">
          <span className="text-[64px]">🛵</span>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            {[0, 1, 2, 3].map((d) => (
              <div key={d} className={`w-2 h-2 rounded-full ${d === 0 ? "bg-[var(--g)]" : "bg-[var(--w3)]"}`} />
            ))}
          </div>
          {/* Polaroid frame */}
          <div className="absolute top-3 left-3 rotate-[-3deg] bg-white p-1.5 shadow-md rounded-sm">
            <div className="w-12 h-12 bg-[var(--gll)] rounded-sm flex items-center justify-center text-lg">🛵</div>
            <p className="text-[5px] text-center text-[var(--m)] mt-0.5 font-serif italic">Prime T</p>
          </div>
        </div>

        {/* Product info */}
        <div className="md:w-1/2 p-5">
          <p className="text-[8px] text-[var(--gd)] font-semibold mb-1">SCOOTER ELÉTRICA</p>
          <h3 className="font-serif text-[24px] font-bold text-[var(--k)] leading-tight mb-2">Bossa Prime T</h3>

          <div className="flex items-baseline gap-3 mb-4">
            <div>
              <p className="text-[8px] text-[var(--gd)] font-semibold">PIX</p>
              <p className="font-serif text-[22px] font-bold text-[var(--gd)]">R$ 12.490</p>
            </div>
            <div>
              <p className="text-[8px] text-[var(--ml)]">OU</p>
              <p className="text-[14px] font-bold text-[var(--k)]">12× R$ 1.249</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-3 border-b border-[var(--w3)]">
            {["Descrição", "Especificações", "Agendar"].map((t, i) => (
              <button key={t} onClick={() => setTab(i)} className={`px-3 py-2 text-[9px] font-semibold cursor-pointer border-b-2 transition-colors ${tab === i ? "border-[var(--g)] text-[var(--k)]" : "border-transparent text-[var(--ml)]"}`}>{t}</button>
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
                <div key={k} className="bg-[var(--w2)] rounded-md px-2 py-1.5 border border-[var(--w3)]">
                  <p className="text-[7px] text-[var(--ml)]">{k}</p>
                  <p className="text-[10px] font-semibold text-[var(--k)]">{v}</p>
                </div>
              ))}
            </div>
          )}

          {tab === 2 && (
            <div className="space-y-2">
              <div className="bg-[var(--g)] text-[var(--k)] text-center py-2.5 rounded-lg text-[10px] font-bold">Agendar Test Drive</div>
              <div className="border border-[var(--w3)] text-[var(--k)] text-center py-2.5 rounded-lg text-[10px] font-bold">Reservar / Encomendar</div>
            </div>
          )}

          {/* Related */}
          <div className="mt-5 pt-4 border-t border-[var(--w3)]">
            <p className="text-[8px] text-[var(--ml)] font-semibold mb-2">Você também pode gostar</p>
            <div className="flex gap-2">
              {[{ name: "Bossa Neo", emoji: "🛵" }, { name: "Bossa Grid", emoji: "🚲" }].map((r) => (
                <div key={r.name} className="flex-1 bg-[var(--w2)] rounded-lg p-2 text-center border border-[var(--w3)]">
                  <span className="text-lg">{r.emoji}</span>
                  <p className="text-[8px] font-semibold text-[var(--k)]">{r.name}</p>
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
    <div className="bg-white rounded-xl border border-[var(--w3)] overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
      <div className="bg-[var(--gll)] h-20 flex items-center justify-center relative">
        <span className="text-[28px] group-hover:scale-110 transition-transform">{emoji}</span>
        {badge && (
          <span className={`absolute top-1.5 left-1.5 text-[6px] font-bold px-1.5 py-0.5 rounded-md ${badge === "Sob encomenda" ? "bg-[var(--bl)] text-[var(--b)]" : "bg-[var(--y)] text-[var(--k)]"}`}>
            {badge}
          </span>
        )}
      </div>
      <div className="p-2">
        <p className="text-[9px] font-bold text-[var(--k)]">{name}</p>
        <p className="text-[10px] font-bold text-[var(--gd)]">{price}</p>
        <p className="text-[7px] text-[var(--ml)]">{parcela}</p>
        <div className="flex gap-1 mt-2">
          <div className="flex-1 bg-[var(--g)] text-[var(--k)] text-[7px] font-bold text-center py-1 rounded-md">Test Drive</div>
          <div className="flex-1 border border-[var(--w3)] text-[var(--m)] text-[7px] font-bold text-center py-1 rounded-md">Comparar</div>
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
