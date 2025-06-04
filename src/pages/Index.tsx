
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import KeyStrengths from "@/components/KeyStrengths";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <TechStack />
      <KeyStrengths />
      <Projects />
      <Publications />
      <Certifications />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
