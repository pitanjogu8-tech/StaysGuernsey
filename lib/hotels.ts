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
  /** A freely licensed photo, credited on the card, the hotel page and /credits. */
  photo?: Photo
}

export interface Photo {
  src: string
  alt: string
  /** Shown under the photo on the hotel page when the photo isn't of the building itself. */
  caption?: string
  author: string
  sourceUrl: string
  license: string
  licenseUrl: string
}

const CC_BY_2 = { license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/" }
const CC_BY_SA_2 = { license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/" }

export const hotels: Hotel[] = [
  { slug: "st-pierre-park-hotel", name: "St Pierre Park Hotel & Golf", area: "St Peter Port", type: "Hotel", address: "St Pierre Park Hotel, Rohais, St Peter Port, Guernsey", description: "A resort-style hotel in landscaped grounds with its own 9-hole golf course, indoor pool, and spa.", island: "Guernsey", stars: 4, amenities: ["Golf", "Indoor pool", "Spa"], photo: { src: "https://live.staticflickr.com/7072/7161150941_e4f04c09d5_b.jpg", alt: "The courtyard and fountain at the entrance of St Pierre Park Hotel", author: "heatheronhertravels", sourceUrl: "https://www.flickr.com/photos/22446827@N02/7161150941", ...CC_BY_2 } },
  { slug: "old-government-house-hotel", name: "The Old Government House Hotel & Spa", area: "St Peter Port", type: "Hotel", address: "Old Government House Hotel & Spa, St Ann's Place, St Peter Port, Guernsey", description: "One of Guernsey's most prestigious hotels, set in a former governor's residence with a spa and fine dining.", island: "Guernsey", stars: 5, amenities: ["Spa", "Fine dining", "Town centre"] },
  { slug: "duke-of-richmond-hotel", name: "Duke of Richmond Hotel", area: "St Peter Port", type: "Hotel", address: "Duke of Richmond Hotel, St Peter Port, Guernsey", description: "An elegant hotel overlooking Candie Gardens with views across the harbour.", island: "Guernsey", stars: 4, amenities: ["Harbour views", "Gardens"] },
  { slug: "hotel-de-havelet", name: "Best Western Hotel De Havelet", area: "St Peter Port", type: "Hotel", address: "Hotel De Havelet, St Peter Port, Guernsey", description: "A sea-view hotel on the eastern edge of town with an indoor pool and two restaurants.", island: "Guernsey", stars: 4, amenities: ["Sea views", "Indoor pool", "Restaurant"], photo: { src: "https://live.staticflickr.com/4487/37494539220_294ee4ef65_b.jpg", alt: "Castle Cornet and the sea, seen from Hotel De Havelet", caption: "The view of Castle Cornet from the hotel", author: "Dave Paterson", sourceUrl: "https://www.flickr.com/photos/31461252@N07/37494539220", ...CC_BY_2 } },
  { slug: "fermain-valley-hotel", name: "Fermain Valley Hotel", area: "St Peter Port", type: "Hotel", address: "Fermain Valley Hotel, Fermain Lane, St Peter Port, Guernsey", description: "Tucked into a wooded valley leading down to Fermain Bay, with an indoor pool.", island: "Guernsey", stars: 4, amenities: ["Indoor pool", "Near the beach"], photo: { src: "https://live.staticflickr.com/5086/5255106655_1d44f67138_b.jpg", alt: "A double bedroom at Fermain Valley Hotel", caption: "A guest bedroom", author: "renaissancechambara", sourceUrl: "https://www.flickr.com/photos/39435232@N00/5255106655", ...CC_BY_2 } },
  { slug: "la-fregate-hotel", name: "La Fregate Hotel", area: "St Peter Port", type: "Hotel", address: "La Fregate Hotel, St Peter Port, Guernsey", description: "A clifftop hotel above the harbour, known for sea-view terraces and secluded rooms.", island: "Guernsey", stars: 4, amenities: ["Sea views", "Terrace"] },
  { slug: "the-pandora-hotel", name: "The Pandora Hotel", area: "St Peter Port", type: "Hotel", address: "The Pandora Hotel, Hauteville, St Peter Port, Guernsey", description: "A boutique-style hotel close to the high street, popular with business travellers.", island: "Guernsey", amenities: ["Boutique", "Town centre"] },
  { slug: "duke-of-normandie-hotel", name: "Duke of Normandie Hotel", area: "St Peter Port", type: "Hotel", address: "Duke of Normandie Hotel, Lefebvre Street, St Peter Port, Guernsey", description: "A traditional, central hotel with a restaurant and lounge bar.", island: "Guernsey", amenities: ["Restaurant", "Bar", "Town centre"] },
  { slug: "les-rocquettes-hotel", name: "Les Rocquettes Hotel", area: "St Peter Port", type: "Hotel", address: "Les Rocquettes Hotel, Les Gravees, St Peter Port, Guernsey", description: "A family-run hotel a short walk from the town centre.", island: "Guernsey", amenities: ["Family-run", "Town centre"] },
  { slug: "best-western-moores", name: "Best Western Moores Central Hotel", area: "St Peter Port", type: "Hotel", address: "Best Western Moores Central Hotel, St Peter Port, Guernsey", description: "Right in the heart of town, close to the high street and shops.", island: "Guernsey", amenities: ["Town centre"], photo: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Best_Western_Moores_Central_Hotel%2C_St_Peter_Port_%2849542601007%29.jpg/960px-Best_Western_Moores_Central_Hotel%2C_St_Peter_Port_%2849542601007%29.jpg", alt: "The granite front of Best Western Moores Central Hotel in St Peter Port", author: "Andrew Milligan sumo", sourceUrl: "https://commons.wikimedia.org/wiki/File:Best_Western_Moores_Central_Hotel,_St_Peter_Port_(49542601007).jpg", ...CC_BY_2 } },
  { slug: "premier-inn-admiral-park", name: "Premier Inn Guernsey (Admiral Park)", area: "St Peter Port", type: "Hotel", address: "Premier Inn Guernsey St Peter Port Admiral Park, Guernsey", description: "A budget-friendly chain hotel a short drive from Castle Cornet and Cobo Beach.", island: "Guernsey", amenities: ["Budget"] },
  { slug: "le-pommier", name: "Le Pommier", area: "Castel", type: "Hotel", address: "Le Pommier, Castel, Guernsey", description: "A countryside hotel near Cobo Beach with an outdoor pool and garden.", island: "Guernsey", amenities: ["Outdoor pool", "Gardens", "Near the beach"] },
  { slug: "the-imperial-hotel", name: "The Imperial Hotel", area: "St Saviour", type: "Hotel", address: "The Imperial Hotel, Rocquaine Bay, St Saviour, Guernsey", description: "Overlooking Rocquaine Bay on the rugged west coast.", island: "Guernsey", amenities: ["Sea views", "West coast"] },
  { slug: "les-cotils", name: "Les Cotils", area: "St Peter Port", type: "Hotel", address: "Les Cotils, St Peter Port, Guernsey", description: "Set in 12 acres of award-winning gardens overlooking the harbour.", island: "Guernsey", amenities: ["Gardens", "Harbour views"] },
  { slug: "stocks-hotel-sark", name: "Stocks Hotel", area: "Sark", type: "Hotel", address: "Stocks Hotel, Sark, Guernsey", description: "Sark's upscale hotel, with a spa, pool, and gardens on the car-free island.", island: "Sark", amenities: ["Spa", "Pool", "Gardens", "Car-free island"] },
  { slug: "white-house-hotel-herm", name: "Herm Island White House Hotel", area: "Herm", type: "Hotel", address: "White House Hotel, Herm, Guernsey", description: "Herm's only hotel, with a tennis court, croquet lawn, and outdoor pool.", island: "Herm", amenities: ["Outdoor pool", "Tennis", "Car-free island"], photo: { src: "https://live.staticflickr.com/496/20021586852_d650c8886a_b.jpg", alt: "Garden seating at the White House Hotel looking out over the sea from Herm", caption: "The view from the hotel gardens", author: "arripay", sourceUrl: "https://www.flickr.com/photos/27466406@N00/20021586852", ...CC_BY_SA_2 } },
]

/** Parishes/areas on Guernsey that have at least one hotel, in listing order. */
export const hotelAreas = Array.from(new Set(hotels.filter((h) => h.island === "Guernsey").map((h) => h.area)))

/** Every amenity used across the listings, alphabetised — feeds the search filter. */
export const hotelAmenities = Array.from(new Set(hotels.flatMap((h) => h.amenities))).sort()

export const hotelsWithPhotos = hotels.filter((h) => h.photo)

export function getHotel(slug: string) {
  return hotels.find((h) => h.slug === slug)
}

/** Short location label: the parish on Guernsey, otherwise the island. */
export function hotelLocation(hotel: Hotel) {
  return hotel.island === "Guernsey" ? hotel.area : hotel.island
}
