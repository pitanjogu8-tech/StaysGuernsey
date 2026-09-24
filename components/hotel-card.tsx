import Image from "next/image"
import Link from "next/link"
import { MapPin, Star } from "lucide-react"
import { hotelImage, type Hotel } from "@/lib/hotels"

export function HotelCard({
  hotel,
  checkin,
  checkout,
}: {
  hotel: Hotel
  checkin?: string
  checkout?: string
}) {
  const query = checkin && checkout ? `?checkin=${checkin}&checkout=${checkout}` : ""
  const href = `/hotels/${hotel.slug}${query}`
  const location = hotel.island === "Guernsey" ? hotel.area : `${hotel.island} island`
  const label = hotel.stars ? `${hotel.stars}-star ${hotel.type.toLowerCase()}` : hotel.type

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#0f3d3e]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={hotelImage(hotel)}
          alt={`${location}, ${hotel.island} — the area around ${hotel.name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#0f3d3e]/90 px-2.5 py-1 text-xs font-medium text-[#f6f1e7] backdrop-blur">
          <MapPin className="size-3" aria-hidden="true" />
          {location}
        </span>
        {hotel.stars ? (
          <span
            className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#e9b872] px-2.5 py-1 text-xs font-semibold text-[#0f3d3e]"
            aria-label={`${hotel.stars}-star rated`}
          >
            <Star className="size-3 fill-current" aria-hidden="true" />
            {hotel.stars}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#e07a5f]">{label}</p>
        <h3 className="mt-1 font-[family-name:var(--font-fraunces)] text-lg font-semibold leading-snug text-[#0f3d3e]">
          <Link href={href} className="transition-colors hover:text-[#e07a5f]">
            {hotel.name}
          </Link>
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-[#0f3d3e]/70">{hotel.description}</p>

        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Amenities">
          {hotel.amenities.map((amenity) => (
            <li
              key={amenity}
              className="rounded-md bg-[#f6f1e7] px-2 py-1 text-xs font-medium text-[#0f3d3e]/80"
            >
              {amenity}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4">
          <div className="border-t border-[#0f3d3e]/10 pt-4 text-sm text-[#0f3d3e]/65">
            {hotel.priceFrom ? (
              <p>
                From <span className="text-lg font-bold text-[#0f3d3e]">£{hotel.priceFrom}</span> / night
              </p>
            ) : (
              <p>
                <span className="font-semibold text-[#0f3d3e]">Live prices</span> from trusted booking sites
              </p>
            )}
          </div>
          <Link
            href={href}
            className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#0f3d3e] px-4 py-2.5 text-sm font-semibold text-[#f6f1e7] transition-colors hover:bg-[#0f3d3e]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f3d3e]/40"
          >
            Check availability &amp; prices
          </Link>
        </div>
      </div>
    </article>
  )
}
