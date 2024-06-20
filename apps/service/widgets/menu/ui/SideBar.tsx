'use client'

import { useEffect, useState } from 'react'
import {
  ChevronDoubleLeftOutline,
  ChevronDoubleRightOutline,
} from '@attraction/icons'
import { useClickedOutsideOfElement } from '@/shared/lib'
import Footer from './Footer'
import MainLogo from './MainLogo'
import Menu from './Menu'

export default function SideBar() {
  const [isOpen, setOpen] = useState(false)
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
    <div
      ref={(node) => {
        sideBarAreaRef.current = node
      }}>
      <div
        className={`fixed inset-y-0 left-0 z-40 ${
          isOpen ? 'inline-block' : 'hidden'
        } h-full max-h-dvh overflow-y-auto bg-white 2xl:inline-block dark:bg-gray-800`}>
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
            <Menu />
          </div>
          <Footer />
        </div>
      </div>
      {isOpen && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          className="fixed inset-0 z-30 bg-black/30 2xl:hidden dark:bg-white/20"
          onClick={() => setOpen(false)}
        />
      )}
      <div className="fixed inset-x-0 bottom-0 z-30 h-auto max-h-dvh overflow-y-auto border-t border-gray-100 bg-white px-3 py-2 md:inset-y-0 md:left-0 md:h-full md:w-20 md:border-0 md:px-2 md:pb-12 md:pt-6 dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-4 hidden items-center justify-center md:flex">
          <button
            type="button"
            className="relative rounded-full p-2 text-2xl transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
            title="메뉴 열기"
            onClick={() => setOpen(true)}>
            <span className="blind">메뉴 열기</span>
            <ChevronDoubleRightOutline />
          </button>
        </div>
        <Menu mini />
      </div>
    </div>
  )
}
