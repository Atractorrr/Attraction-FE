import React from 'react'
import { ImageBox } from '@/shared/ui'

interface CardThumbnailProps {
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
}: CardThumbnailProps) {
  // TODO: clsx cva 적용 필수

  return (
    <div className="relative justify-end overflow-hidden rounded-lg">
      <ImageBox
        width="w-full"
        height="h-[12rem] min-h-40 max-h-60"
        rounded="rounded-lg"
        imgSrc={imgSrc}
        alt={alt}
      />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gray-200">
        <span
          className="absolute inset-y-0 bg-blue-400"
          style={{ width: `${readingPercentage}%` }}
        />
      </div>
      <div className="absolute bottom-2 right-2 w-fit self-end rounded-md bg-black/60 p-1 text-xs text-white ">
        약 {readingTime}분
      </div>
    </div>
  )
}
