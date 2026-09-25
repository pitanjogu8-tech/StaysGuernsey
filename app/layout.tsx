import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { LetMeAllez } from '@/components/let-me-allez'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.staysguernsey.gg'),
  title: {
    default: 'Stays Guernsey — Where to Stay on Guernsey, Channel Islands',
    template: '%s | Stays Guernsey',
  },
  description:
    'A local guide to the best places to stay on Guernsey — seafront hotels in St Peter Port, coastal cottages, and self-catering apartments. Compare and book with confidence.',
  keywords: [
    'Guernsey hotels',
    'where to stay Guernsey',
    'Guernsey accommodation',
    'St Peter Port hotels',
    'Guernsey cottages',
    'Channel Islands stays',
  ],
  authors: [{ name: 'Stays Guernsey' }],
  openGraph: {
    title: 'Stays Guernsey — Where to Stay on Guernsey',
    description:
      'A local guide to the best places to stay on Guernsey, from seafront hotels to countryside cottages.',
    url: 'https://staysguernsey.gg',
    siteName: 'Stays Guernsey',
    locale: 'en_GB',
    type: 'website',
    images: ['/images/og-guernsey.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stays Guernsey — Where to Stay on Guernsey',
    description:
      'A local guide to the best places to stay on Guernsey, from seafront hotels to countryside cottages.',
    images: ['/images/og-guernsey.jpg'],
  },
  generator: 'v0.app',
  verification: { google: 'KnB8u-a4oHtn3NSdgrrjvXgjm8YLVXSrAc4sy8MhWbE' },
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
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0f3d3e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-[#f6f1e7] font-[family-name:var(--font-inter)] text-[#0f3d3e] antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#0f3d3e] focus:px-4 focus:py-2 focus:text-sm focus:text-[#f6f1e7]"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="min-h-[60vh]">
          {children}
        </main>
        <SiteFooter />
        <LetMeAllez />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
