import Image from 'next/image'
import { ReactNode } from 'react'

interface SignInSlideProps {
  index: number
  title: string
  description: ReactNode
}

export default function SignInSlide({
  index,
  title,
  description,
}: SignInSlideProps) {
  return (
    <div className="flex size-full flex-col items-center justify-between">
      <div className="w-full px-5 pb-5 pt-16 text-center">
        <h1 className="mb-4 whitespace-nowrap text-2xl font-bold">{title}</h1>
        <p className="break-keep text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
      <Image
        className="block h-auto w-full object-contain dark:hidden"
        src={`/images/service-introduce-${index}-light.png`}
        width={800}
        height={800}
        alt={`어트랙션 소개 이미지 ${index}`}
        priority
      />
      <Image
        className="hidden h-auto w-full object-contain dark:block"
        src={`/images/service-introduce-${index}-dark.png`}
        width={800}
        height={800}
        alt={`어트랙션 소개 이미지 ${index}`}
        priority
      />
      <div className="mx-auto h-px w-[calc(100%-3.5rem)] bg-gray-100 md:w-[calc(100%-4.5rem)] dark:bg-gray-700" />
    </div>
  )
}
