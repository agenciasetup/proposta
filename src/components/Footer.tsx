import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--k)] border-t border-[var(--k2)]">
      <div className="content-w py-6 flex items-center justify-between">
        <p className="text-[12px] text-[rgba(246,244,238,.22)]">
          Preparado por <b className="text-[rgba(246,244,238,.4)]">Agência Setup</b> &nbsp;·&nbsp; Filipe &nbsp;·&nbsp; 2025
        </p>
        <Image
          src="/logo-bossa.svg"
          alt="Bossa"
          width={80}
          height={30}
          className="h-[22px] w-auto opacity-40"
        />
      </div>
    </footer>
  );
}
