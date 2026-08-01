import type { ReactNode } from "react";

type CelticKnotProps = {
  className?: string;
  variant?: "divider" | "corner" | "frame";
};

export function CelticKnotDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`mx-auto h-8 w-48 text-gold ${className}`}
      viewBox="0 0 200 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        className="animate-knot"
        d="M10 16 C20 4, 30 4, 40 16 C50 28, 60 28, 70 16 C80 4, 90 4, 100 16 C110 28, 120 28, 130 16 C140 4, 150 4, 160 16 C170 28, 180 28, 190 16"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="100" cy="16" r="5" fill="currentColor" opacity="0.85" />
      <path
        d="M88 16 L94 10 L100 16 L94 22 Z M106 10 L112 16 L106 22 L100 16 Z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
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
      <path
        d="M8 48 V18 C8 10, 10 8, 18 8 H48"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M16 40 V22 C16 18, 18 16, 22 16 H40"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.75"
      />
      <circle cx="14" cy="14" r="3" fill="currentColor" />
      <path
        d="M22 8 C26 12, 30 12, 34 8 M8 22 C12 26, 12 30, 8 34"
        stroke="currentColor"
        strokeWidth="1.25"
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
