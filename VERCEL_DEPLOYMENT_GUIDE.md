# Vercel Deployment Guide for Adswadi Website

## Issue: White Blank Page on Vercel

If you're experiencing a white blank page when deploying to Vercel, follow these steps to resolve the issue.

## What We've Fixed

1. **Created `vercel.json`** - Proper routing configuration for SPA
2. **Updated `vite.config.ts`** - Added build optimizations and base path
3. **Added Error Boundary** - Catches runtime errors that might cause white pages
4. **Simplified GSAP usage** - Removed external plugins that might not be available
5. **Added Loading Spinner** - Shows loading state while app initializes
6. **Created `.vercelignore`** - Excludes unnecessary files from deployment

## Deployment Steps

### 1. Commit and Push Changes
```bash
git add .
git commit -m "Fix Vercel deployment issues and add error handling"
git push origin main
```

### 2. Vercel Configuration
- Go to your Vercel dashboard
- Select your project
- Go to Settings → General
- Ensure the following settings:
  - **Framework Preset**: Vite
  - **Build Command**: `npm run build`
  - **Output Directory**: `dist`
  - **Install Command**: `npm install`

### 3. Environment Variables (if needed)
Add these in Vercel dashboard under Settings → Environment Variables:
```
NODE_ENV=production
```

### 4. Redeploy
- Go to Deployments tab
- Click "Redeploy" on your latest deployment
- Or push a new commit to trigger automatic deployment

## Troubleshooting

### If Still Getting White Page:

1. **Check Browser Console**
   - Open Developer Tools (F12)
   - Look for JavaScript errors in Console tab
   - Check Network tab for failed requests

2. **Check Vercel Build Logs**
   - Go to your deployment in Vercel
   - Click on the build to see detailed logs
   - Look for any build errors or warnings

3. **Verify File Paths**
   - Ensure all image and asset paths are correct
   - Check that public folder assets are being served

4. **Test Locally First**
   ```bash
   npm run build
   npm run preview
   ```
   - This should work locally before deploying

### Common Issues and Solutions:

1. **GSAP Plugin Errors**
   - We've simplified GSAP usage to only use core plugins
   - External plugins like MorphSVGPlugin might not be available in production

2. **Routing Issues**
   - `vercel.json` handles SPA routing
   - All routes redirect to `index.html`

3. **Build Failures**
   - Check that all dependencies are in `package.json`
   - Ensure TypeScript compilation succeeds

4. **Asset Loading**
   - Verify that all images and assets are in the `public` folder
   - Check that paths in components match the actual file structure

## File Structure After Build

```
dist/
├── index.html          # Main HTML file
├── assets/             # JavaScript and CSS bundles
├── logos/              # Logo images
├── team/               # Team member images
├── partners/           # Partner logos
├── blog/               # Blog images
└── manifest.json       # PWA manifest
```

## Performance Optimizations

- **Code Splitting**: Vendor, router, and animation code are split into separate chunks
- **Image Optimization**: Using AVIF format for better compression
- **Lazy Loading**: Images load only when needed
- **Caching**: Static assets are cached with proper headers

## Monitoring

After successful deployment:
1. Check Vercel Analytics for performance metrics
2. Monitor Core Web Vitals
3. Test on different devices and browsers
4. Verify that all interactive elements work correctly

## Support

If issues persist:
1. Check Vercel status page
2. Review Vercel documentation for Vite projects
3. Check browser compatibility
4. Verify all dependencies are production-ready
