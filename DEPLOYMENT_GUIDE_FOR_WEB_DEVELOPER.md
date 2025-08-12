# LeapGen Website - Complete Deployment Guide

## 🎯 Overview
This guide provides everything your web developer needs to deploy the LeapGen website to a production server. The website is built with Next.js and can be deployed as either a static site or a dynamic Node.js application.

## 📦 What's Included in the Package

### Source Code (`app/` directory)
- **Complete Next.js application** with all source files
- **Customer Success Stories** section with 3 detailed case studies
- **32+ use case pages** with comprehensive content
- **Interactive ROI calculators** for SurroundAI and DataCoffee
- **Working contact form** with webhook integration
- **Social media links** integration

### Built Static Files (`app/out/` directory)
- **Production-ready HTML/CSS/JS files** for static hosting
- **All pages pre-rendered** for optimal performance
- **Assets and images** optimized for web delivery
- **Ready for immediate deployment** to any static hosting provider

## 🚀 Deployment Options

### Option 1: Static Site Deployment (Recommended)
**Best for: Shared hosting, CDN, static hosting providers**

#### Files to Deploy:
```
app/out/
├── index.html (homepage)
├── _next/ (Next.js assets)
├── customer-success/ (case studies)
├── use-cases/ (all use case pages)
├── products/ (product pages)
├── resources/ (ROI calculators)
├── contact/ (contact form)
└── [all other pages]
```

#### Deployment Steps:
1. **Upload the entire `app/out/` directory** to your web server's public folder
2. **Set up URL rewriting** (see configuration below)
3. **Configure HTTPS** for security
4. **Test all pages** and contact form functionality

#### Server Configuration Required:

**Apache (.htaccess)**
```apache
RewriteEngine On

# Handle Next.js static export
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^.]+)$ $1.html [L]

# Security headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"

# Cache static assets
<FilesMatch "\.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2)$">
    ExpiresActive On
    ExpiresDefault "access plus 1 year"
</FilesMatch>
```

**Nginx**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/app/out;
    index index.html;

    # Handle Next.js static routes
    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    # Cache static assets
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options DENY;
    add_header X-XSS-Protection "1; mode=block";
}
```

### Option 2: Node.js Application Deployment
**Best for: VPS, dedicated servers, cloud platforms**

#### Requirements:
- **Node.js 18+**
- **npm or yarn**
- **PM2 or similar process manager** (recommended)

#### Deployment Steps:
1. **Upload the entire `app/` directory** to your server
2. **Install dependencies**: `npm install`
3. **Build the application**: `npm run build`
4. **Start the application**: `npm start`
5. **Set up process manager**: `pm2 start npm --name "leapgen" -- start`

#### Environment Variables:
```bash
# Required for contact form webhook
WEBHOOK_URL=https://hook.us2.make.com/esonrv674fe7exxmtxrjy9unqx8ifut5
NODE_ENV=production
PORT=3000
```

## 🔧 Contact Form Configuration

### Webhook Integration
The contact form sends data to your Make.com webhook:
- **Webhook URL**: `https://hook.us2.make.com/esonrv674fe7exxmtxrjy9unqx8ifut5`
- **Data Format**: JSON with all form fields
- **Method**: POST

### Form Fields Captured:
- Full Name
- Email Address
- Phone Number
- Company Domain
- Industry Selection
- Message
- Form Type (general/demo)
- Timestamp
- Source (LeapGen Website Contact Form)

### Testing the Contact Form:
1. **Submit a test form** on the contact page
2. **Check your Make.com scenario** for received data
3. **Verify webhook delivery** in server logs

## 📁 Directory Structure

```
app/
├── out/                    # Static build files (deploy this for static hosting)
├── app/                    # Next.js app directory
│   ├── customer-success/   # Case studies pages
│   ├── use-cases/         # Use case pages
│   ├── products/          # Product pages
│   ├── resources/         # ROI calculators
│   ├── contact/           # Contact form
│   └── api/               # API routes (contact form handler)
├── components/            # React components
├── public/               # Static assets
├── package.json          # Dependencies
├── next.config.js        # Next.js configuration
└── .env                  # Environment variables
```

## 🌐 Domain and DNS Configuration

### DNS Records Needed:
```
A Record: @ → Your server IP
A Record: www → Your server IP
CNAME: * → yourdomain.com (for subdomains)
```

### SSL Certificate:
- **Let's Encrypt** (free, recommended)
- **Cloudflare** (free tier available)
- **Commercial SSL** certificate

## 📊 Performance Optimization

### Already Implemented:
- ✅ **Static site generation** for fast loading
- ✅ **Image optimization** with Next.js
- ✅ **Code splitting** for smaller bundles
- ✅ **CSS optimization** and minification

### Additional Recommendations:
- **CDN setup** (Cloudflare, AWS CloudFront)
- **Gzip compression** on server
- **Browser caching** headers
- **Image compression** for uploaded assets

## 🔍 Testing Checklist

### Before Going Live:
- [ ] **Homepage loads correctly**
- [ ] **All navigation menus work**
- [ ] **Customer Success Stories accessible**
- [ ] **Use case pages load properly**
- [ ] **ROI calculators functional**
- [ ] **Contact form submits successfully**
- [ ] **Social media links work**
- [ ] **Mobile responsive design**
- [ ] **HTTPS certificate active**
- [ ] **404 error page displays**

### Post-Deployment:
- [ ] **Google Analytics setup** (if needed)
- [ ] **Search Console verification**
- [ ] **Sitemap submission**
- [ ] **Performance testing**
- [ ] **Cross-browser testing**

## 🆘 Troubleshooting

### Common Issues:

**404 Errors on Page Refresh**
- **Solution**: Configure URL rewriting (see server config above)

**Contact Form Not Working**
- **Check**: Environment variables set correctly
- **Verify**: Webhook URL is accessible
- **Test**: API route `/api/contact` responds

**Images Not Loading**
- **Check**: File permissions on uploaded assets
- **Verify**: Correct path references in HTML

**Slow Loading**
- **Enable**: Gzip compression
- **Setup**: CDN for static assets
- **Optimize**: Image sizes and formats

## 📞 Support

### If You Need Help:
1. **Check server error logs** for specific issues
2. **Test individual pages** to isolate problems
3. **Verify webhook connectivity** for contact form
4. **Contact hosting provider** for server-specific issues

### Files Included:
- ✅ **Complete source code** (`app/` directory)
- ✅ **Built static files** (`app/out/` directory)
- ✅ **Environment configuration** (`.env` file)
- ✅ **Package dependencies** (`package.json`)
- ✅ **Next.js configuration** (`next.config.js`)

## 🎯 Quick Start for Static Deployment

**Fastest deployment method:**

1. **Extract the zip file**
2. **Upload `app/out/` contents** to your web server's public directory
3. **Configure URL rewriting** (see Apache/Nginx config above)
4. **Test the website** at your domain
5. **Verify contact form** sends to webhook

Your LeapGen website will be live and fully functional!

---

**Need additional files or configurations? Let me know what specific hosting environment you're using, and I can provide more targeted deployment instructions.**

