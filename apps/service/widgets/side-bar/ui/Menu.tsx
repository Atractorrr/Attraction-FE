'use client'

import Link from 'next/link'
import { useSelectedLayoutSegments, usePathname } from 'next/navigation'
import { SIDE_MENU } from '../constant'

interface MenuProps {
  mini?: boolean
}

export default function Menu({ mini: isMiniSize }: MenuProps) {
  const pathname = usePathname()
  const segments = useSelectedLayoutSegments()

  return (
    <nav className="w-full">
      <ul
        className={
          isMiniSize
            ? 'flex w-full items-stretch justify-center gap-2 md:flex-col md:justify-start'
            : ''
        }>
        {SIDE_MENU.map(({ name, href, segment, icon: Icon }) => (
          <li
            key={href}
            className={isMiniSize ? 'h-auto w-full grow md:grow-0' : ''}>
            <Link
              href={href}
              className={`flex size-full rounded-lg md:h-auto ${
                isMiniSize
                  ? 'flex-col items-center justify-start gap-2 px-2 pb-3 pt-4 md:justify-center'
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
                    ? 'break-keep text-center text-xs'
                    : 'whitespace-nowrap text-sm'
                }>
                {name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
