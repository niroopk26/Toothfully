import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { FAQItem } from "../types";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Is root canal treatment painful?",
      answer: "With modern anesthesia and advanced techniques, root canal treatment is no more painful than getting a regular filling. Most patients feel immediate relief from the toothache they were experiencing before the procedure.",
    },
    {
      question: "How often should I visit a dentist?",
      answer: "We recommend a professional dental check-up and cleaning every 6 months. Regular visits help prevent major dental issues and keep your gums healthy.",
    },
    {
      question: "What causes wisdom tooth pain?",
      answer: "Wisdom tooth pain is often caused by 'impaction'—when the tooth doesn't have enough room to emerge or grow normally. This can lead to infection, crowding, and damage to adjacent teeth.",
    },
    {
      question: "How long does teeth whitening last?",
      answer: "Professional teeth whitening typically lasts from 6 months to 2 years, depending on your diet and lifestyle habits (like smoking or drinking coffee/tea). Regular touch-ups can help maintain the brightness.",
    },
    {
      question: "How to maintain dental hygiene at home?",
      answer: "Brush twice daily with fluoride toothpaste, floss once a day, use an alcohol-free mouthwash, and limit sugary snacks. Don't forget to replace your toothbrush every 3 months!",
    },
  ];

  return (
    <section id="faq" className="bg-slate-50">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-clinic-teal font-bold uppercase tracking-widest text-sm mb-4 block">Common Questions</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Dental Health <br />
            <span className="text-clinic-teal">FAQs</span>
          </h2>
          <p className="text-lg text-slate-600">
            Find answers to common questions about dental treatments and oral hygiene.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border transition-all duration-300 ${
                activeIndex === index ? "border-clinic-teal shadow-md" : "border-slate-100"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`text-lg font-bold transition-colors ${
                  activeIndex === index ? "text-clinic-teal" : "text-slate-900"
                }`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${
                  activeIndex === index ? "bg-clinic-teal text-white" : "bg-slate-100 text-slate-500"
                }`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
