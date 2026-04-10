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
      desc: 'Turning complex landscapes into clear, executable strategies — from IT infrastructure to land development and consumer brands.',
    },
    {
      icon: '🌐',
      title: 'Cross-Industry Mastery',
      desc: 'Proven ability to build and lead ventures across technology, real estate, and premium lifestyle sectors with equal authority.',
    },
    {
      icon: '🤝',
      title: 'Leadership & Culture',
      desc: 'Building high-performance teams and inspiring cultures where people, purpose, and long-term value align.',
    },
    {
      icon: '✨',
      title: 'Entrepreneurial Drive',
      desc: 'From enterprise IT to real estate ventures to a handcrafted startup — a relentless builder with a track record across three industries.',
    },
  ]

  const experiences = [
    {
      phase: 'Phase 1',
      domain: 'IT Industry Experience',
      icon: '💻',
      years: '4+',
      highlights: [
        'Spent 4+ years in enterprise IT operations and infrastructure management',
        'Delivered client service solutions for organizations across sectors',
        'Developed expertise in IT infrastructure deployment and end-to-end tech solutions',
        'Built a foundation in customer service systems and enterprise operations',
      ],
    },
    {
      phase: 'Phase 2',
      domain: 'IT Services Business',
      icon: '🖥️',
      years: '',
      highlights: [
        'Founded and led an IT Services Business delivering solutions to private and government clients',
        'Served Hindustan Aeronautics Limited and Tata Teleservices among key accounts',
        'Supported Jai Raj Steel and multiple government sector clients',
        'Managed end-to-end IT infrastructure projects for enterprise and public organizations',
      ],
    },
    {
      phase: 'Phase 3',
      domain: 'Real Estate — Abivya Group',
      icon: '🏗️',
      years: '',
      highlights: [
        'Expanded into real estate in 2020, founding Abivya Group for venture development',
        'Focused on strategic land acquisition and strategic property selection',
        'Created customer-focused land investment opportunities in Sangareddy and Kandukur',
        'Built around high-potential growth zones and transparent property development',
      ],
    },
    {
      phase: 'Phase 4',
      domain: 'Startup Brand — Soapy Poetry',
      icon: '🌿',
      years: '',
      highlights: [
        'Launched Soapy Poetry, a premium handcrafted lifestyle and wellness brand',
        'Built a creative consumer brand focused on artisanal products and purposeful living',
        'Expanded entrepreneurial portfolio into the growing wellness and lifestyle market',
        'Bringing the same vision-driven approach from IT and real estate to consumer brands',
      ],
    },
  ]

  const companies = [
    {
      name: 'IT Services Business',
      role: 'Founder',
      icon: '🖥️',
      color: 'from-blue-600 to-cyan-500',
      desc: 'An IT services company delivering infrastructure and technical solutions to private and government organizations, including Hindustan Aeronautics Limited, Tata Teleservices, and Jai Raj Steel.',
    },
    {
      name: 'Abivya Group',
      role: 'Founder · Managing Director',
      icon: '🏗️',
      color: 'from-amber-500 to-orange-500',
      desc: 'A real estate venture development company focused on strategic property selection, customer-focused land investment opportunities, and transparent development in Sangareddy and Kandukur.',
    },
    {
      name: 'Soapy Poetry',
      role: 'Founder',
      icon: '🌿',
      color: 'from-purple-600 to-pink-500',
      desc: 'A premium handcrafted lifestyle startup blending creative wellness with artisanal product design — Rajesh\'s newest venture at the intersection of creativity and consumer brands.',
    },
  ]

  const skillCategories = [
    {
      category: 'Technology & IT',
      icon: '💻',
      skills: ['IT Infrastructure', 'Enterprise Solutions', 'IT Operations', 'Client Service Delivery', 'Project Management', 'Government IT Projects'],
    },
    {
      category: 'Business & Leadership',
      icon: '📊',
      skills: ['Strategic Planning', 'Team Leadership', 'Business Development', 'Venture Building', 'Stakeholder Management', 'Founder Mindset'],
    },
    {
      category: 'Real Estate',
      icon: '🏢',
      skills: ['Land Acquisition', 'Venture Development', 'Property Selection', 'Market Analysis', 'Customer-Focused Development', 'Growth Zone Strategy'],
    },
    {
      category: 'Consumer Brands',
      icon: '🌿',
      skills: ['Brand Building', 'Startup Strategy', 'Product Development', 'Lifestyle Marketing', 'Handcrafted Products', 'Creative Entrepreneurship'],
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
          <p className="hero-eyebrow">Founder · Managing Director · Entrepreneur</p>
          <h1 className="hero-name">
            <span className="hero-name-raj">Rajesh</span>
          </h1>
          <p className="hero-tagline">
            Building at the Intersection of Technology,<br />
            <span className="tagline-gold">Real Estate &amp; Creative Brands.</span>
          </p>
          <p className="hero-mission">
            Entrepreneur building companies across three industries — from enterprise IT solutions
            and real estate venture development to premium handcrafted lifestyle brands.
            Every venture driven by the same conviction: choose the right opportunity, create real value.
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
            <h2 className="section-title">A Journey Built Venture by Venture</h2>
          </div>
          <div className="about-grid">
            <div className="about-story">
              <p>
                I started in the IT sector, spending over four years gaining hands-on experience in <strong>enterprise IT operations, infrastructure management, and client service delivery.</strong> That foundation led me to launch my own IT Services Business — serving clients like Hindustan Aeronautics Limited, Tata Teleservices, and Jai Raj Steel.
              </p>
              <p>
                In 2020, I expanded into real estate, founding <strong>Abivya Group</strong> to focus on strategic land acquisition and venture development. Our developments in Sangareddy and Kandukur are built on a simple philosophy: choose the right property, create real value, and ensure long-term customer satisfaction.
              </p>
              <p>
                Most recently, I launched <strong>Soapy Poetry</strong> — a startup brand in the premium handcrafted lifestyle and wellness space. Three industries, three ventures, one consistent approach: build with purpose and execute with integrity.
              </p>
              <div className="mission-card">
                <span className="mission-label">Philosophy</span>
                <p className="mission-text">
                  "Choose the right property, create real value, and ensure long-term customer satisfaction."
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
            <h2 className="section-title">Four Phases. Three Industries.</h2>
            <p className="section-sub">A career built step by step — from IT professional to multi-venture entrepreneur.</p>
          </div>
          <div className="exp-grid exp-grid--4col">
            {experiences.map(({ phase, domain, icon, years, highlights }) => (
              <div key={domain} className="exp-card">
                <div className="exp-header">
                  <span className="exp-icon">{icon}</span>
                  <div>
                    <span className="exp-phase">{phase}</span>
                    <h3 className="exp-domain">{domain}</h3>
                    {years && <span className="exp-years">{years} Years</span>}
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
            <h2 className="section-title">Ventures I've Built</h2>
            <p className="section-sub">Three companies. Three industries. One entrepreneurial mindset.</p>
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
            <p className="section-sub">Skills built across IT, real estate, and creative entrepreneurship.</p>
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
          <p className="footer-tagline">Technology · Real Estate · Creative Brands.</p>
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
