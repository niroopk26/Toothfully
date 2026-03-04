import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-teal-100 selection:text-clinic-teal">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Gallery />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      
      <FloatingActions />
    </div>
  );
}
