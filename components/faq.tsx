const faqs = [
  {
    q: "How do I book?",
    a: "Tap “Check availability & prices” on any hotel and you’ll see live prices from trusted booking sites such as Booking.com and Expedia for your dates. You book directly with them — we never add a fee.",
  },
  {
    q: "When is the best time to visit Guernsey?",
    a: "May to September brings the warmest weather and the fullest calendar of events, while spring and early autumn are quieter and often better value. Book ahead for peak summer weekends.",
  },
  {
    q: "How do I get to Guernsey?",
    a: "Fly into Guernsey Airport from several UK and European cities, or take the ferry from Poole, Portsmouth, or Jersey. The island is compact, so you rarely need a car for more than a short hop.",
  },
  {
    q: "Can I visit Herm and Sark from Guernsey?",
    a: "Yes. Ferries run from St Peter Port harbour — Herm is about 20 minutes away and Sark a little under an hour. Both are car-free, so they make an easy day trip or a peaceful overnight stay.",
  },
]

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <section id="faq" className="scroll-mt-20 bg-[#f6f1e7] py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-3xl px-5">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#e07a5f]">Good to know</p>
        <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-[#0f3d3e] sm:text-4xl">
          Planning your trip
        </h2>
        <div className="mt-10 divide-y divide-[#0f3d3e]/10 border-y border-[#0f3d3e]/10">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-[family-name:var(--font-fraunces)] text-lg font-semibold text-[#0f3d3e] [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span
                  aria-hidden="true"
                  className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#0f3d3e]/20 text-base transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-[#0f3d3e]/70">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
