import Image from 'next/image'
import React from 'react'

interface ProfileImageProps {
  imaSrc: string
}

export default function ProfileImage({ imaSrc }: ProfileImageProps) {
  return (
    <div className="relative size-full rounded-full bg-gray-100 p-2 dark:bg-gray-700">
      <Image
        src={imaSrc}
        alt="프로필 사진"
        fill
        className="rounded-full object-cover"
      />
    </div>
  )
}
