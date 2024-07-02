import type { PropsWithChildren } from 'react'

import { Footer, SideBar } from '@/widgets/menu'

export default async function StaticLayout({ children }: PropsWithChildren) {
  return (
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
