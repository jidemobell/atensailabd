import { useState, useEffect } from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav">
            <div className="logo">AtensaiLabs</div>
            <button className="contact-btn">Contact</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="gradient-text">SOFTWARE</span>
              <span>INNOVATION</span>
            </h1>
            <p className="hero-subtitle">
              Pioneering software development, educational research, and innovation labs that transform ideas into impactful digital solutions
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">View Capabilities</button>
              <button className="btn-secondary">Discuss Your Project</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>What We <span className="gradient-text">Build</span></h2>
            <p>Comprehensive software solutions spanning development, innovation, and educational research</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">�</div>
              <h3>Software Engineering</h3>
              <p>Full-stack development and custom software solutions built with cutting-edge technologies and modern architectural patterns.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">�</div>
              <h3>Innovation Development</h3>
              <p>Transforming breakthrough ideas into scalable software products through rapid prototyping and agile development methodologies.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🔬</div>
              <h3>Educational Research</h3>
              <p>Pioneering research in educational frontiers, developing next-generation learning technologies and pedagogical innovations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="featured-work">
        <div className="container">
          <div className="section-header">
            <h2>Our <span className="gradient-text">Capabilities</span></h2>
            <p>Comprehensive solutions across software development, innovation, and research domains</p>
          </div>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span className="project-emoji">🌐</span>
                  <span className="project-number">Web Applications</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Full-Stack Development</h3>
                <p>Modern web applications using React, Node.js, Python, and cloud technologies for scalable solutions.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span className="project-emoji">�</span>
                  <span className="project-number">Mobile Solutions</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Cross-Platform Apps</h3>
                <p>Native and hybrid mobile applications for iOS and Android with seamless user experiences.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span className="project-emoji">🎓</span>
                  <span className="project-number">EdTech Solutions</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Educational Technology</h3>
                <p>Learning management systems, educational apps, and digital tools that enhance the learning experience.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span className="project-emoji">🤖</span>
                  <span className="project-number">AI Integration</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Intelligent Systems</h3>
                <p>Machine learning and AI-powered applications that automate processes and enhance decision-making.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span className="project-emoji">📊</span>
                  <span className="project-number">Data Analytics</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Research Analytics</h3>
                <p>Data visualization dashboards and analytics platforms for educational research and insights.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span className="project-emoji">⚡</span>
                  <span className="project-number">Rapid Prototyping</span>
                </div>
              </div>
              <div className="project-content">
                <h3>MVP Development</h3>
                <p>Quick turnaround from concept to working prototype, validating ideas through iterative development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <div className="contact-content">
            <h2>Ready to <span className="gradient-text">Collaborate?</span></h2>
            <p>Let's discuss your software development needs, research project, or innovative idea. We're here to turn concepts into reality.</p>
            <button className="btn-primary">Start a Conversation</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="logo">AtensaiLabs</div>
            <div className="copyright">© 2025 AtensaiLabs. Transforming ideas into software.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
