import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Database,
  Download,
  ExternalLink,
  Figma,
  Github,
  GraduationCap,
  LibraryBig,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Route,
  Send,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

const navItems = [
  { label: "Journey", href: "#journey" },
  { label: "Builds", href: "#builds" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Contact", href: "#contact" },
];

const journeyStops = [
  {
    id: "origin",
    eyebrow: "ORIGIN / 01",
    title: "Curious by default.",
    year: "Now",
    icon: Sparkles,
    color: "lime",
    body: "I’m Mayank — a computer science student turning curiosity into useful, well-crafted digital experiences.",
    meta: "Bangalore, India",
  },
  {
    id: "campus",
    eyebrow: "CAMPUS / 02",
    title: "MIT, Bangalore",
    year: "2025 → 2029",
    icon: GraduationCap,
    color: "blue",
    body: "B.Tech in Computer Science & Engineering at Manipal Institute of Technology. Building the fundamentals that make ambitious ideas shippable.",
    meta: "B.Tech · CSE",
  },
  {
    id: "graphica",
    eyebrow: "LEADERSHIP / 03",
    title: "General Secretary, Graphica",
    year: "2026 → 2027",
    icon: BriefcaseBusiness,
    color: "orange",
    body: "Helping a creative college club communicate better — from events and landing pages to making it easier for students to find their people.",
    meta: "Club leadership",
  },
  {
    id: "builder",
    eyebrow: "BUILDER MODE / 04",
    title: "From blank canvas to live URL.",
    year: "In progress",
    icon: Code2,
    color: "pink",
    body: "I use HTML, CSS, JavaScript, Python, Java, and C to prototype quickly, then refine the details until the product feels intentional.",
    meta: "Web · code · systems",
  },
  {
    id: "next",
    eyebrow: "NEXT STOP / 05",
    title: "More to ship.",
    year: "Up next",
    icon: Route,
    color: "lime",
    body: "Exploring stronger front-end systems, thoughtful interaction design, and projects that make people say: ‘that feels good to use.’",
    meta: "Open road ahead",
  },
];

const skills = [
  { label: "C", group: "Languages", detail: "Logic + fundamentals", color: "lime" },
  { label: "Python", group: "Languages", detail: "Prototyping + data", color: "blue" },
  { label: "Java", group: "Languages", detail: "Object-oriented thinking", color: "orange" },
  { label: "JavaScript", group: "Web", detail: "Interaction + behavior", color: "pink" },
  { label: "HTML / CSS", group: "Web", detail: "Structure + visual craft", color: "lime" },
  { label: "GitHub", group: "Tools", detail: "Ship + collaborate", color: "blue" },
  { label: "VS Code", group: "Tools", detail: "Daily workbench", color: "orange" },
  { label: "AI assistants", group: "Tools", detail: "Claude · Gemini · ChatGPT", color: "pink" },
];

const projects = [
  {
    number: "01",
    category: "PERSONAL / WEB",
    title: "Personal Portfolio",
    description:
      "A responsive multi-page portfolio with clean navigation, form validation, an image gallery, and a visual system that stays calm on every screen.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "lime",
    icon: Code2,
  },
  {
    number: "02",
    category: "GRAPHICA / CLUB",
    title: "Club Landing Page",
    description:
      "A friendly home for Graphica: what the club is, where it’s going, and how students can find past and future events without digging.",
    stack: ["Landing page", "Events", "Accessibility"],
    accent: "blue",
    icon: Route,
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function downloadCv() {
  const cv = `MAYANK KUMAR RAY\nBangalore, India | +91-8088704088 | mayankrayg@gmail.com\nLinkedIn: linkedin.com/in/mayank-ray-1a6626333 | GitHub: github.com/MayankRay16\n\nEDUCATION\nManipal Institute of Technology, Bangalore\nB.Tech in Computer Science & Engineering — Expected Graduation 2029\n\nTECHNICAL SKILLS\nC, Python, Java | HTML, CSS, JavaScript | GitHub, VS Code, Claude, Gemini, ChatGPT\n\nPROJECTS\nPersonal Portfolio Website — responsive multi-page site with interactive features.\nGraphica Club Landing Page — club story, events, and accessible student information.\n\nCOURSEWORK\nData Structures & Algorithms, Object-Oriented Programming\n\nACTIVITIES & ACHIEVEMENTS\nGeneral Secretary at Graphica (2026-2027)\nGemini AI Certification — Coursera\nFigma UI/UX Certification — Coursera\n`;
  const blob = new Blob([cv], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Mayank-Kumar-Ray-CV.txt";
  link.click();
  URL.revokeObjectURL(url);
}

function Car({ small = false }: { small?: boolean }) {
  return (
    <svg className={small ? "car-svg car-svg-small" : "car-svg"} viewBox="0 0 160 82" aria-hidden="true">
      <path d="M12 51h136c4 0 7 3 7 7v7H5v-7c0-4 3-7 7-7Z" fill="#d5ff47" />
      <path d="m34 51 11-23c2-5 7-8 12-8h35c6 0 12 3 15 8l12 23H34Z" fill="#d5ff47" />
      <path d="m51 26-9 20h28V25H56c-2 0-4 0-5 1Zm25-1v21h40l-10-19c-2-2-5-3-8-3H76Z" fill="#111310" />
      <path d="M18 47h11M131 47h11" stroke="#111310" strokeWidth="4" strokeLinecap="round" />
      <circle cx="39" cy="66" r="12" fill="#111310" />
      <circle cx="39" cy="66" r="5" fill="#a6ad9e" />
      <circle cx="121" cy="66" r="12" fill="#111310" />
      <circle cx="121" cy="66" r="5" fill="#a6ad9e" />
      <path d="M11 58h12M137 58h12" stroke="#ff7b5c" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function IntroCard() {
  return (
    <div className="intro-card">
      <div className="intro-card-glow" />
      <div className="intro-card-topline">
        <span className="eyebrow">CURRENTLY BUILDING</span>
        <span className="live-dot"><span /> available</span>
      </div>
      <div className="portrait-frame">
        <div className="portrait-grid" />
        <div className="portrait-monogram">MK<span>.</span></div>
        <div className="portrait-label">MAYANK<br />KUMAR RAY</div>
        <div className="portrait-coordinate">12°58'N / 77°35'E</div>
      </div>
      <div className="intro-card-footer">
        <div>
          <span className="muted-label">ROLE</span>
          <strong>CS student · builder</strong>
        </div>
        <div className="card-arrow"><ArrowUpRight size={18} /></div>
      </div>
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStop, setActiveStop] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(1);

  const sectionIds = useMemo(() => journeyStops.map((stop) => stop.id), []);

  useEffect(() => {
    const updateScroll = () => {
      const journey = document.getElementById("journey");
      if (!journey) return;
      const rect = journey.getBoundingClientRect();
      const journeyHeight = Math.max(1, rect.height - window.innerHeight * 0.7);
      const progress = Math.min(1, Math.max(0, -rect.top / journeyHeight));
      setScrollProgress(progress);

      const viewportLine = window.innerHeight * 0.42;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;
      sectionIds.forEach((id, index) => {
        const node = document.getElementById(id);
        if (!node) return;
        const distance = Math.abs(node.getBoundingClientRect().top - viewportLine);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });
      setActiveStop(nearestIndex);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, [sectionIds]);

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-nav">
        <button className="wordmark" onClick={() => scrollToId("top")} aria-label="Back to top">
          <span className="wordmark-mark">M<span>.</span></span>
          <span className="wordmark-name">MAYANK RAY</span>
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="nav-cta" href="mailto:mayankrayg@gmail.com">
          Let’s talk <ArrowUpRight size={15} />
        </a>
        <button className="mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        {mobileMenuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>{item.label}</a>
            ))}
          </div>
        )}
      </header>

      <section id="top" className="hero-section content-wrap">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="kicker-line" /> Portfolio / 2026</div>
          <h1>Making ideas<br /><em>feel alive.</em></h1>
          <p className="hero-intro">I’m Mayank — a CSE student, creative problem solver, and front-end builder crafting thoughtful digital experiences from Bangalore.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => scrollToId("journey")}>Explore my journey <ArrowDownRight size={17} /></button>
            <button className="text-button" onClick={downloadCv}>Download CV <Download size={16} /></button>
          </div>
          <div className="hero-meta">
            <div className="meta-item"><MapPin size={14} /> Bangalore, India</div>
            <div className="meta-item"><span className="meta-bar" /> Open to building</div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-orbit-dot dot-one" />
          <div className="hero-orbit-dot dot-two" />
          <IntroCard />
          <div className="hero-note note-top"><span>01</span> GOOD IDEAS<br />NEED MOMENTUM</div>
          <div className="hero-note note-bottom"><span>SCROLL TO DRIVE</span><ChevronDown size={16} /></div>
        </div>
      </section>

      <section className="marquee-band" aria-label="Skills and focus areas">
        <div className="marquee-track">
          <span>CODE WITH INTENT</span><i>✳</i><span>DESIGN WITH CURIOSITY</span><i>✳</i><span>SHIP WITH MOMENTUM</span><i>✳</i><span>CODE WITH INTENT</span><i>✳</i><span>DESIGN WITH CURIOSITY</span><i>✳</i>
        </div>
      </section>

      <section id="journey" className="journey-section content-wrap">
        <div className="section-heading journey-heading">
          <div>
            <div className="section-index">01 / THE LONG WAY AROUND</div>
            <h2>A timeline,<br /><em>in motion.</em></h2>
          </div>
          <p>Every stop adds a little more range. Scroll through the route to see where I’ve been learning, leading, and making.</p>
        </div>

        <div className="journey-layout">
          <aside className="journey-sidebar">
            <div className="sticky-sidebar">
              <div className="route-status"><span className="status-pulse" /> LIVE ROUTE</div>
              <div className="route-label">MAYANK / 2026</div>
              <div className="route-progress"><span style={{ height: `${Math.max(6, scrollProgress * 100)}%` }} /></div>
              <div className="route-stops">
                {journeyStops.map((stop, index) => (
                  <button key={stop.id} className={activeStop === index ? "route-stop active" : "route-stop"} onClick={() => scrollToId(stop.id)}>
                    <span>0{index + 1}</span>{stop.title}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="journey-road-wrap">
            <div className="road-line" />
            <div className="road-car" style={{ top: `${Math.min(94, Math.max(2, scrollProgress * 100))}%` }}><Car /></div>
            <div className="journey-stops">
              {journeyStops.map((stop, index) => {
                const Icon = stop.icon;
                return (
                  <article key={stop.id} id={stop.id} className={activeStop === index ? `journey-stop is-active stop-${stop.color}` : `journey-stop stop-${stop.color}`}>
                    <div className="stop-marker"><Icon size={18} /></div>
                    <div className="stop-card">
                      <div className="stop-topline"><span>{stop.eyebrow}</span><span>{stop.year}</span></div>
                      <h3>{stop.title}</h3>
                      <p>{stop.body}</p>
                      <div className="stop-meta"><span className="tiny-bar" /> {stop.meta}</div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="builds" className="builds-section content-wrap">
        <div className="section-heading split-heading">
          <div>
            <div className="section-index">02 / SELECTED BUILDS</div>
            <h2>Small projects,<br /><em>real momentum.</em></h2>
          </div>
          <p>Places where I’ve practiced the craft: making information clearer, interactions more useful, and the last 10% matter.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article key={project.number} className={`project-card project-${project.accent}`}>
                <div className="project-no">{project.number}</div>
                <div className="project-icon"><Icon size={22} /></div>
                <div className="project-category">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <span className="project-arrow"><ArrowUpRight size={18} /></span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="toolkit" className="toolkit-section content-wrap">
        <div className="section-heading split-heading">
          <div>
            <div className="section-index">03 / THE TOOLKIT</div>
            <h2>Good tools.<br /><em>Better questions.</em></h2>
          </div>
          <p>Technology is the medium. Curiosity, communication, and a bias toward making are the parts I bring to every project.</p>
        </div>
        <div className="toolkit-layout">
          <div className="skill-display">
            <div className="skill-display-topline"><span>SELECTED CAPABILITY</span><span>0{selectedSkill + 1} / 08</span></div>
            <div className={`skill-big-label skill-${skills[selectedSkill].color}`}>{skills[selectedSkill].label}</div>
            <div className="skill-display-copy"><span>{skills[selectedSkill].group}</span><strong>{skills[selectedSkill].detail}</strong></div>
            <div className="skill-signal signal-one" /><div className="skill-signal signal-two" /><div className="skill-signal signal-three" />
          </div>
          <div className="skill-list">
            {skills.map((skill, index) => (
              <button key={skill.label} className={selectedSkill === index ? `skill-row selected row-${skill.color}` : "skill-row"} onClick={() => setSelectedSkill(index)}>
                <span className="skill-row-no">0{index + 1}</span>
                <span className="skill-row-label">{skill.label}</span>
                <span className="skill-row-group">{skill.group}</span>
                <ArrowUpRight size={17} className="skill-row-arrow" />
              </button>
            ))}
          </div>
        </div>
        <div className="coursework-strip">
          <div className="coursework-title"><LibraryBig size={18} /> Current coursework</div>
          <span>Data Structures & Algorithms</span><span>Object-Oriented Programming</span><span>DBMS / Networks</span><span>Discrete Mathematics</span>
        </div>
      </section>

      <section className="proof-section content-wrap">
        <div className="proof-card">
          <div className="proof-orbit" />
          <div className="proof-copy"><div className="section-index">04 / SIGNALS</div><h2>Learning in<br /><em>public.</em></h2><p>The certificates are checkpoints, not the destination. I’m interested in applying what I learn — quickly, thoughtfully, and with a little personality.</p></div>
          <div className="cert-grid">
            <div className="cert-card"><div className="cert-symbol"><Sparkles size={18} /></div><span>COURSE / 01</span><strong>Gemini AI</strong><small>Coursera certification</small></div>
            <div className="cert-card"><div className="cert-symbol"><Figma size={18} /></div><span>COURSE / 02</span><strong>Figma UI/UX</strong><small>Coursera certification</small></div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section content-wrap">
        <div className="contact-topline"><span className="section-index">05 / NEXT EXIT</span><span className="contact-route"><span className="status-pulse" /> Bangalore → anywhere</span></div>
        <div className="contact-grid">
          <div>
            <h2>Have a good<br /><em>road to take?</em></h2>
            <p>Whether it’s a project, a club idea, or a conversation about building for the web — I’d love to hear what you’re thinking.</p>
          </div>
          <div className="contact-actions">
            <a className="contact-link" href="mailto:mayankrayg@gmail.com"><span><Mail size={18} /> mayankrayg@gmail.com</span><ArrowUpRight size={18} /></a>
            <a className="contact-link" href="https://github.com/MayankRay16" target="_blank" rel="noreferrer"><span><Github size={18} /> github.com/MayankRay16</span><ArrowUpRight size={18} /></a>
            <a className="contact-link" href="https://linkedin.com/in/mayank-ray-1a6626333" target="_blank" rel="noreferrer"><span><Linkedin size={18} /> linkedin.com/in/mayank-ray-1a6626333</span><ArrowUpRight size={18} /></a>
          </div>
        </div>
        <div className="contact-car"><Car small /></div>
      </section>

      <footer className="site-footer content-wrap"><span>© 2026 MAYANK KUMAR RAY</span><span>BUILT WITH CURIOSITY + CODE</span><button onClick={() => scrollToId("top")}>BACK TO TOP <ArrowUpRight size={14} /></button></footer>
    </main>
  );
}
