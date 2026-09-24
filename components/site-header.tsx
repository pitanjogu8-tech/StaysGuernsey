import Link from "next/link"

const navLinks = [
  { label: "All hotels", href: "/hotels" },
  { label: "Featured stays", href: "/#featured" },
  { label: "By area", href: "/#areas" },
  { label: "Good to know", href: "/#faq" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0f3d3e]/10 bg-[#f6f1e7]/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-[family-name:var(--font-fraunces)] text-xl font-semibold tracking-tight text-[#0f3d3e]">
            Stays Guernsey
          </span>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-[#0f3d3e]/50 sm:inline">
            .gg
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#0f3d3e]/70 transition-colors hover:text-[#0f3d3e]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/#search"
          className="rounded-full bg-[#0f3d3e] px-5 py-2 text-sm font-semibold text-[#f6f1e7] transition-colors hover:bg-[#0f3d3e]/90"
        >
          Find a stay
        </a>
      </div>
    </header>
  )
}
