import { practices } from '../data/content.js'

export default function Practices() {
  return (
    <section id="practices" className="section section--dark practices">
      <div className="container">
        <header className="section-head">
          <span className="kicker">What we do</span>
          <h2 className="section-title">Three practices, one studio.</h2>
          <p className="section-sub">
            We organise our work into three loosely-overlapping practices.
            Most projects pull from more than one.
          </p>
        </header>

        <div className="prac-grid">
          {practices.map(p => (
            <article key={p.id} className="prac-card">
              <div className="prac-card__num">{p.number}</div>
              <span className="prac-card__sub">{p.sub}</span>
              <h3 className="prac-card__title">{p.title}</h3>
              <p className="prac-card__text">{p.text}</p>
              <span className="prac-card__line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
