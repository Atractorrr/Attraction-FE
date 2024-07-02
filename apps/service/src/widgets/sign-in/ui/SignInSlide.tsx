import Image from 'next/image'
import { ReactNode } from 'react'

interface SignInSlideProps {
  index: number
  description: ReactNode
}

export default function SignInSlide({ index, description }: SignInSlideProps) {
  return (
    <div className="relative flex min-h-[calc(100dvh-340px-2.5rem)] w-[calc(100vw-2.75rem)] flex-col justify-center p-6 pb-8 sm:min-h-[calc(100dvh-428px-2.5rem)] sm:p-8 md:h-60 md:min-h-0 md:flex-row-reverse md:items-start md:justify-between lg:w-[calc(100vw-8.5rem)] xl:block xl:h-full xl:w-[calc(100vw-8.5rem-480px)] xl:max-w-[758px] xl:px-10 xl:py-20">
      <Image
        className="mx-auto mb-6 block h-auto w-full grow object-contain sm:w-80 md:absolute md:bottom-0 md:right-0 md:mb-0 md:w-80 md:grow-0 xl:static xl:mx-auto xl:mb-10 xl:w-4/5 xl:min-w-72 dark:hidden"
        src={`/images/introduce-${index}-light.png`}
        width={900}
        height={600}
        alt={`어트랙션 소개 이미지 ${index}`}
        priority
      />
      <Image
        className="mx-auto mb-6 hidden h-auto w-full grow object-contain sm:w-80 md:absolute md:bottom-0 md:right-0 md:mb-0 md:w-80 md:grow-0 xl:static xl:mx-auto xl:mb-10 xl:w-4/5 xl:min-w-72 dark:block"
        src={`/images/introduce-${index}-dark.png`}
        width={900}
        height={600}
        alt={`어트랙션 소개 이미지 ${index}`}
        priority
      />
      <p className="w-full break-keep pb-12 text-center font-medium sm:text-lg sm:leading-8 md:pb-0 md:text-left md:text-xl xl:text-center xl:leading-10">
        {description}
      </p>
    </div>
  )
}
