import React from 'react'
import * as Shared from '@/shared'

type Props = {
  imgSrc: string
  alt: string
  readingPercentage: number
  readingTime: number
}

export default function CardThumbnail({
  imgSrc,
  alt,
  readingPercentage,
  readingTime,
}: Props) {
  // clsx cva 적용 필수

  return (
    <div className="relative justify-end overflow-hidden rounded-lg">
      <Shared.ImageBox
        width="w-[20vw]"
        height="h-[10vw]"
        rounded="rounded-lg"
        imgSrc={imgSrc}
        alt={alt}
      />
      <div
        className={`absolute bottom-0 h-1 w-full bg-[#DDE0E3] after:block after:h-1.5 ${readingPercentage}  after:bg-[#507FB6] after:content-['']`}
      />
      <div className="absolute bottom-2 right-2 hidden w-fit self-end rounded-md bg-black/60 p-1 text-[12px] font-medium text-white md:block">
        약 {readingTime}분
      </div>
    </div>
  )
}
