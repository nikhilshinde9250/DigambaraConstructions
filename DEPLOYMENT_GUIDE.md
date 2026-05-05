# Deployment Guide - Digambara Construction Website

This guide will help you deploy the Digambara Construction website to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All images (Logo.png, youtube_banner.png) are in the `public/images/` folder
- [ ] Contact information is correct (phone, email, address)
- [ ] All project information is updated
- [ ] The website runs correctly locally (`npm run dev`)
- [ ] Production build works (`npm run build`)

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is the easiest and fastest way to deploy your React application.

#### Steps:

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Install Vercel CLI** (Optional)
   ```bash
   npm install -g vercel
   ```

3. **Deploy via CLI**
   ```bash
   cd DigambaraConstructions
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? **digambara-construction**
   - In which directory is your code located? **.**
   - Want to override settings? **N**

4. **Deploy via GitHub** (Alternative)
   - Push your code to GitHub
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

5. **Custom Domain** (Optional)
   - Go to your project settings in Vercel
   - Navigate to "Domains"
   - Add your custom domain (e.g., digambaraconstruction.com)
   - Follow DNS configuration instructions

**Deployment Time:** ~2 minutes  
**Cost:** Free for personal/small projects

---

### Option 2: Netlify

Netlify is another excellent option with great features.

#### Steps:

1. **Create a Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Deploy via Drag & Drop**
   ```bash
   # Build the project
   npm run build
   ```
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder

3. **Deploy via CLI**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Build the project
   npm run build
   
   # Deploy
   netlify deploy --prod --dir=dist
   ```

4. **Deploy via GitHub** (Recommended)
   - Push your code to GitHub
   - Go to [app.netlify.com/start](https://app.netlify.com/start)
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

5. **Custom Domain**
   - Go to Site settings → Domain management
   - Add custom domain
   - Configure DNS records

**Deployment Time:** ~3 minutes  
**Cost:** Free for personal/small projects

---

### Option 3: GitHub Pages

Host your website for free on GitHub Pages.

#### Steps:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.ts**
   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   
   export default defineConfig({
     plugins: [react()],
     base: '/digambara-construction/', // Replace with your repo name
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` → `/ (root)`
   - Save

6. **Access Your Site**
   - URL: `https://yourusername.github.io/digambara-construction/`

**Deployment Time:** ~5 minutes  
**Cost:** Free

---

### Option 4: Traditional Web Hosting (cPanel/FTP)

If you have traditional web hosting with cPanel or FTP access.

#### Steps:

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Upload Files**
   - The `dist` folder contains all your website files
   - Using FTP client (FileZilla, WinSCP):
     - Connect to your hosting server
     - Navigate to `public_html` or `www` folder
     - Upload all contents from the `dist` folder

3. **Configure .htaccess** (for Apache servers)
   Create a `.htaccess` file in the root directory:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

**Deployment Time:** ~10 minutes  
**Cost:** Depends on hosting provider

---

## 🔧 Post-Deployment Configuration

### 1. Test Your Website

After deployment, test:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Images display properly
- [ ] Forms submit (contact and careers)
- [ ] Responsive design on mobile
- [ ] Dark mode toggle works

### 2. Set Up Analytics (Optional)

Add Google Analytics:

1. Get your Google Analytics tracking ID
2. Add to `index.html` in the `<head>` section:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### 3. Set Up Contact Form Backend

The contact form currently shows a success message but doesn't send emails. To make it functional:

**Option A: Use Formspree**
1. Go to [formspree.io](https://formspree.io)
2. Create a form
3. Update the form action in `Contact.tsx` and `Careers.tsx`

**Option B: Use EmailJS**
1. Go to [emailjs.com](https://www.emailjs.com)
2. Set up email service
3. Install EmailJS: `npm install @emailjs/browser`
4. Integrate in your forms

**Option C: Build Backend API**
- Create a Node.js/Express backend
- Set up email service (Nodemailer)
- Deploy backend separately

### 4. SEO Optimization

Update `index.html` with proper meta tags:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Digambara Construction - Building Dreams with Excellence</title>
  <meta name="description" content="Digambara Construction - Leading construction company in Beed, Maharashtra with 25+ years of experience in residential, commercial, and industrial projects." />
  <meta name="keywords" content="construction, building, Beed, Maharashtra, residential, commercial, industrial" />
  <meta property="og:title" content="Digambara Construction" />
  <meta property="og:description" content="Building Dreams with Excellence - 25+ years of construction expertise" />
  <meta property="og:image" content="/images/Logo.png" />
</head>
```

### 5. SSL Certificate

Ensure your website uses HTTPS:
- **Vercel/Netlify:** Automatic SSL
- **GitHub Pages:** Automatic SSL
- **Traditional Hosting:** Request SSL certificate from hosting provider or use Let's Encrypt

---

## 🐛 Troubleshooting

### Issue: Blank page after deployment

**Solution:** Check the base URL in `vite.config.ts`
```typescript
base: '/', // For root domain
// or
base: '/subdirectory/', // For subdirectory
```

### Issue: Images not loading

**Solution:** 
- Ensure images are in `public/images/` folder
- Check image paths start with `/images/` not `./images/`
- Verify images were included in the build

### Issue: 404 on page refresh

**Solution:** Configure server for SPA routing
- **Vercel:** Create `vercel.json`:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```
- **Netlify:** Create `_redirects` file in `public/`:
  ```
  /*    /index.html   200
  ```

### Issue: Build fails

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📞 Support

If you encounter any issues during deployment:
- Email: info@digambaraconstruction.com
- Phone: +91 9561231865

---

## ✅ Deployment Checklist

- [ ] Code is pushed to Git repository
- [ ] Production build tested locally
- [ ] Images are optimized and in correct folder
- [ ] Contact information is correct
- [ ] Deployment platform selected
- [ ] Website deployed successfully
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] All pages tested on live site
- [ ] Mobile responsiveness verified
- [ ] Forms tested
- [ ] Analytics set up (optional)
- [ ] SEO meta tags added

---

**Congratulations! Your website is now live! 🎉**
