// Scroll Animation Utility
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Observe all elements with scroll animation classes
  const animatedElements = document.querySelectorAll(
    '.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale-in'
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  return observer;
};

// Initialize animations when DOM is loaded
if (typeof window !== 'undefined') {
  window.addEventListener('load', initScrollAnimations);
  // Also initialize on route changes for SPA
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} 