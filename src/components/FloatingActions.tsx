import { Phone, MessageCircle, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* WhatsApp Button */}
            <motion.a
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              href="https://wa.me/919901767470?text=Hello Toothfully Yours, I'd like to inquire about dental services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={32} />
            </motion.a>

            {/* Call Button (Mobile Only) */}
            <motion.a
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              href="tel:+919901767470"
              className="md:hidden w-14 h-14 bg-clinic-teal text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
              title="Call Now"
            >
              <Phone size={28} />
            </motion.a>

            {/* Book Button */}
            <motion.a
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              href="https://www.practo.com/bangalore/clinic/toothfully-yours-dental-care-malleshpalya/doctors?utm_source=google&utm_medium=reserve_with_google&utm_campaign=establishment_feed&rwg_token=AFd1xnH-ChZ6Zfej1iNECBL61pdEA3Zq1oTF9l_MkhdqvoADhwfELs-IF84eoJGL9vY0YP4nrAft-u0tMuL30R2nAfkC2YnYAA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white text-clinic-teal rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform border-2 border-clinic-teal"
              title="Book Appointment"
            >
              <Calendar size={28} />
            </motion.a>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
