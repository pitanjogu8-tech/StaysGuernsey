const faqs = [
  {
    q: "How do I book?",
    a: "Tap any “Check prices” button and you’ll go straight to a trusted booking site — such as Booking.com or Airbnb — showing live availability and prices for your dates.",
  },
  {
    q: "When is the best time to visit Guernsey?",
    a: "May to September brings the warmest weather and the fullest calendar of events, while spring and early autumn are quieter and often better value. Book ahead for peak summer weekends.",
  },
  {
    q: "How do I get to Guernsey?",
    a: "Fly into Guernsey Airport from several UK and European cities, or take the ferry from Poole, Portsmouth, or Jersey. The island is compact, so you rarely need a car for more than a short hop.",
  },
]

export function FaqFooter() {
  return (
    <>
      <section id="faq" className="scroll-mt-20 bg-[#f6f1e7] py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-[#0f3d3e] sm:text-4xl">
            Good to know
          </h2>
          <dl className="mt-10 divide-y divide-[#0f3d3e]/10 border-y border-[#0f3d3e]/10">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <dt className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-[#0f3d3e]">
                  {faq.q}
                </dt>
                <dd className="mt-2 leading-relaxed text-[#0f3d3e]/70">
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <footer className="bg-[#0f3d3e] py-14 text-[#f6f1e7]">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <p className="font-[family-name:var(--font-fraunces)] text-xl font-semibold">
                Stays Guernsey
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#f6f1e7]/65">
                An independent guide to accommodation on Guernsey, Channel
                Islands. Helping visitors find the right place to stay.
              </p>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-[#f6f1e7]/55">
              <span className="font-semibold text-[#f6f1e7]/80">
                Affiliate disclosure:
              </span>{" "}
              Some links on this site are affiliate links. If you book through
              them we may earn a small commission at no extra cost to you. This
              helps keep Stays Guernsey free to use.
            </p>
          </div>
          <div className="mt-10 border-t border-[#f6f1e7]/15 pt-6 text-xs text-[#f6f1e7]/50">
            &copy; {new Date().getFullYear()} staysguernsey.gg — All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  )
}
