import Link from "next/link"
import { areas } from "@/lib/areas"

export function SiteFooter() {
  return (
    <footer className="bg-[#0f3d3e] pb-10 pt-16 text-[#f6f1e7]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <p className="font-[family-name:var(--font-fraunces)] text-xl font-semibold">Stays Guernsey</p>
            <p className="mt-3 text-sm leading-relaxed text-[#f6f1e7]/65">
              An independent guide to places to stay on Guernsey, Herm and Sark — helping visitors find the right
              base and compare live prices.
            </p>
          </div>

          <nav aria-label="Where to stay">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e9b872]">Where to stay</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/hotels" className="text-[#f6f1e7]/75 transition-colors hover:text-[#f6f1e7]">
                  All hotels
                </Link>
              </li>
              <li>
                <Link href="/featured" className="text-[#f6f1e7]/75 transition-colors hover:text-[#f6f1e7]">
                  Featured stays
                </Link>
              </li>
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/stays/${area.slug}`}
                    className="text-[#f6f1e7]/75 transition-colors hover:text-[#f6f1e7]"
                  >
                    {area.areaLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e9b872]">Good to know</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/#faq" className="text-[#f6f1e7]/75 transition-colors hover:text-[#f6f1e7]">
                  Travel FAQs
                </Link>
              </li>
              <li>
                <Link href="/credits" className="text-[#f6f1e7]/75 transition-colors hover:text-[#f6f1e7]">
                  Photo credits
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-[#f6f1e7]/55">
              <span className="font-semibold text-[#f6f1e7]/80">Affiliate disclosure:</span> some links on this site
              are affiliate links. If you book through them we may earn a small commission at no extra cost to you.
              This keeps Stays Guernsey free to use.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-[#f6f1e7]/15 pt-6 text-xs text-[#f6f1e7]/50">
          &copy; {new Date().getFullYear()} staysguernsey.gg — All rights reserved.
        </div>
      </div>
    </footer>
  )
}
