export type Island = "Guernsey" | "Herm" | "Sark"

export interface Hotel {
  slug: string
  name: string
  area: string
  type: string
  address: string
  description: string
  island: Island
  /** Short facility tags shown on hotel cards and used by the search filter. */
  amenities: string[]
  /** Official star grading. Only set where verified — cards hide the badge otherwise. */
  stars?: number
  /** Optional "from" price per night in GBP. Leave unset to show "Live prices" instead
   *  of a number that may go stale. */
  priceFrom?: number
}

export const hotels: Hotel[] = [
  { slug: "st-pierre-park-hotel", name: "St Pierre Park Hotel & Golf", area: "St Peter Port", type: "Hotel", address: "St Pierre Park Hotel, Rohais, St Peter Port, Guernsey", description: "A resort-style hotel in landscaped grounds with its own 9-hole golf course, indoor pool, and spa.", island: "Guernsey", stars: 4, amenities: ["Golf", "Indoor pool", "Spa"] },
  { slug: "old-government-house-hotel", name: "The Old Government House Hotel & Spa", area: "St Peter Port", type: "Hotel", address: "Old Government House Hotel & Spa, St Ann's Place, St Peter Port, Guernsey", description: "One of Guernsey's most prestigious hotels, set in a former governor's residence with a spa and fine dining.", island: "Guernsey", stars: 5, amenities: ["Spa", "Fine dining", "Town centre"] },
  { slug: "duke-of-richmond-hotel", name: "Duke of Richmond Hotel", area: "St Peter Port", type: "Hotel", address: "Duke of Richmond Hotel, St Peter Port, Guernsey", description: "An elegant hotel overlooking Candie Gardens with views across the harbour.", island: "Guernsey", stars: 4, amenities: ["Harbour views", "Gardens"] },
  { slug: "hotel-de-havelet", name: "Best Western Hotel De Havelet", area: "St Peter Port", type: "Hotel", address: "Hotel De Havelet, St Peter Port, Guernsey", description: "A sea-view hotel on the eastern edge of town with an indoor pool and two restaurants.", island: "Guernsey", stars: 4, amenities: ["Sea views", "Indoor pool", "Restaurant"] },
  { slug: "fermain-valley-hotel", name: "Fermain Valley Hotel", area: "St Peter Port", type: "Hotel", address: "Fermain Valley Hotel, Fermain Lane, St Peter Port, Guernsey", description: "Tucked into a wooded valley leading down to Fermain Bay, with an indoor pool.", island: "Guernsey", stars: 4, amenities: ["Indoor pool", "Near the beach"] },
  { slug: "la-fregate-hotel", name: "La Fregate Hotel", area: "St Peter Port", type: "Hotel", address: "La Fregate Hotel, St Peter Port, Guernsey", description: "A clifftop hotel above the harbour, known for sea-view terraces and secluded rooms.", island: "Guernsey", stars: 4, amenities: ["Sea views", "Terrace"] },
  { slug: "the-pandora-hotel", name: "The Pandora Hotel", area: "St Peter Port", type: "Hotel", address: "The Pandora Hotel, Hauteville, St Peter Port, Guernsey", description: "A boutique-style hotel close to the high street, popular with business travellers.", island: "Guernsey", amenities: ["Boutique", "Town centre"] },
  { slug: "duke-of-normandie-hotel", name: "Duke of Normandie Hotel", area: "St Peter Port", type: "Hotel", address: "Duke of Normandie Hotel, Lefebvre Street, St Peter Port, Guernsey", description: "A traditional, central hotel with a restaurant and lounge bar.", island: "Guernsey", amenities: ["Restaurant", "Bar", "Town centre"] },
  { slug: "les-rocquettes-hotel", name: "Les Rocquettes Hotel", area: "St Peter Port", type: "Hotel", address: "Les Rocquettes Hotel, Les Gravees, St Peter Port, Guernsey", description: "A family-run hotel a short walk from the town centre.", island: "Guernsey", amenities: ["Family-run", "Town centre"] },
  { slug: "best-western-moores", name: "Best Western Moores Central Hotel", area: "St Peter Port", type: "Hotel", address: "Best Western Moores Central Hotel, St Peter Port, Guernsey", description: "Right in the heart of town, close to the high street and shops.", island: "Guernsey", amenities: ["Town centre"] },
  { slug: "premier-inn-admiral-park", name: "Premier Inn Guernsey (Admiral Park)", area: "St Peter Port", type: "Hotel", address: "Premier Inn Guernsey St Peter Port Admiral Park, Guernsey", description: "A budget-friendly chain hotel a short drive from Castle Cornet and Cobo Beach.", island: "Guernsey", amenities: ["Budget"] },
  { slug: "le-pommier", name: "Le Pommier", area: "Castel", type: "Hotel", address: "Le Pommier, Castel, Guernsey", description: "A countryside hotel near Cobo Beach with an outdoor pool and garden.", island: "Guernsey", amenities: ["Outdoor pool", "Gardens", "Near the beach"] },
  { slug: "the-imperial-hotel", name: "The Imperial Hotel", area: "St Saviour", type: "Hotel", address: "The Imperial Hotel, Rocquaine Bay, St Saviour, Guernsey", description: "Overlooking Rocquaine Bay on the rugged west coast.", island: "Guernsey", amenities: ["Sea views", "West coast"] },
  { slug: "les-cotils", name: "Les Cotils", area: "St Peter Port", type: "Hotel", address: "Les Cotils, St Peter Port, Guernsey", description: "Set in 12 acres of award-winning gardens overlooking the harbour.", island: "Guernsey", amenities: ["Gardens", "Harbour views"] },
  { slug: "stocks-hotel-sark", name: "Stocks Hotel", area: "Sark", type: "Hotel", address: "Stocks Hotel, Sark, Guernsey", description: "Sark's upscale hotel, with a spa, pool, and gardens on the car-free island.", island: "Sark", amenities: ["Spa", "Pool", "Gardens", "Car-free island"] },
  { slug: "white-house-hotel-herm", name: "Herm Island White House Hotel", area: "Herm", type: "Hotel", address: "White House Hotel, Herm, Guernsey", description: "Herm's only hotel, with a tennis court, croquet lawn, and outdoor pool.", island: "Herm", amenities: ["Outdoor pool", "Tennis", "Car-free island"] },
]

/** Parishes/areas on Guernsey that have at least one hotel, in listing order. */
export const hotelAreas = Array.from(new Set(hotels.filter((h) => h.island === "Guernsey").map((h) => h.area)))

/** Every amenity used across the listings, alphabetised — feeds the search filter. */
export const hotelAmenities = Array.from(new Set(hotels.flatMap((h) => h.amenities))).sort()

/** Area imagery we own, used on hotel cards until each hotel has its own photo. */
export function hotelImage(hotel: Hotel): string {
  if (hotel.island === "Sark") return "/images/sark-cliffs.png"
  if (hotel.island === "Herm") return "/images/herm-coast.png"
  if (hotel.area === "Castel") return "/images/guernsey-cottage.png"
  if (hotel.area === "St Saviour") return "/images/guernsey-beach.png"
  if (hotel.amenities.includes("Sea views") || hotel.amenities.includes("Near the beach")) return "/images/guernsey-coast.png"
  return "/images/guernsey-townhouse.png"
}
