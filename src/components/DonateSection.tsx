import { CelticFrame, CelticKnotDivider } from "@/components/CelticKnot";

const methods = [
  {
    name: "Venmo",
    detail: "@songsforingrid",
    note: "Open Venmo, search for @songsforingrid, and send your gift. Add a note if you’d like — every contribution supports Ingrid.",
    cta: "Open Venmo",
    href: "https://venmo.com/u/songsforingrid",
    disabled: false,
  },
  {
    name: "Check / Mail",
    detail: "Payable to: Ingrid Murphy Foundation",
    note: "Mail to:\n3601 W 97th St.\nEvergreen Park, IL 60805",
    cta: null,
    href: null,
    disabled: true,
  },
  {
    name: "Credit Card",
    detail: "Secure online donations",
    note: "Card donations are coming soon. In the meantime, Venmo or a mailed check are the best ways to give.",
    cta: "Coming Soon",
    href: null,
    disabled: true,
  },
];

export function DonateSection() {
  return (
    <section
      id="donate"
      className="relative bg-mist px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-sm tracking-[0.3em] text-forest-mid uppercase">
          A gift of music
        </p>
        <h2 className="mt-3 font-display text-3xl text-forest sm:text-4xl">
          Support Ingrid&apos;s Trust
        </h2>
        <CelticKnotDivider className="my-6 text-forest-soft" />
        <p className="mx-auto max-w-xl text-lg text-ink/75">
          Proceeds and gifts go toward a special needs trust for Ingrid.
          Choose the way that works best for you.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((method) => (
            <CelticFrame key={method.name} className="text-left">
              <h3 className="font-display text-xl text-forest">{method.name}</h3>
              <p className="mt-3 font-display text-lg text-ink/90">
                {method.detail}
              </p>
              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-gold-muted">
                {method.note}
              </p>
              {method.cta ? (
                method.href ? (
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block border border-forest bg-forest px-4 py-2 font-display text-xs tracking-wider text-mist uppercase transition hover:bg-forest-mid"
                  >
                    {method.cta}
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled={method.disabled}
                    className="mt-5 border border-forest/30 px-4 py-2 font-display text-xs tracking-wider text-forest uppercase disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {method.cta}
                  </button>
                )
              ) : null}
            </CelticFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
