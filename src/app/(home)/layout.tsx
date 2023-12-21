import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { BaseTypes } from '@/types/BaseTypes'
import '@/styles/reset.scss'
import '@/styles/globals.scss'
import { Header } from '@/components/index'

export const metadata: Metadata = {
  title: 'Designer portoflio',
  description: 'Designer Portfolio Website Template for a Personal Brand',
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
