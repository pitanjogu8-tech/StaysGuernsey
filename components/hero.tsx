import Image from "next/image"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/guernsey-hero.png"
          alt="St Peter Port harbour on Guernsey at golden hour, with pastel townhouses and boats in the marina"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d3e] via-[#0f3d3e]/50 to-[#0f3d3e]/20" />
      </div>

      <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-end px-5 pb-32 pt-28">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#f6f1e7]/80">
          The Channel Islands
        </p>
        <h1 className="max-w-3xl font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.05] text-[#f6f1e7] sm:text-6xl">
          Find your place to stay on Guernsey.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#f6f1e7]/85">
          A local, hand-picked guide to seafront hotels, granite cottages, and
          self-catering apartments across the island — compare prices and book
          in a couple of taps.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#search"
            className="rounded-full bg-[#e07a5f] px-7 py-3 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Search hotels
          </a>
          <a
            href="#areas"
            className="rounded-full border border-[#f6f1e7]/40 px-7 py-3 text-base font-semibold text-[#f6f1e7] transition-colors hover:bg-[#f6f1e7]/10"
          >
            Explore by area
          </a>
        </div>
      </div>
    </section>
  )
}
