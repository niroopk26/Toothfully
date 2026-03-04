import { useState, FormEvent } from "react";
import { X, Calendar, Clock, User, Phone, Mail, MessageSquare, Stethoscope, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AppointmentData } from "../types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState<AppointmentData>({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    treatment: "General Consultation",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const treatments = [
    "General Consultation",
    "Root Canal Treatment (RCT)",
    "Wisdom Tooth Extraction",
    "Dental Fillings",
    "Dental Caps & Crowns",
    "Teeth Cleaning & Scaling",
    "Dentures",
    "Cosmetic Dentistry",
    "Orthodontic Treatment",
    "Teeth Whitening",
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/book-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
          setFormData({
            name: "",
            phone: "",
            email: "",
            date: "",
            time: "",
            treatment: "General Consultation",
            message: "",
          });
        }, 3000);
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-2xl rounded-[32px] shadow-2xl overflow-hidden"
          >
            {isSuccess ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={48} />
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Appointment Requested!</h2>
                <p className="text-slate-600 mb-8">
                  Thank you, {formData.name}. We have received your request and will contact you shortly to confirm your appointment.
                </p>
                <button onClick={onClose} className="btn-primary w-full">Close</button>
              </div>
            ) : (
              <>
                <div className="bg-clinic-teal p-8 text-white flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-display font-bold">Book an Appointment</h2>
                    <p className="text-teal-50 opacity-90 text-sm">Fill in the details below and we'll get back to you.</p>
                  </div>
                  <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <X size={24} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center space-x-2">
                      <User size={16} className="text-clinic-teal" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-clinic-teal focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center space-x-2">
                      <Phone size={16} className="text-clinic-teal" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-clinic-teal focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center space-x-2">
                      <Mail size={16} className="text-clinic-teal" />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-clinic-teal focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center space-x-2">
                      <Stethoscope size={16} className="text-clinic-teal" />
                      <span>Treatment Type</span>
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-clinic-teal focus:ring-2 focus:ring-teal-100 outline-none transition-all bg-white"
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    >
                      {treatments.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center space-x-2">
                      <Calendar size={16} className="text-clinic-teal" />
                      <span>Preferred Date *</span>
                    </label>
                    <input
                      required
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-clinic-teal focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center space-x-2">
                      <Clock size={16} className="text-clinic-teal" />
                      <span>Preferred Time *</span>
                    </label>
                    <input
                      required
                      type="time"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-clinic-teal focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center space-x-2">
                      <MessageSquare size={16} className="text-clinic-teal" />
                      <span>Message / Symptoms</span>
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-clinic-teal focus:ring-2 focus:ring-teal-100 outline-none transition-all resize-none"
                      placeholder="Tell us about your dental concern..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="md:col-span-2 mt-4">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="btn-primary w-full py-4 text-lg shadow-xl shadow-teal-100"
                    >
                      {isSubmitting ? "Processing..." : "Confirm Booking Request"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
