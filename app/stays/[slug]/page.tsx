import { notFound } from "next/navigation"
import { areas } from "@/lib/areas"
import { Stay22Map } from "@/components/stay22-map"

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = areas.find((a) => a.slug === slug)
  if (!area) return {}
  return { title: area.title, description: area.description }
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = areas.find((a) => a.slug === slug)
  if (!area) return notFound()

  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <p className="text-sm uppercase tracking-wide text-orange-500">
        {area.category} · {area.areaLabel}
      </p>
      <h1 className="mt-2 text-4xl font-serif">{area.title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-600">{area.description}</p>
      <div className="mt-10">
        <Stay22Map address={area.address} height={600} />
      </div>
    </main>
  )
}
