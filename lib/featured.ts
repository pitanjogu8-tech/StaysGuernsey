import { getHotel, type Hotel } from "@/lib/hotels"

export interface FeaturedPick {
  slug: string
  /** The short award line, e.g. "Best for a special occasion". */
  award: string
  /** One-sentence editorial summary. */
  summary: string
  /** Why it earned its spot — every point is taken from the hotel's own listing facts. */
  reasons: string[]
  idealFor: string
}

/**
 * Editorial picks for /featured. Each pick answers one type of trip, so the page
 * works as a "which hotel is right for me" guide rather than a ranking.
 */
export const featuredPicks: FeaturedPick[] = [
  {
    slug: "old-government-house-hotel",
    award: "Best for a special occasion",
    summary: "Guernsey's grandest address, a former governor's residence in the heart of St Peter Port.",
    reasons: [
      "The island's only five-star hotel",
      "Spa and fine dining under one roof",
      "A short walk to the harbour, high street and restaurants",
    ],
    idealFor: "Anniversaries, honeymoons and treat-yourself weekends",
  },
  {
    slug: "st-pierre-park-hotel",
    award: "Best for families & golfers",
    summary: "A resort-style base with space to spread out and plenty to do without leaving the grounds.",
    reasons: [
      "Its own 9-hole golf course in landscaped grounds",
      "Indoor pool for rainy days, plus a spa",
      "On the edge of St Peter Port, so town is close by",
    ],
    idealFor: "Families, golfers and longer stays",
  },
  {
    slug: "fermain-valley-hotel",
    award: "Best for beach lovers",
    summary: "Tucked into a wooded valley that leads straight down to one of Guernsey's prettiest bays.",
    reasons: [
      "A path down through the valley to Fermain Bay",
      "Indoor pool for when the sea is too bracing",
      "Four-star comfort with a peaceful, leafy setting",
    ],
    idealFor: "Couples and walkers who want the coast on their doorstep",
  },
  {
    slug: "la-fregate-hotel",
    award: "Best harbour views",
    summary: "A clifftop hideaway above St Peter Port with some of the best views over the harbour.",
    reasons: [
      "Sea-view terraces looking out over the harbour",
      "Secluded rooms, yet minutes from the town centre",
      "Four-star, with a quieter feel than the seafront hotels",
    ],
    idealFor: "Couples and anyone who wants the view to be the highlight",
  },
  {
    slug: "white-house-hotel-herm",
    award: "Best island escape",
    summary: "The only hotel on car-free Herm, a short ferry hop from St Peter Port.",
    reasons: [
      "Herm is car-free, so it's quiet from the moment you step off the boat",
      "Outdoor pool, tennis court and croquet lawn",
      "Stay after the day-trippers leave and have the island almost to yourself",
    ],
    idealFor: "A proper switch-off, for a night or a week",
  },
  {
    slug: "stocks-hotel-sark",
    award: "Best car-free retreat on Sark",
    summary: "Sark's upscale hotel, with a spa and gardens on an island explored by bike, on foot or by horse and cart.",
    reasons: [
      "Spa, pool and gardens on a car-free island",
      "Sark's dark skies and cliff walks are right outside",
      "A different pace from Guernsey, with the ferry making it an easy add-on",
    ],
    idealFor: "Slow travel and island-hoppers",
  },
  {
    slug: "the-imperial-hotel",
    award: "Best for west-coast sunsets",
    summary: "Right on Rocquaine Bay, on the rugged west coast where the sun goes down over the sea.",
    reasons: [
      "Overlooks Rocquaine Bay on the west coast",
      "Well away from town, so it feels like a coastal hideaway",
      "Close to the west-coast beaches and cliff paths",
    ],
    idealFor: "Sunset-chasers and anyone who prefers the quiet side of the island",
  },
  {
    slug: "premier-inn-admiral-park",
    award: "Best on a budget",
    summary: "A familiar chain hotel that keeps costs down without putting you far from anything.",
    reasons: [
      "Budget-friendly rates on an island that can be pricey in summer",
      "A short drive to Castle Cornet and Cobo Beach",
      "Predictable, no-surprises rooms",
    ],
    idealFor: "Short stays, business trips and value-seekers",
  },
]

export type FeaturedHotel = FeaturedPick & { hotel: Hotel }

export const featuredHotels: FeaturedHotel[] = featuredPicks.flatMap((pick) => {
  const hotel = getHotel(pick.slug)
  return hotel ? [{ ...pick, hotel }] : []
})

export function getFeaturedPick(slug: string) {
  return featuredPicks.find((p) => p.slug === slug)
}
