"use client"

export function Stay22Map({ address, height = 600 }: { address: string; height?: number }) {
  const aid = "6aa417b92c12fc22b51ac118"
  const src = `https://www.stay22.com/embed/gm?aid=${aid}&address=${encodeURIComponent(address)}&viewmode=hybrid`

  return (
    <div className="overflow-hidden rounded-2xl border border-[#0f3d3e]/10 bg-[#e8e1d5] shadow-sm">
      <iframe
        title={`Places to stay near ${address}`}
        src={src}
        width="100%"
        height={height}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block border-0"
      />
    </div>
  )
}
