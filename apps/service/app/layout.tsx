import type { Metadata } from 'next'

import '@/public/fonts/fonts.css'
import './globals.css'

import initMSW from '@/__mocks__'
import { QueryProvider } from '@/shared/lib'

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
      <body className="bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
