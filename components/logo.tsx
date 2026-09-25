import Link from "next/link"

const TEAL = "#0f3d3e"
const CREAM = "#f6f1e7"
const CORAL = "#e07a5f"
const GOLD = "#e9b872"

/**
 * The Stays Guernsey mark: Guernsey, Herm and Sark on the horizon, with a lit
 * doorway in Guernsey ("your place on the island"). Master files live in /public/brand.
 */
export function LogoMark({
  reverse = false,
  showSea = true,
  className = "",
}: {
  /** Cream land and sea, for dark backgrounds. */
  reverse?: boolean
  showSea?: boolean
  className?: string
}) {
  const land = reverse ? CREAM : TEAL
  return (
    <svg
      viewBox={showSea ? "0 17 120 60" : "0 17 120 47"}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="90" cy="27" r="7.5" fill={CORAL} />
      <path d="M3 62C7 51 15 43 25 39.5C33 36.5 43 35 50.5 38C58.5 41 64.5 50 68 62Z" fill={land} />
      <path d="M31 62V52a6 6 0 0 1 12 0V62Z" fill={GOLD} />
      <path d="M70.5 62C73 56.5 79 56.5 81.5 62ZM84 62C86.5 52 92 46.5 99 46.5C106 46.5 111.5 52 115 62Z" fill={land} />
      {showSea ? (
        <path
          d="M12 72.5q5.25-4 10.5 0t10.5 0t10.5 0t10.5 0t10.5 0t10.5 0t10.5 0t10.5 0t10.5 0"
          fill="none"
          stroke={land}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      ) : null}
    </svg>
  )
}

/** Mark + wordmark, linked to the homepage. The name stays as real text for SEO and screen readers. */
export function Logo({ reverse = false, className = "" }: { reverse?: boolean; className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Stays Guernsey — home">
      <LogoMark reverse={reverse} className="h-9 w-auto shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5" />
      <span
        className={`font-[family-name:var(--font-fraunces)] text-xl font-semibold tracking-tight ${
          reverse ? "text-[#f6f1e7]" : "text-[#0f3d3e]"
        }`}
      >
        Stays Guernsey
      </span>
    </Link>
  )
}
