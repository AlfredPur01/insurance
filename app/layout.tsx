import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://aibltd.insure'),
  title: {
    default: 'Advocate Insurance Brokers | Structured Risk Advisory for Complex Industries',
    template: '%s | Advocate Insurance Brokers',
  },
  description:
    'Advocate Insurance Brokers Ltd — risk advisory, insurance placement, and claims advocacy for energy, marine, aviation, and engineering infrastructure.',
  keywords: [
    'insurance broker Nigeria',
    'risk advisory',
    'marine insurance',
    'aviation insurance',
    'energy insurance',
    'claims advocacy',
    'Advocate Insurance Brokers',
  ],
  authors: [{ name: 'Advocate Insurance Brokers Ltd' }],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    siteName: 'Advocate Insurance Brokers',
    title: 'Advocate Insurance Brokers | Structured Risk Advisory for Complex Industries',
    description:
      'Advocate Insurance Brokers Ltd — risk advisory, insurance placement, and claims advocacy for energy, marine, aviation, and engineering infrastructure.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'InsuranceAgency'],
  name: 'Advocate Insurance Brokers Ltd',
  alternateName: 'Advocate Insurance Brokers',
  description:
    'Independent insurance brokerage and risk advisory firm specialising in risk advisory, insurance placement, and claims advocacy for complex industries.',
  url: 'https://aibltd.insure',
  logo: 'https://aibltd.insure/images/logo-aib.png',
  telephone: ['+2349131036089', '+2348087281548'],
  email: 'info@aibltd.insure',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No 27a Babatunde Jose, Off Adetokunbo Ademola',
    addressLocality: 'Victoria Island, Lagos',
    addressCountry: 'NG',
  },
  areaServed: ['Nigeria', 'Africa'],
  serviceType: ['Risk Advisory', 'Insurance Placement', 'Claims Advocacy'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
