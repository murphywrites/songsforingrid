import type { ReactNode } from "react";

type CelticKnotProps = {
  className?: string;
  variant?: "divider" | "corner" | "frame";
};

/**
 * Horizontal Celtic knot divider — interlaced linear knotwork
 * (geometry after AnonMoos / Wikimedia Commons, public domain).
 * Colored via `currentColor` (default gold).
 */
export function CelticKnotDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`celtic-divider mx-auto h-11 w-64 text-gold sm:h-12 sm:w-72 ${className}`}
      role="presentation"
      aria-hidden="true"
    />
  );
}

export function CelticCorner({
  className = "",
  flipX = false,
  flipY = false,
}: {
  className?: string;
  flipX?: boolean;
  flipY?: boolean;
}) {
  const scaleX = flipX ? -1 : 1;
  const scaleY = flipY ? -1 : 1;

  return (
    <svg
      className={`h-14 w-14 text-gold ${className}`}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ transform: `scale(${scaleX}, ${scaleY})` }}
    >
      {/* Double L-band */}
      <path
        d="M8 48 V18 C8 9 9 8 18 8 H48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15 41 V22 C15 17 17 15 22 15 H41"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.7"
        strokeLinecap="round"
      />
      {/* Irish spiral terminal */}
      <path
        d="M22 8
           C28 8 31 12 29 16
           C27.5 19 24 18.5 24 16
           C24 14.5 25.5 13.5 27 14"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M8 22
           C8 28 12 31 16 29
           C19 27.5 18.5 24 16 24
           C14.5 24 13.5 25.5 14 27"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CelticFrame({
  children,
  className = "",
}: CelticKnotProps & { children: ReactNode }) {
  return (
    <div className={`relative ${className}`}>
      <CelticCorner className="absolute -left-1 -top-1" />
      <CelticCorner className="absolute -right-1 -top-1" flipX />
      <CelticCorner className="absolute -bottom-1 -left-1" flipY />
      <CelticCorner className="absolute -bottom-1 -right-1" flipX flipY />
      <div className="border border-gold/35 px-6 py-8 sm:px-10 sm:py-10">
        {children}
      </div>
    </div>
  );
}
