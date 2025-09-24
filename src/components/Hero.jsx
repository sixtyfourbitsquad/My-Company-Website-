import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        color: Math.random() > 0.5 ? '#8b5cf6' : '#3b82f6'
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const whatsappLink = `https://wa.me/918678830021?text=Hi%20Adswadi%20team!%20I'm%20interested%20in%20your%20digital%20marketing%20services.%20Can%20you%20help%20me%20grow%20my%20business?`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-20"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 via-blue-600/80 to-indigo-700/80"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        {/* Floating Icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/3"
        >
          <Sparkles className="w-8 h-8 text-yellow-300" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/3 left-1/3"
        >
          <Zap className="w-6 h-6 text-orange-400" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
            rotate: [0, 3, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-1/4"
        >
          <Target className="w-5 h-5 text-purple-300" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          >
            <div className="mb-2">
              Transform Your
            </div>
            <div className="mb-2">
              Business With
            </div>
            <div className="relative">
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
                Smart Ads.
              </span>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1.0 }}
                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-yellow-300 to-orange-300"
              />
            </div>
          </motion.h1>

          {/* Company Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-purple-100 mb-6 font-medium"
          >
            5+ years | 511+ Brands | 60+ Crore Ad spent
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl text-purple-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            A dedicated team of specialists, delivering remarkable work to our clients worldwide!
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center mb-16"
          >
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 10px 25px rgba(0,0,0,0.2)",
                  "0 15px 35px rgba(147, 51, 234, 0.3)",
                  "0 10px 25px rgba(0,0,0,0.2)"
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="relative z-10">Book a Strategy Call</span>
              <motion.div
                animate={{
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Partner Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center"
          >
            <p className="text-white mb-8 font-medium text-lg">
              Our Performance Marketing Services are Certified by
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                { 
                  name: 'Meta', 
                  image: '/facebook.png',
                  color: 'text-blue-600',
                  bgColor: 'bg-white',
                  subText: 'Business Partner'
                },
                { 
                  name: 'Shopify', 
                  image: '/shopify.png',
                  color: 'text-green-600',
                  bgColor: 'bg-white',
                  subText: 'partners'
                },
                { 
                  name: 'Google', 
                  image: '/google.png',
                  color: 'text-blue-600',
                  bgColor: 'bg-white',
                  subText: 'Partner'
                }
              ].map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className={`w-16 h-16 rounded-xl ${partner.bgColor} flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}>
                    <img 
                      src={partner.image} 
                      alt={`${partner.name} logo`}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-white text-base">
                      {partner.name}
                    </div>
                    <div className="text-xs text-white/80">
                      {partner.subText}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 