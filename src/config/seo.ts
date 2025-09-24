export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogType: 'website' | 'article' | 'service';
  canonicalUrl: string;
  ogImage: string;
  twitterImage: string;
  structuredData: any;
}

export interface PageSEOConfig {
  [key: string]: SEOConfig;
}

// Comprehensive keyword strategy (100+ keywords)
export const KEYWORDS = {
  // Primary Services
  primary: [
    'digital marketing',
    'facebook ads',
    'google ads',
    'instagram ads',
    'performance marketing',
    'social media marketing',
    'PPC campaigns',
    'SEO services',
    'content marketing',
    'email marketing'
  ],
  
  // Local Targeting - India
  india: [
    'digital marketing agency India',
    'Facebook ads agency Mumbai',
    'Google ads agency Delhi',
    'performance marketing Bangalore',
    'social media marketing Chennai',
    'PPC agency Hyderabad',
    'SEO services Pune',
    'digital marketing Kolkata',
    'online advertising India',
    'marketing agency India'
  ],
  
  // Local Targeting - Major Indian Cities
  majorCities: [
    'digital marketing Mumbai',
    'Facebook ads Delhi',
    'Google ads Bangalore',
    'performance marketing Chennai',
    'social media marketing Hyderabad',
    'PPC agency Pune',
    'SEO services Kolkata',
    'digital marketing agency Ahmedabad',
    'online advertising Jaipur',
    'marketing agency Surat'
  ],
  
  // Industry Specific
  industry: [
    'B2B marketing',
    'e-commerce marketing',
    'startup marketing',
    'enterprise marketing',
    'SaaS marketing',
    'retail marketing',
    'healthcare marketing',
    'education marketing',
    'real estate marketing',
    'finance marketing'
  ],
  
  // Long-tail Keywords
  longTail: [
    'best Facebook ads agency for e-commerce',
    'Google ads management for B2B companies',
    'performance marketing for startups',
    'social media marketing for restaurants',
    'PPC optimization for lead generation',
    'SEO services for local businesses',
    'digital marketing for healthcare providers',
    'content marketing for SaaS companies',
    'email marketing for retail businesses',
    'conversion optimization for online stores'
  ],
  
  // Competitor Keywords
  competitor: [
    'digital marketing vs traditional marketing',
    'Facebook ads vs Google ads',
    'performance marketing vs brand marketing',
    'in-house marketing vs agency',
    'SEO vs PPC for business growth',
    'social media marketing ROI',
    'PPC campaign optimization',
    'marketing automation tools',
    'customer acquisition cost',
    'lifetime value optimization'
  ],
  
  // Technical SEO
  technical: [
    'Core Web Vitals',
    'page speed optimization',
    'mobile-first indexing',
    'local SEO optimization',
    'voice search optimization',
    'featured snippets',
    'rich snippets',
    'schema markup',
    'technical SEO audit',
    'website performance'
  ]
};

// Get all keywords as a single array
export const getAllKeywords = (): string[] => {
  return Object.values(KEYWORDS).flat();
};

// Base SEO configuration
export const BASE_SEO: SEOConfig = {
  title: 'Adswadi - Performance Marketing Agency | Facebook Ads, Google Ads, Digital Marketing',
  description: 'Transform your business with smart ads. Expert digital marketing services including Facebook Ads, Google Ads, Instagram Ads, and performance marketing strategies. Serving India markets with proven results.',
  keywords: getAllKeywords(),
  ogType: 'website',
  canonicalUrl: 'https://adswadi.com',
  ogImage: 'https://adswadi.com/og-image.jpg',
  twitterImage: 'https://adswadi.com/twitter-image.jpg',
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Adswadi",
    "url": "https://adswadi.com",
    "logo": "https://adswadi.com/logo.png",
    "description": "Performance marketing agency specializing in Facebook Ads, Google Ads, and digital marketing strategies.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India",
      "addressRegion": "Maharashtra",
      "addressLocality": "Mumbai"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8678830021",
      "contactType": "customer service",
      "areaServed": ["India"],
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/adswadi",
      "https://www.linkedin.com/company/adswadi",
      "https://twitter.com/adswadi"
    ]
  }
};

// Page-specific SEO configurations
export const PAGE_SEO: PageSEOConfig = {
  home: {
    ...BASE_SEO,
    title: 'Adswadi - Performance Marketing Agency | Facebook Ads, Google Ads, Digital Marketing',
    description: 'Transform your business with smart ads. Expert digital marketing services including Facebook Ads, Google Ads, Instagram Ads, and performance marketing strategies. Serving India markets.',
    canonicalUrl: 'https://adswadi.com',
    structuredData: {
      ...BASE_SEO.structuredData,
      "@type": "Organization"
    }
  },
  
  services: {
    ...BASE_SEO,
    title: 'Digital Marketing Services | Facebook Ads, Google Ads, SEO | Adswadi',
    description: 'Comprehensive digital marketing services including Facebook Ads, Google Ads, Instagram Ads, SEO, PPC, and performance marketing. Expert strategies for India markets.',
    canonicalUrl: 'https://adswadi.com/services',
    ogType: 'service',
    structuredData: {
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
    }
  },
  
  about: {
    ...BASE_SEO,
    title: 'About Adswadi | Performance Marketing Agency | Digital Marketing Experts',
    description: 'Learn about Adswadi, a leading performance marketing agency specializing in Facebook Ads, Google Ads, and digital marketing strategies. Serving India markets.',
    canonicalUrl: 'https://adswadi.com/about',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Adswadi",
      "description": "Learn about Adswadi, a leading performance marketing agency specializing in Facebook Ads, Google Ads, and digital marketing strategies."
    }
  },
  
  contact: {
    ...BASE_SEO,
    title: 'Contact Adswadi | Digital Marketing Agency | Get Free Consultation',
    description: 'Contact Adswadi for expert digital marketing services. Get free consultation for Facebook Ads, Google Ads, SEO, and performance marketing strategies.',
    canonicalUrl: 'https://adswadi.com/contact',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Adswadi",
      "description": "Contact Adswadi for expert digital marketing services and free consultation."
    }
  },
  
  caseStudies: {
    ...BASE_SEO,
    title: 'Digital Marketing Case Studies | Success Stories | Adswadi',
    description: 'Explore real digital marketing case studies and success stories. See how Adswadi helped businesses grow with Facebook Ads, Google Ads, and performance marketing.',
    canonicalUrl: 'https://adswadi.com/case-studies',
    ogType: 'article',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Digital Marketing Case Studies",
      "description": "Explore real digital marketing case studies and success stories from Adswadi."
    }
  },
  
  blog: {
    ...BASE_SEO,
    title: 'Digital Marketing Blog | Marketing Tips & Insights | Adswadi',
    description: 'Stay updated with the latest digital marketing trends, tips, and insights. Expert advice on Facebook Ads, Google Ads, SEO, and performance marketing.',
    canonicalUrl: 'https://adswadi.com/blog',
    ogType: 'article',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Adswadi Digital Marketing Blog",
      "description": "Stay updated with the latest digital marketing trends, tips, and insights."
    }
  }
};

// SEO helper functions
export const generateMetaTags = (config: SEOConfig) => {
  return {
    title: config.title,
    meta: [
      { name: 'description', content: config.description },
      { name: 'keywords', content: config.keywords.join(', ') },
      { name: 'author', content: 'Adswadi Team' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'English' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'distribution', content: 'global' },
      { name: 'rating', content: 'general' },
      
      // Open Graph
      { property: 'og:title', content: config.title },
      { property: 'og:description', content: config.description },
      { property: 'og:type', content: config.ogType },
      { property: 'og:url', content: config.canonicalUrl },
      { property: 'og:image', content: config.ogImage },
      { property: 'og:site_name', content: 'Adswadi' },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: config.title },
      { name: 'twitter:description', content: config.description },
      { name: 'twitter:image', content: config.twitterImage },
      { name: 'twitter:site', content: '@adswadi' }
    ],
    link: [
      { rel: 'canonical', href: config.canonicalUrl }
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(config.structuredData)
      }
    ]
  };
};

export default {
  BASE_SEO,
  PAGE_SEO,
  KEYWORDS,
  getAllKeywords,
  generateMetaTags
};
