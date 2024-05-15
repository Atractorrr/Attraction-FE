import type { Metadata } from 'next'
import '@/public/fonts/fonts.css'
import './globals.css'
import initMSW from '@/__mocks__'

if (process.env.NODE_ENV !== 'production') {
  initMSW()
}

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
      <body>{children}</body>
    </html>
  )
}
