import { useState } from 'react'
import { site, nav } from '../data/content.js'

export default function Header({ scrolled }) {
  const [open, setOpen] = useState(false)
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label={site.brandFull}>
          <span className="brand-mark" aria-hidden="true">
            <span>A</span>
          </span>
          <span className="brand-text">
            <strong>{site.brand}</strong>
            <em>Labs</em>
          </span>
        </a>

        <nav className={`nav ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)}>
          {nav.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <a href={`mailto:${site.email}`} className="btn btn-ghost header-cta">
          {site.email}
        </a>

        <button
          className={`burger ${open ? 'is-open' : ''}`}
          aria-label="Menu"
          onClick={() => setOpen(o => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
