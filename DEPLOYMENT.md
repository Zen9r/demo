# Business Arabia Website - Deployment Guide

## Overview
This guide covers deploying the Business Arabia custom website proposal to various hosting platforms.

## Prerequisites
- Node.js 18+ installed
- Git repository set up
- All dependencies installed (`pnpm install`)

## Build the Project

### 1. Production Build
```bash
# Create production build
pnpm build

# Test the production build locally
pnpm start
```

### 2. Verify Build Output
- Check `.next` folder for build artifacts
- Ensure no build errors in console
- Test all functionality works in production mode

## Deployment Options

### Option 1: Vercel (Recommended)

#### Automatic Deployment
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with default settings

#### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts to configure:
# - Project name: business-arabia-website
# - Build command: pnpm build
# - Output directory: .next
# - Install command: pnpm install
```

#### Environment Variables (if needed)
```bash
# In Vercel dashboard or vercel.json
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### Option 2: Netlify

#### Manual Deployment
1. Create `netlify.toml` in project root:
```toml
[build]
  command = "pnpm build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Deploy via Netlify dashboard or CLI:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Option 3: Static Export (Alternative)

#### Configure Static Export
1. Update `next.config.mjs`:
```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

2. Build and deploy static files:
```bash
pnpm build
# Static files will be in 'out' folder
```

## Post-Deployment Checklist

### 1. Functionality Testing
- [ ] All sections load correctly
- [ ] Arabic text displays properly
- [ ] Interactive demo form works
- [ ] Responsive design on mobile/tablet
- [ ] Animations and transitions work
- [ ] Particle background renders

### 2. Performance Testing
- [ ] Page load speed < 3 seconds
- [ ] Images optimize correctly
- [ ] Fonts load without FOUT
- [ ] No console errors

### 3. SEO & Accessibility
- [ ] Meta tags are correct
- [ ] Arabic language tag set
- [ ] Alt text for images
- [ ] Proper heading hierarchy

### 4. Cross-Browser Testing
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile browsers

## Custom Domain Setup

### 1. DNS Configuration
```bash
# Add CNAME record
CNAME: www -> your-app.vercel.app

# Or A record for root domain
A: @ -> 76.76.19.76
```

### 2. SSL Certificate
- Vercel/Netlify provide automatic SSL
- Ensure HTTPS redirects are enabled

## Monitoring & Analytics

### 1. Performance Monitoring
- Vercel Analytics (built-in)
- Google PageSpeed Insights
- WebPageTest

### 2. Error Tracking
- Vercel Error Tracking
- Sentry integration (optional)

## Maintenance

### 1. Regular Updates
```bash
# Update dependencies
pnpm update

# Security audits
pnpm audit

# Rebuild and redeploy
pnpm build && vercel --prod
```

### 2. Content Updates
- Modify content in `app/page.tsx`
- Update pricing, client list, tech stack
- Rebuild and redeploy

## Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and reinstall
rm -rf node_modules .next
pnpm install
pnpm build
```

#### Font Loading Issues
- Verify Google Fonts URLs in `globals.css`
- Check network tab for font requests
- Ensure fonts are accessible

#### Particle Background Issues
- Check WebGL support in browser
- Verify OGL dependency is installed
- Check console for WebGL errors

#### Arabic Text Issues
- Verify font-family declarations
- Check RTL support
- Test with different Arabic text

## Support

For deployment issues:
1. Check build logs
2. Verify environment configuration
3. Test locally with production build
4. Check browser console for errors

---

**Note**: This website is designed for Business Arabia and should be deployed to a professional hosting environment with proper SSL and performance optimization.
