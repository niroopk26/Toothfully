import { motion } from "motion/react";
import { Star, Quote, User } from "lucide-react";
import { Review } from "../types";

export default function Reviews() {
  const reviews: Review[] = [
    {
      name: "Sandeep Kumar",
      rating: 5,
      text: "I strongly recommend this doctor for the people who have dental problems. Very professional and explains everything clearly.",
      date: "2 weeks ago",
    },
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Clear communication and excellent service. The clinic is very hygienic and the staff is very friendly.",
      date: "1 month ago",
    },
    {
      name: "Anand Rao",
      rating: 5,
      text: "The staff was friendly and made us feel comfortable throughout the process. Dr. Marilyn is very gentle with her procedures.",
      date: "2 months ago",
    },
    {
      name: "Meghana S",
      rating: 5,
      text: "Best dental clinic in Malleshpalya. I had a root canal treatment and it was completely painless. Highly recommended!",
      date: "3 months ago",
    },
  ];

  return (
    <section id="reviews" className="bg-clinic-light-blue overflow-hidden">
      <div className="section-padding">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-clinic-teal font-bold uppercase tracking-widest text-sm mb-4 block">Patient Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              What Our Happy <br />
              <span className="text-clinic-teal">Patients Say</span>
            </h2>
            <p className="text-lg text-slate-600">
              We take pride in providing the best dental care experience. Read what our patients have to say about their visits.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-teal-100 flex flex-col items-center">
            <div className="text-5xl font-bold text-slate-900 mb-2">5.0</div>
            <div className="flex text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">250+ Google Reviews</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-[40px] shadow-sm relative group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-8 right-10 text-teal-50 group-hover:text-teal-100 transition-colors">
                <Quote size={64} fill="currentColor" />
              </div>
              
              <div className="flex text-amber-400 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              
              <p className="text-lg text-slate-700 mb-8 leading-relaxed relative z-10">
                "{review.text}"
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-clinic-teal">
                  <User size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900">{review.name}</div>
                  <div className="text-sm text-slate-500">{review.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/maps/place/Toothfully+Yours+Dental+Care/@12.9789,77.6747,17z/data=!4m8!3m7!1s0x3bae115000000001:0x3bae115000000001!8m2!3d12.9789!4d77.6747!9m1!1b1!16s%2Fg%2F11f_x_x_x_x" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-clinic-teal font-bold hover:underline"
          >
            <span>View all Google Reviews</span>
            <Star size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
