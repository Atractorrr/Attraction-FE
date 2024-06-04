'use client'

import { usePathname } from 'next/navigation'
import { Footer, SideBar } from '@/widgets/side-bar'
import { Header } from '@/widgets/header'
import { PUBLIC_PATH } from '@/entities/auth'

export default function Widget({
  children,
  isLogin,
}: Readonly<{
  children: React.ReactNode
  isLogin: boolean
}>) {
  const pathname = usePathname()
  const isPublicPath = PUBLIC_PATH.some((path) => pathname.startsWith(path))

  return isPublicPath ? (
    <div className="flex h-dvh min-h-[768px] w-full items-center justify-center lg:p-16 xl:p-20">
      {children}
    </div>
  ) : (
    <>
      <SideBar />
      <div className="pb-40 md:ml-20 md:px-10 md:pt-10 lg:pb-20 2xl:ml-72">
        <div className="mx-auto w-full max-w-7xl">
          <Header isLogin={isLogin} />
          {children}
          <div className="mt-16 md:mt-0 md:hidden">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
