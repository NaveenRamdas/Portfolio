"use client";

import LoadingScreen from "@/components/shared/LoadingScreen";
import Navbar from "@/components/shared/Navbar";
import ScrollProgress from "@/components/shared/ScrollProgress";
import ParticleBackground from "@/components/shared/ParticleBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import AINative from "@/components/sections/AINative";
import GitHubStats from "@/components/sections/GitHubStats";
import Impact from "@/components/sections/Impact";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <ParticleBackground />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <AINative />
        <GitHubStats />
        <Impact />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
