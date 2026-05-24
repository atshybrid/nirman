import { useCountUp } from '../hooks/useCountUp'

export default function StatItem({ end, suffix, label, format }) {
  const { count, ref } = useCountUp(end, 2200)

  const display = format
    ? count.toLocaleString('en-IN')
  : count

  return (
    <li ref={ref} className="stats__item">
      <span className="stats__value">
        {display}
        {suffix}
      </span>
      <span className="stats__label">{label}</span>
    </li>
  )
}
