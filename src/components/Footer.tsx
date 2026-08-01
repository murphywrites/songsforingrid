import { BandLogo } from "@/components/BandLogo";
import { CelticKnotDivider } from "@/components/CelticKnot";

export function Footer() {
  return (
    <footer className="bg-forest-deep px-6 py-14 text-center text-mist/70 sm:px-10">
      <BandLogo size="sm" className="mx-auto opacity-90 brightness-110" />
      <CelticKnotDivider className="my-6 opacity-70" />
      <p className="font-display text-lg text-gold-bright">
        Songs for Ingrid
      </p>
      <p className="mt-2 text-sm">
        Dr. Murphy&apos;s Band · Irish folk · Chicago
      </p>
      <p className="mt-8 text-xs tracking-wide text-mist/40">
        © {new Date().getFullYear()} Dr. Murphy&apos;s Band. All rights reserved.
      </p>
    </footer>
  );
}
