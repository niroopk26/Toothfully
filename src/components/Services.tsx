import { motion } from "motion/react";
import { Service } from "../types";
import { 
  Stethoscope, 
  Sparkles, 
  Trash2, 
  ShieldCheck, 
  Smile, 
  Activity, 
  Layers, 
  Scissors, 
  Zap 
} from "lucide-react";

export default function Services() {
  const services: Service[] = [
    {
      title: "Root Canal Treatment (RCT)",
      description: "A procedure to save a severely damaged or infected tooth instead of removing it.",
      benefits: ["Pain relief", "Saves natural tooth", "Prevents infection spread"],
      whoNeedsIt: "People with deep decay, cracked teeth, or severe toothaches.",
      icon: "Activity",
    },
    {
      title: "Wisdom Tooth Extraction",
      description: "Surgical removal of one or more wisdom teeth that are causing pain or crowding.",
      benefits: ["Relieves jaw pain", "Prevents crowding", "Avoids gum infection"],
      whoNeedsIt: "Patients with impacted or painful wisdom teeth.",
      icon: "Trash2",
    },
    {
      title: "Dental Fillings",
      description: "Restoring a tooth damaged by decay back to its normal function and shape.",
      benefits: ["Stops decay", "Restores tooth strength", "Natural appearance"],
      whoNeedsIt: "Anyone with cavities or minor tooth damage.",
      icon: "ShieldCheck",
    },
    {
      title: "Dental Caps & Crowns",
      description: "Custom-fitted tooth-shaped caps placed over a tooth to restore its shape and size.",
      benefits: ["Protects weak teeth", "Restores function", "Durable solution"],
      whoNeedsIt: "Patients with large fillings, broken teeth, or after RCT.",
      icon: "Layers",
    },
    {
      title: "Teeth Cleaning & Scaling",
      description: "Professional removal of plaque and tartar to maintain healthy gums and teeth.",
      benefits: ["Prevents gum disease", "Freshens breath", "Brightens smile"],
      whoNeedsIt: "Recommended for everyone every 6 months.",
      icon: "Stethoscope",
    },
    {
      title: "Dentures",
      description: "Removable replacements for missing teeth and surrounding tissues.",
      benefits: ["Restores chewing ability", "Improves speech", "Supports facial muscles"],
      whoNeedsIt: "Patients missing multiple or all teeth.",
      icon: "Smile",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Treatments focused on improving the appearance of your teeth, gums, and bite.",
      benefits: ["Enhanced aesthetics", "Boosts confidence", "Customized smile"],
      whoNeedsIt: "Anyone looking to improve their smile's appearance.",
      icon: "Sparkles",
    },
    {
      title: "Orthodontic Treatment",
      description: "Correcting teeth and jaws that are positioned improperly using braces or aligners.",
      benefits: ["Straightens teeth", "Improves bite", "Better oral health"],
      whoNeedsIt: "Patients with crooked teeth or bite issues.",
      icon: "Scissors",
    },
    {
      title: "Teeth Whitening",
      description: "Professional whitening procedures to remove stains and brighten your teeth.",
      benefits: ["Immediate results", "Removes deep stains", "Safe procedure"],
      whoNeedsIt: "Anyone with stained or yellowed teeth.",
      icon: "Zap",
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Activity": return <Activity size={32} />;
      case "Trash2": return <Trash2 size={32} />;
      case "ShieldCheck": return <ShieldCheck size={32} />;
      case "Layers": return <Layers size={32} />;
      case "Stethoscope": return <Stethoscope size={32} />;
      case "Smile": return <Smile size={32} />;
      case "Sparkles": return <Sparkles size={32} />;
      case "Scissors": return <Scissors size={32} />;
      case "Zap": return <Zap size={32} />;
      default: return <Stethoscope size={32} />;
    }
  };

  return (
    <section id="services" className="bg-white">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-clinic-teal font-bold uppercase tracking-widest text-sm mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Comprehensive Dental Care <br />
            <span className="text-clinic-teal">for Your Family</span>
          </h2>
          <p className="text-lg text-slate-600">
            We offer a wide range of dental treatments using modern technology and gentle techniques to ensure the best results for our patients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-clinic-teal/30 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center text-clinic-teal mb-6 group-hover:bg-clinic-teal group-hover:text-white transition-colors duration-300">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-clinic-teal uppercase tracking-wider mb-2">Benefits</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-clinic-teal" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-clinic-teal uppercase tracking-wider mb-2">Who Needs It</h4>
                  <p className="text-sm text-slate-600 italic">{service.whoNeedsIt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
