# Complete Developer Setup Guide - LeapGen Website

## 🎯 Answers to Your Questions

### Q1: How to run it locally?
**Answer**: Use `npm run dev` after installing dependencies (see steps below)

### Q2: Where are the dependency files?
**Answer**: `package.json` is in the `app/` directory, not the root

### Q3: Why is npm install failing?
**Answer**: You need to run it from the `app/` directory where `package.json` is located

### Q4: What command builds production files?
**Answer**: `npm run build` creates static files in the `out/` directory

---

## 🚀 Complete Step-by-Step Setup

### Prerequisites
- **Node.js 18+** (Download from nodejs.org)
- **npm 8+** (comes with Node.js)
- **Git** (optional, for version control)

### Step 1: Extract and Navigate
```bash
# Extract the zip file
unzip leapgen_website_FINAL_DEPLOYMENT_PACKAGE.zip

# Navigate to the app directory (IMPORTANT!)
cd app/
```

### Step 2: Install Dependencies
```bash
# Install all required packages
npm install

# If you get permission errors on Mac/Linux:
sudo npm install

# Alternative using yarn:
yarn install
```

### Step 3: Set Up Environment Variables
```bash
# Create environment file
cp .env.example .env

# Or create .env manually with:
echo "WEBHOOK_URL=https://hook.us2.make.com/esonrv674fe7exxmtxrjy9unqx8ifut5" > .env
echo "NODE_ENV=development" >> .env
```

### Step 4: Run Development Server
```bash
# Start the development server
npm run dev

# Server will start at http://localhost:3000
```

### Step 5: Build for Production
```bash
# Create production build
npm run build

# Static files will be created in the 'out/' directory
```

### Step 6: Test Production Build Locally
```bash
# Start production server
npm start

# Or serve static files with any web server
npx serve out/
```

---

## 📁 Correct Directory Structure

```
leapgen_website_FINAL_DEPLOYMENT_PACKAGE/
├── app/                          ← WORK FROM HERE
│   ├── package.json             ← Dependencies file
│   ├── next.config.js           ← Next.js configuration
│   ├── .env                     ← Environment variables
│   ├── app/                     ← Source code
│   ├── components/              ← React components
│   ├── public/                  ← Static assets
│   ├── out/                     ← Built files (after npm run build)
│   └── node_modules/            ← Installed packages (after npm install)
├── DEPLOYMENT_GUIDE_FOR_WEB_DEVELOPER.md
└── QUICK_DEPLOYMENT_CHECKLIST.md
```

---

## 🔧 Common Issues and Solutions

### Issue 1: "package.json not found"
**Problem**: Running npm commands from wrong directory
**Solution**: Make sure you're in the `app/` directory
```bash
cd app/
ls -la package.json  # Should show the file
npm install
```

### Issue 2: "npm install fails"
**Problem**: Node.js version or permissions
**Solutions**:
```bash
# Check Node.js version (need 18+)
node --version

# Clear npm cache
npm cache clean --force

# Try with different registry
npm install --registry https://registry.npmjs.org/

# On Windows, run as Administrator
# On Mac/Linux, try with sudo
sudo npm install
```

### Issue 3: "Build fails"
**Problem**: Missing dependencies or environment variables
**Solutions**:
```bash
# Ensure all dependencies are installed
npm install

# Create .env file
echo "WEBHOOK_URL=https://hook.us2.make.com/esonrv674fe7exxmtxrjy9unqx8ifut5" > .env

# Try building again
npm run build
```

### Issue 4: "Port already in use"
**Problem**: Another service using port 3000
**Solutions**:
```bash
# Use different port
npm run dev -- --port 3001

# Or kill existing process
lsof -ti:3000 | xargs kill -9  # Mac/Linux
netstat -ano | findstr :3000   # Windows
```

---

## 🌐 Deployment Options

### Option A: Static Deployment (Easiest)
```bash
# 1. Build the static files
npm run build

# 2. Upload 'out/' directory contents to your web server
# 3. Configure URL rewriting (see server config below)
```

### Option B: Node.js Deployment
```bash
# 1. Upload entire 'app/' directory to server
# 2. Install dependencies on server
npm install --production

# 3. Build on server
npm run build

# 4. Start with process manager
npm start
# or
pm2 start npm --name "leapgen" -- start
```

---

## ⚙️ Server Configuration

### Apache (.htaccess in web root)
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^.]+)$ $1.html [L]

# Security headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
```

### Nginx
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/app/out;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ =404;
    }
}
```

---

## 🧪 Testing Your Setup

### Local Development Test
```bash
cd app/
npm install
npm run dev
# Visit http://localhost:3000
```

### Production Build Test
```bash
cd app/
npm run build
npm start
# Visit http://localhost:3000
```

### Static Files Test
```bash
cd app/
npm run build
npx serve out/
# Visit http://localhost:3000
```

---

## 📋 Complete Command Reference

### Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Check code quality
```

### Useful Commands
```bash
npm list            # Show installed packages
npm outdated        # Check for updates
npm audit           # Security check
npm cache clean     # Clear cache
```

---

## 🔍 Verification Checklist

After setup, verify these work:

- [ ] **Homepage loads**: http://localhost:3000
- [ ] **Navigation works**: All dropdown menus
- [ ] **Customer Success Stories**: /customer-success
- [ ] **Use Cases**: /use-cases/finance/surround-ai
- [ ] **ROI Calculators**: /resources/surroundai-roi-calculator
- [ ] **Contact Form**: /contact (test submission)
- [ ] **Mobile responsive**: Test on phone/tablet

---

## 🆘 Still Having Issues?

### Debug Steps:
1. **Check Node.js version**: `node --version` (need 18+)
2. **Verify you're in app/ directory**: `pwd` should show .../app
3. **Check package.json exists**: `ls -la package.json`
4. **Clear everything and restart**:
   ```bash
   rm -rf node_modules/
   rm -rf .next/
   rm -rf out/
   npm cache clean --force
   npm install
   npm run dev
   ```

### Get Help:
- **Check console errors** in browser developer tools
- **Check terminal output** for error messages
- **Verify file permissions** on uploaded files
- **Test with simple HTTP server** first

---

## 🎯 Quick Success Path

**For fastest success, follow this exact sequence:**

```bash
# 1. Extract zip file
unzip leapgen_website_FINAL_DEPLOYMENT_PACKAGE.zip

# 2. Go to app directory
cd app/

# 3. Install dependencies
npm install

# 4. Start development
npm run dev

# 5. Open browser to http://localhost:3000
```

**If this works, you're ready to build for production!**

```bash
# 6. Build for production
npm run build

# 7. Deploy 'out/' directory contents to your web server
```

---

**This guide covers everything needed to get the LeapGen website running locally and deployed to production. Follow the steps in order, and you'll have a working website!**

