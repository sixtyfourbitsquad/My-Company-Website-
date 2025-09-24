import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animationType?: 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in';
  delay?: number;
  className?: string;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animationType = 'fade-in',
  delay = 0,
  className = '',
  threshold = 0.1
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold });

  const getAnimationClass = () => {
    const baseClass = `scroll-${animationType}`;
    const delayClass = delay > 0 ? `scroll-delay-${delay}` : '';
    const animateClass = isVisible ? 'animate' : '';
    
    return `${baseClass} ${delayClass} ${animateClass}`.trim();
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection; 