import Image from 'next/image'
import React from 'react'

interface ProfileImageProps {
  imgSrc: string
}

export default function ProfileImage({ imgSrc }: ProfileImageProps) {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-md bg-gray-100 dark:bg-gray-700">
      <Image
        alt="배경사진"
        src={imgSrc || '/images/default-4x1.jpg'}
        fill
        className="object-cover"
      />
    </div>
  )
}
