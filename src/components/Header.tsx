import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      
      // Fade out effect when scrolling down, fade in when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - fade out
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - fade in
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Team', href: '#team' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '/blog', isRoute: true },
    { name: 'Contact', href: '#contact' }
  ];

  // Function to get the correct navigation link
  const getNavigationLink = (item: any) => {
    if (item.isRoute) {
      return item.href;
    }
    
    // If we're not on the homepage, redirect to homepage with anchor
    if (location.pathname !== '/') {
      return `/${item.href}`;
    }
    
    // If we're on homepage, use anchor link
    return item.href;
  };

  // WhatsApp link with pre-filled message
  const whatsappLink = `https://wa.me/918678830021?text=Hi%20Adswadi%20team!%20I'm%20interested%20in%20your%20digital%20marketing%20services.%20Can%20you%20help%20me%20grow%20my%20business?`;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ 
        duration: 0.4,
        ease: "easeInOut"
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50' 
          : 'bg-white/90 backdrop-blur-sm shadow-sm border-b border-slate-200/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
            animate={{
              y: [0, -2, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.img 
              src="/logos/adswadi-logo.svg"
              alt="Adswadi Logo"
              className="h-8 w-auto"
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            />
            
            {/* Professional Animated ADSWADI Logo */}
            <motion.div 
              className="animated-logo"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="logo-text">ADSWADI</span>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.isRoute ? (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="relative group"
                >
                  <Link
                    to={getNavigationLink(item)}
                    className="text-slate-700 hover:text-purple-600 font-medium transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={item.name}
                  href={getNavigationLink(item)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="text-slate-700 hover:text-purple-600 font-medium transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X size={24} className="text-slate-700" /> : <Menu size={24} className="text-slate-700" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                item.isRoute ? (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={getNavigationLink(item)}
                      onClick={() => setIsOpen(false)}
                      className="block text-slate-700 hover:text-purple-600 font-medium py-2 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={item.name}
                    href={getNavigationLink(item)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="block text-slate-700 hover:text-purple-600 font-medium py-2 transition-colors"
                  >
                    {item.name}
                  </motion.a>
                )
              ))}
              
              {/* Mobile CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;