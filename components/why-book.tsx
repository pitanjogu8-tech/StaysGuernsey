import { BadgePoundSterling, Compass, Ship } from "lucide-react"

const features = [
  {
    icon: Compass,
    title: "Local, hand-picked recommendations",
    short: "Hand-picked by locals",
    body: "Every stay is chosen with Channel Islands visitors in mind — no endless generic listings, just places worth booking.",
  },
  {
    icon: BadgePoundSterling,
    title: "Compare live prices, no extra fees",
    short: "Live prices, no extra fees",
    body: "See up-to-date rates from the big booking sites side by side, then book directly with them. We never add a fee.",
  },
  {
    icon: Ship,
    title: "Island-hopping made easy",
    short: "Guernsey, Herm & Sark",
    body: "Stays on Guernsey, Herm and Sark in one place, so it's simple to plan a night away on a car-free island.",
  },
]

/** Slim one-line version that sits right under the search bar. */
export function TrustStrip() {
  return (
    <ul
      aria-label="Why book with Stays Guernsey"
      className="mx-auto mt-5 flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 text-sm text-[#0f3d3e]/75"
    >
      {features.map(({ icon: Icon, short }) => (
        <li key={short} className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-full bg-[#e9b872]/30 text-[#0f3d3e]">
            <Icon className="size-3.5" aria-hidden="true" />
          </span>
          {short}
        </li>
      ))}
    </ul>
  )
}

/** Full three-card section. */
export function WhyBook() {
  return (
    <section id="why" className="scroll-mt-20 bg-[#0f3d3e] py-20 text-[#f6f1e7]">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-[#e9b872]">Why Stays Guernsey</p>
        <h2 className="mt-3 text-center font-[family-name:var(--font-fraunces)] text-3xl font-semibold sm:text-4xl">
          Why book your Guernsey stay with us
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-[#f6f1e7]/15 bg-[#f6f1e7]/5 p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-[#e9b872] text-[#0f3d3e]">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-fraunces)] text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#f6f1e7]/70">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
