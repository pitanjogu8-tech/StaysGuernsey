import { StayCard, type Stay } from "./stay-card"

const stays: Stay[] = [
  {
    name: "Seafront hotels in St Peter Port",
    area: "St Peter Port",
    tag: "Hotels",
    blurb:
      "Grand harbour-view hotels a short stroll from the marina, cobbled high street, and the ferry terminal — ideal for a first visit.",
    image: "/images/guernsey-townhouse.png",
    href: "https://www.booking.com/searchresults.html?ss=St+Peter+Port%2C+Guernsey",
  },
  {
    name: "Coastal cottages & self-catering",
    area: "West coast",
    tag: "Cottages",
    blurb:
      "Traditional granite cottages and self-catering homes near Cobo and Vazon — space to spread out with the beach on your doorstep.",
    image: "/images/guernsey-cottage.png",
    href: "https://www.airbnb.com/s/Guernsey/homes",
  },
  {
    name: "Clifftop escapes on the south coast",
    area: "St Martin & Forest",
    tag: "B&Bs",
    blurb:
      "Peaceful guesthouses and B&Bs close to the famous south-coast cliff paths, hidden bays, and some of the island's best walking.",
    image: "/images/guernsey-coast.png",
    href: "https://www.booking.com/searchresults.html?ss=St+Martin%2C+Guernsey",
  },
]

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
