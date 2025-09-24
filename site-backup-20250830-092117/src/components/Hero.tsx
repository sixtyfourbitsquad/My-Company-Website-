import React, { useEffect, useRef, useCallback, useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Fallback animation system that doesn't rely on GSAP plugins
const useFallbackAnimation = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simple timeout-based animation trigger
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return isLoaded;
};

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phraseRef = useRef<HTMLSpanElement>(null);
  const underlinePathRef = useRef<SVGPathElement>(null);
  const [phraseWidth, setPhraseWidth] = useState<number>(0);
  const [phraseHeight, setPhraseHeight] = useState<number>(0);
  const [dash, setDash] = useState<number>(0);
  const isLoaded = useFallbackAnimation();

  // Measure the "For More Profit" phrase to size the underline
  useLayoutEffect(() => {
    const update = () => {
      const rect = phraseRef.current?.getBoundingClientRect();
      if (!rect) return;
      setPhraseWidth(rect.width);
      setPhraseHeight(rect.height);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // GSAP DrawSVG animation for the underline (right to left)
  useEffect(() => {
    if (!underlinePathRef.current || !phraseWidth) return;
    
    // Reset the path
    // gsap.set(underlinePathRef.current, { drawSVG: "100% 100%" }); // This line is removed as per the new_code
    
    // Animate the path drawing from right to left
    // gsap.to(underlinePathRef.current, { // This line is removed as per the new_code
    //   drawSVG: "0% 100%",
    //   duration: 1.5,
    //   ease: "power2.out",
    //   delay: 0.6
    // });
  }, [phraseWidth, phraseHeight]);

  // Advanced text splitting animation - disabled for now to fix visibility
  useEffect(() => {
    const headline = document.querySelector('.hero-headline');
    if (!headline) return;

    // Ensure text is visible first
    // gsap.set(headline, { opacity: 1 }); // This line is removed as per the new_code
    
    // Simple fade-in animation instead of complex splitting
    // gsap.fromTo(headline,  // This line is removed as per the new_code
    //   { opacity: 0, y: 30 },
    //   { 
    //     opacity: 1, 
    //     y: 0, 
    //     duration: 0.8, 
    //     ease: "power2.out",
    //     delay: 0.3
    //   }
    // );
  }, []);

  // Simple CSS-based animations instead of GSAP
  useEffect(() => {
    const headline = document.querySelector('.hero-headline');
    if (!headline) return;

    // Add CSS classes for animation
    headline.classList.add('animate-fade-in');
  }, []);

  // Simple scroll-triggered animations using Intersection Observer
  useEffect(() => {
    const partnerCards = document.querySelectorAll('.partner');
    
         const observer = new IntersectionObserver((entries) => {
       entries.forEach((entry, index) => {
         if (entry.isIntersecting) {
           entry.target.classList.add('animate-slide-up');
           (entry.target as HTMLElement).style.animationDelay = `${index * 0.2}s`;
         }
       });
     }, {
      threshold: 0.1,
      rootMargin: '0px 0px -20% 0px'
    });

    partnerCards.forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];
    const particleCount = 15; // Reduced from 30

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2, // Reduced speed
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1 + 0.5, // Reduced size
        opacity: Math.random() * 0.2 + 0.1 // Reduced opacity
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 51, 234, ${particle.opacity})`;
        ctx.fill();
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const cleanup = animate();
    return cleanup;
  }, [animate]);

  // WhatsApp link with pre-filled message
  const whatsappLink = `https://wa.me/918678830021?text=Hi%20Adswadi%20team!%20I'm%20interested%20in%20your%20digital%20marketing%20services.%20Can%20you%20help%20me%20grow%20my%20business?`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-fuchsia-50 via-indigo-50 to-cyan-50 pt-20 sm:pt-24 lg:pt-32" style={{ minHeight: 'calc(100vh - 4rem)' }}>
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-10"
      />
      {/* Mesh Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 600px at 20% 20%, rgba(168,85,247,0.35), transparent 60%), radial-gradient(1000px 500px at 80% 30%, rgba(99,102,241,0.30), transparent 55%), radial-gradient(900px 500px at 40% 80%, rgba(236,72,153,0.25), transparent 55%)'
        }}
      />
      
      {/* Logo Watermark */}
      <div className="absolute top-28 sm:top-32 lg:top-40 left-8 opacity-10">
        <img 
          src="/adswadi-logo.svg"
          alt="Adswadi"
          className="h-16 w-auto"
        />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-white/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-white/10 rounded-full blur-2xl"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.h1
            className="hero-headline text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-8 leading-tight tracking-tight"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
            }}
          >
            {/* Main Title with Enhanced Design */}
            <div className="relative">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-fuchsia-600/20 to-purple-800/20 blur-3xl rounded-full transform scale-150"></div>
              
              {/* First Line */}
              <motion.div
                className="relative z-10 mb-4"
                variants={{ hidden: { y: 30, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              >
                <span className="inline-block bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-800 bg-clip-text text-transparent drop-shadow-2xl">
                  Unlock
                </span>
                <span className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent drop-shadow-2xl ml-4">
                  Greater
                </span>
                <span className="inline-block bg-gradient-to-r from-pink-600 via-rose-600 to-purple-800 bg-clip-text text-transparent drop-shadow-2xl ml-4">
                  Profits
                </span>
              </motion.div>
              
              {/* Second Line with Enhanced Underline */}
              <motion.div
                className="relative z-10 inline-block"
                variants={{ hidden: { y: 30, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              >
                <span ref={phraseRef}>
                <span className="inline-block bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-800 bg-clip-text text-transparent drop-shadow-2xl">
                  from Every Ad
                </span>
                
                {/* Enhanced Animated Underline */}
                <svg
                  key={phraseWidth}
                  width={phraseWidth}
                  height={Math.max(Math.round(phraseHeight * 0.4), 12)}
                  viewBox={`0 0 ${phraseWidth} ${Math.max(Math.round(phraseHeight * 0.2), 6)}`}
                  className="absolute left-0 -bottom-3 overflow-visible"
                >
                  <defs>
                    <linearGradient id="underlineGradient" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="25%" stopColor="#7c3aed" />
                      <stop offset="50%" stopColor="#ec4899" />
                      <stop offset="75%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <filter id="underlineShadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000000" floodOpacity="0.3"/>
                    </filter>
                    <filter id="glowEffect" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <path
                    ref={underlinePathRef}
                    id="underlinePath"
                    d={`M0 ${Math.max(Math.round(phraseHeight * 0.2), 6)} L${phraseWidth} ${Math.max(Math.round(phraseHeight * 0.2), 6)}`}
                    fill="none"
                    stroke="url(#underlineGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    filter="url(#underlineShadow)"
                  />
                  {/* Glow effect */}
                  <path
                    d={`M0 ${Math.max(Math.round(phraseHeight * 0.2), 6)} L${phraseWidth} ${Math.max(Math.round(phraseHeight * 0.2), 6)}`}
                    fill="none"
                    stroke="url(#underlineGradient)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    opacity="0.3"
                    filter="url(#glowEffect)"
                  />
                </svg>
                </span>
              </motion.div>
            </div>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl lg:text-3xl text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We help businesses grow with <span className="text-purple-600 font-semibold">data-driven digital marketing strategies</span> that deliver <span className="text-purple-600 font-semibold">real results</span>.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
          >
            <span className="relative z-10">Book a Strategy Call</span>
            <ArrowRight size={20} className="relative z-10" />
          </motion.a>
        </motion.div>

        {/* Partner Logos */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="certified-section text-center"
        >
          <h2 className="text-slate-700 mb-6 font-semibold text-base sm:text-lg">
            Our Performance Marketing Services are Certified by
          </h2>
          <div className="partners grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
            {[
              { 
                name: 'Meta', 
                image: '/partners/meta-logo.png',
                alt: 'Meta Business Partner Logo',
                subText: 'Business Partner'
              },
              { 
                name: 'Shopify', 
                image: '/partners/shopify-logo.png',
                alt: 'Shopify Partner Logo',
                subText: 'Business Partner'
              },
              { 
                name: 'Google', 
                image: '/partners/google-logo.png',
                alt: 'Google Partner Logo',
                subText: 'Business Partner'
              },
              { 
                name: 'YouTube', 
                image: '/partners/youtube-logo.png',
                alt: 'YouTube Business Partner Logo',
                subText: 'Business Partner'
              }
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="partner flex flex-col items-center gap-2 p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden p-2">
                  <img 
                    src={partner.image} 
                    alt={partner.alt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-slate-900 text-sm">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    {partner.subText}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default Hero;
