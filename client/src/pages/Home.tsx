import { ArrowDownRight, ArrowUpRight, Download, MapPin, Sparkles } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import { cvUrl, portraitUrl } from "@/lib/portfolioData";

export default function Home() {
  return <main className="site-shell">
    <SiteNav />
    <section className="home-hero page-wrap">
      <div className="hero-copy">
        <div className="hero-kicker"><span className="kicker-line" /> Portfolio / 2026</div>
        <h1>Ideas with<br /><em>personality.</em></h1>
        <p className="hero-intro">I’m Mayank — a CSE student, creative problem solver, and front-end builder crafting thoughtful digital experiences from Bangalore.</p>
        <div className="hero-actions">
          <a className="primary-button" href="/about" target="_blank" rel="noreferrer">Meet me properly <ArrowDownRight size={17} /></a>
          <a className="text-button" href={cvUrl} target="_blank" rel="noreferrer">Open CV <Download size={16} /></a>
        </div>
        <div className="hero-meta"><span><MapPin size={14} /> Bangalore, India</span><span><i /> Open to building</span></div>
      </div>
      <div className="home-portrait-wrap">
        <div className="portrait-aura" />
        <div className="portrait-card">
          <div className="portrait-caption"><span>01 / ABOUT ME</span><span className="live-dot"><i /> PRESENT</span></div>
          <img src={portraitUrl} alt="Mayank Kumar Ray" className="portrait-image" />
          <div className="portrait-overlay" />
          <div className="portrait-name">MAYANK<br /><em>RAY</em></div>
          <div className="portrait-coordinates">12°58'N / 77°35'E</div>
        </div>
        <div className="portrait-note"><Sparkles size={14} /> A little more human, always.</div>
      </div>
    </section>
    <section className="home-band"><div>CODE WITH INTENT</div><span>✳</span><div>DESIGN WITH CURIOSITY</div><span>✳</span><div>SHIP WITH MOMENTUM</div><span>✳</span><div>CODE WITH INTENT</div></section>
    <section className="home-intro page-wrap">
      <div><div className="section-index">01 / A QUICK HELLO</div><h2>Not just a<br /><em>pretty interface.</em></h2></div>
      <div className="intro-side"><p>I care about the part where good design meets useful technology. That means paying attention to the structure, the feeling, and the small details that make a digital experience easy to remember.</p><a className="inline-link" href="/about" target="_blank" rel="noreferrer">Read about me <ArrowUpRight size={16} /></a></div>
    </section>
    <footer className="site-footer page-wrap"><span>© 2026 MAYANK RAY</span><span>BUILT WITH CURIOSITY + CODE</span><a href="/contact" target="_blank" rel="noreferrer">NEXT / CONTACT <ArrowUpRight size={14} /></a></footer>
  </main>;
}
