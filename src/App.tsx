import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
