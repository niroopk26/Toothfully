import { motion } from "motion/react";

export default function Gallery() {
  const images = [
    { src: "https://hjtdesign.com/wp-content/uploads/2020/12/bigstock-Russia-Novosibirsk-June-279323659.jpg", category: "Clinic Photos", title: "Reception Area" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkzE27ztDEEbLJ0_elavpdYOFKUfWUcmqh7w&s", category: "Equipment", title: "Modern Dental Chair" },
    { src: "https://cdn.sanity.io/images/0vv8moc6/dpr/6b68c310580075379bfe42acfda83030ab3b1ed3-2000x1333.jpg?fit=crop&auto=format", category: "Smiling Patients", title: "Happy Smiles" },
    { src: "https://media.istockphoto.com/id/1419156177/photo/modern-dental-office.jpg?s=612x612&w=0&k=20&c=WaoKv9FOqlpRanQHO6ynP762QPyqAjH8PADbnmRP0KE=", category: "Clinic Photos", title: "Treatment Room" },
    { src: "https://s16736.pcdn.co/wp-content/uploads/sites/205/2016/07/Dental-Xray.jpg.optimal.jpg", category: "Equipment", title: "Advanced X-Ray" },
    { src: "https://dental-clinic-delhi.com/wp-content/uploads/2022/10/smile-makeover.jpg", category: "Before & After", title: "Smile Transformation" },
  ];

  return (
    <section id="gallery" className="bg-white">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-clinic-teal font-bold uppercase tracking-widest text-sm mb-4 block">Our Gallery</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            A Glimpse into Our <br />
            <span className="text-clinic-teal">Modern Clinic</span>
          </h2>
          <p className="text-lg text-slate-600">
            Take a look at our hygienic environment, advanced equipment, and the beautiful smiles we've helped create.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden shadow-md aspect-[4/3]"
            >
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-2">{image.category}</span>
                <h3 className="text-white text-xl font-bold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
