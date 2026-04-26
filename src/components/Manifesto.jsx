import { manifesto } from '../data/content.js'

// Render a paragraph, wrapping the first occurrence of 天才 in a small gloss span.
function renderParagraph(text, key) {
  const idx = text.indexOf('天才')
  if (idx === -1) return <p key={key} className="lead">{text}</p>
  return (
    <p key={key} className="lead">
      {text.slice(0, idx)}
      <span className="jp-gloss" lang="ja">天才</span>
      {text.slice(idx + 2)}
    </p>
  )
}

export default function Manifesto() {
  return (
    <section id="manifesto" className="section section--light manifesto">
      <div className="container manifesto-stack">
        <span className="kicker">{manifesto.kicker}</span>
        <h2 className="section-title manifesto-title">{manifesto.title}</h2>
        <div className="manifesto-body">
          {manifesto.body.map((p, i) => renderParagraph(p, i))}
        </div>
      </div>
    </section>
  )
}
