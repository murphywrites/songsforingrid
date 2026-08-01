import { CelticFrame, CelticKnotDivider } from "@/components/CelticKnot";

const platforms = [
  { name: "Spotify", href: "#", label: "Stream on Spotify" },
  { name: "Apple Music", href: "#", label: "Stream on Apple Music" },
  { name: "YouTube Music", href: "#", label: "Watch on YouTube" },
  { name: "Bandcamp", href: "#", label: "Listen on Bandcamp" },
];

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
          Streaming links coming soon. Choose a platform below once the album
          is live.
        </p>

        <CelticFrame className="mt-12 text-left">
          <ul className="divide-y divide-forest/15">
            {platforms.map((platform) => (
              <li key={platform.name}>
                <a
                  href={platform.href}
                  className="group flex items-center justify-between gap-4 py-4 transition first:pt-0 last:pb-0 hover:text-forest-mid"
                  aria-disabled="true"
                >
                  <span className="font-display text-xl text-forest">
                    {platform.name}
                  </span>
                  <span className="text-sm tracking-wide text-gold-muted group-hover:text-gold">
                    Coming soon →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </CelticFrame>
      </div>
    </section>
  );
}
