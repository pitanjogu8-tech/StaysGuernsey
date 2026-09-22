import Link from "next/link"
import { hotels } from "@/lib/hotels"

export const metadata = {
  title: "All Hotels in Guernsey",
  description: "A full directory of hotels across Guernsey, Herm, and Sark — compare prices and check availability.",
}

export default function HotelsIndexPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-16">
      <h1 className="text-4xl font-serif">All hotels in Guernsey</h1>
      <p className="mt-4 text-lg text-slate-600">
        Every hotel we track across Guernsey, Herm, and Sark — tap any one to compare live prices.
      </p>
      <ul className="mt-10 divide-y divide-slate-200">
        {hotels.map((hotel) => (
          <li key={hotel.slug} className="py-5">
            <Link href={`/hotels/${hotel.slug}`} className="text-xl font-serif hover:underline">
              {hotel.name}
            </Link>
            <p className="text-sm text-slate-500">{hotel.area} · {hotel.type}</p>
            <p className="mt-1 text-slate-600">{hotel.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
