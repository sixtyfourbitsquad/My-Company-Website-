import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    company: 'TechStart Solutions',
    text: 'ADSWADi transformed our marketing completely. Our ROAS increased by 300% in just 3 months!'
  },
  {
    name: 'Rajesh Kumar',
    company: 'E-commerce Plus',
    text: 'The automation systems they built for us are incredible. We now generate leads 24/7 without any manual work.'
  },
  {
    name: 'Anjali Patel',
    company: 'Fashion Forward',
    text: 'Their creative team knows exactly how to make ads that convert. Our cost per acquisition dropped by 60%.'
  },
  {
    name: 'Amit Singh',
    company: 'Digital Dynamics',
    text: 'Working with ADSWADi has been a game-changer. Our conversion rates improved by 200% in the first quarter!'
  },
  {
    name: 'Meera Reddy',
    company: 'Startup Ventures',
    text: 'Their data-driven approach helped us scale from 0 to 10,000 customers in just 6 months. Incredible results!'
  },
  {
    name: 'Vikram Malhotra',
    company: 'Growth Labs',
    text: 'The ROI we achieved with ADSWADi exceeded all expectations. Highly recommend their services!'
  }
];



const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.02, 0.08, 0.02]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.03, 0.1, 0.03]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-gradient-to-r from-purple-100/40 to-blue-100/40 rounded-full blur-3xl"
        />
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 2, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-40"
        />
        <motion.div
          animate={{
            y: [0, 6, 0],
            rotate: [0, -1, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full opacity-60"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              Loved by Clients, Trusted by Brands
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with ADSWADi.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Testimonials;
