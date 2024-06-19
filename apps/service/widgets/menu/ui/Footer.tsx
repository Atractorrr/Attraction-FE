import Link from 'next/link'
import { ADMIN_EMAIL } from '@/shared/constant'
import { COPY_RIGHT } from '../constant'

export default function Footer() {
  return (
    <footer className="w-full break-keep text-center text-sm text-gray-500 dark:text-gray-400">
      <ul className="mb-2 flex items-center justify-center">
        <li>
          <Link
            href="/"
            className="hover:text-blue-400 dark:hover:text-blue-300"
            title="이용약관 보기">
            이용약관
          </Link>
        </li>
        <li className="mx-3 h-3 w-px bg-gray-100 dark:bg-gray-700" />
        <li>
          <Link
            href="/"
            className="hover:text-blue-400 dark:hover:text-blue-300"
            title="개인정보처리방침 보기">
            개인정보처리방침
          </Link>
        </li>
      </ul>
      <p>고객지원: {ADMIN_EMAIL}</p>
      <p className="mt-6">&copy; {COPY_RIGHT}</p>
    </footer>
  )
}
