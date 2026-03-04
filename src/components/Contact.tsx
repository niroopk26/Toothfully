import { MapPin, Phone, Clock, Mail, Send, Navigation } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-clinic-teal font-bold uppercase tracking-widest text-sm mb-4 block">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Get in Touch with <br />
              <span className="text-clinic-teal">Our Team</span>
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-6">
                <div className="bg-teal-50 p-4 rounded-2xl text-clinic-teal">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Our Location</h3>
                  <p className="text-slate-600 leading-relaxed">
                    173/A1, 9th Cross, 10th Main Road,<br />
                    Maruthi Nagar, Malleshpalya,<br />
                    Bengaluru, Karnataka 560075, India
                  </p>
                  <a 
                    href="https://www.google.com/maps/dir//Toothfully+Yours+Dental+Care/@12.9789,77.6747,17z" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-clinic-teal font-bold mt-4 hover:underline"
                  >
                    <Navigation size={16} />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="bg-teal-50 p-4 rounded-2xl text-clinic-teal">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Phone Number</h3>
                  <p className="text-slate-600 leading-relaxed">
                    +91 99017 67470
                  </p>
                  <p className="text-sm text-slate-400 mt-1 italic">Available for calls and WhatsApp</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="bg-teal-50 p-4 rounded-2xl text-clinic-teal">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Opening Hours</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Open Daily: 10:00 AM – 8:00 PM
                  </p>
                  <p className="text-sm text-slate-400 mt-1 italic">Appointments recommended</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001633513364!2d77.6747!3d12.9789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae115000000001%3A0x3bae115000000001!2sToothfully%20Yours%20Dental%20Care!5e0!3m2!1sen!2sin!4v1709550000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 p-10 rounded-[40px] border border-slate-100"
          >
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-8">Quick Contact Form</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:border-clinic-teal focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:border-clinic-teal focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:border-clinic-teal focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:border-clinic-teal focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:border-clinic-teal focus:ring-2 focus:ring-teal-100 outline-none transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                type="button"
                className="btn-primary w-full py-5 flex items-center justify-center space-x-3 shadow-xl shadow-teal-100"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
