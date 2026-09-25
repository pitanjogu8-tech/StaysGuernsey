"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight, Building2, CalendarDays, MapPin, Search, Tag } from "lucide-react"
import { hotelAmenities, hotelAreas, hotels, type Hotel, type Island } from "@/lib/hotels"
import { HotelCard } from "@/components/hotel-card"
import { Stay22Map } from "@/components/stay22-map"

const fieldClasses =
  "w-full appearance-none rounded-lg border border-[#0f3d3e]/15 bg-white px-3 py-2.5 text-sm text-[#0f3d3e] outline-none transition focus:border-[#0f3d3e] focus:ring-2 focus:ring-[#0f3d3e]/20 disabled:cursor-not-allowed disabled:opacity-50"

const islands: Island[] = ["Guernsey", "Herm", "Sark"]

/** Order for the short homepage preview: hotels with real photos and higher grades first. */
function previewRank(h: Hotel) {
  return (h.photo ? 10 : 0) + (h.stars ?? 0)
}

function Field({
  icon,
  label,
  className = "",
  children,
}: {
  icon: React.ReactNode
  label: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <label className={`flex min-w-0 flex-col gap-1.5 ${className}`}>
      <span className="flex items-center gap-1.5 text-xs font-medium text-[#0f3d3e]/60">
        {icon}
        {label}
      </span>
      {children}
    </label>
  )
}

function todayISO() {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

export function HotelSearch({
  overlapHero = false,
  limit,
  afterForm,
}: {
  overlapHero?: boolean
  /** Show only this many hotels (plus a "see all" link) until the visitor filters. */
  limit?: number
  /** Rendered between the search form and the results, e.g. a trust strip. */
  afterForm?: React.ReactNode
}) {
  const [island, setIsland] = useState<Island | "">("")
  const [area, setArea] = useState("")
  const [amenity, setAmenity] = useState("")
  const [checkin, setCheckin] = useState("")
  const [checkout, setCheckout] = useState("")
  const [minDate, setMinDate] = useState<string>()

  // Set on the client only, so server and browser render the same markup.
  useEffect(() => setMinDate(todayISO()), [])

  const areaEnabled = island === "" || island === "Guernsey"
  const datesValid = Boolean(checkin && checkout && checkout > checkin)
  const dateError = checkin && checkout && !datesValid
  const filtering = Boolean(island || area || amenity)

  const results = useMemo(
    () =>
      hotels.filter(
        (h) =>
          (!island || h.island === island) &&
          (!area || !areaEnabled || h.area === area) &&
          (!amenity || h.amenities.includes(amenity)),
      ),
    [island, area, amenity, areaEnabled],
  )

  const preview = Boolean(limit && !filtering)
  const shown = preview ? [...results].sort((a, b) => previewRank(b) - previewRank(a)).slice(0, limit) : results

  const mapAddress =
    island === "Herm" || island === "Sark" ? `${island}, Guernsey` : area ? `${area}, Guernsey` : "Guernsey"

  function reset() {
    setIsland("")
    setArea("")
    setAmenity("")
    setCheckin("")
    setCheckout("")
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    document.getElementById("hotels")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      <div
        id="search"
        className={`relative z-10 mx-auto max-w-6xl scroll-mt-24 px-5 ${overlapHero ? "-mt-24 sm:-mt-20" : "pt-10"}`}
      >
        <form
          onSubmit={onSubmit}
          role="search"
          aria-label="Search hotels"
          className="rounded-2xl border border-[#0f3d3e]/10 bg-white p-4 shadow-xl sm:p-5"
        >
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
            <Field icon={<MapPin className="size-3.5" aria-hidden="true" />} label="Island">
              <select
                className={fieldClasses}
                value={island}
                onChange={(e) => {
                  setIsland(e.target.value as Island | "")
                  setArea("")
                }}
              >
                <option value="">All islands</option>
                {islands.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </Field>

            <Field icon={<Building2 className="size-3.5" aria-hidden="true" />} label="Parish">
              <select
                className={fieldClasses}
                value={areaEnabled ? area : ""}
                onChange={(e) => setArea(e.target.value)}
                disabled={!areaEnabled}
              >
                <option value="">Any parish</option>
                {hotelAreas.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              icon={<Tag className="size-3.5" aria-hidden="true" />}
              label="Must have"
              className="col-span-2 lg:col-span-1"
            >
              <select className={fieldClasses} value={amenity} onChange={(e) => setAmenity(e.target.value)}>
                <option value="">Anything</option>
                {hotelAmenities.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </Field>

            <Field icon={<CalendarDays className="size-3.5" aria-hidden="true" />} label="Check-in">
              <input
                type="date"
                className={fieldClasses}
                value={checkin}
                min={minDate}
                onChange={(e) => setCheckin(e.target.value)}
              />
            </Field>

            <Field icon={<CalendarDays className="size-3.5" aria-hidden="true" />} label="Check-out">
              <input
                type="date"
                className={fieldClasses}
                value={checkout}
                min={checkin || minDate}
                onChange={(e) => setCheckout(e.target.value)}
              />
            </Field>
          </div>

          {dateError ? (
            <p className="mt-3 text-sm text-[#b4533a]" role="alert">
              Check-out needs to be after check-in.
            </p>
          ) : null}

          <button
            type="submit"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#e07a5f] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e07a5f]/50"
          >
            <Search className="size-4" aria-hidden="true" />
            Search stays
          </button>
        </form>
      </div>

      {afterForm}

      <section id="hotels" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-16 pt-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#e07a5f]">Hotels</p>
            <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-[#0f3d3e] sm:text-4xl">
              {preview ? "Top hotels across the islands" : "Hotels across the islands"}
            </h2>
            <p className="mt-2 text-[#0f3d3e]/70" aria-live="polite">
              {filtering
                ? `${results.length} of ${hotels.length} hotels match your search`
                : `${hotels.length} hotels on Guernsey, Herm and Sark`}
              {datesValid ? " — prices shown for your dates" : ""}
            </p>
          </div>
          {filtering || checkin || checkout ? (
            <button
              type="button"
              onClick={reset}
              className="rounded-full border border-[#0f3d3e]/20 px-4 py-2 text-sm font-medium text-[#0f3d3e] transition-colors hover:bg-[#0f3d3e]/5"
            >
              Clear filters
            </button>
          ) : preview ? (
            <Link
              href="/hotels"
              className="hidden items-center gap-1.5 text-sm font-semibold text-[#0f3d3e] hover:text-[#e07a5f] sm:inline-flex"
            >
              See all {hotels.length} hotels <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          ) : null}
        </div>

        {shown.length > 0 ? (
          <div
            className={
              preview
                ? // Swipeable row on phones, grid from tablet up.
                  "no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
                : "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            }
          >
            {shown.map((hotel) => (
              <HotelCard
                key={hotel.slug}
                hotel={hotel}
                checkin={datesValid ? checkin : undefined}
                checkout={datesValid ? checkout : undefined}
                className={preview ? "w-[80%] shrink-0 snap-start sm:w-auto" : ""}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#0f3d3e]/20 bg-white/60 p-10 text-center">
            <p className="font-[family-name:var(--font-fraunces)] text-xl font-semibold text-[#0f3d3e]">
              No hotels match those filters
            </p>
            <p className="mt-2 text-[#0f3d3e]/70">
              Try another parish or amenity — or use the map below to see every hotel, B&amp;B and rental nearby.
            </p>
          </div>
        )}

        {preview ? (
          <div className="mt-8 flex justify-center">
            <Link
              href="/hotels"
              className="inline-flex items-center gap-2 rounded-full border border-[#0f3d3e]/25 bg-white px-6 py-3 text-sm font-semibold text-[#0f3d3e] transition-colors hover:border-[#0f3d3e] hover:bg-[#0f3d3e] hover:text-[#f6f1e7]"
            >
              See all {hotels.length} hotels <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        ) : null}

        <div className="mt-16">
          <h3 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#0f3d3e]">
            See everything on the map
          </h3>
          <p className="mt-2 max-w-2xl text-[#0f3d3e]/70">
            Guesthouses, cottages and apartments too — compare live prices from the big booking sites in one place
            {datesValid ? " for your dates" : ". Add dates above to see exact prices"}.
          </p>
          <div className="mt-6">
            <Stay22Map
              address={mapAddress}
              height={520}
              checkin={datesValid ? checkin : undefined}
              checkout={datesValid ? checkout : undefined}
            />
          </div>
        </div>
      </section>
    </>
  )
}
