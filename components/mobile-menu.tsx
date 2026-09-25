"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export function MobileMenu({ links }: { links: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close whenever the route changes, and on Escape.
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex size-10 items-center justify-center rounded-full text-[#0f3d3e] transition-colors hover:bg-[#0f3d3e]/5"
      >
        {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
      </button>

      {open ? (
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="absolute inset-x-0 top-16 h-[calc(100dvh-4rem)] bg-[#0f3d3e]/40"
        />
      ) : null}
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="absolute inset-x-0 top-16 border-b border-[#0f3d3e]/10 bg-[#f6f1e7] px-5 pb-6 pt-2 shadow-lg"
        >
          <ul className="divide-y divide-[#0f3d3e]/10">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 font-[family-name:var(--font-fraunces)] text-lg font-semibold text-[#0f3d3e]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  )
}
