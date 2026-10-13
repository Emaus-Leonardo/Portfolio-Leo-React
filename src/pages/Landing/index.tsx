import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LandingMenuBar from "../../components/landing/LandingMenuBar";
import Hero from "../../components/landing/Hero";
import About from "../../components/landing/About";
import Skills from "../../components/landing/Skills";
import Projects from "../../components/landing/Projects";
import Contact from "../../components/landing/Contact";
import KonamiEgg from "../../components/landing/KonamiEgg";
import { useActiveSection } from "../../hooks/useActiveSection";
import { sections } from "../../util/landing";

const sectionIds = sections.map((s) => s.id);

export default function Landing() {
  const active = useActiveSection(sectionIds);
  const { hash } = useLocation();

  // Support deep links such as /#projects (also used by the legacy /projects redirect).
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <div className="relative isolate min-h-screen text-neutral-900">
      <div className="wallpaper" aria-hidden="true" />
      <LandingMenuBar active={active} />
      <KonamiEgg />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
