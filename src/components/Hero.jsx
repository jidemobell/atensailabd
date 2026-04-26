import { hero } from '../data/content.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      {/* Decorative ambient layers */}
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-glow hero-glow--two" aria-hidden="true" />

      <div className="container hero-inner">
        <span className="eyebrow">{hero.eyebrow}</span>

        <h1 className="hero-title">
          <span className="hero-title__line">{hero.title[0]}</span>
          <span className="hero-title__line hero-title__line--accent">
            {hero.title[1]}
            <em className="hero-title__dot" aria-hidden="true" />
          </span>
        </h1>

        <p className="hero-lead">{hero.lead}</p>

        <div className="hero-ctas">
          <a className="btn btn-primary" href={hero.primaryCta.href}>
            {hero.primaryCta.label}
            <span className="arrow">→</span>
          </a>
          <a className="btn btn-link" href={hero.secondaryCta.href}>
            {hero.secondaryCta.label}
          </a>
        </div>

        <div className="hero-meta">
          <span className="hero-meta__pulse" aria-hidden="true" />
          <span>Currently taking on a small number of new projects.</span>
        </div>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee__track">
          {[...hero.marquee, ...hero.marquee].map((w, i) => (
            <span key={i}><i>◆</i>{w}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
