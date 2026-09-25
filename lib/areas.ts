import type { Hotel } from "@/lib/hotels"

export interface Area {
  slug: string
  category: string
  areaLabel: string
  title: string
  description: string
  address: string
  image: string
  imageAlt: string
  /** Short line used on area cards. */
  teaser: string
  /** Which of our listed hotels belong on this area's page. */
  matches: (hotel: Hotel) => boolean
}

export const areas: Area[] = [
  {
    slug: "st-peter-port",
    category: "Hotels",
    areaLabel: "St Peter Port",
    title: "Seafront hotels in St Peter Port",
    description:
      "Grand harbour-view hotels a short stroll from the marina, cobbled high street, and the ferry terminal — ideal for a first visit.",
    address: "St Peter Port, Guernsey",
    image: "/images/guernsey-hero.webp",
    imageAlt: "Aerial view of St Peter Port harbour, its marina and Castle Cornet",
    teaser: "The capital: harbour, restaurants and history.",
    matches: (h) => h.area === "St Peter Port",
  },
  {
    slug: "west-coast",
    category: "Cottages",
    areaLabel: "West Coast",
    title: "Coastal cottages & self-catering",
    description:
      "Traditional granite cottages and self-catering homes near Cobo and Vazon — space to spread out with the beach on your doorstep.",
    address: "Cobo Bay, Guernsey",
    image: "/images/guernsey-cottage.webp",
    imageAlt: "A granite cottage with a flower-filled garden on a Guernsey country lane",
    teaser: "Sandy bays, granite cottages and legendary sunsets.",
    matches: (h) => h.area === "Castel" || h.area === "St Saviour",
  },
  {
    slug: "south-coast",
    category: "B&Bs",
    areaLabel: "St Martin & Forest",
    title: "Clifftop escapes on the south coast",
    description:
      "Peaceful guesthouses and B&Bs close to the famous south-coast cliff paths, hidden bays, and some of the island's best walking.",
    address: "St Martin, Guernsey",
    image: "/images/guernsey-coast.webp",
    imageAlt: "Cliffs, a hidden cove and turquoise water on Guernsey's south coast",
    teaser: "Cliff paths, hidden coves and quiet lanes.",
    matches: (h) => h.slug === "fermain-valley-hotel",
  },
  {
    slug: "herm",
    category: "Hotels",
    areaLabel: "Herm",
    title: "Stay on Herm — a short ferry from St Peter Port",
    description:
      "A car-free island a 20-minute ferry ride from Guernsey, with one hotel and a handful of self-catering cottages. Ideal for a quiet overnight escape or a full island getaway.",
    address: "Herm, Guernsey",
    image: "/images/herm-coast.webp",
    imageAlt: "The green headland and rocky shore of Herm island",
    teaser: "Car-free, white sand and total calm.",
    matches: (h) => h.island === "Herm",
  },
  {
    slug: "sark",
    category: "Hotels & B&Bs",
    areaLabel: "Sark",
    title: "Where to stay on Sark",
    description:
      "Guernsey's tranquil, car-free neighbour — reached by ferry, explored by bike or on foot. A mix of small hotels, family-run guesthouses, and farmhouse B&Bs across the island.",
    address: "Sark, Guernsey",
    image: "/images/sark-cliffs.webp",
    imageAlt: "Dramatic green cliffs dropping into the sea on Sark",
    teaser: "Dark skies, cliff walks and horse-drawn carts.",
    matches: (h) => h.island === "Sark",
  },
]

export const areaPaths = areas.map((area) => `/stays/${area.slug}`)

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug)
}
