import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { areas, getArea } from "@/lib/areas"
import { hotels } from "@/lib/hotels"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { HotelCard } from "@/components/hotel-card"
import { MapWithDates } from "@/components/map-with-dates"

type Params = Promise<{ slug: string }>

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const area = getArea(slug)
  if (!area) return {}
  return {
    title: area.title,
    description: area.description,
    alternates: { canonical: `/stays/${area.slug}` },
    openGraph: { title: area.title, description: area.description, images: [area.image] },
  }
}

export default async function AreaPage({ params }: { params: Params }) {
  const { slug } = await params
  const area = getArea(slug)
  if (!area) return notFound()

  const areaHotels = hotels.filter(area.matches)
  const otherAreas = areas.filter((a) => a.slug !== area.slug)

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <Image src={area.image} alt={area.imageAlt} fill priority sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0f3d3e] via-[#0f3d3e]/60 to-[#0f3d3e]/30" />
        <div className="mx-auto flex min-h-[46vh] max-w-6xl flex-col justify-end px-5 pb-12 pt-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#e9b872]">
            {area.category} · {area.areaLabel}
          </p>
          <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-tight text-[#f6f1e7] sm:text-5xl">
            {area.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#f6f1e7]/85">{area.description}</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 pt-6">
        <Breadcrumbs items={[{ label: "Areas", href: "/#areas" }, { label: area.areaLabel }]} />
      </div>

      {areaHotels.length > 0 ? (
        <section className="mx-auto max-w-6xl px-5 pt-10">
          <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#0f3d3e] sm:text-3xl">
            {areaHotels.length === 1 ? "Our hotel pick" : `Hotels in ${area.areaLabel}`}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areaHotels.map((h) => (
              <HotelCard key={h.slug} hotel={h} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-5 pt-14">
        <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#0f3d3e] sm:text-3xl">
          Every place to stay in {area.areaLabel}
        </h2>
        <p className="mt-2 max-w-2xl text-[#0f3d3e]/70">
          Hotels, B&amp;Bs, cottages and apartments on one map, with live prices from the big booking sites. Add your
          dates for exact rates.
        </p>
        <div className="mt-6">
          <MapWithDates address={area.address} height={560} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#0f3d3e]">
          Explore other areas
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {otherAreas.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/stays/${a.slug}`}
                className="flex h-full flex-col rounded-xl border border-[#0f3d3e]/10 bg-white p-4 transition-colors hover:border-[#0f3d3e]/40"
              >
                <span className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-[#0f3d3e]">
                  {a.areaLabel}
                </span>
                <span className="mt-1 text-sm text-[#0f3d3e]/65">{a.teaser}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
