import Link from "next/link"

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-5 py-28 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#e07a5f]">Page not found</p>
      <h1 className="mt-3 font-[family-name:var(--font-fraunces)] text-4xl font-semibold text-[#0f3d3e] sm:text-5xl">
        Lost at sea?
      </h1>
      <p className="mt-4 text-lg text-[#0f3d3e]/70">
        We couldn&apos;t find that page — but there are plenty of places to stay.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/hotels"
          className="rounded-full bg-[#0f3d3e] px-6 py-3 text-sm font-semibold text-[#f6f1e7] hover:bg-[#0f3d3e]/90"
        >
          Browse all hotels
        </Link>
        <Link
          href="/"
          className="rounded-full border border-[#0f3d3e]/25 px-6 py-3 text-sm font-semibold text-[#0f3d3e] hover:bg-[#0f3d3e]/5"
        >
          Back to home
        </Link>
      </div>
    </section>
  )
}
