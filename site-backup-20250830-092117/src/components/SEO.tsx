    import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  pageType?: string;
  customImage?: string;
  customUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Adswadi - Performance Marketing Agency | Facebook Ads, Google Ads, Digital Marketing | India',
  description = 'Transform your business with smart ads. Expert digital marketing services including Facebook Ads, Google Ads, Instagram Ads, and performance marketing strategies. Serving India markets with proven results.',
  keywords = 'digital marketing, facebook ads, google ads, instagram ads, performance marketing, advertising agency, social media marketing, PPC campaigns, ROI optimization, conversion optimization, India, Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Kolkata, digital marketing agency, SEO services, PPC management, social media agency',
  pageType = 'home',
  customImage = 'https://adswadi.com/og-image.jpg',
  customUrl = 'https://adswadi.com'
}) => {
  const canonicalUrl = customUrl;
  const ogImage = customImage;
  const twitterImage = customImage;
  
  // Base structured data
  const baseStructuredData: any = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Adswadi",
    "url": "https://adswadi.com",
    "logo": "https://adswadi.com/logo.png",
    "description": "Performance marketing agency specializing in Facebook Ads, Google Ads, and digital marketing strategies. Serving India markets with proven results.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India",
      "addressRegion": "Maharashtra",
      "addressLocality": "Mumbai",
      "postalCode": "400001"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8678830021",
      "contactType": "customer service",
      "areaServed": ["India"],
      "availableLanguage": ["English", "Hindi"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    "sameAs": [
      "https://www.facebook.com/adswadi",
      "https://www.linkedin.com/company/adswadi",
      "https://twitter.com/adswadi",
      "https://www.instagram.com/adswadi"
    ]
  };
  
  // Page-specific structured data
  let pageStructuredData: any = baseStructuredData;
  
  if (pageType === 'services') {
    pageStructuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Digital Marketing Services",
      "provider": {
        "@type": "Organization",
        "name": "Adswadi"
      },
      "description": "Comprehensive digital marketing services including Facebook Ads, Google Ads, Instagram Ads, SEO, PPC, and performance marketing.",
      "areaServed": ["India"],
      "serviceType": "Digital Marketing"
    };
  } else if (pageType === 'about') {
    pageStructuredData = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Adswadi",
      "description": "Learn about Adswadi, a leading performance marketing agency specializing in Facebook Ads, Google Ads, and digital marketing strategies."
    };
  } else if (pageType === 'contact') {
    pageStructuredData = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Adswadi",
      "description": "Contact Adswadi for expert digital marketing services and free consultation."
    };
  }
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Adswadi Team" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="Mumbai, India" />
      <meta name="geo.position" content="19.0760;72.8777" />
      <meta name="ICBM" content="19.0760, 72.8777" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Adswadi" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="hi_IN" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:site" content="@adswadi" />
      <meta name="twitter:creator" content="@adswadi" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(pageStructuredData)}
      </script>
      
      {/* Additional SEO Scripts */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Adswadi",
          "url": "https://adswadi.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://adswadi.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://adswadi.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": pageType.charAt(0).toUpperCase() + pageType.slice(1),
              "item": canonicalUrl
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
