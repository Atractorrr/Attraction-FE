import type { Metadata } from 'next'

import '@/public/fonts/fonts.css'
import './globals.css'

import initMSW from '@/__mocks__'
import { Footer, SideBar } from '@/widgets/side-bar'
import { Header } from '@/widgets/header'
import { headers } from 'next/headers'
import { PUBLIC_PATH } from '@/entities/auth'
import Provider from './provider'

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
  const headersList = headers()
  const headerPathname = headersList.get('x-pathname') || ''
  const isPublicPath = PUBLIC_PATH.some((path) =>
    headerPathname.startsWith(path),
  )

  return (
    <html lang="ko">
      <body
        className="relative min-h-dvh min-w-[280px] bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-100"
        suppressHydrationWarning>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/script/theme.js" />
        <Provider>
          {isPublicPath ? null : <SideBar />}
          <div className="pb-40 md:ml-20 md:px-10 md:pt-10 lg:pb-20 2xl:ml-72">
            <div className="mx-auto w-full max-w-7xl">
              {isPublicPath ? null : <Header />}
              {children}
              {isPublicPath ? null : (
                <div className="mt-16 md:mt-0 md:hidden">
                  <Footer />
                </div>
              )}
            </div>
          </div>
        </Provider>
      </body>
    </html>
  )
}
