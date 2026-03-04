import { motion } from "motion/react";
import { Phone, Calendar, Star, CheckCircle } from "lucide-react";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  const highlights = [
    { icon: <CheckCircle className="text-emerald-500" size={20} />, text: "250+ Happy Patients" },
    { icon: <Star className="text-amber-400 fill-amber-400" size={20} />, text: "5 Star Google Reviews" },
    { icon: <CheckCircle className="text-emerald-500" size={20} />, text: "Gentle & Modern Dentistry" },
    { icon: <CheckCircle className="text-emerald-500" size={20} />, text: "Hygienic Environment" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-clinic-light-blue -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-teal-100/50 rounded-full blur-3xl -z-10" />
      
      <div className="section-padding grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-teal-50 text-clinic-teal px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span>Open Daily until 8 PM</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
            Healthy Smiles <br />
            <span className="text-clinic-teal">Start Here</span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Professional and compassionate dental care in Malleshpalya, Bengaluru. 
            Led by Dr. Marilyn, we provide gentle treatments in a hygienic environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button onClick={onBookClick} className="btn-primary flex items-center justify-center space-x-2">
              <Calendar size={20} />
              <span>Book Appointment</span>
            </button>
            <a href="tel:+919901767470" className="btn-secondary flex items-center justify-center space-x-2">
              <Phone size={20} />
              <span>Call Now</span>
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 text-slate-700 font-medium">
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://picsum.photos/seed/dentist-clinic/800/1000" 
              alt="Modern Dental Clinic" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
            <div className="flex items-center space-x-4">
              <div className="bg-teal-100 p-3 rounded-xl">
                <Star className="text-clinic-teal fill-clinic-teal" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">5.0</div>
                <div className="text-sm text-slate-500">Google Rating</div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-400/20 rounded-full blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
