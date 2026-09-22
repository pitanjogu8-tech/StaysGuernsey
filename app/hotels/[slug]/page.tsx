import { notFound } from "next/navigation"
import { hotels } from "@/lib/hotels"
import { Stay22Map } from "@/components/stay22-map"

export function generateStaticParams() {
  return hotels.map((h) => ({ slug: h.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const hotel = hotels.find((h) => h.slug === params.slug)
  if (!hotel) return {}
  return { title: `${hotel.name} — ${hotel.area}, Guernsey`, description: hotel.description }
}

export default function HotelPage({ params }: { params: { slug: string } }) {
  const hotel = hotels.find((h) => h.slug === params.slug)
  if (!hotel) return notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: hotel.name,
    address: hotel.address,
    description: hotel.description,
  }

  return (
    <main className="mx-auto max-w-4xl px-5 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="text-sm uppercase tracking-wide text-orange-500">{hotel.type} · {hotel.area}</p>
      <h1 className="mt-2 text-4xl font-serif">{hotel.name}</h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-600">{hotel.description}</p>
      <div className="mt-10">
        <Stay22Map address={hotel.address} height={500} />
      </div>
    </main>
  )
}
