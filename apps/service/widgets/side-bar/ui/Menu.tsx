'use client'

import Link from 'next/link'
import { useSelectedLayoutSegments, usePathname } from 'next/navigation'
import { useAuth } from '@/entities/auth'
import { SIDE_MENU } from '../constant'

interface MenuProps {
  mini?: boolean
}

export default function Menu({ mini: isMiniSize }: MenuProps) {
  const { isLogin } = useAuth()
  const pathname = usePathname()
  const segments = useSelectedLayoutSegments()

  return (
    <nav className="w-full">
      <ul
        className={`flex w-full items-stretch justify-center md:flex-col md:justify-start ${
          isMiniSize ? 'gap-2' : 'gap-1'
        }`}>
        {SIDE_MENU.map(
          ({ name, shortName, href, segment, icon: Icon, needLogin }) => (
            <li
              key={href}
              className={`${!isLogin && needLogin ? 'hidden' : ''} ${
                isMiniSize
                  ? `${!shortName ? 'hidden' : ''} h-auto w-full grow md:grow-0`
                  : ''
              }`}>
              <Link
                href={href}
                className={`flex size-full rounded-lg md:h-auto ${
                  isMiniSize
                    ? 'flex-col items-center justify-start gap-1 px-2 pb-1 pt-2 md:justify-center md:gap-2 md:pb-3 md:pt-4'
                    : 'gap-3 p-3'
                } text-xl transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 ${
                  pathname === href || segments.some((s) => s === segment)
                    ? 'bg-gray-50 dark:bg-gray-700'
                    : ''
                }`}
                title={`페이지 이동: ${name}`}>
                <Icon />
                <span
                  className={
                    isMiniSize
                      ? 'flex grow items-center justify-center break-keep text-center text-xs md:block md:grow-0'
                      : 'whitespace-nowrap text-sm'
                  }>
                  <span className="hidden sm:block">{name}</span>
                  <span className="block sm:hidden">{shortName}</span>
                </span>
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  )
}
