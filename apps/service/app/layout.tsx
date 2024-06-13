import { cookies } from 'next/headers'
import type { Metadata } from 'next'

import '@/public/fonts/fonts.css'
import './globals.css'
import '@attraction/design-system/dist/index.css'

import initMSW from '@/__mocks__'
import Provider from './provider'
import Widget from './widget'

if (process.env.NODE_ENV !== 'production') {
  initMSW()
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_FE_URL!),
  title: {
    template: '%s | Attraction',
    default: 'Attraction',
  },
  description: '나만의 뉴스레터 관리 서비스',
  keywords: [
    'Attraction',
    'attraction',
    '어트랙션',
    '뉴스레터',
    '뉴스레터 관리 툴',
    '뉴스레터 관리 서비스',
    '뉴스레터 정리',
    '뉴스레터 관리',
    '뉴스레터 관리법',
    '뉴스레터 관리하는 방법',
    'newsletter',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Attraction',
    locale: 'ko_KR',
    images: '/images/og-image.jpg',
  },
  publisher: 'Team Attractorrr',
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isLogin = cookies().has('accessToken')

  return (
    <html lang="ko">
      <body
        className="relative min-h-dvh min-w-[280px] bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-100"
        suppressHydrationWarning>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/script/theme.js" />
        <Provider>
          <Widget isLogin={isLogin}>{children}</Widget>
        </Provider>
      </body>
    </html>
  )
}
