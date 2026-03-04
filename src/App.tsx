import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white selection:bg-teal-100 selection:text-clinic-teal">
      <Navbar />
      
      <main>
        <Hero onBookClick={() => setIsBookingOpen(true)} />
        <About />
        <Services />
        <Reviews />
        <Gallery />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
      
      <FloatingActions onBookClick={() => setIsBookingOpen(true)} />
    </div>
  );
}
