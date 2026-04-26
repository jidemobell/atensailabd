import { capabilities } from '../data/content.js'

const ICON = {
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18" /><path d="M8 18v3M16 18v3M6 21h12" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M11 18h2" />
    </svg>
  ),
  edtech: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 9l9-5 9 5-9 5-9-5z" />
      <path d="M7 11v5c0 1.5 2.5 3 5 3s5-1.5 5-3v-5" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </svg>
  ),
  mvp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 19l5-5-3-3 7-7 5 5-7 7-3-3-5 5z" />
      <path d="M14 6l4 4" />
    </svg>
  ),
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="section section--light caps">
      <div className="container">
        <header className="section-head">
          <span className="kicker">Capabilities</span>
          <h2 className="section-title">The shapes the work usually takes.</h2>
          <p className="section-sub">
            Most engagements look like one or two of these. We’ll happily tell
            you when something isn’t a fit.
          </p>
        </header>

        <div className="caps-grid">
          {capabilities.map((c, i) => (
            <article key={c.title} className="cap-card">
              <span className="cap-card__index">{String(i + 1).padStart(2, '0')}</span>
              <div className="cap-card__icon">{ICON[c.icon]}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
