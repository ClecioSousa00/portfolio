import './globals.css'
import type { Metadata } from 'next'
import { Inter,IBM_Plex_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'],weight:['300','400','500','600'],variable: '--font-inter' })

const ibm = IBM_Plex_Mono({ subsets: ['latin'],weight:['400'],variable: '--font-ibm' })

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Meu portfolio',//adicionar description
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${ibm.variable} font-sans bg-primaryDark text-secondary `}>
        {children}
      </body>
    </html>
  )
}
