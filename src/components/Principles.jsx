import { principles } from '../data/content.js'

export default function Principles() {
  return (
    <section className="section section--light principles">
      <div className="container">
        <header className="section-head">
          <span className="kicker">Principles</span>
          <h2 className="section-title">What we hold ourselves to.</h2>
        </header>
        <div className="prin-grid">
          {principles.map((p, i) => (
            <article key={p.title} className="prin-card">
              <span className="prin-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
