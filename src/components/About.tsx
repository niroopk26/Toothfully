import { motion } from "motion/react";
import { CheckCircle2, Award, Users, Heart } from "lucide-react";

export default function About() {
  const features = [
    { icon: <Award className="text-clinic-teal" size={24} />, title: "Expert Care", text: "Led by Dr. Marilyn, providing high-quality dental treatments." },
    { icon: <Users className="text-clinic-teal" size={24} />, title: "Patient First", text: "Focus on patient comfort, clear communication, and friendly staff." },
    { icon: <Heart className="text-clinic-teal" size={24} />, title: "Gentle Procedures", text: "Minimally invasive and gentle dental procedures for all ages." },
    { icon: <CheckCircle2 className="text-clinic-teal" size={24} />, title: "Modern Equipment", text: "Advanced dental technology for precise and efficient care." },
  ];

  return (
    <section id="about" className="bg-slate-50 overflow-hidden">
      <div className="section-padding grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img 
              src="https://infinitesmiles.in/assets/images/about/dental-clinic-kolhapur.jpg" 
              alt="Dr. Marilyn" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-clinic-teal text-white p-10 rounded-3xl shadow-2xl hidden lg:block">
            <div className="text-4xl font-bold mb-2">10+</div>
            <div className="text-sm font-medium opacity-80 uppercase tracking-widest">Years of Experience</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-clinic-teal font-bold uppercase tracking-widest text-sm mb-4 block">About Our Clinic</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
            Compassionate Care for <br />
            <span className="text-clinic-teal">Every Patient</span>
          </h2>
          
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Toothfully Yours Dental Care is a trusted dental clinic in Malleshpalya, Bengaluru dedicated to providing high-quality dental care in a comfortable and friendly environment. Led by Dr. Marilyn, the clinic focuses on patient comfort, clear communication, and modern dental treatments.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <div className="bg-white w-12 h-12 rounded-xl shadow-sm flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-2xl border-l-4 border-clinic-teal shadow-sm">
            <p className="italic text-slate-700">
              "Our mission is to provide gentle, high-quality dental care that makes our patients feel confident and comfortable with their smiles."
            </p>
            <div className="mt-4 font-bold text-slate-900">— Dr. Marilyn, Dentist</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
