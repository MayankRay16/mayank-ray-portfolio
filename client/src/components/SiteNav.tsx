import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { cvUrl, navItems } from "@/lib/portfolioData";

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-nav">
      <a className="wordmark" href="/" target="_blank" rel="noreferrer">
        <span className="wordmark-mark">M<span>.</span></span>
        <span className="wordmark-name">MAYANK RAY</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => <a key={item.href} href={item.href} target="_blank" rel="noreferrer">{item.label}</a>)}
        <a href={cvUrl} target="_blank" rel="noreferrer" className="nav-cv"><Download size={13} /> CV</a>
      </nav>
      <a className="nav-cta" href="/contact" target="_blank" rel="noreferrer">Let’s talk <ArrowUpRight size={15} /></a>
      <button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X size={20} /> : <Menu size={20} />}</button>
      {open && <div className="mobile-menu">{navItems.map((item) => <a key={item.href} href={item.href} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>{item.label}</a>)}<a href={cvUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Open CV <Download size={14} /></a></div>}
    </header>
  );
}
