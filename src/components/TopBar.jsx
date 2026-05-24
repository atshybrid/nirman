import { SITE } from '../config/site'
import './TopBar.css'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <p>
          <span className="topbar__pulse" />
          Urban service apartments now in {SITE.cities.join(' & ')} — Green living · Smart technology
        </p>
        <a href="#contact" className="topbar__link">
          Enquire Now →
        </a>
      </div>
    </div>
  )
}
