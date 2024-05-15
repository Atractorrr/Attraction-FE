import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@/public/fonts/fonts.css'
import initMSW from '@/__mocks__'

if (process.env.NODE_ENV !== 'production') {
  initMSW()
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
