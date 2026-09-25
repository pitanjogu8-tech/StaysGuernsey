import Link from "next/link"
import { ArrowRight, Check, MapPin, Star } from "lucide-react"
import { featuredHotels } from "@/lib/featured"
import { hotelLocation, hotels } from "@/lib/hotels"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { HotelPhoto, PhotoCredit } from "@/components/hotel-photo"

export const metadata = {
  title: "Featured Stays — Our Pick of Guernsey's Hotels",
  description:
    "The best hotel on Guernsey, Herm and Sark for each kind of trip — luxury, families, beaches, harbour views, island escapes, sunsets and budget — and why we picked them.",
  alternates: { canonical: "/featured" },
}

const criteria = [
  {
    title: "One pick per kind of trip",
    body: "Instead of a single ranking, each hotel earns its place by being the best fit for a particular type of stay.",
  },
  {
    title: "Facts, not fluff",
    body: "Every reason we give comes from what the hotel actually offers: its location, facilities and star rating.",
  },
  {
    title: "Chosen from the whole island",
    body: "Picks are compared against every hotel we list across Guernsey, Herm and Sark, not just the big names.",
  },
]

export default function FeaturedPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured stays on Guernsey, Herm and Sark",
    itemListElement: featuredHotels.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${f.hotel.name} — ${f.award}`,
      url: `https://www.staysguernsey.gg/hotels/${f.hotel.slug}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="mx-auto max-w-6xl px-5 pt-10">
        <Breadcrumbs items={[{ label: "Featured stays" }]} />
        <div className="mt-6 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#e07a5f]">Editor&apos;s picks</p>
          <h1 className="mt-3 font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-tight text-[#0f3d3e] sm:text-5xl">
            Featured stays, and why they made the cut
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[#0f3d3e]/75">
            The right hotel depends on the trip. Here&apos;s our pick for each kind of stay, from a five-star treat
            in St Peter Port to a quiet night on car-free Herm.
          </p>
        </div>

        <ul
          className="no-scrollbar -mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
          aria-label="Jump to a pick"
        >
          {featuredHotels.map((f) => (
            <li key={f.slug} className="shrink-0">
              <a
                href={`#${f.slug}`}
                className="inline-flex whitespace-nowrap rounded-full border border-[#0f3d3e]/15 bg-white px-4 py-2 text-sm font-medium text-[#0f3d3e] transition-colors hover:border-[#0f3d3e] hover:bg-[#0f3d3e] hover:text-[#f6f1e7]"
              >
                {f.award}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="how-we-pick" className="mx-auto max-w-6xl px-5 pt-14">
        <h2 id="how-we-pick" className="sr-only">
          How we pick
        </h2>
        <div className="grid gap-4 rounded-3xl bg-[#0f3d3e] p-6 text-[#f6f1e7] sm:p-8 md:grid-cols-3">
          {criteria.map((c, i) => (
            <div key={c.title}>
              <p className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-[#e9b872]">0{i + 1}</p>
              <h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-lg font-semibold">{c.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#f6f1e7]/70">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-5 py-16 sm:space-y-24">
        {featuredHotels.map((f, i) => (
          <article
            key={f.slug}
            id={f.slug}
            className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-2 lg:gap-14"
          >
            <figure className={i % 2 === 1 ? "lg:order-2" : ""}>
              <Link
                href={`/hotels/${f.hotel.slug}`}
                className="block aspect-[4/3] overflow-hidden rounded-3xl shadow-sm"
                tabIndex={-1}
                aria-hidden="true"
              >
                <HotelPhoto hotel={f.hotel} className="transition-transform duration-500 hover:scale-105" />
              </Link>
              <figcaption>
                <PhotoCredit hotel={f.hotel} className="mt-2" />
              </figcaption>
            </figure>

            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-[#e9b872]/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#0f3d3e]">
                <span className="text-[#c98a2e]">#{i + 1}</span> {f.award}
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-fraunces)] text-3xl font-semibold leading-tight text-[#0f3d3e]">
                <Link href={`/hotels/${f.hotel.slug}`} className="hover:text-[#e07a5f]">
                  {f.hotel.name}
                </Link>
              </h2>
              <p className="mt-2 flex flex-wrap items-center gap-3 text-sm text-[#0f3d3e]/60">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  {hotelLocation(f.hotel)}
                </span>
                {f.hotel.stars ? (
                  <span className="inline-flex items-center gap-1">
                    <Star className="size-3.5 fill-[#e9b872] text-[#e9b872]" aria-hidden="true" />
                    {f.hotel.stars}-star
                  </span>
                ) : null}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#0f3d3e]/80">{f.summary}</p>

              <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-[#e07a5f]">Why it&apos;s featured</h3>
              <ul className="mt-3 space-y-2.5">
                {f.reasons.map((r) => (
                  <li key={r} className="flex gap-2.5 text-[#0f3d3e]/85">
                    <Check className="mt-0.5 size-5 shrink-0 rounded-full bg-[#0f3d3e] p-1 text-[#f6f1e7]" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-[#0f3d3e]/70">
                <span className="font-semibold text-[#0f3d3e]">Ideal for:</span> {f.idealFor}
              </p>

              <Link
                href={`/hotels/${f.hotel.slug}#prices`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0f3d3e] px-6 py-3 text-sm font-semibold text-[#f6f1e7] transition-colors hover:bg-[#0f3d3e]/90"
              >
                Check prices &amp; availability <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-[#0f3d3e]/10 bg-white p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#0f3d3e]">
              Not quite the right fit?
            </h2>
            <p className="mt-1 text-[#0f3d3e]/70">
              Filter all {hotels.length} hotels by island, parish and amenities, or search the map for B&amp;Bs and
              cottages.
            </p>
          </div>
          <Link
            href="/hotels"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#e07a5f] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-105"
          >
            Browse all hotels <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
