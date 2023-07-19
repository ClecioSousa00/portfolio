import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'],weight:['300','400','500','600'],variable: '--font-inter' })


export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Confira meu portfólio para ver meus projetos de desenvolvimento front-end e minha experiência em criação de interfaces. Entre em contato comigo para discutir oportunidades de colaboração.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className='scroll-smooth scrollbar-thin scrollbar-thumb-violetAlt scrollbar-track-secondary'>
      <body className={`${inter.variable} font-sans bg-primaryDark text-secondary`}>
        {children}
      </body>
    </html>
  )
}
