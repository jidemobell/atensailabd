import { useState } from 'react'
import { site, nav } from '../data/content.js'

export default function Header({ scrolled }) {
  const [open, setOpen] = useState(false)
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label={site.brandFull}>
          <img src="/brand/mark-dark.png" alt="" className="brand-mark-img" aria-hidden="true" />
          <img src="/brand/wordmark-dark.png" alt={site.brand} className="brand-wordmark" />
          <em className="brand-tag">Labs</em>
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
