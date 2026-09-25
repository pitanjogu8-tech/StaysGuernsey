import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stays Guernsey",
    short_name: "Stays GSY",
    description: "Where to stay on Guernsey, Herm and Sark — compare live prices.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f1e7",
    theme_color: "#0f3d3e",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  }
}
