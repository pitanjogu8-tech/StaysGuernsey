import { Hotel as HotelIcon } from "lucide-react"
import { hotelLocation, type Hotel } from "@/lib/hotels"

/**
 * The hotel's credited photo, or — when we don't have a licensed photo yet — a
 * branded panel. We deliberately don't reuse stock images here, so no two cards
 * look like copies of each other.
 */
export function HotelPhoto({
  hotel,
  className = "",
  priority = false,
}: {
  hotel: Hotel
  className?: string
  priority?: boolean
}) {
  if (hotel.photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- remote CC-licensed images, served as-is
      <img
        src={hotel.photo.src}
        alt={hotel.photo.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`size-full object-cover ${className}`}
      />
    )
  }

  const tone =
    hotel.island === "Herm"
      ? "from-[#1f5f5a] to-[#0f3d3e]"
      : hotel.island === "Sark"
        ? "from-[#3d5a3a] to-[#0f3d3e]"
        : "from-[#16504f] to-[#0b2e2f]"

  return (
    <div
      className={`relative flex size-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br ${tone} px-6 text-center ${className}`}
      role="img"
      aria-label={`${hotel.name}, ${hotelLocation(hotel)}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,#f6f1e7_1px,transparent_0)] [background-size:18px_18px]"
      />
      <HotelIcon className="relative size-7 text-[#e9b872]" aria-hidden="true" />
      <p className="relative mt-3 line-clamp-2 font-[family-name:var(--font-fraunces)] text-xl font-semibold leading-snug text-[#f6f1e7]">
        {hotel.name}
      </p>
      <p className="relative mt-1 text-xs uppercase tracking-[0.2em] text-[#f6f1e7]/60">{hotelLocation(hotel)}</p>
    </div>
  )
}

/** "Photo: author (licence)" line with links, as the CC licences require. */
export function PhotoCredit({ hotel, className = "" }: { hotel: Hotel; className?: string }) {
  if (!hotel.photo) return null
  const p = hotel.photo
  return (
    <p className={`text-xs text-[#0f3d3e]/55 ${className}`}>
      {p.caption ? `${p.caption}. ` : ""}Photo:{" "}
      <a href={p.sourceUrl} target="_blank" rel="noopener nofollow" className="underline hover:text-[#0f3d3e]">
        {p.author}
      </a>
      ,{" "}
      <a href={p.licenseUrl} target="_blank" rel="noopener nofollow license" className="underline hover:text-[#0f3d3e]">
        {p.license}
      </a>
    </p>
  )
}
