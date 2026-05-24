import './TopBar.css'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <p>
          <span className="topbar__pulse" />
          New residential &amp; commercial projects now accepting enquiries
        </p>
        <a href="#contact" className="topbar__link">
          Get Quote →
        </a>
      </div>
    </div>
  )
}
