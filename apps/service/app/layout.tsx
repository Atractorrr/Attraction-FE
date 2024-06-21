import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import '@/public/fonts/fonts.css'
import './globals.css'
import '@attraction/design-system/dist/index.css'

import initMSW from '@/__mocks__'
import { useToken } from '@/entities/auth'
import Provider from './provider'
import Widget from './widget'

if (process.env.NODE_ENV !== 'production') {
  initMSW()
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_FE_URL!),
  title: {
    template: '%s - Attraction',
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

export default async function RootLayout({ children }: PropsWithChildren) {
  const { ...props } = await useToken()
  return (
    <html lang="ko">
      <head>
        <link
          rel="apple-touch-startup-image"
          href="/splashImages/ipad_splash.png"
          media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splashImages/ipadpro1_splash.png"
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splashImages/ipadpro2_splash.png"
          media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splashImages/ipadpro3_splash.png"
          media="(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splashImages/iphone5_splash.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splashImages/iphone6_splash.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splashImages/iphoneplus_splash.png"
          media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splashImages/iphonex_splash.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splashImages/iphonexr_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splashImages/iphonexsmax_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
      </head>
      <body
        className="relative min-h-dvh min-w-[280px] bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-100"
        suppressHydrationWarning>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/script/theme.js" />
        <Provider {...props}>
          <Widget>{children}</Widget>
        </Provider>
      </body>
    </html>
  )
}
