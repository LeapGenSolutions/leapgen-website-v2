# Troubleshooting Guide - LeapGen Website

## 🚨 Most Common Issues

### 1. "package.json not found" Error

**Symptoms:**
```
npm ERR! enoent ENOENT: no such file or directory, open 'package.json'
```

**Cause:** Running npm commands from wrong directory

**Solution:**
```bash
# Make sure you're in the app/ directory
cd app/
ls -la package.json  # Should show the file
npm install
```

### 2. "npm install" Fails

**Symptoms:**
```
npm ERR! code EACCES
npm ERR! permission denied
```

**Solutions:**

**Option A - Fix permissions (Mac/Linux):**
```bash
sudo chown -R $(whoami) ~/.npm
npm install
```

**Option B - Use different npm registry:**
```bash
npm install --registry https://registry.npmjs.org/
```

**Option C - Clear cache and retry:**
```bash
npm cache clean --force
rm -rf node_modules/
npm install
```

**Option D - Use yarn instead:**
```bash
npm install -g yarn
yarn install
```

### 3. Node.js Version Issues

**Symptoms:**
```
error: The engine "node" is incompatible with this module
```

**Check your version:**
```bash
node --version
npm --version
```

**Required versions:**
- Node.js: 18.0.0 or higher
- npm: 8.0.0 or higher

**Solution - Update Node.js:**
- Download from: https://nodejs.org/
- Or use nvm (Mac/Linux):
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18
```

### 4. Build Fails

**Symptoms:**
```
Error: Failed to build
TypeError: Cannot read property...
```

**Solutions:**

**Step 1 - Clean everything:**
```bash
rm -rf node_modules/
rm -rf .next/
rm -rf out/
npm cache clean --force
```

**Step 2 - Reinstall:**
```bash
npm install
```

**Step 3 - Create environment file:**
```bash
cp .env.example .env
# or
echo "WEBHOOK_URL=https://hook.us2.make.com/esonrv674fe7exxmtxrjy9unqx8ifut5" > .env
```

**Step 4 - Try building:**
```bash
npm run build
```

### 5. Port Already in Use

**Symptoms:**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solutions:**

**Option A - Use different port:**
```bash
npm run dev -- --port 3001
```

**Option B - Kill existing process:**

**Mac/Linux:**
```bash
lsof -ti:3000 | xargs kill -9
```

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

### 6. Pages Show 404 After Deployment

**Symptoms:**
- Homepage works
- Direct page URLs return 404 errors
- Navigation links broken

**Cause:** Missing URL rewriting configuration

**Solution - Add to your web server:**

**Apache (.htaccess):**
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^.]+)$ $1.html [L]
```

**Nginx:**
```nginx
location / {
    try_files $uri $uri.html $uri/ =404;
}
```

### 7. Contact Form Not Working

**Symptoms:**
- Form submits but no data received
- Console errors about webhook

**Solutions:**

**Check environment variables:**
```bash
cat .env
# Should show: WEBHOOK_URL=https://hook.us2.make.com/esonrv674fe7exxmtxrjy9unqx8ifut5
```

**Test webhook manually:**
```bash
curl -X POST https://hook.us2.make.com/esonrv674fe7exxmtxrjy9unqx8ifut5 \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}'
```

**Check browser console:**
- Open Developer Tools (F12)
- Look for errors in Console tab
- Check Network tab for failed requests

### 8. Images Not Loading

**Symptoms:**
- Broken image icons
- 404 errors for image files

**Solutions:**

**Check file permissions:**
```bash
chmod -R 755 public/
chmod -R 755 out/
```

**Verify image paths:**
- Images should be in `public/` directory
- Referenced as `/image.jpg` not `./public/image.jpg`

### 9. Slow Loading or Performance Issues

**Solutions:**

**Enable compression (Apache):**
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
```

**Enable caching:**
```apache
<FilesMatch "\.(css|js|png|jpg|jpeg|gif|ico|svg)$">
    ExpiresActive On
    ExpiresDefault "access plus 1 year"
</FilesMatch>
```

### 10. TypeScript Errors

**Symptoms:**
```
Type error: Cannot find module...
Property does not exist on type...
```

**Solutions:**

**Install TypeScript:**
```bash
npm install -g typescript
```

**Check tsconfig.json:**
```bash
cat tsconfig.json
# Should exist in app/ directory
```

**Ignore TypeScript errors for build:**
```bash
# Add to next.config.js
typescript: {
  ignoreBuildErrors: true,
}
```

---

## 🔍 Diagnostic Commands

### Check System Requirements
```bash
node --version    # Should be 18+
npm --version     # Should be 8+
pwd              # Should end with /app
ls -la package.json  # Should exist
```

### Check Installation
```bash
npm list         # Show installed packages
npm outdated     # Check for updates
npm audit        # Security check
```

### Check Build Process
```bash
npm run lint     # Check code quality
npm run build    # Test build process
ls -la out/      # Check output files
```

### Check Server
```bash
netstat -tulpn | grep :3000  # Check if port is used
ps aux | grep node           # Check running Node processes
```

---

## 🆘 Emergency Reset

If everything is broken, try this complete reset:

```bash
# 1. Stop all Node processes
pkill -f node

# 2. Clean everything
rm -rf node_modules/
rm -rf .next/
rm -rf out/
rm -rf package-lock.json

# 3. Clear npm cache
npm cache clean --force

# 4. Reinstall everything
npm install

# 5. Create environment file
cp .env.example .env

# 6. Try again
npm run dev
```

---

## 📞 Getting Help

### Before asking for help, provide:

1. **Your system info:**
   ```bash
   node --version
   npm --version
   uname -a  # Mac/Linux
   ver       # Windows
   ```

2. **Error messages:**
   - Copy the complete error from terminal
   - Include browser console errors (F12)

3. **What you tried:**
   - List the exact commands you ran
   - Include any modifications you made

4. **File structure:**
   ```bash
   ls -la
   pwd
   ```

### Common Error Patterns

**"Cannot find module"** = Missing dependencies → `npm install`
**"ENOENT: no such file"** = Wrong directory → `cd app/`
**"EADDRINUSE"** = Port in use → Use different port
**"Permission denied"** = File permissions → `sudo` or fix permissions
**"404 on refresh"** = Missing URL rewriting → Configure server

---

**Most issues are solved by ensuring you're in the right directory (`app/`) and have the correct Node.js version (18+). Follow the diagnostic steps above to identify and fix problems quickly.**

