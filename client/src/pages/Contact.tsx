import { FormEvent, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import SiteNav from "@/components/SiteNav";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nReply email: ${email}\n\n${message}`);
    setSent(true);
    window.location.href = `mailto:mayankray@gmail.com?subject=${subject}&body=${body}`;
  };

  return <main className="site-shell inner-page"><SiteNav /><div className="page-wrap contact-page"><div className="section-index">04 / NEXT EXIT</div><h1>Have a good<br /><em>road to take?</em></h1><p>Whether it’s a project, a club idea, or a conversation about building for the web — I’d love to hear what you’re thinking.</p><div className="contact-layout"><form className="contact-form" onSubmit={handleSubmit}><div className="form-row"><label>Name<input name="name" required minLength={2} maxLength={120} placeholder="Your name" /></label><label>Email<input name="email" required type="email" placeholder="you@example.com" /></label></div><label>Message<textarea name="message" required minLength={10} maxLength={5000} placeholder="Tell me a little about the idea..." rows={5} /></label><button className="primary-button" type="submit">{sent ? "Opening your email app..." : "Send message"} <Send size={16} /></button><p className="form-note">Your email app will open with the message addressed to <strong>mayankray@gmail.com</strong>.</p></form><div className="contact-links"><a href="mailto:mayankray@gmail.com"><span><Mail size={18} /> mayankray@gmail.com</span><ArrowUpRight size={18} /></a><a href="https://github.com/MayankRay16" target="_blank" rel="noreferrer"><span><Github size={18} /> GitHub profile</span><ArrowUpRight size={18} /></a><a href="https://linkedin.com/in/mayank-ray-1a6626333" target="_blank" rel="noreferrer"><span><Linkedin size={18} /> LinkedIn profile</span><ArrowUpRight size={18} /></a></div></div><div className="contact-meta"><span><MapPin size={15} /> Bangalore, India</span><span><Send size={15} /> Open to building</span></div></div><footer className="site-footer page-wrap"><span>© 2026 MAYANK RAY</span><a href="/" target="_blank" rel="noreferrer">BACK / HOME <ArrowUpRight size={14} /></a></footer></main>;
}
