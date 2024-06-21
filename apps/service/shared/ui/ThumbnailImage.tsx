'use client'

import Image from 'next/image'
import { useState } from 'react'
import MainTextLogoSVG, { MainLogoSVG } from './MainLogoSVG'

interface ThumbnailImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  type: 'article' | 'profile'
  logoType?: 'text' | 'icon'
}

export default function ThumbnailImage({
  src,
  alt,
  width,
  height,
  type,
  logoType,
}: ThumbnailImageProps) {
  const [isError, setError] = useState(false)

  if (!isError) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width ?? type === 'profile' ? 300 : 720}
        height={height ?? type === 'profile' ? 300 : 480}
        className="block size-full object-cover"
        onError={() => setError(true)}
      />
    )
  }
  return (
    <p className="relative flex size-full items-center justify-center bg-gray-200 dark:bg-gray-700">
      {(!logoType && logoType === 'icon') ||
      (!logoType && type === 'profile') ? (
        <MainLogoSVG className="block h-auto w-1/3 text-gray-100 dark:text-gray-600" />
      ) : (
        <MainTextLogoSVG className="block h-auto w-1/3 max-w-48 text-gray-100 dark:text-gray-600" />
      )}
      <span className="blind">대체 이미지: {alt}</span>
    </p>
  )
}
