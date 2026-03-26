"use client";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--w3)]">
      <div className="content-w flex items-center justify-between py-3.5">
        <div className="font-serif text-[18px] font-bold text-[var(--k)]">
          <span className="text-[var(--g)]">Bossa</span> Elétrica
        </div>
        <span className="text-[10px] tracking-[2px] uppercase text-[var(--ml)]">
          Proposta 2025
        </span>
      </div>
    </nav>
  );
}
