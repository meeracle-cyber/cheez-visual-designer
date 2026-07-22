import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Chee_z | Visual Designer',
  description: 'Portfolio website of Chee_z Visual Designer. View my portfolio and get in touch.',
  keywords: ['Visual Designer', 'Brand Designer', 'UI/UX', 'Portfolio', 'Creative Strategist'],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Chee_z | Visual Designer',
    description: 'Portfolio website of Chee_z Visual Designer. Visual Designer | Brand Designer | Creative Strategist',
    type: 'website',
    url: 'https://chee-z.vercel.app',
    images: [
      {
        url: 'https://chee-z.vercel.app/chee-z.jpg',
        width: 576,
        height: 719,
        alt: 'Chee_z Visual Designer',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chee_z | Visual Designer',
    description: 'Portfolio website of Chee_z Visual Designer. Visual Designer | Brand Designer | Creative Strategist',
    images: ['https://chee-z.vercel.app/chee-z.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
