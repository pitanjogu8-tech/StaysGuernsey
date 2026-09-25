"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { CalendarDays } from "lucide-react"
import { Stay22Map } from "@/components/stay22-map"

const isoDate = /^\d{4}-\d{2}-\d{2}$/

function todayISO() {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

const fieldClasses =
  "w-full rounded-lg border border-[#0f3d3e]/15 bg-white px-3 py-2.5 text-sm text-[#0f3d3e] outline-none transition focus:border-[#0f3d3e] focus:ring-2 focus:ring-[#0f3d3e]/20"

function MapWithDatesInner({ address, height }: { address: string; height: number }) {
  const params = useSearchParams()
  const initialIn = params.get("checkin") ?? ""
  const initialOut = params.get("checkout") ?? ""
  const [checkin, setCheckin] = useState(isoDate.test(initialIn) ? initialIn : "")
  const [checkout, setCheckout] = useState(isoDate.test(initialOut) ? initialOut : "")
  const [minDate, setMinDate] = useState<string>()
  useEffect(() => setMinDate(todayISO()), [])

  const valid = Boolean(checkin && checkout && checkout > checkin)

  // Keep the dates in the URL so the page can be shared or refreshed.
  useEffect(() => {
    const url = new URL(window.location.href)
    if (valid) {
      url.searchParams.set("checkin", checkin)
      url.searchParams.set("checkout", checkout)
    } else {
      url.searchParams.delete("checkin")
      url.searchParams.delete("checkout")
    }
    window.history.replaceState(null, "", url)
  }, [checkin, checkout, valid])

  return (
    <div>
      <div className="mb-4 grid grid-cols-2 gap-3 sm:max-w-md">
        <label className="flex flex-col gap-1.5">
          <span className="flex items-center gap-1.5 text-xs font-medium text-[#0f3d3e]/60">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            Check-in
          </span>
          <input
            type="date"
            className={fieldClasses}
            value={checkin}
            min={minDate}
            onChange={(e) => setCheckin(e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="flex items-center gap-1.5 text-xs font-medium text-[#0f3d3e]/60">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            Check-out
          </span>
          <input
            type="date"
            className={fieldClasses}
            value={checkout}
            min={checkin || minDate}
            onChange={(e) => setCheckout(e.target.value)}
          />
        </label>
      </div>
      {checkin && checkout && !valid ? (
        <p className="mb-3 text-sm text-[#b4533a]" role="alert">
          Check-out needs to be after check-in.
        </p>
      ) : null}
      <Stay22Map
        address={address}
        height={height}
        checkin={valid ? checkin : undefined}
        checkout={valid ? checkout : undefined}
      />
    </div>
  )
}

/** Stay22 map with its own date pickers. Reads ?checkin=&checkout= from the URL. */
export function MapWithDates({ address, height = 520 }: { address: string; height?: number }) {
  return (
    <Suspense
      fallback={
        <div
          className="rounded-2xl border border-[#0f3d3e]/10 bg-[#e8e1d5]"
          style={{ height: height + 72 }}
          aria-hidden="true"
        />
      }
    >
      <MapWithDatesInner address={address} height={height} />
    </Suspense>
  )
}
