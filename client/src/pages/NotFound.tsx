import { ArrowLeft, Home } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return <main className="site-shell" style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}><div style={{ textAlign: "center", padding: "2rem" }}><div className="section-index">404 / DETOUR</div><h1 style={{ marginTop: "1rem" }}>Wrong<br /><em>turn.</em></h1><p style={{ color: "#b2a6a8", marginTop: "1.5rem" }}>This page is not on the route yet.</p><div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "2rem" }}><Link href="/" className="primary-button"><Home size={16} /> Back home</Link><Link href="/about" className="text-button"><ArrowLeft size={16} /> About me</Link></div></div></main>;
}
