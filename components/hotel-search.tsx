"use client"

import { useEffect, useMemo, useState } from "react"
import { Building2, CalendarDays, MapPin, Search, Tag } from "lucide-react"
import { hotelAmenities, hotelAreas, hotels, type Island } from "@/lib/hotels"
import { HotelCard } from "@/components/hotel-card"
import { Stay22Map } from "@/components/stay22-map"

const fieldClasses =
  "w-full appearance-none rounded-lg border border-[#0f3d3e]/15 bg-white px-3 py-2.5 text-sm text-[#0f3d3e] outline-none transition focus:border-[#0f3d3e] focus:ring-2 focus:ring-[#0f3d3e]/20 disabled:cursor-not-allowed disabled:opacity-50"

const islands: Island[] = ["Guernsey", "Herm", "Sark"]

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
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

export function HotelSearch({ overlapHero = false }: { overlapHero?: boolean }) {
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

  const mapAddress =
    island === "Herm" || island === "Sark"
      ? `${island}, Guernsey`
      : area
        ? `${area}, Guernsey`
        : "Guernsey"

  const hasFilters = Boolean(island || area || amenity || checkin || checkout)

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
      <div id="search" className={`relative z-10 mx-auto max-w-6xl scroll-mt-24 px-5 ${overlapHero ? "-mt-20" : "pt-12"}`}>
        <form
          onSubmit={onSubmit}
          role="search"
          aria-label="Search hotels"
          className="rounded-2xl border border-[#0f3d3e]/10 bg-white/95 p-4 shadow-xl backdrop-blur sm:p-5"
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
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

            <Field icon={<Tag className="size-3.5" aria-hidden="true" />} label="Must have">
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

      <section id="hotels" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#e07a5f]">Hotels</p>
            <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-[#0f3d3e] sm:text-4xl">
              Hotels across the islands
            </h2>
            <p className="mt-2 text-[#0f3d3e]/70" aria-live="polite">
              {results.length === hotels.length
                ? `${hotels.length} hotels on Guernsey, Herm and Sark`
                : `${results.length} of ${hotels.length} hotels match your search`}
              {datesValid ? " — prices shown for your dates" : ""}
            </p>
          </div>
          {hasFilters ? (
            <button
              type="button"
              onClick={reset}
              className="rounded-full border border-[#0f3d3e]/20 px-4 py-2 text-sm font-medium text-[#0f3d3e] transition-colors hover:bg-[#0f3d3e]/5"
            >
              Clear filters
            </button>
          ) : null}
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((hotel) => (
              <HotelCard
                key={hotel.slug}
                hotel={hotel}
                checkin={datesValid ? checkin : undefined}
                checkout={datesValid ? checkout : undefined}
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

        <div className="mt-14">
          <h3 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#0f3d3e]">
            See everything on the map
          </h3>
          <p className="mt-2 max-w-2xl text-[#0f3d3e]/70">
            Guesthouses, cottages and apartments too — compare live prices from the big booking sites in one place.
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
