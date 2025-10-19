import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'The Startup Architects | Building the Future',
  description: 'Consulting. Development. Marketing. Architecture for Innovation.',
  keywords: [
    'startup',
    'consulting',
    'development',
    'marketing',
    'web development',
    'software development',
  ],
  authors: [{ name: 'The Startup Architects' }],
  openGraph: {
    title: 'The Startup Architects | Building the Future',
    description: 'Consulting. Development. Marketing. Architecture for Innovation.',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Startup Architects',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Startup Architects | Building the Future',
    description: 'Consulting. Development. Marketing. Architecture for Innovation.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
