'use client'

import { useEffect, useState } from 'react'
import {
  ChevronDoubleLeftOutline,
  ChevronDoubleRightOutline,
} from '@attraction/icons'
import {
  useCheckDevice,
  useClickedOutsideOfElement,
  useDebounce,
} from '@/shared/lib'
import Footer from './Footer'
import MainLogo from './MainLogo'
import Menu from './Menu'

export default function SideBar() {
  const { isMobileView } = useCheckDevice()
  const [isOpen, setOpen] = useState(false)
  const debouncedOpen = useDebounce(isOpen, 100)
  const sideBarAreaRef = useClickedOutsideOfElement(() => setOpen(false))

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('lock-scroll')
      return
    }
    document.body.classList.remove('lock-scroll')
  }, [isOpen])

  useEffect(() => {
    const handleResize = () => setOpen(false)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <aside>
      <div
        className={`fixed inset-y-0 z-40 ${isOpen ? '-left-72 inline-block opacity-0' : 'hidden'} ${debouncedOpen ? '!left-0 opacity-100' : ''} h-full max-h-dvh overflow-y-auto overscroll-none bg-white transition-[left,opacity] delay-100 duration-300 2xl:inline-block dark:bg-gray-800`}
        ref={(node) => {
          sideBarAreaRef.current = node
        }}>
        <div className="flex min-h-full w-72 flex-col items-start justify-between gap-12 px-4 pb-12 pt-8">
          <div className="w-full">
            <div className="mb-7 flex items-center justify-between">
              <MainLogo />
              <button
                type="button"
                className="relative block rounded-full p-2 text-2xl transition-colors hover:bg-gray-50 2xl:hidden dark:hover:bg-gray-700"
                title="메뉴 닫기"
                onClick={() => setOpen(false)}>
                <span className="blind">메뉴 닫기</span>
                <ChevronDoubleLeftOutline />
              </button>
            </div>
            <Menu handleMenuClick={() => setOpen(false)} />
          </div>
          <Footer handleMenuClick={() => setOpen(false)} />
        </div>
      </div>
      {isOpen && (
        <div
          className={`fixed inset-0 z-30 ${debouncedOpen ? 'opacity-100' : 'opacity-0'} bg-black/30 transition-opacity 2xl:hidden dark:bg-white/20`}
        />
      )}
      <div className="fixed inset-x-0 bottom-0 z-30 h-auto max-h-dvh overflow-y-auto overscroll-none border-t border-gray-100 bg-white px-3 py-2 md:inset-y-0 md:left-0 md:h-full md:w-20 md:border-0 md:px-2 md:pb-12 md:pt-6 dark:border-gray-700 dark:bg-gray-800">
        {!isMobileView && (
          <button
            type="button"
            className="relative mx-auto mb-4 block rounded-full p-2 text-2xl transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
            title="메뉴 열기"
            onClick={() => setOpen(true)}>
            <ChevronDoubleRightOutline />
            <span className="blind">메뉴 열기</span>
          </button>
        )}
        <Menu mini handleMenuClick={() => setOpen(false)} />
      </div>
    </aside>
  )
}
