import Link from "next/link"
import { notFound } from "next/navigation"
import { Star } from "lucide-react"
import { hotels } from "@/lib/hotels"
import { Stay22Map } from "@/components/stay22-map"

type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const isoDate = /^\d{4}-\d{2}-\d{2}$/

export function generateStaticParams() {
  return hotels.map((h) => ({ slug: h.slug }))
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const hotel = hotels.find((h) => h.slug === slug)
  if (!hotel) return {}
  return { title: `${hotel.name} — ${hotel.area}, Guernsey`, description: hotel.description }
}

export default async function HotelPage({ params, searchParams }: { params: Params; searchParams: SearchParams }) {
  const { slug } = await params
  const hotel = hotels.find((h) => h.slug === slug)
  if (!hotel) return notFound()

  const sp = await searchParams
  const checkin = typeof sp.checkin === "string" && isoDate.test(sp.checkin) ? sp.checkin : undefined
  const checkout = typeof sp.checkout === "string" && isoDate.test(sp.checkout) ? sp.checkout : undefined
  const datesValid = Boolean(checkin && checkout && checkout > checkin)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: hotel.name,
    address: hotel.address,
    description: hotel.description,
    amenityFeature: hotel.amenities.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    ...(hotel.stars ? { starRating: { "@type": "Rating", ratingValue: hotel.stars } } : {}),
  }

  return (
    <main className="mx-auto max-w-4xl px-5 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/hotels" className="text-sm font-medium text-[#0f3d3e]/60 hover:text-[#0f3d3e]">
        ← All hotels
      </Link>
      <p className="mt-6 flex items-center gap-2 text-sm uppercase tracking-wide text-orange-500">
        {hotel.stars ? (
          <span className="inline-flex items-center gap-1" aria-label={`${hotel.stars}-star rated`}>
            <Star className="size-3.5 fill-current" aria-hidden="true" />
            {hotel.stars}-star ·
          </span>
        ) : null}
        {hotel.type} · {hotel.area}
      </p>
      <h1 className="mt-2 text-4xl font-serif">{hotel.name}</h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-600">{hotel.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Amenities">
        {hotel.amenities.map((amenity) => (
          <li key={amenity} className="rounded-md bg-[#f6f1e7] px-2.5 py-1 text-sm font-medium text-[#0f3d3e]/80">
            {amenity}
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <Stay22Map
          address={hotel.address}
          height={500}
          checkin={datesValid ? checkin : undefined}
          checkout={datesValid ? checkout : undefined}
        />
      </div>
    </main>
  )
}
