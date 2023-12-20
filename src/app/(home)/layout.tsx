import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { BaseTypes } from '@/types/BaseTypes'
import { Header } from '@/components/index'
import '@/styles/reset.scss'
import '@/styles/globals.scss'

export const metadata: Metadata = {
  title: 'Designer portoflio',
  description: 'Designer portfolio website',
}

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
})

export default function RootLayout({ children }: BaseTypes) {
  return (
    <html lang="en">
      <body className={ manrope.className }>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
