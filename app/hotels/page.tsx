import { SiteHeader } from "@/components/site-header"
import { HotelSearch } from "@/components/hotel-search"
import { WhyBook } from "@/components/why-book"
import { FaqFooter } from "@/components/faq-footer"

export const metadata = {
  title: "All Hotels in Guernsey",
  description: "A full directory of hotels across Guernsey, Herm, and Sark — compare prices and check availability.",
}

export default function HotelsIndexPage() {
  return (
    <main className="min-h-screen bg-[#f6f1e7] font-[family-name:var(--font-inter)]">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-5 pt-14">
        <h1 className="font-[family-name:var(--font-fraunces)] text-4xl font-semibold text-[#0f3d3e] sm:text-5xl">
          All hotels in Guernsey
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[#0f3d3e]/70">
          Every hotel we track across Guernsey, Herm, and Sark — filter by island, parish or amenity, add your dates,
          and tap any one to compare live prices.
        </p>
      </div>
      <HotelSearch />
      <WhyBook />
      <FaqFooter />
    </main>
  )
}
