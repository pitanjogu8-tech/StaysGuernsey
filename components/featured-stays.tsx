import { areas } from "@/lib/areas"
import { StayCard, type Stay } from "./stay-card"

const stayImages: Record<string, string> = {
  "st-peter-port": "/images/guernsey-townhouse.png",
  "west-coast": "/images/guernsey-cottage.png",
  "south-coast": "/images/guernsey-coast.png",
  herm: "/images/herm-coast.png",
  sark: "/images/sark-cliffs.png",
}

const stayLinks: Record<string, string> = {
  "st-peter-port": "https://www.booking.com/searchresults.html?ss=St+Peter+Port%2C+Guernsey",
  "west-coast": "https://www.airbnb.com/s/Guernsey/homes",
  "south-coast": "https://www.booking.com/searchresults.html?ss=St+Martin%2C+Guernsey",
  herm: "https://www.booking.com/searchresults.html?ss=Herm%2C+Guernsey",
  sark: "https://www.booking.com/searchresults.html?ss=Sark%2C+Guernsey",
}

const stays: Stay[] = areas.map((area) => ({
  name: area.title,
  area: area.areaLabel,
  tag: area.category,
  blurb: area.description,
  image: stayImages[area.slug],
  href: stayLinks[area.slug],
  pageHref: `/stays/${area.slug}`,
}))

export function FeaturedStays() {
  return (
    <section id="featured" className="scroll-mt-20 bg-[#f6f1e7] py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#e07a5f]">
            Where to stay
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-[#0f3d3e] sm:text-4xl">
            Featured stays across the island
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#0f3d3e]/70">
            Every link opens live availability and up-to-date prices from
            trusted booking sites. Pick a style below and compare in seconds.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stays.map((stay) => (
            <StayCard key={stay.name} stay={stay} />
          ))}
        </div>
      </div>
    </section>
  )
}
