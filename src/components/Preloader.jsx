import { useEffect, useState } from 'react'
import Logo from './Logo'
import './Preloader.css'

export default function Preloader() {
  const [done, setDone] = useState(false)
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 1400)
    const t2 = setTimeout(() => setHide(true), 1800)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (hide) return null

  return (
    <div className={`preloader ${done ? 'preloader--done' : ''}`} aria-hidden="true">
      <div className="preloader__inner">
        <Logo size="preloader" className="logo--preloader" />
        <div className="preloader__bar">
          <span />
        </div>
      </div>
    </div>
  )
}
