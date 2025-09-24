import React from 'react';

interface AvifImageProps {
  avifSrc: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

const AvifImage: React.FC<AvifImageProps> = ({
  avifSrc,
  fallbackSrc,
  alt,
  className = '',
  onError,
  onLoad
}) => {
  return (
    <picture>
      <source srcSet={avifSrc} type="image/avif" />
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        onError={onError}
        onLoad={onLoad}
      />
    </picture>
  );
};

export default AvifImage;
