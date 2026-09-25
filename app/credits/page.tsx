import Link from "next/link"
import { hotelsWithPhotos } from "@/lib/hotels"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Photo Credits",
  description: "Credits and licences for the photographs used on Stays Guernsey.",
  alternates: { canonical: "/credits" },
}

export default function CreditsPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12">
      <Breadcrumbs items={[{ label: "Photo credits" }]} />
      <h1 className="mt-6 font-[family-name:var(--font-fraunces)] text-4xl font-semibold text-[#0f3d3e]">Photo credits</h1>
      <p className="mt-4 text-lg leading-relaxed text-[#0f3d3e]/75">
        Hotel photos on this site are shared by their photographers under Creative Commons licences. Thank you to
        everyone below. Photos are shown unaltered apart from cropping to fit.
      </p>

      <ul className="mt-10 divide-y divide-[#0f3d3e]/10 border-y border-[#0f3d3e]/10">
        {hotelsWithPhotos.map((h) => {
          const p = h.photo!
          return (
            <li key={h.slug} className="py-5">
              <Link
                href={`/hotels/${h.slug}`}
                className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-[#0f3d3e] hover:text-[#e07a5f]"
              >
                {h.name}
              </Link>
              <p className="mt-1 text-sm text-[#0f3d3e]/70">
                {p.caption ?? p.alt}. Photo by{" "}
                <a href={p.sourceUrl} target="_blank" rel="noopener nofollow" className="underline">
                  {p.author}
                </a>
                , licensed under{" "}
                <a href={p.licenseUrl} target="_blank" rel="noopener nofollow license" className="underline">
                  {p.license}
                </a>
                .
              </p>
            </li>
          )
        })}
      </ul>

      <p className="mt-8 text-sm leading-relaxed text-[#0f3d3e]/60">
        Other images on this site are our own illustrative scenes of the islands.
      </p>
    </section>
  )
}
