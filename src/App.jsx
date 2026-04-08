import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['home', 'about', 'experience', 'companies', 'skills', 'contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'companies', label: 'Companies' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  const strengths = [
    {
      icon: '⚡',
      title: 'Strategic Vision',
      desc: 'Turning complex landscapes into clear, executable strategies that drive measurable growth.',
    },
    {
      icon: '🌐',
      title: 'Cross-Industry Mastery',
      desc: 'Rare ability to operate with equal authority in IT boardrooms, real estate negotiations, and cosmic consultations.',
    },
    {
      icon: '🤝',
      title: 'Leadership & Culture',
      desc: 'Building high-performance teams and inspiring cultures where people and purpose align.',
    },
    {
      icon: '✨',
      title: 'Holistic Thinking',
      desc: 'Bridging data-driven analytics with intuitive wisdom to make decisions that stand the test of time.',
    },
  ]

  const experiences = [
    {
      domain: 'Information Technology',
      icon: '💻',
      years: '15+',
      highlights: [
        'Led digital transformation projects for enterprise clients',
        'Architected scalable IT solutions across multiple sectors',
        'Built and managed cross-functional tech teams',
        'Delivered end-to-end software and infrastructure projects',
      ],
    },
    {
      domain: 'Real Estate',
      icon: '🏢',
      years: '10+',
      highlights: [
        'Managed large-scale property portfolios and acquisitions',
        'Navigated complex regulatory and financial landscapes',
        'Developed strategic partnerships for real estate growth',
        'Delivered residential and commercial project outcomes',
      ],
    },
    {
      domain: 'Cosmic Industry',
      icon: '🌌',
      years: '8+',
      highlights: [
        'Guided hundreds of individuals through transformative consultations',
        'Integrated ancient cosmic wisdom with modern life strategies',
        'Built a community around mindful, purpose-driven living',
        'Authored frameworks blending spirituality and business excellence',
      ],
    },
  ]

  const companies = [
    {
      name: 'ECS Technology',
      role: 'Managing Director',
      icon: '🖥️',
      color: 'from-blue-600 to-cyan-500',
      desc: 'A forward-thinking technology company delivering innovative IT solutions, digital infrastructure, and strategic tech consulting to businesses across sectors.',
    },
    {
      name: 'Abivya Group',
      role: 'Managing Director',
      icon: '🏗️',
      color: 'from-amber-500 to-orange-500',
      desc: 'A diversified business group with strong presence in real estate, enterprise services, and strategic investments — driven by vision, integrity, and growth.',
    },
    {
      name: 'Soapy Poetry',
      role: 'Managing Director',
      icon: '✍️',
      color: 'from-purple-600 to-pink-500',
      desc: 'A unique creative and wellness brand that weaves the art of expression with purposeful living, offering products and experiences that nourish the soul.',
    },
  ]

  const skillCategories = [
    {
      category: 'Technology & IT',
      icon: '💻',
      skills: ['Digital Transformation', 'IT Strategy', 'Software Architecture', 'Project Management', 'Enterprise Solutions', 'Cloud Infrastructure'],
    },
    {
      category: 'Business & Leadership',
      icon: '📊',
      skills: ['Strategic Planning', 'Team Leadership', 'Business Development', 'Financial Oversight', 'Stakeholder Management', 'Organizational Design'],
    },
    {
      category: 'Real Estate',
      icon: '🏢',
      skills: ['Portfolio Management', 'Property Acquisition', 'Market Analysis', 'Deal Structuring', 'Regulatory Navigation', 'Client Relations'],
    },
    {
      category: 'Cosmic & Wellness',
      icon: '🌌',
      skills: ['Cosmic Consultation', 'Vedic Astrology', 'Mindfulness Coaching', 'Energy Alignment', 'Life Strategy', 'Spiritual Guidance'],
    },
  ]

  return (
    <div className="portfolio">

      {/* ─── NAVBAR ─── */}
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => scrollTo('home')}>
            <span className="logo-r">R</span>ajesh
          </div>
          <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={`nav-link ${activeSection === id ? 'nav-link--active' : ''}`}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={menuOpen ? 'bar bar--open1' : 'bar'}></span>
            <span className={menuOpen ? 'bar bar--open2' : 'bar'}></span>
            <span className={menuOpen ? 'bar bar--open3' : 'bar'}></span>
          </button>
        </div>
      </nav>

      {/* ─── HERO SECTION ─── */}
      <section id="home" className="hero-section">
        <div className="hero-bg">
          <div className="star star-1"></div>
          <div className="star star-2"></div>
          <div className="star star-3"></div>
          <div className="star star-4"></div>
          <div className="star star-5"></div>
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
        </div>
        <div className="hero-content">
          <p className="hero-eyebrow">Managing Director · Visionary · Strategist</p>
          <h1 className="hero-name">
            <span className="hero-name-raj">Rajesh</span>
          </h1>
          <p className="hero-tagline">
            Where Technology Meets Wisdom,<br />
            <span className="tagline-gold">and Vision Becomes Reality.</span>
          </p>
          <p className="hero-mission">
            Empowering businesses and individuals through 15+ years of cross-industry leadership —
            blending cutting-edge technology, strategic business acumen, and cosmic wisdom
            to create impact that endures.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollTo('about')}>Discover My Story</button>
            <button className="btn-outline" onClick={() => scrollTo('contact')}>Get in Touch</button>
          </div>
        </div>
        <div className="hero-scroll-hint" onClick={() => scrollTo('about')}>
          <span>Scroll</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* ─── ABOUT SECTION ─── */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">About Me</span>
            <h2 className="section-title">A Journey Beyond Boundaries</h2>
          </div>
          <div className="about-grid">
            <div className="about-story">
              <p>
                My journey began with a single conviction — that <strong>great leaders don't just adapt to change, they drive it.</strong> Over the past 15+ years, I've built a career that refuses to be confined to one industry, one discipline, or one dimension of success.
              </p>
              <p>
                From architecting enterprise-grade technology solutions to closing landmark real estate deals, and from boardroom strategy sessions to cosmic consultations that transform lives — I have learned that <strong>true mastery lies at the intersection of knowledge, intuition, and purpose.</strong>
              </p>
              <p>
                Today, as Managing Director of three distinct companies, I bring this multi-dimensional perspective to every decision — leading with clarity, acting with integrity, and always building with the long view in mind.
              </p>
              <div className="mission-card">
                <span className="mission-label">Mission Statement</span>
                <p className="mission-text">
                  "To lead with vision, serve with wisdom, and build legacies that bridge the worlds of technology, business, and human potential."
                </p>
              </div>
            </div>
            <div className="strengths-grid">
              {strengths.map(({ icon, title, desc }) => (
                <div key={title} className="strength-card">
                  <div className="strength-icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE SECTION ─── */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Experience</span>
            <h2 className="section-title">15+ Years of Proven Impact</h2>
            <p className="section-sub">Three industries. One unwavering standard of excellence.</p>
          </div>
          <div className="exp-grid">
            {experiences.map(({ domain, icon, years, highlights }) => (
              <div key={domain} className="exp-card">
                <div className="exp-header">
                  <span className="exp-icon">{icon}</span>
                  <div>
                    <h3 className="exp-domain">{domain}</h3>
                    <span className="exp-years">{years} Years</span>
                  </div>
                </div>
                <ul className="exp-highlights">
                  {highlights.map((h) => (
                    <li key={h}>
                      <span className="bullet">▸</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPANIES SECTION ─── */}
      <section id="companies" className="section companies-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Leadership</span>
            <h2 className="section-title">Companies I Lead</h2>
            <p className="section-sub">Three ventures. Three missions. One vision.</p>
          </div>
          <div className="companies-grid">
            {companies.map(({ name, role, icon, color, desc }) => (
              <div key={name} className="company-card">
                <div className={`company-banner bg-gradient-to-r ${color}`}>
                  <span className="company-icon">{icon}</span>
                </div>
                <div className="company-body">
                  <span className="company-role">{role}</span>
                  <h3 className="company-name">{name}</h3>
                  <p className="company-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS SECTION ─── */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Skills</span>
            <h2 className="section-title">Core Competencies</h2>
            <p className="section-sub">A toolkit built across decades and disciplines.</p>
          </div>
          <div className="skills-grid">
            {skillCategories.map(({ category, icon, skills }) => (
              <div key={category} className="skill-category">
                <div className="skill-cat-header">
                  <span className="skill-cat-icon">{icon}</span>
                  <h3>{category}</h3>
                </div>
                <div className="skill-tags">
                  {skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT SECTION ─── */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Contact</span>
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-sub">Whether it's a business opportunity, a collaboration, or a conversation — I'd love to hear from you.</p>
          </div>
          <div className="contact-cards">
            <a href="mailto:rajesh@abivyagroup.com" className="contact-card">
              <div className="contact-card-icon">✉️</div>
              <div>
                <p className="contact-card-label">Email</p>
                <p className="contact-card-value">rajesh@abivyagroup.com</p>
              </div>
            </a>
            <a href="tel:+919996999872" className="contact-card">
              <div className="contact-card-icon">📞</div>
              <div>
                <p className="contact-card-label">Phone</p>
                <p className="contact-card-value">+91 9996999872</p>
              </div>
            </a>
            <a href="tel:+919550558072" className="contact-card">
              <div className="contact-card-icon">📱</div>
              <div>
                <p className="contact-card-label">Alternate</p>
                <p className="contact-card-value">+91 9550558072</p>
              </div>
            </a>
          </div>
          <div className="contact-cta">
            <a href="mailto:rajesh@abivyagroup.com" className="btn-primary">
              Send a Message
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo" onClick={() => scrollTo('home')}>
            <span className="logo-r">R</span>ajesh
          </div>
          <p className="footer-tagline">Where Technology Meets Wisdom.</p>
          <nav className="footer-nav">
            {navLinks.map(({ id, label }) => (
              <button key={id} className="footer-link" onClick={() => scrollTo(id)}>{label}</button>
            ))}
          </nav>
          <div className="footer-divider"></div>
          <div className="footer-bottom">
            <p className="footer-copy">© {new Date().getFullYear()} Rajesh · All Rights Reserved</p>
            <span className="footer-sep">|</span>
            <p className="footer-credit">Designed with ♥ by <a href="https://my-portfolio-dusky-chi-48.vercel.app" target="_blank" rel="noopener noreferrer" className="footer-credit-link"><strong>Sirisha</strong></a></p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
