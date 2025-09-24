import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import Team from '../components/Team';
import Blog from '../components/Blog';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  useEffect(() => {
    // Set meta tags for SEO
    document.title = 'Adswadi – Advertising & Performance Marketing Agency India';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Transform your business with smart ads. Expert digital marketing services including Facebook Ads, Google Ads, Instagram Ads, and performance marketing strategies across Delhi, Mumbai, Bangalore, and India.';
    
    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Adswadi – Advertising & Performance Marketing Agency India' },
      { property: 'og:description', content: 'Transform your business with smart ads. Expert digital marketing services including Facebook Ads, Google Ads, Instagram Ads, and performance marketing strategies across Delhi, Mumbai, Bangalore, and India.' },
      { property: 'og:url', content: 'https://adswadi.com' },
      { property: 'og:site_name', content: 'Adswadi' },
      { property: 'og:image', content: 'https://adswadi.com/og-image.jpg' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'en_IN' }
    ];
    
    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });
    
    // Add structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Adswadi',
      url: 'https://adswadi.com',
      logo: 'https://adswadi.com/logo.png',
      description: 'Performance marketing agency specializing in Facebook Ads, Google Ads, and digital marketing strategies across India.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressLocality: 'Delhi',
        addressRegion: 'Delhi',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-8678830021',
        contactType: 'customer service',
        areaServed: 'IN',
      },
      sameAs: [
        'https://www.facebook.com/adswadi',
        
    
      ],
      serviceArea: {
        '@type': 'Country',
        name: 'India',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Facebook Ads Management',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Google Ads Management',
            },
          },
        ],
      },
    };
    
    // Add structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      // Cleanup
      const scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (scriptTag) {
        scriptTag.remove();
      }
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <Services />
      <CaseStudies />
      <Team />
      <Blog />
      <Testimonials />
      <Contact />
    </Layout>
  );
} 