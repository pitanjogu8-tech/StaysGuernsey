export interface Area {
  slug: string
  category: string
  areaLabel: string
  title: string
  description: string
  address: string
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
  },
  {
    slug: "west-coast",
    category: "Cottages",
    areaLabel: "West Coast",
    title: "Coastal cottages & self-catering",
    description:
      "Traditional granite cottages and self-catering homes near Cobo and Vazon — space to spread out with the beach on your doorstep.",
    address: "Cobo Bay, Guernsey",
  },
  {
    slug: "south-coast",
    category: "B&Bs",
    areaLabel: "St Martin & Forest",
    title: "Clifftop escapes on the south coast",
    description:
      "Peaceful guesthouses and B&Bs close to the famous south-coast cliff paths, hidden bays, and some of the island's best walking.",
    address: "St Martin, Guernsey",
  },
]

export const areaPaths = areas.map((area) => `/stays/${area.slug}`)
