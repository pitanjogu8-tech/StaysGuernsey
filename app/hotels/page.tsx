import { Breadcrumbs } from "@/components/breadcrumbs"
import { HotelSearch } from "@/components/hotel-search"
import { WhyBook } from "@/components/why-book"

export const metadata = {
  title: "All Hotels in Guernsey, Herm & Sark",
  description:
    "Every hotel we list across Guernsey, Herm and Sark — filter by island, parish or amenity, add your dates and compare live prices.",
  alternates: { canonical: "/hotels" },
}

export default function HotelsIndexPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 pt-14">
        <Breadcrumbs items={[{ label: "All hotels" }]} />
        <h1 className="mt-4 font-[family-name:var(--font-fraunces)] text-4xl font-semibold text-[#0f3d3e] sm:text-5xl">
          All hotels in Guernsey
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[#0f3d3e]/70">
          Every hotel we list across Guernsey, Herm and Sark. Filter by island, parish or amenity, add your dates, and
          tap any one to compare live prices.
        </p>
      </div>
      <HotelSearch />
      <WhyBook />
    </>
  )
}
