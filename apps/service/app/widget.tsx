'use client'

import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'
import { Footer, SideBar } from '@/widgets/menu'
import { PUBLIC_PATH } from '@/entities/auth'

export default function Widget({ children }: PropsWithChildren) {
  const pathname = usePathname()
  const isPublicPath = PUBLIC_PATH.some((path) => pathname.startsWith(path))

  return isPublicPath ? (
    <div className="flex h-auto min-h-dvh w-full items-center justify-center lg:p-12">
      {children}
    </div>
  ) : (
    <>
      <SideBar />
      <div className="pb-40 md:ml-20 md:px-10 md:pt-10 lg:pb-20 2xl:ml-72">
        <div className="mx-auto w-full max-w-7xl">
          {children}
          <div className="mt-16 md:mt-0 md:hidden">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
