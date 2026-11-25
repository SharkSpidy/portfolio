import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceSection from "./components/ExperienceSection";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggle } = useTheme();
  return (
    // reducedMotion="user" turns off transform animations for people who ask for less motion
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-bg">
        <Navbar theme={theme} onToggleTheme={toggle} />
        <main>
          <Hero />
          <About />
          <ExperienceSection />
          <Portfolio />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
