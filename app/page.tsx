import { Hero } from "@/components/hero"
import { HotelSearch } from "@/components/hotel-search"
import { TrustStrip } from "@/components/why-book"
import { ExploreAreas } from "@/components/explore-areas"
import { Faq } from "@/components/faq"

export const metadata = { alternates: { canonical: "/" } }

export default function Page() {
  return (
    <>
      <Hero />
      <HotelSearch overlapHero limit={6} afterForm={<TrustStrip />} />
      <ExploreAreas />
      <Faq />
    </>
  )
}
