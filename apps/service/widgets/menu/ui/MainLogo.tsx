import Link from 'next/link'
import { MainLogoSVG } from '@/shared/ui'

export default function MainLogo() {
  return (
    <h1 className="relative">
      <Link
        href="/"
        className="block size-full text-gray-800 dark:text-white"
        title="메인페이지로 이동">
        <span className="blind">Attraction</span>
        <MainLogoSVG />
      </Link>
    </h1>
  )
}
