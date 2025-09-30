import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { SparklesPreview } from "./sections/footer_sparcles";
import { FloatingDockDemo } from "./sections/floating_dock_data";
import { SmoothCursor } from "./components/smooth_cursur";
import { GasserProfileImage } from "./sections/pixeled_profile_image";
const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Hero />
      <SmoothCursor />
      <About />

      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />

      <FloatingDockDemo />
      <GasserProfileImage />
      <SparklesPreview />
      <Footer />
    </div>
  );
};

export default App;
