import React, { useEffect, useRef, useState } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  preloadImages?: string[];
  preloadFonts?: string[];
  lazyLoadImages?: boolean;
  enableIntersectionObserver?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  preloadImages = [],
  preloadFonts = [],
  lazyLoadImages = true,
  enableIntersectionObserver = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [fontsLoaded, setFontsLoaded] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Preload critical images
  useEffect(() => {
    if (preloadImages.length > 0) {
      preloadImages.forEach((imageSrc) => {
        const img = new Image();
        img.onload = () => {
          setImagesLoaded(prev => prev + 1);
        };
        img.src = imageSrc;
      });
    }
  }, [preloadImages]);

  // Preload critical fonts
  useEffect(() => {
    if (preloadFonts.length > 0 && 'fonts' in document) {
      preloadFonts.forEach((fontFamily) => {
        // @ts-ignore - FontFace API
        const font = new FontFace(fontFamily, `url(/fonts/${fontFamily}.woff2)`);
        font.load().then(() => {
          document.fonts.add(font);
          setFontsLoaded(prev => prev + 1);
        }).catch(() => {
          // Fallback to system fonts if custom font fails to load
          console.warn(`Failed to load font: ${fontFamily}`);
        });
      });
    }
  }, [preloadFonts]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (enableIntersectionObserver && containerRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Disconnect observer once visible
            if (observerRef.current) {
              observerRef.current.disconnect();
            }
          }
        },
        {
          rootMargin: '50px 0px',
          threshold: 0.1
        }
      );

      observerRef.current.observe(containerRef.current);

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    } else {
      // If intersection observer is disabled, show immediately
      setIsVisible(true);
    }
  }, [enableIntersectionObserver]);

  // Performance monitoring
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            console.log('LCP:', lastEntry.startTime);
            // Send to analytics if needed
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            console.log('FID:', entry.processingStart - entry.startTime);
            // Send to analytics if needed
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          console.log('CLS:', clsValue);
          // Send to analytics if needed
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
      }
    }
  }, []);

  // Resource hints for performance
  useEffect(() => {
    // DNS prefetch for external domains
    const externalDomains = [
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Preconnect to critical domains
    const criticalDomains = [
      'https://adswadi.com',
      'https://www.google-analytics.com'
    ];

    criticalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);

  // Font display optimization
  useEffect(() => {
    // Load Inter font from Google Fonts with font-display: swap
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link);

    const fontLink = document.createElement('link');
    fontLink.rel = 'preconnect';
    fontLink.href = 'https://fonts.gstatic.com';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(link);

    const googleFontsLink = document.createElement('link');
    googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap';
    googleFontsLink.rel = 'stylesheet';
    document.head.appendChild(googleFontsLink);

    return () => {
      // Clean up links on unmount
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.head.contains(fontLink)) document.head.removeChild(fontLink);
      if (document.head.contains(googleFontsLink)) document.head.removeChild(googleFontsLink);
    };
  }, []);

  return (
    <div ref={containerRef} className="performance-optimizer">
      {/* Loading indicator for critical resources */}
      {(!isVisible || imagesLoaded < preloadImages.length || fontsLoaded < preloadFonts.length) && (
        <div className="loading-indicator">
          <div className="loading-spinner"></div>
          <p>Optimizing performance...</p>
        </div>
      )}
      
      {/* Render children when ready */}
      {isVisible && (
        <div className="optimized-content">
          {children}
        </div>
      )}
      
      {/* Performance metrics display (development only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="performance-metrics">
          <details>
            <summary>Performance Metrics</summary>
            <ul>
              <li>Images Loaded: {imagesLoaded}/{preloadImages.length}</li>
              <li>Fonts Loaded: {fontsLoaded}/{preloadFonts.length}</li>
              <li>Intersection Observer: {enableIntersectionObserver ? 'Enabled' : 'Disabled'}</li>
              <li>Lazy Loading: {lazyLoadImages ? 'Enabled' : 'Disabled'}</li>
            </ul>
          </details>
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;
