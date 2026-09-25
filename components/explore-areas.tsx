import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { areas } from "@/lib/areas"

/** One section for "where on the island?" — replaces the old Featured stays + Browse by area pair. */
export function ExploreAreas() {
  return (
    <section id="areas" className="scroll-mt-20 bg-[#0f3d3e] py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#e9b872]">Explore by area</p>
            <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-[#f6f1e7] sm:text-4xl">
              Small islands, very different moods.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#f6f1e7]/75">
              Nowhere on Guernsey is more than a 20-minute drive away, and Herm and Sark are a short ferry hop — so
              pick the setting you fancy and let the location do the rest.
            </p>
          </div>
          <Link
            href="/featured"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#e9b872] hover:text-[#f6f1e7]"
          >
            Or see our featured stays <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4 md:grid-rows-2">
          {areas.map((area, i) => (
            <Link
              key={area.slug}
              href={`/stays/${area.slug}`}
              className={`group relative isolate flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl p-5 ${
                i === 0 ? "md:col-span-2 md:row-span-2 md:min-h-[26rem]" : ""
              }`}
            >
              <Image
                src={area.image}
                alt={area.imageAlt}
                fill
                sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                className="-z-10 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b2e2f]/90 via-[#0b2e2f]/35 to-transparent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e9b872]">{area.category}</span>
              <span className="mt-1 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#f6f1e7]">
                {area.areaLabel}
              </span>
              <span className="mt-1 text-sm text-[#f6f1e7]/80">{area.teaser}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
