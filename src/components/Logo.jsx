import './Logo.css'

const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`.replace(/\/\//g, '/')

export default function Logo({ className = '', size = 'md', showText = false }) {
  return (
    <span className={`logo logo--${size} ${className}`.trim()}>
      <img
        src={LOGO_SRC}
        alt="MR NIRMAN Infra logo — construction, urban service apartments, green living in Hyderabad and Bangalore"
        className="logo__img"
        width={280}
        height={280}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      {showText && <span className="logo__sr-only">MR NIRMAN Infra</span>}
    </span>
  )
}
