import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './Hero.tsx';
import Services from './Services.tsx';
import CaseStudies from './CaseStudies.tsx';
import Team from './Team.tsx';
import About from './About.tsx';
import Blog from './Blog.tsx';
import Testimonials from './Testimonials.tsx';

import Contact from './Contact.tsx';

// Only register ScrollTrigger as it's included in the main GSAP package
gsap.registerPlugin(ScrollTrigger);

const StickyScrollLayout: React.FC = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionsRef.current) return;

    // Create smooth scrolling without sticky pinning
    const sections = gsap.utils.toArray('.sticky-section');
    
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out'
          });
        },
        onLeave: () => {
          gsap.to(section, {
            opacity: 0.7,
            y: 50,
            duration: 0.6,
            ease: 'power2.out'
          });
        },
        onEnterBack: () => {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out'
          });
        },
        onLeaveBack: () => {
          gsap.to(section, {
            opacity: 0.7,
            y: 50,
            duration: 0.6,
            ease: 'power2.out'
          });
        }
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionsRef} className="relative">
      {/* Hero Section */}
      <section id="home" className="sticky-section min-h-screen w-full">
        <Hero />
      </section>

      {/* Services Section */}
      <section id="services" className="sticky-section min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <Services />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="sticky-section min-h-screen w-full bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <CaseStudies />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="sticky-section min-h-screen w-full bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <Team />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="sticky-section min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <About />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="sticky-section min-h-screen w-full bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <Blog />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="sticky-section min-h-screen w-full bg-gradient-to-br from-orange-50 to-red-50">
        <div className="h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <Testimonials />
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="sticky-section min-h-screen w-full bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <Contact />
          </div>
        </div>
      </section>
    </div>
  );
};

export default StickyScrollLayout;
