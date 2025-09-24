import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Search, Palette, Globe } from 'lucide-react';

const Services: React.FC = () => {
  // WhatsApp links with service-specific messages
  const getWhatsAppLink = (service: string) => {
    const baseUrl = 'https://wa.me/918678830021?text=';
    const messages = {
      'Meta Ads': 'Hi%20Adswadi%20team!%20I%20want%20to%20get%20started%20with%20Meta%20Ads%20services.%20Can%20you%20help%20me%20set%20up%20Facebook%20and%20Instagram%20ad%20campaigns%20for%20my%20business?',
      'Google Ads': 'Hi%20Adswadi%20team!%20I%20want%20to%20get%20started%20with%20Google%20Ads%20services.%20Can%20you%20help%20me%20create%20high-converting%20search%20and%20display%20campaigns?',
      'Web Development': 'Hi%20Adswadi%20team!%20I%20want%20to%20get%20started%20with%20Web%20Development%20services.%20Can%20you%20help%20me%20build%20websites,%20funnels,%20and%20landing%20pages%20for%20my%20business?',
      'Branding': 'Hi%20Adswadi%20team!%20I%20want%20to%20get%20started%20with%20Branding%20services.%20Can%20you%20help%20me%20create%20a%20memorable%20brand%20identity%20and%20visual%20guidelines?'
    };
    return baseUrl + (messages[service as keyof typeof messages] || messages['Meta Ads']);
  };

  const services = [
    {
      image: '/partners/meta-logo.png',
      title: 'Meta Ads',
      description: 'Comprehensive Meta advertising campaigns across Facebook, Instagram, and Messenger platforms.',
      features: ['Facebook Ads', 'Instagram Ads', 'Messenger Ads', 'Audience Targeting'],
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      iconColor: 'text-blue-600'
    },
    {
      image: '/partners/google-logo.png',
      title: 'Google Ads',
      description: 'Dominate search results with strategic Google Ads campaigns that capture high-intent traffic.',
      features: ['Search Ads', 'Display Ads', 'Shopping Ads', 'Video Ads'],
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-teal-50',
      iconColor: 'text-green-600'
    },
    {
      image: '/partners/shopify-logo.png',
      title: 'Web Development',
      description: 'Complete web development solutions from simple websites to complex applications.',
      features: ['Websites', 'Funnels', 'Landing Pages', 'Custom Solutions'],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      iconColor: 'text-purple-600'
    },
    {
      image: '/partners/branding.png',
      title: 'Branding',
      description: 'Create memorable brand experiences that resonate with your target audience.',
      features: ['Logo Design', 'Brand Identity', 'Visual Guidelines', 'Brand Strategy'],
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.08, 0.03],
            rotate: [0, 90, 180]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.1, 0.05],
            rotate: [180, 90, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From digital marketing to web development, we deliver comprehensive solutions that drive your business forward.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              {/* Service Card */}
              <motion.div 
                className={`${service.bgColor} rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden`}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
              >
                {/* Icon */}
                <motion.div 
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center mb-3 sm:mb-4 shadow-md`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                >
                  <img 
                    src={service.image} 
                    alt={`${service.title} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + featureIndex * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className={`w-3 h-3 sm:w-4 sm:h-4 ${service.iconColor}`} />
                      <span className="text-slate-700 text-xs">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.a
                  href={getWhatsAppLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${service.color} text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn text-sm cursor-pointer`}
                >
                  Get Started
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;