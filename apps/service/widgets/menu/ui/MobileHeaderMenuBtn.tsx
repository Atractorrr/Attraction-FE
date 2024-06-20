'use client'

import Link from 'next/link'
import {
  ArrowLeftStartOnRectangleOutline,
  BarsOutline,
} from '@attraction/icons'
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from '@attraction/design-system/dist'
import { logout } from '@/entities/auth'
import MobileHeaderBtn from './MobileHeaderBtn'
import { SIDE_MENU } from '../constant'

export default function MobileHeaderMenuBtn() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <MobileHeaderBtn
          icon={<BarsOutline className="text-2xl" />}
          label="메뉴 열기"
        />
      </DrawerTrigger>
      <DrawerContent>
        <div className="scrollbar-hidden h-[64vh] w-full overflow-y-auto px-3 pb-7 pt-5">
          <ul>
            {SIDE_MENU.map(({ segment, name, href, icon: Icon }, i) => (
              <li key={segment} className="peer peer-[]:mt-1">
                {i === 3 && (
                  <div className="m-4 h-px w-[calc(100%-2rem)] bg-gray-100 dark:bg-gray-700" />
                )}
                <Link
                  href={href}
                  title={`메뉴 이동: ${name}`}
                  className="flex w-full items-center gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-gray-50 active:bg-gray-50 dark:hover:bg-gray-700 dark:active:bg-gray-700">
                  <Icon className="text-2xl" />
                  <span className="whitespace-nowrap text-lg">{name}</span>
                </Link>
              </li>
            ))}
            <li className="m-4 h-px w-[calc(100%-2rem)] bg-gray-100 dark:bg-gray-700" />
            <li>
              <button
                type="button"
                title="로그아웃"
                className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-red-400 transition-colors hover:bg-red-50 active:bg-red-50 dark:text-red-300 dark:hover:bg-red-800 dark:active:bg-red-800"
                onClick={logout}>
                <ArrowLeftStartOnRectangleOutline className="text-2xl" />
                <span className="whitespace-nowrap text-lg">로그아웃</span>
              </button>
            </li>
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
