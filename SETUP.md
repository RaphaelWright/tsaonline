# The Startup Architects - Setup Guide

This guide will help you set up the project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.17 or higher) - [Download here](https://nodejs.org/)
- **npm**, **yarn**, or **pnpm** (package manager)
- **Git** (for version control)

## Installation Steps

### 1. Install Dependencies

Navigate to the project directory and install the required packages:

```bash
npm install
# or
yarn install
# or
pnpm install
```

This will install:

- Next.js 15 (React framework)
- React 19
- Framer Motion (animations)
- Tailwind CSS (styling)
- Lucide React (icons)
- TypeScript
- And other dependencies

### 2. Environment Setup

If you need environment variables, copy the example file:

```bash
# This is optional - only if you need custom environment variables
cp .env.example .env.local
```

Edit `.env.local` with your own values if needed.

### 3. Run the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

To create a production build:

```bash
npm run build
npm run start
# or
yarn build
yarn start
# or
pnpm build
pnpm start
```

## Project Structure

```
tsaonline/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main application component
│   └── globals.css          # Global styles and Tailwind
│
├── components/              # React components
│   ├── HomePage.tsx         # Home page component
│   ├── AboutPage.tsx        # About page component
│   ├── PortfolioPage.tsx    # Portfolio page component
│   ├── ContactPage.tsx      # Contact page component
│   ├── Navigation.tsx       # Navigation bar
│   ├── CustomCursor.tsx     # Custom cursor effect
│   ├── figma/              # Figma-exported components
│   │   └── ImageWithFallback.tsx
│   └── ui/                 # shadcn/ui components
│       └── ...             # Various UI components
│
├── lib/                    # Utility functions
│   └── utils.ts           # Class name utilities (cn)
│
├── public/                # Static assets (images, fonts, etc.)
│
├── package.json           # Project dependencies and scripts
├── next.config.mjs        # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── postcss.config.mjs     # PostCSS configuration
├── components.json        # shadcn/ui configuration
└── .eslintrc.json         # ESLint configuration
```

## Key Features

1. **Client-Side Routing**: Single-page application with smooth transitions
2. **Custom Cursor**: Unique cursor design that follows mouse movement
3. **Blueprint Theme**: Architectural grid animations throughout
4. **Responsive Design**: Mobile-first approach with adaptive layouts
5. **Framer Motion**: Smooth animations and page transitions
6. **Image Optimization**: Fallback system for failed image loads
7. **Type Safety**: Full TypeScript implementation

## Development Tips

### Hot Reload

Next.js includes hot module replacement - your changes will appear automatically without refreshing the page.

### Component Development

Components are located in the `components/` directory. Each page is a separate component that can be navigated to via the Navigation component.

### Styling

- Global styles: `app/globals.css`
- Tailwind utilities: Use directly in className
- Custom CSS variables: Defined in `app/globals.css` under `:root`

### Adding New Pages

To add a new page:

1. Create a component in `components/` (e.g., `NewPage.tsx`)
2. Import it in `app/page.tsx`
3. Add it to the navigation in `components/Navigation.tsx`
4. Add a case in the `renderPage()` switch statement

### Custom Animations

Use Framer Motion for animations:

```tsx
import { motion } from 'motion/react';

<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
  Content
</motion.div>;
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, Next.js will prompt you to use another port, or you can specify one:

```bash
npm run dev -- -p 3001
```

### Module Not Found

If you see module errors after installation:

```bash
# Clear the cache and reinstall
rm -rf node_modules
rm package-lock.json  # or yarn.lock or pnpm-lock.yaml
npm install
```

### Build Errors

Make sure all dependencies are installed and your Node.js version is compatible:

```bash
node --version  # Should be v18.17 or higher
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

- **Netlify**: Connect your Git repository
- **Railway**: Use the Next.js template
- **Docker**: Use the provided Dockerfile (if created)

## Support

For issues or questions:

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Check the [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Check the [Framer Motion Documentation](https://www.framer.com/motion/)

## License

Copyright © 2025 The Startup Architects. All rights reserved.
