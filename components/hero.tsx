import Image from "next/image"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/guernsey-hero.webp"
          alt="St Peter Port harbour on Guernsey at golden hour, with pastel townhouses and boats in the marina"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d3e] via-[#0f3d3e]/55 to-[#0f3d3e]/25" />
      </div>

      <div className="mx-auto flex min-h-[62vh] max-w-6xl flex-col justify-end px-5 pb-36 pt-24 sm:min-h-[70vh] sm:pb-32">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#f6f1e7]/80">
          Guernsey · Herm · Sark
        </p>
        <h1 className="max-w-3xl font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.05] text-[#f6f1e7] sm:text-6xl">
          Find your place to stay on Guernsey.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#f6f1e7]/85">
          A local guide to seafront hotels, granite cottages and island escapes — compare live prices and book in a
          couple of taps.
        </p>
      </div>
    </section>
  )
}
