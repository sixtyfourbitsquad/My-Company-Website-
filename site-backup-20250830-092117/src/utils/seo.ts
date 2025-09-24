// SEO Configuration for Adswadi Website
export const siteConfig = {
  title: 'Adswadi - Performance Marketing Agency',
  description: 'Transform your business with smart ads. Expert digital marketing services including Facebook Ads, Google Ads, Instagram Ads, and performance marketing strategies.',
  url: 'https://adswadi.com',
  ogImage: '/og-image.jpg',
  keywords: [
    'digital marketing',
    'facebook ads',
    'google ads',
    'instagram ads',
    'performance marketing',
    'advertising agency',
    'social media marketing',
    'PPC campaigns',
    'ROI optimization',
    'conversion optimization'
  ],
  author: 'Adswadi Team',

  facebookPage: 'adswadi'
};

export const blogSEO = {
  title: 'Digital Marketing Blog - Adswadi',
  description: 'Latest insights on digital marketing, advertising strategies, Facebook Ads, Google Ads, and performance marketing tips from Adswadi experts.',
  keywords: [
    'digital marketing blog',
    'facebook ads tips',
    'google ads strategies',
    'performance marketing insights',
    'advertising blog',
    'marketing tips',
    'PPC optimization',
    'social media advertising'
  ]
};

export const generateBlogPostSEO = (post: {
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
}) => {
  return {
    title: `${post.title} - Adswadi Blog`,
    description: post.excerpt,
    keywords: [...post.tags, 'digital marketing', 'advertising', 'performance marketing'],
    ogImage: `/blog/${post.category.toLowerCase().replace(/\s+/g, '-')}.jpg`,
    article: {
      publishedTime: new Date().toISOString(),
      modifiedTime: new Date().toISOString(),
      author: 'Adswadi Team',
      section: post.category,
      tags: post.tags
    }
  };
};

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Adswadi",
    "url": "https://adswadi.com",
    "logo": "https://adswadi.com/logo.png",
    "description": "Performance marketing agency specializing in Facebook Ads, Google Ads, and digital marketing strategies.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8678830021",
      "contactType": "customer service"
    }
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Adswadi",
    "url": "https://adswadi.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://adswadi.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  blog: {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Adswadi Digital Marketing Blog",
    "description": "Expert insights on digital marketing, advertising strategies, and performance marketing",
    "url": "https://adswadi.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Adswadi"
    }
  }
}; 