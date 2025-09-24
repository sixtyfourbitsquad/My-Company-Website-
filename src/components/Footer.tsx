import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, MapPin, ArrowUp, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    company: [
      'About Us',
      'Our Team',
      'Case Studies',
      'Testimonials',
      'Careers',
      'Contact'
    ],
    legal: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'GDPR Compliance',
      'Data Protection'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/adswadi', label: 'Facebook' },
    { icon: Youtube, href: 'https://www.youtube.com/@adswadi', label: 'YouTube' },
    { icon: Instagram, href: 'https://www.instagram.com/adswadi', label: 'Instagram' }
  ];

  return (
    <footer className="text-white">
      {/* Top Logo & Social on gradient background */}
      <div className="bg-gradient-to-br from-purple-700 via-fuchsia-600 to-pink-600">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex flex-col items-center text-center">
            {/* Animated Typography */}
            <motion.div className="flex mb-8">
              {'Adswadi'.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.5 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      duration: 0.4,
                      delay: index * 0.08,
                      ease: "easeOut"
                    }
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.3,
                    color: "#ffffff",
                    textShadow: "0 6px 12px rgba(255, 255, 255, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                  className="text-4xl font-black text-white cursor-pointer inline-block relative"
                  style={{ 
                    textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    transition: "all 0.3s ease"
                  }}
                >
                  {letter}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent opacity-0"
                    animate={{
                      opacity: [0, 0.9, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.15
                    }}
                  >
                    {letter}
                  </motion.div>
                </motion.span>
              ))}
            </motion.div>
            
            {/* Social Media Buttons */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.15,
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-all duration-300 border border-white/20"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Middle info panels (optional quick links) */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 shadow-sm p-6">
              <h4 className="font-semibold text-slate-900 mb-2">Contact</h4>
              <div className="space-y-2 text-slate-600">
                <div className="flex items-center gap-3"><Mail className="w-4 h-4" /> adswadiofficial@gmail.com</div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+918678830021" className="hover:text-blue-600 transition-colors">+91 8678830021</a>
                </div>

                <div className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Ranchi, India</div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 shadow-sm p-6">
              <h4 className="font-semibold text-slate-900 mb-2">Company</h4>
              <ul className="text-slate-600 space-y-1">
                <li><a href="/about" className="hover:text-blue-600 transition-colors">About Us</a></li>
                <li><button onClick={() => scrollToSection('team')} className="hover:text-blue-600 transition-colors">Our Team</button></li>
                <li><button onClick={() => scrollToSection('case-studies')} className="hover:text-blue-600 transition-colors">Case Studies</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-blue-600 transition-colors">Testimonials</button></li>
                <li><Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm text-center md:text-left">
            © 2025 Adswadi Private Limited |{' '}
            <button 
              onClick={() => window.location.href = '/privacy-policy'}
              className="hover:text-purple-600 transition-colors underline"
            >
              Privacy Policy
            </button>
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;