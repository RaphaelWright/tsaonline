# 🚀 Quick Start Guide

Get your Next.js app running in 3 simple steps!

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including:

- Next.js 15
- React 19
- Tailwind CSS
- Framer Motion
- TypeScript
- And more...

⏱️ **Estimated time:** 2-5 minutes

## Step 2: Run Development Server

```bash
npm run dev
```

Your app will be available at: **http://localhost:3000**

✅ **You're done!** The app is now running.

---

## 📁 Project Overview

This is a Next.js 15 application using:

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Components:** Custom + shadcn/ui

## 🎯 Available Scripts

| Command              | Description               |
| -------------------- | ------------------------- |
| `npm run dev`        | Start development server  |
| `npm run build`      | Create production build   |
| `npm run start`      | Run production build      |
| `npm run lint`       | Check for linting errors  |
| `npm run lint:fix`   | Fix linting errors        |
| `npm run type-check` | Check TypeScript types    |
| `npm run format`     | Format code with Prettier |

## 📂 Key Directories

```
tsaonline/
├── app/              # Next.js pages and layouts
├── components/       # React components
├── lib/             # Utility functions
└── public/          # Static assets
```

## 🎨 Features

✨ **Single-page application** with smooth page transitions  
✨ **Custom cursor** that follows mouse movement  
✨ **Blueprint theme** with animated grid backgrounds  
✨ **Fully responsive** design for all devices  
✨ **Type-safe** with TypeScript  
✨ **Image fallbacks** for failed image loads

## 📄 Pages

Navigate through these pages in the app:

- **Home** - Hero section and service overview
- **About** - Company philosophy and team
- **Portfolio** - Project showcase with filters
- **Contact** - Contact form and information

## 🔧 Customization

### Change Colors

Edit `app/globals.css` - look for CSS variables under `:root`

### Add New Pages

1. Create component in `components/`
2. Import in `app/page.tsx`
3. Add to navigation in `components/Navigation.tsx`

### Modify Content

All content is in the respective page components:

- `components/HomePage.tsx`
- `components/AboutPage.tsx`
- `components/PortfolioPage.tsx`
- `components/ContactPage.tsx`

## 🚀 Deploy

### Deploy to Vercel (Easiest)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

### Other Options

- **Netlify:** Connect Git repo
- **Railway:** Use Next.js template
- **Docker:** Build container

## 💡 Pro Tips

- **Hot Reload:** Changes appear automatically
- **VS Code:** Install recommended extensions for best experience
- **TypeScript:** Get autocomplete and type checking
- **Tailwind:** Use utility classes directly in JSX

## 📚 Documentation

Need more info? Check out:

- `SETUP.md` - Detailed setup instructions
- `MIGRATION_NOTES.md` - What changed from original
- `README.md` - Full project documentation

## ❓ Common Issues

### Port 3000 in use?

```bash
npm run dev -- -p 3001
```

### Dependencies not installing?

```bash
npm cache clean --force
npm install
```

### Build errors?

```bash
npm run type-check  # Check for TypeScript errors
npm run lint        # Check for ESLint errors
```

## 🎉 That's it!

You're all set up and ready to build. Happy coding!

---

**Questions?** Check the documentation files or Next.js docs at [nextjs.org](https://nextjs.org/docs)
