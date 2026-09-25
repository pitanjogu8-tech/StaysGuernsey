import { MetadataRoute } from "next"
import { areas } from "@/lib/areas"
import { hotels } from "@/lib/hotels"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.staysguernsey.gg"
  const now = new Date()
  return [
    { url: base, lastModified: now, priority: 1 },
    { url: `${base}/hotels`, lastModified: now, priority: 0.9 },
    { url: `${base}/featured`, lastModified: now, priority: 0.9 },
    ...areas.map((a) => ({ url: `${base}/stays/${a.slug}`, lastModified: now, priority: 0.8 })),
    ...hotels.map((h) => ({ url: `${base}/hotels/${h.slug}`, lastModified: now, priority: 0.7 })),
    { url: `${base}/credits`, lastModified: now, priority: 0.2 },
  ]
}
