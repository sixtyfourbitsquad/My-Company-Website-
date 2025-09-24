import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, TrendingUp, Users, DollarSign, Target } from 'lucide-react';
import AvifImage from './AvifImage.tsx';

const CaseStudies: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const caseStudies = [
    {
      title: 'E-commerce Fashion Brand',
      industry: 'Fashion & Retail',
      description: 'Increased online sales by 400% through targeted Instagram and Facebook campaigns.',
      before: { sales: '₹2L/month', roas: '2.1x', cpa: '₹450' },
      after: { sales: '₹8L/month', roas: '4.8x', cpa: '₹180' },
      image: '/E-commerce-Fashion-Brand.avif',
      fallbackImage: '/E-commerce-Fashion-Brand.jpg',
      color: 'from-pink-500 to-purple-600'
    },
    {
      title: 'SaaS Product Launch',
      industry: 'Technology',
      description: 'Generated 500+ qualified leads in 3 months with Google Ads and retargeting campaigns.',
      before: { leads: '50/month', cpl: '₹800', conversion: '2.1%' },
      after: { leads: '180/month', cpl: '₹320', conversion: '6.8%' },
      image: '/SaaS-Product-Launch.avif',
      fallbackImage: '/SaaS-Product-Launch.jpg',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Real Estate Developer',
      industry: 'Real Estate',
      description: 'Sold 25 premium properties in 6 months through targeted display and video campaigns.',
      before: { sales: '5/month', cpl: '₹2,500', roi: '180%' },
      after: { sales: '12/month', cpl: '₹1,200', roi: '420%' },
      image: '/Real-Estate-Developer.avif',
      fallbackImage: '/Real-Estate-Developer.jpg',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Healthcare Clinic',
      industry: 'Healthcare',
      description: 'Increased patient appointments by 250% with HIPAA-compliant Google Ads campaigns.',
      before: { patients: '30/week', cpa: '₹600', online: '20%' },
      after: { patients: '75/week', cpa: '₹240', online: '65%' },
      image: '/Healthcare-Clinic.avif',
      fallbackImage: '/Healthcare-Clinic.jpg',
      color: 'from-emerald-500 to-green-600'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCase = caseStudies[currentIndex];

  return (
    <section id="case-studies" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.25, 0.08],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.12, 0.22, 0.12],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        {/* Geometric Patterns */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-40 h-40 border border-purple-400/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
            delay: 8
          }}
          className="absolute bottom-1/4 left-1/4 w-32 h-32 border border-pink-400/20 rounded-lg"
        />
        {/* Floating Particles */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 12, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/3 w-3 h-3 bg-purple-400 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 18, 0],
            x: [0, -10, 0],
            opacity: [0.5, 0.9, 0.5]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-400 rounded-full"
        />

      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-purple-400/30"
          >
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            Success Stories
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Real Results
            </span>
            <br />
            <span className="text-white">From Real Clients</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            See how we've transformed businesses across industries with data-driven campaigns and proven strategies.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-400/30 hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-400/30 hover:bg-white/20 transition-all duration-300"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </motion.button>

          {/* Case Study Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/20"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                      {currentCase.industry}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{currentCase.title}</h3>
                    <p className="text-purple-200 leading-relaxed mb-8">{currentCase.description}</p>
                  </motion.div>

                  {/* Stats Comparison */}
                  <div className="grid grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-center p-6 rounded-2xl bg-red-500/10 border border-red-400/20"
                    >
                      <h4 className="text-red-400 font-semibold mb-4">Before</h4>
                      {Object.entries(currentCase.before).map(([key, value]) => (
                        <div key={key} className="mb-3">
                          <div className="text-2xl font-bold text-white">{value}</div>
                          <div className="text-xs text-red-300 capitalize">{key}</div>
                        </div>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-center p-6 rounded-2xl bg-green-500/10 border border-green-400/20"
                    >
                      <h4 className="text-green-400 font-semibold mb-4">After</h4>
                      {Object.entries(currentCase.after).map(([key, value]) => (
                        <div key={key} className="mb-3">
                          <div className="text-2xl font-bold text-white">{value}</div>
                          <div className="text-xs text-green-300 capitalize">{key}</div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="relative"
                >
                  <div className={`w-full h-80 rounded-2xl bg-gradient-to-br ${currentCase.color} p-1`}>
                    <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center">
                      <AvifImage
                        avifSrc={currentCase.image}
                        fallbackSrc={currentCase.fallbackImage}
                        alt={currentCase.title}
                        className="w-full h-full rounded-2xl object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${currentCase.color} flex items-center justify-center hidden`}>
                        <span className="text-white font-bold text-2xl">{currentCase.title[0]}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold"
                  >
                    Success Story
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {caseStudies.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-purple-400 scale-125' 
                    : 'bg-purple-400/30 hover:bg-purple-400/50'
                }`}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default CaseStudies; 