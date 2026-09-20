import Image from "next/image"

export type Stay = {
  name: string
  area: string
  blurb: string
  tag: string
  image: string
  /** A normal Booking.com / Airbnb / hotel URL. Stay22's Let Me Allez script
   *  auto-converts this into your affiliate link at runtime. */
  href: string
}

export function StayCard({ stay }: { stay: Stay }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#0f3d3e]/10 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={stay.image || "/placeholder.svg"}
          alt={`${stay.name} — ${stay.area}, Guernsey`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-[#f6f1e7]/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0f3d3e]">
          {stay.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#e07a5f]">
          {stay.area}
        </p>
        <h3 className="mt-1 font-[family-name:var(--font-fraunces)] text-xl font-semibold text-[#0f3d3e]">
          {stay.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[#0f3d3e]/70">
          {stay.blurb}
        </p>
        <a
          href={stay.href}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="mt-5 inline-flex items-center justify-center rounded-full bg-[#0f3d3e] px-5 py-2.5 text-sm font-semibold text-[#f6f1e7] transition-colors hover:bg-[#0f3d3e]/90"
        >
          Check prices &amp; availability
        </a>
      </div>
    </article>
  )
}
