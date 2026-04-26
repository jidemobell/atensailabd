import { cta } from '../data/content.js'

export default function Cta() {
  return (
    <section id="contact" className="section section--cta">
      <div className="cta-glow" aria-hidden="true" />
      <div className="container cta-inner">
        <span className="kicker">{cta.kicker}</span>
        <h2 className="cta-title">{cta.title}</h2>
        <p className="cta-body">{cta.body}</p>
        <a className="btn btn-primary btn-lg" href={cta.button.href}>
          {cta.button.label}
          <span className="arrow">→</span>
        </a>
      </div>
    </section>
  )
}
