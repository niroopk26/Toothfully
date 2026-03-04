import { Heart, Instagram, Facebook, Twitter, MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Toothfully Yours Dental Care",
    "alternateName": "ಟೂತ್ಫುಲೀ ಯುವರ್ಸ್ ದಂತ ಚಿಕಿತ್ಸಾಲಯ",
    "image": "https://picsum.photos/seed/dentist-clinic/800/1000",
    "@id": "",
    "url": "https://toothfullyyours.in",
    "telephone": "+91 99017 67470",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "173/A1, 9th Cross, 10th Main Road, Maruthi Nagar, Malleshpalya",
      "addressLocality": "Bengaluru",
      "postalCode": "560075",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9789,
      "longitude": 77.6747
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.facebook.com/toothfullyyours",
      "https://www.instagram.com/toothfullyyours"
    ]
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <script type="application/ld+json">
        {JSON.stringify(clinicSchema)}
      </script>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold text-white leading-tight">
                Toothfully Yours
              </span>
              <span className="text-[12px] font-medium text-teal-400 uppercase tracking-widest">
                Dental Care
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Providing professional and compassionate dental care in Malleshpalya, Bengaluru. Led by Dr. Marilyn, we focus on patient comfort and modern treatments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-clinic-teal hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-clinic-teal hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-clinic-teal hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-clinic-teal transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-clinic-teal transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-clinic-teal transition-colors">Our Services</a></li>
              <li><a href="#reviews" className="hover:text-clinic-teal transition-colors">Patient Reviews</a></li>
              <li><a href="#contact" className="hover:text-clinic-teal transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-clinic-teal transition-colors">Root Canal Treatment</a></li>
              <li><a href="#services" className="hover:text-clinic-teal transition-colors">Wisdom Tooth Extraction</a></li>
              <li><a href="#services" className="hover:text-clinic-teal transition-colors">Teeth Whitening</a></li>
              <li><a href="#services" className="hover:text-clinic-teal transition-colors">Orthodontic Treatment</a></li>
              <li><a href="#services" className="hover:text-clinic-teal transition-colors">Cosmetic Dentistry</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-clinic-teal shrink-0 mt-1" />
                <span>173/A1, 9th Cross, 10th Main Road, Malleshpalya, Bengaluru 560075</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-clinic-teal shrink-0" />
                <span>+91 99017 67470</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={20} className="text-clinic-teal shrink-0" />
                <span>Daily: 10:00 AM – 8:00 PM</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-clinic-teal shrink-0" />
                <span>info@toothfullyyours.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            © {currentYear} Toothfully Yours Dental Care. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-slate-500">
            <span>Made with</span>
            <Heart size={14} className="text-rose-500 fill-rose-500" />
            <span>for healthy smiles</span>
          </div>
          <div className="flex space-x-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
