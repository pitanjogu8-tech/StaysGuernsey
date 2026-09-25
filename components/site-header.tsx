import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"
import { Logo } from "@/components/logo"

export const navLinks = [
  { label: "All hotels", href: "/hotels" },
  { label: "Featured stays", href: "/featured" },
  { label: "Areas", href: "/#areas" },
  { label: "Good to know", href: "/#faq" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0f3d3e]/10 bg-[#f6f1e7]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#0f3d3e]/70 transition-colors hover:text-[#0f3d3e]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#search"
            className="hidden rounded-full bg-[#0f3d3e] px-5 py-2 sm:inline-flex text-sm font-semibold text-[#f6f1e7] transition-colors hover:bg-[#0f3d3e]/90"
          >
            Find a stay
          </Link>
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </header>
  )
}
