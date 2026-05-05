# Digambara Construction Website

A professional, modern website for Digambara Construction, showcasing projects, services, and company information.

## 🏗️ About

Digambara Construction is a leading construction company based in Beed, Maharashtra, with over 25 years of experience in delivering quality residential, commercial, and industrial projects.

**Founder:** Baliram Shinde  
**Location:** Beed, Navgan Rajuri, Maharashtra 431122  
**Contact:** +91 9561231865  
**Email:** info@digambaraconstruction.com

## ✨ Features

- **Modern Design:** Clean, professional UI with golden-white theme and dark mode support
- **Responsive:** Fully responsive design that works on all devices
- **Project Showcase:** Display ongoing and completed projects with detailed information
- **About Us:** Company story, vision, mission, and founder information
- **Contact Form:** Easy-to-use contact form for inquiries
- **Careers Page:** Job listings and application form for potential candidates
- **Fast Performance:** Built with React and Vite for optimal performance

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd DigambaraConstructions
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Building for Production

To create a production build:

```bash
npm run build
# or
pnpm build
```

The built files will be in the `dist` directory.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.ts` with your repository name:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

## 📁 Project Structure

```
DigambaraConstructions/
├── public/
│   └── images/
│       ├── Logo.png
│       └── youtube_banner.png
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Layout.tsx
│   │   │   └── ui/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── AboutUs.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── OngoingProjects.tsx
│   │   │   ├── CompletedProjects.tsx
│   │   │   └── Careers.tsx
│   │   ├── App.tsx
│   │   └── routes.tsx
│   ├── styles/
│   │   └── construction.css
│   └── main.tsx
├── package.json
└── vite.config.ts
```

## 🎨 Customization

### Colors

The website uses CSS variables for theming. You can customize colors in `src/styles/construction.css`:

```css
:root {
  --color-primary: #d4af37; /* Golden */
  --color-secondary: #ffffff; /* White */
  /* ... other colors */
}
```

### Content

- **Projects:** Edit `src/app/pages/OngoingProjects.tsx` and `CompletedProjects.tsx`
- **About Us:** Edit `src/app/pages/AboutUs.tsx`
- **Contact Info:** Edit `src/app/components/Layout.tsx` and `Contact.tsx`
- **Careers:** Edit `src/app/pages/Careers.tsx`

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Routing
- **Tailwind CSS** - Utility-first CSS
- **Radix UI** - Accessible components
- **Lucide React** - Icons

## 📱 Pages

1. **Home** - Hero section, stats, featured projects
2. **Ongoing Projects** - Current construction projects with progress
3. **Completed Projects** - Successfully delivered projects
4. **About Us** - Company story, vision, mission, and founder details
5. **Contact** - Contact form and company information
6. **Careers** - Job openings and application form

## 📞 Support

For any questions or support, please contact:
- **Email:** info@digambaraconstruction.com
- **Phone:** +91 9561231865

## 📄 License

© 2026 Digambara Construction. All rights reserved.

---

Built with ❤️ by Digambara Construction Team
