import { CelticFrame, CelticKnotDivider } from "@/components/CelticKnot";
import { BANDCAMP_ALBUM_URL } from "@/lib/links";

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
          Own the album
        </p>
        <h2 className="mt-3 font-display text-3xl text-gold-bright sm:text-4xl">
          Get Songs for Ingrid
        </h2>
        <CelticKnotDivider className="my-6" />
        <p className="mx-auto max-w-lg text-lg text-mist/85">
          Sample tracks or buy the digital album on Bandcamp. Physical CDs are
          $20 including shipping.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <CelticFrame>
            <div className="space-y-6 text-center">
              <div>
                <p className="font-display text-2xl text-gold-bright">
                  Digital album
                </p>
                <p className="mt-2 text-mist/70">$10 on Bandcamp</p>
              </div>

              <a
                href={BANDCAMP_ALBUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full border border-gold bg-gold px-6 py-3 text-center font-display text-sm leading-snug tracking-wider text-forest-deep uppercase transition hover:bg-gold-bright"
              >
                Sample Music
                <span className="mt-1 block font-body text-[0.7rem] normal-case tracking-normal text-forest-deep/80">
                  and/or Buy Digital CD
                </span>
              </a>

              <p className="text-sm text-mist/55">
                Preview songs free on Bandcamp, then buy if you like. Streaming
                + download. All proceeds benefit The Ingrid Murphy Foundation.
              </p>
            </div>
          </CelticFrame>

          <CelticFrame>
            <div className="space-y-6 text-center">
              <div>
                <p className="font-display text-2xl text-gold-bright">
                  Songs for Ingrid — CD
                </p>
                <p className="mt-2 text-mist/70">$20 including shipping</p>
              </div>

              <button
                type="button"
                disabled
                className="w-full border border-gold/50 bg-gold/10 px-6 py-3 font-display text-sm tracking-wider text-gold-bright uppercase opacity-80"
              >
                Buy CD — Coming Soon
              </button>

              <p className="text-sm text-mist/55">
                Physical discs are on the way. Checkout will open here once
                they arrive.
              </p>
            </div>
          </CelticFrame>
        </div>
      </div>
    </section>
  );
}
