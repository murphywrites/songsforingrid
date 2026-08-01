import { CelticFrame, CelticKnotDivider } from "@/components/CelticKnot";

const methods = [
  {
    name: "Zelle",
    detail: "Send to: [zelle-email@placeholder.com]",
    note: "Memo: Ingrid Special Needs Trust",
  },
  {
    name: "PayPal",
    detail: "paypal.me/[placeholder]",
    note: "Donate button coming soon",
  },
  {
    name: "Stripe",
    detail: "Secure card payments",
    note: "Checkout link placeholder",
  },
  {
    name: "Check / Mail",
    detail: "Payable to: [Trust Name Placeholder]",
    note: "Mailing address TBD",
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
          Choose the way that works best for you — payment details are
          placeholders until accounts are connected.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {methods.map((method) => (
            <CelticFrame key={method.name} className="text-left">
              <h3 className="font-display text-xl text-forest">{method.name}</h3>
              <p className="mt-3 text-ink/80">{method.detail}</p>
              <p className="mt-2 text-sm text-gold-muted">{method.note}</p>
              <button
                type="button"
                disabled
                className="mt-5 border border-forest/30 px-4 py-2 font-display text-xs tracking-wider text-forest uppercase transition hover:border-forest disabled:cursor-not-allowed disabled:opacity-70"
              >
                {method.name === "Stripe" || method.name === "PayPal"
                  ? "Donate — Coming Soon"
                  : "Instructions — Coming Soon"}
              </button>
            </CelticFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
