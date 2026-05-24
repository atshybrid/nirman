import { stats } from '../data/content'
import StatItem from './StatItem'
import './Stats.css'

export default function Stats() {
  return (
    <section className="stats" aria-label="Company statistics">
      <div className="container">
        <ul className="stats__grid">
          {stats.map((item) => (
            <StatItem key={item.label} {...item} />
          ))}
        </ul>
      </div>
    </section>
  )
}
