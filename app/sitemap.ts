import { MetadataRoute } from "next"
import { areas } from "@/lib/areas"
import { hotels } from "@/lib/hotels"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://staysguernsey.gg"
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/hotels`, lastModified: new Date() },
    ...areas.map((a) => ({ url: `${base}/stays/${a.slug}`, lastModified: new Date() })),
    ...hotels.map((h) => ({ url: `${base}/hotels/${h.slug}`, lastModified: new Date() })),
  ]
}
