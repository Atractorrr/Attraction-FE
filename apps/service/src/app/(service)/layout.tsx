import type { Metadata } from 'next'
import Script from 'next/script'
import type { PropsWithChildren } from 'react'

import '@/app/style/font.css'
import '@attraction/ds-core/dist/token.css'
import '@attraction/ds-core/dist/component.css' // TODO: 스타일 캡슐화 적용 시 제거
import '@attraction/ds-core/dist/index.css'
import '@attraction/design-system/dist/index.css' // TODO: 디자인 시스템 개편 시 제거
import '@/app/style/index.css'

import { useSession } from '@/entities/auth'
import Provider from './provider'

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

export default async function ServiceRootLayout({
  children,
}: PropsWithChildren) {
  const authProps = await useSession()

  return (
    <body className="service" suppressHydrationWarning>
      <script src="/script/theme.js" />
      <Provider {...authProps}>{children}</Provider>
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script
            src="https://cdn.amplitude.com/libs/analytics-browser-2.7.4-min.js.gz"
            strategy="beforeInteractive"
          />
          <Script
            src="https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.4.1-min.js.gz"
            strategy="beforeInteractive"
          />
          <Script
            src="https://cdn.amplitude.com/libs/plugin-autocapture-browser-0.9.0-min.js.gz"
            strategy="beforeInteractive"
          />
          <Script src="/script/amplitude.js" strategy="afterInteractive" />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-1WN6EE9VE8%22%3E"
            strategy="beforeInteractive"
          />
          <Script src="/script/gtag.js" strategy="afterInteractive" />
        </>
      )}
    </body>
  )
}
