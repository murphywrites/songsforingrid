import Image from "next/image";
import { CelticKnotDivider } from "@/components/CelticKnot";

export function EventSection() {
  return (
    <section
      id="event"
      className="relative bg-mist px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-sm tracking-[0.3em] text-forest-mid uppercase">
          Album release
        </p>
        <h2 className="mt-3 font-display text-3xl text-forest sm:text-4xl">
          Songs for Ingrid Music Event
        </h2>
        <CelticKnotDivider className="my-6 text-forest-soft" />
        <p className="mx-auto max-w-lg text-lg text-ink/75">
          Saturday, October 10th · 4–9 pm
          <br />
          Bourbon Street, 3359 W. 115th St., Merrionette Park, IL
        </p>

        <a
          href="/images/album-release-flyer.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 block transition hover:opacity-95"
          aria-label="Open album release event flyer"
        >
          <Image
            src="/images/album-release-flyer.jpg"
            alt="Songs for Ingrid Music Event flyer — Saturday October 10th, 4–9 pm at Bourbon Street in Merrionette Park"
            width={662}
            height={1024}
            className="mx-auto h-auto w-full max-w-md shadow-[0_12px_40px_rgba(15,36,25,0.25)]"
            sizes="(max-width: 768px) 100vw, 28rem"
          />
        </a>

        <p className="mt-6 text-sm text-ink/55">
          Tap the flyer to view full size. $20 for food &amp; drinks.
        </p>
      </div>
    </section>
  );
}
