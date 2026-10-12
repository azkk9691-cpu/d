export default function AvailabilityBadge({ status }) {
  const isInStock = status === 'In Stock'

  const colorClasses = isInStock
    ? 'bg-green-100 text-green-700'
    : 'bg-red-100 text-red-700'

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${colorClasses}`}
    >
      {status}
    </span>
  )
}
