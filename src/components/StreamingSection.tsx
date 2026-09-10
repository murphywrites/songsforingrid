import { CelticFrame, CelticKnotDivider } from "@/components/CelticKnot";
import {
  BANDCAMP_ALBUM_URL,
  SHOW_STREAMING_PLATFORMS,
} from "@/lib/links";

const bandcamp = {
  name: "Bandcamp",
  href: BANDCAMP_ALBUM_URL,
  label: "Sample and buy on Bandcamp",
  cta: "Sample & buy →",
};

const upcomingPlatforms = [
  { name: "Spotify", href: null, label: "Stream on Spotify", cta: "Coming soon →" },
  {
    name: "Apple Music",
    href: null,
    label: "Stream on Apple Music",
    cta: "Coming soon →",
  },
  {
    name: "YouTube Music",
    href: null,
    label: "Watch on YouTube",
    cta: "Coming soon →",
  },
];

const platforms = SHOW_STREAMING_PLATFORMS
  ? [bandcamp, ...upcomingPlatforms]
  : [bandcamp];

export function StreamingSection() {
  return (
    <section
      id="listen"
      className="relative bg-parchment px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-sm tracking-[0.3em] text-forest-mid uppercase">
          Hear the album
        </p>
        <h2 className="mt-3 font-display text-3xl text-forest sm:text-4xl">
          Stream Songs for Ingrid
        </h2>
        <CelticKnotDivider className="my-6 text-forest-soft" />
        <p className="mx-auto max-w-lg text-lg text-ink/75">
          {SHOW_STREAMING_PLATFORMS
            ? "Start with Bandcamp to sample tracks or buy the digital album. Other platforms will appear here as they go live."
            : "Sample tracks or buy the digital album on Bandcamp."}
        </p>

        <CelticFrame className="mt-12 text-left">
          <ul className="divide-y divide-forest/15">
            {platforms.map((platform) => (
              <li key={platform.name}>
                {platform.href ? (
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform.label}
                    className="group flex items-center justify-between gap-4 py-4 transition first:pt-0 last:pb-0 hover:text-forest-mid"
                  >
                    <span className="font-display text-xl text-forest">
                      {platform.name}
                    </span>
                    <span className="text-sm tracking-wide text-gold-muted group-hover:text-gold">
                      {platform.cta}
                    </span>
                  </a>
                ) : (
                  <span
                    className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                    aria-disabled="true"
                  >
                    <span className="font-display text-xl text-forest">
                      {platform.name}
                    </span>
                    <span className="text-sm tracking-wide text-gold-muted">
                      {platform.cta}
                    </span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </CelticFrame>
      </div>
    </section>
  );
}
