const sections = [
  {
    id: 'about',
    label: 'ABOUT',
    eyebrow: 'About',
    title: 'Short-form editing built for retention and speed.',
    description:
      'We structure hooks, pacing, captions, and motion so creators and brands can publish consistently without losing polish.',
  },
  {
    id: 'works',
    label: 'WORKS',
    eyebrow: 'Works',
    title: 'Workreels that stay sharp, fast, and platform-native.',
    description:
      'Launch promos, creator recaps, testimonials, and cutdowns are shaped for social formats first, then adapted across channels.',
  },
  {
    id: 'services',
    label: 'SERVICES',
    eyebrow: 'Services',
    title: 'Editing systems for campaigns, creators, and brand teams.',
    description:
      'From raw footage organization to final export presets, every step is tuned to reduce turnaround while preserving a premium finish.',
  },
  {
    id: 'testimonial',
    label: 'TESTIMONIAL',
    eyebrow: 'Testimonial',
    title: 'Teams come back for clarity, consistency, and speed.',
    description:
      'The goal is not just better-looking cuts, but repeatable delivery that holds up under weekly production pressure.',
  },
]

function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand-mark">Logoisum</div>
        <nav className="nav-links" aria-label="Primary">
          {sections.map((section) => (
            <a
              key={section.id}
              className={section.id === 'about' ? 'nav-link is-active' : 'nav-link'}
              href={`#${section.id}`}
            >
              {section.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#works">
          <span>GET STARTED</span>
          <span aria-hidden="true" className="header-cta-arrow">
            ↗
          </span>
        </a>
      </header>

      <section className="hero-section" id="about">
        <div className="hero-copy">
          <p className="hero-kicker">AGENCY THAT MAKES YOUR</p>
          <h1 className="hero-title">videos &amp; reels viral</h1>
          <p className="hero-description">
            Short-form video editing for Influencers, Creators and Brands
          </p>
        </div>

        <a className="hero-button" href="#works">
          <img aria-hidden="true" alt="" src="/play-icon.svg" />
          <span>See Our Workreel</span>
        </a>
      </section>

      <div className="hero-fade" aria-hidden="true" />

      <div className="content-rail">
        {sections.slice(1).map((section) => (
          <section key={section.id} className="content-section" id={section.id}>
            <p className="section-eyebrow">{section.eyebrow}</p>
            <h2 className="section-title">{section.title}</h2>
            <p className="section-description">{section.description}</p>
          </section>
        ))}
      </div>
    </main>
  )
}

export default App
