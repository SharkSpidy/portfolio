import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-base-950">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
