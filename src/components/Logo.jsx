import './Logo.css'

const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`.replace(/\/\//g, '/')

export default function Logo({ className = '', size = 'md', showText = false }) {
  return (
    <span className={`logo logo--${size} ${className}`.trim()}>
      <img src={LOGO_SRC} alt="MR NIRMAN Infra" className="logo__img" width={160} height={48} />
      {showText && <span className="logo__sr-only">MR NIRMAN Infra</span>}
    </span>
  )
}
