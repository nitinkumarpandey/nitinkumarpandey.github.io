import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  Code2,
  Cpu,
  Download,
  Gauge,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  PlayCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  X
} from 'lucide-react';
import { profile } from './data/profile.js';
import './styles.css';

const iconMap = {
  architecture: Layers3,
  performance: Gauge,
  users: Users,
  stability: ShieldCheck,
  mobile: MonitorSmartphone,
  api: Cpu,
  media: PlayCircle,
  leadership: BrainCircuit,
  compliance: BadgeCheck,
  code: Code2,
  delivery: Rocket,
  contact: MessageCircle
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = profile.navigation.map((item) => document.getElementById(item.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: '-24% 0px -58% 0px', threshold: [0.12, 0.28, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <>
      <Nav activeSection={activeSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />
      <main>
        <Hero scrollTo={scrollTo} />
        <About />
        <Skills />
        <Experience />
        <Highlights />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

function Nav({ activeSection, menuOpen, setMenuOpen, scrollTo }) {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <button className="brand-lockup" onClick={() => scrollTo('home')} aria-label="Go to home">
          <span className="brand-mark">NP</span>
          <span>
            <strong>Nitinkumar Pandey</strong>
            <small>Android Architect</small>
          </span>
        </button>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {profile.navigation.map((item) => (
            <button
              className={activeSection === item.id ? 'active' : ''}
              key={item.id}
              onClick={() => scrollTo(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero({ scrollTo }) {
  return (
    <section className="hero-section section-pad" id="home">
      <div className="hero-grid container">
        <div className="hero-copy reveal">
          <p className="eyebrow">Enterprise Android architecture for high-scale commerce</p>
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-actions">
            <a className="button primary" href="./Nitinkumar-Pandey-Resume.pdf" target="_blank" rel="noreferrer">
              <Download size={18} />
              View Resume
            </a>
            <button className="button secondary" type="button" onClick={() => scrollTo('contact')}>
              Contact Me
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="hero-visual" aria-label="Android architecture profile summary">
          <div className="orbit-card main-signal">
            <MonitorSmartphone size={34} />
            <span>Android</span>
            <strong>Architecture</strong>
          </div>
          <div className="signal-ring ring-one" />
          <div className="signal-ring ring-two" />
          <div className="mini-node node-one">
            <Layers3 size={18} />
            Clean layers
          </div>
          <div className="mini-node node-two">
            <Cpu size={18} />
            API UI
          </div>
          <div className="mini-node node-three">
            <ShieldCheck size={18} />
            99.9%+
          </div>
        </div>
      </div>

      <div className="metric-strip container">
        {profile.metrics.map((metric) => {
          const Icon = iconMap[metric.icon] || Sparkles;
          return (
            <article className="metric-card" key={metric.label}>
              <Icon size={22} />
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, intro }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

function About() {
  return (
    <section className="section-pad" id="about">
      <div className="container two-column">
        <SectionHeading eyebrow="About" title="Architecture-minded Android leader" intro={profile.summary} />
        <div className="focus-grid">
          {profile.aboutFocus.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <article className="focus-card" key={item.title}>
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-pad muted-band" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Modern Android toolkit, grouped for quick scanning"
          intro="A practical stack across platform architecture, async programming, integrations, testing, and release operations."
        />
        <div className="skills-grid">
          {profile.skills.map((group) => {
            const Icon = iconMap[group.icon] || Code2;
            return (
              <article className="skill-card" key={group.category}>
                <div className="card-title">
                  <Icon size={22} />
                  <h3>{group.category}</h3>
                </div>
                <div className="tag-cloud">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
                <div className="skill-meter" aria-hidden="true">
                  <span style={{ width: `${group.strength}%` }} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section-pad" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Production ownership across high-scale Android products"
          intro="Timeline focused on architecture decisions, measurable impact, and senior-level delivery."
        />
        <div className="timeline">
          {profile.experience.map((role, index) => (
            <article className="timeline-item" key={`${role.company}-${role.duration}`}>
              <div className="timeline-marker">{index + 1}</div>
              <div className="timeline-card">
                <div className="timeline-head">
                  <div>
                    <p className="client-line">{role.company}</p>
                    <h3>{role.role}</h3>
                    {role.client && <span className="client-pill">{role.client}</span>}
                  </div>
                  <span className="duration">
                    <CalendarDays size={16} />
                    {role.duration}
                  </span>
                </div>
                <div className="achievement-grid">
                  {role.achievements.map((achievement) => (
                    <div className="achievement" key={achievement}>
                      <ChevronRight size={17} />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="section-pad impact-band" id="highlights">
      <div className="container">
        <SectionHeading
          eyebrow="Highlights"
          title="Impact signals recruiters can understand in seconds"
          intro="The profile centers on scale, measurable performance, production stability, and technical leadership."
        />
        <div className="impact-grid">
          {profile.highlights.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <article className="impact-card" key={item.title}>
                <Icon size={25} />
                <strong>{item.title}</strong>
                <p>{item.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section-pad" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work showcase"
          intro="Major commerce products where architecture, reliability, and delivery discipline mattered every release."
        />
        <div className="project-grid">
          {profile.projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-topline">
                <BriefcaseBusiness size={22} />
                <span>{project.scale}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="stack-list">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <strong className="project-impact">{project.impact}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const contactCards = useMemo(
    () => [
      { label: 'Email', value: profile.contact.email, href: `mailto:${profile.contact.email}`, icon: Mail },
      { label: 'Phone', value: profile.contact.phone, href: `tel:${profile.contact.phone.replace(/[^+\d]/g, '')}`, icon: Phone },
      { label: 'LinkedIn', value: 'linkedin.com/in/nitinkumar-pandey', href: profile.contact.linkedin, icon: Linkedin },
      { label: 'Location', value: profile.contact.location, href: null, icon: MapPin }
    ],
    []
  );

  return (
    <section className="section-pad contact-section" id="contact">
      <div className="container contact-grid">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Ready for senior Android architecture conversations"
            intro="Best fit: Android Architect, Senior Android Engineer, Technical Lead, or mobile platform roles focused on scale and reliability."
          />
          <div className="contact-actions">
            <a className="button primary" href={`mailto:${profile.contact.email}`}>
              <Mail size={18} />
              Email Nitinkumar
            </a>
            <a className="button secondary" href={profile.contact.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="contact-card">
          {contactCards.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <Icon size={20} />
                <span>
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                </span>
              </>
            );

            return item.href ? (
              <a className="contact-row" href={item.href} key={item.label} target={item.label === 'LinkedIn' ? '_blank' : undefined} rel="noreferrer">
                {content}
              </a>
            ) : (
              <div className="contact-row" key={item.label}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);
