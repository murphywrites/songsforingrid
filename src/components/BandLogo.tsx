import Image from "next/image";

type BandLogoProps = {
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { width: 96, height: 120, className: "h-24 w-auto" },
  md: { width: 160, height: 200, className: "h-40 w-auto sm:h-48" },
  lg: { width: 240, height: 300, className: "h-52 w-auto sm:h-64 md:h-72" },
};

/**
 * Band logo — replace `/public/band-logo.png` when you upload the final asset.
 */
export function BandLogo({
  className = "",
  priority = false,
  size = "md",
}: BandLogoProps) {
  const dims = sizes[size];

  return (
    <Image
      src="/band-logo.png"
      alt="Dr. Murphy's Band"
      width={dims.width}
      height={dims.height}
      priority={priority}
      className={`${dims.className} object-contain ${className}`}
    />
  );
}
