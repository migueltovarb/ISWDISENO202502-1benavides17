import type { Metadata } from 'next'
import { JetBrains_Mono, Rajdhani, Teko } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { PwaRegister } from '@/components/portfolio/pwa-register'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
});

const rajdhani = Rajdhani({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-sans'
});

const teko = Teko({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: '--font-display'
});

export const metadata: Metadata = {
  applicationName: 'Ronald War Portfolio',
  title: 'Ronald Felipe Benavides Bastidas | Portafolio',
  description: 'Desarrollador Frontend y estudiante de Ingeniería de Software. Especializado en crear aplicaciones web funcionales con enfoque en la experiencia del usuario.',
  manifest: '/manifest.webmanifest',
  keywords: ['desarrollador web', 'frontend', 'ciberseguridad', 'portafolio', 'Colombia'],
  authors: [{ name: 'Ronald Felipe Benavides Bastidas' }],
  creator: 'Ronald Felipe Benavides Bastidas',
  themeColor: '#c51f33',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'RonaldApp',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    title: 'Ronald Felipe Benavides Bastidas | Portafolio',
    description: 'Desarrollador Frontend y estudiante de Ingeniería de Software',
    siteName: 'Ronald Felipe B.B. - Portafolio',
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
    <html lang="es" className="scroll-smooth">
      <body className={`${rajdhani.variable} ${teko.variable} ${jetbrainsMono.variable} antialiased`}>
        <PwaRegister />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
