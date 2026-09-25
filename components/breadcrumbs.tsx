import Link from "next/link"

const BASE = "https://www.staysguernsey.gg"

/** Visible breadcrumb trail plus BreadcrumbList structured data for search results. */
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  const trail = [{ label: "Home", href: "/" }, ...items]
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${BASE}${item.href === "/" ? "" : item.href}` } : {}),
    })),
  }

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-[#0f3d3e]/60">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {trail.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {i > 0 ? <span aria-hidden="true">/</span> : null}
            {item.href && i < trail.length - 1 ? (
              <Link href={item.href} className="transition-colors hover:text-[#0f3d3e]">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-[#0f3d3e]">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
