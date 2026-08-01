import { CelticFrame, CelticKnotDivider } from "@/components/CelticKnot";

export function CdSection() {
  return (
    <section
      id="cd"
      className="relative overflow-hidden bg-forest px-6 py-20 text-mist sm:px-10 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(196,160,53,0.35), transparent 40%), radial-gradient(circle at 80% 70%, rgba(224,193,90,0.2), transparent 35%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-display text-sm tracking-[0.3em] text-gold uppercase">
          Physical release
        </p>
        <h2 className="mt-3 font-display text-3xl text-gold-bright sm:text-4xl">
          Get the CD
        </h2>
        <CelticKnotDivider className="my-6" />
        <p className="mx-auto max-w-lg text-lg text-mist/85">
          Own a copy of <em>Songs for Ingrid</em> — compact disc sales and
          shipping details will appear here.
        </p>

        <CelticFrame className="mt-12">
          <div className="space-y-6 text-center">
            <div>
              <p className="font-display text-2xl text-gold-bright">
                Songs for Ingrid — CD
              </p>
              <p className="mt-2 text-mist/70">Price &amp; shipping TBD</p>
            </div>

            <button
              type="button"
              disabled
              className="w-full border border-gold/50 bg-gold/10 px-6 py-3 font-display text-sm tracking-wider text-gold-bright uppercase opacity-80 sm:w-auto"
            >
              Buy CD — Coming Soon
            </button>

            <p className="text-sm text-mist/55">
              Placeholder checkout — Stripe / PayPal storefront to be connected.
            </p>
          </div>
        </CelticFrame>
      </div>
    </section>
  );
}
