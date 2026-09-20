import Image from "next/image"

const areas = [
  {
    name: "St Peter Port",
    note: "The capital — harbour, restaurants, and history.",
    href: "https://www.booking.com/searchresults.html?ss=St+Peter+Port%2C+Guernsey",
  },
  {
    name: "Cobo & the west coast",
    note: "Sandy bays and legendary sunsets.",
    href: "https://www.booking.com/searchresults.html?ss=Cobo%2C+Guernsey",
  },
  {
    name: "St Martin",
    note: "Cliff paths, coves, and quiet lanes.",
    href: "https://www.booking.com/searchresults.html?ss=St+Martin%2C+Guernsey",
  },
  {
    name: "Whole of Guernsey",
    note: "See everything available island-wide.",
    href: "https://www.booking.com/searchresults.html?ss=Guernsey",
  },
]

export function BrowseByArea() {
  return (
    <section id="areas" className="scroll-mt-20 bg-[#0f3d3e] py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#e9b872]">
              Explore by area
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-[#f6f1e7] sm:text-4xl">
              Guernsey is small — but every parish feels different.
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-[#f6f1e7]/75">
              Nowhere is more than a 20-minute drive away, so pick the setting
              you fancy and let the location do the rest.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {areas.map((area) => (
                <li key={area.name}>
                  <a
                    href={area.href}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    className="flex h-full flex-col rounded-xl border border-[#f6f1e7]/15 bg-[#f6f1e7]/5 p-4 transition-colors hover:border-[#e9b872]/60 hover:bg-[#f6f1e7]/10"
                  >
                    <span className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-[#f6f1e7]">
                      {area.name}
                    </span>
                    <span className="mt-1 text-sm text-[#f6f1e7]/65">
                      {area.note}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/guernsey-beach.png"
              alt="Cobo Bay beach on the west coast of Guernsey at low tide with red granite rocks"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
