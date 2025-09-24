import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Phone, Mail, CheckCircle, ArrowRight, Clock, Users, Star, ChevronDown } from 'lucide-react';
import { Disclosure } from '@headlessui/react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', businessType: '', budget: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const stats = [
    { icon: Star, value: '4.9', label: 'Client Rating', showStars: true }
  ];

  // WhatsApp link with pre-filled message
  const whatsappLink = `https://wa.me/918678830021?text=Hi%20Adswadi%20team!%20I'm%20interested%20in%20your%20digital%20marketing%20services.%20Can%20you%20help%20me%20grow%20my%20business?`;

  // FAQ Data
  const faqs = [
    {
      question: 'Why should I choose Adswadi over other agencies?',
      answer:
        'We combine senior-level strategists with hands-on execution, offering transparent pricing, weekly sprints, and measurable goals. You get a dedicated team focused on revenue impact, not vanity metrics.'
    },
    {
      question: 'What sets Adswadi apart from the competition?',
      answer:
        'Our approach is experimentation-first and data-led. We craft full-funnel roadmaps, run rapid A/B tests, and share live dashboards. Creative, media, and analytics collaborate under one roof to ship faster.'
    },
    {
      question: 'How can Adswadi guarantee accurate reporting?',
      answer:
        'We implement server-side tracking where feasible, follow a strict analytics QA checklist, and reconcile ad platform data with analytics and CRM events. Every report includes definitions and methodology.'
    },
    {
      question: 'What is the typical timeline to see results from your campaigns?',
      answer:
        'Most clients see initial improvements in 2-4 weeks, with significant results typically appearing within 1-3 months. We provide weekly progress updates and monthly performance reviews to keep you informed every step of the way.'
    },
    {
      question: 'Do you work with businesses of all sizes and budgets?',
      answer:
        'Yes! We work with startups, small businesses, and enterprise clients. We offer flexible pricing models and scalable solutions to fit various budgets. Our minimum engagement starts at ₹50,000/month, and we customize packages based on your specific needs and goals.'
    },
    {
      question: 'What makes Adswadi different from other digital marketing agencies in India?',
      answer:
        'Unlike traditional agencies, we focus on performance marketing with guaranteed ROI. Our team includes certified Google Ads and Meta specialists, we provide 24/7 campaign monitoring, and we\'re the only agency offering weekly sprint-based delivery with transparent reporting. Plus, we\'re based in India, so we understand the local market dynamics better than international agencies.'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.03, 0.12, 0.03]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-88 h-88 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.04, 0.14, 0.04]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"
        />
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            x: [0, 4, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/3 w-2 h-2 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-50"
        />
        <motion.div
          animate={{
            y: [0, 10, 0],
            x: [0, -2, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full opacity-70"
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200/50"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            Get Started Today
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              Let's Build Your Success Story
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to scale your business with performance-driven marketing? Get in touch for a free strategy consultation and discover how we can transform your digital presence.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
                      {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center bg-white p-8 rounded-2xl shadow-lg border border-slate-100 max-w-sm"
              >
              <div className="flex items-center justify-center mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              {stat.showStars ? (
                <div className="mb-2">
                  <div className="text-2xl font-bold text-slate-900 mb-2">{stat.value}/5</div>
                  <div className="flex justify-center items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(parseFloat(stat.value)) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-2xl font-bold text-slate-900 mb-2">{stat.value}</div>
              )}
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Your Free Strategy Call</h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h4>
                <p className="text-slate-600">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-slate-700 mb-2">
                      Business Type *
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    >
                      <option value="">Select your business type</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="saas">SaaS</option>
                      <option value="service">Service Business</option>
                      <option value="retail">Retail</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                      Monthly Budget *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    >
                      <option value="">Select your budget range</option>
                      <option value="50k-1l">₹50K - ₹1L</option>
                      <option value="1l-3l">₹1L - ₹3L</option>
                      <option value="3l-5l">₹3L - ₹5L</option>
                      <option value="5l+">₹5L+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    placeholder="Describe your goals and challenges..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Book Free Strategy Call
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Prefer to talk directly? We're here to help. Reach out through any of these channels 
                and we'll get back to you within 24 hours with a personalized strategy.
              </p>
            </div>

            <div className="space-y-6">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-all duration-300 group border border-green-200"
              >
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900">WhatsApp</h4>
                  <p className="text-slate-600">+91 8678830021</p>
                </div>
                <ArrowRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
              </motion.a>



              <motion.a
                href="tel:+918678830021"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:bg-slate-100 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900">Phone</h4>
                  <p className="text-slate-600">+91 8678830021</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:adswadiofficial@gmail.com?subject=Inquiry from Adswadi Website&body=Hi Adswadi team! I'm interested in your digital marketing services. Can you help me grow my business?"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-200 hover:bg-blue-100 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-slate-600">adswadiofficial@gmail.com</p>
                </div>
                <ArrowRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>


          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Need Help?
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Answers to common questions about how we work and report results.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Disclosure>
                  {({ open }) => (
                    <div className="rounded-2xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm overflow-hidden">
                      <Disclosure.Button className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors">
                        <span className="font-semibold text-slate-900">{item.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-500 transition-transform ${open ? 'rotate-180' : ''}`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-6 pb-5 pt-0 text-slate-700 leading-relaxed">
                        {item.answer}
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;