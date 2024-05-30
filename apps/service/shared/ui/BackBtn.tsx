import Link from 'next/link'
import { ChevronLeftOutline } from '@attraction/icons'

interface BackBtnProps {
  href: string
}

export default function BackBtn({ href }: BackBtnProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 p-1 text-lg  dark:hover:text-blue-300"
      title="뒤로가기">
      <ChevronLeftOutline />
      <span className="text-base">뒤로</span>
    </Link>
  )
}
