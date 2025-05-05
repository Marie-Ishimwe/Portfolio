import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ExperienceSection } from "@/sections/Experience";
import { ContactSection } from "@/sections/Contact";
import { FaqsSection } from "@/sections/Faqs";
import {Footer }from "@/sections/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection id="home"/>
      <ProjectsSection id="projects"/>
      <TapeSection />
      <AboutSection id="about"/>
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection/>
      <FaqsSection id="faqs"/>
      <Footer />
    </div>
  );
}
