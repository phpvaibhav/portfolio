'use client'
import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className={`sticky top-0 z-40 border-b bg-white/80 backdrop-blur ${scrolled ? 'shadow-sm' : ''}`}>
      <nav className="container flex items-center justify-between py-3">
        <a href="#" className="font-semibold">Vaibhav.</a>
        <div className="flex gap-5">
          {items.map(i => (
            <a key={i.href} href={i.href} className="nav-link">{i.label}</a>
          ))}
        </div>
      </nav>
    </div>
  );
}