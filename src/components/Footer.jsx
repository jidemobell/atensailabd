import { site, nav } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#top" className="brand brand--footer">
            <span className="brand-mark" aria-hidden="true"><span>A</span></span>
            <span className="brand-text">
              <strong>{site.brand}</strong>
              <em>Labs</em>
            </span>
          </a>
          <p className="footer-tag">{site.tagline}</p>
          <p className="footer-loc">{site.location}</p>
        </div>

        <div className="footer-cols">
          <div>
            <h4>Studio</h4>
            <ul>
              {nav.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={site.social.github} target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href={site.social.linkedin}>LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {site.year} {site.brandFull}. Transforming ideas into software.</span>
        <span className="footer-jp">天才 · attentive craft</span>
      </div>
    </footer>
  )
}
