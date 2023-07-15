import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'],weight:['300','400','500','600'],variable: '--font-inter' })


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
      <body className={`${inter.variable} font-sans bg-primaryDark text-secondary `}>
        {children}
      </body>
    </html>
  )
}
