# AVIF Images in Adswadi Website Slider

## Overview

The case studies slider now supports AVIF (AV1 Image File Format) images for better performance and smaller file sizes. AVIF provides superior compression compared to JPEG and PNG while maintaining high quality.

## Benefits of AVIF

- **Smaller file sizes**: Up to 50% smaller than JPEG at similar quality
- **Better compression**: Advanced compression algorithms
- **Wide color gamut**: Support for HDR and wide color spaces
- **Progressive loading**: Better perceived performance
- **Modern format**: Designed for the web

## How to Add AVIF Images

### 1. Prepare Your Images

Convert your images to AVIF format using tools like:
- **Online converters**: Convertio, CloudConvert
- **Command line**: `avifenc` (from libavif)
- **Image editing software**: GIMP, Photoshop (with plugins)

### 2. File Structure

Place your AVIF images in the `public/case-studies/` directory:

```
public/case-studies/
├── fashion.avif
├── saas.avif
├── restaurant.avif
├── real-estate.avif
└── healthcare.avif
```

### 3. Update the Component

The `CaseStudies.tsx` component now includes both AVIF and fallback images:

```typescript
const caseStudies = [
  {
    title: 'E-commerce Fashion Brand',
    // ... other properties
    image: '/case-studies/fashion.avif',        // AVIF version
    fallbackImage: '/case-studies/fashion.jpg', // Fallback for older browsers
    color: 'from-pink-500 to-purple-600'
  },
  // ... more case studies
];
```

### 4. Using the AvifImage Component

The slider uses a custom `AvifImage` component that automatically handles:
- AVIF format for supported browsers
- Fallback to JPEG/PNG for older browsers
- Error handling with graceful degradation

```typescript
<AvifImage
  avifSrc="/case-studies/fashion.avif"
  fallbackSrc="/case-studies/fashion.jpg"
  alt="E-commerce Fashion Brand"
  className="w-full h-full rounded-2xl object-cover"
/>
```

## Browser Support

AVIF is supported in:
- Chrome 85+
- Firefox 93+
- Safari 16.4+
- Edge 85+

For unsupported browsers, the component automatically falls back to the JPEG/PNG version.

## Image Optimization Tips

1. **Use appropriate dimensions**: Don't use larger images than needed
2. **Optimize quality**: AVIF works well with quality settings of 60-80
3. **Test across browsers**: Ensure fallback images work properly
4. **Consider loading performance**: Use lazy loading for images below the fold

## File Naming Convention

Use descriptive names for your AVIF files:
- `fashion.avif` - Fashion industry case study
- `saas.avif` - SaaS product case study
- `restaurant.avif` - Restaurant case study
- `real-estate.avif` - Real estate case study
- `healthcare.avif` - Healthcare case study

## Adding New Case Studies

To add a new case study with AVIF images:

1. Create your AVIF image and place it in `public/case-studies/`
2. Create a fallback JPEG/PNG version
3. Add the case study object to the `caseStudies` array in `CaseStudies.tsx`
4. Include both `image` (AVIF) and `fallbackImage` (JPEG/PNG) properties

## Performance Benefits

- **Faster loading**: Smaller file sizes mean faster page loads
- **Better user experience**: Progressive loading and better compression
- **Reduced bandwidth**: Especially beneficial for mobile users
- **SEO friendly**: Faster pages rank better in search engines

## Troubleshooting

If AVIF images don't load:
1. Check browser support
2. Verify file paths are correct
3. Ensure fallback images exist
4. Check browser console for errors

The component includes error handling that will show a gradient background with the first letter of the case study title if both AVIF and fallback images fail to load.
