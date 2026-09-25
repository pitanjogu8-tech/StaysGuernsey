import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowDown, Award, Check, Star } from "lucide-react"
import { getHotel, hotelLocation, hotels } from "@/lib/hotels"
import { getFeaturedPick } from "@/lib/featured"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { HotelCard } from "@/components/hotel-card"
import { HotelPhoto, PhotoCredit } from "@/components/hotel-photo"
import { MapWithDates } from "@/components/map-with-dates"

type Params = Promise<{ slug: string }>

export function generateStaticParams() {
  return hotels.map((h) => ({ slug: h.slug }))
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const hotel = getHotel(slug)
  if (!hotel) return {}
  const title = `${hotel.name} — ${hotelLocation(hotel)}, ${hotel.island === "Guernsey" ? "Guernsey" : "Channel Islands"}`
  return {
    title,
    description: `${hotel.description} Compare live prices and availability.`,
    alternates: { canonical: `/hotels/${hotel.slug}` },
    openGraph: {
      title,
      description: hotel.description,
      images: [hotel.photo?.src ?? "/images/og-guernsey.jpg"],
    },
  }
}

export default async function HotelPage({ params }: { params: Params }) {
  const { slug } = await params
  const hotel = getHotel(slug)
  if (!hotel) return notFound()

  const pick = getFeaturedPick(hotel.slug)
  const nearby = [
    ...hotels.filter((h) => h.slug !== hotel.slug && h.area === hotel.area),
    ...hotels.filter((h) => h.slug !== hotel.slug && h.area !== hotel.area && h.island === hotel.island),
    ...hotels.filter((h) => h.slug !== hotel.slug && h.island !== hotel.island),
  ]
    .sort((a, b) => Number(Boolean(b.photo)) - Number(Boolean(a.photo)))
    .slice(0, 3)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: hotel.name,
    address: hotel.address,
    description: hotel.description,
    url: `https://www.staysguernsey.gg/hotels/${hotel.slug}`,
    ...(hotel.photo ? { image: hotel.photo.src } : {}),
    amenityFeature: hotel.amenities.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    ...(hotel.stars ? { starRating: { "@type": "Rating", ratingValue: hotel.stars } } : {}),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="mx-auto max-w-6xl px-5 pt-10">
        <Breadcrumbs items={[{ label: "All hotels", href: "/hotels" }, { label: hotel.name }]} />

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div className="order-2 lg:order-1">
            <p className="flex flex-wrap items-center gap-2 text-sm font-medium uppercase tracking-[0.15em] text-[#e07a5f]">
              {hotel.stars ? (
                <span className="inline-flex items-center gap-1" aria-label={`${hotel.stars}-star rated`}>
                  <Star className="size-3.5 fill-current" aria-hidden="true" />
                  {hotel.stars}-star ·
                </span>
              ) : null}
              {hotel.type} · {hotelLocation(hotel)}
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-tight text-[#0f3d3e] sm:text-5xl">
              {hotel.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#0f3d3e]/75">{hotel.description}</p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Amenities">
              {hotel.amenities.map((amenity) => (
                <li
                  key={amenity}
                  className="rounded-md border border-[#0f3d3e]/10 bg-white px-2.5 py-1 text-sm font-medium text-[#0f3d3e]/80"
                >
                  {amenity}
                </li>
              ))}
            </ul>

            {pick ? (
              <div className="mt-8 rounded-2xl border border-[#e9b872]/60 bg-[#e9b872]/10 p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-[#0f3d3e]">
                  <Award className="size-4 text-[#c98a2e]" aria-hidden="true" />
                  Featured: {pick.award}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-[#0f3d3e]/80">
                  {pick.reasons.map((r) => (
                    <li key={r} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-[#0f3d3e]" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
                <Link href="/featured" className="mt-3 inline-block text-sm font-semibold text-[#0f3d3e] underline">
                  See all featured stays
                </Link>
              </div>
            ) : null}

            <a
              href="#prices"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#e07a5f] px-7 py-3 text-base font-semibold text-white transition hover:brightness-105"
            >
              Check prices &amp; availability <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>

          <figure className="order-1 lg:order-2">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-sm">
              <HotelPhoto hotel={hotel} priority />
            </div>
            <figcaption>
              <PhotoCredit hotel={hotel} className="mt-2" />
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="prices" className="mx-auto max-w-6xl scroll-mt-24 px-5 pt-16">
        <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#0f3d3e] sm:text-3xl">
          Live prices &amp; availability
        </h2>
        <p className="mt-2 max-w-2xl text-[#0f3d3e]/70">
          Add your dates to compare rates for {hotel.name} and nearby places from the big booking sites.
        </p>
        <div className="mt-6">
          <MapWithDates address={hotel.address} height={520} />
        </div>
      </section>

      {nearby.length > 0 ? (
        <section className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#0f3d3e] sm:text-3xl">
            More places to stay nearby
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nearby.map((h) => (
              <HotelCard key={h.slug} hotel={h} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  )
}
