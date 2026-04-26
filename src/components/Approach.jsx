import { approach } from '../data/content.js'

export default function Approach() {
  return (
    <section id="approach" className="section section--dark approach">
      <div className="container approach-grid">
        <div className="approach-head">
          <span className="kicker">{approach.kicker}</span>
          <h2 className="section-title">{approach.title}</h2>
        </div>
        <ol className="approach-steps">
          {approach.steps.map((s, i) => (
            <li key={s.label} className="approach-step">
              <span className="approach-step__num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{s.label}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
