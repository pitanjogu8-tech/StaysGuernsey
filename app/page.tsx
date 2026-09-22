import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { FeaturedStays } from "@/components/featured-stays"
import { BrowseByArea } from "@/components/browse-by-area"
import { FaqFooter } from "@/components/faq-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6f1e7] font-[family-name:var(--font-inter)]">
      <SiteHeader />
      <Hero />
      <FeaturedStays />
      <BrowseByArea />
      <FaqFooter />
    </main>
  )
}
