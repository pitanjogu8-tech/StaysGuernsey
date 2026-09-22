export function Stay22Map({ address, height = 600 }: { address: string; height?: number }) {
  const query = encodeURIComponent(address)

  return (
    <div className="overflow-hidden rounded-2xl border border-[#0f3d3e]/10 bg-[#e8e1d5] shadow-sm">
      <iframe
        title={`Map of ${address}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        width="100%"
        height={height}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block border-0"
      />
    </div>
  )
}
