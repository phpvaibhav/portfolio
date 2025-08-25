'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile from "../data/profile";

export default function Hero() {
  const words = profile.taglineWords;
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");

  // simple typewriter effect
  useEffect(() => {
    const word = words[index % words.length];
    let i = 0;
    setDisplay("");
    const typing = setInterval(() => {
      setDisplay(word.slice(0, i + 1));
      i++;
      if (i === word.length) {
        clearInterval(typing);
        setTimeout(() => setIndex((prev) => (prev + 1) % words.length), 1500);
      }
    }, 60);
    return () => clearInterval(typing);
  }, [index]);

  return (
    <section className="section bg-hero-gradient">
      <div className="container grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            {profile.name}
          </motion.h1>
          <p className="mt-2 text-lg text-neutral-700">{profile.title}</p>
          <p className="text-sm text-neutral-600">{profile.location}</p>
          <p className="mt-6 text-xl caret h-8">{display}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="button border-neutral-900">Hire Me</a>
            <a href="/Vaibhav_Sharma_Resume.pdf" className="button border-neutral-300">Download Resume</a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card p-6"
        >
          <h3 className="text-lg font-semibold mb-3">Quick Highlights</h3>
          <ul className="grid grid-cols-2 gap-3 text-sm">
            <li className="badge">9+ Years Experience</li>
            <li className="badge">MERN & MEAN</li>
            <li className="badge">Node.js • NestJS</li>
            <li className="badge">React • Next.js</li>
            <li className="badge">MongoDB • MySQL</li>
            <li className="badge">AWS • Azure</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}