import Image from 'next/image'
import React from 'react'
import defaultImage from '@/public/images/default-4x1.jpg'

interface ProfileImageProps {
  imgSrc: string
}

export default function ProfileImage({ imgSrc }: ProfileImageProps) {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-md">
      <Image
        alt="배경사진"
        src={imgSrc === '' ? defaultImage : imgSrc}
        fill
        className="object-cover"
      />
    </div>
  )
}
