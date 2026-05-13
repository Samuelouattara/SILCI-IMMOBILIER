import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'SILCI-IMMOBILIER | La Crédibilité notre quotidien',
  description: 'SILCI-IMMOBILIER - Achat, Vente de Terrain, Aménagement Foncier, Construction et Suivi de Dossier, Location d\'Engins à Grand-Bassam, Côte d\'Ivoire',
  generator: 'v0.app',
  keywords: ['immobilier', 'terrain', 'construction', 'lotissement', 'Grand-Bassam', 'Côte d\'Ivoire', 'SILCI'],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
