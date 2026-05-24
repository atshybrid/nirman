import { useCountUp } from '../hooks/useCountUp'

export default function StatItem({ end, suffix, label, format, staticValue }) {
  const { count, ref } = useCountUp(staticValue ? 0 : end, 2200)

  if (staticValue) {
    return (
      <li ref={ref} className="stats__item">
        <span className="stats__value stats__value--text">{staticValue}</span>
        <span className="stats__label">{label}</span>
      </li>
    )
  }

  const display = format ? count.toLocaleString('en-IN') : count

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
