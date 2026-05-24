import { useEffect, useState } from 'react'
import './Preloader.css'

export default function Preloader() {
  const [done, setDone] = useState(false)
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 1200)
    const t2 = setTimeout(() => setHide(true), 1600)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (hide) return null

  return (
    <div className={`preloader ${done ? 'preloader--done' : ''}`} aria-hidden="true">
      <div className="preloader__inner">
        <div className="preloader__logo">MR</div>
        <div className="preloader__bar">
          <span />
        </div>
        <p>MR Tax</p>
      </div>
    </div>
  )
}
