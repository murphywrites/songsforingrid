import { BandLogo } from "@/components/BandLogo";
import { CelticKnotDivider } from "@/components/CelticKnot";

export function Hero() {
  return (
    <header className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,var(--forest-mid)_0%,var(--forest-deep)_55%,#07140e_100%)]"
        aria-hidden="true"
      />
      <div
        className="animate-glow pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(196,160,53,0.18),transparent_45%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "url(/ornaments/shamrock.svg)",
          backgroundSize: "88px 88px",
        }}
        aria-hidden="true"
      />

      <nav className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-10">
        <p className="font-display text-sm tracking-[0.2em] text-gold-bright uppercase">
          Dr. Murphy&apos;s Band
        </p>
        <div className="flex gap-5 text-sm text-mist/80">
          <a href="#listen" className="transition hover:text-gold-bright">
            Listen
          </a>
          <a href="#cd" className="transition hover:text-gold-bright">
            CD
          </a>
          <a href="#donate" className="transition hover:text-gold-bright">
            Give
          </a>
        </div>
      </nav>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-16 text-center">
        <div className="animate-fade-up">
          <BandLogo size="lg" priority className="drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]" />
        </div>

        <CelticKnotDivider className="animate-fade-up-delay-1 my-8" />

        <h1 className="animate-fade-up-delay-1 font-display text-4xl leading-tight text-gold-bright sm:text-5xl md:text-6xl">
          Songs for Ingrid
        </h1>

        <p className="animate-fade-up-delay-2 mt-4 max-w-md text-lg text-mist/90 sm:text-xl">
          Irish folk from Chicago — an album of love, memory, and melody.
        </p>

        <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#listen"
            className="border border-gold bg-gold px-7 py-3 font-display text-sm tracking-wider text-forest-deep uppercase transition hover:bg-gold-bright"
          >
            Listen Now
          </a>
          <a
            href="#donate"
            className="border border-gold/70 px-7 py-3 font-display text-sm tracking-wider text-gold-bright uppercase transition hover:border-gold-bright hover:bg-white/5"
          >
            Support Ingrid
          </a>
        </div>
      </div>
    </header>
  );
}
